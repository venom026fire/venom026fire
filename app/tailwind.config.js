/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#07090F",
          900: "#0A0E17",
          800: "#0F1524",
          700: "#141B2D",
          600: "#1B2438",
          500: "#2A3550",
        },
        gold: {
          400: "#E4C486",
          500: "#D6A756",
          600: "#B8863A",
        },
        blue: {
          400: "#7DD9EA",
          500: "#4CC9E8",
          600: "#2E9FBF",
        },
        mist: {
          100: "#F4F6FB",
          200: "#E7EAF2",
          300: "#C4CAD9",
          400: "#9AA3B8",
          500: "#6B7488",
        },
      },
      fontFamily: {
        display: ["Sora", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(76,201,232,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(76,201,232,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "36px 36px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(214,167,86,0.25), 0 20px 60px -20px rgba(214,167,86,0.35)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
