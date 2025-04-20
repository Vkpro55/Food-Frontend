import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import axios from 'axios';
import OrderCard from '../components/UI/OrderCard';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    const backendURL = import.meta.env.VITE_BACKEND_BASE_URL;

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get(
                    `${backendURL}/api/v1/orders/${user.user.id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.token}`,
                        },
                    }
                );

                setOrders(response.data.data);
                setLoading(false);
            } catch (error) {
                console.error('Failed to fetch orders:', error);
                setLoading(false);
            }
        };

        fetchOrders();
    }, [user]);

    console.log("Orders is :", orders);
    return (
        <div className='container order-section'>
            <h2>My <span>Orders</span></h2>

            {loading ? (
                <p>Loading your orders...</p>
            ) : orders.length === 0 ? (
                <p>You haven’t placed any orders yet.</p>
            ) : (
                <div className="order-container">
                    {orders.map((order, index) => (
                        <OrderCard key={index} order={order} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default MyOrder;
