'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: {
    index: './lib/index.jsx'
  },

  output: {
    publicPath: '',
    path: 'dist/',
    filename: 'index.js',
    library: 'index',
    libraryTarget: 'var'
  },

  debug: true,
  devtool: 'source-map',

  stats: {
    colors: true,
    reasons: false
  },

  resolve: {
    modulesDirectories: ['lib', 'node_modules'],
    extensions: ['', '.js', '.html']
  },

  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },

  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          optional: ['runtime'],
          stage: 1
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-advanced!autoprefixer-loader?{browsers:["last 2 version", "ie >= 9"]}')
      },
      {
        test: /\.((gif)|(png)|(jpg)|(html))$/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('./index.css', { allChunks: true, disable: false }),
  ]
};
