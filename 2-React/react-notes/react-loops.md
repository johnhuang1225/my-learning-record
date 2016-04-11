## React Loops

There are as many ways of writing a loop in JSX as there are in JavaScript, but the most common technique is to use map.

Let’s build another component, a list of posts this time:

```js
PostList = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData () {
    return {
      posts: Posts.find().fetch()
    }
  },

  renderPost(post, index) {
    return (
      <div className="post" key={index}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    )
  },

  render() {

    return (
      <div className="posts">
        {this.data.posts.map(this.renderPost)}
      </div>
    )

  }

});
```

We’re iterating over `this.data.posts`, and then calling `this.renderPost` on each item.
