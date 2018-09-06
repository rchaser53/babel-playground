const path = require('path');

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  cache: false,
  mode: 'development',
  entry: {
    main: './src/index.ts',
  },
  resolve: {
    extensions: [".ts", ".vue", ".js"],
    alias: {
      vue: 'vue/dist/vue.common.js'
    },
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.ts$/,
        include: [path.resolve(__dirname, 'src')],
        loader: 'babel-loader',
        exclude: /node_modules|vue\/src/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new VueLoaderPlugin(),
  ],
};