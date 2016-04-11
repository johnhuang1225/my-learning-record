## Events

Let’s see how to handle events, such as clicking an “upvote” button:

```js
Post = React.createClass({

  //...

  upvote(event) {
    event.preventDefault();
    Meteor.call("upvote", this.props.postId);
  },

  render() {

    return (
      <div className="post">
        <h1>{this.data.post.title}</h1>
        <p>{this.data.post.body}</p>
        <button onClick={this.upvote.bind(this)}>Upvote</button>
      </div>
    )

  }
});
```

Note how I’m using `this.upvote` and not `this.upvote()``? This is because I just want to pass a reference to the `upvote` function to the `onClick` event handler, not actually run the function yet.
