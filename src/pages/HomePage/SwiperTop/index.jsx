import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';

import Rectangle from "../../../assets/Rectangle 1.jpg"

import "./style.scss"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function SwiperAdd() {
  return (
    <div className='SwiperTop'>
  
    <Swiper
       modules={[Pagination, A11y , Autoplay]}
       autoplay = {true} delay={1000} 
       spaceBetween={50}
       slidesPerView={1}
       
       pagination={{ clickable: true }}
    >
      <SwiperSlide><img src={Rectangle} alt=""/></SwiperSlide>
      <SwiperSlide><img src="https://семенов.ваши-суши.рф/images/akcii/2019/sistema-bonusy-site.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img src="https://senseisamara.ru/wp-content/uploads/2020/11/3F.jpg" alt=""/></SwiperSlide>
      <SwiperSlide><img src="https://kartinki.pics/uploads/posts/2021-03/thumbs/1617174442_1-p-reklama-pitstsi-krasivo-1.png" alt=""/></SwiperSlide>
    </Swiper>

    </div>
  )
}

export default SwiperAdd