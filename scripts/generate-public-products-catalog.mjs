#!/usr/bin/env node
// Presentation snapshot only. Purchase authority and payable totals stay in SaaS.
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {mkdirSync,readFileSync,realpathSync,statSync,writeFileSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';

const FILES=['packages/saas-contracts/src/commercial-packages/catalog.ts','packages/saas-contracts/src/toshi/credits.ts'];
const OUTPUT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../components/public-products/catalog.snapshot.json');
const PLAN_IMAGES={free_starter:'free',starter:'starter',growth:'growth',professional:'professional'};
const PLAN_IDS={free_starter:'00000000-0000-4000-8000-000000000007',starter:'00000000-0000-4000-8000-000000000008',growth:'00000000-0000-4000-8000-000000000009',professional:'00000000-0000-4000-8000-000000000010'};

const CREDIT_IDS=['toshi-test-1','toshi-500','toshi-2500','toshi-10000','toshi-50000'];
const hash=value=>createHash('sha256').update(value).digest('hex');
function fail(message){throw new Error(message);}
function integer(value){if(!Number.isSafeInteger(value)||value<0)fail('PUBLIC_CATALOG_SOURCE_INVALID');return value;}
function text(value){if(typeof value!=='string'||!value.length||value.length>200||value.trim()!==value||/[\u0000-\u001f\u007f]/u.test(value))fail('PUBLIC_CATALOG_SOURCE_INVALID');return value;}
function strings(value){if(!Array.isArray(value)||value.length>100||new Set(value).size!==value.length)fail('PUBLIC_CATALOG_SOURCE_INVALID');return value.map(text);}
function amounts(netCents){
 integer(netCents);const vat= (BigInt(netCents)*2000n+5000n)/10000n,total=BigInt(netCents)+vat;
 if(total>BigInt(Number.MAX_SAFE_INTEGER))fail('PUBLIC_CATALOG_SOURCE_INVALID');
 return{netCents,vatCents:Number(vat),totalCents:Number(total)};
}
function expectedIds(rows,ids){if(!Array.isArray(rows)||rows.length!==ids.length||new Set(rows.map(row=>row.id)).size!==ids.length||rows.some(row=>!ids.includes(row.id)))fail('PUBLIC_CATALOG_SOURCE_IDENTITIES_CHANGED');}
function limits(value){return{products:integer(value.products),staff:integer(value.staff),storageBytes:integer(value.storageBytes),monthlyOrders:integer(value.monthlyOrders),customDomains:integer(value.customDomains)};}

try{
 const args=process.argv.slice(2),check=args.includes('--check');
 if(args.filter(arg=>arg==='--check').length>1)fail('Use --source-root with one absolute source path and optional --check.');
 const selected=args.filter(arg=>arg!=='--check');
 if(selected.length!==2||selected[0]!=='--source-root')fail('An explicit --source-root absolute path is required.');
 if(!path.isAbsolute(selected[1]))fail('--source-root must be an absolute path.');
 const root=realpathSync(selected[1]);
 const git=(...command)=>execFileSync('git',['-C',root,...command],{encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
 if(realpathSync(git('rev-parse','--show-toplevel'))!==root)fail('--source-root must identify the source repository root.');
 const commit=git('rev-parse','HEAD');if(!/^[a-f0-9]{40}$/u.test(commit))fail('PUBLIC_CATALOG_SOURCE_INVALID');
 const clean=()=>{try{git('diff','--quiet','HEAD','--',...FILES);}catch{fail('Canonical source files changed; use a clean source commit.');}};
 clean();
 const sources=FILES.map(file=>{const input=path.join(root,file);if(!statSync(input).isFile())fail('PUBLIC_CATALOG_SOURCE_INVALID');return{path:file,sha256:hash(readFileSync(input))};});
 const [{COMMERCIAL_PACKAGES},{TOSHI_CREDIT_OFFERS}]=await Promise.all(FILES.map(file=>import(pathToFileURL(path.join(root,file)).href)));
 expectedIds(COMMERCIAL_PACKAGES,Object.values(PLAN_IDS));expectedIds(TOSHI_CREDIT_OFFERS,CREDIT_IDS);
 const plans=COMMERCIAL_PACKAGES.map(plan=>{
  if(!Object.hasOwn(PLAN_IDS,plan.code)||PLAN_IDS[plan.code]!==plan.id||plan.currency!=='TRY'||plan.vatIncluded!==false)fail('PUBLIC_CATALOG_SOURCE_INVALID');
  return{id:plan.id,code:plan.code,name:text(plan.name),version:integer(plan.version),monthly:amounts(plan.monthlyPriceCents),annual:amounts(plan.annualPriceCents),limits:limits(plan.limits),variantLimit:integer(plan.variantLimit),capabilities:strings(plan.capabilities),features:strings(plan.features),image:`/payments/plans/celebix-${PLAN_IMAGES[plan.code]}-v1.webp`};
 });
 const credits=TOSHI_CREDIT_OFFERS.map(offer=>({id:offer.id,credits:integer(offer.credits),...amounts(offer.netCents),vatBps:2000,image:`/payments/toshi/${offer.id}-v1.webp`}));
 clean();if(git('rev-parse','HEAD')!==commit||sources.some(file=>hash(readFileSync(path.join(root,file.path)))!==file.sha256))fail('Canonical source changed during generation.');
 const value=JSON.stringify({schemaVersion:1,source:{commit,files:sources},vatBps:2000,plans,credits},null,2)+'\n';
 if(check){let existing;try{existing=readFileSync(OUTPUT,'utf8');}catch{fail('Public catalog snapshot is stale or missing.');}if(existing!==value)fail('Public catalog snapshot is stale.');}
 else{mkdirSync(path.dirname(OUTPUT),{recursive:true});writeFileSync(OUTPUT,value);}
 console.log(JSON.stringify({status:check?'current':'generated',sourceCommit:commit,products:plans.length+credits.length}));
}catch(error){console.error(error instanceof Error?error.message:'PUBLIC_CATALOG_GENERATION_FAILED');process.exitCode=1;}
