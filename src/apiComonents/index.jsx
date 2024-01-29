import React, { useEffect } from 'react';
import { ref, get } from 'firebase/database';
import database from '../firebase';
import './style.scss';
import { leftbarlink } from '../Layout/LeftNavBar/leftbarlink';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  setDataArray,
  setError,
  setInd,
  setSelectedProduct,
  addToCart, // Добавлен импорт
} from './apiSlice';
import { addToBasket } from '../Layout/RightBar/basket/basketSlice'; // Добавлен импорт

function ApiList({ dataType }) {
  const dataArray = useSelector((state) => state.api.dataArray);
  const error = useSelector((state) => state.api.error);
  const ind = useSelector((state) => state.api.ind);
  const dispatch = useDispatch();

  const handleWantButtonClick = (item) => {
    dispatch(setSelectedProduct(item));
    dispatch(addToBasket(item)); 
  };

  useEffect(() => {
    const fetchData = async () => {
      const dataRef = ref(database, dataType);

      try {
        const snapshot = await get(dataRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const newArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          dispatch(setDataArray(newArray));
          dispatch(setError(null));
        } else {
          dispatch(
            setError(`Пока нет данных об ${dataType}.`)
          );
        }
      } catch (error) {
        dispatch(
          setError(`Ошибка загрузки данных: ${error.message}`)
        );
      }

      const foundInd = leftbarlink.find(
        (item) => item.type === dataType
      );
      if (foundInd) {
        dispatch(setInd(foundInd));
      }
    };
    
    fetchData();
  }, [dataType, dispatch]);
  

  return (
    <div className='main-card'>
      {error ? (
        <div className='cardEror'>
          <div className='card_imgConeiner'>
            <h3>{error}</h3>
          </div>
        </div>
      ) : (
        <>
          <div className='main-card_topConteiner'>
            <div className='main-card_topConteiner_name'>
              <img src={ind ? ind.img : ''} alt='' />
              <h3>{ind ? ind.title : ''}</h3>
            </div>
            <div></div>
          </div>

          <div className='main-card_innerConteiner'>
            {dataArray.map((item) => (
              <div key={item.id} className='card'>
                <div className='card_imgConeiner'>
                <Link to={`/aboutfood/${item.category}/${item.id}`}>
                <img src={item.imageUrl} alt='' />
                </Link>
                </div>
                <h3>{item.title}</h3>
                <p>
                  {dataType === 'foodmenu'
                    ? 'Размер'
                    : 'Описание'}
                </p>
                <p>Рейтинг {item.rating}</p>
                <div className='card__bottom'>
                  <p className='card__bottom-price'>
                    {item.price} СОМ
                  </p>
                  <button
                    className='card__bottom-btn'
                    onClick={() =>
                      handleWantButtonClick(item)
                    }
                  >
                    Хочу!
                  </button>
                </div>
              </div>
              
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ApiList;
