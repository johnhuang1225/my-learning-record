import { Router } from 'meteor/iron-meteor';

Router.route('/', {
  name: 'home',
  path: '/',
  template: 'home'
});

Router.route('form', {
  path: '/form',
  template: 'form',
  onBeforeAction: function () {
    Session.set('currentRoute', 'form')
  }
});
