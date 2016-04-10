# Meteor - Cookbook

### Create a project directory, set up version control, and install Meteor

```
meteor create <my_meteor_project>
cd <my_meteor_project>
echo "# My Meteor Project" >> README.md
```

```
git init
git add .
git commit -m "initial commit"
```

### Add ESLint to have syntax validation

- eslint --init

### Add mobile meta tags

Replace `/client/main.html` with the following:

```html
<head>
  <title>App name</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>

<body>
  <div id="app"></div>
</body>
```

### Remove Blaze

```
meteor remove blaze-html-templates
```

### Add React

```
npm i --save react react-dom react-router react-addons-pure-render-mixin
```

### Add other packages

Add some packages in your  `.meteor/packages` with the following:

```
twbs:bootstrap
fortawesome:fontawesome
momentjs:moment
# react
react-meteor-data
# account
accounts-ui
accounts-password
# debug
msavin:mongol
# test
practicalmeteor:mocha
```

### Add an AppContainer Component

mkdir -p imports/ui/layouts
touch imports/ui/layouts/App.jsx

```js
import React from 'react'

export default class App extends React.Component {
  render() {
    return (
      <div>
        Hello World!
      </div>
    )
  }
}
```

### Add a Routes File

mkdir -p imports/startup/client/
touch imports/startup/client/routes.jsx

```js
import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

//Templates
import { App } from '../../ui/layouts/App.jsx'

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
)
```

### Add the import instruction to main.js

`/client/main.js`

```js
import { Meteor } from 'meteor/meteor'
import { render } from 'react-dom'
import { renderRoutes } from '../imports/startup/client/routes.jsx'

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'))
})
```

### Reference

- [Meteor Guide React Todo](https://github.com/meteor/todos/tree/react)
- [Getting Started with Meteor 1.3 and React](http://coderchronicles.org/2016/04/08/getting-started-with-meteor-1-3-react-and-flowrouter/)
