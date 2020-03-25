import React, { useState, useReducer, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'
import { getFromLocalStorage, saveToLocalStorage } from '../../helpers/helpers'
import fetchProducts from '../../api/fetchProducts'
import useTracker from '../../hooks/useTracker'
import categories from '../../constants/categories.json'
import CategoryList from '../../components/CategoryList/CategoryList'

import './ProductList.scss'
import ProductItem from '../../components/ProductItem/ProductItem'

const reducer = (list, action) => {
  switch (action.type) {
    case 'toggle': {
      if (list.find(item => item.id === action.item.id)) {
        return list.filter(item => item.id !== action.item.id)
      } else {
        return [...list, action.item]
      }
    }
    case 'remove': {
      return list.filter(item => item.id !== action.item.id)
    }
    case 'reset': {
      return []
    }
    default:
      throw Error('Invalid Action!')
  }
}

export default function ProductList() {
  useTracker('ProductList')

  const [selectedCategories, dispatch] = useReducer(
    reducer,
    getFromLocalStorage('categories')
  )
  const [products, setProducts] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    saveToLocalStorage('categories', selectedCategories)

    fetchProducts(selectedCategories).then(products => {
      setProducts(products)
      setIsLoading(false)
    })
  }, [selectedCategories])

  if (isLoading) {
    return <Spinner />
  }

  const hasProducts = products && products.length > 0

  return (
    <div className="product-list">
      <div className="product-list__header">
        <h3>Products</h3>
        <CategoryList
          categories={categories}
          selectedCategories={selectedCategories}
          onSelect={item => dispatch({ type: 'toggle', item })}
          onRemove={item => dispatch({ type: 'remove', item })}
          onReset={() => dispatch({ type: 'reset' })}
        />
      </div>
      {hasProducts ? (
        <ul className="product-list__container">
          {products.map(product => (
            <li key={product.id}>
              <ProductItem product={product} />
            </li>
          ))}
        </ul>
      ) : (
        <h3>No products found!</h3>
      )}
    </div>
  )
}
