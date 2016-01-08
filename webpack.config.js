'use strict';

var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,

  entry: {
    index: './lib/index.js'
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
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?cacheDirectory&loose=es6.classes&optional=runtime&stage=0']
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
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
