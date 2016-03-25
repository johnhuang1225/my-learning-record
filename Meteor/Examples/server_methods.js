if(Meteor.isServer) {
  Meteor.methods({
    create_user: function(username) {
      console.log("CREATING USER");
      var USER_id = Users.insert({name: username});
      return user_id;
    },
  });
}

// Remember, the client's browser only ever sees the code below:
if(Meteor.isClient) {
  var username = "Andrew Scala";

  Meteor.call("create_user", username, function(error, user_id) {
    Session.set("user_id", user_id);
  });
}
