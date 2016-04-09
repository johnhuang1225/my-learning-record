import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory }from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

// Task component - represents a single todo item
export default class Signupform extends Component {
  // For ES6 classes, getInitialState has been deprecated in favor of declaring an initial state object in the constructor
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      messageClass: 'hidden'
    };
  }

  displayError(message){
    this.setState({message: message, messageClass: 'alert alert-danger registerError'});
  }

  handleSubmit(e){
    e.preventDefault();
    // If we don't use bind(this), this will become window object
    this.setState({message: '', messageClass: 'hidden'});
    let that = this;
    let first_name = ReactDOM.findDOMNode(this.refs.first_name).value.trim();
    let last_name = ReactDOM.findDOMNode(this.refs.last_name).value.trim();
    let email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.password).value.trim();
    let user = {
      email: email,
      password: password,
      profile: {
        fullname: (first_name + last_name).toLowerCase(),
        firstname: first_name,
        lastname: last_name,
        avatar: 'http://placehold.it/150x150',
        friends: []
      }
    };

    Accounts.createUser(user, function (e) {
      if (e) {
        that.displayError(e.reason);
      } else {
        browserHistory.push('/dashboard');
      }
    });
  }

  render(){
    return (
    <div className="row">
      <div className="signup">
        <h1>Sign Up</h1>
        <p className="text-muted">It's free and always will be.</p>
      </div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <div className="col-sm-9">
          <div className="row">
            <div className="col-sm-6 form-group">
              <input ref="first_name" type="text" placeholder="First name"
              className="form-control"/>
            </div>
            <div className="col-sm-6 form-group">
              <input ref="last_name" type="text" placeholder="Last name"
              className="form-control"/>
            </div>
          </div>


          <div className="form-group">
            <input type="text" placeholder="Email or mobile number" ref="email"
            className="form-control"/>
          </div>
          <div className="form-group">
            <input type="password" placeholder="New password" ref="password"
            className="form-control"/>
          </div>
          <button type="submit" className="btn btn-md btn-success">Sign Up</button>
           <span className={this.state.messageClass}>{this.state.message}</span>
        </div>
      </form>
    </div>
    );
  }
}
