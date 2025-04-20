import React from 'react'
import orderImg from '../../assets/order.png'

const OrderCard = ({ order }) => {
    const orderDate = new Date(order.createdAt).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });

    return (
        <div className='order-card'>
            <img src={orderImg} alt="order" />

            <div className="order-content">
                <h3>Order <span># {order.id}</span></h3>
                <p>Placed on {orderDate}</p>

                <div className='order-details'>
                    <p>Items : <span>{order.items.length}</span></p>
                    <p><span>₹</span> {order.totalPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderCard
