const path = require("path");

module.exports = {
  output: {
    path: path.resolve(__dirname, "../src/assets/js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, "postcss.config.js"),
              }
            },
          },
        ],
      },
    ],
  }
}