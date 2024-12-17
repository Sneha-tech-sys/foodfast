import React, { createContext, useContext, useReducer } from 'react';
import cartReducer from '../Reducer/Cart_reducer'; // Assuming this is the correct path to your reducer

const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const initialState = {
    cart: [], // This will hold the items in the cart
    totalItems: 0, // This will hold the total number of items in the cart
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
  };

  const removeItem = (id) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: { id },
    });
  };

  const increaseQuantity = (id) => {
    dispatch({
      type: 'INCREASE_QUANTITY',
      payload: { id },
    });
  };

  const decreaseQuantity = (id) => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: { id },
    });
  };

  return (
    <CartContext.Provider value={{
      cart: state.cart,
      totalItems: state.totalItems,
      addToCart,
      removeItem,
      increaseQuantity,
      decreaseQuantity
    }}>
      {children}
    </CartContext.Provider>
  );
};
