import React, { }  from 'react';
import './ProductScreen.css';

const ProductScreen = () => {
    return (
        <div className = "productscreen">
            <div className = "productscreen-left">
                <div className = "left-image">
                    <img src = "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" 
                    alt = "product name"/> 
                </div>
                <div className = "left-info">
                    <p className = "left-name">Producto 1</p>
                    <p>Price: $299.99</p>
                    <p>Description: Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                </div>
            </div>
            <div className = "productscreen-right">
                <div className = "right-info">
                    <p>
                        Price: <span>$499.99</span>
                    </p>
                    <p>
                        Status: <span>In Stock</span>
                    </p>
                    <p>
                        Cantidad 
                            <select>
                                <option value = "1">1</option>
                                <option value = "2">2</option>
                                <option value = "3">3</option>
                                <option value = "4">4</option>
                            </select>
                    </p>
                    <p>
                        <button type = "button">Agregar al Carro</button>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default ProductScreen;
