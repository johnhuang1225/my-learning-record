import React, { Component } from 'react'
import { moment } from 'meteor/momentjs:moment'

// Task component - represents a single todo item
export class Message extends Component {

  formatTime(time) {
    return moment(time).format('h:mm A')
  }

  render(){
    return (
      <li>{this.formatTime(this.props.message.time)} - {this.props.message.text}</li>
    )
  }
}

Message.propTypes = {
  key: React.PropTypes.string,
  message: React.PropTypes.string
}
