## Response headers

Just as your browser sends hidden information to the server in the form of request
headers, when the server responds, it also sends information back that is not necessarily
rendered or displayed by the browser. The information typically included in response
headers is metadata and server information. We’ve already seen the Content-Type
header, which tells the browser what kind of content is being transmitted (HTML, an
image, CSS, JavaScript, etc.). Note that the browser will respect the Content-Type header
regardless of what the URL path is. So you could serve HTML from a path of /image.jpg
or an image from a path of /text.html. (There’s no legitimate reason to do this; it’s just
important to understand that paths are abstract, and the browser uses Content-Type to
determine how to render content.) In addition to Content-Type, headers can indicate
whether the response is compressed and what kind of encoding it’s using. Response
headers can also contain hints for the browser about how long it can cache the resource.
This is an important consideration for optimizing your website, and we’ll be discussing
that in detail in Chapter 16. It is also common for response headers to contain some
information about the server, indicating what type of server it is, and sometimes even
details about the operating system. The downside about returning server information
is that it gives hackers a starting point to compromise your site. Extremely securityconscious
servers often omit this information, or even provide false information.
Disabling Express’s default X-Powered-By header is easy:
app.disable('x-powered-by');
If you want to see the response headers, they can be found in your browser’s developer
tools. To see the response headers in Chrome, for example:

1. Open the JavaScript console.
2. Click the Network tab.
3. Reload the page.
4. Pick the HTML from the list of requests (it will be the first one).
5. Click the Headers tab; you will see all response headers.
