import {createHash, createHmac, timingSafeEqual} from 'node:crypto';
import {isIP} from 'node:net';
import {checkoutCookie, formFields, parsePublicOrder, trustedClientIp, validRequest, type CommerceBridge} from './server';

const ENTRY='/checkout/saas/toshi-test';
const ORIGIN='https://celebix.net';
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;
const HEADERS={'cache-control':'private, no-store, max-age=0','referrer-policy':'no-referrer','x-robots-tag':'noindex, nofollow, noarchive','x-content-type-options':'nosniff'};
export interface PublicTestForm {operationId:string;expires:string;proof:string}
function reject():never {throw Error('public_test_invalid');}
function validKey(key:Buffer):void {if(!Buffer.isBuffer(key)||key.length!==32)reject();}
function mac(key:Buffer,value:string):string {return createHmac('sha256',key).update(value).digest('hex');}
function seconds(now:Date):number {if(!(now instanceof Date)||!Number.isFinite(now.getTime()))reject();return Math.floor(now.getTime()/1000);}
function proof(key:Buffer,operationId:string,expires:string):string {return mac(key,`public-test-form:v1:${operationId}:${expires}`);}
export function createPublicTestForm(key:Buffer,now:Date,operationId:string):PublicTestForm {
  validKey(key);if(!UUID.test(operationId))reject();
  const expires=String(seconds(now)+3600);
  return Object.freeze({operationId,expires,proof:proof(key,operationId,expires)});
}
/** Public identifier only. Never resolve or fetch a visitor-supplied URL. */
export function normalizeStoreSelector(value:string):string {
  if(typeof value!=='string'||value.length>253)reject();
  const raw=value.trim().toLowerCase();
  if(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(raw)&&raw.length<=63&&raw!=='localhost')return raw;
  if(!raw||/[\\\s%?#@]/.test(raw)||raw.startsWith('//'))reject();
  let url:URL;try{url=new URL(raw.includes('://')?raw:`https://${raw}`);}catch{reject();}
  if(!['http:','https:'].includes(url.protocol)||url.username||url.password||url.port||url.pathname!=='/'||url.search||url.hash)reject();
  const host=url.hostname.replace(/^www\./,'');
  if(host.length>253||isIP(host)||!host.includes('.')||!host.split('.').every(part=>/^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(part))||!/[a-z]$/.test(host))reject();
  return host;
}
function redirect(path:string):Response {return new Response(null,{status:303,headers:{...HEADERS,location:ORIGIN+path}});}
function failure(code:'invalid_form'|'invalid_store'|'rate_limited'|'unavailable'):Response {return redirect(`${ENTRY}?error=${code}`);}
export function createPublicTestHttpHandler(deps:{key:Buffer;now():Date;bridge:Pick<CommerceBridge,'publicTest'>}) {
  validKey(deps.key);const key=Buffer.from(deps.key);
  return async(request:Request):Promise<Response>=>{
    let operationId:string,storeSelector:string,session:string,ipDigest:string;
    try{
      validRequest(request,'/api/platform-checkout/public-test');
      if(request.headers.get('origin')!==ORIGIN)reject();
      const fields=await formFields(request,2048);
      if(Object.keys(fields).length!==4||!['operationId','expires','proof','store'].every(name=>Object.hasOwn(fields,name)))reject();
      operationId=fields.operationId;
      const instant=seconds(deps.now());
      if(!UUID.test(operationId)||!/^\d{10}$/.test(fields.expires)||Number(fields.expires)<=instant||Number(fields.expires)>instant+3600||! /^[a-f0-9]{64}$/.test(fields.proof))reject();
      if(!timingSafeEqual(Buffer.from(fields.proof,'hex'),Buffer.from(proof(key,operationId,fields.expires),'hex')))reject();
      session=createHmac('sha256',key).update(`public-test-session:v1:${operationId}`).digest('base64url');
      ipDigest=mac(key,`public-test-ip:v1:${trustedClientIp(request.headers)}`);
      try{storeSelector=normalizeStoreSelector(fields.store);}catch{return failure('invalid_store');}
    }catch{return failure('invalid_form');}
    try{
      const result=await deps.bridge.publicTest({operationId,storeSelector,sessionDigest:createHash('sha256').update(session).digest('hex'),ipDigest});
      if(result.status==='rejected')return failure(result.code==='store_unavailable'?'invalid_store':result.code==='rate_limited'?'rate_limited':'invalid_form');
      const order=parsePublicOrder(result.order,result.order.id);
      if(order.kind!=='toshi_credit'||order.offerId!=='toshi-test-1'||order.term!=='once'||order.netCents!==83||order.vatCents!==17||order.totalCents!==100)reject();
      const response=redirect(`/checkout/saas/${order.id}`);
      response.headers.set('set-cookie',checkoutCookie(order.id,session));
      return response;
    }catch{return failure('unavailable');}
  };
}
