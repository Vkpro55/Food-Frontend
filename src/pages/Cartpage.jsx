import React from 'react';
import { useCart } from '../context/CartContext';
import CartItem from '../components/UI/CartItem';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Cartpage = () => {
    const navigate = useNavigate();

    const { cart, dispatch } = useCart()
    const { user } = useAuth();
    const total = cart.reduce((acc, item) => acc + item.price, 0);

    const handleCheckout = async () => {
        try {
            const orderData = {
                userId: user.user.id,
                items: cart,
                totalPrice: total,
            };

            const backendURL = import.meta.env.VITE_BACKEND_BASE_URL;
            const response = await axios.post(`${backendURL}/api/v1/orders`, orderData, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });

            alert('Order placed successfully!');

            dispatch({ type: 'CLEAR_CART' });

            setTimeout(() => {
                navigate("/");
            }, 1000);


        } catch (error) {
            console.error('Error creating order:', error.response?.data || error.message);
            alert('Something went wrong while placing your order. Please try again.');
        }
    };

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
                <button className="button" onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default Cartpage;
