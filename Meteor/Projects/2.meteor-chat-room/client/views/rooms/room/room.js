Template.room.helpers({
  roomstyle: function() {
    return Session.equals("roomname", this.roomname) ? "font-weight: bold" : "";
  }
});
