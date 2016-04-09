// require the mongoClient from mongodb module
var MongoClient = require('mongodb').MongoClient;

// Mongodb configs
var connectionUrl = 'mongodb://localhost:27017/myproject'
var sampleCollection = 'chapters';

// data to insert into mongoDB
var chapters = [{
  'Title': 'Snow Crash',
  'Author': 'Neal Stephenson'
},{
  'Title': 'Snow Crash',
  'Author': 'Neal Stephenson'
}];

// Initiate a connection with the MongoDB server
MongoClient.connect(connectionUrl, function(err, db) {
  console.log("Connected correctly to server");
  // Get some collection
  var collection = db.collection(sampleCollection);
  // Insert data to collection
  collection.insert(chapters, function(error,result){
    // here result will contain an array of records inserted
    if(!error) {
      console.log("Success :"+result.ops.length+" chapters
      inserted!");
    } else {
      console.log("Some error was encountered!");
    }
    db.close();
  });
});
