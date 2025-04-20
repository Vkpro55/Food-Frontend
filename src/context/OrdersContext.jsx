import { createContext, useContext, useReducer } from 'react';

const OrdersContext = createContext();

const initialState = {
    orders: [],
};

const ordersReducer = (state, action) => {
    switch (action.type) {
        case 'SET_ORDERS':
            return { ...state, orders: action.payload };
        case 'ADD_ORDER':
            return { ...state, orders: [...state.orders, action.payload] };
        default:
            return state;
    }
};

export const OrdersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ordersReducer, initialState);

    return (
        <OrdersContext.Provider value={{ orders: state.orders, dispatch }}>
            {children}
        </OrdersContext.Provider>
    );
};

export const useOrders = () => useContext(OrdersContext);
