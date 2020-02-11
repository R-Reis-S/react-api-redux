import React from 'react';
import { connect } from 'react-redux';


// function handleRemoveItem (product, dispatch){
//     // const {dispatch} = this.props;
//     dispatch({
//         type: 'REMOVE_TO_CART',
//         product,
//     });
// }


function ProductsListCart({ cart, dispatch }) {
    return (
        <>
            <h1>Products List Cart</h1>
            {cart.map(product => (<li key={product.title}> {product.title}  {product.type}
                <button type="button" onClick={() => { dispatch({ type: 'REMOVE_TO_CART', title: product.title }) }}>
                    Remover</button></li>))}
            {/* <h1>fghfgh</h1> */}
        </>
    );
}

// const mapStateToProps = state => ({
//     cart: state.cart,
// });

// export default connect(mapStateToProps)(ProductsListCart);
export default connect(state => ({
    cart: state.cart,
}))(ProductsListCart);
