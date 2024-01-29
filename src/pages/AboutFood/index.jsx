import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ref, get } from 'firebase/database';
import database from '../../firebase';
import {  useDispatch } from 'react-redux';
import './style.scss'
import SwiperNew from '../HomePage/SwiperNew';


import { addToBasket } from '../../Layout/RightBar/basket/basketSlice';

import {setSelectedProduct} from '../../apiComonents/apiSlice';

function AboutFood() {

  const { itemId ,itemCategory} = useParams();
  const [itemData, setItemData] = useState(null);

  const dispatch = useDispatch();

  const handleWantButtonClic = (item) => {
    dispatch(setSelectedProduct(item));
    dispatch(addToBasket(item)); 
  };

  useEffect(() => {
    const fetchData = async () => {
      
  
      const dataRef = ref(database, `${itemCategory}/${itemId}`);
  
      try {
        const snapshot = await get(dataRef);
  
        if (snapshot.exists()) {
          const data = snapshot.val();
          setItemData(data);
        } else {
          console.log(`Данные не найдены для itemId: ${itemId}`);
        }
      } catch (error) {
        console.error('Ошибка при получении данных:', error.message);
      }
    };
  
    fetchData();
  }, [itemId]);

  return (
    <>
    <div className='AboutFood'>
      {itemData ? (
        
        <div className='AboutFood__conteiner'>
          <div className='AboutFood__IMGconteiner'>
              <img src={itemData.imageUrl} alt="" />
          </div>
          <div className='AboutFood__textcConteiner'>
          <h2 className='AboutFood__textcConteiner_title'>{itemData.title}</h2>
          <p className='AboutFood__textcConteiner_sizes'> {`${itemData.sizes} `} гр</p>
          <p className='AboutFood__textcConteiner_price'>Цена: {itemData.price} СОМ</p>
          <p className='AboutFood__textcConteiner_rating'>Рейтинг: {itemData.rating}</p>
          <button className='AboutFood__textcConteiner_btn' onClick={() => handleWantButtonClic(itemData)}>Хочу!</button>
          </div>
          
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
          <SwiperNew category={itemCategory} />
    </>
  );
}

export default AboutFood;