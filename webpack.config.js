var path = require('path')
var webpack = require('webpack')

module.exports = {
  // devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './index'
  ],
  output: {
    publicPath: '/static/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',

  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.json$/,
        loaders: [ 'json' ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: __dirname
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'px2rem', 'sass']
      },
      {
        test: /\.scss\?p6$/,
        loaders: ['style', 'css', 'px2rem?remUnit=37.5', 'sass']
      },
      {
        test: /\.scss\?p5$/,
        loaders: ['style', 'css', 'px2rem?remUnit=32', 'sass']
      }
    ]
  }
}
