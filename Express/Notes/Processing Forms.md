## Processing Forms

##### Example 6-9. Basic form processing

```js
// body-parser middleware must be linked in
app.post('/process-contact', function(req, res){
  console.log('Received contact from ' + req.body.name +
  ' <' + req.body.email + '>');
  // save to database....
  res.redirect(303, '/thank-you');
});
```

##### Example 6-10. More robust form processing

```js
// body-parser middleware must be linked in
app.post('/process-contact', function(req, res){
  console.log('Received contact from ' + req.body.name +
  ' <' + req.body.email + '>');
  try {
    // save to database....
    return res.xhr ?
    res.render({ success: true }) :
    res.redirect(303, '/thank-you');
  } catch(ex) {
    return res.xhr ?
    res.json({ error: 'Database error.' }) :
    res.redirect(303, '/database-error');
  }
});
```
