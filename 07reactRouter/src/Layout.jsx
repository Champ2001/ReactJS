//! OUTLET jo banaya humne woh karta hai ki jaha outlet likha waha cheezo ko change kardo .yaha humne header aur footer ke beech mai rakha tha isiliye unn dono ko same to same render kardega aur beecha ka content change hota rahega


import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {Outlet} from 'react-router-dom'

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer/>
    </>
  )
}

export default Layout