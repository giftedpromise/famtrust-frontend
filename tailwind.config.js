/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'custom-bg': '#C0BDFF',
      },
      colors: {
        'primary-50': 'var(--Color-Style-Primary-Roles-Pri-container, #E2DDFF)',
      },
      height: {
        1092: '1092px',
      },
    },
  },
  plugins: [],
};
