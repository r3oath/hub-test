const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
  mode: env && env.prod ? 'production' : 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.[name].[chunkhash].js',
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
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
  ],
});
