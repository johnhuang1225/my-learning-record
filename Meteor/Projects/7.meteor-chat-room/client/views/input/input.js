Template.input.events({
  'click .js-sentMsg': function(event, template) {
    sendMessage();
  },

  'keyup #msg': function(event, template) {
    // When user press enter
    if (event.type == "keyup" && event.keyCode == 13) {
      sendMessage();
    }
  }
});

var sendMessage = function() {
  var message = $("#msg").val();
  var roomname = Session.get("roomname")

  debugger

  Meteor.call('insertMessage', message, roomname)

  $("#msg").val('');
  $("#msg").focus();
};
