import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// route components
import Homelayout from '../../ui/components/layouts/home.jsx';
import Layout from '../../ui/components/layouts/layout.jsx';
import Logout from '../../ui/components/layouts/logout.jsx';

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Homelayout} />
    <Route path="/dashboard" component={Layout}/>
    <Route path='/logout' component={Logout} />
  </Router>
);
