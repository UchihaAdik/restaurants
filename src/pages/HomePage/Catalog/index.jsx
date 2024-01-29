import React from 'react'
import "./style.scss"

import catalog1 from '../../../assets/С лососем.png'
import catalog2 from '../../../assets/С угрем.jpg'
import catalog3 from '../../../assets/Без мяса.png'
import catalog4 from '../../../assets/С филадельфией.jpg'
import catalog5 from '../../../assets/Акции.jpg'

function Catalog() {
  return (
    <div className='catalog'>
      <div className='catalog_1'> <img src={catalog1} alt="" /> 
      <h3 className='catalog__title_name'>Чикен</h3></div>

      <div className='catalog_23'>
        <div className='catalog_2'> <img src={catalog2} alt="" />
        <h3 className='catalog__title_name'>С угрем</h3></div>
        <div className='catalog_3'> <img src={catalog3} alt="" />
        <h3 className='catalog__title_name'>Корн дог</h3></div>
      </div>

      <div className='catalog_4'><img src={catalog4} alt="" />
      <h3 className='catalog__title_name'>Пицца</h3></div>
      <div className='catalog_5'><img src={catalog5} alt="" />
      <h3 className='catalog__title_name'>Акции</h3></div>
    </div>
  )
}

export default Catalog