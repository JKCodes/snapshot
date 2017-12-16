import React, { Component } from 'react'
import { Register } from '../view'
import { connect } from 'react-redux'
import actions from '../../actions'

class Account extends Component {

	componentDidMount(){
		this.props.checkCurrentUser()
	}

	register(registration){
		this.props.signup(registration)
	}

	login(credentials){
		this.props.login(credentials)
	}

	logout() {
		this.props.logout(null)
	}

	render(){
		const currentUser = this.props.account.user

		return (
			<div>
				<h1 style={{textAlign:'center'}}>Welcome to Snapshot!</h1>
				{ (currentUser == null) ? <Register onRegister={this.register.bind(this)} onLogin={this.login.bind(this)} /> : 
					<div>
						<h2 style={{textAlign:'center'}}>You are currently logged in as: {currentUser.username}</h2> 

						<div className="row">
							<div className="12u 12u$(small)">
								<button className="button special small" style={{marginBottom: '1em'}}onClick={this.logout.bind(this)}>Logout</button>
							</div>
						</div>
					</div>
				}

			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		account: state.account
	}
}

const dispatchToProps = (dispatch) => {
	return {
		signup: (params) => dispatch(actions.signup(params)),
		login: (params) => dispatch(actions.login(params)),
		logout: (params) => dispatch(actions.logout(params)),
		checkCurrentUser: () => dispatch(actions.checkCurrentUser())
	}
}


export default connect(stateToProps, dispatchToProps)(Account)


