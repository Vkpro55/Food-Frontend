import React from 'react';

const ItemCard = ({ item }) => {
    const { name, imageURL, category, price, rating } = item;

    const backendURL = import.meta.env.VITE_BACKEND_BASE_URL;
    const imgSrc = `${backendURL}${imageURL}`;

    return (
        <div className='item-card'>
            <img src={imgSrc} alt={name} />
            <h2>{name}</h2>
            <p>{category} | ₹{price} | ⭐ {rating}</p>

            <button className='button'>Add to Cart</button>
        </div>
    );
};

export default ItemCard;
