const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const ElectronReloadPlugin = require('webpack-electron-reload')({
  path: path.join(__dirname, './build/main.js'),
});

module.exports = [{
  mode: 'development',
  entry: './src/electron.ts',
  devtool: 'source-map',
  target: 'electron-main',
  node: {
    __dirname: false,
  },
  resolve: {
    alias: {
      ['@']: path.resolve(__dirname, 'src')
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [{
      test: /\.ts$/,
      include: /src/,
      use: [{ loader: 'ts-loader' }]
    }]
  },
  
  plugins: [
    new CopyPlugin({
      patterns: [
        //{ from: path.resolve(__dirname, "layout"), to: path.resolve(__dirname, "build/layout") },
        { from: path.resolve(__dirname, "assets"), to: path.resolve(__dirname, "build/assets") },
      ],
    }),
    ElectronReloadPlugin()
  ],
  output: {
    path: __dirname + '/build',
    filename: 'main.js'
  }
}];
