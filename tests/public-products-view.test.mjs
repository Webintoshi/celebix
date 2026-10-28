import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url), React = require('react');
const { renderToStaticMarkup } = require('react-dom/server'), ts = require('typescript');
const root = fileURLToPath(new URL('../', import.meta.url));
function load(relative) {
  const filename = path.join(root, relative), localRequire = createRequire(filename);
  const output = ts.transpileModule(readFileSync(filename, 'utf8'), { compilerOptions: { jsx: ts.JsxEmit.ReactJSX, module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022, esModuleInterop: true } }).outputText;
  const module = { exports: {} };
  new Function('require', 'module', 'exports', output)(specifier => {
    if (specifier === '@/components/commerce-v6/CommerceLanding') return { __esModule: true, default: () => React.createElement('div', { 'data-testid': 'commerce-landing' }, 'Existing demo') };
    if (specifier === '@/components/commerce-v6/LegacyEcommercePage') return { __esModule: true, default: () => React.createElement('div', { 'data-testid': 'legacy-ecommerce' }, 'Historic payment return') };
    if (specifier === '@/components/SchemaScript') return Object.fromEntries(['OrganizationSchema', 'BreadcrumbSchema', 'EcommerceProductSchema', 'FAQSchema'].map(name => [name, () => null]));
    if (specifier.startsWith('@/') && /\.(?:json|mjs)$/.test(specifier)) return localRequire(path.join(root, specifier.slice(2)));
    if (specifier.startsWith('@/')) return load(specifier.slice(2) + '.tsx');
    return localRequire(specifier);
  }, module, module.exports);
  return module.exports;
}
function render(locale = 'tr', checkout) {
  const Page = load('app/[locale]/e-ticaret-paketleri/page.tsx').default;
  const Layout = load('app/[locale]/e-ticaret-paketleri/layout.tsx').default;
  return renderToStaticMarkup(React.createElement(Layout, { params: { locale } }, React.createElement(Page, { params: { locale }, searchParams: checkout ? { checkout } : {} })));
}
test('the Turkish page server-renders plans and credits without store tools after its isolated demo', () => {
  const html = render();
  assert.equal((html.match(/data-public-product=/g) ?? []).length, 9);
  assert.ok(html.indexOf('data-testid="commerce-landing"') < html.indexOf('id="paketler"'));
  assert.ok(!html.includes('id="magaza-araclari"')); assert.ok(!html.includes('Mağaza araçları')); assert.ok(html.includes('id="toshi-kredileri"'));
  assert.equal((html.match(/data-public-kind="package"/g) ?? []).length, 4);
  assert.equal((html.match(/data-public-kind="tool"/g) ?? []).length, 0);
  assert.equal((html.match(/data-public-kind="toshi_credit"/g) ?? []).length, 5);
  for (const seats of ['1 kullanıcı', '2 kullanıcı', '5 kullanıcı', '15 kullanıcı']) assert.ok(html.includes(seats));
  assert.equal((html.match(/Özel alan adı bağlama/g) ?? []).length, 3);
  assert.ok(html.includes('Celebix mağaza adresi'));
  const free = html.match(/<article(?=[^>]*id="urun-paket-free_starter")[\s\S]*?<\/article>/)?.[0];
  assert.ok(free?.includes('Süresiz ücretsiz')); assert.ok(!free.includes('/ ay')); assert.ok(!free.includes('/ yıl')); assert.ok(!free.includes('KDV dahil'));
  assert.ok(!html.includes('4 özel alan adı')); assert.ok(!html.includes('personel'));
  assert.ok(!html.includes('19.000')); assert.ok(!html.includes('buy.polar.sh'));
});
test('catalog prices disclose actual VAT-inclusive monthly, annual and one-time totals', () => {
  const html = render();
  for (const total of ['3.104,40', '31.044,00', '5.444,40', '54.444,00', '9.344,40', '93.444,00', '1,00', '298,80', '1.198,80', '3.598,80', '14.998,80']) assert.ok(html.includes(total), total);
  assert.ok(html.includes('KDV dahil')); assert.ok(!html.includes('KDV hariç'));
  const starter = html.match(/<article(?=[^>]*id="urun-paket-starter")[\s\S]*?<\/article>/)?.[0];
  assert.ok(starter.indexOf('3.104,40') < starter.indexOf('Kataloğunuzu'));
  assert.ok(starter.indexOf('3.104,40') < starter.indexOf('1.000 ürün'));
  assert.match(html, /<button(?=[^>]*aria-pressed="true")[^>]*>Aylık<\/button>/);
  assert.match(html, /<button(?=[^>]*aria-pressed="false")[^>]*>Yıllık<\/button>/);
  assert.ok(!html.includes('Sınırsız')); assert.ok(!html.includes('kredi / görsel'));
});
test('catalog purchase links use the verified store entry and leave legal navigation to the global footer', () => {
  const html = render();
  assert.equal((html.match(/href="https:\/\/panel\.saas-staging\.celebix\.net\/login"/g) ?? []).length, 7);
  assert.equal((html.match(/href="https:\/\/kayit\.celebix\.net\/"/g) ?? []).length, 1);
  const Footer = load('components/ServicePolicyFooter.tsx').default;
  const combined = html + renderToStaticMarkup(React.createElement(Footer, { locale: 'tr' }));
  for (const slug of ['teslimat-ve-iade', 'kullanim-kosullari', 'gizlilik', 'iletisim']) {
    assert.ok(!html.includes(`href="/tr/${slug}"`));
    assert.equal(combined.split(`href="/tr/${slug}"`).length - 1, 1);
  }
  assert.ok(html.includes('Panelden satın al')); assert.ok(html.includes('1 TL ile satın al')); assert.equal((html.match(/href="\/checkout\/saas\/toshi-test"/g) ?? []).length, 1); assert.ok(html.includes('Satın alımlar iyzico ile tamamlanır.'));
  assert.ok(!html.includes('/login?purchase='));
  assert.ok(!html.includes('<form')); assert.ok(!html.includes('offerId='));
});
test('existing English and historic success-return composition remains intact', () => {
  for (const html of [render('en'), render('tr', 'success')]) {
    assert.ok(html.includes('data-testid="legacy-ecommerce"')); assert.ok(!html.includes('data-public-product='));
    assert.ok(!html.includes('"@type":"ItemList"'), 'historic and English pages must not advertise hidden catalog products');
  }
});
test('both the fixed header and introduction expose direct catalog anchors', () => {
  const source = readFileSync(path.join(root, 'components/commerce-v6/markup.ts'), 'utf8');
  const markup = JSON.parse(source.split('export const commerceMarkup = ')[1].trim().replace(/;$/, ''));
  const header = markup.match(/<header class="site-header">[\s\S]*?<\/header>/)?.[0];
  const intro = markup.match(/<article class="copy intro"[\s\S]*?<\/article>/)?.[0];
  for (const section of [header, intro]) assert.match(section, /<a(?=[^>]*href="#paketler")[^>]*>Paketler ve fiyatlar<\/a>/);
});
