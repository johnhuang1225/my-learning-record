var HtmlWebpackPlugin = require('html-webpack-plugin')

var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  // source
  template: __dirname + '/app/index.html',
  // output file name
  filename: 'index.html',
  // bundled js inject location
  inject: 'body'
});
module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
