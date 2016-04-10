import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { browserHistory }from 'react-router';

// Task component - represents a single todo item
export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message:''
    };
  }

  displayError(message){
    this.setState({message: message, messageClass:'alert alert-danger message'});
  }

  handleSubmit(e){
    e.preventDefault();

    this.setState({message:'', messageClass:'hidden'});

    let that = this;
    let email = ReactDOM.findDOMNode(this.refs.email).value.trim();
    let password = ReactDOM.findDOMNode(this.refs.password).value.trim();

    Meteor.loginWithPassword(email, password, function (e) {
      if(e){
        that.displayError(e.reason);
      } else{
        Meteor.setTimeout(function(){
          browserHistory.push('/dashboard');
        },1000);
      }
    });
  }

  render(){
    return (
    <div>
      <span className="navbar-react"><i className="fa fa-facebook"></i>akebook
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <form onSubmit={this.handleSubmit.bind(this)} id="signin" className="navbar-form navbar-right" role="form">
            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-user"></i></span>
              <input id="email" type="email" className="form-control" ref="email" name="email"
              placeholder="Email Address"/>
            </div>

            <div className="input-group">
              <span className="input-group-addon"><i className="fa fa-lock"></i></span>
              <input id="password" type="password" className="form-control" ref="password" name="password"
              placeholder="Password"/>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            <br/>
            <span className={this.state.messageClass}>{this.state.message}</span>
          </form>
        </div>
      </span>
    </div>
    );
  }
}
