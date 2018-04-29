const path = require('path');

module.exports = env => ({
  mode: env && env.prod ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devtool: env && env.prod ? 'source-map' : 'eval',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader?cacheDirectory' },
          {
            loader: 'eslint-loader',
            options: {
              emitError: true,
              emitWarning: true,
            },
          },
        ],
      },
    ],
  },
});
