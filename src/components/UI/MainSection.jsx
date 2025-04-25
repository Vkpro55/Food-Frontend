import React, { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import ItemCard from './ItemCard';

const MainSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('Appetizers');
    const [items, setItems] = useState([]);

    const fetchMenuItems = async (category = selectedCategory) => {
        try {
            const backendURL = import.meta.env.VITE_BACKEND_BASE_URL;
            const response = await axios.get(`${backendURL}/api/v1/menu?category=${category}`);
            console.log(response);
            setItems(response.data.data);
        } catch (error) {
            console.error('Error fetching menu items:', error);
        }
    };

    useEffect(() => {
        fetchMenuItems();
    }, []);

    const handleCategorySelect = (e, cat) => {
        e.preventDefault();
        setSelectedCategory(cat);
        fetchMenuItems(cat);
    };

    return (
        <div className="main-section">
            <div className='search-items'>
                <ul>
                    <li>
                        <a href="#">Select by Category <FaChevronDown /></a>
                        <ul className="dropdown">
                            {['Appetizers', 'Mains', 'Desserts', 'Drinks'].map((cat) => (
                                <li key={cat}>
                                    <a href="#" onClick={(e) => handleCategorySelect(e, cat)}>
                                        {cat}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            </div>

            <div className='display-items'>
                {items.length === 0 ? (
                    <span>No items found.</span>
                ) : (
                    items.map((item, index) => (
                        <ItemCard key={index} item={item} />
                    ))
                )}
            </div>
        </div>
    );
};

export default MainSection;
