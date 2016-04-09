import React, { Component, PropTypes } from 'react';

// import components
import Header from '../header/header.jsx';
import Signupform from '../signup/signupform.jsx';
import Featurelist from '../features/featurelist.jsx';

// Task component - represents a single todo item
export default class Homelayout extends Component {
  render(){
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Featurelist />
            </div>
            <div className="col-md-5 col-md-offset-1">
              <Signupform />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
