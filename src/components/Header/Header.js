import React, { useContext } from 'react'
import useTotal from '../../hooks/useTotal'
import { CartContext } from '../../contexts/Cart'
import { Link } from 'react-router-dom'

import './Header.scss'

export default function Header() {
  const { items } = useContext(CartContext)
  const itemsCount = items.length
  const total = useTotal()

  return (
    <header className="header">
      <Link to="/">
        <h1 className="header__title">Scouters</h1>
      </Link>
      <div className="header__cart">
        <Link to="/checkout" className="header__cart-link">
          <img src={process.env.PUBLIC_URL + '/icons/bag.svg'} />
          <div className="header__items">{itemsCount}</div>
        </Link>
        <span className="header__total">${total}</span>
      </div>
    </header>
  )
}
