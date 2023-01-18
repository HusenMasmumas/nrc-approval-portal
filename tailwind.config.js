/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        NotoSansThai: ["NotoSansThai", "sans-serif"],
        NotoSansThaiBold: ["NotoSansThai-Bold", "sans-serif"],
        NotoSansThaiMedium: ["NotoSansThaiMedium"],
      },
      colors: {
        textBlack: "#141414",
      },
    },
  },
  plugins: [],
};
