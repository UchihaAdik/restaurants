import React from 'react'
import {Link} from "react-router-dom"

import "./style.scss"
import wok from "../../assets/icon/горячая.png"
import pizza from "../../assets/icon/пицца.png"
import cornDog from "../../assets/icon/корн-дог.png"
import salads from "../../assets/icon/лапша.png"
import drink from "../../assets/icon/напитки.png"
import rolls from "../../assets/icon/сенгвич.png"
import set from "../../assets/icon/Сеты.png"
import discaunt from "../../assets/icon/скидки.png"
import sup from "../../assets/icon/супы.png"
import sushi from "../../assets/icon/суши.png"
import logo from "../../assets/icon/Mask Group.png"



function LeftNavBar() {
  return (
    <div className='leftNavBar'>
      <Link to="/">
      <div className='leftNavBar__logo'>
        <img src={logo} alt="" />
        <h2>Romsem</h2>
      </div>
      </Link>
      <div className='leftNavBar__br'></div>
      <div className='leftNavBar__link'>
        <ul>
          <li><img src={pizza} alt="" /><Link to="/pagepizza">Пицца</Link></li>
          <li><img src={set} alt="" /><Link  to="/pageset">Сеты</Link></li>
          <li><img src={wok} alt="" /><Link  to="/pagewok">WOK</Link></li>
          <li><img src={rolls} alt="" /><Link  to="/pagerolls">Роллы</Link></li>
          <li><img src={sushi} alt="" /><Link  to="/pagesushi">Суши</Link></li>
          <li><img src={salads} alt="" /><Link  to="/pagesalads">Салаты</Link></li>
          <li><img src={sup} alt="" /><Link  to="/pagesup">Супы</Link></li>
          <li><img src={cornDog} alt="" /><Link  to="/pagecorndog">Корн доги</Link></li>
          <li><img src={drink} alt="" /><Link  to="/pagedrink">Напитки</Link></li>
          <li><img src={discaunt} alt="" /><Link to="/pagediscaunt">Акции</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default LeftNavBar