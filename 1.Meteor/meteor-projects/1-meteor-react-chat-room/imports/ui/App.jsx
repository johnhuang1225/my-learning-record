import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import { Messages } from '../api/messages.js';

import Message from './Message.jsx';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

// App component - represents the whole app
class App extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Meteor.call('messages.insert', text);

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderMessages() {
    let messages = this.props.messages;

    return messages.map((message) => {
      return (
        <Message
          key={message._id}
          message={message}
        />
      );
    });
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Chat Room</h1>

          <AccountsUIWrapper />

          <form className="new-message" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new messages"
            />
          </form>
        </header>

        <ul>
          {this.renderMessages()}
        </ul>
      </div>
    );
  }
}

App.propTypes = {
  messages: PropTypes.array.isRequired
};

export default createContainer(() => {
  Meteor.subscribe('messages');

  return {
    messages: Messages.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user()
  };
}, App);
