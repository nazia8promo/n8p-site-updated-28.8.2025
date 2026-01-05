/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'nazia-green': {
          light: '#228B22',
          DEFAULT: '#228B22',
          dark: '#006400',
          darker: '#004400',
          darkest: '#003300'
        },
        'promo-orange': {
          light: '#FFA500',
          DEFAULT: '#FFA500',
          dark: '#FF8C00',
          vivid: '#FF8000'
        },
        'accent-green': '#00A651',
        'shadow-gray': '#E0E0E0'
      },
      backgroundImage: {
        'nazia-gradient': 'linear-gradient(135deg, #228B22 0%, #006400 100%)',
        'promo-gradient': 'linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)',
        'infinity-gradient': 'linear-gradient(180deg, #FF8000 0%, #00A651 100%)',
        'brand-gradient': 'linear-gradient(135deg, #228B22 0%, #FFA500 50%, #FF8C00 100%)'
      }
    },
  },
  plugins: [],
};
