import _ from 'lodash'
import { FETCH_POSTS, FETCH_SINGLE_POST } from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id')
    case FETCH_SINGLE_POST:
      return { ...state, ...action.payload.data }
    default:
      return state
  }
}
