const EventEmitter = require('events');

var myEmitter = new EventEmitter();

myEmitter.on('someEvent', (data) => {
  console.log('Some event: ' + data);
});

myEmitter.once('someEvent', (data) => {
  console.log('This only fire once: ' + data);
});

myEmitter.emit('someEvent', {  });
myEmitter.emit('someEvent', {  });
