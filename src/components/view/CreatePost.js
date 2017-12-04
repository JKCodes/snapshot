import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import sha1 from 'sha1'
import { APIManager } from '../../utils'

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

    if (this.state.post.image.length == 0){
      alert('Please add an image first.')
      return
    }

    if (this.state.post.caption.length == 0){
      alert('Please add a caption.')
      return
    }

    let updated = Object.assign({}, this.state.post)
    this.props.onCreate(updated)
  }

  imageSelected(files){
    const image = files[0]

    const cloudName = process.env.CLOUDINARY_CLOUDNAME
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'

    const timestamp = Date.now()/1000
    const uploadPreset = process.env.CLOUDINARY_UPLOAD_PRESET

    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+process.env.CLOUDINARY_API_SECRET

    const signature = sha1(paramsStr)
    const params = {
      'api_key': process.env.CLOUDINARY_API_KEY,
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature
    }

    APIManager.uploadFile(url, image, params)
    .then((uploaded) => {
      let updated = Object.assign({}, this.state.post)
      
      updated['image'] = uploaded['secure_url']
      this.setState({
        post: updated
      })
    })
    .catch((err) => {
      alert(err)
    })
  }

  render(){
    return (
      <div>
        Create Post
        <Dropzone onDrop={this.imageSelected.bind(this)} style={{border:'none'}}>
          <button>Upload Image</button>
        </Dropzone>
        <input id="caption" onChange={this.updatePost.bind(this)} type="text" placeholder="Caption" />
        <button onClick={this.submitPost.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default CreatePost