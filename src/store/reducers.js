import { combineReducers } from 'redux'
import {
  ADD_ITEM,
  REMOVE_ITEM,
  APPLY_FILTER,
} from './actions'

function items (state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return [ ...state, { text: action.text } ]
    case REMOVE_ITEM:
      return [ ...state.slice(0, action.index), ...state.slice(action.index + 1)]
    default:
      return state
  }
}

function searchTerm (state = '', action) {
  switch (action.type) {
    case APPLY_FILTER:
      return action.term
    default:
      return state
  }
}

const app = combineReducers({
  items, searchTerm
})

export default app
