## Ports

Whether you know it or not, when you visit a website, **you’re always connecting to a specific port**, even though it’s not specified in the URL.

If you don’t specify a port, port `80` is assumed for HTTP. As a matter of fact, most browsers will simply not display the port number if you explicitly specify port 80. For example, navigate to http:// www.apple.com:80; chances are, when the page loads, the browser will simply strip off the :80. It’s still connecting on port 80, it’s just implicit.

Similarly, there’s a standard port for HTTPS, `443`. Browser behavior is similar: if you connect to https://www.google.com:443, most browsers will simply not display the :443, but that’s the port they’re connecting over.
