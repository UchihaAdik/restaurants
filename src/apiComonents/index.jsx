import React, { useEffect, useState } from 'react';
import { ref, get } from 'firebase/database';
import database from '../firebase';
import './style.scss';

function ApiList({ dataType, onSelectCard  }) {
  const [dataArray, setDataArray] = useState([]);

  useEffect(() => {
    const dataRef = ref(database, dataType);

    get(dataRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const newArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          setDataArray(newArray);
        } else {
          console.log(`Нет данных для ${dataType}`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dataType]);
    const handleWantButtonClick = (item) => {
    onSelectCard(item);
  };

  return (
    <div className='main-card'>
      {dataArray.map((item) => (
        <div key={item.id} className='card'>
          <img src={item.imageUrl} alt="" />
          <h3>{item.title}</h3>
          <p>{dataType === 'pizza' ? 'Размер' : 'Описание'} </p>
          <p>Рейтинг {item.rating}</p>
          <div className='card__bottom'>
            <p className='card__bottom-price'>{item.price} СОМ</p>
            <button className='card__bottom-btn'>Хочу!</button>
          </div>
        </div>
      ))}
    </div>
  );
  
}

export default ApiList;