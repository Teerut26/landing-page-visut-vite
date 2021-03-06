module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#00506B",
        primary2: "#0083AF",
        secondary1: "#F7EA00",
        secondary2: "#F7EA00",
      },
    },
    screens: {
      sm2: "433px",
      sm: "640px",
      md: "768px",
      md2: "820px",
      md3: "960px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
