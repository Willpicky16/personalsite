const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

const scripts = path.resolve(__dirname, 'src');

const webpackConfig = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint-loader'],
        enforce: 'pre',
        include: [scripts],
      },
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
        },
        include: [scripts],
      },
      {
        test: /\.(scss)$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: [scripts],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
    }),
    new StyleLintPlugin({
      configFile: './.stylelintrc',
      syntax: 'scss',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  performance: {
    hints: false, // Stop webpack warning about bundle size
  },
};

module.exports = webpackConfig;
