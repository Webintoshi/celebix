// Server runtime only. Buyer details and bridge credentials never enter client components.
import { createHash, createHmac } from 'node:crypto';
import { isIP } from 'node:net';

const SITE_ORIGIN = 'https://celebix.net';
const COOKIE_NAME = '__Secure-celebix_platform_checkout';
const OWNER_ORIGINS = new Set(['https://owner.saas-staging.celebix.net', 'https://owner.saas-staging.celebix.site']);
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const STATES = ['created', 'pending', 'approved', 'failed', 'review'] as const;
const PRIVATE_HEADERS = { 'cache-control': 'private, no-store, max-age=0', 'referrer-policy': 'no-referrer', 'x-robots-tag': 'noindex, nofollow, noarchive', 'x-content-type-options': 'nosniff' };

export interface PublicCheckoutOrder {
  id: string; storeId: string; storeName: string; title: string; kind: 'package' | 'tool'; offerId: string;
  term: 'monthly' | 'annual' | 'once'; netCents: number; vatCents: number; totalCents: number; currency: 'TRY';
  state: typeof STATES[number]; expiresAt: string; returnUrl?: string; paymentUrl?: string;
}
export interface CheckoutBuyer {
  id: string; name: string; surname: string; identityNumber: string; email: string; gsmNumber: string;
  registrationAddress: string; city: string; country: string; zipCode?: string;
}
interface OrderSession { orderId: string; sessionDigest: string }
interface StartInput extends OrderSession { attemptId: string; buyer: CheckoutBuyer; ip: string }
export type CheckoutStartResult = { status: 'ready'; paymentUrl: string } | { status: 'pending' | 'failed' | 'unknown'; code?: string };
export interface CommerceBridge {
  redeem(input: OrderSession & { ticketDigest: string }): Promise<{ order: PublicCheckoutOrder }>;
  read(input: OrderSession): Promise<{ order: PublicCheckoutOrder }>;
  start(input: StartInput): Promise<CheckoutStartResult>;
  callback(input: { attemptId: string; token: string }): Promise<{ orderId: string; state: PublicCheckoutOrder['state'] }>;
  webhook(input: { body: string; signature: string }): Promise<{ ok: true }>;
}
interface BridgeOptions { fetch?: typeof fetch; now?: () => Date; timeoutMs?: number }

function invalid(): never { throw new Error('checkout_input_invalid'); }
function record(value: unknown, required: readonly string[], optional: readonly string[] = []): Record<string, unknown> {
  if (!value || typeof value !== 'object' || Array.isArray(value) || ![Object.prototype, null].includes(Object.getPrototypeOf(value))) invalid();
  const allowed = new Set([...required, ...optional]);
  if (required.some(key => !Object.hasOwn(value, key)) || Reflect.ownKeys(value).some(key => typeof key !== 'string' || !allowed.has(key))) invalid();
  return value as Record<string, unknown>;
}
function text(value: unknown, max: number): string {
  if (typeof value !== 'string' || value.length < 1 || value.length > max || value.trim() !== value || /[\u0000-\u001f\u007f\ufffd]/.test(value)) invalid();
  return value;
}
function uuid(value: unknown): string { const result = text(value, 36); if (!UUID.test(result)) invalid(); return result; }
function integer(value: unknown): number { if (!Number.isSafeInteger(value) || (value as number) < 0) invalid(); return value as number; }
function secret(value: unknown): string {
  const result = text(value, 43);
  if (!/^[A-Za-z0-9_-]{43}$/.test(result) || Buffer.from(result, 'base64url').length !== 32 || Buffer.from(result, 'base64url').toString('base64url') !== result) invalid();
  return result;
}
function httpsUrl(value: unknown): URL {
  const raw = text(value, 4096); let url: URL;
  try { url = new URL(raw); } catch { invalid(); }
  if (url.protocol !== 'https:' || url.username || url.password || url.port || url.hash || /[\\\s]/.test(raw)) invalid();
  return url;
}
export function verifiedIyzicoUrl(value: unknown): string {
  const url = httpsUrl(value);
  if (!['cpp.iyzipay.com', 'sandbox-cpp.iyzipay.com'].includes(url.hostname) || url.pathname !== '/') invalid();
  const tokens = url.searchParams.getAll('token'), languages = url.searchParams.getAll('lang');
  if (tokens.length !== 1 || !/^[A-Za-z0-9_-]{36,256}$/.test(tokens[0]) || languages.length > 1 || languages.length === 1 && languages[0] !== 'tr') invalid();
  for (const name of Array.from(url.searchParams.keys())) if (name !== 'token' && name !== 'lang') invalid();
  return value as string;
}
export function parsePublicOrder(value: unknown, expectedOrderId: string): PublicCheckoutOrder {
  uuid(expectedOrderId);
  const row = record(value, ['id', 'storeId', 'storeName', 'title', 'kind', 'offerId', 'term', 'netCents', 'vatCents', 'totalCents', 'currency', 'state', 'expiresAt'], ['returnUrl', 'paymentUrl']);
  if (uuid(row.id) !== expectedOrderId || !['package', 'tool'].includes(row.kind as string) || !['monthly', 'annual', 'once'].includes(row.term as string) || (row.kind === 'tool') !== (row.term === 'once') || row.currency !== 'TRY' || !STATES.includes(row.state as never)) invalid();
  const netCents = integer(row.netCents), vatCents = integer(row.vatCents), totalCents = integer(row.totalCents);
  if (netCents < 1 || totalCents < 1 || !Number.isSafeInteger(netCents + vatCents) || totalCents !== netCents + vatCents || vatCents !== Math.round(netCents / 5)) invalid();
  const expiresAt = text(row.expiresAt, 40);
  if (!/^\d{4}-\d{2}-\d{2}T/.test(expiresAt) || !Number.isFinite(Date.parse(expiresAt))) invalid();
  if (row.returnUrl !== undefined) httpsUrl(row.returnUrl);
  if (row.paymentUrl !== undefined) verifiedIyzicoUrl(row.paymentUrl);
  return { id: expectedOrderId, storeId: uuid(row.storeId), storeName: text(row.storeName, 200), title: text(row.title, 200), kind: row.kind as PublicCheckoutOrder['kind'], offerId: text(row.offerId, 80), term: row.term as PublicCheckoutOrder['term'], netCents, vatCents, totalCents, currency: 'TRY', state: row.state as PublicCheckoutOrder['state'], expiresAt, ...(row.returnUrl !== undefined ? { returnUrl: row.returnUrl as string } : {}), ...(row.paymentUrl !== undefined ? { paymentUrl: row.paymentUrl as string } : {}) };
}
export function bridgeKeyFromEnvironment(env: Record<string, string | undefined>): Buffer {
  return Buffer.from(secret(env.CELEBIX_PLATFORM_COMMERCE_BRIDGE_KEY_B64URL), 'base64url');
}
async function boundedText(stream: ReadableStream<Uint8Array> | null, limit: number): Promise<string> {
  if (!stream) invalid();
  const reader = stream.getReader(); let length = 0; const chunks: Uint8Array[] = [];
  try {
    for (;;) {
      const item = await reader.read(); if (item.done) break;
      length += item.value.byteLength; if (length > limit) { await reader.cancel(); invalid(); }
      chunks.push(item.value);
    }
  } finally { reader.releaseLock(); }
  if (!length) invalid();
  const bytes = new Uint8Array(length); let offset = 0;
  for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
  return new TextDecoder('utf-8', { fatal: true }).decode(bytes);
}
export function createCommerceBridge(env: Record<string, string | undefined>, options: BridgeOptions = {}): CommerceBridge {
  const owner = httpsUrl(env.CELEBIX_PLATFORM_COMMERCE_OWNER_ORIGIN);
  if (!OWNER_ORIGINS.has(owner.origin) || owner.pathname !== '/' || owner.search) invalid();
  const bridgeKey = bridgeKeyFromEnvironment(env), fetcher = options.fetch ?? fetch, now = options.now ?? (() => new Date()), timeoutMs = options.timeoutMs ?? 12000;
  if (!Number.isSafeInteger(timeoutMs) || timeoutMs < 1 || timeoutMs > 20000) invalid();
  async function execute(action: 'redeem' | 'read' | 'start' | 'callback' | 'webhook', payload: object): Promise<unknown> {
    const body = JSON.stringify({ action, payload }); if (Buffer.byteLength(body) > 65536) invalid();
    const instant = now(); if (!(instant instanceof Date) || !Number.isFinite(instant.getTime())) invalid();
    const timestamp = String(Math.floor(instant.getTime() / 1000));
    const signature = createHmac('sha256', bridgeKey).update(`${timestamp}.${body}`).digest('hex');
    const controller = new AbortController();
    let timeout: ReturnType<typeof setTimeout> | undefined;
    // The deadline covers the headers AND streamed body. There is no automatic retry.
    const deadline = new Promise<never>((_, reject) => { timeout = setTimeout(() => { controller.abort(); reject(Error('checkout_unavailable')); }, timeoutMs); });
    try {
      return await Promise.race([deadline, (async () => {
        const response = await fetcher(`${owner.origin}/api/internal/platform-commerce`, { method: 'POST', headers: { 'content-type': 'application/json', accept: 'application/json', 'x-celebix-commerce-timestamp': timestamp, 'x-celebix-commerce-signature': signature }, body, redirect: 'error', cache: 'no-store', credentials: 'omit', signal: controller.signal });
        if (!response.ok || response.redirected || !/^application\/json(?:\s*;|$)/i.test(response.headers.get('content-type') ?? '')) throw Error('checkout_unavailable');
        const declared = response.headers.get('content-length');
        if (declared !== null && (!/^\d+$/.test(declared) || Number(declared) > 131072)) throw Error('checkout_unavailable');
        return JSON.parse(await boundedText(response.body, 131072));
      })()]);
    } catch { throw Error('checkout_unavailable'); }
    finally { if (timeout !== undefined) clearTimeout(timeout); }
  }
  function orderResult(value: unknown, orderId: string): { order: PublicCheckoutOrder } { const row = record(value, ['order']); return { order: parsePublicOrder(row.order, orderId) }; }
  const bridge: CommerceBridge = {
    async redeem(input) { return orderResult(await execute('redeem', input), input.orderId); },
    async read(input) { return orderResult(await execute('read', input), input.orderId); },
    async start(input) {
      const row = record(await execute('start', input), ['status'], ['paymentUrl', 'code']);
      if (row.status === 'ready') { if (row.code !== undefined) invalid(); return { status: 'ready', paymentUrl: verifiedIyzicoUrl(row.paymentUrl) }; }
      if (!['pending', 'failed', 'unknown'].includes(row.status as string) || row.paymentUrl !== undefined) invalid();
      if (row.code !== undefined && !/^[a-z][a-z0-9_]{0,79}$/.test(text(row.code, 80))) invalid();
      return { status: row.status as 'pending' | 'failed' | 'unknown', ...(row.code !== undefined ? { code: row.code as string } : {}) };
    },
    async callback(input) {
      const row = record(await execute('callback', input), ['orderId', 'state']);
      if (!STATES.includes(row.state as never)) invalid();
      return { orderId: uuid(row.orderId), state: row.state as PublicCheckoutOrder['state'] };
    },
    async webhook(input) {
      checkedWebhookAcknowledgment(await execute('webhook', input));
      return { ok: true };
    },
  };
  return Object.freeze(bridge);
}
export function deriveCheckoutSession(bridgeKey: Buffer, orderId: string, handoff: string): string {
  if (bridgeKey.length !== 32) invalid(); uuid(orderId); secret(handoff);
  return createHmac('sha256', bridgeKey).update(`session:v1:${orderId}:${handoff}`).digest('base64url');
}
export function checkoutCookie(orderId: string, session: string): string {
  uuid(orderId); secret(session);
  return `${COOKIE_NAME}=${session}; Path=/checkout/saas/${orderId}; Max-Age=86400; HttpOnly; Secure; SameSite=Lax`;
}
export function readCheckoutSession(cookieHeader: string | null): string {
  if (!cookieHeader || cookieHeader.length > 8192) invalid();
  const matches = cookieHeader.split(';').map(item => item.trim()).filter(item => item.startsWith(`${COOKIE_NAME}=`));
  if (matches.length !== 1) invalid(); return secret(matches[0].slice(COOKIE_NAME.length + 1));
}
function digest(value: string): string { return createHash('sha256').update(value).digest('hex'); }
export async function loadCheckoutOrder(orderId: string, session: string | undefined, bridge: Pick<CommerceBridge, 'read'>): Promise<PublicCheckoutOrder> {
  uuid(orderId); secret(session);
  const result = await bridge.read({ orderId, sessionDigest: digest(session!) });
  return parsePublicOrder(result.order, orderId);
}
export function trustedClientIp(headers: Headers): string {
  const ip = headers.get('cf-connecting-ip') ?? headers.get('x-real-ip');
  if (!ip || !isIP(ip)) invalid(); return ip;
}
function validIdentityNumber(value: string): boolean {
  if (!/^[1-9]\d{10}$/.test(value)) return false;
  const n = Array.from(value).map(Number);
  return (((n[0] + n[2] + n[4] + n[6] + n[8]) * 7 - (n[1] + n[3] + n[5] + n[7])) % 10 + 10) % 10 === n[9] && n.slice(0, 10).reduce((sum, digit) => sum + digit, 0) % 10 === n[10];
}
export function parseBuyerForm(fields: Record<string, string>, orderId: string): { attemptId: string; buyer: CheckoutBuyer } {
  const row = record(fields, ['attemptId', 'name', 'surname', 'identityNumber', 'email', 'gsmNumber', 'registrationAddress', 'city', 'country', 'terms'], ['zipCode']);
  if (row.terms !== 'accepted') invalid();
  const identityNumber = text(row.identityNumber, 11), email = text(row.email, 254), gsmNumber = text(row.gsmNumber, 16);
  if (!validIdentityNumber(identityNumber) || !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) || !/^\+[1-9]\d{7,14}$/.test(gsmNumber)) invalid();
  const zipCode = row.zipCode ? text(row.zipCode, 20) : undefined;
  return { attemptId: uuid(row.attemptId), buyer: { id: uuid(orderId), name: text(row.name, 64), surname: text(row.surname, 64), identityNumber, email, gsmNumber, registrationAddress: text(row.registrationAddress, 500), city: text(row.city, 100), country: text(row.country, 100), ...(zipCode ? { zipCode } : {}) } };
}
async function formFields(request: Request, maxBytes: number): Promise<Record<string, string>> {
  if (!/^application\/x-www-form-urlencoded(?:\s*;\s*charset=utf-8)?$/i.test(request.headers.get('content-type') ?? '') || request.headers.has('transfer-encoding')) invalid();
  const declared = request.headers.get('content-length');
  if (declared !== null && (!/^(0|[1-9]\d*)$/.test(declared) || Number(declared) > maxBytes)) invalid();
  const body = await boundedText(request.body, maxBytes);
  if (declared !== null && Buffer.byteLength(body) !== Number(declared)) invalid();
  const result: Record<string, string> = Object.create(null);
  for (const part of body.split('&')) {
    const separator = part.indexOf('='); if (separator < 1) invalid();
    const name = decodeURIComponent(part.slice(0, separator).replace(/\+/g, ' ')), value = decodeURIComponent(part.slice(separator + 1).replace(/\+/g, ' '));
    if (Object.hasOwn(result, name)) invalid(); result[name] = value;
  }
  return result;
}
function validRequest(request: Request, pathname: string): void {
  const url = new URL(request.url);
  if (request.method !== 'POST' || url.origin !== SITE_ORIGIN || url.pathname !== pathname || url.search || url.hash || url.username || url.password) invalid();
  for (const name of Array.from(request.headers.keys())) if (['authorization', 'x-store-id', 'x-tenant-id', 'x-principal-id', 'x-membership-id', 'x-plan-id', 'x-panel-session-credential'].includes(name) || name.startsWith('x-celebix')) invalid();
}
function redirectTo(path: string): Response { return new Response(null, { status: 303, headers: { ...PRIVATE_HEADERS, location: `${SITE_ORIGIN}${path}` } }); }
function failure(status = 400): Response { return new Response(status === 503 ? 'Ödeme hizmetine şu anda ulaşılamıyor. Mağaza panelinizden aynı işlemin durumunu kontrol edin.' : 'Ödeme bilgileri doğrulanamadı. Mağaza panelinizden satın alma işlemini yeniden açın.', { status, headers: { ...PRIVATE_HEADERS, 'content-type': 'text/plain; charset=utf-8' } }); }
function checkedWebhookAcknowledgment(value: unknown): void {
  if (record(value, ['ok']).ok !== true) invalid();
}
function webhookFailure(status: 400 | 503): Response { return Response.json({ ok: false }, { status, headers: PRIVATE_HEADERS }); }
function duplicateJsonKeys(raw: string): boolean {
  const stack: Array<{ keys: Set<string>; expectingKey: boolean } | null> = [];
  for (const value of raw.match(/"(?:[^"\\]|\\.)*"|[{}\[\]:,]/g) ?? []) {
    const current = stack[stack.length - 1];
    if (value === '{') stack.push({ keys: new Set(), expectingKey: true });
    else if (value === '[') stack.push(null);
    else if (value === '}' || value === ']') stack.pop();
    else if (value === ',' && current) current.expectingKey = true;
    else if (value.startsWith('"') && current?.expectingKey) {
      const key = JSON.parse(value) as string;
      if (current.keys.has(key)) return true;
      current.keys.add(key); current.expectingKey = false;
    }
  }
  return false;
}
async function webhookBody(request: Request): Promise<string> {
  const limit = 16384, declared = request.headers.get('content-length');
  if (!/^application\/json(?:\s*;\s*charset=utf-8)?$/i.test(request.headers.get('content-type') ?? '') || request.headers.has('content-encoding')
    || declared !== null && (!/^(0|[1-9]\d*)$/.test(declared) || Number(declared) > limit)) invalid();
  if (!request.body) invalid();
  const reader = request.body.getReader(); let timer: ReturnType<typeof setTimeout> | undefined, expired = false;
  try {
    return await Promise.race([(async () => {
      const chunks: Uint8Array[] = []; let size = 0;
      for (;;) {
        const item = await reader.read(); if (item.done) break;
        size += item.value.byteLength;
        if (size > limit) { void reader.cancel().catch(() => {}); invalid(); }
        chunks.push(item.value);
      }
      if (expired || !size || declared !== null && Number(declared) !== size) invalid();
      // Preserve every UTF-8 byte; a BOM is retained and then rejected as invalid JSON.
      const body = new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(Buffer.concat(chunks, size));
      const value: unknown = JSON.parse(body);
      if (!value || typeof value !== 'object' || Array.isArray(value) || duplicateJsonKeys(body)) invalid();
      return body;
    })(), new Promise<never>((_, reject) => { timer = setTimeout(() => { expired = true; reject(Error('checkout_input_invalid')); void reader.cancel().catch(() => {}); }, 2000); })]);
  } finally { if (timer !== undefined) clearTimeout(timer); reader.releaseLock(); }
}
export function createCheckoutHttpHandlers(deps: { bridge: CommerceBridge; bridgeKey: Buffer }) {
  return {
    async handoff(request: Request): Promise<Response> {
      let orderId: string, handoff: string, session: string;
      try {
        validRequest(request, '/api/platform-checkout/handoff');
        const origin = httpsUrl(request.headers.get('origin')); if (origin.origin !== request.headers.get('origin')) invalid();
        const fields = record(await formFields(request, 2048), ['orderId', 'handoff']);
        orderId = uuid(fields.orderId); handoff = secret(fields.handoff); session = deriveCheckoutSession(deps.bridgeKey, orderId, handoff);
      } catch { return failure(); }
      try {
        const { order } = await deps.bridge.redeem({ orderId, ticketDigest: digest(handoff), sessionDigest: digest(session) });
        parsePublicOrder(order, orderId);
        const response = redirectTo(`/checkout/saas/${orderId}`); response.headers.set('set-cookie', checkoutCookie(orderId, session)); return response;
      } catch { return failure(503); }
    },
    async pay(request: Request, orderId: string): Promise<Response> {
      let input: StartInput;
      try {
        uuid(orderId); validRequest(request, `/checkout/saas/${orderId}/pay`);
        if (request.headers.get('origin') !== SITE_ORIGIN) invalid();
        const session = readCheckoutSession(request.headers.get('cookie'));
        const buyer = parseBuyerForm(await formFields(request, 16384), orderId);
        input = { orderId, sessionDigest: digest(session), ...buyer, ip: trustedClientIp(request.headers) };
      } catch { return failure(); }
      try {
        const result = await deps.bridge.start(input);
        if (result.status === 'ready') return new Response(null, { status: 303, headers: { ...PRIVATE_HEADERS, location: verifiedIyzicoUrl(result.paymentUrl) } });
      } catch { /* An uncertain initialize must never be replayed here. Read this exact order. */ }
      return redirectTo(`/checkout/saas/${orderId}/result`);
    },
    async callback(request: Request, attemptId: string): Promise<Response> {
      let token: string;
      try {
        uuid(attemptId); validRequest(request, `/api/platform-payments/iyzico/callback/${attemptId}`);
        const fields = record(await formFields(request, 8192), ['token']); token = text(fields.token, 4096);
      } catch { return failure(); }
      try {
        const result = await deps.bridge.callback({ attemptId, token }); uuid(result.orderId);
        if (!STATES.includes(result.state)) invalid();
        return redirectTo(`/checkout/saas/${result.orderId}/result`);
      } catch { return failure(503); }
    },
    async webhook(request: Request): Promise<Response> {
      let body: string, signature: string;
      try {
        validRequest(request, '/api/platform-payments/iyzico/webhook');
        signature = request.headers.get('x-iyz-signature-v3') ?? '';
        if (!/^[0-9a-f]{64}$/.test(signature)) invalid();
        body = await webhookBody(request);
      } catch { return webhookFailure(400); }
      try {
        checkedWebhookAcknowledgment(await deps.bridge.webhook({ body, signature }));
        return Response.json({ ok: true }, { status: 200, headers: PRIVATE_HEADERS });
      } catch { return webhookFailure(503); }
    },
  };
}
