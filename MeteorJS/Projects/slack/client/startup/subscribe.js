Meteor.subscribe('channels');
Meteor.subscribe('allUsernames');

Template.messages.onCreated(function() {
  var self = this;

  // when Session.get('channel') changed, subscribe to different channel
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
  });
});
