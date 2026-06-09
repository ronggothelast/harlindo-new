import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light industrial blue-white surfaces
        bg: {
          primary: "rgb(var(--color-bg-primary) / <alpha-value>)",
          surface: "rgb(var(--color-bg-surface) / <alpha-value>)",
          elevated: "rgb(var(--color-bg-elevated) / <alpha-value>)",
          card: "rgb(var(--color-bg-card) / <alpha-value>)",
        },
        // Ink hierarchy
        fg: {
          primary: "rgb(var(--color-fg-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-fg-secondary) / <alpha-value>)",
          muted: "rgb(var(--color-fg-muted) / <alpha-value>)",
          dim: "rgb(var(--color-fg-dim) / <alpha-value>)",
        },
        // Primary brand accent: blue
        amber: {
          DEFAULT: "rgb(var(--color-accent) / <alpha-value>)",
          hover: "rgb(var(--color-accent-hover) / <alpha-value>)",
          glow: "rgb(var(--color-accent) / 0.18)",
        },
        hazard: {
          DEFAULT: "rgb(var(--color-hazard) / <alpha-value>)",
          hover: "rgb(var(--color-hazard-hover) / <alpha-value>)",
        },
        // Theme-aware hairlines
        line: {
          DEFAULT: "rgb(var(--color-line) / <alpha-value>)",
          strong: "rgb(var(--color-line-strong) / <alpha-value>)",
          accent: "rgb(var(--color-line-accent) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.06em",
        tighter: "-0.05em",
        tight: "-0.03em",
        normal: "0",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
      transitionTimingFunction: {
        "haptic": "cubic-bezier(0.32, 0.72, 0, 1)",
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
        "industrial": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.32, 0.72, 0, 1) forwards",
        "blur-in": "blurIn 1s cubic-bezier(0.32, 0.72, 0, 1) forwards",
        "ambient-glow": "ambientGlow 4s ease-in-out infinite",
        "scanline": "scanline 6s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { transform: "translateY(2rem)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        blurIn: {
          "0%": { filter: "blur(12px)", opacity: "0" },
          "100%": { filter: "blur(0)", opacity: "1" },
        },
        ambientGlow: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backdropBlur: {
        "3xl": "64px",
      },
      boxShadow: {
        "amber-glow": "0 18px 48px rgb(var(--color-accent) / 0.18)",
        "card-inset": "inset 0 1px 1px rgb(var(--color-inset) / 0.75)",
        "card-deep": "0 24px 60px rgb(var(--color-shadow) / 0.16), 0 0 0 1px rgb(var(--color-line) / 0.75)",
      },
    },
  },
  plugins: [],
};
export default config;
