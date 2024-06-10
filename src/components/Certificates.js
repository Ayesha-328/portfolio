import React, { useRef, useState } from 'react';
import data from './data'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


function Certificates() {

  const certElement = data.certificates.map(cert=>{
    return  <SwiperSlide>
      <img src={`./certificates${cert.imageUrl}`} alt='certificate'/>
    </SwiperSlide>
  })
  return (
    <div className="certificates-container container" id='certificates'>
      <h2 className="main-heading">My Certificates</h2>
      <div className="projects-backglow">
        {/* <img src={backGlow1} className='backglow-left' alt="" />
        <img src={backGlow2} className='backglow-right' alt="" />
        <img className="dot-pattern pattern1" src={DotPattern} alt=""  />
        <img className="dot-pattern pattern2" src={DotPattern} alt=""  /> */}
      </div>

      {/* slider */}
      <div className="certificates-slider">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {certElement}
      </Swiper>
    </div>
 
    </div>
  )
}

export default Certificates

