import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import test from 'node:test';
const server=await import('../lib/platform-checkout/server.ts');
const require=createRequire(import.meta.url),ts=require('typescript'),compiled={exports:{}};
const output=ts.transpileModule(readFileSync(new URL('../lib/platform-checkout/public-test.ts',import.meta.url),'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
new Function('require','module','exports',output)(name=>name==='./server'?server:require(name),compiled,compiled.exports);
const publicTest=compiled.exports;
const key=Buffer.alloc(32,19), now=new Date('2026-10-28T12:00:00Z');
const operationId='abc00000-0000-4000-8000-000000000001',orderId='abc00000-0000-4000-8000-000000000002';
const order={id:orderId,storeId:'abc00000-0000-4000-8000-000000000003',storeName:'Fixture',title:'Toshi 1 Kredi',kind:'toshi_credit',offerId:'toshi-test-1',term:'once',netCents:83,vatCents:17,totalCents:100,currency:'TRY',state:'created',expiresAt:'2026-10-29T12:00:00Z'};
const request=(fields,headers={})=>new Request('https://celebix.net/api/platform-checkout/public-test',{method:'POST',headers:{origin:'https://celebix.net','content-type':'application/x-www-form-urlencoded','cf-connecting-ip':'192.0.2.21',...headers},body:typeof fields==='string'?fields:new URLSearchParams(fields)});
const form=()=>publicTest.createPublicTestForm(key,now,operationId);
function setup(result={status:'created',order}){const calls=[];return{calls,handler:publicTest.createPublicTestHttpHandler({key,now:()=>now,bridge:{publicTest:async input=>{calls.push(input);return result;}}})};}
test('store selector accepts public slugs and bare/root URLs without fetching any supplied host',()=>{
 for(const [input,expected] of [['ezmeo','ezmeo'],[' EZMEO.COM ','ezmeo.com'],['https://www.ezmeo.com/','ezmeo.com'],['http://ezmeo.com','ezmeo.com']])assert.equal(publicTest.normalizeStoreSelector(input),expected);
 for(const input of ['','https://user:pass@ezmeo.com','https://ezmeo.com/path','ezmeo.com?token=private','127.0.0.1','localhost','https://ezmeo.com:8443','//ezmeo.com','a'.repeat(254),'ezmeo.com#secret','ezmeo.com\\evil'])assert.throws(()=>publicTest.normalizeStoreSelector(input));
});
test('digit-leading store slugs accepted by signup remain reachable without a custom domain',()=>{
 for(const slug of ['1magaza','2026-magaza','123'])assert.equal(publicTest.normalizeStoreSelector(slug),slug);
});
test('signed one-hour form capability rejects modification, expiration, future issuance and other operations',async()=>{
 assert.deepEqual(Object.keys(form()).sort(),['expires','operationId','proof']);
 for(const change of [{proof:'a'.repeat(64)},{expires:String(Math.floor(+now/1000)+7200)},{operationId:orderId}]){const {calls,handler}=setup();assert.equal((await handler(request({...form(),store:'ezmeo',...change}))).status,303);assert.equal(calls.length,0);}
 const {calls}=setup();assert.equal(calls.length,0);
 const expired=publicTest.createPublicTestForm(key,new Date(+now-3600001),operationId),checked=setup();await checked.handler(request({...expired,store:'ezmeo'}));assert.equal(checked.calls.length,0);
});
test('anonymous same-origin form creates only the fixed offer and receives a scoped private session cookie',async()=>{
 const {calls,handler}=setup(),res=await handler(request({...form(),store:'https://www.ezmeo.com/'}));
 assert.equal(res.status,303);assert.equal(res.headers.get('location'),'https://celebix.net/checkout/saas/'+orderId);
 assert.equal(calls.length,1);assert.deepEqual(Object.keys(calls[0]).sort(),['ipDigest','operationId','sessionDigest','storeSelector']);
 assert.equal(calls[0].storeSelector,'ezmeo.com');assert.equal(calls[0].operationId,operationId);assert.match(calls[0].sessionDigest,/^[a-f0-9]{64}$/);assert.match(calls[0].ipDigest,/^[a-f0-9]{64}$/);
 assert.notEqual(calls[0].ipDigest,createHash('sha256').update('192.0.2.21').digest('hex'));
 assert.match(res.headers.get('set-cookie'),new RegExp('Path=/checkout/saas/'+orderId+'; Max-Age=86400; HttpOnly; Secure; SameSite=Lax'));
 assert.match(res.headers.get('cache-control'),/no-store/);
});
test('replaying the same signed form derives the same checkout session, distinct forms remain isolated',async()=>{
 const a=setup(),b=setup();await a.handler(request({...form(),store:'ezmeo'}));await b.handler(request({...form(),store:'ezmeo'}));assert.equal(a.calls[0].sessionDigest,b.calls[0].sessionDigest);
 const c=setup();await c.handler(request({...publicTest.createPublicTestForm(key,now,orderId),store:'ezmeo'}));assert.notEqual(a.calls[0].sessionDigest,c.calls[0].sessionDigest);
});
test('cross-origin, extra prices/authority, duplicate fields, missing trusted IP and oversized bodies never create quotes',async()=>{
 for(const [fields,headers] of [[{...form(),store:'ezmeo'},{origin:'https://evil.test'}],[{...form(),store:'ezmeo',totalCents:'1'},{}],[{...form(),store:'ezmeo',principalId:orderId},{}],[new URLSearchParams({...form(),store:'ezmeo'}).toString()+'&store=other',{}],[{...form(),store:'ezmeo'},{'cf-connecting-ip':''}],[{...form(),store:'x'.repeat(4096)},{}],[{...form(),store:'ezmeo'},{'x-store-id':orderId}]]){const s=setup();await s.handler(request(fields,headers));assert.equal(s.calls.length,0);}
});
test('only exact one-credit quotes are admitted; failed or uncertain creation never starts payment or sets a cookie',async()=>{
 for(const result of [{status:'created',order:{...order,totalCents:120}},{status:'created',order:{...order,offerId:'toshi-500',netCents:24900,vatCents:4980,totalCents:29880}},{status:'rejected',code:'rate_limited'},{status:'rejected',code:'store_unavailable'},{status:'rejected',code:'operation_mismatch'}]){const s=setup(result),res=await s.handler(request({...form(),store:'ezmeo'}));assert.equal(res.headers.get('set-cookie'),null);assert.match(res.headers.get('location'),/\/checkout\/saas\/toshi-test\?error=/);}
});
test('an uncertain quote response is not retried and cannot start payment or issue a session',async()=>{
 let calls=0;
 const handler=publicTest.createPublicTestHttpHandler({key,now:()=>now,bridge:{publicTest:async()=>{calls++;throw Error('commit_unknown');}}});
 const res=await handler(request({...form(),store:'ezmeo'}));
 assert.equal(calls,1);assert.equal(res.status,303);assert.equal(res.headers.get('set-cookie'),null);
 assert.equal(res.headers.get('location'),'https://celebix.net/checkout/saas/toshi-test?error=unavailable');
});
test('diagnostics report only a fixed validation stage and never the form, recipient, IP or capability',async()=>{
 const stages=[];
 const handler=publicTest.createPublicTestHttpHandler({key,now:()=>now,onReject:stage=>stages.push(stage),bridge:{publicTest:async()=>{throw Error('must not call');}}});
 await handler(request({...form(),operationId:'private-invalid-operation',store:'ezmeo'}));
 assert.deepEqual(stages,['operation']);
});
test('signed server bridge exposes only the additive public_test action and validates its complete response',async()=>{
 let sent;const env={CELEBIX_PLATFORM_COMMERCE_OWNER_ORIGIN:'https://owner.saas-staging.celebix.net',CELEBIX_PLATFORM_COMMERCE_BRIDGE_KEY_B64URL:key.toString('base64url')};
 const bridge=server.createCommerceBridge(env,{fetch:async(url,init)=>{sent=JSON.parse(init.body);return Response.json({status:'created',order});}});
 const input={operationId,storeSelector:'ezmeo',sessionDigest:'a'.repeat(64),ipDigest:'b'.repeat(64)};
 assert.deepEqual(await bridge.publicTest(input),{status:'created',order});assert.deepEqual(sent,{action:'public_test',payload:input});
});
