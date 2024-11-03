import React from 'react';
import { useSelector } from 'react-redux';

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.items); 

    return (
        <div>
            <h1>Checkout</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <h2>Your Items</h2>
                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>{item.name}</li>
                        ))}
                    </ul>
                    <button>Proceed to Payment</button> 
                </div>
            )}
        </div>
    );
};

export default Checkout;
