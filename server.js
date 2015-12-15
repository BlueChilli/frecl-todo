/* eslint no-console: 0 */
var path = require('path');
var open = require('open');
var express = require('express');
var webpack = require('webpack');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config.js');

const app = express();

const host = process.env.HOST || 'localhost';
const port = parseInt(config.port, 10) + 1 || 3001;

app.use(express.static(__dirname + '/'));

const serverOptions = {
  publicPath: config.output.publicPath,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
};

const compiler = webpack(config);

app.use(webpackMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));

app.get('*', function response(req, res) {
  res.sendFile(path.join(__dirname, 'app/index.dev.html'));
});

app.listen(port, host, function onStart(err) {
  if (err) {
    console.log(err);
  }
  const url = 'http://' + host + ':' + port + '/';
  open(url);

  console.info('Listening to =>%s in your browser.', url);
});