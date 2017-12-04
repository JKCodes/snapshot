import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Posts } from './components/containers'
import store from './stores'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={ store.configureStore() }>
        <div>
          <Posts />
        </div>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))