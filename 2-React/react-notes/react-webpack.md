sss## React Webpack

### Install React

```
npm install --save react react-dom
```

### Install Webpack

```
npm install --save-dev webpack html-webpack-plugin webpack-dev-server
```

### Install Babel

```
npm install --save-dev babel-core babel-loader babel-preset-es2015
```

### Create Babel configuration file

```
touch .babelrc
```

### Configure Babel

```json
{
  "presets": [
    "es2015",
    "react"
  ]
}
```

### Create Webpack configuration file

```
touch webpack.config.js
```

### Configure Webpack

```js
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
```

### Add npm script

```json
"scripts": {
  "start": "webpack-dev-server",
  "prod": "webpack -p"
}
```
