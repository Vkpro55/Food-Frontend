import React from 'react';
import { useCart } from '../../context/CartContext';

const CartItem = ({ item }) => {
    const { _id, name, imageURL, category, price } = item;

    const backendURL = import.meta.env.VITE_BACKEND_BASE_URL;
    const imgSrc = `${backendURL}${imageURL}`;

    const { dispatch } = useCart();

    const handleRemoveFromCart = () => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: _id });
    }

    return (
        <div className='cart-item'>
            <img src={imgSrc} alt={name} />

            <div className='content'>
                <h3>{name}</h3>
                <span>{category}</span>
            </div>

            <p><span>₹ </span>{price}</p>

            <button className="button" onClick={handleRemoveFromCart}>
                Remove
            </button>
        </div>
    );
};

export default CartItem;
