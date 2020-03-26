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

    console.log(this.state)

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
            }}
            onRemove={item => {
              // TODO
            }}
            onReset={() => {
              // TODO
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
