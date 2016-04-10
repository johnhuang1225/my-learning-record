import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

// Task component - represents a single todo item
export default class Sidebar extends Component {

  renderLinks() {
    let links = this.props.links.map((link) => {
      return (
      <li key={link._id}>
        <a href={link.href}><i className={link.icon}></i> {link.text}</a>
      </li>
      );
    });

    return links;
  }

  render(){
    return (
    <div className="column col-sm-2 col-xs-1 sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li>
          <a href="#" data-toggle="offcanvas" className="visible-xs text-center">
            <i className="fa fa-list-alt"></i>
          </a>
        </li>
      </ul>
      <ul className="nav hidden-xs" id="lg-menu">
        {this.renderLinks()}
      </ul>
    </div>
    );
  }
}

export default createContainer(() => {

  let links = [
  {_id:1,href:'/profile',icon:'fa fa-user fa-2x',text:'Profile'},
  {_id:2,href:'/dashboard',icon:'fa fa-rss fa-2x',text:'News Feed'},
  {_id:3,href:'/messages',icon:'fa fa-comment fa-2x',text:'Messages'},
  {_id:4,href:'/friends',icon:'fa fa-users fa-2x',text:'Friends'}
  ];

  return {
    links: links
  };
}, Sidebar);
