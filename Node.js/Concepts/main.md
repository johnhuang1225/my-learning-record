## Main

While the essence of Node's module system is straightforward, there are two things
to be aware of.
First, if a module is a directory, the file in the module directory that will be
evaluated must be named `"index.js"`, unless specified otherwise by a file in the
module directory named `"package.json"`. To specify an alternative to `"index.js"`, the
`"package.json"` file must contain JavaScript Object Notation (JSON) data defining
an object with a key named `"main"` that specifies the path, within the module
directory, to the main file.
