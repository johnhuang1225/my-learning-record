## app.param([name], callback)

Anytime the given string (e.g., username) is present in the URL pattern of the route, and server receives a request that matches that route, the callback to the `app.param()` will be triggered. For example, with `app.param('username', function(req, res, next, username){...})` and `app.get('/users/:username', findUser)` every time we have a request `/username/azat` or `/username/tjholowaychuk`, the closure in `app.param()` will be executed
(before findUser).

```js
app.param('storyId', function(request, response, next, storyId) {
  // Fetch the story by its ID (storyId) from a database
  // Save the found story object into request object
  request.story = story;
});
app.param('elementId', function(request, response, next, elementId) {
  // Fetch the element by its ID (elementId) from a database
  // Narrow down the search when request.story is provided
  // Save the found element object into request object
  request.element = element;
});
app.get('/api/v1/stories/:storyId/elements/:elementId', function(request, response){
  // Now we automatically get the story and element in the request object
  res.send({ story: request.story, element: request.element});
});
app.post('/api/v1/stories/:storyId/elements', function(request, response){
  // Now we automatically get the story in the request object
  // We use story ID to create a new element for that story
  res.send({ story: request.story, element: newElement});
});
```
