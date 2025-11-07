import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        background: "#0B0B0C",
        foreground: "#F4F1EB",
        surface: {
          800: "#111113",
          700: "#16171A",
        },
        muted: {
          DEFAULT: "#1B1C1F",
          foreground: "#9FA6B7",
        },
        card: {
          DEFAULT: "#121316",
          foreground: "#F4F1EB",
        },
        accent: {
          DEFAULT: "#7C8AA6",
          foreground: "#0B0B0C",
        },
        gold: {
          DEFAULT: "#C7A86A",
          600: "#B89359",
          700: "#997740",
        },
        success: "#58B099",
        danger: "#E16F6F",
        neon: {
          from: "#C7A86A",
          to: "#7C8AA6",
        },
        border: "#1F222A",
        input: "#222530",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "serif"],
      },
      borderRadius: {
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.5rem",
      },
      boxShadow: {
        glass: "0 1px 0 rgba(255,255,255,0.04) inset, 0 8px 30px rgba(0,0,0,0.4)",
        soft: "0 30px 60px rgba(0, 0, 0, 0.45)",
        glow: "0 0 40px rgba(199, 168, 106, 0.25)",
      },
      backgroundImage: {
        grid:
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        neon: "linear-gradient(135deg, #C7A86A, #7C8AA6)",
      },
      backgroundSize: {
        grid: "42px 42px",
      },
      animation: {
        shimmer: "shimmer 2.8s ease-in-out infinite",
        float: "float 8s ease-in-out infinite",
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-700px 0" },
          "100%": { backgroundPosition: "700px 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

