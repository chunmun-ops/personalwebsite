import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/Edwin.jfif'
import AVTR3 from '../../assets/Dinesh.jfif'


// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import CV1 from '../../assets/Dinesh.pdf'
import CV2 from '../../assets/ChunHong.pdf'


const data = [
  {
    avatar: AVTR1,
    name: 'Lim Chun Hong',
    position: 'Platoon Commander A2',
    review: 'Confident and mature soldier who demonstrated high level of professionalism and skill in his work which was complemented by genuine respect and admiration from both his superiors and subordinates',
    CV:CV2
  },
  {
    avatar: AVTR2,
    name: 'Edwin Tan',
    position: 'Head of Digital Banking',
    review: '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo exercitationem, temporibus voluptates dolor vero praesentium enim?'
  },
  {
    avatar: AVTR3,
    name: 'Dinesh Suresh',
    position: 'Head of Digital Banking',
    review: 'Chun Mun is a really innovative and inquisitive young man who is always probing to understand the naunces of society',
    CV:CV1
  }


]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from previous employers</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name , position, review,CV}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className="client__avatar">
                  <img src={avatar} alt={avatar}/>
                </div>
                <h3 className='client__name'>{name}</h3>
                <h6 className='position'>{position}</h6>
                <a href={CV} download className='client__review' >
                  {review}
                </a>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials