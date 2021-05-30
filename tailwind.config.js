module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#3C404B',
        'coral-pink': '#F4A8A1',
        'warm-yellow': '#FAF3DD',
        'highlight': '#AED9E0',
        'accent-blue-dark': '#8DCED9',
        'accent-blue-light': '#B8F2E6',
      },
      fontFamily: {
        'kaushan': ['Kaushan Script', 'cursive'],
        'overpass': ['Overpass Mono', 'monospace'],
      },
      screens: {
        '2xl': '1600px',
      }
    },
  },
  variants: {},
  plugins: [],
}
