import React from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';

const ItemCard = ({ item }) => {

    const { user } = useAuth();
    console.log(user);

    const { name, imageURL, category, price, rating } = item;
    const backendURL = import.meta.env.VITE_BACKEND_BASE_URL;
    const imgSrc = `${backendURL}${imageURL}`;

    const { dispatch } = useCart();

    const handleAddToCart = () => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
    };

    return (
        <div className='item-card'>
            <img src={imgSrc} alt={name} />
            <h2>{name}</h2>
            <p>{category} | ₹{price} | ⭐ {rating}</p>
            <button className='button' onClick={handleAddToCart}>Add to Cart</button>
        </div>
    );
};

export default ItemCard;
