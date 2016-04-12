import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import { Main } from '../components/Main.jsx'
import { Home } from '../components/Home.jsx'
import { PromptContainer } from '../containers/PromptContainer.jsx'
import { ConfirmBattleContainer } from '../containers/ConfirmBattleContainer.jsx'


export const renderRoutes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='playerOne' header='Player One' component={PromptContainer} />
      <Route path='playerTwo/:playerOne' header='Player Two' component={PromptContainer} />
      <Route path='battle' component={ConfirmBattleContainer} />
    </Route>
  </Router>
)
