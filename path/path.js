var path = require('path');

var ourPath = '/Users//Middleton/Desktop/learn-nodejs-by-examples////path/path.js';

// When multiple slashes are found, they're replaced by a single one
console.log('normalize: ' + path.normalize(ourPath));

console.log('basename: ' + path.basename(ourPath));

console.log('extname: ' + path.extname(ourPath));
