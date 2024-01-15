import React from 'react'
import ApiList from '../../apiComonents'
import "./style.scss"

function PageSet() {
  return (
    <div className='pageSet'>
    <ApiList dataType="set" />
    </div>
  )
}

export default PageSet