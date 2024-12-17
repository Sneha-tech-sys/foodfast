import React from 'react'

export default function Count({ price, setDecrease, setIncrease}) {
  return (
    <>
       <button 
                onClick={setDecrease} 
                style={{ backgroundColor: 'transparent', color:'white',border: 'none', cursor: 'pointer' }}
            >
                <i className="fa fa-minus" id="incdecre"></i>
            </button>
            &nbsp;&nbsp;
            <span style={{color:'lightgrey'}}>{price}</span> {/* Ensure amount is displayed correctly */}
            &nbsp;&nbsp;
            <button 
                onClick={setIncrease} 
                style={{backgroundColor: 'transparent', color:'white',border: 'none', cursor: 'pointer' }}
            >
                <i className="fa fa-plus" id="incdecre"></i>
            </button>
      </>
  )
}
