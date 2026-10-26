import 'server-only';
import { bridgeKeyFromEnvironment, createCheckoutHttpHandlers, createCommerceBridge } from './server';

export function checkoutBridge() { return createCommerceBridge(process.env); }
export async function handleCheckoutRequest(action: 'handoff' | 'pay' | 'callback' | 'webhook', request: Request, id?: string): Promise<Response> {
  try {
    const handlers = createCheckoutHttpHandlers({ bridge: checkoutBridge(), bridgeKey: bridgeKeyFromEnvironment(process.env) });
    if (action === 'handoff') return handlers.handoff(request);
    if (action === 'pay') return handlers.pay(request, id ?? '');
    if (action === 'webhook') return handlers.webhook(request);
    return handlers.callback(request, id ?? '');
  } catch {
    if (action === 'webhook') return Response.json({ ok: false }, { status: 503, headers: { 'cache-control': 'private, no-store', 'referrer-policy': 'no-referrer', 'x-robots-tag': 'noindex, nofollow' } });
    return new Response('Ödeme hizmeti şu anda kullanılamıyor. Mağaza panelinizden aynı işlemin durumunu kontrol edin.', { status: 503, headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'private, no-store', 'referrer-policy': 'no-referrer', 'x-robots-tag': 'noindex, nofollow' } });
  }
}
