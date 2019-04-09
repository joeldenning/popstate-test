import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import App1ParentRoute from './app1-parent-route.component'
import App1SubRoute from './app1-sub-route.component'

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/" component={App1ParentRoute} />
      <Route path="/subroute1" component={App1SubRoute} />
    </BrowserRouter>
  )
}