module.exports = {
  plugins: {
    tailwindcss: {
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
    },
    autoprefixer: {},
  }
}