import React, { useState, useEffect } from 'react';
import '../Pages/App.css';
import Filter from '../Components/Filter';
import { useFilterContext } from '../Contex/Filter_context';
import { useCartContext } from '../Contex/Cart_Contex';
import { NavLink } from 'react-router-dom';
import Data from '../Data/Data';
import FilterButtons from '../Components/FilterButtons';

export default function Food() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [wishlist, setWishlist] = useState([]); // State to track the wishlist items

  const { state: filterState, addToWishlist, clearFilters } = useFilterContext(); // Get clearFilters from context
  const { addToCart } = useCartContext();
  const { filters } = filterState;

  // Filter the data by category and text
  const filteredData = Data.filter((curElm) => {
    const categoryMatch = filters.category
      ? curElm.category.toLowerCase() === filters.category.toLowerCase()
      : true;

    const textMatch = curElm.title.toLowerCase().includes(filters.text.toLowerCase());

    return categoryMatch && textMatch;
  });

  const handleAddToCart = (item) => {
    const { id, title, img, price } = item;
    addToCart({
      id,
      name: title,
      image: img,
      price,
    });
  };

  const handleAddToWishlist = (item) => {
    if (wishlist.includes(item.id)) {
      setWishlist(wishlist.filter(id => id !== item.id));
      alert('Your Item has been removed from Wishlist');
    } else {
      setWishlist([...wishlist, item.id]);
      addToWishlist(item.id, item.title, item.rate, item.img,item.price);
      alert('Your Item has been added to Wishlist');
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/bg.jpg)`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 0,
  };

  return (
    <>
      <div style={overlayStyle}></div>
      <div style={backgroundStyle}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <div className="Main">
            <div className="container">
              <FilterButtons />
              <div className="row mb-3 mt-2">
                <div className="col-lg-8 col-7">
                  <Filter />
                </div>
                <div className="col-lg-2 col-5">
                  <button
                    type="button"
                    className="btn w-100"
                    onClick={clearFilters} // Correctly calling clearFilters on button click
                    style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid lightgray' }}
                  >
                    All Foods
                  </button>
                </div>
              </div>

              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}

              <div className="row">
                {filteredData.length === 0 ? (
                  <p className="text-center text-white">No items found</p>
                ) : (
                  filteredData.map((curElm) => (
                    <div className="col-lg-4 mb-2 shadow-lg" key={curElm.id}>
                      <div className="card text-left mb-2" style={{ backgroundColor: 'transparent', border: '1px solid white' }}>
                        <div className="row">
                          <div className="col-lg-6 col-6">
                            <img id='foodim' src={process.env.PUBLIC_URL + '/' + curElm.img} className="card-img-top" alt={curElm.title} style={{ height: '20vh' }} />
                          </div>
                          <div className="col-lg-6 col-6">
                            <p className="card-title pt-2" style={{ fontSize: '16px', fontWeight: '600', textAlign: 'left', color: 'orange' }}>
                              {curElm.title}
                            </p>

                            <div className="d-flex" style={{ marginTop: '3px' }}>
                              <h6 id='rate' style={{ color: 'white' }}>
                                <i className="fa fa-star" aria-hidden="true" style={{ color: 'orange' }}></i>&nbsp;{curElm.rate}
                              </h6>&nbsp;&nbsp;&nbsp;
                              <p id="price" style={{ fontSize: '15px', fontWeight: '600', textAlign: 'left', color: 'lightgray', marginTop: '-2px' }}>
                                Price: {curElm.price} ₹
                              </p>
                            </div>
                            <div id='mainlink' className="d-flex justify-content-between">
                              <NavLink to="/cart">
                                <button
                                  type="button"
                                  className="btn mt-2"
                                  style={{ backgroundColor: 'orange', fontSize: '13px' }}
                                  onClick={() => handleAddToCart(curElm)}
                                >
                                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                </button>
                              </NavLink>
                              <NavLink>
                                <button
                                  style={{
                                    backgroundColor: wishlist.includes(curElm.id) ? 'red' : 'transparent',
                                    border: 'none',
                                    fontSize: '20px',
                                  }}
                                  onClick={() => handleAddToWishlist(curElm)}
                                >
                                  <i className="fa fa-heart" aria-hidden="true" style={{ color: wishlist.includes(curElm.id) ? 'white' : 'white' }}></i>
                                </button>
                              </NavLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
