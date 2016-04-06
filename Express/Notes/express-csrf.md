## Cross-site request forgery (CSRF)

Cross-site request forgery (CSRF) attacks exploit the fact that users generally trust their browser and visit multiple sites in the same session. In a CSRF attack, script on a ma‐ licious site makes requests of another site: if you are logged in on the other site, the malicious site can successfully access secure data from another site.

To prevent CSRF attacks, you must have a way to make sure a request legitimately came from your website. The way we do this is to **pass a unique token to the browser**. When the browser then submits a form, the server checks to make sure the token matches. The csurf middleware will handle the token creation and verification for you; all you’ll have to do is make sure the token is included in requests to the server. Install the `csurf` middleware (`npm install --save csurf`), then link it in and add a token to res.lo cals:

```js
// this must come after we link in cookie-parser and connect-session
app.use(require('csurf')());

app.use(function(req, res, next){
  res.locals._csrfToken = req.csrfToken();
  next();
});
```

The csurf middleware adds the csurfToken method to the request object. We don’t have to assign it to `res.locals`; we could just pass `req.csurfToken()` explicitly to every view that needs it, but this is generally less work.

Now on all of your forms (and AJAX calls), you'll have to provide a field called `_csrf`, which must match the generated token. Let’s see how we would add this to one of our forms:


```html
<form action="/newsletter" method="POST">
  <input type="hidden" name="_csrf" value="{{_csrfToken}}">
  Name: <input type="text" name="name">
  <br>
  Email: <input type="email" name="email">
  <br>
  <button type="submit">Submit</button>
</form>
```

The csurf middleware will handle the rest: if the body contains fields, but no valid `_csrf` field, it will raise an error (make sure you have an error route in your middleware!). Go ahead and remove the hidden field and see what happens.
