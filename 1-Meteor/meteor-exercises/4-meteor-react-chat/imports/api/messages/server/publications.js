import { Meteor } from 'meteor/meteor'

import { Messages } from '../messages.js'

Meteor.publish('messages.all', function messagesAll() {
  // find from server
  return Messages.find({})
})
