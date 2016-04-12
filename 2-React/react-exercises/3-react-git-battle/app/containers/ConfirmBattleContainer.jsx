import React, { Component, PropTypes } from 'react'
import { ConfirmBattle } from '../components/ConfirmBattle.jsx'
import { githubHelpers } from '../utils/githubHelpers.jsx'


export class ConfirmBattleContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      isLoading: true,
      playersInfo: []
    };
  }

  componentDidMount() {
    let query = this.props.location.query;

    githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
    .then(function (players) {
      this.setState({
        isLoading: false,
        playersInfo: [players[0], players[1]]
      })
    }.bind(this))
  }

  render() {
    return (
      <ConfirmBattle
        isLoading={this.state.isLoading}
        playersInfo={this.state.playersInfo} />
    )
  }
}

ConfirmBattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};
