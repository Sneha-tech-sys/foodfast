import React from 'react';
import { useFilterContext } from '../Contex/Filter_context';

export default function Filter() {
  // Destructure state (which contains filters) and the updateFilterValue function from context
  const { updateFilterValue, state } = useFilterContext();
  const { filters } = state; // Access filters from state

  return (
    <div className="search-container" data-aos="fade-right" >
      <form onSubmit={(e) => e.preventDefault()}>
        <input style={{padding:'7px',width:'100%',flex:'1',borderRadius:'8px',backgroundColor:'transparent',border:'1px solid lightgray',color:'orange'}}
          type="text"
          name="text"
          value={filters.text} // Use filters from context
          onChange={updateFilterValue} // Update filter state
          placeholder="Search..."
        />
      </form>
    </div>
  );
}
