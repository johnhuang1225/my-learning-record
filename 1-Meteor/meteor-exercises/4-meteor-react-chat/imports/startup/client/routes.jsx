import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import AppContainer from '../../ui/containers/AppContainer.jsx'

export const renderRoutes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ AppContainer }>
    </Route>
  </Router>
)
