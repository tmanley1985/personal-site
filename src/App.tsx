import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

interface HomeState {
  header: string,
}
const header: string = `Hi, I'm Thomas. I build things.`

class Home extends React.Component {
  state = {
    header: '',
  }
  componentDidMount() {
    const intervalId = setInterval(
      () => {
          if (this.state.header.length === header.length - 1) {
            clearInterval(intervalId)
          }
          this.setState(
            (state: HomeState) => 
              ({ header: state.header
                  .concat(
                    this.state.header.length === 0
                      ? header[0]
                      : header[this.state.header.length]
                  )
              })
            )
          }, 
      100
      )

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
          {this.state.header}&nbsp;
          <span className="blinking-cursor">|</span>
          </h1>
          
        </header>
        <div>
          <img src="./images/composition.png" alt="composition" width="50%" height="50%"/>
        </div>
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
