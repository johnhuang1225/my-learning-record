// Object constructor
function Person(name) {
  this.name = name;
}

// All JavaScript objects inherit their properties and methods from their prototype.
Person.prototype.sayHello = function () {
  console.log('Hello my name is ' + this.name);
};

// Create Person instents by using 'new' keyword
var jack = new Person('Jack');
var tom = new Person('Tom');

// this === jack
jack.sayHello();

// this === tom
tom.sayHello();
