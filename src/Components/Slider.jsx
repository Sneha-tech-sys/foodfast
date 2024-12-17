import React from 'react';
import Slider from 'react-slick'; // Import Slider from react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Components/Slider.css'

export default function CustomSlider() {
  const slider_data = [
    { id: 1, icon: <i className="fa fa-cutlery"></i>, review: 'Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified. If removeBefore is set to false,' },
    { id: 2, icon: <i className="fa fa-truck"></i>, review: 'Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified. If removeBefore is set to false,' },
    { id: 3, icon: <i className="fa fa-cutlery"></i>, review: 'Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified. If removeBefore is set to false,' },
    { id: 4, icon: <i className="fa fa-cutlery"></i>, review: 'Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified. If removeBefore is set to false,' },
    { id: 5, icon: <i className="fa fa-cutlery"></i>, review: 'Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified. If removeBefore is set to false,' },
    { id: 6, icon: <i className="fa fa-truck"></i>, review: 'Remove slide by index. If removeBefore is set true, remove slide preceding index, or the first slide if no index is specified. If removeBefore is set to false,' },
  ];

 const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000, // Set the speed to 2 seconds (2000ms)
    responsive: [
      {
        breakpoint: 768, // For screens smaller than 768px (e.g., phones, tablets)
        settings: {
          slidesToShow: 1, // Show 1 card per slide
          slidesToScroll: 1, // Scroll 1 card at a time
        },
      },
    ],
  };

    

  return (
   <div className="slider-container">
      <Slider {...settings}>
        {slider_data.map(item => (
          <div key={item.id} className="slider-item">
                <div className="slider-card p-3" style={{ border: '1px solid gray' }}>
          <div className="icon mb-4">{item.icon}</div>
              <p style={{ textAlign: 'center' }}>{item.review}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
