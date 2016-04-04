## Server-Side Templates

Server-side templates allow you to render HTML before it’s sent to the client. Unlike
client-side templating, where the templates are available for the curious user who knows
how to view HTML source, your users will never see your server-side template, or the
context objects used to generate the final HTML.

Server-side templates, in addition to hiding your implementation details, support template
caching, which is important for performance. The templating engine will cache
compiled templates (only recompiling and recaching when the template itself changes),
which will improve the performance of templated views. By default, view caching is
disabled in development mode and enabled in production mode. If you want to explicitly
enable view caching, you can do so thusly: app.set('view cache', true);.
