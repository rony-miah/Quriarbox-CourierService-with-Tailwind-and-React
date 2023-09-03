/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#FFD078',
        primary: '#F95C19',
      },
      maxWidth: {
        container: '1320px'
      },
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'oxanium': ['Oxanium', 'cursive']
      },
      
      backgroundImage: {
        'banner2': "url('./assets/banner-img2.png')",
        // 'cloud': "url('./assets/cloud.png')"
      }
    },
  },
  plugins: [],
}