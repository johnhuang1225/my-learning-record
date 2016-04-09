import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Main extends Component {
  render(){
    return (
    <div className="col-sm-10 col-xs-11" id="main">
      <div>
        <div className="full col-sm-9">
          <div className="row">
            <div className="col-sm-9">
              Status
              form
              Posts
              <button onClick={this.addMore}
              className="btn btn-lg">More</button>13
            </div>
            <div className="col-sm-3">
              ads
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
