/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#7B68EE",
      },
      fontFamily:{
        almost: ["Almost","sans-serif"],
        work: ["Work sans","sans-serif"],
        inter: ["Inter","sans-serif"],
      },
    },
  },
  plugins: [],
  corePlugins: {
    // Ensure `scrollBehavior` is not disabled in Tailwind
    scrollBehavior: true,
  },
}
