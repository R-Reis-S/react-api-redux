import React, { Component } from 'react';
import api from '../../services/api';

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

    render() {
        const { products } = this.state;

        return (
            <>
                <h1>Products</h1>
                { products.map(product => (
                    <li key={product.title}>{product.title}
                    <button type="button">adicionar</button>
                    </li>
                ))}
            </>
        );
    };
};

export default Product;