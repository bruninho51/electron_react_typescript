const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = fs.readdirSync('./src/renderers').map(file => {
  return {
    mode: 'development',
    entry: `./src/renderers/${file}`,
    devtool: 'source-map',
    target: 'electron-renderer',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [[
                '@babel/preset-env', {
                  targets: {
                    esmodules: true
                  }
              }],
              '@babel/preset-react']
            }
          }
        },
        {
          test: [/\.s[ac]ss$/i, /\.css$/i],
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
          ],
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'layout/default.html',
        filename: `${file.split('.').shift()}.html`
      })
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: `${file.split('.').shift()}.js`,
      path: path.resolve(__dirname, 'build'),
    },
  }
});
