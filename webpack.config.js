'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,

  entry: {
    slidedeck: './lib/index.js'
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
        test: /\.scss$/,
        loader: 'css-loader?-advanced!autoprefixer-loader?{browsers:["last 2 version", "ie >= 9"]}!sass-loader'
      },
      {
        test: /\.woff($|\?)/,
        loader: 'url?limit=10000&minetype=application/font-woff'
      },
      {
        test: /\.ttf($|\?)/,
        loader: 'file'
      },
      {
        test: /\.eot($|\?)/,
        loader: 'file'
      },
      {
        test: /\.svg($|\?)/,
        loader: 'file'
      },
      {
        test: /\.png$/,
        loader: 'file'
      },
      {
        test: /\.html$/,
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
