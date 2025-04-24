
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowCard from './ShowCard/ShowCard';


const RightContent = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        axios.get('https://656ca88ee1e03bfd572e9c16.mockapi.io/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);


    return (
        <div>
            <div id="right-content">
                <h2>Product :</h2>
                <div id="products">
                    {
                        products.map(product =>
                            <ShowCard
                                key={product.id}  
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


export default RightContent;