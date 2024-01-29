import React from 'react';
import { useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import './style.scss';

function OrderCheckout() {
  const { control, handleSubmit, watch } = useForm();
  const state = useSelector(state => state.basket);
  const totalAmount = useSelector(state => state.basket.totalAmount);

  const onSubmit = (data) => {
    console.log("Form Values:", data);
    console.log("State:", state);
    console.log("Total Amount:", totalAmount);
  };

  return (
    <div className='OrderCheckout'>
      <h3 className='OrderCheckout_title'>Ваши данные</h3>
      
      <form  onSubmit={handleSubmit(onSubmit)}>
        <div className='OrderCheckout_form'>
        <div className='OrderCheckout__leftConeiner'>
        <Controller
          name="Телефон"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input className='OrderCheckout_number' {...field} placeholder='Телефон' type="number" />
          )}
        />

        <Controller
          name="Имя"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input {...field} placeholder='Имя' type="text" />
          )}
        />


        <div className='OrderCheckout__radioConteiner'>
          <label className={`OrderCheckout__radioConteiner_card ${watch('paymentMethod') === 'cash' ? 'selected' : ''}`}>
            <Controller
              name="paymentMethod"
              control={control}
              defaultValue="cash"
              render={({ field }) => (
                <input {...field} type="radio" value="cash" />
              )}
            />
             <p>Наличные</p>
          </label>
          <label className={`OrderCheckout__radioConteiner_card ${watch('paymentMethod') === 'card' ? 'selected' : ''}`}>
            <Controller
              name="paymentMethod"
              control={control}
              defaultValue="card"
              render={({ field }) => (
                <input {...field} type="radio" value="card" />
              )}
            />
             <p>Оплата картой</p>
          </label>
        </div>

        <div className='OrderCheckout__changeConteiner'>
          <p>Подготовить сдачу с</p>
          <Controller
            name="Сумма для сдачи"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input {...field} type="text" placeholder='Сумма' />
            )}
          />
        </div>
        <div>
        <Controller
          name="Комменатрий к заказу"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input className='OrderCheckout__commentsOrder' {...field} placeholder='Комменатрий к заказу' type="text" />
          )}
        />
        </div>
        </div>

        <div className='OrderCheckout__rightConeiner'>

        <div className='OrderCheckout__radioConteiner'>
        <label className={`OrderCheckout__radioConteiner_Bycourier ${watch('Bycourier') === 'Курьером' ? 'selected' : ''}`}>
          <Controller
            name="Bycourier"
            control={control}
            defaultValue="Курьером"
            render={({ field }) => (
              <input  {...field} type="radio" value="Курьером" />
            )}
          />
          <p>Курьером</p>
        </label>

        <label className={`OrderCheckout__radioConteiner_Bycourier ${watch('Bycourier') === 'Самовывоз' ? 'selected' : ''}`}>
          <Controller
            name="Bycourier"
            control={control}
            defaultValue="Самовывоз"
            render={({ field }) => (
              <input {...field} type="radio" value="Самовывоз" />
            )}
          />
          <p>Самовывоз</p>
        </label>
        </div>

        <div className='OrderCheckout__input_strit-dom'>
        <Controller
          name="Улица"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input className='OrderCheckout__input_strit' {...field} placeholder='Улица' type="text" />)}/>    

        <Controller
          name="Дом"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input className='OrderCheckout__input_dom' {...field} placeholder='Дом' type="text" />)}/>    

        </div>
            
        <div className='OrderCheckout__input_kv-pod'>
        <Controller
          name="Кв"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input className='OrderCheckout__input_kv' {...field} placeholder='Кв' type="text" />)}/>    

        <Controller
          name="Подъезд"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input className='OrderCheckout__input_kv' {...field} placeholder='Подъезд' type="text" />)}/>
          <Controller
          name="Этаж"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input className='OrderCheckout__input_kv' {...field} placeholder='Этаж' type="text" />)}/>    

        <Controller
          name="Код"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input className='OrderCheckout__input_kv' {...field} placeholder='Код' type="text" />)}/>

        </div>
        <Controller
          name="E-mail"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <input className='OrderCheckout__input_email' {...field} placeholder='E-mail(необязательно)' type="text" />)}/>

        </div>
        </div>
        <button className='OrderCheckout_btn' type="submit">Оформить заказ {totalAmount} COM</button>
      </form>
      
      
      <p className='OrderCheckout__bottomTitle'>Нажимая на кнопку Оформить заказ, Вы подтверждаете свое согласие на обработку персональных данных в соответствии с Публичной оффертой</p>
    </div>
  );
}

export default OrderCheckout;