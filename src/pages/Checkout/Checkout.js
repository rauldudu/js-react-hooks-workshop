import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart, resetCart } from '../../actions/cart/cart'
import { calculateTotal } from '../../helpers/cart'
import useTracker from '../../hooks/useTracker'

import './Checkout.scss'

export default function Checkout() {
  useTracker('Checkout')

  const items = useSelector(state => state.cart)
  const total = calculateTotal(items)
  const dispatch = useDispatch()

  return (
    <div className="checkout">
      <h2>Your items</h2>
      {items.length === 0 ? (
        <h4>Your cart is empty!</h4>
      ) : (
        <>
          <table>
            <tbody>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th></th>
              </tr>
              {items.map((item, i) => (
                <tr key={i + item.id}>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      className="checkout__delete"
                      onClick={() => {
                        dispatch(removeFromCart(item))
                      }}>
                      &#10006;
                    </button>
                  </td>
                </tr>
              ))}
              <tr className="checkout__total" key="total">
                <td></td>
                <td>${total}</td>
              </tr>
            </tbody>
          </table>
          <footer className="checkout__footer">
            <button
              className="btn-light"
              onClick={() => {
                dispatch(resetCart())
              }}>
              Clear
            </button>
            <button className="btn-dark">Checkout</button>
          </footer>
        </>
      )}
    </div>
  )
}
