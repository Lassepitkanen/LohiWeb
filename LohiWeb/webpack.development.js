const webpack = require("webpack");
const merge = require("webpack-merge");

const common = require("./webpack.common.js");

console.log('Starting the development server...\n');
const port = parseInt(process.env.PORT, 10) || 8083;
module.exports = merge(common, {
  devServer: {
    compress: true,
    port: port,
    contentBase: '/',
    publicPath: '/'
  },
  mode: "development",

  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [
                require("autoprefixer"),
              ],
            },
          },
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: JSON.stringify("true"),
    }),
  ],
});
