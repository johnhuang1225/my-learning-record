Meteor.methods({

  'insertMessage': function(message, roomname){
    Messages.insert({
      user: Meteor.user().username,
      message: message,
      roomname: roomname,
      createAt: new Date()
    })
  }

});
