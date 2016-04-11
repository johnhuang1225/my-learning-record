import React, { Component, PropTypes } from 'react'
import { Prompt } from '../components/Prompt.jsx'

export class PromptContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: ''
    };
  }

  handleSubmitUser(event) {
    event.preventDefault();

    var username = this.state.username;

    this.setState({
      username: ''
    });

    if (this.props.routeParams.playerOne) {
      this.context.router.push({
        pathname: '/battle',
        query: {
          playerOne: this.props.routeParams.playerOne,
          playerTwo: this.state.username,
        }
      })
    } else {
      this.context.router.push('/playerTwo/' + this.state.username)
    }
  }

  handleUpdateUser(event) {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    return (
      <Prompt
        onSubmitUser={this.handleSubmitUser.bind(this)}
        onUpdateUser={this.handleUpdateUser.bind(this)}
        header={this.props.route.header}
        username={this.state.username} />
    )
  }
}

PromptContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
