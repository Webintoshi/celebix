"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";

// A/B Test Context
interface ABTestContextType {
  getVariant: (testId: string) => string;
  trackConversion: (testId: string, variant: string) => void;
}

const ABTestContext = createContext<ABTestContextType | null>(null);

export function useABTest() {
  const context = useContext(ABTestContext);
  if (!context) {
    throw new Error("useABTest must be used within ABTestProvider");
  }
  return context;
}

// A/B Test Provider
interface ABTestProviderProps {
  children: ReactNode;
}

export function ABTestProvider({ children }: ABTestProviderProps) {
  const [tests, setTests] = useState<Record<string, string>>({});

  useEffect(() => {
    // Load test variants from localStorage
    const savedTests = localStorage.getItem("ab-tests");
    if (savedTests) {
      setTests(JSON.parse(savedTests));
    }
  }, []);

  const getVariant = (testId: string): string => {
    if (tests[testId]) return tests[testId];
    
    // Assign random variant (50/50 split)
    const variant = Math.random() < 0.5 ? "A" : "B";
    const newTests = { ...tests, [testId]: variant };
    setTests(newTests);
    localStorage.setItem("ab-tests", JSON.stringify(newTests));
    
    // Track assignment
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "ab_test_assignment", {
        test_id: testId,
        variant: variant,
      });
    }
    
    return variant;
  };

  const trackConversion = (testId: string, variant: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "ab_test_conversion", {
        test_id: testId,
        variant: variant,
      });
    }
  };

  return (
    <ABTestContext.Provider value={{ getVariant, trackConversion }}>
      {children}
    </ABTestContext.Provider>
  );
}

// A/B Test Component
interface ABTestProps {
  testId: string;
  variantA: ReactNode;
  variantB: ReactNode;
}

export function ABTest({ testId, variantA, variantB }: ABTestProps) {
  const { getVariant } = useABTest();
  const variant = getVariant(testId);
  
  return <>{variant === "A" ? variantA : variantB}</>;
}

// Optimized CTA Button with tracking
interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  trackingId?: string;
  className?: string;
}

export function CTAButton({
  href,
  children,
  variant = "primary",
  size = "md",
  trackingId,
  className = "",
}: CTAButtonProps) {
  const handleClick = () => {
    if (trackingId && typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "cta_click", {
        cta_id: trackingId,
        cta_text: typeof children === "string" ? children : "button",
      });
    }
  };

  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200";
  
  const variantStyles = {
    primary: "bg-dark-900 text-light-100 hover:bg-dark-800 hover:scale-105",
    secondary: "bg-aurora-violet text-white hover:bg-aurora-violet/90 hover:scale-105",
    outline: "border-2 border-dark-900 text-dark-900 hover:bg-dark-900 hover:text-light-100",
  };
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {children}
    </a>
  );
}

// Form tracking wrapper
interface TrackableFormProps {
  children: ReactNode;
  formId: string;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
}

export function TrackableForm({
  children,
  formId,
  onSubmit,
  className = "",
}: TrackableFormProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "form_submit", {
        form_id: formId,
      });
    }
    
    onSubmit?.(e);
  };

  const handleFocus = () => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "form_start", {
        form_id: formId,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} onFocus={handleFocus} className={className}>
      {children}
    </form>
  );
}

// Scroll depth tracker
export function useScrollDepth(thresholds: number[] = [25, 50, 75, 90]) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    
    const tracked = new Set<number>();
    
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      
      thresholds.forEach(threshold => {
        if (scrollPercent >= threshold && !tracked.has(threshold)) {
          tracked.add(threshold);
          
          if ((window as any).gtag) {
            (window as any).gtag("event", "scroll_depth", {
              depth: threshold,
            });
          }
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [thresholds]);
}

// Active A/B Tests Configuration
export const ACTIVE_TESTS = {
  // Hero CTA button text
  "hero-cta-text": {
    name: "Hero CTA Button Text",
    variantA: "Ücretsiz Demo Al",
    variantB: "Hemen Başla",
  },
  
  // Contact form headline
  "contact-headline": {
    name: "Contact Form Headline",
    variantA: "Bizimle İletişime Geçin",
    variantB: "Projenizi Konuşalım",
  },
  
  // Pricing page layout
  "pricing-highlight": {
    name: "Pricing Highlight",
    variantA: "Pro Paket",
    variantB: "Premium Paket",
  },
};

export type TestId = keyof typeof ACTIVE_TESTS;
