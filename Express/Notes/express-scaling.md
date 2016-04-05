## Scaling Out with Multiple Servers

Where scaling out using clustering can maximize the performance of an individual server, what happens when you need more than one server? That’s where things get a little more complicated. To achieve this kind of parallelism, you need a `proxy server`. (It’s often called a reverse proxy or forward-facing proxy to distinguish it from proxies commonly used to access external networks, but I find this language to be confusing and unnecessary, so I will simply refer to it as a proxy).

The two rising stars in the proxy sphere are `Nginx` (pronounced “engine X”) and HAP‐ roxy. Nginx servers in particular are springing up like weeds: I recently did a competitive analysis for my company and found upward of 80% of our competitors were using Nginx. Nginx and HAproxy are both robust, high-performance proxy servers, and are capable of the most demanding applications (if you need proof, consider that Netflix, which accounts for as much as 30% of all Internet traffic, uses Nginx).

There are also some smaller Node-based proxy servers, such as proxy and node-http- proxy. These are great options if your needs are modest, or for development. For pro‐ duction, I would recommend using Nginx or HAProxy (both are free, though they offer support for a fee).

If you do configure a proxy server, make sure you tell Express that you are using a proxy and that it should be trusted:

```js
app.enable('trust proxy');
```

Doing this will ensure that req.ip, req.protocol, and req.secure will reflect the de‐ tails about the connection between the client and the proxy, not between the client and your app. Also, req.ips will be an array that indicates the original client IP, and the names or IP addresses of any intermediate proxies.
