var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: ['whatwg-fetch', './src/index.js'],
  watchOptions: {
    poll: true
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ],
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: 'source-map-loader'
      }
    ]
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}
