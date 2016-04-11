import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import AppContainer from '../../ui/containers/AppContainer.jsx'
// import { AppTest } from '../../ui/layouts/AppTest.jsx'
// import AppTest2 from '../../ui/layouts/AppTest2.jsx'

export const renderRoutes = () => (
  <Router history={ browserHistory }>
    <Route path="/" component={ AppContainer }>
    </Route>
    {/*<Route path="/" component={ AppTest }>
    </Route>*/}
    {/*<Route path="/" component={ AppTest2 }>
    </Route>*/}
  </Router>
)
