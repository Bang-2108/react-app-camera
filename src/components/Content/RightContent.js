import React, { Component } from 'react';
import axios from 'axios';
import ShowCard from './ShowCard/ShowCard';

class RightContent extends Component {
    state = {
        products: []
    };
    componentDidMount() {
        axios.get('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
            .then(response => {
                this.setState({ products: response.data });
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }

    render() {
        const { products } = this.state;

        return (
            <div>
                <div id="right-content">
                    <h2>Product :</h2>
                    <div id="products">
                        {
                            products.map(product =>
                                <ShowCard
                                    key={product.id}  // Luôn cần key khi map
                                    loai={product.loai}
                                    name={product.name}
                                    image={product.image}
                                />
                            )
                        }
                        <div style={{ clear: 'both' }} />
                    </div>
                    <div style={{ clear: 'both' }} />
                </div>
                <div style={{ clear: 'both' }} />
            </div>
        );
    }
}

export default RightContent;
