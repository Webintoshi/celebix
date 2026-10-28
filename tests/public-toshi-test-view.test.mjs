import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import test from 'node:test';

const require = createRequire(import.meta.url), React = require('react'), ts = require('typescript');
const { renderToStaticMarkup } = require('react-dom/server');
const form = { operationId: '6dff42f4-4e19-405e-84d2-1d6f2ae33001', expires: '1793188800', proof: 'a'.repeat(43) };
function load(relative, overrides = {}) {
  const filename = new URL('../' + relative, import.meta.url), localRequire = createRequire(filename);
  let source; try { source = readFileSync(filename, 'utf8'); } catch (error) { if (error.code === 'ENOENT') return {}; throw error; }
  const output = ts.transpileModule(source, { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
  const compiled = { exports: {} };
  new Function('require', 'module', 'exports', output)(name => {
    if (Object.hasOwn(overrides, name)) return overrides[name];
    if (name === './CheckoutProductVisual') return load('components/platform-checkout/CheckoutProductVisual.tsx', overrides);
    if (name === '@/components/platform-checkout/PublicToshiTestView') return load('components/platform-checkout/PublicToshiTestView.tsx', overrides);
    return localRequire(name);
  }, compiled, compiled.exports);
  return compiled.exports;
}
function render(props = { form }) {
  const View = load('components/platform-checkout/PublicToshiTestView.tsx').PublicToshiTestView;
  assert.equal(typeof View, 'function', 'public store entry is available without panel authentication');
  return renderToStaticMarkup(React.createElement(View, props));
}
test('guest test entry posts exactly one store field and the three server-issued form values', () => {
  const html = render(), formHtml = html.match(/<form[\s\S]*?<\/form>/)?.[0]; assert.ok(formHtml);
  assert.match(formHtml, /<form(?=[^>]*action="\/api\/platform-checkout\/public-test")(?=[^>]*method="post")[^>]*>/);
  const inputs = [...formHtml.matchAll(/<input\b[^>]*>/g)].map(match => match[0]);
  assert.equal(inputs.length, 4);
  const visible = inputs.filter(tag => !tag.includes('type="hidden"')); assert.equal(visible.length, 1);
  assert.match(visible[0], /name="store"/); assert.match(visible[0], /required=""/); assert.match(visible[0], /maxLength="253"/);
  assert.match(visible[0], /placeholder="ezmeo.com veya mağaza adınız"/); assert.ok(html.includes('Mağaza adresi'));
  for (const [name, value] of Object.entries(form)) assert.ok(inputs.some(tag => tag.includes('type="hidden"') && tag.includes(`name="${name}"`) && tag.includes(`value="${value}"`)));
  assert.equal((formHtml.match(/type="submit"/g) ?? []).length, 1);
  for (const name of ['storeId', 'amountCents', 'credits', 'offerId', 'term', 'cardNumber', 'cvv', 'terms']) assert.ok(!formHtml.includes(`name="${name}"`));
  assert.ok(!/checked=|novalidate|onsubmit|onclick/i.test(formHtml));
});
test('guest entry reuses the real product pass and explains the one-credit verified payment total', () => {
  const html = render();
  assert.match(html, /data-checkout-shell=""/); assert.match(html, /data-checkout-product-visual=""/);
  assert.match(html, /<img(?=[^>]*src="\/Logo\/koyu logo.svg")(?=[^>]*alt="Celebix")/);
  assert.match(html, /<img(?=[^>]*src="\/payments\/toshi\/toshi-test-1-v1.webp")(?=[^>]*class="[^"]*object-contain)/);
  for (const text of ['1 Toshi kredisi', '₺1,00', '₺0,83', '₺0,17', 'KDV dahil', 'Ödeme doğrulandığında', 'iyzico']) assert.ok(html.includes(text), text);
  assert.ok(!html.includes('/login')); assert.ok(!html.includes('Panelden')); assert.ok(!html.includes('paneline'));
  for (const slug of ['kullanim-kosullari', 'gizlilik', 'teslimat-ve-iade']) assert.ok(html.includes(`href="/tr/${slug}"`));
});
test('guest entry shows only friendly allowlisted error copy and preserves explicit native resubmission', () => {
  for (const code of ['invalid_store', 'rate_limited', 'unavailable', 'invalid_form']) {
    const html = render({ form, error: code }); assert.match(html, /role="alert"/); assert.ok(html.includes('<form'));
    assert.ok(!html.includes('>' + code + '<')); assert.ok(!html.includes('checked='));
  }
  for (const error of ['<script>private</script>', 'constructor', 'toString']) {
    const html = render({ form, error }); assert.ok(!html.includes('role="alert"')); assert.ok(!html.includes(error));
  }
});
test('the guest page signs a fresh form on the server and allowlists query error text', () => {
  const calls = [], key = Buffer.alloc(32, 1);
  const Page = load('app/checkout/saas/toshi-test/page.tsx', {
    '@/lib/platform-checkout/server': { bridgeKeyFromEnvironment: () => key },
    '@/lib/platform-checkout/public-test': { createPublicTestForm: (...args) => { calls.push(args); return form; } },
  });
  assert.equal(typeof Page.default, 'function'); assert.equal(Page.runtime, 'nodejs'); assert.equal(Page.dynamic, 'force-dynamic');
  const result = Page.default({ searchParams: { error: 'invalid_store' } });
  assert.deepEqual(result.props.form, form); assert.equal(result.props.error, 'invalid_store');
  assert.equal(calls.length, 1); assert.equal(calls[0][0], key); assert.ok(calls[0][1] instanceof Date);
  assert.match(calls[0][2], /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  for (const error of ['private', '<script>', ['invalid_store']]) assert.equal(Page.default({ searchParams: { error } }).props.error, undefined);
});
test('missing checkout configuration returns a quiet unavailable view without secrets or a form', () => {
  const Page = load('app/checkout/saas/toshi-test/page.tsx', {
    '@/lib/platform-checkout/server': { bridgeKeyFromEnvironment: () => { throw Error('PRIVATE_CONFIG_VALUE'); } },
    '@/lib/platform-checkout/public-test': { createPublicTestForm: () => assert.fail('cannot sign without configuration') },
  });
  assert.equal(typeof Page.default, 'function');
  const html = renderToStaticMarkup(Page.default({}));
  assert.ok(html.includes('şu anda')); assert.ok(!html.includes('<form')); assert.ok(!html.includes('PRIVATE_CONFIG_VALUE')); assert.ok(!html.includes('/login'));
});
