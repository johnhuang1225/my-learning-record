## React PropTypes

- `React.PropTypes` exports a range of validators that can be used to make sure the data you receive is valid

- When an invalid value is provided for a prop, a warning will be shown in the JavaScript console.


```js
import React, { Component, PropTypes } from 'react';


App.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object
};
```
