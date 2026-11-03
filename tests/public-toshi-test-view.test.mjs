import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import test from 'node:test';

const require=createRequire(import.meta.url),ts=require('typescript');
function load(relative){
  const filename=new URL('../'+relative,import.meta.url);
  const output=ts.transpileModule(readFileSync(filename,'utf8'),{compilerOptions:{jsx:ts.JsxEmit.ReactJSX,module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022,esModuleInterop:true}}).outputText;
  const compiled={exports:{}};
  new Function('require','module','exports',output)(name=>{
    if(name==='next/navigation')return{redirect:destination=>{throw Object.assign(new Error('NEXT_REDIRECT'),{destination});}};
    assert.fail('retired purchase entry must not load form signing or the commerce bridge: '+name);
  },compiled,compiled.exports);
  return compiled.exports;
}

test('old test-package links lead to the active credit catalog without preparing a purchase',()=>{
  const Page=load('app/checkout/saas/toshi-test/page.tsx');
  assert.equal(Page.dynamic,'force-dynamic');
  for(const searchParams of [undefined,{error:'unavailable'},{store:'ezmeo'}]){
    assert.throws(()=>Page.default({searchParams}),error=>error.destination==='/tr/e-ticaret-paketleri#toshi-kredileri');
  }
});

test('stale or replayed public test POSTs are gone and cannot contact the payment bridge',async()=>{
  const route=load('app/api/platform-checkout/public-test/route.ts');
  assert.equal(route.dynamic,'force-dynamic');
  for(const body of ['',new URLSearchParams({operationId:'old',proof:'old',store:'ezmeo'}).toString()]){
    const response=await route.POST(new Request('https://celebix.net/api/platform-checkout/public-test',{method:'POST',body}));
    assert.equal(response.status,410);
    assert.match(response.headers.get('cache-control'),/no-store/);
    assert.equal(response.headers.get('location'),null);
    assert.equal(response.headers.get('set-cookie'),null);
  }
});
