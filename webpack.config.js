const electron = require('./webpack.electron');
const preload = require('./webpack.preload-scripts');
const renderer = require('./webpack.renderer');

module.exports = [
  ...electron,
  ...preload,
  ...renderer
]
