import React, { Component } from 'react'
import { APIManager } from '../../utils'

class Posts extends Component {

  componentDidMount() {
    APIManager
    .get('/api/post', null)
    .then((response) => {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        Posts Container
      </div>
    )
  }
}

export default Posts