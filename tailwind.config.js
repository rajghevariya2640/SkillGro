/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/*.{js,ts,jsx,tsx}',
    './src/shared/*.{js,ts,jsx,tsx}',
    './src/presentation/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '0.75rem'
    },
    screens: {
      'xl': '1400px',
      'lg': '1200px',
      'md': '991px',
      'sm': '768px',
      'xs': '576px',
      'xxs': '425px'
    },
    extend: {
      colors: {
        'primary': '#5751E1',
        'primaryLight': '#EFEEFE',
        'primaryLight100': '#D9D9F3',
        'txtBlue': '#161439',
        'blue50': '#06042E',
        'blue100': '#1C1A4A',
        'grey50': '#D3D2DF',
        'grey100': '#BDBABB',
        'grey200': '#B2BBCC',
        'grey300': '#6D6C80',
        'grey400': '#EFEFF2',
        'grey500': '#7F7E97',
        'grey600': '#B5B5C3',
        'grey700': '#8C9AB4',
        'yellow50': '#FFC224'
      },
      fontFamily: {
        'inter': 'Inter',
        'poppins': 'Poppins'
      },
      backgroundImage: {
        'bannerBG': "url('/src/assets/image/png/Banner.png')"
      },
      boxShadow: {
        'common': '6px 8px 0'
      },
      animation: {
        fadeDown: 'fadeDown 0.3s linear'
      },
      keyframes: {
        'fadeDown': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: 0
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: 1
          }
        }
      }
    }
  },
  plugins: []
}
