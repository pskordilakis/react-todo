export const ADD_ITEM = 'ADD_ITEM'
export function addItem (text) {
  return { type: ADD_ITEM, text }
}

export const REMOVE_ITEM = 'REMOVE_ITEM'
export function removeItem (index) {
  return { type: REMOVE_ITEM, index }
}

export const APPLY_FILTER = 'APPLY_FILTER'
export function applyFilter (term) {
  return { type: APPLY_FILTER, term }
}
