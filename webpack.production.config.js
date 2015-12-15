var webpack = require("webpack");
var environment = require("./environment");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ContextReplacementPlugin = require("webpack/lib/ContextReplacementPlugin");


process.env.NODE_ENV = 'production';

module.exports = {

  entry: "./app/entry.js",

  output: {
    path: "./build/",
    filename: "[name]-[chunkhash].js",
    chunkFilename: "[name]-[chunkhash].js",
    publicPath: "/build/"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel"
      },
      {
        test: /\.scss/,
        loader: "style!css!autoprefixer?browsers=last 2 versions!sass"
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline'
      }, {
        test: /\.(jpe?g|png|gif)$/i,
        loader: "url",
        query: {
          name: "images/[hash].[ext]",
          limit: 8192
        }
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        dead_code: true,
        conditionals: true,
        unsafe: false,
        warnings: false
      },
      output: {comments: false},
      mangle: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(ENVIRONMENTS.get('PRODUCTION'))
      }
    }),
    new HtmlWebpackPlugin({
      template: "./templates/prod.html",
      path: "template",
      inject: 'body',
      favicon: "./app/favicon.ico"
    }),
    new ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
  ]
};
