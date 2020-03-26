import React, { useReducer, createContext, useEffect, useContext } from 'react'
import { getFromLocalStorage, saveToLocalStorage } from '../helpers/helpers'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const items = []
  const dispatch = () => {}

  return (
    <CartContext.Provider value={{ items, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
