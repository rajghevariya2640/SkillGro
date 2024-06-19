/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.{js,ts,jsx,tsx}',
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
      'xs': '576px'
    },
    extend: {
      colors: {
        'primary': '#5751E1',
        'primary50': '#4A44D1',
        'primaryLight': '#EFEEFE',
        'primaryLight50': '#9E9BF1',
        'primaryLight100': '#D9D9F3',
        'primaryLight200': '#9490FA',
        'txtBlue': '#161439',
        'blue50': '#06042E',
        'blue100': '#1C1A4A',
        'blue200': '#282568',
        'blue300': '#141109',
        'blue400': '#1C1B3C',
        'grey50': '#D3D2DF',
        'grey100': '#BDBABB',
        'grey200': '#B2BBCC',
        'grey300': '#6D6C80',
        'grey400': '#EFEFF2',
        'grey500': '#7F7E97',
        'grey600': '#B5B5C3',
        'grey700': '#8C9AB4',
        'grey800': '#9292B4',
        'grey900': '#3D3D3D',
        'grey1000': '#F2F4F6',
        'grey1100': '#BDBDBD',
        'grey1200': '#F7F7F9',
        'grey1300': '#9D9CAE',
        'grey1400': '#DCDBE5',
        'grey1500': '#5A7093',
        'grey1600': '#E6E9EF',
        'grey1700': '#DFDFDF',
        'grey1800': '#D9D9D9',
        'yellow50': '#FFC224',
        'yellow100': '#F8BC24',
      },
      fontFamily: {
        'inter': 'Inter',
        'poppins': 'Poppins'
      },
      backgroundImage: {
        'bannerBG': "url('/src/assets/image/png/Banner.png')",
        'layoutBG': "url('/src/assets/image/png/layout-bg.png')",
        'lineGradient': 'linear-gradient(to bottom, #fff , #fff0)'
      },
      boxShadow: {
        'common': '6px 8px 0'
      },
      animation: {
        fadeDown: 'fadeDown 0.3s linear',
        slide: 'slide 1s linear'
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
        },
        'slide': {
          '0%': {
            maxHeight: `40px`
          },
          '100%': {
            maxHeight: `100%`

          }
        }
      }
    }
  },
  plugins: []
}
