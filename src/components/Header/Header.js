import React from 'react'
import { calculateTotal } from '../../helpers/cart'
import { Link } from 'react-router-dom'

import './Header.scss'
import { useSelector } from 'react-redux'

export default function Header() {
  const items = useSelector(state => state.cart)
  const total = calculateTotal(items)

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Scouters</h1>
      </Link>
      <div className="header__cart">
        <Link to="/checkout" className="header__cart-link">
          <img src={process.env.PUBLIC_URL + '/icons/bag.svg'} />
          <div className="header__items">{items.length}</div>
        </Link>
        <span className="header__total">${total}</span>
      </div>
    </header>
  )
}
