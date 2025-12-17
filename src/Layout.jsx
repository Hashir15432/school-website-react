import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import AnimatedNavbar from './components/Navbar/AnimatedNavbar'

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