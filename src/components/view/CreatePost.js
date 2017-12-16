import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import { APIManager, CloudinaryUtil } from '../../utils'

class CreatePost extends Component {

	constructor(){
		super()
		this.state = {
			post: {
				image: null,
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

		if (!this.state.post.image || this.state.post.image.length == 0){
			swal({
			  title: "Oops!",
			  text: "Please add an image first.",
			  type: "error"
			})

			return
		}

		if (this.state.post.caption.length == 0){
			swal({
			  title: "Oops!",
			  text: "Please add a caption first.",
			  type: "error"
			})
			
			return
		}

		let updated = Object.assign({}, this.state.post)
		this.props.onCreate(updated)
		.then(response => {
			let updated = Object.assign({}, this.state.post)
			updated['image'] = null
			updated['caption'] = ''
			this.setState({
				post: updated
			})

			swal({
			  title: "Success",
			  text: "Your post was created successfully.",
			  type: "success"
			})
		})
		.catch(err => {
			swal({
				title: "An unexpected error has occurred",
			  text: "Please try posting again.",
			  type: "error"
			})
		})
	}

	imageSelected(files){
		CloudinaryUtil.upload(files)
		.then((uploaded) => {
			let updated = Object.assign({}, this.state.post)
			updated['image'] = uploaded['secure_url']
			this.setState({
				post: updated
			})
		})
		.catch((err) => {
			swal({
			  title: "Image Add Error",
			  text: err,
			  type: "error"
			})
		})
	}

	render(){
		return (
			<div style={{background:'#fff'}}>
				<h2>Submit Post</h2>
				<input id="caption" value={this.state.post.caption} onChange={this.updatePost.bind(this)} type="text" placeholder="Caption" />
				<div className="row" style={{textAlign:'center'}}>
					<div className="12u 12u$(small)">
						<p style={{width: 110, margin: '8px auto', borderBottom: '1px solid #ddd' }}>Image Preview</p>
						{this.state.post.image ? <img style={{width:'100%'}} src={this.state.post.image} /> : <p>Add an image first</p> }
					</div>
				</div>
				<div className="row">
					<div className="6u 12u$(small)">
						<Dropzone onDrop={this.imageSelected.bind(this)} style={{border:'none', marginTop:12}}>
							<button className="button special small">Add Image</button>
						</Dropzone>					
					</div>
					<div className="6u 12u$(small)">
						<button className="button special small" style={{marginTop:12}} onClick={this.submitPost.bind(this)}>Submit</button>
					</div>
				</div>

				<br /><br /><hr />
			</div>
		)
	}
}

export default CreatePost