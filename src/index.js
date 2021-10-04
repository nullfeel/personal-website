import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.module.css'
import NullFeelHomepage from './views/null-feel-homepage'
import NullFeelConnect from './views/null-feel-connect'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={NullFeelHomepage} path="/" />
        <Route exact component={NullFeelConnect} path="/null-feel-connect" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
