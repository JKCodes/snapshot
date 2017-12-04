import constants from '../constants'

export default {

  postsReceived: (posts) => {
    return {
      type: constants.POSTS_RECEIVED,
      posts: posts
    }
  }
}