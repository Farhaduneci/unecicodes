const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const baseUrl = "https://farhaduneci.github.io/unecicodes/";

module.exports = {
  output: {
    //Base path for exporting files
    path: path.resolve(__dirname, "../src/assets"),

    //JS files saving path
    filename: "js/bundle.[contenthash].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader, //Used for extracting CSS files
            options: {
              publicPath: baseUrl + "assets/css"
            }
          },
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, "../src/_layouts/default.html"),
      template: path.resolve(__dirname, "../src/index.html"),
      publicPath: baseUrl + "assets/",
      minify: false,
      base: baseUrl
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!img/**', '!styles/**'],
    }),
    new MiniCssExtractPlugin({
      filename : "css/[name].[contenthash].css",
    })
  ]
}