/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#F6A690",
          "primary-content": "#3F312D",
          secondary: "#F8E5D6",
          "secondary-content": "#3F312D",
          accent: "#B5412D",
          "accent-content": "#3F312D",
          neutral: "#3F312D",
          "neutral-content": "#ffffff",
          "base-100": "#F9FBFF",
          "base-200": "#f4f8ff",
          "base-300": "#A34F2B",
          "base-content": "#3F312D",
          info: "#F6A690",
          success: "#4caf50",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#693E34",
          "primary-content": "#F9FBFF",
          secondary: "#3F312D",
          "secondary-content": "#F9FBFF",
          accent: "#B5412D",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "neutral-content": "#B5412D",
          "base-100": "#3F312D",
          "base-200": "#B5412D",
          "base-300": "#693E34",
          "base-content": "#F9FBFF",
          info: "#B5412D",
          success: "#4caf50",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
