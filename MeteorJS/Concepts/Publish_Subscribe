## Publish/Subscribe

```
/* Publishing from server. */
if (Meteor.isServer) {
  Meteor.publish("tasks", function () { //Registering "tasks" publication
    return Tasks.find();
  });
}

/* Subscribing from client */
Meteor.subscribe("tasks");
```
