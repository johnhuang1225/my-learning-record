## Standard input-output

When executing a command, a process is created. This will then open three flows:

- Stdin: where the process will read the input data. It’s called standard input. By
default stdin is the keyboard. STDIN is identified by the number 0.

- Stdout: where the process will write the output data. It’s called standard output. By
default stdin corresponds to the screen; STDOUT is identified by the number 1.

- Stderr: where the process will write error messages. It’s called standard error.
Default is stderr on the screen. STDERR is identified by the number 2.

By default when executing a program, the data is read from the keyboard and the program
sends its output and errors on the screen, but it is possible to read data from any device to
input or from a file and send the output to a display device, a file, etc.
