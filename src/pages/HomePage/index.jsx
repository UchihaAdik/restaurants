import React from 'react'
import SwiperNew from './SwiperNew'
import SwiperAdd from './SwiperTop'
import Catalog from './Catalog'
import AboutOrder from './AboutOrder'

import "./style.scss"

function HomePage() {
  return (
    <div className='homePage'>
      <SwiperAdd/>
      <Catalog/>
      <SwiperNew/>
      <AboutOrder/>
    </div>
  )
}

export default HomePage