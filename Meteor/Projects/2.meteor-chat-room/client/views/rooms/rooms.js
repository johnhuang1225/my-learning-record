Meteor.subscribe("rooms");

Template.rooms.helpers({
  rooms: function() {
    return Rooms.find();
  }
});

Template.rooms.events({
  'click li': function(event, template) {
    Session.set("roomname", event.target.innerText);
  }
});
