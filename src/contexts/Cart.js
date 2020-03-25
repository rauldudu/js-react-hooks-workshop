import React, { useReducer, createContext, useEffect, useContext } from 'react'
import { getFromLocalStorage, saveToLocalStorage } from '../helpers/helpers'

const reducer = (items, action) => {
  switch (action.type) {
    case 'add':
      return [...items, action.item]
    case 'remove':
      return items.filter(item => item.id !== action.item.id)
    case 'reset':
      return []
    default:
      throw new Error('Invalid action')
  }
}

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, dispatch] = useReducer(reducer, getFromLocalStorage('cart'))

  useEffect(() => {
    saveToLocalStorage('cart', items)
  }, [items])

  return (
    <CartContext.Provider value={{ items, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  return useContext(CartContext)
}
