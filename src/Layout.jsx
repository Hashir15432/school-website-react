import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AnimatedNavbar from './components/AnimatedNavbar'

const Layout = () => {
  return (
    <div className='overflow-hidden'>
        <Navbar />
        <AnimatedNavbar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout