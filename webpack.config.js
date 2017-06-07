const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',
  entry: {
    app: `${__dirname}/src/app.js`
  },
  output: {
    path: `${__dirname}/dist`,
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "stage-0", 'react']
          }
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/views/template.ejs`
    })
  ]
};
