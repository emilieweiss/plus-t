export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primære logo-farver
        brand: {
          black: '#121212',   // din sorte baggrund
          darkgreen: '#0e2c1d',
          green: '#58a66b',
          gray: '#6b717e',
          white: '#ffffff',
        },

        // Sekundære farver
        secondary: {
          red: '#b44d3b',
          yellow: '#e7c447',
          green: '#316c3d',
          bluegray: '#60747f',
          teal: '#397479',
          purple: '#6c3b78',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}