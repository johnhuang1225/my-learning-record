import { Mongo } from 'meteor/mongo'

export const Messages = new Mongo.Collection('messages')

// Deny all client-side updates since we will be using methods to manage this collection
Messages.deny({
  insert() { return true },
  update() { return true },
  remove() { return true }
})
