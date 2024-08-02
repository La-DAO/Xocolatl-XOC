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
          primary: "#b5412d",
          "primary-content": "#763226",
          secondary: "#f4b7ad",
          "secondary-content": "#763226",
          accent: "#b5412d",
          "accent-content": "#763226",
          neutral: "#763226",
          "neutral-content": "#fdf4f3",
          "base-100": "#fbe8e5",
          "base-200": "#f9d5cf",
          "base-300": "#f4b7ad",
          "base-content": "#763226",
          info: "#b5412d",
          success: "#00d397",
          warning: "#FFCF72",
          error: "#dc2323",

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
          primary: "#763226",
          "primary-content": "#F9FBFF",
          secondary: "#763226",
          "secondary-content": "#F9FBFF",
          accent: "#cb4d37",
          "accent-content": "#F9FBFF",
          neutral: "#F9FBFF",
          "neutral-content": "#b5412d",
          "base-100": "#b5412d",
          "base-200": "#8d3627",
          "base-300": "#763226",
          "base-content": "#F9FBFF",
          info: "#b5412d",
          success: "#00d397",
          warning: "#FFCF72",
          error: "#dc2323",

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
};
