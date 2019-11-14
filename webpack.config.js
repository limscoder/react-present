var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,

  devServer: {
    historyApiFallback: true
  },
  devtool: "source-map",

  stats: {
    colors: true,
    reasons: false
  },

  resolve: {
    alias: {
      'react-present': path.join(__dirname, "lib")
    },
    modules: [
      path.join(__dirname, "node_modules")
    ],
    extensions: [".js", ".html"]
  },

  resolveLoader: {
    modules: [path.join(__dirname, "node_modules")]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              path.join(__dirname, "node_modules", "babel-preset-react")
            ],
            "plugins": [
              path.join(__dirname, "node_modules", "babel-plugin-transform-object-rest-spread"),
              path.join(__dirname, "node_modules", "babel-plugin-transform-class-properties")
            ]
          }
        }
      },
      {
        test: /\.((gif)|(png)|(jpg)|(html)|(mp4)|(mov)|(m4a))$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },

  plugins: [
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
