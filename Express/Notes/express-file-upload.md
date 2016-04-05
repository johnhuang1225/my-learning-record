## File Upload in Express


#### Install package

- [formidable](https://github.com/felixge/node-formidable)

```js
npm install --save formidable
```

#### Create view

`file-upload.handlebars`

```html
<!DOCTYPE html>
<html>
<head>
  <title>Simple Upload Example</title>
</head>
<body>
  <form action="/" enctype="multipart/form-data" method="post">
    <input type="file" name="upload" mutiple="multiple">
    <input type="submit" value="Upload">
  </form>
</body>
</html>
```

#### Set up app

```js
var formidable = require('formidable');

app.get('/file-upload', function(req, res){
  res.render('file-upload');
});

app.post('/file-upload', function(req, res){
  // Parse a file that was uploaded
  var form = new formidable.IncomingForm();

  form.parse(req, function(err, fields, file){
    if(err) return res.redirect(303, '/error');

    console.log('Received File');
    // Output file information
    console.log(file);
    res.redirect(303, '/thankyou');
  });
});
```

#### Reference

- [Express NodeJS Tutorial](http://www.newthinktank.com/2015/11/express-nodejs-tutorial/)
