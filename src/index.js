import * as React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-js'
import Login from './Login'

// Component
// State
// Lifecycle
// UI

function App () {
  const [useToken, setToken] = React.useState(true)

  return (
    <div className='app'>
      {!token && <Login />}
      {token && <Player />}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)