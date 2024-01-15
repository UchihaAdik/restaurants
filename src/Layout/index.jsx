import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import LeftNavBar from './LeftNavBar'
import RightBar from './RightBar'

import "./style.scss"




function Layout() {
  return (
    <>
    <LeftNavBar/>
    <div className='layout__center'>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
    <RightBar/> 
    </>
  )
}

export default Layout