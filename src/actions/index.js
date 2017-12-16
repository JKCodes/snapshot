import constants from '../constants'
import { APIManager } from '../utils'

const getRequest = (path, params, actionType) => {
	return (dispatch) => 
		APIManager.get(path, params)
		.then(response => {

			const payload = response.results || response.result || response.user

			dispatch({
				type: actionType,
				payload: payload,
				params: params
			})

			return response
		})
		.catch(err => {

			throw err
		})
}

const postRequest = (path, params, actionType) => {
	return (dispatch) => 
		APIManager.post(path, params)
		.then(response => {
			const payload = response.results || response.result || response.user

			dispatch({
				type: actionType,
				payload: payload,
				params: params
			})
			return response
		})
		.catch(err => {
			throw err
		})
}

export default {

	signup: (params) => {
		return (dispatch) => {
			return dispatch(postRequest('/account/register', params, constants.CURRENT_USER_RECEIVED))
		}
	},

	login: (params) => {
		return (dispatch) => {
			return dispatch(postRequest('/account/login', params, constants.CURRENT_USER_RECEIVED))
		}
	},

	logout: (params) => {
		return (dispatch) => {
			return dispatch(getRequest('/account/logout', params, constants.CURRENT_USER_RECEIVED))
		}
	},

	checkCurrentUser: (params) => {
		return (dispatch) => {
			return dispatch(getRequest('/account/currentuser', params, constants.CURRENT_USER_RECEIVED))
		}
	},

	updateCurrentLocation: (location) => {
		return {
			type: constants.CURRENT_LOCATION_CHANGED,
			location: location
		}
	},

	createPost: (params) => {
		return (dispatch) => {
			return dispatch(postRequest('/api/post', params, constants.POST_CREATED))
		}
	},

	fetchPosts: (params) => {
		return (dispatch) => {
			return dispatch(getRequest('/api/post', params, constants.POSTS_RECEIVED))
		}
	}
}