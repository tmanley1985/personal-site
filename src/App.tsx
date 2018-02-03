import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

const logo = require('./logo.svg')
class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get ddstarted, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}

const App = () => (
  <Router>
    <div>
    <Route path="/" component={Home} />
    </div>
  </Router>
)

export default App
