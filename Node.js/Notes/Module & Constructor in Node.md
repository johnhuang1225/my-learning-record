## Module & Constructor in Node

There are two ways to add methods to a constructor.

1. First is using `prototype`.

2. Second is using `return` in constructor itself. (The Revealing Module Pattern)

### Demo

We create 3 files.

1. `people_phototype.js`
2. `people_return.js`
3. `main.js`

Here is the code in each file.

##### people_phototype.js

```js
function People(name) {
  this.name = name
}

People.prototype.sayName = function() {
  console.log(this.name);
}

module.exports = People;
```

##### people_return.js

```js
function People(name) {
  this.name = name;

  return {
    sayName: function(){
      console.log(name);
    },
  }
}

module.exports = People;
```

##### main.js

```js
var People_return = require('./people_return.js');
var People_phototype = require('./people_phototype.js');

// console.log(People_return);
// console.log(People_phototype);

var tom = new People_return('Tom');
var jack = new People_phototype('Jack');

// console.log(tom);
// console.log(jack);

console.log(tom.sayName());
console.log(jack.sayName());
```

You will find out that result is the same in both ways.
