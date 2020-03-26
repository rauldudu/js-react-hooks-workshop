import React, { useContext } from 'react'
import { CartContext } from '../../contexts/Cart'
import useTracker from '../../hooks/useTracker'
import useTotal from '../../hooks/useTotal'

import './Checkout.scss'

export default function Checkout() {
  const items = []
  const dispatch = () => {}
  const total = 0

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
                        // TODO
                        // dispatch({ type: 'remove', item })
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
                // TODO
                // dispatch({ type: 'reset' })
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
