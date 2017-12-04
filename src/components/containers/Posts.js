import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { connect } from 'react-redux'
import action from '../../actions'

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts(null)
  }

  render() {
    const list = this.props.posts.list.map((post, i) => {
      return (
        <li key={post.id}>{post.caption}</li>
      )
    })

    return (
      <div>
        <ol>
          { list }
        </ol>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    posts: state.post
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchPosts: (params) => dispatch(action.fetchPosts(params))
  }
}

export default connect(stateToProps, dispatchToProps)(Posts)