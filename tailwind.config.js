module.exports = {
  purge: {
    enabled: true,
    content: [
      './**/*.html',
      './**/*.js',
    ]
  },
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Slab', 'serif', 'sans-serif'],
    },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
