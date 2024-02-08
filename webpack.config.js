const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    index: './index.ts',
  },
  output: {
    filename: '[name].pack.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
  },
  module: {
    rules: [
      {
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
        test: /\.ts$/,
      },
    ],
  },
};
