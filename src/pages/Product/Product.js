import React, { useState, useEffect } from 'react'
import Spinner from '../../components/Spinner/Spinner'
import { useDispatch } from 'react-redux'
import useTracker from '../../hooks/useTracker'
import { addToCart } from '../../actions/cart/cart'
import fetchProduct from '../../api/fetchProduct'

import './Product.scss'

// const dispatch = useDispatch()

// useEffect(() => {
//   fetchProduct(id).then(product => {
//     setIsLoading(false)
//     setProduct(product)
//   })
// }, [id])

// const [product, setProduct] = useState(null)
// const [isLoading, setIsLoading] = useState(true)

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
            // dispatch(addToCart(product))
          }}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
