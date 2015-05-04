var path = require('path')

module.exports = {
  entry: {
    'bundle': './example'
  },

  output: {
    path: '.',
    filename: '[name].js',
    publicPath: '/'
  },

  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'jsx-loader'}
    ]
  },

  devServer: {
    contentBase: './',
    host: 'localhost',
    inline: true,
    info: false
  }
}
