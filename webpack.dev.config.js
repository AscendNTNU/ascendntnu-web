var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './app/index.tsx',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devtool: "eval",
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'babel',
        exclude: path.join(__dirname, 'node_modules')
      },
      {
        test: /\.png$/,
        loader: 'file'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        loader: 'file'
      }
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  }
}
