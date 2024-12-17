import React from 'react';
import { useCartContext } from '../Contex/Cart_Contex'; // Import context
import '../Components/Slider.css'

export default function CartItem({ id, name, image, price, quantity, removeItem }) {
  const { increaseQuantity, decreaseQuantity } = useCartContext();

  // Calculate total price for the item
  const totalPrice = price * quantity;

  return (
<>
    <div className="row mb-3 align-items-center" id="cart-item">
  <div className="col-lg-2 col-2">
    <img className="cart-img" src={image} alt={name} />
  </div>

  <div className="col-lg-2 col-2">
    <h6 className="cart-name">{name}</h6>
  </div>

  <div className="col-lg-2 col-3 d-flex justify-content-center">
    <button style={{backgroundColor:'transparent',border:'none',color:'white'}}
      onClick={() => decreaseQuantity(id)} 
      className="cart-btn"
    >
      <i className="fa fa-minus" id='icon'/>
    </button>
    <span className="cart-quantity">{quantity}</span>
    <button style={{backgroundColor:'transparent',border:'none',color:'white'}}
      onClick={() => increaseQuantity(id)} 
      className="cart-btn"
    >
      <i className="fa fa-plus" id='icon'/>
    </button>
  </div>

  <div className="col-lg-2 col-2">
    <p className="cart-price">{totalPrice.toFixed(2)}₹</p>
  </div>

  <div className="col-lg-1 col-2 d-flex justify-content-end">
    <button style={{backgroundColor:'transparent',border:'none',color:'orange'}}
      onClick={() => removeItem(id)} 
      className="cart-remove-btn"
    >
          <i className="fa fa-trash"  id='trash'/>
    </button>
  </div>
    </div>
   

</>
  );
}
