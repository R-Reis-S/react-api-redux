import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/index';
import Products from '../pages/products/index';
import ProductsCart from '../pages/productsCart/index';
import ProductsListCart from '../pages/productsListCart/index';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/cart" component={ProductsCart} />
            <Route exact path="/products/listCart" component={ProductsListCart} />
        </Switch>
    );
};

export default Routes;