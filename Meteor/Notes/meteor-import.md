## Importing from packages

In Meteor, it is also simple and straightforward to use the import syntax to load npm packages on the client or server and access the package’s exported symbols as you would with any other module. You can also import from Meteor Atmosphere packages, but the import path must be prefixed with meteor/ to avoid conflict with the npm package namespace. For example, to import moment from npm and HTTP from Atmosphere:

```js
import moment from 'moment';          // default import from npm
import { HTTP } from 'meteor/http';   // named import from Atmosphere
```
