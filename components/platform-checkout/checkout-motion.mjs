/** Product presentation only; this helper never reads or controls the payment form.
 * @param {{surface: HTMLElement, front: HTMLElement, back: HTMLElement, engine: typeof import('gsap').gsap, reducedMotion: boolean, allowPointer: boolean, approved?: boolean, contextSafe?: (callback: (event: PointerEvent) => void) => (event: PointerEvent) => void}} options
 */
export function mountCheckoutProductMotion({ surface, front, back, engine, reducedMotion, allowPointer, approved = false, contextSafe = callback => callback }) {
  if (reducedMotion) return () => {};
  engine.fromTo(back, { rotation: -9, y: 14 }, { rotation: -5, y: 0, duration: 1.1, ease: 'expo.out' });
  engine.fromTo(front, { y: 20, scale: 0.97, rotationY: -8 }, { y: 0, scale: 1, rotationY: 0, duration: 1, ease: 'expo.out', clearProps: 'transform' });
  if (approved) engine.to(front, { scale: 1.015, duration: 0.4, delay: 1, repeat: 1, yoyo: true, ease: 'sine.inOut', clearProps: 'transform' });

  const move = contextSafe(event => {
    if (event.pointerType === 'touch') return;
    const rect = surface.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;
    const x = Math.max(-0.5, Math.min(0.5, (event.clientX - rect.left) / rect.width - 0.5));
    const y = Math.max(-0.5, Math.min(0.5, (event.clientY - rect.top) / rect.height - 0.5));
    engine.to(surface, { rotationX: -y * 6, rotationY: x * 8, duration: 0.55, ease: 'power2.out', overwrite: 'auto' });
  });
  const leave = contextSafe(() => engine.to(surface, { rotationX: 0, rotationY: 0, duration: 0.7, ease: 'power2.out', overwrite: 'auto' }));
  if (allowPointer) { surface.addEventListener('pointermove', move); surface.addEventListener('pointerleave', leave); }
  return () => {
    surface.removeEventListener('pointermove', move); surface.removeEventListener('pointerleave', leave);
    engine.killTweensOf([surface, front, back]);
    engine.set([surface, front, back], { clearProps: 'transform' });
  };
}
