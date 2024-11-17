/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'great-vibes': ['Great Vibes', 'cursive'],
      },
      colors: {
        certificate: {
          gold: '#c1a173',
          bg: '#faf9f6',
          text: '#333333',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};