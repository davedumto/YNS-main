import { Manrope } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "six-color-gradient":
          "linear-gradient(-39deg, #F6DEAE 0% 28%, #98BC6D 28% 50%, #F2A300 50% 68%, #114F3C 68% 80%, #EF4C0D 80% 90%)",
        "touch-color-gradient":
          "linear-gradient(-39deg, #F6DEAE 0%, #98BC6D 28%, #EF4C0D 50%, #F2A300 68%, #FFFFFF 100%)",
        "nine-color-blocks":
          "linear-gradient(-39deg, #EF4C0D 15%, #FFFFFF 15% 20%, #F6DEAE 20% 35%, #FFFFFF 35% 40%, #F2A300 40% 55%, #FFFFFF 55% 60%, #F6DEAE 60% 75%, #FFFFFF 75% 80%, #98BC6D 80% 95%)",
        "eight-color-block":
          "linear-gradient( -75deg, #F6DEAE 0% 16%, #000000 16% 19%, #98BC6D 20% 38%, #000000 38% 42%, #F2A300 42% 63%, #000000 63% 66%, #114F3C 65% 79%, #000000 79% 87%,  #EF4C0D 87% 95% )",
        "movement-gradient":
          "linear-gradient(-39deg, #F6DEAE 0% 30%, #98BC6D 30% 48%, #F2A300 48% 65%, #114F3C 65% 72%, #EF4C0D 72% 90%)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backdropBlur: {
        "4": "blur(4px)",
      },
      colors: {
        ash: "#8E9BAE",
        "dark-ash": "#55534E",
        "light-green": "#98BC6D",
        "dark-green": "#114F3C",
        "lighter-yellow": "#F6DEAE",
        "dark-orange": "#EF4C0D",
        yellow: "#F2A300",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spin-slow": "spin 10s linear infinite",
      },
      fontFamily: {
        cocon: ["Cocon", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },

  plugins: [require("tailwindcss-animate")],
};

export default config;
