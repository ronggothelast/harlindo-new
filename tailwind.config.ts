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
          primary: "#F7FAFF",
          surface: "#FFFFFF",
          elevated: "#EEF6FF",
          card: "#FFFFFF",
        },
        // Ink hierarchy
        fg: {
          primary: "#0F172A",
          secondary: "#475569",
          muted: "#64748B",
          dim: "#94A3B8",
        },
        // Primary brand accent: blue
        amber: {
          DEFAULT: "#1D4ED8",
          hover: "#1E40AF",
          glow: "rgba(29, 78, 216, 0.18)",
        },
        hazard: {
          DEFAULT: "#DC2626",
          hover: "#B91C1C",
        },
        // Light-mode hairlines
        line: {
          DEFAULT: "rgba(37, 99, 235, 0.12)",
          strong: "rgba(15, 23, 42, 0.16)",
          accent: "rgba(29, 78, 216, 0.22)",
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
        "amber-glow": "0 18px 48px rgba(29, 78, 216, 0.18)",
        "card-inset": "inset 0 1px 1px rgba(255,255,255,0.75)",
        "card-deep": "0 24px 60px rgba(15, 23, 42, 0.10), 0 0 0 1px rgba(37, 99, 235, 0.10)",
      },
    },
  },
  plugins: [],
};
export default config;
