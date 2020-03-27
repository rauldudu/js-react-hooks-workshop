import React from 'react'
import { Link } from 'react-router-dom'

import './ProductItem.scss'

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`}>
        <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} />
        <span className="product-item__title">{product.title}</span>
      </Link>
    </div>
  )
}

export default ProductItem
