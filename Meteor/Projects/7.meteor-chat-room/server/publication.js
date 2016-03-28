Meteor.publish("rooms", function () {
  return Rooms.find();
});

// Timestamp DESC
Meteor.publish("messages", function () {
  return Messages.find({}, {sort: {ts: -1}});
});
