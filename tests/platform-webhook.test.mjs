import assert from 'node:assert/strict';
import {createHmac} from 'node:crypto';
import {createRequire} from 'node:module';
import test from 'node:test';
const server=await import('../lib/platform-checkout/server.ts');
const key=Buffer.alloc(32,19),signature='a'.repeat(64);
const env={CELEBIX_PLATFORM_COMMERCE_OWNER_ORIGIN:'https://owner.saas-staging.celebix.net',CELEBIX_PLATFORM_COMMERCE_BRIDGE_KEY_B64URL:key.toString('base64url')};
const raw=' {"iyziEventType":"CHECKOUT_FORM_AUTH", "paymentConversationId":"b77a7eb5-bd97-4d2f-879b-7b9131163396", "iyziPaymentId":"123456", "token":"a-provider-token-123456789012345678901", "status":"SUCCESS", "note":"Örnek\\n"}\n';
const path='/api/platform-payments/iyzico/webhook';
function request(body=raw,headers={},url=path){return new Request(`https://celebix.net${url}`,{method:'POST',headers:{'content-type':'application/json; charset=utf-8','x-iyz-signature-v3':signature,...headers},body});}
const handler=bridge=>server.createCheckoutHttpHandlers({bridge,bridgeKey:key}).webhook;

test('webhook bridge signs a narrow envelope retaining exact provider text',async()=>{
 let call;
 const bridge=server.createCommerceBridge(env,{now:()=>new Date('2026-10-26T08:00:00Z'),fetch:async(url,init)=>{call={url,init};return Response.json({ok:true});}});
 assert.deepEqual(await bridge.webhook({body:raw,signature}),{ok:true});
 assert.equal(call.url,'https://owner.saas-staging.celebix.net/api/internal/platform-commerce');
 assert.deepEqual(JSON.parse(call.init.body),{action:'webhook',payload:{body:raw,signature}});
 assert.equal(call.init.headers['x-celebix-commerce-signature'],createHmac('sha256',key).update('1793001600.'+call.init.body).digest('hex'));
 const headers=new Headers(call.init.headers);
 for(const name of ['origin','authorization','cookie','x-iyz-signature-v3'])assert.equal(headers.has(name),false);
});
test('server notification needs no browser session or Origin and returns only a generic checked acknowledgment',async()=>{
 let input;
 const response=await handler({webhook:async value=>{input=value;return{ok:true};}})(request());
 assert.equal(response.status,200);assert.deepEqual(input,{body:raw,signature});assert.deepEqual(await response.json(),{ok:true});
 assert.equal(response.headers.get('set-cookie'),null);assert.equal(response.headers.get('referrer-policy'),'no-referrer');assert.match(response.headers.get('cache-control'),/no-store/);
});
test('malformed signatures, JSON, paths and bounded data are denied before forwarding',async()=>{
 let calls=0;const handle=handler({webhook:async()=>{calls++;return{ok:true};}});
 const inputs=[request(raw,{'x-iyz-signature-v3':''}),request(raw,{'x-iyz-signature-v3':'A'.repeat(64)}),request(raw,{'x-iyz-signature-v3':signature+', '+signature}),request(raw,{'content-type':'text/plain'}),request(raw,{'content-encoding':'gzip'}),request('{"status":"SUCCESS","status":"FAILURE"}'),request('[]'),request('{'),request('\ufeff'+raw),request(new Uint8Array([0xff,0xfe])),request(' '.repeat(16385)),request(raw,{'content-length':'1'}),request(raw,{},path+'?token=forged')];
 for(const input of inputs){const response=await handle(input);assert.equal(response.status,400);const body=await response.text();assert.ok(!body.includes('provider-token'));}
 const method=await handle(new Request('https://celebix.net'+path));assert.equal(method.status,400);assert.equal(calls,0);
});
test('unverified owner acknowledgments and ambiguous network errors stay non-successful without retry',async()=>{
 for(const result of [{ok:false},{ok:true,state:'pending'},{state:'approved'},null]){
  const response=await handler({webhook:async()=>result})(request());assert.equal(response.status,503);assert.deepEqual(await response.json(),{ok:false});
 }
 let calls=0;
 const response=await handler({webhook:async()=>{calls++;throw Error(raw);}})(request());
 assert.equal(response.status,503);assert.deepEqual(await response.json(),{ok:false});assert.equal(calls,1);
 const bridge=server.createCommerceBridge(env,{fetch:async()=>Response.json({ok:false})});await assert.rejects(()=>bridge.webhook({body:raw,signature}));
});
test('a stalled provider request has a finite ingress deadline and never reaches the owner',async()=>{
 let calls=0;const handle=handler({webhook:async()=>{calls++;return{ok:true};}});
 const input=new Request('https://celebix.net'+path,{method:'POST',headers:{'content-type':'application/json','x-iyz-signature-v3':signature},body:new ReadableStream({start(){}}),duplex:'half'});
 const response=await handle(input);assert.equal(response.status,400);assert.equal(calls,0);
});
test('notification route inherits the existing private API response policy',async()=>{
 const require=createRequire(import.meta.url),headers=await require('../next.config.js').headers();
 const policy=Object.fromEntries(headers.find(value=>value.source==='/api/platform-payments/:path*').headers.map(value=>[value.key.toLowerCase(),value.value]));
 assert.equal(policy['referrer-policy'],'no-referrer');assert.match(policy['cache-control'],/no-store/);assert.match(policy['x-robots-tag'],/noindex/);
});
