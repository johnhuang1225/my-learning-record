## Using the #each tag

```html
// HTML file
<template name="eachBlock">
  <ul>
    // The #each block tag takes an array as a parameter.
    {{#each skills}}
    // You can access the current object of the array with this.
    <li>{{this}}</li>
    {{/each}}
  </ul>
</template>
```

```js
// JavaScript file
Template.eachBlock.helpers({
  skills: function(){
    return ['Meteor', 'Sailing', 'Cooking'];
  }
});
```
