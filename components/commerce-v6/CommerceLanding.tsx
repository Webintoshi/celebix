'use client';

import { useEffect, useRef } from 'react';
import { commerceMarkup } from './markup';
import { mountCommerce } from './runtime';

/** The trusted SSR markup is an opaque DOM island owned by its runtime. */
export default function CommerceLanding() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    return mountCommerce(root);
  }, []);

  return (
    <div
      ref={rootRef}
      className="celebix-commerce"
      data-testid="commerce-landing"
      tabIndex={-1}
      dangerouslySetInnerHTML={{ __html: commerceMarkup }}
    />
  );
}
