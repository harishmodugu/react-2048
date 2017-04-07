const path = require('path');
const webpack = require('webpack');
const webPublicPath = path.resolve(__dirname, 'public');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(webPublicPath,'/index.html'),
  filename: 'index.html',
  inject: 'body'
});

const config = {
  entry: path.resolve(__dirname, 'src/app.js'),
  output: {
    path: webPublicPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/js/components/'),
      css: path.resolve(__dirname, 'src/js/styles/')
    }
  },
  plugins: [HtmlWebpackPluginConfig]
};

module.exports = config;

