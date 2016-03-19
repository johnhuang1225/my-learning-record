const child_process = require('child_process');

const shellCommand = 'node -v'

// Execute a shell command and buffers the output.
const child = child_process.exec(shellCommand, (error, stdout, stderr) => {
  // Standard output
  console.log('stdout: ' + stdout);
  // Standard error
  console.log('stderr: ' + stderr);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
});
