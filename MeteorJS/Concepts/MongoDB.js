// fild one document which name is Stephan
Collection.findOne({name: "Stephan"});

// find all the documents which plants.color exists
Collection.find({"plants.color" : {$exists: 1 } });

// find all the documents which plants.color is White
Collection.find({"plants.color" : {$in: ["White"] } });

// find all the documents and only display name field
Collection.find({}, {name:1})

// update document which has id 12345 & set it's name to Updated Name
Collection.update({_id: "12345"}, {$set: {name: "Updated Name"}});

// insert a document with value field to the collection
// _id is assigned automatically by the database
Collection.insert({field: "value"});

// Remove specific document form a collection
Collection.remove(id);
