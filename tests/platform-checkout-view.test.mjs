import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import test from 'node:test';
import vm from 'node:vm';

const require=createRequire(import.meta.url);
const analytics=await import('../lib/platform-checkout/analytics.ts').catch(()=>({}));
const id='8fa9f2b4-3bd4-4ed2-84c5-311747e922d7';
const attemptId='b77a7eb5-bd97-4d2f-879b-7b9131163396';
const order={id,storeId:'e264235b-5c30-4b30-8c0d-2b229f336466',storeName:'Örnek mağaza',title:'Başlangıç',kind:'package',offerId:'00000000-0000-4000-8000-000000000008',term:'annual',netCents:2587000,vatCents:517400,totalCents:3104400,currency:'TRY',state:'created',expiresAt:'2026-10-27T08:00:00Z'};
function render(props){
 const ts=require('typescript'),React=require('react'),{renderToStaticMarkup}=require('react-dom/server');
 const path=new URL('../components/platform-checkout/CheckoutView.tsx',import.meta.url);
 const output=ts.transpileModule(readFileSync(path,'utf8'),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 const compiled={exports:{}};new Function('require','module','exports',output)(createRequire(path),compiled,compiled.exports);
 return renderToStaticMarkup(React.createElement(compiled.exports.CheckoutView,props));
}
test('billing form shows frozen totals and store with scoped action and one render-generated operation',()=>{
 const html=render({order,attemptId});
 assert.ok(html.includes('Örnek mağaza'));assert.ok(html.includes('Başlangıç'));assert.ok(html.includes('Yıllık peşin ödeme'));
 assert.ok(html.includes('25.870,00'));assert.ok(html.includes('5.174,00'));assert.ok(html.includes('31.044,00'));
 assert.ok(html.includes(`action="/checkout/saas/${id}/pay"`));assert.ok(html.includes(`name="attemptId" value="${attemptId}"`));
 for(const forbidden of ['name="cardNumber"','name="cvv"','name="amountCents"','name="storeId"','name="sessionDigest"','name="identity"'])assert.ok(!html.includes(forbidden));
 assert.match(html,/<input(?=[^>]*type="checkbox")(?=[^>]*name="terms")(?=[^>]*required="")[^>]*>/);
 assert.ok(!html.includes('checked=""'));assert.ok(html.includes('/tr/gizlilik'));assert.ok(html.includes('/tr/kullanim-kosullari'));
});
test('checkout explicitly identifies the receiving store and uses local product art without accepting store authority',()=>{
 const packageHtml=render({order,attemptId});
 assert.ok(packageHtml.includes('Satın alan mağaza'));
 assert.ok(packageHtml.includes('Paket ve araçlar bu mağazaya tanımlanır.'));
 assert.match(packageHtml,/<img(?=[^>]*src="\/payments\/plans\/celebix-starter-v1.webp")(?=[^>]*alt="Başlangıç")/);
 assert.match(packageHtml,/<img(?=[^>]*src="\/payments\/plans\/celebix-starter-v1.webp")(?=[^>]*class="[^"]*object-contain)/, 'package artwork remains uncropped in checkout');
 const toolHtml=render({order:{...order,kind:'tool',offerId:'all_tools',term:'once',title:'Tüm mağaza araçları'},attemptId});
 assert.match(toolHtml,/<img(?=[^>]*src="\/payments\/celebix-tools.jpg")(?=[^>]*alt="Tüm mağaza araçları")/);
 assert.ok(toolHtml.includes('Örnek mağaza mağazası için'));
 assert.ok(!toolHtml.includes('name="storeId"'));
});
test('package artwork follows immutable offer identity while unknown historic offers keep the generic image',()=>{
 for(const [offerId,code]of [['00000000-0000-4000-8000-000000000009','growth'],['00000000-0000-4000-8000-000000000010','professional'],['00000000-0000-4000-8000-000000000004','starter'],['00000000-0000-4000-8000-000000000005','growth'],['00000000-0000-4000-8000-000000000006','professional']])assert.ok(render({order:{...order,offerId},attemptId}).includes(`src="/payments/plans/celebix-${code}-v1.webp"`));
 const unknown=render({order:{...order,offerId:'00000000-0000-4000-8000-000000000099'},attemptId});assert.ok(unknown.includes('src="/payments/celebix-package.jpg"'));
});
test('credit checkout shows purchased credits, frozen totals and the receiving store without new authority inputs',()=>{
 const offers=[
  {offerId:'toshi-500',count:'500',netCents:24900,vatCents:4980,totalCents:29880,total:'298,80'},
  {offerId:'toshi-2500',count:'2.500',netCents:99900,vatCents:19980,totalCents:119880,total:'1.198,80'},
  {offerId:'toshi-10000',count:'10.000',netCents:299900,vatCents:59980,totalCents:359880,total:'3.598,80'},
  {offerId:'toshi-50000',count:'50.000',netCents:1249900,vatCents:249980,totalCents:1499880,total:'14.998,80'},
 ];
 for(const {count,total,...offer} of offers){
  const html=render({order:{...order,...offer,kind:'toshi_credit',term:'once',title:'Toshi kredi paketi'},attemptId});
  assert.ok(html.includes(`${count} Toshi kredisi`));assert.ok(html.includes('Örnek mağaza mağazası için'));
  assert.ok(html.includes('Toshi kredileri bu mağazanın bakiyesine eklenir.'));
  assert.ok(html.includes('Tek seferlik ödeme'));assert.ok(html.includes('KDV (%20)'));assert.ok(html.includes(total));
  assert.match(html,/<img(?=[^>]*src="\/payments\/toshi-credit.svg")/);
  assert.ok(html.includes(`action="/checkout/saas/${id}/pay"`));
  for(const name of ['credits','creditCount','storeId','amountCents','offerId'])assert.ok(!html.includes(`name="${name}"`));
  assert.match(html,/<input(?=[^>]*type="checkbox")(?=[^>]*name="terms")(?=[^>]*required="")[^>]*>/);
  assert.ok(!html.includes('bakiyesine eklendi.'));assert.ok(!html.includes('checked=""'));
 }
});
test('only a verified approved credit result confirms the purchased credit balance was granted',()=>{
 const creditOrder={...order,kind:'toshi_credit',offerId:'toshi-2500',term:'once',title:'Toshi kredi paketi',netCents:99900,vatCents:19980,totalCents:119880};
 const approved=render({order:{...creditOrder,state:'approved'},result:true});
 assert.ok(approved.includes('2.500 Toshi kredisi Örnek mağaza mağazanızın bakiyesine eklendi.'));
 assert.ok(!approved.includes('paket veya araçlar'));assert.ok(!approved.includes('<form'));
 for(const state of ['created','pending','failed','review']){
  const html=render({order:{...creditOrder,state},result:true});
  assert.ok(!html.includes('bakiyesine eklendi.'));assert.ok(!html.includes('<form'));
 }
});
test('only an approved result confirms automatic activation for the named store',()=>{
 const approved=render({order:{...order,state:'approved'},result:true});
 assert.ok(approved.includes('Örnek mağaza mağazanızda kullanıma hazır.'));
 for(const state of ['created','pending','failed','review']){
  assert.ok(!render({order:{...order,state},result:true}).includes('mağazanızda kullanıma hazır.'));
 }
});
test('results expose explicit approved/pending/failed/review states without starting or polling a payment',()=>{
 const messages={approved:'Ödeme doğrulandı',pending:'Ödeme doğrulaması bekleniyor',failed:'Ödeme tamamlanamadı',review:'Ödemeniz inceleniyor'};
 for(const [state,message] of Object.entries(messages)){
  const html=render({order:{...order,state},result:true});
  assert.ok(html.includes(message));assert.ok(!html.includes('<form'));assert.ok(html.includes(`/checkout/saas/${id}/result`));assert.ok(!html.includes('<script'));assert.ok(!html.includes('http-equiv="refresh"'));
 }
 const expired=render({order,attemptId,expired:true});assert.ok(!expired.includes('<form'));assert.ok(expired.includes('süresi doldu'));
});
test('only a verified failure offers an explicit fresh form retry while pending remains closed',()=>{
 const failed=render({order:{...order,state:'failed'},attemptId});
 assert.ok(failed.includes('<form'));assert.ok(failed.includes(`name="attemptId" value="${attemptId}"`));
 assert.match(failed,/<input(?=[^>]*name="name")(?=[^>]*maxLength="64")[^>]*>/);
 assert.match(failed,/<input(?=[^>]*name="surname")(?=[^>]*maxLength="64")[^>]*>/);
 const failedResult=render({order:{...order,state:'failed'},result:true});
 assert.ok(!failedResult.includes('<form'));assert.ok(failedResult.includes('Ödemeyi yeniden dene'));assert.ok(failedResult.includes(`href="/checkout/saas/${id}"`));
 const pending=render({order:{...order,state:'pending'},attemptId});assert.ok(!pending.includes('<form'));assert.ok(!pending.includes('Ödemeyi yeniden dene'));
 const expired=render({order:{...order,state:'failed'},attemptId,expired:true});assert.ok(!expired.includes('<form'));
});
test('checkout analytics guard prevents third-party collection while marketing keeps its existing script',()=>{
 const script=analytics.siteAnalyticsBootstrap('GTM-WXQCTF5D');
 for(const pathname of ['/checkout/saas/'+id,'/checkout/saas/'+id+'/result']){
  let inserts=0;const element={parentNode:{insertBefore(){inserts++;}}},window={location:{pathname}};
  vm.runInNewContext(script,{window,document:{getElementsByTagName:()=>[element],createElement:()=>({})},Date});assert.equal(inserts,0);assert.equal(window.dataLayer,undefined);
 }
 let inserts=0;const element={parentNode:{insertBefore(){inserts++;}}};
 vm.runInNewContext(script,{window:{location:{pathname:'/tr'}},document:{getElementsByTagName:()=>[element],createElement:()=>({})},Date});assert.equal(inserts,1);
});
