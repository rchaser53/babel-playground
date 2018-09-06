const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  cache: false,
  mode: 'development',
  entry: {
    main: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  plugins: [new HtmlWebpackPlugin()],
};