import React, { Component } from 'react'
import { Posts, MapNavigation } from '../containers'

class Home extends Component {
  render(){
    return (
      <div className="container">
        Home Layout
        <div className="row">

          <div className="col-md-3">
            <MapNavigation />

          </div>

          <div className="col-md-6">
            <Posts />

          </div>

          <div className="col-md-3">
            ACCOUNT

          </div>
        </div>
      </div>
    )
  }
}

export default Home