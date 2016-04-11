## React Webpack

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
import HtmlWebpackPlugin from 'html-webpack-plugin';

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  // source
  template: `${__dirname}/app/index.html`,
  // output name
  filename: 'index.html',
  // bundled script inject location
  inject: 'body'
});

export default {
  entry: [
    './app/index.js'
  ],
  output: {
    path: `${__dirname}/dist`,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HTMLWebpackPluginConfig]
};
```

### Add npm script

```json
"scripts": {
  "production": "webpack -p"
}
```
