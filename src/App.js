import React from 'react';
import Header from './components/Header';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import NewProduct from './components/NewProduct';
import EditProduct from './components/EditProduct';

function App() {
  return (
    <Router>
      <Header />
      
        <Switch>
          <Route path="/new-product" component={NewProduct}></Route>
          <Route path="/edit-product" component={EditProduct}></Route>
          <Route path="/" component={ProductList}></Route>
        </Switch>
      </Router>
  );
}

export default App;
