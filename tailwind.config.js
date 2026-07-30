/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1F3A',
          50: '#E8ECF2',
          100: '#C7D1DF',
          200: '#9FAFC6',
          300: '#728EAC',
          400: '#476594',
          500: '#264277',
          600: '#17305F',
          700: '#0B1F3A',
          800: '#08172C',
          900: '#050F1D',
        },
        gold: {
          DEFAULT: '#C9A227',
          50: '#FBF6E8',
          100: '#F3E6BE',
          200: '#EAD592',
          300: '#E1C466',
          400: '#D6B444',
          500: '#C9A227',
          600: '#A3821E',
          700: '#7A6117',
          800: '#52410F',
          900: '#292008',
        },
        offwhite: '#F8F7F4',
        charcoal: '#1A1A1A',
        neutral: {
          DEFAULT: '#D9D6CE',
          light: '#E8E6E0',
          dark: '#B7B3A8',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
