import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Task component - represents a single todo item
export default class Fullname extends Component {
  render(){
    var fullname='';
    var personlink = '';

    if(this.data.usr){
      fullname= this.data.usr.profile.firstname + ' ' + this.data.usr.profile.lastname;
      personlink = '/user/' + (this.data.usr.profile.firstname + this.data.usr.profile.lastname).toLowerCase();
    }

    return (
      <a className={this.props.klass} href={personlink}>{fullname}</a>
    );
  }
}

export default createContainer(() => {

  var userhandle = Meteor.subscribe('userlist', this.props.user);
  var data = {};

  if(userhandle.ready()){
    data.usr = Meteor.users.findOne({_id:this.props.user});
  }

  return {
    data: data
  };
}, Fullname);
