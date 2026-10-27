import assert from 'node:assert/strict';
import {createHash, createHmac} from 'node:crypto';
import test from 'node:test';
import {createRequire} from 'node:module';

const server = await import('../lib/platform-checkout/server.ts').catch(() => ({}));
const id = '8fa9f2b4-3bd4-4ed2-84c5-311747e922d7';
const otherId = 'e264235b-5c30-4b30-8c0d-2b229f336466';
const attemptId = 'b77a7eb5-bd97-4d2f-879b-7b9131163396';
const handoff = Buffer.alloc(32, 7).toString('base64url');
const key = Buffer.alloc(32, 9);
const env = {CELEBIX_PLATFORM_COMMERCE_OWNER_ORIGIN:'https://owner.saas-staging.celebix.net',CELEBIX_PLATFORM_COMMERCE_BRIDGE_KEY_B64URL:key.toString('base64url')};
const order = {id,storeId:otherId,storeName:'Örnek mağaza',title:'Başlangıç',kind:'package',offerId:'00000000-0000-4000-8000-000000000008',term:'annual',netCents:2587000,vatCents:517400,totalCents:3104400,currency:'TRY',state:'created',expiresAt:'2026-10-27T08:00:00.000Z'};
const creditOffers = [
 {offerId:'toshi-500',netCents:24900,vatCents:4980,totalCents:29880},
 {offerId:'toshi-2500',netCents:99900,vatCents:19980,totalCents:119880},
 {offerId:'toshi-10000',netCents:299900,vatCents:59980,totalCents:359880},
 {offerId:'toshi-50000',netCents:1249900,vatCents:249980,totalCents:1499880},
];
const hash = value => createHash('sha256').update(value).digest('hex');
const form = fields => new URLSearchParams(fields).toString();
const buyerFields = {attemptId,name:'Ayşe',surname:'Yılmaz',identityNumber:'10000000146',email:'ayse@example.test',gsmNumber:'+905321234567',registrationAddress:'Örnek Mahallesi No: 10',city:'Ordu',country:'Türkiye',zipCode:'52000',terms:'accepted'};
function request(path, fields, options = {}) {return new Request(`https://celebix.net${path}`,{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded',origin:'https://celebix.net',...options.headers},body:typeof fields==='string'?fields:form(fields)});}
function handlers(bridge) {return server.createCheckoutHttpHandlers({bridge,bridgeKey:key});}

test('public order parser accepts each frozen one-time Toshi credit offer through the existing bridge',async()=>{
 for(const offer of creditOffers){
  const creditOrder={...order,...offer,kind:'toshi_credit',term:'once',title:'Toshi kredisi'};
  const bridge=server.createCommerceBridge(env,{fetch:async()=>Response.json({order:creditOrder})});
  assert.deepEqual(await bridge.read({orderId:id,sessionDigest:'a'.repeat(64)}),{order:creditOrder});
 }
});
test('credit orders reject unknown offers, changed prices, recurring terms and extra authority fields',()=>{
 const creditOrder={...order,...creditOffers[0],kind:'toshi_credit',term:'once',title:'Toshi kredisi'};
 for(const changed of [
  {offerId:'toshi-501'}, {offerId:'toshi-2500'}, {term:'monthly'}, {term:'annual'},
  {netCents:100,vatCents:20,totalCents:120}, {credits:500}, {kind:'credit'},
 ])assert.throws(()=>server.parsePublicOrder({...creditOrder,...changed},id));
 assert.deepEqual(server.parsePublicOrder(order,id),order);
 const tool={...order,kind:'tool',offerId:'all_tools',term:'once'};
 assert.deepEqual(server.parsePublicOrder(tool,id),tool);
 assert.throws(()=>server.parsePublicOrder({...order,term:'once'},id));
 assert.throws(()=>server.parsePublicOrder({...tool,term:'annual'},id));
});

test('bridge signs the exact bounded body and calls only the approved internal endpoint',async()=>{
 let observed;
 const bridge=server.createCommerceBridge(env,{now:()=>new Date('2026-10-26T08:00:00Z'),fetch:async(url,init)=>{observed={url,init};return Response.json({order});}});
 assert.deepEqual(await bridge.read({orderId:id,sessionDigest:'a'.repeat(64)}),{order});
 assert.equal(observed.url,'https://owner.saas-staging.celebix.net/api/internal/platform-commerce');
 const body='{"action":"read","payload":{"orderId":"'+id+'","sessionDigest":"'+'a'.repeat(64)+'"}}';
 assert.equal(observed.init.body,body);
 const timestamp='1793001600';
 assert.equal(observed.init.headers['x-celebix-commerce-timestamp'],timestamp);
 assert.equal(observed.init.headers['x-celebix-commerce-signature'],createHmac('sha256',key).update(`${timestamp}.${body}`).digest('hex'));
 assert.equal(observed.init.redirect,'error');assert.equal(observed.init.cache,'no-store');
});
test('bridge rejects arbitrary origins, malformed keys and oversized requests before network access',async()=>{
 let calls=0;
 for(const origin of ['http://owner.saas-staging.celebix.net','https://owner.saas-staging.celebix.net.evil.test','https://user@owner.saas-staging.celebix.net','https://owner.saas-staging.celebix.net/api','https://owner.saas-staging.celebix.net:8443'])assert.throws(()=>server.createCommerceBridge({...env,CELEBIX_PLATFORM_COMMERCE_OWNER_ORIGIN:origin}));
 assert.throws(()=>server.createCommerceBridge({...env,CELEBIX_PLATFORM_COMMERCE_BRIDGE_KEY_B64URL:'not-a-real-key'}));
 const bridge=server.createCommerceBridge(env,{fetch:async()=>{calls++;return Response.json({order});}});
 await assert.rejects(()=>bridge.start({orderId:id,sessionDigest:'a'.repeat(64),attemptId,buyer:{id,name:'a'.repeat(70000)},ip:'1.1.1.1'}));assert.equal(calls,0);
});
test('bridge bounds streamed responses and rejects mismatched order context and redirects',async()=>{
 const make=response=>server.createCommerceBridge(env,{fetch:async()=>response});
 await assert.rejects(()=>make(new Response(' '.repeat(131073))).read({orderId:id,sessionDigest:'a'.repeat(64)}));
 await assert.rejects(()=>make(Response.json({order:{...order,id:otherId}})).read({orderId:id,sessionDigest:'a'.repeat(64)}));
 await assert.rejects(()=>make(Response.json({status:'ready',paymentUrl:'https://evil.test/?token=x'})).start({orderId:id,sessionDigest:'a'.repeat(64),attemptId,buyer:buyerFields,ip:'1.1.1.1'}));
 assert.throws(()=>server.parsePublicOrder({...order,totalCents:1},id));
});
test('bridge deadline bounds a stalled body and never retries an uncertain request',async()=>{
 let calls=0;
 const bridge=server.createCommerceBridge(env,{timeoutMs:10,fetch:async()=>{calls++;return new Response(new ReadableStream({start(){}}),{headers:{'content-type':'application/json'}});}});
 await assert.rejects(()=>bridge.read({orderId:id,sessionDigest:'a'.repeat(64)}),/checkout_unavailable/);assert.equal(calls,1);
});
test('handoff retries derive the same secret while order paths isolate simultaneous tabs',()=>{
 const session=server.deriveCheckoutSession(key,id,handoff);
 assert.equal(session,createHmac('sha256',key).update(`session:v1:${id}:${handoff}`).digest('base64url'));
 assert.notEqual(session,server.deriveCheckoutSession(key,otherId,handoff));
 const cookie=server.checkoutCookie(id,session);
 assert.match(cookie,new RegExp(`Path=/checkout/saas/${id};`));
 for(const value of ['HttpOnly','Secure','SameSite=Lax','Max-Age=86400'])assert.ok(cookie.includes(value));
 assert.equal(server.readCheckoutSession(`__Secure-celebix_platform_checkout=${session}`),session);
 assert.throws(()=>server.readCheckoutSession(`__Secure-celebix_platform_checkout=${session}; __Secure-celebix_platform_checkout=${handoff}`));
});
test('handoff posts only digests, accepts a custom HTTPS admin and sets only an order-scoped cookie',async()=>{
 let payload;
 const response=await handlers({redeem:async value=>{payload=value;return{order};}}).handoff(request('/api/platform-checkout/handoff',{orderId:id,handoff},{headers:{origin:'https://admin.ezmeo.com'}}));
 assert.equal(response.status,303);assert.equal(response.headers.get('location'),`https://celebix.net/checkout/saas/${id}`);
 assert.deepEqual(payload,{orderId:id,ticketDigest:hash(handoff),sessionDigest:hash(server.deriveCheckoutSession(key,id,handoff))});
 assert.ok(response.headers.get('set-cookie').includes(`Path=/checkout/saas/${id};`));
 assert.equal(response.headers.get('referrer-policy'),'no-referrer');assert.match(response.headers.get('cache-control'),/no-store/);
});
test('handoff denies URL tokens, unknown/duplicate fields, oversized input and HTTP/null origins',async()=>{
 let calls=0;const handle=handlers({redeem:async()=>{calls++;return{order};}}).handoff;
 const inputs=[request('/api/platform-checkout/handoff?handoff=x',{orderId:id,handoff}),request('/api/platform-checkout/handoff',{orderId:id,handoff,storeId:otherId}),request('/api/platform-checkout/handoff',`${form({orderId:id,handoff})}&orderId=${otherId}`),request('/api/platform-checkout/handoff','x'.repeat(2049)),request('/api/platform-checkout/handoff',{orderId:id,handoff},{headers:{origin:'null'}}),request('/api/platform-checkout/handoff',{orderId:id,handoff},{headers:{origin:'http://admin.example.test'}})];
 for(const input of inputs)assert.ok((await handle(input)).status>=400);assert.equal(calls,0);
});
test('proxy ingress requires the exact public Host and HTTPS forwarding metadata before any bridge call',async()=>{
 let calls=0;const handle=handlers({redeem:async()=>{calls++;return{order};}}).handoff;
 const acceptedHeaders={host:'celebix.net','x-forwarded-host':'celebix.net','x-forwarded-proto':'https',origin:'https://admin.example.test','content-type':'application/x-www-form-urlencoded'};
 for(const origin of ['https://0.0.0.0:3000','http://localhost:3000','http://n']){
  const response=await handle(new Request(origin+'/api/platform-checkout/handoff',{method:'POST',headers:acceptedHeaders,body:form({orderId:id,handoff})}));
  assert.equal(response.status,303);assert.equal(response.headers.get('location'),`https://celebix.net/checkout/saas/${id}`);
 }
 assert.equal(calls,3);
 const invalid=[{host:'evil.test'},{host:'celebix.net:443'},{host:'celebix.net, evil.test'},{host:''},{'x-forwarded-host':'evil.test'},{'x-forwarded-host':'celebix.net, evil.test'},{'x-forwarded-proto':'http'},{'x-forwarded-proto':'https, http'},{'x-forwarded-proto':''},{authorization:'Bearer forged'},{'x-celebix-commerce-signature':'a'.repeat(64)}];
 for(const extra of invalid){
  const response=await handle(new Request('https://0.0.0.0:3000/api/platform-checkout/handoff',{method:'POST',headers:{...acceptedHeaders,...extra},body:form({orderId:id,handoff})}));assert.equal(response.status,400);
 }
 for(const origin of ['http://celebix.net','https://evil.test','https://celebix.net.evil.test'])assert.equal((await handle(new Request(origin+'/api/platform-checkout/handoff',{method:'POST',headers:acceptedHeaders,body:form({orderId:id,handoff})}))).status,400);
 assert.equal(calls,3);
});
test('chunked form bodies keep size, framing and deadline checks before any bridge call',async()=>{
 let calls=0;const handle=handlers({redeem:async()=>{calls++;return{order};}}).handoff;
 const badHeaders=[{'transfer-encoding':'gzip, chunked'},{'transfer-encoding':'chunked, chunked'},{'transfer-encoding':'chunked','content-length':'1'},{'content-encoding':'gzip'}];
 for(const headers of badHeaders)assert.equal((await handle(request('/api/platform-checkout/handoff',{orderId:id,handoff},{headers}))).status,400);
 assert.equal((await handle(request('/api/platform-checkout/handoff','x'.repeat(2049),{headers:{'transfer-encoding':'chunked'}}))).status,400);
 const stalled=new Request('https://celebix.net/api/platform-checkout/handoff',{method:'POST',headers:{'content-type':'application/x-www-form-urlencoded',origin:'https://admin.example.test','transfer-encoding':'chunked'},body:new ReadableStream({start(){}}),duplex:'half'});
 assert.equal((await handle(stalled)).status,400);assert.equal(calls,0);
});
test('pay derives buyer identity and trusted IP and redirects only to the verified provider',async()=>{
 let payload;
 const session=server.deriveCheckoutSession(key,id,handoff);
 const response=await handlers({start:async value=>{payload=value;return{status:'ready',paymentUrl:'https://sandbox-cpp.iyzipay.com/?token=provider-token-123456789012345678901234'};}}).pay(request(`/checkout/saas/${id}/pay`,buyerFields,{headers:{cookie:`__Secure-celebix_platform_checkout=${session}`,'cf-connecting-ip':'203.0.113.11'}}),id);
 assert.equal(response.status,303);assert.equal(response.headers.get('location'),'https://sandbox-cpp.iyzipay.com/?token=provider-token-123456789012345678901234');
 assert.equal(payload.orderId,id);assert.equal(payload.sessionDigest,hash(session));assert.equal(payload.attemptId,attemptId);assert.equal(payload.buyer.id,id);assert.equal(payload.ip,'203.0.113.11');assert.equal(payload.buyer.identityNumber,'10000000146');assert.equal(payload.buyer.terms,undefined);
});
test('pay rejects missing consent/session/IP, forged context and hostile Origin before any start',async()=>{
 let calls=0;const pay=handlers({start:async()=>{calls++;throw Error();}}).pay;
 const session=server.deriveCheckoutSession(key,id,handoff),headers={cookie:`__Secure-celebix_platform_checkout=${session}`,'x-real-ip':'203.0.113.11'};
 const invalid=[{fields:{...buyerFields,terms:''},headers},{fields:{...buyerFields,storeId:otherId},headers},{fields:{...buyerFields,identityNumber:'11111111111'},headers},{fields:buyerFields,headers:{...headers,origin:'https://evil.test'}},{fields:buyerFields,headers:{...headers,'x-real-ip':'bad'}},{fields:buyerFields,headers:{...headers,cookie:''}}];
 for(const input of invalid)assert.ok((await pay(request(`/checkout/saas/${id}/pay`,input.fields,{headers:input.headers}),id)).status>=400);assert.equal(calls,0);
});
test('buyer names match the gateway 64-character limit before a payment can start',()=>{
 const accepted=server.parseBuyerForm({...buyerFields,name:'A'.repeat(64),surname:'B'.repeat(64)},id);
 assert.equal(accepted.buyer.name.length,64);assert.equal(accepted.buyer.surname.length,64);
 assert.throws(()=>server.parseBuyerForm({...buyerFields,name:'A'.repeat(65)},id));
 assert.throws(()=>server.parseBuyerForm({...buyerFields,surname:'B'.repeat(65)},id));
});
test('uncertain initialize goes to this order result and does not retry',async()=>{
 let calls=0;const session=server.deriveCheckoutSession(key,id,handoff);
 const response=await handlers({start:async()=>{calls++;throw Error('sensitive provider detail');}}).pay(request(`/checkout/saas/${id}/pay`,buyerFields,{headers:{cookie:`__Secure-celebix_platform_checkout=${session}`,'x-real-ip':'203.0.113.11'}}),id);
 assert.equal(response.status,303);assert.equal(response.headers.get('location'),`https://celebix.net/checkout/saas/${id}/result`);assert.equal(calls,1);assert.equal(await response.text(),'');
});
test('callback uses exact attempt and bounded token; it never selects a latest payment',async()=>{
 let payload;
 const callback=handlers({callback:async value=>{payload=value;return{orderId:id,state:'approved'};}}).callback;
 const response=await callback(request(`/api/platform-payments/iyzico/callback/${attemptId}`,{token:'provider-token-123456789012345678901234'},{headers:{origin:'https://sandbox-cpp.iyzipay.com'}}),attemptId);
 assert.deepEqual(payload,{attemptId,token:'provider-token-123456789012345678901234'});assert.equal(response.headers.get('location'),`https://celebix.net/checkout/saas/${id}/result`);
 assert.ok((await callback(request(`/api/platform-payments/iyzico/callback/${attemptId}`,{token:'x'.repeat(4097)}),attemptId)).status>=400);
 assert.throws(()=>server.verifiedIyzicoUrl('https://cpp.iyzipay.com.evil.test/?token=x'));
 assert.throws(()=>server.verifiedIyzicoUrl('https://user@cpp.iyzipay.com/?token=x'));
 assert.throws(()=>server.verifiedIyzicoUrl('https://cpp.iyzipay.com:8443/?token=x'));
});
test('order read rejects mismatched context and forwards only a scoped session digest',async()=>{
 const session=server.deriveCheckoutSession(key,id,handoff);let payload;
 assert.deepEqual(await server.loadCheckoutOrder(id,session,{read:async value=>{payload=value;return{order};}}),order);
 assert.deepEqual(payload,{orderId:id,sessionDigest:hash(session)});
 await assert.rejects(()=>server.loadCheckoutOrder(id,session,{read:async()=>({order:{...order,id:otherId}})}));
});
test('checkout responses carry private no-store, no-referrer and noindex headers',async()=>{
 const require=createRequire(import.meta.url),config=require('../next.config.js');
 const entries=await config.headers();
 for(const source of ['/checkout/saas/:path*','/api/platform-checkout/:path*','/api/platform-payments/:path*']){
  const values=Object.fromEntries(entries.find(entry=>entry.source===source)?.headers.map(item=>[item.key.toLowerCase(),item.value])??[]);
  assert.match(values['cache-control']??'',/no-store/);assert.equal(values['referrer-policy'],'no-referrer');assert.match(values['x-robots-tag']??'',/noindex/);
  assert.match(values['content-security-policy']??'',/form-action 'self' https:\/\/cpp\.iyzipay\.com https:\/\/sandbox-cpp\.iyzipay\.com;/);
 }
});
