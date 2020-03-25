import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import ProductList from './pages/ProductList/ProductList'
import Product from './pages/Product/Product'
import Checkout from './pages/Checkout/Checkout'
import Activities from './pages/Activities/Activities'
import { CartProvider } from './contexts/Cart'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <main>
      <CartProvider>
        <Router>
          <Header />
          <Route path="/" exact component={ProductList} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/activities" component={Activities} />
          <Route
            path="/product/:id"
            component={({ match, history }) => (
              <Product id={match.params.id} history={history} />
            )}
          />
        </Router>
      </CartProvider>
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)
