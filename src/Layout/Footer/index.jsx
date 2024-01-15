import React from 'react'
import "./style.scss"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer__firstBox'>
          <ul>
            <li><a href="#">О компании</a></li>
            <li><a href="#">Доставка и оплата</a></li>
            <li><a href="#">Лента материалов</a></li>
            <li><a href="#">Политика возврата</a></li>
          </ul>
        </div>
    <div className='footer-br'></div>
        <div className='footer__secondBox'>
            <h4>Введите номер</h4>
            <input type="text" />
            <p>Выберите удобный мессенджер для общения</p>
            <div className=''>
              
            </div>
        </div>
    <div className='footer-br'></div>
        <div className='footer__thirdBox'>
          <ul>
            <li><a href="#">Тел:+996 705 188 955</a></li>
            <li><a href="#">Тел:+996 555 188 955</a></li>
            <li><a href="#">Адрес:Бакаева 126</a></li>
          </ul> 
        </div>
    </div>
  )
}

export default Footer