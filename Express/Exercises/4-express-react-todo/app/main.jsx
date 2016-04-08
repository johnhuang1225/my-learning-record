console.log('Hello from JSX!');

var React = require('react');
var ReactDOM = require('react-dom');

var GroceryItemList = require('./components/GroceryItemList.jsx');

ReactDOM.render(<GroceryItemList />, document.getElementById('app'));
