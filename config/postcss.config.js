module.exports = {
  plugins: {
    tailwindcss: {
      purge: {
        enabled: true,
        content: [
          './src/**/*.html',
          './src/**/*.js',
          './src/**/*.md',
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
    },
    autoprefixer: {},
  }
}