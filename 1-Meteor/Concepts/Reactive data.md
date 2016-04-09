## Reactive data

#### There are 7 reactive data sources in Meteor, but we only care about the top 2 at the moment:

* Database queries on collections (like `Teams.find()`)
* Session variables (we will use these in a second)
* `Meteor.status`
* The `ready()` method on a subscription handle
* `Meteor.user`
* `Meteor.userId`
* `Meteor.loggingIn`

#### There are 3 “function upgraders” in Meteor. I’ll list them all, but we only care about the top one:

* Templates
* `Tracker.autorun`
* `Blaze.render` and `Blaze.renderWithData`
