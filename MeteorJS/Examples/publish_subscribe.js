// Create messages collection
var Messages = new Mongo.Collection("messages");

/* Publishing from server. */
if(Meteor.isServer) {
  Meteor.publish("messages", function(channel_name) { // Registering "messages" publication
  return Messages.find({channel: channel_name});
});
}

/* Subscribing from client */
if(Meteor.isClient) {
  Session.set("current_channel", "cool_people_channel");

  // Tracker.autorun is a reactive context, meaning everything inside will get re-run if a reactive data source changes inside.
  // In this situation "reactive data source" === "the data store in current_channel session"
  Tracker.autorun(function() {
    Meteor.subscribe("messages", Session.get("current_channel"));
  });
}
