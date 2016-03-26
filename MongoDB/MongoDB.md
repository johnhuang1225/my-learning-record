## MongoDB

##### Access the Mongo shell.

```js
mongo
```

##### Display a list of all databases on the server.

```js
show dbs
```

##### Switch databases.

```js
use chapter3
```

##### View a list of collections in the database.

```js
show collections
```

### Create

##### Insert data to newCollection.

```js
db.newCollection.insert({ name: 'Jason Krol', website: 'http://kroltech.co' })
```

### Read

##### Using the find() function by itself with no parameters will return every document in the collection.

```js
db.newCollection.find().pretty()
```

##### You can include additional parameters to make the search more precise.

```js
db.newCollection.find({ name: 'Jason Krol', website: 'http://kroltech.com'})
```

##### If you want to only return a specific set of fields with the result, you can include a map as the second parameter.

```js
db.newCollection.find({ name: 'Jason Krol' }, { name: true, _id: false })
```

##### Use query operators to search for things that are within ranges. These include greater than (or equal to) and less than (or equal to).

```js
db.homework_scores.find({ score: { $gte: 80, $lt: 90 } })
```

##### Use regex while performing a search to return multiple matching documents.

```js
db.newCollection.find({ name: { $regex: 'Krol'} })
```

### Update

##### Update document's website.

```js
db.newCollection.update({ name: 'Jason Krol' }, { $set: { website: 'http://jasonkrol.com' } })
```

##### Create new document if 'Joe Smith' doesn't exist.

```js
db.newCollection.update({ name: 'Joe Smith' }, { $set: { website: 'http://jasonkrol.com' } }, { upsert: true })
```

### Delete

##### Deletes documents that match the search criteria.

```js
db.newCollection.remove({ name: 'Jason Krol' })
```

##### Remove every document in a collection.

```js
db.newCollection.drop()
```
