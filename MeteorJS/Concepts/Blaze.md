## Blaze

Blaze is a reactive UI library, and one of its parts is the templating language Spacebars. Because developers usually (only) interact with the front-end lib via the templating language and Spacebars is relatively easy to use (in comparison to other templating languages), Blaze is simpler to use than React, Angular, or Ember.

The official documentation describes Blaze as a “reactive jQuery,” a powerful library to update the DOM. But it doesn’t follow the same imperative style jQuery uses (“find element #user-list and add a new li node!”), but a declarative approach (“render all usernames from the DB in this list using templates users!”). When content changes, Blaze re-renders only small fragments inside a template and not the entire page. It also plays nicely with other UI libraries such as jQuery-UI or even Angular.
