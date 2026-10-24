/** Own all browser effects for one commerce page instance. */
export function createLifecycle(root) {
  const doc = root.ownerDocument;
  const win = doc.defaultView;
  const cleanups = [];
  const timers = new Set();
  const frames = new Set();
  const priorRestoration = win.history.scrollRestoration;
  let disposed = false;
  let ownsScrollLock = false;
  let priorOverflow = '';

  const scopedDocument = new Proxy(doc, {
    get(target, key) {
      if (key === 'querySelector') return selector => root.querySelector(selector);
      if (key === 'querySelectorAll') return selector => root.querySelectorAll(selector);
      if (key === 'getElementById') return id => root.querySelector('#' + win.CSS.escape(id));
      const value = Reflect.get(target, key, target);
      return typeof value === 'function' ? value.bind(target) : value;
    },
  });

  function listen(target, type, callback, options) {
    const source = target === scopedDocument
      ? (type.startsWith('celebix-commerce:') ? root : doc) : target;
    const handler = event => {
      if (disposed) return;
      if (source === win && type === 'keydown') {
        const rect = root.getBoundingClientRect();
        if (!root.contains(doc.activeElement) && (rect.bottom <= 0 || rect.top >= win.innerHeight)) return;
      }
      if (typeof callback === 'function') callback.call(source, event);
      else callback.handleEvent(event);
    };
    source.addEventListener(type, handler, options);
    cleanups.push(() => source.removeEventListener(type, handler, options));
  }

  function lockScroll() {
    if (ownsScrollLock) return;
    priorOverflow = doc.body.style.overflow;
    ownsScrollLock = true;
    doc.body.style.overflow = 'hidden';
  }
  function unlockScroll() {
    if (!ownsScrollLock) return;
    doc.body.style.overflow = priorOverflow;
    ownsScrollLock = false;
  }
  function later(callback, delay, ...args) {
    if (disposed) return 0;
    const id = win.setTimeout(() => { timers.delete(id); if (!disposed) callback(...args); }, delay);
    timers.add(id);
    return id;
  }
  function clearLater(id) { timers.delete(id); win.clearTimeout(id); }
  function frame(callback) {
    if (disposed) return 0;
    const id = win.requestAnimationFrame(time => { frames.delete(id); if (!disposed) callback(time); });
    frames.add(id);
    return id;
  }
  function clearFrame(id) { frames.delete(id); win.cancelAnimationFrame(id); }
  function dispose() {
    if (disposed) return;
    disposed = true;
    cleanups.reverse().forEach(cleanup => cleanup());
    timers.forEach(id => win.clearTimeout(id));
    frames.forEach(id => win.cancelAnimationFrame(id));
    timers.clear(); frames.clear();
    root.querySelectorAll('dialog[open]').forEach(dialog => dialog.close());
    unlockScroll();
    win.history.scrollRestoration = priorRestoration;
  }
  return { document: scopedDocument, window: win, listen, lockScroll, unlockScroll, setTimeout: later, clearTimeout: clearLater, requestAnimationFrame: frame, cancelAnimationFrame: clearFrame, dispose };
}
