import React, { Component, PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

// Message component - represents a single todo item
export default class Message extends Component {
  deleteThisMessage() {
    Meteor.call('messages.remove', this.props.message._id);
  }

  render() {
    // Give messages a different className when they are checked off,
    // so that we can style them nicely in CSS
    const messageClassName = classnames({
    });

    return (
      <li className={messageClassName}>

      { this.props.message.owner === Meteor.userId() ? (
        <button className="delete" onClick={this.deleteThisMessage.bind(this)}>
          &times;
        </button>
      ) : ''}

        <span className="text">
          <strong>{this.props.message.username}</strong>: {this.props.message.text}
        </span>
      </li>
    );
  }
}

Message.propTypes = {
  // This component gets the message to display through a React prop.
  // We can use propTypes to indicate it is required
  message: PropTypes.object.isRequired
};
