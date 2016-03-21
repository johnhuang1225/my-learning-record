const child_process = require('child_process'),
      rightShellCommand = 'node -v',
      wrongShellCommand = 'ls ---'

// Define a function to execute a shell command and buffers the output.
var executeShellCommand = (shellCommand) => {
  child_process.exec(shellCommand, (error, stdout, stderr) => {
    // Standard output
    console.log('stdout: ' + stdout);
    // Standard error
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
    console.log('=======================')
  });
}

executeShellCommand(rightShellCommand);
executeShellCommand(wrongShellCommand);
