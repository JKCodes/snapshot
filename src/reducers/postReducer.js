import constants from '../constants'

var initialState = {

}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state)

  switch (action.type) {
    case constants.POSTS_RECEIVED:
      return updated
    default:
      return state
  }
}