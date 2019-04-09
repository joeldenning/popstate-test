import React from 'react'
import {Link} from 'react-router-dom'

export default function App1ParentRoute(props) {
  return (
    <>
      <h1>App 1 Parent route</h1>
      <Link to="/">Go to root</Link>
      <Link to="/subroute1">Go to subroute1</Link>
    </>
  )
}