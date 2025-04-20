import React from 'react';
import logo from '../../assets/logo.png';
import bag from '../../assets/bag.png';
import Button from './Button';
import search from '../../assets/search.png';
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const { cart } = useCart();
    const navigate = useNavigate();

    const handleCartClick = () => {
        navigate("/cart");
    };

    return (
        <div className='container navbar-section'>
            <div className='navbar-logo'>
                <img src={logo} alt="logo-image" />
                <h1>FitMe</h1>
            </div>
            <div className='navbar-icons'>
                <div className="search-container">
                    <input className="search" type="search" placeholder="Enter item or restaurant..." />
                    <img src={search} alt="search-icon" />
                </div>

                <div className="cart-icon" onClick={handleCartClick} style={{ position: 'relative', cursor: 'pointer' }}>
                    <img src={bag} alt="bag-image" />
                    {cart.length > 0 && (
                        <span className="cart-count-badge" style={{
                            position: 'absolute',
                            top: '-8px',
                            right: '-8px',
                            background: 'red',
                            color: 'white',
                            borderRadius: '50%',
                            width: '20px',
                            height: '20px',
                            fontSize: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {cart.length}
                        </span>
                    )}
                </div>

                <Button title="Food & Delivery" />
            </div>
        </div>
    );
};

export default Navbar;
