import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './style.scss';
import { removeFromBasket,setTotalAmount } from './basketSlice';
import { Link } from 'react-router-dom';

const Basket = () => {
  const items = useSelector(state => state.basket.items) ?? [];
  const totalAmount = useSelector(state => state.basket.totalAmount) || 0; // Используйте useSelector для получения totalAmount
  const dispatch = useDispatch();
  const [localTotalAmount, setLocalTotalAmount] = useState(0);

  useEffect(() => {
    const newTotalAmount = items.reduce((total, item) => {
      const itemPrice = (item.productInfo.price || 0) * item.quantity;
      return total + itemPrice;
    }, 0);

    // Сохраняем новую общую сумму в Redux
    dispatch(setTotalAmount(newTotalAmount));
    // Также обновляем локальное состояние
    setLocalTotalAmount(newTotalAmount);
  }, [dispatch, items]);

  const handleRemoveFromBasket = (productId, category) => {
    dispatch(removeFromBasket({ productId, category }));
  };

  return (
    <div className='basket__Allconteiner'>
      <h2>Корзина</h2>
      <div className='basket__AllBorromConteiner'>
        {items.map(item => {
          const itemPrice = (item.productInfo.price || 0) * item.quantity;
          return (
            <div key={item.productInfo.id} className='basket'>
              <div className='basket__conteiner_img'>
                <img className='basket_img' src={item.productInfo.imageUrl} alt="" />
              </div>
              <div className=''> 
                <p>{item.productInfo.title} x{item.quantity}</p>
                <p> COM {item.productInfo.price || 0}</p>
                <button onClick={() => handleRemoveFromBasket(item.productInfo.id, item.productInfo.category)}>
                  Удалить
                </button>
              </div>  
            </div>
          );
        })}
      </div>

      <div className='Basket_bootom_coneiner'>
        <p className='Basket_bootom_coneiner_count'> {totalAmount} COM</p>
        <Link className='Basket_bootom_coneiner_btn' to={{ pathname: "/ordercheckout", state: { totalAmount } }}>Оформить заказ</Link>
      </div>
    </div>
  );
};

export default Basket;