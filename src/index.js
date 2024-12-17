
import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FilterContextProvider } from './Contex/Filter_context';
import { CartProvider } from './Contex/Cart_Contex';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library

AOS.init({
    duration: 1200, // Animation duration in milliseconds
    easing: 'ease-in-out', // Easing function
    once: true, // Whether animation should happen only once
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FilterContextProvider>
      <CartProvider>
        <App />
        </CartProvider>
      </FilterContextProvider>
  </React.StrictMode>
);


reportWebVitals();
