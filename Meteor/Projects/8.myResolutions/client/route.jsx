import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from './layouts/MainLayout.jsx';

// if you don't use { } means that App is its default name
import App from './App.jsx';

FlowRouter.route('/', {
  action() {
    mount(MainLayout,{
      content: (<App />)
    })
  }
})
