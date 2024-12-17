import React from 'react';
import { useFilterContext } from '../Contex/Filter_context'; // Import the context
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Contex/Cart_Contex';

export default function Wishlist() {
  const { state, removeItem } = useFilterContext();
  const { wishlist } = state;  // This now contains full item objects
  const { addToCart } = useCartContext();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/bg.jpg)`,  
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'auto', 
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
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div> 
      <div className="Main">
        <div className="container p-5">
          <div className="row mb-3">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <h2 className="text-center text-white" style={{ position: 'relative', zIndex: '5' }}>My Wishlist</h2>
            </div>
            <div className="col-lg-2"></div>
          </div>

          <div className="row" style={{ position: 'relative', zIndex: '5' }}>
            {wishlist.length === 0 ? (
              <p className="text-center text-white">Your wishlist is empty</p>
            ) : (
              wishlist.map((item) => (
                <div className="col-lg-4" key={item.id}>
                  <div className="card text-left mb-2" style={{ backgroundColor: 'transparent', border: '1px solid white' }}>
                    <div className="row">
                      <div className="col-lg-6 col-6">
                        <img src= {process.env.PUBLIC_URL + '/' + item.image} className="card-img-top" alt={item.name} style={{ height: '18vh' }} />
                      </div>
                      <div className="col-lg-6 col-6">
                        <p className="card-title pt-2" style={{ fontSize: '13px', fontWeight: '600', textAlign: 'left', color: 'orange' }}>
                          {item.name}
                        </p>
                        <div className="pt-2">
                          <div className="d-flex" style={{ marginTop: '3px' }}>
                            <h6 id="rate" style={{ color: 'white' }}>
                              <i className="fa fa-star" aria-hidden="true" style={{ color: 'orange' }}></i>&nbsp;{item.rating}
                            </h6>&nbsp;&nbsp;&nbsp;
                            {/* <p id="price" style={{ fontSize: '15px', fontWeight: '600', textAlign: 'left', color: 'lightgray', marginTop: '-2px' }}>
                              Price: {item.price} ₹
                            </p> */}
                          </div>
                          <div className="d-flex justify-content-around">
                            <NavLink to="/cart">
                              <button
                                type="button"
                                className="btn"
                                style={{ backgroundColor: 'orange', fontSize: '13px' }}
                                onClick={() => handleAddToCart(item)}
                              >
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                              </button>
                            </NavLink>
                            <button
                              onClick={() => removeItem(item.id)}
                              style={{ backgroundColor: 'transparent', border: 'none', fontSize: '20px', marginTop: '-13px' }}
                            >
                              <i className="fa fa-trash" aria-hidden="true" style={{ color: 'orange' }}></i>
                            </button>
                          </div>
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
  );
}

