import React, { useContext, useState, useEffect } from 'react'
import Spinner from '../../components/Spinner/Spinner'
import { CartContext } from '../../contexts/Cart'
import useTracker from '../../hooks/useTracker'
import fetchProduct from '../../api/fetchProduct'

import './Product.scss'

export default function Product({ id }) {
  useTracker('Product')

  const { dispatch } = useContext(CartContext)
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchProduct(id).then(product => {
      setIsLoading(false)
      setProduct(product)
    })
  }, [id])

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
            dispatch({ type: 'add', item: product })
          }}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
