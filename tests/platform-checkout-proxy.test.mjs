import assert from 'node:assert/strict';
import {fork} from 'node:child_process';
import {once} from 'node:events';
import {mkdtemp, mkdir, rm, writeFile} from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import test from 'node:test';

const root=fileURLToPath(new URL('..',import.meta.url));
const orderId='8fa9f2b4-3bd4-4ed2-84c5-311747e922d7';
const handoff=Buffer.alloc(32,7).toString('base64url');
const fields=new URLSearchParams({orderId,handoff}).toString();

async function fixture(t){
 const dir=await mkdtemp(path.join(root,'.checkout-proxy-test-'));
 let child;
 t.after(async()=>{
  if(child&&child.exitCode===null){child.kill('SIGTERM');await Promise.race([once(child,'exit'),new Promise(resolve=>setTimeout(resolve,3000))]);if(child.exitCode===null)child.kill('SIGKILL');}
  await rm(dir,{recursive:true,force:true});
 });
 await mkdir(path.join(dir,'app/api/platform-checkout/handoff'),{recursive:true});
 await writeFile(path.join(dir,'package.json'),'{"name":"checkout-proxy-fixture","private":true}');
 await writeFile(path.join(dir,'next.config.js'),'module.exports={experimental:{externalDir:true},poweredByHeader:false};');
 await writeFile(path.join(dir,'app/layout.tsx'),'export default function Layout({children}:{children:React.ReactNode}){return <html><body>{children}</body></html>}');
 await writeFile(path.join(dir,'app/page.tsx'),'export default function Page(){return null}');
 // Real Next routing and body adaptation; the bridge is the only fake boundary.
 await writeFile(path.join(dir,'app/api/platform-checkout/handoff/route.ts'),`
import {createCheckoutHttpHandlers} from ${JSON.stringify(path.join(root,'lib/platform-checkout/server'))};
export const runtime='nodejs';export const dynamic='force-dynamic';
export async function POST(request:Request){
 let calls=0;
 const bridge={redeem:async()=>{calls++;return {order:{id:${JSON.stringify(orderId)},storeId:'e264235b-5c30-4b30-8c0d-2b229f336466',storeName:'Fixture',title:'Fixture',kind:'tool',offerId:'all_tools',term:'once',netCents:10000,vatCents:2000,totalCents:12000,currency:'TRY',state:'created',expiresAt:'2099-01-01T00:00:00Z'}}}};
 const response=await createCheckoutHttpHandlers({bridge:bridge as never,bridgeKey:Buffer.alloc(32,9)}).handoff(request);
 response.headers.set('x-test-request-origin',new URL(request.url).origin);
 response.headers.set('x-test-transfer-encoding',request.headers.get('transfer-encoding')??'none');
 response.headers.set('x-test-redeem-calls',String(calls));return response;
}`);
 await writeFile(path.join(dir,'server.cjs'),`
const http=require('node:http');const next=require(${JSON.stringify(path.join(root,'node_modules/next'))});
(async()=>{let handle;const server=http.createServer((req,res)=>handle(req,res));await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const port=server.address().port;
const app=next({dev:true,dir:__dirname,hostname:'0.0.0.0',port});await app.prepare();handle=app.getRequestHandler();process.send({port});
process.on('SIGTERM',()=>{server.close();app.close().finally(()=>process.exit(0));});})().catch(()=>process.exit(1));`);
 child=fork(path.join(dir,'server.cjs'),[],{cwd:dir,env:{PATH:process.env.PATH,NODE_ENV:'development',NEXT_TELEMETRY_DISABLED:'1',NODE_OPTIONS:'--max-old-space-size=2048'},silent:true});
 let output='';child.stdout.on('data',chunk=>{output=(output+chunk).slice(-3000);});child.stderr.on('data',chunk=>{output=(output+chunk).slice(-3000);});
 const ready=await Promise.race([once(child,'message').then(([value])=>value),once(child,'exit').then(()=>{throw Error('Next fixture exited: '+output);}),new Promise((_,reject)=>{const timer=setTimeout(()=>reject(Error('Next fixture startup timeout: '+output)),45000);timer.unref();})]);
 return {port:ready.port};
}
function post(port,{headers={},chunked=false}={}){
 return new Promise((resolve,reject)=>{
  const request=http.request({hostname:'127.0.0.1',port,path:'/api/platform-checkout/handoff',method:'POST',headers:{host:'celebix.net','x-forwarded-host':'celebix.net','x-forwarded-proto':'https',origin:'https://admin.example.test','content-type':'application/x-www-form-urlencoded',...(chunked?{}:{'content-length':Buffer.byteLength(fields)}),...headers}},response=>{
   response.resume();response.on('end',()=>resolve({status:response.statusCode,headers:response.headers}));
  });request.on('error',reject);request.setTimeout(20000,()=>request.destroy(Error('Next fixture request timeout')));
  if(chunked){request.write(fields.slice(0,20));request.end(fields.slice(20));}else request.end(fields);
 });
}

test('real Next proxy request accepts the canonical public host despite its internal request URL', {timeout:60000},async t=>{
 const {port}=await fixture(t);
 const response=await post(port);
 assert.equal(response.headers['x-test-request-origin'],`https://0.0.0.0:${port}`);
 assert.equal(response.headers['x-test-transfer-encoding'],'none');
 assert.equal(response.status,303);
 assert.equal(response.headers['x-test-redeem-calls'],'1');
 assert.equal(response.headers.location,`https://celebix.net/checkout/saas/${orderId}`);
});
test('real Next accepts a bounded proxy form transported with chunked encoding', {timeout:60000},async t=>{
 const {port}=await fixture(t);
 const response=await post(port,{chunked:true});
 assert.equal(response.headers['x-test-transfer-encoding'],'chunked');
 assert.equal(response.status,303);
 assert.equal(response.headers['x-test-redeem-calls'],'1');
 assert.equal(response.headers.location,`https://celebix.net/checkout/saas/${orderId}`);
});
