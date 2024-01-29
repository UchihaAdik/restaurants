import React from 'react'
import {Link, NavLink} from "react-router-dom"
// import { dataTypeMenu } from '../../pages/FoodMenu/FoodMenu'
import { leftbarlink } from './leftbarlink'

import "./style.scss"

import logo from "../../assets/icon/Mask Group.png"



function LeftNavBar() {
  return (
    <>
    <div className='leftNavBar'>
      <NavLink className={({isActive})=>{return isActive?"activ": ""}} to="/">
      <div className='leftNavBar__logo'>
        <img src={logo} alt="" />
        <h2>Romsem</h2>
      </div>
      </NavLink>
      <div className='leftNavBar__br'></div>
      <div className='leftNavBar__link'>
        <ul>
        {leftbarlink.map((itemMenu)=>(
          <li key={crypto.randomUUID()}><img src={itemMenu.img} alt="" /><NavLink className={({isActive})=>{return isActive?"activ": ""}} to={`/foodMeno66/${itemMenu.type}`}>{itemMenu.title}</NavLink></li>
        ))}
        </ul>
      </div>
    </div>
    </>
  )
}

export default LeftNavBar