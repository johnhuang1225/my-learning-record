## Request Headers

The URL isn’t the only thing that’s passed to the server when you navigate to a page.
Your browser is sending a lot of “invisible” information every time you visit a website.
I’m not talking about spooky personal information (though if your browser is infected
by malware, that can happen). The browser will tell the server what language it prefers
to receive the page in (for example, if you download Chrome in Spain, it will request
the Spanish version of pages you visit, if they exist). It will also send information about
the “user agent” (the browser, operating system, and hardware) and other bits of information.
All this information is sent as a request header, which is made available to you
through the request object’s headers property. If you’re curious to see the information
your browser is sending, you can create a very simple Express route to display that
information:

```js
app.get('/headers', function(req,res){
  res.set('Content-Type','text/plain');
  var s = '';
  for(var name in req.headers) s += name + ': ' + req.headers[name] + '\n';
  res.send(s);
});
```
