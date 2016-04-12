sss## React Webpack

### Install React

```
npm install --save react react-dom
```

### Install Webpack

```
npm install --save-dev webpack webpack-dev-server html-webpack-plugin
npm install --save-dev css-loader style-loader
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
    './app/index.jsx'
  ],
  output: {
    path: __dirname + '/dist',
    // name of the output file
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      {test: /\.jsx$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.css$/, loader: "style-loader!css-loader"}

    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
```

### Add npm script

```json
"scripts": {
  "start": "webpack-dev-server",
  "production": "webpack -p"
}
```
