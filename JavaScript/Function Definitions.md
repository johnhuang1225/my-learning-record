## Function Definitions

A Function Declaration defines a named function variable without requiring variable assignment. It’s helpful to think of them as siblings of Variable Declarations. Just as Variable Declarations must start with “var”, Function Declarations must begin with “function”.

1. Function Declaration

```js
function functionName(parameters) {
  // code to be executed
}
```

2. Function Expression

A Function Expression defines a function as a part of a larger expression syntax (typically a variable assignment ). Function Expressions must not start with “function” (hence the parentheses around the self invoking example below)

```js
var functionName = function(parameters) {
  // code to be executed
}
```
