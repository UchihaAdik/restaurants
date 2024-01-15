import React from 'react'
import "./style.scss"
import time from "../../assets/icon/Часы.png"
import Search from "../../assets/icon/Search_ico.png"

function Header() {
  return (
    <header className='header'>
        <div className='header__namber'>
            <h3>Наш телефон</h3>
            <a href="#">+996 705 188 955</a>
            <a href="#">+996 555 188 955</a>
            <div className='header__namber__time'>
              <img src= {time} alt="" />
              <h5>работаем с 10:00 до 00:00</h5>
            </div>
        </div>

        <div className='header__right'>
            <div className='header__right__location'>
              <h4>Город:</h4>
              <h3>Бишкек</h3>
            </div>
            <div className='header__right__link'>
                <a href="#">Отзывы</a>
                <a href="#">Доставка и оплата</a>
                <div className='header__right__img'>
                  <img src={Search} alt="" />
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header