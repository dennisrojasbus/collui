const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  stories: ['/stories/**/*.stories.[tj]s'],
};

module.exports = {
  mode: 'production',
  entry: {
    buttons: './src/components/buttons/buttons.js',
    tags: './src/components/tags/tags.js',
    bundle: './src/index.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, './dist'),
    publicPath: ''
  },
  optimization: {
    splitChunks: {
      chunks: "all", //paketera alla framtida dependencies till egna bundles.
      minSize: 12000,
      automaticNameDelimiter: "_"
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['transform-class-properties']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
        ]
      }
    ]
  },
  plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
      new CleanWebpackPlugin( {
        cleanOnceBeforeBuildPatterns: [
            '**/*'
        ]
      }),
      new HtmlWebpackPlugin() // Testing purpose
  ]
};
