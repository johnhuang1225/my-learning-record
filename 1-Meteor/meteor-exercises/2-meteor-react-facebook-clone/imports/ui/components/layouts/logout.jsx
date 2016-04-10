import Meteor from 'meteor/meteor';
import React, { Component } from 'react';
import { browserHistory }from 'react-router';


export default class Logout extends Component {
  componentWillMount () {
    Meteor.logout(function () {
      browserHistory.push('/');
    });
  }

  render () {
    return null;
  }
}
