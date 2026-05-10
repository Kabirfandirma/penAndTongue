import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#035F2C",
          dark: "#024A22",
          light: "#047A38",
        },
        accent: {
          DEFAULT: "#FC8600",
          dark: "#E07800",
          light: "#FF9A2B",
        },
        soft: {
          DEFAULT: "#AAD64C",
          dark: "#8FB83A",
          light: "#BFE06A",
        },
        background: {
          DEFAULT: "#CAEECA",
          dark: "#B0E0B0",
          light: "#E4F8E4",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        arabic: ["Amiri", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
}

export default config
