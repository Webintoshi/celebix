import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {execFileSync,spawnSync} from 'node:child_process';
import {copyFileSync,mkdtempSync,mkdirSync,readFileSync,rmSync,writeFileSync} from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';
import {fileURLToPath} from 'node:url';

const ROOT=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const FILES=['packages/saas-contracts/src/commercial-packages/catalog.ts','packages/saas-contracts/src/store-tools/index.ts','packages/saas-contracts/src/toshi/credits.ts'];
const hash=value=>createHash('sha256').update(value).digest('hex');
const plans=[
 ['007','free_starter','Ücretsiz',3,0,0,25,1,1,50,0,500],
 ['008','starter','Başlangıç',2,258700,2587000,1000,2,5,1000,4,5000],
 ['009','growth','Büyüme',2,453700,4537000,5000,5,20,5000,4,25000],
 ['010','professional','Profesyonel',2,778700,7787000,10000,15,50,20000,4,50000],
].map(([suffix,code,name,version,monthlyPriceCents,annualPriceCents,products,staff,storage,monthlyOrders,customDomains,variantLimit])=>({id:'00000000-0000-4000-8000-000000000'+suffix,code,name,version,monthlyPriceCents,annualPriceCents,currency:'TRY',vatIncluded:false,limits:{products,staff,storageBytes:storage*1_000_000_000,monthlyOrders,customDomains},variantLimit,capabilities:code==='free_starter'?[]:['ai'],features:['catalog','orders']}));
const tools=[['contact_widget',99000],['whatsapp_ordering',249000],['cart_capture',349000],['restock',449000],['order_bump',599000],['all_tools',1399000]].map(([id,netCents])=>({id,name:id,toolKeys:id==='all_tools'?['contact_widget','whatsapp_ordering','cart_capture','restock','order_bump']:[id],netCents,vatBps:2000,vatCents:netCents/5,totalCents:netCents*6/5,currency:'TRY'}));
const credits=[['toshi-500',500,24900],['toshi-2500',2500,99900],['toshi-10000',10000,299900],['toshi-50000',50000,1249900]].map(([id,credits,netCents])=>({id,credits,netCents}));

function fixture(){
 const dir=mkdtempSync(path.join(os.tmpdir(),'public-catalog-data-')),source=path.join(dir,'source'),target=path.join(dir,'main');
 mkdirSync(path.join(target,'scripts'),{recursive:true});
 const original=path.join(ROOT,'scripts/generate-public-products-catalog.mjs');
 try{copyFileSync(original,path.join(target,'scripts/generate-public-products-catalog.mjs'));}catch(error){rmSync(dir,{recursive:true,force:true});throw error;}
 for(const[file,name,data]of [[FILES[0],'COMMERCIAL_PACKAGES',plans],[FILES[1],'STORE_TOOL_OFFERS',tools],[FILES[2],'TOSHI_CREDIT_OFFERS',credits]]){mkdirSync(path.dirname(path.join(source,file)),{recursive:true});writeFileSync(path.join(source,file),`export const ${name} = ${JSON.stringify(data)};\n`);}
 const git=(...args)=>execFileSync('git',['-C',source,...args],{encoding:'utf8',stdio:['ignore','pipe','pipe']}).trim();
 git('init','-q');git('add','.');git('-c','user.name=Catalog Fixture','-c','user.email=catalog@example.test','commit','-qm','fixture');
 const run=(...args)=>spawnSync(process.execPath,[path.join(target,'scripts/generate-public-products-catalog.mjs'),...args],{encoding:'utf8'});
 const snapshot=path.join(target,'components/public-products/catalog.snapshot.json');
 return{dir,source,target,git,run,snapshot,close:()=>rmSync(dir,{recursive:true,force:true})};
}

test('generator requires an explicit absolute source root before reading or writing a snapshot',()=>{
 const f=fixture();try{
  const missing=f.run();assert.notEqual(missing.status,0);assert.match(missing.stderr,/source-root/);
  const relative=f.run('--source-root','relative');assert.notEqual(relative.status,0);assert.match(relative.stderr,/absolute/);
 }finally{f.close();}
});

test('generator preserves canonical amounts, current identities, limits and source provenance deterministically',()=>{
 const f=fixture();try{
  const first=f.run('--source-root',f.source);assert.equal(first.status,0,first.stderr);
  const bytes=readFileSync(f.snapshot,'utf8'),value=JSON.parse(bytes);
  assert.equal(value.schemaVersion,1);assert.equal(value.vatBps,2000);assert.equal(value.source.commit,f.git('rev-parse','HEAD'));
  assert.deepEqual(value.source.files,FILES.map(file=>({path:file,sha256:hash(readFileSync(path.join(f.source,file)))})));
  assert.deepEqual(value.plans.map(plan=>plan.id),plans.map(plan=>plan.id));
  assert.deepEqual(value.plans.map(plan=>plan.monthly.totalCents),[0,310440,544440,934440]);
  assert.deepEqual(value.plans.map(plan=>plan.annual.totalCents),[0,3104400,5444400,9344400]);
  assert.deepEqual(value.plans.map(plan=>plan.limits),plans.map(plan=>plan.limits));
  assert.deepEqual(value.plans.map(plan=>plan.variantLimit),[500,5000,25000,50000]);
  assert.deepEqual(value.plans.map(plan=>plan.capabilities),plans.map(plan=>plan.capabilities));
  assert.deepEqual(value.tools.map(tool=>tool.totalCents),[118800,298800,418800,538800,718800,1678800]);
  assert.deepEqual(value.tools.map(tool=>tool.toolKeys),tools.map(tool=>tool.toolKeys));
  assert.deepEqual(value.credits.map(credit=>credit.totalCents),[29880,119880,359880,1499880]);
  assert.deepEqual(value.credits.map(credit=>credit.credits),[500,2500,10000,50000]);
  assert.equal(f.run('--source-root',f.source).status,0);assert.equal(readFileSync(f.snapshot,'utf8'),bytes);
  assert.equal(f.run('--source-root',f.source,'--check').status,0);
  writeFileSync(f.snapshot,bytes.replace('310440','310441'));
  const stale=f.run('--source-root',f.source,'--check');assert.notEqual(stale.status,0);assert.match(stale.stderr,/stale/i);
 }finally{f.close();}
});

test('generator rejects uncommitted canonical source changes instead of attributing them to a clean commit',()=>{
 const f=fixture();try{
  writeFileSync(path.join(f.source,FILES[0]),readFileSync(path.join(f.source,FILES[0]),'utf8')+'\n');
  const result=f.run('--source-root',f.source);assert.notEqual(result.status,0);assert.match(result.stderr,/source.*changed|source.*clean/i);
 }finally{f.close();}
});

test('the published fourteen products all point to existing local WebP artwork',()=>{
 const value=JSON.parse(readFileSync(path.join(ROOT,'components/public-products/catalog.snapshot.json'),'utf8'));
 const products=[...value.plans,...value.tools,...value.credits];assert.equal(products.length,14);
 assert.equal(new Set(products.map(product=>product.image)).size,14);
 for(const product of products){
  assert.match(product.image,/^\/payments\/(plans|tools|toshi)\/[a-z0-9-]+-v1\.webp$/);
  const bytes=readFileSync(path.join(ROOT,'public',product.image));
  assert.equal(bytes.subarray(0,4).toString(),'RIFF');assert.equal(bytes.subarray(8,12).toString(),'WEBP');
 }
});
