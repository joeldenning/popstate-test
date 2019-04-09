import React from 'react'
import ReactDOM from 'react-dom'
import singleSpaReact from 'single-spa-react'
import Root from './root.component'

export default singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
})