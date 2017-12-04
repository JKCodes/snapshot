import constants from '../constants'

var initialState = {
  list: []
}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state)

  switch (action.type) {
    case constants.POSTS_RECEIVED:
      updated['list'] = action.posts
      return updated
    default:
      return state
  }
}