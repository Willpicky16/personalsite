const { merge } = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin(),
    new Dotenv({
      path: './.env.production',
      safe: true,
    }),
  ],
});
