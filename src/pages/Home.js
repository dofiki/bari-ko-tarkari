import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import modules from 'swiper/modules' instead of 'swiper'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Footer from '../components/footer';
import '../swiper.css';

export default function Home() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src="/img/veg1.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/veg2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/img/veg3.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
      
      <MissionAndVision />
      <Footer />
    </>
  );
}

function MissionAndVision(){
  return (
    <div className='mv-container'>
        <div className='mission'>
          <h2>Our Mission: </h2>
          <p>
          "To provide farm-fresh, organic vegetables directly from home fields to customers, ensuring quality,
           sustainability, and a connection to nature's goodness while supporting local farmers."
          </p>
        </div>
        <div className='vision'>
        <h2>Our Vision: </h2>
          <p>
          "To create a healthier community by making fresh, homegrown vegetables accessible to
           every household, promoting sustainable farming, and preserving the purity of nature."
          </p>
        </div>
    </div>
  )
}

