import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const source = await readFile(new URL('../components/commerce-v6/lifecycle.js', import.meta.url), 'utf8');
const { createLifecycle, canSynchronizeStoryScroll } = await import('data:text/javascript;base64,' + Buffer.from(source).toString('base64'));

function fixture() {
  const win = new EventTarget();
  Object.assign(win, { innerHeight: 800, history: { scrollRestoration: 'auto' }, setTimeout, clearTimeout, requestAnimationFrame: fn => setTimeout(() => fn(0), 5), cancelAnimationFrame: clearTimeout });
  const doc = new EventTarget();
  Object.assign(doc, { defaultView: win, body: { style: { overflow: 'clip' } }, activeElement: null });
  const root = new EventTarget();
  Object.assign(root, { ownerDocument: doc, querySelector: () => null, querySelectorAll: () => [], contains: () => false, getBoundingClientRect: () => ({ top: 0, bottom: 500 }) });
  return { root, doc, win };
}

test('dispose removes page, media and element listeners', () => {
  const { root, win } = fixture(); const scope = createLifecycle(root); const media = new EventTarget(); let count = 0;
  for (const target of [root, win, media]) { scope.listen(target, 'change', () => count++); target.dispatchEvent(new Event('change')); }
  assert.equal(count, 3); scope.dispose();
  for (const target of [root, win, media]) target.dispatchEvent(new Event('change'));
  assert.equal(count, 3);
});

test('demo events stay inside their page instance', () => {
  const first = fixture(), second = fixture(); const a = createLifecycle(first.root), b = createLifecycle(second.root); let countA = 0, countB = 0;
  a.listen(a.document, 'celebix-commerce:saved', () => countA++); b.listen(b.document, 'celebix-commerce:saved', () => countB++);
  first.root.dispatchEvent(new Event('celebix-commerce:saved'));
  assert.equal(countA, 1); assert.equal(countB, 0); a.dispose(); b.dispose();
});

test('dispose cancels timers and animation frames', async () => {
  const { root } = fixture(); const scope = createLifecycle(root); let count = 0;
  scope.setTimeout(() => count++, 5); scope.requestAnimationFrame(() => count++); scope.dispose();
  await new Promise(resolve => setTimeout(resolve, 20)); assert.equal(count, 0);
});

test('modal scroll lock and history restore previous values', () => {
  const { root, doc, win } = fixture(); const scope = createLifecycle(root);
  scope.lockScroll(); scope.lockScroll(); assert.equal(doc.body.style.overflow, 'hidden');
  scope.unlockScroll(); assert.equal(doc.body.style.overflow, 'clip');
  scope.lockScroll(); win.history.scrollRestoration = 'manual'; scope.dispose(); scope.dispose();
  assert.equal(doc.body.style.overflow, 'clip'); assert.equal(win.history.scrollRestoration, 'auto');
});

test('offscreen page does not consume global keyboard events', () => {
  const { root, win } = fixture(); root.getBoundingClientRect = () => ({ top: 900, bottom: 1400 });
  const scope = createLifecycle(root); let count = 0; scope.listen(win, 'keydown', () => count++);
  win.dispatchEvent(new Event('keydown')); assert.equal(count, 0); scope.dispose();
});

test('story resize reconciliation cannot pull readers back from an offscreen catalog', () => {
  for (const bounds of [{ top: -5200, bottom: 0 }, { top: -5500, bottom: -200 }, { top: -5104, bottom: 96 }, { top: 800, bottom: 6000 }]) {
    assert.equal(canSynchronizeStoryScroll?.({ getBoundingClientRect: () => bounds }, 800), false);
  }
  assert.equal(canSynchronizeStoryScroll?.({ getBoundingClientRect: () => ({ top: -200, bottom: 5000 }) }, 800), true);
});
test('initial location anchors survive opening reset while an ordinary visit retains the existing opening', () => {
  const film = { getBoundingClientRect: () => ({ top: 0, bottom: 5200 }) };
  for (const hash of ['#paketler', '#magaza-araclari', '#toshi-kredileri']) assert.equal(canSynchronizeStoryScroll?.(film, 800, hash), false);
  assert.equal(canSynchronizeStoryScroll?.(film, 800, ''), true);
});
