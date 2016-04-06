## Content Delivery Network (CDN)

if you want to maximize the performance of your site (or allow for doing so in the future), you will want to make it easy to host your static resources on a content delivery network (CDN). A CDN is a server that’s optimized for delivering static resources. It leverages special headers (that we’ll learn about soon) that enable browser caching. Also, CDNs can enable geographic optimization; that is, they can deliver your static content from a server that is geographically closer to your client. While the Internet is very fast indeed (not operating at the speed of light, exactly, but close enough), it is still faster to deliver data over a hundred miles than a thousand. Individual time savings may be small, but if you multiply across all of your users, requests, and resources, it adds up fast.

#### Static Mapping

```js
// lib/static.js

var baseUrl = '';

exports.map = function(name){
  return baseUrl + name;
}
```

#### Static Resources in Views

```js
// set up handlebars view engine
var handlebars = require('express-handlebars').create({
  defaultLayout:'main',
  helpers: {
    static: function(name) {
      return require('./lib/static.js').map(name);
    }
  }
});
```

```html
<header>
  <img src="{{static '/img/logo.jpg'}}" alt="Meadowlark Travel Logo">
</header>
```

#### Static Resources in CSS

```html
<head>
  <link rel="stylesheet" href="{{static /css/main.css}}">
</head>
```
