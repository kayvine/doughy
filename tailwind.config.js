module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue'],
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    fontFamily: {
      display: ['"Playfair Display"', 'sans-serif'],
      body: ['Nunito', 'Helvetica', 'Arial', 'sans-serif']
    },
    extend: {
      colors: {
        vue: '#42b983',
        cyan: '#9cdbff'
      }
    }
  },
  variants: {},
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  }
};
