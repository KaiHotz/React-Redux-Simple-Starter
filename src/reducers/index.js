import { combineReducers } from 'redux'
import ExampleReducer from './exampleReducer'

const rootReducer = combineReducers({
  posts: ExampleReducer
})

export default rootReducer
