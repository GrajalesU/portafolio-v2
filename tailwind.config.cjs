/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Red Hat Display", "sans-serif"],
      },
      backgroundImage: {
        "wave-projects": "url(./assets/background/wave-projects.png)",
        "wave-about": "url(./assets/background/wave-about.png)",
        "wave-tech": "url(./assets/background/wave-tech.png)",
        "wave-contact": "url(./assets/background/wave-contact.png)",

      },
    },
  },
  plugins: [],
};
