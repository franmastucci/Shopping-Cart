import React, {} from 'react';
import './CartScreen.css';

//components

import CartItem from "../components/CartItem";

const CartScreen = () => {
    return ( <div className = "cartscreen" >
        <div className = "cartscreen-left">
            <h2>Shopping Cart</h2>
            <CartItem />
            <CartItem />   
            <CartItem />   
            <CartItem />            
        </div> 
        <div className = "cartscreen-right">
        <div className = "cartscreen-info">
            <p>Subtotal (0) Items</p>
            <p>$499.99</p> 
        </div>
        <div>
            <button>Proceed To Checkout</button>
        </div>
        </div>
    </div>
    )
}

export default CartScreen;