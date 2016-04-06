## Express local

> app.locals

The `app.locals` object has properties that are local variables within the application.

```js
app.locals.title
// => 'My App'

app.locals.email
// => 'me@myapp.com'
```

Once set, the value of `app.locals` properties persist throughout the life of the application, in contrast with `res.locals` properties that are valid only for the lifetime of the request.

You can access local variables in templates rendered within the application. This is useful for providing helper functions to templates, as well as application-level data. Local variables are available in middleware via `req.app.locals` (see req.app)

```js
app.locals.title = 'My App';
app.locals.strftime = require('strftime');
app.locals.email = 'me@myapp.com';
```

```html
<h1>{{title}}</h1>
```

> res.locals

An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any). Otherwise, this property is identical to `app.locals`.

This property is useful for exposing request-level information such as the request path name, authenticated user, user settings, and so on.

```js
app.use(function(req, res, next){
  res.locals.user = req.user;
  res.locals.authenticated = ! req.user.anonymous;
  next();
});
```

```html
<h1>{{user}}</h1>
```
