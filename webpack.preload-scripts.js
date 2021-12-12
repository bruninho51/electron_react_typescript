const fs = require('fs');
const path = require('path');

module.exports = fs.readdirSync('./src/preload-scripts').map(file => {
  const filename = `${file.split('.').shift()}.js`;
  return {
    mode: 'development',
    entry: `./src/preload-scripts/${file}`,
    target: 'electron-preload',
    devtool: 'source-map',
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
    output: {
      path: __dirname + '/build',
      filename: filename
    }
  }
});
