import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import App2ParentRoute from './app2-parent-route.component'
import App2SubRoute from './app2-sub-route.component'

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/" component={App2ParentRoute} />
      <Route path="/subroute1" component={App2SubRoute} />
    </BrowserRouter>
  )
}