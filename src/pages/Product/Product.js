import React, { useState, useEffect } from 'react'
import Spinner from '../../components/Spinner/Spinner'
import { useDispatch } from 'react-redux'
import useTracker from '../../hooks/useTracker'
import { addToCart } from '../../actions/cart/cart'
import fetchProduct from '../../api/fetchProduct'

import './Product.scss'

const useProduct = id => {
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProduct(id).then(product => {
      setIsLoading(false)
      setProduct(product)
    })
  }, [id])

  return [product, isLoading]
}

export default function Product({ id }) {
  useTracker('Product')

  const [product, isLoading] = useProduct(id)
  const dispatch = useDispatch()

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
            dispatch(addToCart(product))
          }}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
