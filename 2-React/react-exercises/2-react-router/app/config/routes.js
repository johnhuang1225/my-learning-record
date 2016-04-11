import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import { Main } from '../components/Main.jsx'
import { Home } from '../components/Home.jsx'

export const renderRoutes = (
  <Router history={ browserHistory }>
    <Route path="/" component={ Main }>
      <IndexRoute component={ Home } />
    </Route>
  </Router>
)
