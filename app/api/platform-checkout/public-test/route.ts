import {bridgeKeyFromEnvironment} from '@/lib/platform-checkout/server';
import {checkoutBridge} from '@/lib/platform-checkout/runtime';
import {createPublicTestHttpHandler} from '@/lib/platform-checkout/public-test';
export const runtime='nodejs';
export const dynamic='force-dynamic';
let lastRejectedFormLog=0;
function reportRejectedForm(stage:string){
  const now=Date.now();
  if(now-lastRejectedFormLog>=30000){lastRejectedFormLog=now;console.warn('public_test_form_rejected',stage);}
}
export async function POST(request:Request):Promise<Response>{
  try{return await createPublicTestHttpHandler({key:bridgeKeyFromEnvironment(process.env),now:()=>new Date(),bridge:checkoutBridge(),onReject:reportRejectedForm})(request);}
  catch{return new Response(null,{status:303,headers:{location:'https://celebix.net/checkout/saas/toshi-test?error=unavailable','cache-control':'private, no-store','referrer-policy':'no-referrer'}});}
}
