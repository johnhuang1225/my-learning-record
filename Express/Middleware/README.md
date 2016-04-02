## Middleware

One of the most powerful features available with Express is the concept of
middleware. The idea behind middleware is that it acts like a stack of filters that
every request to your server passes through. Since every request passes through
each filter, each filter can perform a specific task against the request before it passes
through to the next filter.

### Custom middleware

Writing your own custom middleware is pretty simple. You simply need to write a
function that accepts four parameters: `err`, `req`, `res`, and `next`.

* The first parameter is an error object, and if there were any stack errors prior
to your middleware running, that error will be passed to your middleware
so that you can handle it accordingly.

* The fourth parameter is actually a reference to a callback. This next
parameter is how the middleware stack is able to behave like a stack—each
executing and ensuring that the next middleware in the pipeline is returned
and called via next. Here is a super basic example of a custom middleware:

```js
app.use(function(err, req, res, next) {
  // do whatever you want here, alter req, alter res, throw err, etc.
  return next();
});
```

##### Resources

- [Connect Github](https://github.com/senchalabs/connect#readme)
