module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#__next",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [],
};
