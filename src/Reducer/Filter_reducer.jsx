const Filter_reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER_VALUE':
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value, // Dynamically update the filter based on the input name
        },
      };

    case 'SET_CATEGORY':
      return {
        ...state,
        filters: {
          ...state.filters,
          category: action.payload, // Update the selected category
        },
      };

    case 'CLEAR_FILTERS': // Action to clear filters
      return {
        ...state,
        filters: {
          text: '', // Reset text filter
          category: '', // Reset category filter
        },
      };

    case 'WISH': {
      const { id, name, rating, image } = action.payload;
      const existingProduct = state.wishlist.find(item => item.id === id);

      let updatedWishlist;
      if (existingProduct) {
        updatedWishlist = state.wishlist;
      } else {
        updatedWishlist = [...state.wishlist, { id, name, rating, image }];
      }

      return {
        ...state,
        wishlist: updatedWishlist,
      };
    }

    case "REMOVE_ITEM": {
      const updatedWishlist = state.wishlist.filter(item => item.id !== action.payload.id);

      return {
        ...state,
        wishlist: updatedWishlist,
      };
    }

    default:
      return state;
  }
};

export default Filter_reducer;
