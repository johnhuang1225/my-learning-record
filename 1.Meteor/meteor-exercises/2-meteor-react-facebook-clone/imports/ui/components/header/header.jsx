import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Header extends Component {
  render(){
    return (
    <div>
      <span className="navbar-react"><i className="fa fa-facebook"></i>akebook
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <form onSubmit={this.handleSubmit} id="signin" className="navbar-form navbar-right" role="form">
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
            
          </form>
        </div>
      </span>
    </div>
    );
  }
}
