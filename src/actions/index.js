import constants from '../constants'
import { APIManager } from '../utils'

export default {
  fetchPosts: (params) => {
    return (dispatch) => {
      APIManager
      .get('/api/post', null)
      .then((response) => {
        dispatch({
          type: constants.POSTS_RECEIVED,
          posts: response.results
        })
      })
      .catch((err) => {
        console.log(err)
      })


    }
  }
}