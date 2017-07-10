var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: __dirname,

  entry: {
    index: "./lib/index.js"
  },

  output: {
    publicPath: "",
    path: path.join(__dirname, "dist/"),
    filename: "index.js",
    library: "index",
    libraryTarget: "var"
  },

  devServer: {
    historyApiFallback: true
  },
  devtool: "source-map",

  stats: {
    colors: true,
    reasons: false
  },

  resolve: {
    modules: [
      path.join(__dirname, "lib"),
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
        loaders: ["babel-loader"]
      },
      {
        test: /\.((gif)|(png)|(jpg)|(html)|(mp4)|(mov))$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]
};
