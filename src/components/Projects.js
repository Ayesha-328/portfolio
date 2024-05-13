import React, { useEffect } from 'react'
import backGlow1 from "../assets/images/back-glow-1.png"
import backGlow2 from "../assets/images/back-glow-2.png"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from "swiper/modules"
import data from './data'
import { useState } from 'react';
import Project from './Project';
import DotPattern from "../assets/images/dot-pattern.png"

import ProjectModal from './ProjectModal';

function Projects() {
  const [modal, setModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);
  console.log(modal);
  console.log(modalIndex)

  const project= modalIndex!==null ? data.projects[modalIndex] : null;
  console.log(project)

  // console.log(data)

  function toggleModal(index) {
    setModalIndex(index === modalIndex ? null : index);
  }

  if (modalIndex !== null) {
    // Disable scrolling when modal is open
    document.body.style.overflow = 'hidden';
  } else {
    // Enable scrolling when modal is closed
    document.body.style.overflow = 'auto';
  }

  function handleClose() {
    setModalIndex(null);
  }

  const projectElements = data.projects.map((proj, index) => {
    // console.log(proj.imageUrl)
    return (
      <>
        <SwiperSlide key={proj.id}>
          <Project proj={proj} toggle={() => toggleModal(index)} />
        </SwiperSlide>
      </>
    )
  })
  return (
    <div className="projects-container container" id='projects'>
      <h1 className="main-heading">My Projects</h1>
      <div className="projects-backglow">
        <img src={backGlow1} className='backglow-left' alt="" />
        <img src={backGlow2} className='backglow-right' alt="" />
        <img className="dot-pattern pattern1" src={DotPattern} alt=""  />
        <img className="dot-pattern pattern2" src={DotPattern} alt=""  />
      </div>

      {/* slider */}
      <div className="projects-slider">
        <Swiper
          effect={'coverflow'}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={false}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projectElements}
        </Swiper>
      </div>

      {modalIndex !== null && (
        <ProjectModal project={project} handleClose={handleClose}/>
      )}



    </div>
  )
}

export default Projects