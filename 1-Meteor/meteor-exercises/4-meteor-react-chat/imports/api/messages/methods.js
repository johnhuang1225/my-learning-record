import { Meteor } from 'meteor/meteor'

import { Messages } from './messages.js'

Meteor.methods({

  'messages.insert'(text) {
    Messages.insert({
      text: text,
      createdAt: new Date()
    })
  }

})
