/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: ["Rancho", "cursive"],
        raleway: ["Raleway", "sans-serif"],
      },
      backgroundImage: {
        'add-coffee': "url('/src/assets/more/addcoffeebg.png')",
        'our-products': "url('/src/assets/more/productsbg.png')",
        'footer': "url('/src/assets/more/footer.jpg')",
        'nav-bar': "url('/src/assets/more/navbg.jpg')",
        'copy-right': "('/src/assets/more/copyright.jpg')"
      },
      backgroundColor: {
        'form': '#F4F3F0',
        'btn-color': "#D2B48C",

      },
      borderColor: {
        'text-btn': '#331A15',
      },
      textColor: {
        'text-header': '#374151',
        'text-p': '#1B1A1AB3',
        'text-h5': '#1B1A1ACC',
        'text-input': '#1B1A1A99',
        'text-btn': '#331A15'

      }
    },
  },
  plugins: [require('daisyui'),],
}

