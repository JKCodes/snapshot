import React, { Component } from 'react'
import { Posts } from '../containers'

class Home extends Component {
  render() {
    return (

      <div className="container">
        Home
        <div className="row">
          <div className="col-md-3">
            Map
          </div>

          <div className="col-md-6">
            <Posts />
          </div>

          <div className="col-md-3">
            Account
          </div>
        </div>
      </div>
    )
  }
}

export default Home