const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webPublicPath = path.resolve(__dirname, 'public');
const rootPath = path.resolve(__dirname, 'src');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.join(rootPath,'/index.html'),
  filename: 'index.html',
  inject: 'body'
});

const CopyWebpackPluginConfig = new CopyWebpackPlugin([
    {
      from: path.join(rootPath, '/index.html'),
      to: path.join(webPublicPath, '/index.html')
    }
]);


const config = {
  entry: path.join(rootPath, 'app.js'),
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
      components: path.join(rootPath, 'js/components/'),
      css: path.join(rootPath, 'js/styles/'),
      react: path.resolve(__dirname, './node_modules/react'),
      React: path.resolve(__dirname, './node_modules/react')
    }
  },
  plugins: [HtmlWebpackPluginConfig, CopyWebpackPluginConfig]
};

module.exports = config;

