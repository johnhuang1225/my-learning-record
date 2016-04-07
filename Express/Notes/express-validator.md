## Express - Validator

#### Install package

- [express-session](https://github.com/expressjs/session)
- [express-validator](https://github.com/ctavan/express-validator)

```js
npm install --save express-session express-validator
```

#### Routes

> routes/index.js

```js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Form Validation', success: req.session.success, errors: req.session.errors });
  req.session.errors = null;
});

router.post('/submit', function(req, res, next) {
  req.check('email', 'Invalid email address').isEmail();
  req.check('password', 'Password is invalid').isLength({min: 4}).equals(req.body.confirmPassword);

  var errors = req.validationErrors();
  if (errors) {
    req.session.errors = errors;
    req.session.success = false;
  } else {
    req.session.success = true;
  }
  res.redirect('/');
});

module.exports = router;
```

#### View

> views/index.handlebars

```html
<h1>{{ title }}</h1>
{{# if success }}
  <section class="success">
    <h2>Successful Validation!</h2>
  </section>
{{ else }}
  {{# if errors }}
    <section class="errors">
      <ul>
        {{# each errors }}
          <li>{{ this.msg }}</li>
        {{/each}}
      </ul>
    </section>
  {{/if}}
  <form action="/submit" method="post">
    <div class="input">
      <label for="email">E-Mail</label>
      <input type="text" id="email" name="email">
    </div>
    <div class="input">
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
    </div>
    <div class="input">
      <label for="confirmPassword">Confirm Password</label>
      <input type="password" id="confirmPassword" name="confirmPassword">
    </div>
    <button type="submit">Sign up</button>
  </form>
{{/if}}
```
