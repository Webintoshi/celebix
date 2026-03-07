import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Foundation
        light: {
          DEFAULT: "#F8F8F8",
          50: "#FFFFFF",
          100: "#F8F8F8",
          200: "#EFEFEF",
          300: "#E0E0E0",
        },
        dark: {
          DEFAULT: "#2A2A2A",
          950: "#1A1A1A",
          900: "#2A2A2A",
          800: "#3A3A3A",
          700: "#4A4A4A",
        },
        // Aurora Accents
        aurora: {
          indigo: "#6366F1",
          violet: "#8B5CF6",
          magenta: "#EC4899",
          coral: "#F97316",
        },
        // Semantic
        background: "#F8F8F8",
        foreground: "#2A2A2A",
        surface: {
          DEFAULT: "#FFFFFF",
          elevated: "#FFFFFF",
          glass: "rgba(248, 248, 248, 0.7)",
        },
        border: "rgba(42, 42, 42, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-cal)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        display: ["clamp(3.5rem, 8vw, 7rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.5rem, 5vw, 4rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        h2: ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.2" }],
        h3: ["clamp(1.25rem, 2vw, 1.5rem)", { lineHeight: "1.3" }],
        body: ["clamp(1rem, 1.1vw, 1.125rem)", { lineHeight: "1.6" }],
        small: ["clamp(0.875rem, 1vw, 0.9375rem)", { lineHeight: "1.5" }],
        micro: ["0.75rem", { lineHeight: "1.4" }],
      },
      spacing: {
        "section": "clamp(4rem, 10vw, 8rem)",
      },
      maxWidth: {
        container: "1400px",
      },
      borderRadius: {
        bento: "24px",
        card: "16px",
      },
      backdropBlur: {
        glass: "20px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.25, 1, 0.5, 1) forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-down": "slideDown 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "float": "float 6s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "marquee": "marquee 40s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
