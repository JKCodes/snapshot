import constants from '../constants'
import { APIManager } from '../utils'

export default {

  updateCurrentLocation: (location) => {
    return {
      type: constants.CURRENT_LOCATION_CHANGED,
      location: location
    }
  },

  createPost: (params) => {
    return (dispatch) => {
      APIManager
      .post('/api/post', params)
      .then(response => {

      })
      .catch((err) => {
        console.log('ERROR: '+err)
      })
    }
  },

  fetchPosts: (params) => {
    return (dispatch) => {
      APIManager
      .get('/api/post', null)
      .then(response => {
        dispatch({
          type: constants.POSTS_RECEIVED,
          posts: response.results
        })
      })
      .catch((err) => {
        console.log('ERROR: '+err)
      })
    }

  },

  postsReceived: (posts) => {
    return {
      type: constants.POSTS_RECEIVED,
      posts: posts
    }

  }

}