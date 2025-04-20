import { createContext, useContext, useReducer, useEffect } from 'react';

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) || [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const exists = state.cart.find(item => item._id === action.payload._id);
            if (exists) return state;
            return { ...state, cart: [...state.cart, action.payload] };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item._id !== action.payload),
            };

        default:
            return state;
    }
};


const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart));
    }, [state.cart]);

    return (
        <CartContext.Provider value={{ cart: state.cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
