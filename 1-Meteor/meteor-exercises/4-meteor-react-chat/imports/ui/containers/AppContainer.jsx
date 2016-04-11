import { Meteor } from 'meteor/meteor'
import { Messages } from '../../api/messages/messages.js'
import { createContainer } from 'meteor/react-meteor-data'
import { App } from '../layouts/App.jsx'

export default createContainer(() => {
  // store in minimongo
  Meteor.subscribe('messages.all')

  return {
    // fetch from minimongo
    messages: Messages.find({}).fetch()
  }
}, App)
