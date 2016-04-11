import React from 'react'
import ReactDom from 'react-dom'

import { renderRoutes } from './config/routes'

ReactDom.render(
  renderRoutes,
  document.getElementById('app')
)
