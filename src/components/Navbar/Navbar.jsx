import { useEffect } from 'react';
import './Navbar.css';
// import logo from '../assets/logo.jpg';
import logo_full from '.././../assets/logo-full.webp';
import { FaLocationDot, FaPhoneFlip, FaRegClock } from "react-icons/fa6";
import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {

    // let menu = document.querySelector('#menu-icon');

    useEffect(() => {
        gsap.fromTo(".main_navbars", {
            backgroundColor: "transparent",
            boxShadow: 'none'
        },
            {
                backgroundColor: "hsla(0, 0%, 100%, 0.94)",
                boxShadow: `5px 0px 5px gray`,
                duration: 2,
                // delay : 3,
                scrollTrigger: {
                    scroller: "body",
                    trigger: ".main_navbar",
                    // markers : true,
                    start: "top -25%",
                    end: "top -35%",
                    scrub: 0
                }
            })
    }, [])


    let menuClick = () => {
        let navbar = document.querySelector('.navbarr');
        navbar.classList.toggle('open');
    }

    return (
        <div>

            <header className='main_navbar'>
                <Link to="/" class="logo"><img src={logo_full} alt="" /></Link>

                <div className='flex flex-col'>
                    <div className='navbar_content'>
                        <div>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaPhoneFlip className='text-[#ff9900] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Call</h3>
                                    <p className='text-zinc-600 text-sm'>+92 8278751205</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaRegClock className='text-[#ff9900] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Work Time</h3>
                                    <p className='text-zinc-600 text-sm'>Mon - Fri 9 AM - 3 PM</p>
                                </div>
                            </div>
                        </div>
                        <div>
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
                    <hr className='nav_line' />
                    <ul className="navbarr">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/about'>About Us</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>


                <input onClick={menuClick} type="checkbox" role="button" aria-label="Display the menu" className="menu" id='menu-icon'></input>
            </header>
        </div>
    )
}

export default Navbar