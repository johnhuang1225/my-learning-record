## Providing an API

When you’re providing an API, much like processing forms, the parameters will usually
be in req.query, though you can also use req.body. What’s different about APIs is that
you’ll usually be returning JSON, XML, or even plaintext, instead of HTML, and you’ll
often be using less common HTTP methods like PUT, POST, and DELETE.

Examples 6-11 and 6-12 use the following “products”

```js
array (which would normally be retrieved from a database):
var tours = [
  { id: 0, name: 'Hood River', price: 99.99 },
  { id: 1, name: 'Oregon Coast', price: 149.95 },
];
```

##### Example 6-11. Simple GET endpoint returning only JSON

```js
app.get('/api/tours'), function(req, res){
  res.json(tours);
});
```

Example 6-12 uses the res.format method in Express to respond according to the
preferences of the client.

##### Example 6-12. GET endpoint that returns JSON, XML, or text

```js
app.get('/api/tours', function(req, res){
  var toursXml = '<?xml version="1.0"?><tours>' +
  products.map(function(p){
    return '<tour price="' + p.price + '" id="' + p.id + '">' + p.name + '</tour>';
  }).join('') + '</tours>';

  var toursText = tours.map(function(p){
    return p.id + ': ' + p.name + ' (' + p.price + ')';
  }).join('\n');

  res.format({
    'application/json': function(){
      res.json(tours);
    },
    'application/xml': function(){
      res.type('application/xml');
      res.send(toursXml);
    },
    'text/xml': function(){
      res.type('text/xml');
      res.send(toursXml);
    }
    'text/plain': function(){
      res.type('text/plain');
      res.send(toursXml);
    }
  });
});
```

In Example 6-13, the PUT endpoint updates a product and returns JSON. Parameters
are passed in the querystring (the ":id" in the route string tells Express to add an id
property to req.params).

##### Example 6-13. PUT endpoint for updating

```js
// API that updates a tour and returns JSON; params are passed using querystring
app.put('/api/tour/:id', function(req, res){
  var p = tours.some(function(p){ return p.id == req.params.id });
  if( p ) {
    if( req.query.name ) p.name = req.query.name;
    if( req.query.price ) p.price = req.query.price;
    res.json({success: true});
  } else {
    res.json({error: 'No such tour exists.'});
  }
});
```

Finally, Example 6-14 shows a DEL endpoint.

##### Example 6-14. DEL endpoint for deleting

```js
// API that deletes a product
api.del('/api/tour/:id', function(req, res){
  var i;
  for( var i=tours.length-1; i>=0; i-- )
  if( tours[i].id == req.params.id ) break;
  if( i>=0 ) {
    tours.splice(i, 1);
    res.json({success: true});
  } else {
    res.json({error: 'No such tour exists.'});
  }
});
```
