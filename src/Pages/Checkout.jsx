import React from 'react';
import { useCartContext } from '../Contex/Cart_Contex'; // Import the context

export default function Checkout() {
  // Use the cart from the context
  const { cart } = useCartContext();

  // Calculate the total price for all items in the cart
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shippinPrice = 100.;
  // Background style for the checkout page
  const backgroundStyle = {
    backgroundImage: 'url(/Assets/bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    position: 'relative',
  };

  // Overlay style to darken the background
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
              <div className="container row" style={{ color: 'white' }}>
                     <div className='col-lg-6 p-4' data-aos="fade-right">
                      <h6 data-aos="fade-right">Shipping Address</h6>
            <form action='https://formspree.io/f/xqakawbz' id="contact-form" class="form-horizontal" role="form" method='POST'>
       
      <div class="form-group mb-3">
                              <div class="col-sm-12">
          <h6 data-aos="fade-right">Enter Here Name</h6>                        
        <input type="text" class="form-control" id="name"  name="name" autoComplete='off' required style={{backgroundColor:'transparent',color:'white',border:'1px solid lightgray'}} />
        </div>
      </div>

      <div class="form-group mb-3">
                              <div class="col-sm-12">
                                   <h6 data-aos="fade-right">Enter Here Email</h6> 
          <input type="email" class="form-control" id="email"  name="email" autoComplete='off' required style={{backgroundColor:'transparent',color:'white',border:'1px solid lightgray'}}/>
        </div>
                          </div>
                          <div class="form-group mb-3">
                              <div class="col-sm-12">
          <h6 data-aos="fade-right">Enter Here Number</h6>                        
        <input type="text" class="form-control" id="Number"  name="Number" autoComplete='off' required style={{backgroundColor:'transparent',color:'white',border:'1px solid lightgray'}} />
        </div>
      </div>

      <h6 data-aos="fade-right">Enter Here Massage</h6>
      <textarea class="form-control mb-3" rows="4" name="message" autoComplete='off' required style={{backgroundColor:'transparent',color:'white',border:'1px solid lightgray'}}></textarea>
      
      <button data-aos="fade-left" class="btn btn send-button" id="submit" type="submit" value="SEND" style={{backgroundColor:'transparent',color:'white',border:'1px solid lightgray'}}>
        <div class="alt-send-button">
          <i class="fa fa-paper-plane" id="plan"></i><span class="send-text">Payment</span>
        </div>
      
      </button>
    </form>
          </div>
          
                  <div className='col-md-2'></div>
               <div className="col-lg-4" data-aos="fade-left">
                      <div className='p-5' style={{ border: '1px solid lightgray' }}>
                           <h6>
              Subtotal: 
              <span style={{ fontSize: '24px', fontWeight: 'bold', textAlign:'end'}}>
                {totalPrice.toFixed(2)} ₹
              </span>
                      </h6>  
                      <h6>
                          Shipping Price :<span style={{fontSize:'23px',textAlign:'end'}}>{shippinPrice} ₹</span>
                      </h6>
                      
                      <h6>Total Price:<span style={{fontSize:'23px',textAlign:'end'}}> {shippinPrice+totalPrice} ₹</span></h6>
           </div>
                  </div> 
        </div>
      </div>
    </div>
  );
}
