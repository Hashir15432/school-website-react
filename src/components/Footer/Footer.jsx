import logo from '.././../assets/logo.webp';
import { FaLocationDot, FaPhoneFlip, FaRegClock } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='px-[25px] lg:px[50px] py-10 bg-[#f2f7fd]'>
            <div className='flex justify-between items-start flex-wrap'>
                <div className='w-[100%] md:w-[30%] sm:w-[50%] mt-10'>
                    <Link to="/"><img className='w-[150px] mb-7' src={logo} alt='' /></Link>
                    <p className='text-sm text-zinc-700'>we provide a caring and supportive place where every student can do well. Our mission is to make learning fun, spark curiosity, and help students reach their best potential.</p>
                </div>
                <div className='w-[100%] md:w-[30%] sm:w-[50%] mt-10'>
                    <div className='flex flex-col gap-7'>
                        <div className='flex justify-start items-center gap-3'>
                            <div>
                                <FaPhoneFlip className='text-[#ff9900] text-xl' />
                            </div>
                            <div>
                                <h3 className='font-medium'>Call</h3>
                                <p className='text-zinc-600 text-sm'>+92 8278751205</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div>
                                <FaRegClock className='text-[#ff9900] text-xl' />
                            </div>
                            <div>
                                <h3 className='font-medium'>Work Time</h3>
                                <p className='text-zinc-600 text-sm'>Mon - Fri 9 AM - 3 PM</p>
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-3'>
                            <div>
                                <FaLocationDot className='text-[#ff9900] text-xl' />
                            </div>
                            <div>
                                <h3 className='font-medium'>Address</h3>
                                <p className='text-zinc-600 text-sm'>Islamabad, Punjab</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] md:w-[30%] sm:w-[50%] mt-10'>
                    <h1 className='text-lg mb-4 font-medium'>Quick Links</h1>
                    <ul className='list-none flex flex-col gap-1'>
                        <li><Link to='/' className='text-zinc-700 footer-links'>Home</Link></li>
                        <li><Link to='/about' className='text-zinc-700 footer-links'>About</Link></li>
                        <li><Link to='/contact' className='text-zinc-700 footer-links'> Contact Us</Link></li>
                        {/* <li><a href='#' className='text-zinc-700 footer-links'>Home</a></li> */}
                    </ul>
                </div>
            </div>
            <hr className='mt-8 mb-8' />
            <div>
                <p className='text-zinc-700'>© Copyrights 2025</p>
            </div>
        </div>
    )
}

export default Footer