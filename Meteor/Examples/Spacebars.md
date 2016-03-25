## each

Iterates over an array or query cursor

> JS

```js
Template.list.helpers({
  items: [
    { name: 'car', colour: 'red' },
    { name: 'sword', colour: 'silver' },
    { name: 'beer', colour: 'amber' }
  ]
});
```

> Template

```html
<template name="list">
  {{#each items}}
  {{> listItem}}
  {{/each}}
</template>

<template name="listItem">
  {{name}} - {{colour}}<br>
</template>
```

## with

Let's highlight why we use this helper.

> Js

```js
Template.pet.helpers({
  dog: {
    name: 'Spot',
    age: 3
  }
});
```

> Template

```html
<template name="pet">
  {{#with dog}}
  name: {{name}}
  age: {{age}}
  {{else}}
  There's no dog!
  {{/with}}
</template>
```

## Reference

- [Understanding Spacebars](http://meteorcapture.com/spacebars/)
