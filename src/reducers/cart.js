import { getFromLocalStorage } from '../helpers/storage'

const intialState = getFromLocalStorage('cart')

export const cart = (state = intialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return [...state, action.item]
    case 'REMOVE_FROM_CART':
      return state.filter(item => action.item.id !== item.id)
    case 'RESET_CART':
      return []
    default:
      return state
  }
}
