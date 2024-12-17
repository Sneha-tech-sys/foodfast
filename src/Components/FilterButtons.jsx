import React from 'react';
import { useFilterContext } from '../Contex/Filter_context';
import '../Components/Slider.css';

export default function FilterButtons() {
  const { filterItemsByCategory } = useFilterContext(); // Access the filterItemsByCategory function

  // Function to handle button click and filter by category
  const handleFilterByCategory = (category) => {
    filterItemsByCategory(category); // Dispatch the action to set the selected category
  };

  return (
    <div className="button-container row" data-aos="fade-right" style={{ overflowX: 'auto' }}>
      <div className="col-lg-3 col-3">
        <button
          className="topbtn"
          type="button"
          onClick={() => handleFilterByCategory('indian')}
        >
          Indian Food
        </button>
      </div>
      <div className="col-lg-3 col-3">
        <button
          className="topbtn"
          type="button"
          onClick={() => handleFilterByCategory('south_indian')}
        >
          South Indian
        </button>
      </div>
      <div className="col-lg-3 col-3">
        <button
          className="topbtn"
          type="button"
          onClick={() => handleFilterByCategory('fast_food')}
        >
          Fast Food
        </button>
      </div>
      <div className="col-lg-3 col-3">
        <button
          className="topbtn"
          type="button"
          onClick={() => handleFilterByCategory('drinks')}
        >
          Drinks
        </button>
      </div>
    </div>
  );
}
