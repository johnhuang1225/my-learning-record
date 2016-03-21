const util = require('util');

var obj = {
  name: 'Middleton',
  like: ['Node.js', 'JavaScript']
}

// Format string
console.log(util.format('%s', obj));
// Convert object to json
console.log(util.format('%j', obj));
