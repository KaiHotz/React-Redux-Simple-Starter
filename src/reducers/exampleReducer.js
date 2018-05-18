import _ from 'lodash'
import { ITEM } from '@/actions/types'

export default function (state = {}, action) {
  switch (action.type) {
    case ITEM.GET:
      return _.mapKeys(action.payload.data, 'id')
    case ITEM.GET_ONE:
      return { ...state, ...action.payload.data }
    case ITEM.DELETE:
      return _.omit(state, action.payload)
    default:
      return state
  }
}
