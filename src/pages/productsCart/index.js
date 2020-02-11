import React from 'react';
import {connect} from 'react-redux';

function ProductsCart({cartSize, dispatch}){
    return(
        <>
            <h1>Products Cart</h1>
            <span>{cartSize}</span>
        </>
    );
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(ProductsCart);