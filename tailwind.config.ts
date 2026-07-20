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
          DEFAULT: "#FB3B41", // Tri-State brand crimson (from logo)
          bright: "#FF6166", // lighter red — hover / glow
          soft: "#FF9A9E",
          deep: "#C21F26", // deep brick red (logo shadow tone)
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(251, 59, 65, 0.38)",
        "glow-lg": "0 0 80px -12px rgba(251, 59, 65, 0.5)",
        card: "0 20px 60px -24px rgba(0, 0, 0, 0.8)",
      },
      backgroundImage: {
        "accent-gradient": "linear-gradient(135deg, #FF5A5F 0%, #FB3B41 50%, #C21F26 100%)",
        "radial-fade": "radial-gradient(60% 60% at 50% 0%, rgba(251,59,65,0.16) 0%, rgba(8,8,10,0) 70%)",
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
