import assert from 'node:assert/strict';
import test from 'node:test';

const { mountCheckoutProductMotion } = await import('../components/platform-checkout/checkout-motion.mjs').catch(() => ({}));
function fixture() {
  const surface = new EventTarget(), front = {}, back = {}, calls = [];
  surface.getBoundingClientRect = () => ({ left: 0, top: 0, width: 400, height: 240 });
  const engine = Object.fromEntries(['fromTo', 'to', 'set', 'killTweensOf'].map(method => [method, (...args) => calls.push({ method, args })]));
  const pointer = (type, values = {}) => { const event = new Event(type); Object.assign(event, { pointerType: 'mouse', clientX: 200, clientY: 120, ...values }); surface.dispatchEvent(event); };
  return { surface, front, back, engine, calls, pointer };
}
test('reduced motion leaves the server-visible product pass static without pointer handlers', () => {
  const f = fixture();
  assert.equal(typeof mountCheckoutProductMotion, 'function');
  const dispose = mountCheckoutProductMotion({ ...f, reducedMotion: true, allowPointer: true, approved: true });
  f.pointer('pointermove', { clientX: 400 }); dispose();
  assert.deepEqual(f.calls, []);
});
test('the two product surfaces reveal once without changing payment content or fields', () => {
  const f = fixture(), dispose = mountCheckoutProductMotion({ ...f, reducedMotion: false, allowPointer: false });
  const reveal = f.calls.filter(call => call.method === 'fromTo');
  assert.equal(reveal.length, 2);
  assert.deepEqual(reveal.map(call => call.args[0]), [f.back, f.front]);
  assert.equal(reveal[1].args[2].scale, 1); assert.equal(reveal[1].args[2].rotationY, 0);
  f.pointer('pointermove', { clientX: 400 }); assert.equal(f.calls.filter(call => call.method === 'to').length, 0);
  dispose();
});
test('fine-pointer tilt stays bounded and touch cannot tilt the product pass', () => {
  const f = fixture(), dispose = mountCheckoutProductMotion({ ...f, reducedMotion: false, allowPointer: true });
  f.pointer('pointermove', { clientX: 10000, clientY: -10000 });
  const tilt = f.calls.find(call => call.method === 'to');
  assert.equal(tilt.args[0], f.surface); assert.equal(Math.abs(tilt.args[1].rotationX), 3); assert.equal(Math.abs(tilt.args[1].rotationY), 4);
  assert.equal(tilt.args[1].overwrite, 'auto');
  const count = f.calls.length; f.pointer('pointermove', { pointerType: 'touch' }); assert.equal(f.calls.length, count);
  f.pointer('pointerleave'); const reset = f.calls.at(-1); assert.equal(reset.args[1].rotationX, 0); assert.equal(reset.args[1].rotationY, 0);
  dispose(); const removed = f.calls.length; f.pointer('pointermove'); assert.equal(f.calls.length, removed);
  assert.ok(f.calls.some(call => call.method === 'killTweensOf'));
});
test('success emphasis is limited to a verified approved result and cleanup cancels its tweens', () => {
  for (const approved of [false, true]) {
    const f = fixture(), dispose = mountCheckoutProductMotion({ ...f, reducedMotion: false, allowPointer: false, approved });
    const emphasis = f.calls.filter(call => call.method === 'to');
    assert.equal(emphasis.length, approved ? 1 : 0);
    if (approved) { assert.equal(emphasis[0].args[0], f.front); assert.equal(emphasis[0].args[1].repeat, 1); }
    dispose(); assert.deepEqual(f.calls.find(call => call.method === 'killTweensOf').args[0], [f.surface, f.front, f.back]);
  }
});
test('media preference changes and unmount remove every inline tilt so the static pass stays flat', () => {
  const f = fixture(), dispose = mountCheckoutProductMotion({ ...f, reducedMotion: false, allowPointer: true });
  f.pointer('pointermove', { clientX: 400 }); dispose();
  const reset = f.calls.at(-1);
  assert.equal(reset.method, 'set'); assert.deepEqual(reset.args[0], [f.surface, f.front, f.back]);
  assert.equal(reset.args[1].clearProps, 'transform');
});
