module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          300: '#FE7B02',
          400: '#FF9533',
        },
        gray: {
          24: '#242222',
        },
        blue: {
          24: '#3A9BD5',
        },
        red: {
          24: '#FE3030',
        },
      },
      width: {
        60: '60px',
        74: '74px',
        374: '374px',
      },
      height: {
        30: '30px',
        37: '37px',
      },
    },
  },
  variants: {
    extend: {
      scale: ['active'],
      borderWidth: ['hover', 'focus'],
      borderColor: ['active', 'focus'],
    },
  },
  plugins: [],
};
