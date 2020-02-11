import React, { Component } from 'react';
import api from '../../services/api';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };
    };

    async componentDidMount() {
        const response = await api.get('products');
        this.setState({ products: response.data });
    }

    handleAddProduct = product => {
        const {dispatch} = this.props;
        dispatch({
            type: 'ADD_TO_CART',
            product,
        });
    }

    render() {
        const { products } = this.state;

        return (
            <>
                <h1>Products</h1>
                { products.map(product => (
                    <li key={product.title}>{product.title}
                    <button type="button" onClick={()=>{this.handleAddProduct(product)}}>adicionar</button>
                    </li>
                ))}
                <Link to="/products/listCart">List Cart</Link>
            </>
        );
    };
};

export default connect()(Product);