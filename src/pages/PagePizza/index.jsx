import React from 'react'
import "./style.scss"
import ApiList from '../../apiComonents'


function PagePizza() {
  return (
    <div className='pagePizza'>
      <ApiList dataType="pizza" />
    </div>
  )
}

export default PagePizza