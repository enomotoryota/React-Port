/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "200px", // 上書き
        sm: "450px", // 上書き
        md: "640px",
        lg: "768px",
        xl: "1024px",
        xxl: "1280px",
        xxx: "1600px", // 新たに追加
      },
      fontFamily: {
        sawarabi: ["Sawarabi Mincho"],
        Balow: ["Balow"],
        hannari: ["hannari.css"],
        Abel: ["Abel"],
      },
      colors: {
        aziwai: ["#F8FAFC"],
      },
    },
  },
  plugins: [],
};
