/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        purple: "#110C24",
        yellow: "#D4AF37",
        brown: "#4D3F48",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
