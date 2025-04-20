import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';
import axios from 'axios';
import ItemCard from './ItemCard';

const MainSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('Appetizers');
    const [items, setItems] = useState([]);

    const fetchMenuItems = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/menu?category=${selectedCategory}`);
            console.log(response);
            setItems(response.data.data);
        } catch (error) {
            console.error('Error fetching menu items:', error);
        }
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
                                    <a href="#" onClick={(e) => {
                                        e.preventDefault();
                                        setSelectedCategory(cat);
                                    }}>{cat}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>

                <button className='button' onClick={fetchMenuItems}>Search</button>
            </div>

            <div className='display-items'>
                {items.length === 0 ? (
                    <span></span>
                ) : (
                    items.map((item, index) => (
                        <ItemCard key={index} item={item} />
                    ))
                )}
            </div>
        </div >
    )
}

export default MainSection
