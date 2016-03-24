## Using the #with tag

```html
// meteorTemplates.html
<template name="withBlock">
  <ul>
    {{#with profileJim}}
    <p>{{name}}</p>
    {{#each skills}}
    <li>{{this}}</li>
    {{/each}}
    {{/with}}
  </ul>
</template>
```

```js
// meteorTemplates.js
Template.withBlock.helpers({
  profileJim: function () {
    var jim = {
      name: 'Jim "Sailor Ripley" Johnson',
      skills: ['Meteor', 'Sailing', 'Cooking'],
    };
    return jim;
  }
});
```
