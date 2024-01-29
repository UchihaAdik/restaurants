import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Navigation } from 'swiper/modules';
import { ref, get } from 'firebase/database';
import database from '../../../firebase';
import { Link } from 'react-router-dom';
import './style.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function SwiperNew({ category }) {
  const [swiperData, setSwiperData] = useState([]);

  const categoryOrDefault = category || 'pizza';

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = ref(database, `${categoryOrDefault}`);
      try {
        const snapshot = await get(dataRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          setSwiperData(data);
        } else {
          console.log(`Данные не найдены для категории: ${categoryOrDefault}`);
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error.message);
      }
    };

    fetchData();
  }, [categoryOrDefault]);

  return (
    <div className='swiperNew'>
      <Swiper modules={[Navigation, Pagination, A11y]} spaceBetween={50} slidesPerView={4} navigation>
        <div className='swiperNew__container'>
          {swiperData.map((item, index) => (
            <SwiperSlide key={index + 1}>
              <Link to={`/aboutfood/${item.category}/${item.id}`}>
                <div className='swiperNew__containerCard'>
                  <div className='swiperNew__containerCardImg'>
                    <img src={item.imageUrl} alt="" />
                  </div>
                  <div className='swiperNew__container_title'>
                    <p>{item.title}</p>
                    <p className='swiperNew__container_title_price'>{item.price} COM</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default SwiperNew;