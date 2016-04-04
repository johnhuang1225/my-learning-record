## __dirname

`__dirname` will resolve to the directory the executing script resides in.
So if your script resides in `/home/sites/app.js`, `__dirname` will resolve
to `/home/sites`. It’s a good idea to use this handy global whenever
possible. Failing to do so can cause hard-to-diagnose errors if you run
your app from a different directory.
