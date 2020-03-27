import { saveToLocalStorage } from '../../helpers/storage'

export const addToCart = item => (dispatch, getState) => {
  dispatch({ type: 'ADD_TO_CART', item })
  saveToLocalStorage('cart', getState().cart)
}

export const removeFromCart = item => {
  return { type: 'REMOVE_FROM_CART', item }
}

export const resetCart = () => {
  return { type: 'RESET_CART' }
}
