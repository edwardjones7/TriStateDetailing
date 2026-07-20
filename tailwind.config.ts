import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#08080A",
          900: "#0B0B0E",
          800: "#111114",
          700: "#16161B",
          600: "#1D1D23",
        },
        accent: {
          DEFAULT: "#22D3EE", // electric cyan
          bright: "#38BDF8", // ice blue
          soft: "#7DD3FC",
          deep: "#0EA5C4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(34, 211, 238, 0.35)",
        "glow-lg": "0 0 80px -12px rgba(34, 211, 238, 0.45)",
        card: "0 20px 60px -24px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #22D3EE 0%, #38BDF8 50%, #7DD3FC 100%)",
        "radial-fade": "radial-gradient(60% 60% at 50% 0%, rgba(34,211,238,0.15) 0%, rgba(8,8,10,0) 70%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        shimmer: "shimmer 2.5s linear infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
