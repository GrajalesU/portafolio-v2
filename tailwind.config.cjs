/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '4rem',
        lg: '6rem',
        xl: '8rem',
        '2xl': '10rem',
      },
      screens: {
        'sm': '600px',
        // => @media (min-width: 640px) { ... }
  
        'md': '700px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '900px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1000px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1200px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
};
