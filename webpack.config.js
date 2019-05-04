const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/client/index.tsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: false,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx|js)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      inject: false,
      template: require('html-webpack-template'),
      appMountId: 'root'
    })
  ]
}