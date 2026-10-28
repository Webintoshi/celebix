'use client';

import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { mountCheckoutProductMotion } from './checkout-motion.mjs';

gsap.registerPlugin(useGSAP);

interface CheckoutProductVisualProps { image: string; title: string; approved?: boolean }

export function CheckoutProductVisual({ image, title, approved = false }: CheckoutProductVisualProps) {
  const surface = useRef<HTMLDivElement>(null);
  const front = useRef<HTMLDivElement>(null);
  const back = useRef<HTMLDivElement>(null);
  useGSAP((_, contextSafe) => {
    if (!surface.current || !front.current || !back.current) return;
    const media = gsap.matchMedia();
    media.add({ all: 'all', reduced: '(prefers-reduced-motion: reduce)', pointer: '(hover: hover) and (pointer: fine)' }, context => {
      if (!surface.current || !front.current || !back.current) return;
      return mountCheckoutProductMotion({ surface: surface.current, front: front.current, back: back.current, engine: gsap, reducedMotion: Boolean(context.conditions?.reduced), allowPointer: Boolean(context.conditions?.pointer), approved, contextSafe });
    });
    return () => media.revert();
  }, { scope: surface, dependencies: [image, approved], revertOnUpdate: true });

  return <div className="mx-auto w-full max-w-[420px] px-3 py-5 sm:px-5 sm:py-6 [perspective:1200px]">
    <div ref={surface} data-checkout-product-visual="" className="relative [transform-style:preserve-3d]">
      <div ref={back} aria-hidden="true" className="absolute inset-0 translate-y-0 -rotate-[5deg] overflow-hidden rounded-2xl bg-[#282a2d] shadow-[0_10px_30px_-18px_#0006]"><div className="absolute inset-x-6 top-5 h-px bg-white/20" /><div className="absolute bottom-5 right-6 h-1 w-10 rounded-full bg-[#fe6100]" /></div>
      <div ref={front} className="relative overflow-hidden rounded-2xl border border-[#e3e1dd] bg-white shadow-[0_16px_36px_-24px_#0008] [backface-visibility:hidden]">
        <img src={image} alt={title} width={960} height={640} decoding="async" className="aspect-[3/2] h-auto w-full object-contain" />
      </div>
    </div>
  </div>;
}
