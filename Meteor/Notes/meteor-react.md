## Meteor - React

#### Install Packages

```
npm install --save react react-dom react-router
meteor add react-meteor-data
```

#### Usage


```js
import React, { Component, PropTypes } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
```
