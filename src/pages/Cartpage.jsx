import React from 'react'
import { useCart } from '../context/CartContext'
import CartItem from '../components/UI/CartItem';

const Cartpage = () => {
    const { cart } = useCart();

    const total = cart.reduce((acc, item) => acc + item.price, 0);
    return (
        <div className='container cart-section'>
            <h2>Your <span>Cart</span></h2>

            <div className="cart-items">
                {cart.length === 0 ? (
                    <span></span>
                ) : (
                    cart.map((item, index) => (
                        <CartItem key={index} item={item} />
                    ))
                )}
            </div>

            <div className="cart-summary">
                <h3>Total: <span>₹</span> {total}</h3>
                <button className="button">Proceed to Checkout</button>
            </div>
        </div>
    )
}

export default Cartpage
