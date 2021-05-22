import React from 'react';
import './Product.css';
import {Link} from 'react-router-dom';

const Product = () => {
    return (
        <div className = "product">
            <img src = "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
                        alt ="product name "/>

            <div className = "product-info">
                <p className = "info-name">Lorem Ipsum</p>
                <p className = "info-description">
Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
                </p>
                <p className = "product-name"></p>

                <p className = "info-price"> $499.99</p>
                <Link to={`/product/${11111}`} className="info-button">
                View
                </Link>
            </div>
        </div>



    )
}

export default Product;