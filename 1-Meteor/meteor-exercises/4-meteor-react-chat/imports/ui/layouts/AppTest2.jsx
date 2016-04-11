import { Meteor } from 'meteor/meteor'
import React, { PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createContainer } from 'meteor/react-meteor-data'

import { Messages } from '../../api/messages/messages.js'
import { Message } from '../components/Message.jsx'

class AppTest2 extends React.Component {

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

AppTest2.propTypes = {
  messages: PropTypes.array.isRequired
}

export default createContainer(() => {
  Meteor.subscribe('messages.all')

  return {
    messages: Messages.find({}).fetch()
  }
}, AppTest2)
