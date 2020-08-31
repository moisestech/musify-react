import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Component
// State
// Lifecycle
// UI

function App () {

  return (
    <h1>Welcome to Musify!</h1>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)