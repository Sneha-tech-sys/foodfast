import React from 'react';
import Slider from '../Components/Slider';
import '../Pages/App.css'
import { NavLink } from 'react-router-dom';

export default function Home() {
  // Set the background image with transparent black overlay
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/bg.jpg)`,  // Correct path relative to public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    // Full height of the viewport
    position: 'relative', // For overlay positioning
  };

  // Overlay style: transparent black
  const overlayStyle = {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Transparent black with 60% opacity
    zIndex: 0, // Ensure the overlay is above the background image
  };

  return (
    <div style={backgroundStyle}>
      <div style={overlayStyle}></div>
   
      <div className="Main">
          <div className='container' id="glass" style={{marginTop:'-30px'}}>
        <div className='container-fluid row p-5' >
            <div className='col-lg-6' id="mainhead">
               
              <p className='heading' id='mainhe' style={{ position: 'relative', 
                zIndex: '5',
              }}>Find your best food in Food<span style={{ color: 'white' }}>Zone</span></p>
               
              <p className='small' id="main">
                Sure, you may get some visits from people who happen to walk by your storefront, but you won’t get enough clients to make a steady profit. You need to create a digital presence, so people can find you when they search for keywords related to your business, such as “Chinese food near me” or “Italian food in Vancouver.”
              </p>
              <button id='btn' type='button'>Order Now</button>
          </div>
          <div className='col-lg-6'>
              <div id="mainimg">
              <img src= {`${process.env.PUBLIC_URL}/Assets/fying.png`} style={{ position: 'relative', zIndex: '5',           // Set z-index to bring image on top
}}/>
     </div>
            </div>
        </div>
        </div>
       
         <div className='container row mt-5'>
          <div className='col-lg-6'>
            <img src=  {`${process.env.PUBLIC_URL}/Assets/foodv.webp`} id="about" style={{position: 'relative', 
    zIndex: '5',}} />
          </div>
          <div className='col-lg-6'>
          
             <p className='heading' style={{ position: 'relative', 
                zIndex: '5',
            }}>About Foody<span style={{ color: 'white' }}>Zone</span></p>
            <p className='small' style={{ position: 'relative', 
                zIndex: '5',
            }}>
              A USP is a statement in which you highlight a feature or more of your restaurant to determine people to choose your business to the detriment of any other options. Here are some examples to help you create your own: Pizza Pascuale – family-owned, authentic Neapolitan style pizza; Vertisaero – farm-to-table, seasonal fresh dishes.
            </p>
            <p style={{position: 'relative', 
              zIndex: '5', color: 'white', fontFamily: " Courgette, cursive"
            }}><i class="fa fa-hand-o-right" style={{ color: 'orange' }}></i> Fest Food Quality</p>
            <p style={{position: 'relative', 
              zIndex: '5', color: 'white', fontFamily: " Courgette, cursive"
            }}><i class="fa fa-hand-o-right" style={{ color: 'orange' }}></i> Safety and clean</p>
            <p style={{position: 'relative', 
              zIndex: '5', color: 'white', fontFamily: " Courgette, cursive"
            }}><i class="fa fa-hand-o-right" style={{ color: 'orange' }}></i> Fast Deleviry</p>
            <p style={{position: 'relative', 
              zIndex: '5', color: 'white', fontFamily: " Courgette, cursive"
            }}><i class="fa fa-hand-o-right" style={{ color: 'orange' }}></i> Good taste</p>
             <NavLink to='/food' style={{position: 'relative', 
              zIndex: '5',}}>
             <button id='btn' type='button'>Food Details</button>
          </NavLink>
          </div>
         
        </div>

        <div className="container-fluid p-5" >
          <div className="container">
            <Slider />
          </div>
        </div>
        
      </div>
    </div>
  );
}
