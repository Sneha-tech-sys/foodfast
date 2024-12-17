import React from 'react';
import { useCartContext } from '../Contex/Cart_Contex';
import CartItem from '../Components/CartIte';  // Make sure this is the correct path
import '../Pages/App.css'
import { NavLink } from 'react-router-dom';

export default function Cart() {
  const { cart, removeItem, totalItems } = useCartContext();

  // Calculate the total price of all items in the cart
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const backgroundStyle = {
    backgroundImage: 'url(/Assets/bg.jpg)',
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
      <div className="Main" style={{ position: 'relative', zIndex: '5' }}>
        <div className="container row text-white" data-aos="fade-right" id='carth'>
          <div className="col-lg-2 col-2" id='fonti'>IMAGE</div>
          <div className="col-lg-2 col-2" id='fonti'>PRODUCT</div>
          <div className="col-lg-2 col-2" id='fontiw'>ADDMORE</div>
          <div className="col-lg-2 col-2" id='fontiw'>PRICE</div>
          <div className="col-lg-2 col-2" id='fonti'>REMOVE</div>
          <hr className="mt-3" />
        </div>

        <div className="container" style={{ marginTop: '20px', color: 'white', textAlign: 'center' }}>
          {cart.length === 0 ? (
            <p data-aos="fade-left">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  quantity={item.quantity}  // Pass the quantity here
                  removeItem={removeItem}  // Pass the removeItem function
                />
              ))}
            </div>
          )}
        </div>

        {/* Display the subtotal */}
        <div className='container text-start mt-5' data-aos="fade-right">
          <h5 style={{ color: 'white' }}>Subtotal : 
            <span style={{ fontSize: '29px', color: 'white' }}>
              {totalPrice.toFixed(2)} ₹
            </span>
          </h5>
          <p style={{ color: 'white' }}>Taxes and shipping will calculate at checkout</p>
        </div>

        {/* Checkout buttons */}
        <div className='container row mt-5'>
          <div className='col-lg-2 col-6' data-aos="fade-right">
            <NavLink to='/food'>
              <button
                type="button"
                className="btn w-100"
                style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid lightgray' }}
              >
                Continue Shopping
              </button>
            </NavLink>
          </div>

          <div className='col-lg-2 col-6' data-aos="fade-right">
            <NavLink to='/checkout'>
              <button
                type="button"
                className="btn w-100"
                style={{ backgroundColor: 'transparent', color: 'white', border: '1px solid lightgray' }}
              >
                Checkout Proceed
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
