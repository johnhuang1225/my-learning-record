## Components

Everything in React is a component. Same thing as templates really, but you have to admit “component” sounds a lot cooler.

Here’s how you define a React component:


```js
Post = React.createClass({
  render() {
    return (
      <div className="post">
        <h1>Hello World!</h1>
        <p>Lorem ipsum</p>
      </div>
    )
  }
});
```

You’re now able to use that component by calling `<Post/>` in any other React component.
