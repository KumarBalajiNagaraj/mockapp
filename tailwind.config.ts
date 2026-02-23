import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fffefa",
        primary: {
          DEFAULT: "#ff612b",
          hover: "#e8561f",
          light: "#fff0eb",
        },
        dark: {
          DEFAULT: "#181818",
          gray: "#434343",
          muted: "#2a2a2a",
        },
        muted: {
          DEFAULT: "#858483",
          light: "#a3a3a3",
        },
        border: "#e5e5e5",
        "light-gray": "#f5f5f5",
      },
      fontFamily: {
        sans: ["var(--font-primary)", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
      },
      maxWidth: {
        container: "1400px",
      },
      animation: {
        "marquee": "marquee 40s linear infinite",
        "marquee-slow": "marquee 60s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
}

export default config
