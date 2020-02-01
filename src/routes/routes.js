import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../pages/home/index';
import Products from '../pages/products/index';


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/products" component={Products} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;