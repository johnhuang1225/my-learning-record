## Require & Exports in Node.js

> As a guideline, if the relationship between `exports` and `module.exports` seems like magic to you, ignore exports and only use `module.exports`.

Imagine that this line of code exists as the first line of code in any js file.

`exports` & `module.exports` reference to the same obejct.

```js
const exports = module.exports = {};
```

We can assign any expression that we want to become available in other files to the exports object.

```js
exports.hi = () => {
  return 'Hello World!';
};
```

Now our `exports` or `module.exports` will become:

```js
exports = module.exports = {
 hi: () => {
   return 'Hello World!';
 };
}
```

Let's load the `say.js` module to our `main.js`

```js
const say = require('./say.js');
```

If you require any module it will assign whatever store in `module.exports` to your expression.

The above code is equivalent to this:

```js
say = {
  hi: () => {
    return 'Hello World!';
  }
}
```

So we can use `say.hi()` to dispaly `Hello World!`;

There's another way to expose things in a module:

```js
const User = (name, email) => {
  this.name = name;
  this.email = email;
};
module.exports = User;
```

Our `exports` or `module.exports` will become:

```js
exports = module.exports = (name, email) => {
  this.name = name;
  this.email = email;
};
```

The difference is subtle but important. See it? We are exporting user directly, without any indirection. The difference between:

```js
module.exports.User = User;
//vs
module.exports = User;
```

is all about how it's used:

```js
const user = require('./user');

var u = new user.User();
//vs
var u = new user();
```

Finally, the last thing to consider is what happens when you directly export a function:

```js
var powerLevel = (level) => {
  return level > 9000 ? "it's over 9000!!!" : level;
};
module.exports = powerLevel;
```

When you require the above file, the returned value is the actual function. This means that you can do:

```js
require('./powerlevel')(9050);
```

Which is really just a condensed version of:

```js
var powerLevel = require('./powerlevel')
powerLevel(9050);
```


#### Reference

- [module.exports](https://nodejs.org/api/modules.html#modules_module_exports)
- [exports alias](https://nodejs.org/api/modules.html#modules_exports_alias)
- [Node.js, Require and Exports](http://openmymind.net/2012/2/3/Node-Require-and-Exports/)
- [Understanding module.exports and exports in Node.js](http://www.sitepoint.com/understanding-module-exports-exports-node-js/)
