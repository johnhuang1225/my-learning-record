# Meteor - Cookbook

### Create a project directory, set up version control, and install Meteor

```
meteor create <my_meteor_project>
cd <my_meteor_project>
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
# DB
aldeed:simple-schema
aldeed:collection2
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
touch imports/ui/layouts/app.jsx

```js
import React, { Component } from 'react'

export class App extends Component {
  render() {
    return (
      <div>
        <h3>Hello World!</h3>
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
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { App } from '../../ui/layouts/app.jsx'
import { Index } from '../../ui/components/index.jsx'

import { One } from '../../ui/pages/one.jsx'
import { Two } from '../../ui/pages/two.jsx'
import { Hello } from '../../ui/pages/hello.jsx'
import { NotFound } from '../../ui/pages/not-found.jsx'

export const renderRoutes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ App }>
      <IndexRoute component={ Index } />
      <Route path="/one" component={ One } />
      <Route path="/two" component={ Two } />
      <Route path="/hello/:name" component={ Hello } />
    </Route>
    <Route path="*" component={ NotFound } />
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
- [React Router Basics](https://themeteorchef.com/snippets/react-router-basics/)
- [Getting Started with Meteor 1.3 and React](http://coderchronicles.org/2016/04/08/getting-started-with-meteor-1-3-react-and-flowrouter/)
