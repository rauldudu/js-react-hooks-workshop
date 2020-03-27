import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './components/Header/Header'
import ProductList from './pages/ProductList/ProductList'
import Product from './pages/Product/Product'
import Checkout from './pages/Checkout/Checkout'
import Activities from './pages/Activities/Activities'
import { configureStore } from './store/store'

import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore()}>
      <main>
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
      </main>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
