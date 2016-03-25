// Piping is a great mechanism in which you can read data from the
// source and write to destination without managing the flow yourself.
const fs = require('fs');

var readableStream = fs.createReadStream('./source.txt');
var writableStream = fs.createWriteStream('./copy.txt');

readableStream.pipe(writableStream);

console.log('Piping data to copy.txt')
