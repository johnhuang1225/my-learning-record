## Express Cross-Origin Resource Sharing (CORS)

If you’re publishing an API, you’ll likely want to make the API available to others. This will result in a cross-site HTTP request. Cross-site HTTP requests have been the subject of many attacks and have therefore been restricted by the same-origin policy, which restricts where scripts can be loaded from. Specifically, the protocol, domain, and port must match. This makes it impossible for your API to be used by another site, which is where CORS comes in. CORS allows you to lift this restriction on a case-by-case basis, even allowing you to list which domains specifically are allowed to access the script. CORS is implemented through the `Access-Control-Allow-Origin header`. The easiest way to implement it in an Express application is to use the cors package (npm install --save cors). To enable CORS for your application:

```js
app.use(require('cors')());
```

Because the same-origin API is there for a reason (to prevent attacks), I recommend applying CORS only where necessary. In our case, we want to expose our entire API (but only the API), so we’re going to restrict CORS to paths starting with /api:

```js
app.use('/api', require('cors')());
```
