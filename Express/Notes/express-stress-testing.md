## Stress Testing

Stress testing (or load testing) is designed to give you some confidence that your server will function under the load of hundreds or thousands of simultaneous requests. This is another deep area that could be the subject for a whole book: stress testing can be arbitrarily sophisticated, and how complicated you want to get depends largely on the nature of your project. If you have reason to believe that your site could be massively popular, you might want to invest more time in stress testing.
For now, let’s add a simple test to make sure your application can serve the home page a hundred times in under a second. For the stress testing, we’ll use a Node module called loadtest:

```js
npm install --save loadtest
```

Now let’s add a test suite, called `qa/tests-stress.js`:

```js
var loadtest = require('loadtest');
var expect = require('chai').expect;

suite('Stress tests', function(){
  test('Homepage should handle 100 requests in a second', function(done){
    var options = {
      url: 'http://localhost:3000',
      concurrency: 4,
      maxRequests: 100
    };
    loadtest.loadTest(options, function(err,result){
      expect(!err);
      expect(result.totalTimeSeconds < 1);
      done();
    });
  });
});
```
