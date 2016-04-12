## JS Call

```js
const sayName = () => {
  console.log(`My name is ${this.name}`)
}

const stacey = {
  name: 'Stacey',
  age: '20'
}

sayName.call(stacey)
```
