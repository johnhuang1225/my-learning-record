import React, { Component, PropTypes } from 'react';
import Navbar from '../navbar/navbar.jsx';

// import components
import Sidebar from '../sidebar/sidebar.jsx';
import Main from '../main/main.jsx';

// Task component - represents a single todo item
export default class Layout extends Component {
  render(){
    return (
    <div className="wrapper">
      <div className="box">
        <div className="srow row-offcanvas row-offcanvas-left push-down-50">
          <Navbar/>
          <Sidebar/>
          <Main/>
        </div>
      </div>
    </div>
    );
  }
}
