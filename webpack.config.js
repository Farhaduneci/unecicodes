const path = require("path")

module.exports = {
  mode: 'production',
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
        {
            test: /\.css$/i,
            exclude: /node_modules/,
            use: [
              "style-loader",
              { loader: "css-loader", options: { importLoaders: 1 } },
              "postcss-loader",
            ],
        },
    ],
  },
}