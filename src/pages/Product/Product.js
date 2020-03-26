import React, { useContext, useState, useEffect } from 'react'
import Spinner from '../../components/Spinner/Spinner'
import { CartContext } from '../../contexts/Cart'
import useTracker from '../../hooks/useTracker'
import fetchProduct from '../../api/fetchProduct'

import './Product.scss'

export default function Product({ id }) {
  const product = null
  const isLoading = true

  if (isLoading) {
    return <Spinner />
  }

  if (!product) {
    return <h3>No product found!</h3>
  }

  return (
    <div className="product">
      <img src={`${process.env.PUBLIC_URL}/images/${product.image}`} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p className="product__price">${product.price}</p>
        <button
          className="btn-light"
          onClick={() => {
            // TODO
          }}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
