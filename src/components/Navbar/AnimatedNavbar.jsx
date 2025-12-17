import { useEffect } from 'react';
import './Navbar.css';
import logo_full from '.././../assets/logo-full.webp';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);


const AnimatedNavbar = () => {

    // let menu = document.querySelector('#menu-icon');

    useEffect(() => {
        gsap.fromTo(".main_navbars", {
            top: -100
        },
            {
                top: 0,
                duration: 2,
                // delay : 3,
                scrollTrigger: {
                    scroller: "body",
                    trigger: ".main_navbars",
                    // markers : true,
                    start: "top -20%",
                    end: "top -25%",
                    scrub: 0
                }
            })
    }, [])


    let menuClick = () => {
        let navbar = document.querySelector('.navbarr');
        navbar.classList.toggle('open');
    }

    return (
        <div className='ani'>

            <header className='main_navbars fixed top-0 left-0 z-50 bg-white'>
                <Link to="" class="logo"><img src={logo_full} alt="" /></Link>

                <div className='flex flex-col'>
                    
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

export default AnimatedNavbar