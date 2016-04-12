## React `getDefaultProps`

```js
var Loading = React.createClass({
  getDefaultProps: function () {
    return {
      text: 'loading',
      styles: {color: 'red'}
    }
  },
  render: function () {
    ...
  }
})
```

Now if someone uses our Loading component like this

```js
<Loading />
```

without specifying a text or styles property, this.props.text will default to `'loading'` and `this.props.styles` will default to `{color: 'red'}`.

but if our component is used like this

```js
<Loading text='One second' styles={color: 'green'} />
```

Then `this.props.text` will be `'One second'` and `this.props.color` will be `'green'`.
