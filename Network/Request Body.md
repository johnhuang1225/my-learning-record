## Request Body

In addition to the request headers, a request can have a body (just like the body of a
response is the actual content that’s being returned). Normal GET requests don’t have
bodies, but POST requests usually do. The most common media type for POST bodies is
`application/x-www-form-urlencoded`, which is simply encoded name/value pairs
separated by ampersands (essentially the same format as a querystring). If the POST
needs to support file uploads, the media type is `multipart/form-data`, which is a more
complicated format. Lastly, AJAX requests can use `application/json` for the body.
