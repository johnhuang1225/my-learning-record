Meteor.startup(function () {
  // clean all messages & rooms
  Messages.remove({});
  Rooms.remove({});

  if (Rooms.find().count() === 0) {
    ["Meteor", "JavaScript", "Reactive", "MongoDB"].forEach(function(room) {
      Rooms.insert({roomname: room});
    });
  }
});
