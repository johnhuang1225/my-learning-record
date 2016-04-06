## Express MongoDB

#### Install Package

```js
npm install --save mongoose
```

#### Create key

```js
// credentials.js
mongo: {
  development: {
    connectionString: 'your_dev_connection_string',
  },
  production: {
    connectionString: 'your_production_connection_string',
  },
},
```

#### Connecting Mongoose

```js
var mongoose = require('mongoose');

var opts = {
  server: {
    // Prevent database connection errors for long-running applications (like a website).
    socketOptions: { keepAlive: 1 }
  }
};

switch(app.get('env')){
  case 'development':
    mongoose.connect(credentials.mongo.development.connectionString, opts);
    break;
  case 'production':
    mongoose.connect(credentials.mongo.production.connectionString, opts);
    break;
  default:
    throw new Error('Unknown execution environment: ' + app.get('env'));
}
```

#### Creating Schemas and Models

models/vacation.js

```js
var mongoose = require('mongoose');

var vacationSchema = mongoose.Schema({
  name: String,
  slug: String,
  category: String,
  sku: String,
  description: String,
  priceInCents: Number,
  tags: [String],
  inSeason: Boolean,
  available: Boolean,
  requiresWaiver: Boolean,
  maximumGuests: Number,
  notes: String,
  packagesSold: Number,
});

vacationSchema.methods.getDisplayPrice = function(){
  return '$' + (this.priceInCents / 100).toFixed(2);
};

var Vacation = mongoose.model('Vacation', vacationSchema);
module.exports = Vacation;
```

#### Use this model in our application

```js
var Vacation = require('./models/vacation.js');
```

#### Seeding Initial Data

```js
Vacation.find(function(err, vacations){
  if(vacations.length) return;

  new Vacation({
    name: 'Hood River Day Trip',
    slug: 'hood-river-day-trip',
    category: 'Day Trip',
    sku: 'HR199',
    description: 'Spend a day sailing on the Columbia and enjoying craft beers in Hood River!',
    priceInCents: 9995,
    tags: ['day trip', 'hood river', 'sailing', 'windsurfing', 'breweries'],
    inSeason: true,
    maximumGuests: 16,
    available: true,
    packagesSold: 0,
  }).save();

  new Vacation({
    name: 'Oregon Coast Getaway',
    slug: 'oregon-coast-getaway',
    category: 'Weekend Getaway',
    sku: 'OC39',
    description: 'Enjoy the ocean air and quaint coastal towns!',
    priceInCents: 269995,
    tags: ['weekend getaway', 'oregon coast', 'beachcombing'],
    inSeason: false,
    maximumGuests: 8,
    available: true,
    packagesSold: 0,
  }).save();

  new Vacation({
    name: 'Rock Climbing in Bend',
    slug: 'rock-climbing-in-bend',
    category: 'Adventure',
    sku: 'B99',
    description: 'Experience the thrill of climbing in the high desert.',
    priceInCents: 289995,
    tags: ['weekend getaway', 'bend', 'high desert', 'rock climbing'],
    inSeason: true,
    requiresWaiver: true,
    maximumGuests: 4,
    available: false,
    packagesSold: 0,
    notes: 'The tour guide is currently recovering from a skiing accident.',
  }).save();
});
```

#### Retrieving Data

views/vacations.handlebars

```html
<h1>Vacations</h1>
{{#each vacations}}
<div class="vacation">
  <h3>{{name}}</h3>
  <p>{{description}}</p>
  {{#if inSeason}}
  <span class="price">{{price}}</span>
  <a href="/cart/add?sku={{sku}}" class="btn btn-default">Buy Now!</a>
  {{else}}
  <span class="outOfSeason">
    We're sorry, this vacation is currently not in season.
    {{! The "notify me when this vacation is in season" page will be our next task. }}
    <a href="/notify-me-when-in-season?sku={{sku}}">Notify me when this vacation is in season.</a>
  </span>
  {{/if}}
</div>
{{/each}}
```

Create route handlers that hook it all up:

```js
app.get('/vacations', function(req, res){
  Vacation.find({ available: true }, function(err, vacations){
    var context = {
      // Mapping the data that’s returned from the database and passing only what’s needed onto the view
      vacations: vacations.map(function(vacation){
        return {
          sku: vacation.sku,
          name: vacation.name,
          description: vacation.description,
          price: vacation.getDisplayPrice(),
          inSeason: vacation.inSeason,
        }
      })
    };
    res.render('vacations', context);
  });
});
```
