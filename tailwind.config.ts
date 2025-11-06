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
        background: "#0b0d10",
        foreground: "#e6e6f0",
        muted: {
          DEFAULT: "#0f1115",
          foreground: "#9aa0a6",
        },
        card: {
          DEFAULT: "#0d0f13",
          foreground: "#e6e6f0",
        },
        accent: {
          DEFAULT: "#5b7cfd",
          foreground: "#0b0d10",
        },
        neon: {
          from: "#7c4dff",
          to: "#00e5ff",
        },
        border: "#1b2230",
        input: "#1b2230",
      },
      borderRadius: {
        lg: "14px",
      },
      boxShadow: {
        glass: "0 1px 0 rgba(255,255,255,0.06) inset, 0 8px 30px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "grid":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "neon": "linear-gradient(135deg, #7c4dff, #00e5ff)",
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

