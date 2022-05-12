import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import productList from './user/productList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import checkout from './user/checkout';
import productListDetails from './user/productListDetails';
ReactDOM.render((
  <Router>
    <Route exact path="/" component={productList} />
    <Route exact path="/checkout" component={checkout} />
    <Route exact path="/productListDetails" component={productListDetails} />
  </Router>
),
  document.getElementById('root')
);
reportWebVitals();
