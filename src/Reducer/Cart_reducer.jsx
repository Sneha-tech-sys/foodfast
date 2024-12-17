const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const { id, name, image, price } = action.payload;  // Extract properties
      const existingProduct = state.cart.find((item) => item.id === id);

      let updatedCart;

      if (existingProduct) {
        updatedCart = state.cart.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }  // Increase quantity if already in the cart
            : item
        );
      } else {
        updatedCart = [
          ...state.cart,
          { id, name, image, price, quantity: 1 },  // New item added to the cart
        ];
      }

      const totalItems = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
      return {
        ...state,
        cart: updatedCart,
        totalItems,
      };
    }

    case 'REMOVE_ITEM': {
      const updatedCart = state.cart.filter((item) => item.id !== action.payload.id);
      const totalItems = updatedCart.reduce((sum, item) => sum + item.quantity, 0);

      return {
        ...state,
        cart: updatedCart,
        totalItems,
      };
    }

    case 'INCREASE_QUANTITY': {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }  // Increase quantity
          : item
      );

      const totalItems = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
      return {
        ...state,
        cart: updatedCart,
        totalItems,
      };
    }

    case 'DECREASE_QUANTITY': {
      const updatedCart = state.cart.map((item) =>
        item.id === action.payload.id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }  // Decrease quantity
          : item
      );

      const totalItems = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
      return {
        ...state,
        cart: updatedCart,
        totalItems,
      };
    }

    default:
      return state;
  }
};

export default cartReducer;
