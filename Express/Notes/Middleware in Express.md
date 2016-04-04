## Middleware in Express

Middleware will process the response & response data, store new value to it and pass to another middleware.

#### Error handling

Error-handling functions have four arguments instead of three: (err, req, res, next).

You define error-handling middleware last, after other app.use() and routes calls.

```js
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
```
