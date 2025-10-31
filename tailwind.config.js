// tailwind.config.cjs
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A7E6D7",     // Xanh mint
        secondary: "#F8B7CD",   // Hồng phấn
        accent: "#F0FDFA",      // Xanh nhạt
        pink: "#FDF4F7",        // Hồng nền nhẹ
        cream: "#FFF8F0",       // Kem nhẹ
        lavender: "#F3E8FF",    // Tím nhạt
        sky: "#E0F7FA",         // Xanh trời
        mint: "#E8F5E9",        // Xanh lá nhạt
      },
      fontFamily: {
        sans: ["'Inter'", "sans-serif"],
        cute: ["'Comic Neue'", "cursive"], // Font dễ thương (tùy chọn)
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
    },
  },
  plugins: [],
};