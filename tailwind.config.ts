import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tactical Telemetry Backgrounds
        bg: {
          primary: "#0A0A0A",      // Deactivated CRT
          surface: "#121212",       // Vantablack card
          elevated: "#1A1A1A",      // Elevated surface
          card: "#0F0F0F",          // Card inner core
        },
        // White Phosphor
        fg: {
          primary: "#EAEAEA",
          secondary: "#A1A1AA",
          muted: "#71717A",
          dim: "#52525B",
        },
        // Industrial Accents
        amber: {
          DEFAULT: "#F59E0B",
          hover: "#FBBF24",
          glow: "rgba(245, 158, 11, 0.3)",
        },
        hazard: {
          DEFAULT: "#E61919",
          hover: "#FF2A2A",
        },
        // Hairlines
        line: {
          DEFAULT: "rgba(255, 255, 255, 0.08)",
          strong: "rgba(255, 255, 255, 0.12)",
          accent: "rgba(245, 158, 11, 0.2)",
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
        "amber-glow": "0 0 32px rgba(245, 158, 11, 0.3)",
        "card-inset": "inset 0 1px 1px rgba(255,255,255,0.06)",
        "card-deep": "0 24px 48px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255,255,255,0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
