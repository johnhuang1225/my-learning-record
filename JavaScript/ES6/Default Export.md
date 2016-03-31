## Default Export

```js
// vehicle.js
export default class {
  constructor(type, number) {
    this.type = type;
    this.number = number;
  }

  display() {
    return `Number: ${this.number}`;
  }
}
```

```js
// main.js
import Vehicle from './lib/vehicle';

const v1 = new Vehicle('Car', 'GH-3355');
console.log(v1.display());
```
