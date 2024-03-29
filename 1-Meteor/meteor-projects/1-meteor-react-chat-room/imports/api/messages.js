import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Messages = new Mongo.Collection('messages');

if (Meteor.isServer) {
  // This code only runs on the server
  // Only publish messages that are public or belong to the current user
  Meteor.publish('messages', function messagesPublication() {
    return Messages.find({});
  });
}

Meteor.methods({
  'messages.insert'(text) {
    check(text, String);

    // Make sure the user is logged in before inserting a message
    if (! this.userId) {
      throw new Meteor.Error('not-authorized');
    }

    Messages.insert({
      text: text,
      createdAt: new Date(),
      // This == Meteor
      owner: this.userId,
      username: Meteor.users.findOne(this.userId).username
    });
  },

  'messages.remove'(messageID) {
    check(messageID, String);

    const message = Messages.findOne(messageID);
    if (message.owner !== this.userId) {
      // If the message is private, make sure only the owner can delete it
      throw new Meteor.Error('not-authorized');
      // console.log(this.userId)
    }

    Messages.remove(messageID);
  }
});
