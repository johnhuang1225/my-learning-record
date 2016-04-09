## Meteor - React

#### Installing and using React

```
npm install --save react react-dom
```

####

```js
import React from 'react';

export default class HelloWorld extends React.Component {
  render() {
    return (
      <h1>Hello World</h1>
    );
  }
}
```

```js
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import HelloWorld from './HelloWorld.jsx';

Meteor.startup(() => {
  render(<HelloWorld/>, document.getElementById('app'));
});
```
