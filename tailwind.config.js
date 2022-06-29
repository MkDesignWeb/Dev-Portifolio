/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      backgroundImage: {
        'DegTopPC': "url('/src/Assets/Img/BrilhoTopoPC.svg')",
        'DegTopMB': "url('/src/Assets/Img/BrilhoTopoMB.svg')"
      },
      fontFamily: {
        sans: 'Roboto, sans-serif',
        UniSansBold: 'UniSansBold, sans-serif',
        UniSansThin: 'UniSansThin, sans-serif'
      },
      colors: {
        'primary': '#5A099D',
        'primaryOut': '#38095e',
        'primaryOn': '#6f0cc0'
      }
    },
  },
  plugins: [],
}
