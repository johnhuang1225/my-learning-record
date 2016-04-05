## Express Subdomains

#### Install Package

```js
npm install --save vhost
```

#### Set up

```js
// create "admin" subdomain...this should appear // before all your other routes
var admin = express.Router();
app.use(vhost('admin.*', admin));

// create admin routes; these can be defined anywhere
admin.get('/', function(req, res){ res.render('admin/home');
});

admin.get('/users', function(req, res){
  res.render('admin/users');
});
```
