import React, { Component } from 'react'

export class Main extends Component {
  render() {
    return (
      <div className='main-container'>
        {/* home will render here */}
        {this.props.children}
      </div>
    )
  }
}
