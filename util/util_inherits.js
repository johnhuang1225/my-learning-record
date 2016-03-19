// require util & events modules
const util = require('util');
const EventEmitter = require('events');

//
function Constructor() {
  EventEmitter.call(this);
}

// Inherit the prototype methods from EventEmitter into Constructor
util.inherits(Constructor, EventEmitter);

// Define prototypes
// Any new Constructor() object will have the following properties and methods
Constructor.prototype.ratePoints = 0;

Constructor.prototype.rate = function(points) {
  ratePoints = points;
  this.emit('rated');
};

Constructor.prototype.getPoints = function() {
  return ratePoints;
}

// use 'new' to create myConstructor objects
var myConstructor = new Constructor();

// Register event listener to 'rated' event
myConstructor.on('rated', function() {
   console.log('Rated with ' + myConstructor.getPoints());
});

myConstructor.rate(10);
