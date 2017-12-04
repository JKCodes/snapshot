import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class CreatePost extends Component {

  constructor(){
    super()
    this.state = {
      post: {
        image: '',
        caption: ''
      }
    }
  }

  updatePost(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.post)
    updated[event.target.id] = event.target.value
    this.setState({
      post: updated
    })
  }

  submitPost(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.post)
    this.props.onCreate(updated)
  }

  render(){
    return (
      <div>
        Create Post
        <Dropzone style={{border:'none'}}>
          <button>Upload Image</button>
        </Dropzone>
        <input id="caption" onChange={this.updatePost.bind(this)} type="text" placeholder="Caption" />
        <button onClick={this.submitPost.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default CreatePost