## Rendering Content

##### Example 6-1. Basic usage

```js
// basic usage
app.get('/about', function(req, res){
  res.render('about');
});
```

##### Example 6-2. Response codes other than 200

```js
app.get('/error', function(req, res){
  res.status(500);
  res.render('error');
});
// or on one line...
app.get('/error', function(req, res){
  res.status(500).render('error');
});
```

##### Example 6-3. Passing a context to a view, including querystring, cookie, and session values

```js
app.get('/greeting', function(req, res){
  res.render('about', {
    message: 'welcome',
    style: req.query.style,
    userid: req.cookie.userid,
    username: req.session.username,
  });
});
```

##### Example 6-4. Rendering a view without a layout

```js
// the following layout doesn't have a layout file, so views/no-layout.handlebars
// must include all necessary HTML
app.get('/no-layout', function(req, res){
  res.render('no-layout', { layout: null });
});
```

##### Example 6-5. Rendering a view with a custom layout

```js
// the layout file views/layouts/custom.handlebars will be used
app.get('/custom-layout', function(req, res){
  res.render('custom-layout', { layout: 'custom' });
});
```

##### Example 6-6. Rendering plaintext output

```js
app.get('/test', function(req, res){
  res.type('text/plain');
  res.send('this is a test');
});
```

##### Example 6-7. Adding an error handler

```js
// this should appear AFTER all of your routes
// note that even if you don't need the "next"
// function, it must be included for Express
// to recognize this as an error handler
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).render('error');
});
```

##### Example 6-8. Adding a 404 handler

```js
// this should appear AFTER all of your routes
app.use(function(req, res){
  res.status(404).render('not-found');
});
```
