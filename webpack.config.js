const path = require('path');

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
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
        // loader: 'babel-loader',
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        exclude: /node_modules|vue\/src/,
      },
      // {
      //   enforce: 'pre',
      //   test: /\.(ts|vue)$/,
      //   loader: 'eslint-loader',
      //   exclude: /node_modules/
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new VueLoaderPlugin(),
    new HardSourceWebpackPlugin(),
  ],
};