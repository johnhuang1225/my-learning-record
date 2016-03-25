// name cannot access direct outside this file
var name = 'Node.js by example';

var read = function() {
   console.log('I am reading ' + name);
}

module.exports = {
  read: read
};
