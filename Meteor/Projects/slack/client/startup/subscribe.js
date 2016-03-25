Meteor.subscribe('channels');
Meteor.subscribe('allUsernames');

// This don't work beacuse when channel session change it won't re subscribe new channel
// Meteor.subscribe('messages', Session.get('channel'));

Template.messages.onCreated(function() {
  var self = this;

  // when Session.get('channel') changed, subscribe to different channel
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
  });
});
