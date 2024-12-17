import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Contex/Cart_Contex'; // Use custom hook to access cart context
import '../Components/Header.css';

export default function Header() {
  const { totalItems =0 } = useCartContext(); // Access totalItems from the cart context

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          <input type="checkbox" name="" id="" />
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/food">Food</NavLink></li>
            <li><NavLink to="/wish">Wishlist</NavLink></li>
            <li>
              <NavLink to="/cart">
                <i className="fa fa-shopping-cart" style={{ fontSize: '20px' }}></i>
                <span className="cart-count">{totalItems}</span> {/* Display total items */}
              </NavLink>
            </li>
            <li><NavLink to='/signup'> <i class="fa fa-user" aria-hidden="true" style={{color:'orange'}}></i></NavLink>
</li>
          </ul>
    

          <h1 className="logo" data-aos="fade-right" style={{ color: 'orange', fontFamily: "Courgette, cursive" }}>
            Foody<span style={{ color: 'white' }}>Zoon</span>
          </h1>
        </div>
      </nav>
    </>
  );
}
