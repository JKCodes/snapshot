import constants from '../constants'

var initialState = {
  currentLocation: {
    lat: 40.7504753,
    lng: -73.9932668
  },
  list: null
}

export default (state = initialState, action) => {
  let updated = Object.assign({}, state)

  switch (action.type){
    case constants.POSTS_RECEIVED:
      updated['list'] = action.posts
      return updated

    case constants.CURRENT_LOCATION_CHANGED:
      updated['currentLocation'] = action.location
      updated['list'] = null
      return updated

    default:
      return updated

  }
}