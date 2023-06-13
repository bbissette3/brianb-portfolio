/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#5f7adb",
        "custom-lightblue": "#a2b2ee",
      },
      rotate: {
        360: "360deg",
      },
    },
  },
  plugins: [],
};
