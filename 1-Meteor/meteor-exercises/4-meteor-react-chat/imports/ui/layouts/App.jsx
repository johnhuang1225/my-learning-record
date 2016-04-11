import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Message } from '../components/Message.jsx'

export class App extends Component {

  handleSubmit(event) {
    event.preventDefault()

    let message = ReactDOM.findDOMNode(this.refs.textInput).value.trim()

    Meteor.call('messages.insert', message)

    ReactDOM.findDOMNode(this.refs.textInput).value = ''
  }

  renderMessages() {
    return this.props.messages.map((message) => {
      return <Message key={message._id} message={message} />
    })
  }

  renderForm() {
    return <form onSubmit={this.handleSubmit.bind(this)} >
      <input
      type="text"
      ref="textInput"
      name="message"
      placeholder="Enter message..." />
    </form>
  }

  render(){
    return (
    <div className="container">
      <header>
        <h2>Messages</h2>
      </header>

      {this.renderForm()}

      <ul>
        {this.renderMessages()}
      </ul>
    </div>
    )
  }
}
