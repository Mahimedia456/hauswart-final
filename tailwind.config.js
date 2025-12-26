/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  // Keep dark mode future-proof
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        primary: "#F38B14",
        "primary-hover": "#000000",

        /* Light theme */
        "background-light": "#FAFAFA",
        "card-light": "#FFFFFF",
        "text-light": "#111111",
        "text-secondary-light": "#777777",
        "input-bg-light": "#F5F5F5",
        "input-border-light": "#DDDDDD",

        /* Dark theme (future-ready) */
        "background-dark": "#0B0B0F",
        "card-dark": "#111827",
        "text-dark": "#F9FAFB",
        "text-secondary-dark": "#9CA3AF",
      },

      borderRadius: {
        md: "12px",
      },

      boxShadow: {
        subtle: "0 6px 20px rgba(0,0,0,0.06)",
      },

      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};
