import {bridgeKeyFromEnvironment} from '@/lib/platform-checkout/server';
import {checkoutBridge} from '@/lib/platform-checkout/runtime';
import {createPublicTestHttpHandler} from '@/lib/platform-checkout/public-test';
export const runtime='nodejs';
export const dynamic='force-dynamic';
export async function POST(request:Request):Promise<Response>{
  try{return await createPublicTestHttpHandler({key:bridgeKeyFromEnvironment(process.env),now:()=>new Date(),bridge:checkoutBridge()})(request);}
  catch{return new Response(null,{status:303,headers:{location:'https://celebix.net/checkout/saas/toshi-test?error=unavailable','cache-control':'private, no-store','referrer-policy':'no-referrer'}});}
}
