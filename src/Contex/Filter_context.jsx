import { createContext, useContext, useReducer } from 'react';
import Filter_reducer from '../Reducer/Filter_reducer';

const FilterContext = createContext();

export const FilterContextProvider = ({ children }) => {
  const initialState = {
    filters: {
      text: '', // Default filter value is empty string
      category: '', // Track the selected category
    },
    wishlist: [],
  };

  const [state, dispatch] = useReducer(Filter_reducer, initialState);

  // Function to update the filter values based on input changes
  const updateFilterValue = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    dispatch({ type: 'UPDATE_FILTER_VALUE', payload: { name, value } });
  };

  // Function to filter items by category
  const filterItemsByCategory = (category) => {
    dispatch({ type: 'SET_CATEGORY', payload: category });
  };

  // Function to clear filters
  const clearFilters = () => {
    dispatch({ type: 'CLEAR_FILTERS' });
  };

  // Function to add an item to the wishlist
  const addToWishlist = (id, name, rating, image) => {
    dispatch({ type: 'WISH', payload: { id, name, rating, image } });
  };

  // Function to remove an item from the wishlist
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } });
  };

  return (
    <FilterContext.Provider value={{ 
      state, 
      updateFilterValue, 
      addToWishlist, 
      removeItem, 
      filterItemsByCategory, 
      clearFilters  // Make clearFilters function available
    }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
