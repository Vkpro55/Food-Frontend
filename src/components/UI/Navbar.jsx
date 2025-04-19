import React from 'react'
import logo from '../../assets/logo.png'
import bag from '../../assets/bag.png'
import Button from './Button'
import search from '../../assets/search.png'

const Navbar = () => {
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

                <img src={bag} alt="bag-image" />
                <Button title="Food & Delivery" />
            </div>
        </div>
    )
}

export default Navbar
