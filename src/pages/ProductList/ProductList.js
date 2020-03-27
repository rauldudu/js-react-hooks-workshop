import React, { useState, useReducer, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../../components/Spinner/Spinner'
import { getFromLocalStorage, saveToLocalStorage } from '../../helpers/storage'
import useTracker from '../../hooks/useTracker'
import fetchProducts from '../../api/fetchProducts'
import categories from '../../constants/categories.json'
import CategoryList from '../../components/CategoryList/CategoryList'

import './ProductList.scss'
import ProductItem from '../../components/ProductItem/ProductItem'

// getFromLocalStorage('categories')
// saveToLocalStorage('categories', selectedCategories)

// const reducer = (list, action) => {
//   switch (action.type) {
//     case 'toggle': {
//       if (list.find(item => item.id === action.item.id)) {
//         return list.filter(item => item.id !== action.item.id)
//       } else {
//         return [...list, action.item]
//       }
//     }
//     case 'remove': {
//       return list.filter(item => item.id !== action.item.id)
//     }
//     case 'reset': {
//       return []
//     }
//     default:
//       throw Error('Invalid Action!')
//   }
// }

// useEffect(() => {
//   fetchProducts().then(products => {
//     setProducts(products)
//     setIsLoading(false)
//   })
// }, [])

// const [selectedCategories, setSelectedCategories] = useState([])
// const [products, setProducts] = useState(null)
// const [isLoading, setIsLoading] = useState(true)

export default class ProductList extends React.Component {
  state = {
    products: null,
    isLoading: true,
    selectedCategories: []
  }

  componentDidMount() {
    fetchProducts().then(products => {
      this.setState({ products: products, isLoading: false })
    })
  }

  render() {
    if (this.state.isLoading) {
      return <Spinner />
    }

    const hasProducts = this.state.products && this.state.products.length > 0

    return (
      <div className="product-list">
        <div className="product-list__header">
          <h3>Products</h3>
          <CategoryList
            categories={categories}
            selectedCategories={this.state.selectedCategories}
            onSelect={item => {
              // TODO
              // dispatch({ type: 'toggle', item })
            }}
            onRemove={item => {
              // TODO
              // dispatch({ type: 'remove', item })
            }}
            onReset={() => {
              // TODO
              // dispatch({ type: 'reset' })
            }}
          />
        </div>
        {hasProducts ? (
          <ul className="product-list__container">
            {this.state.products.map(product => (
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
}
