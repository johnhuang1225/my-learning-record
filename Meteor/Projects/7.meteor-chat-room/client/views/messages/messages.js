Meteor.subscribe("messages");

Template.messages.helpers({
  messages: function() {
    return Messages.find({roomname: Session.get("roomname")});
  },

  roomname: function() {
    return Session.get("roomname");
  }
});
