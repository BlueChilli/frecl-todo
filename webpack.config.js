var path = require('path');
var webpack = require("webpack");
var ENVIRONMENTS = require("./Frecl/Constants/ENVIRONMENTS");

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        'webpack/hot/dev-server',
        path.join(__dirname, 'app/entry.js')
    ],

    output: {
        path: '/',
        filename: 'main.js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel"
        }, {
           test: /\.css/,
           loader: "style!css"
         }, {
            test: /\.scss/,
            loader: "style!css!sass"
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: "url?limit=500000"
        }, {
            test: /\.md$/,
            loader: "html!markdown"
        },{
            test: /\.txt/,
            loader: "raw"
        }]
    },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(ENVIRONMENTS.get('DEVELOPMENT'))
      }
    })
  ]

};
