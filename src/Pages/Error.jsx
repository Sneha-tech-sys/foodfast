import React from 'react';


export default function Error() {

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
      <div className="Main" data-aos="fade-right" style={{ position: 'relative', zIndex: '5' ,display:'flex',justifyContent:'center'}}>
             <img src="Assets/not.png"/>
      </div>
    </div>
  );
}
