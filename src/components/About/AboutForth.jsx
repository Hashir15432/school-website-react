import About_second_pic from '../../assets/vision2.webp';
import { FaCheckCircle } from "react-icons/fa";
import { useEffect } from 'react';
const AboutForth = () => {

    useEffect(() => {
        const elements = document.querySelectorAll(".reveal-on-scroll");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove("opacity-0", "translate-y-10");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        elements.forEach((el) => observer.observe(el));
    }, []);

    return (
        <div className='w-[100%] px-[20px] md:px-[30px] lg:px-[75px] py-10 space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out'>
            <h1 className='section_heading relative text-3xl sm:text-4xl mb-10 sm:mb-12 lg:mb-16 font-medium text-center'>Vision & Mission</h1>
            <div className='flex flex-row-reverse justify-between w-full'>
                <div className='about_pic w-[100%] md:w-[45%] flex justify-center items-center relative space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out
'>
                    <img className='w-[80%] sm:w-[50%] rounded-t-full md:w-[90%] object-cover drop-shadow-xl' src={About_second_pic} alt=' ' />
                    {/* <img className='w-[30%] sm:w-[25%] lg:w-[30%] absolute right-0 sm:right-10 lg:right-0 bottom-0 drop-shadow-xl' src={about_two} alt='' /> */}
                </div>
                <div className='w-[100%] md:w-[45%] flex flex-col justify-center'>
                    {/* <p className='text-[#ff9900] font-medium text-lg'>About Us</p> */}
                    <h2 className='text-xl sm:text-[2xl] md:text-3xl text-[#f59c17] font-semibold mt-3'>Vision</h2>
                    <p className='font-medium mt-2 text-zinc-500'>We aim to be a school that inspires students to follow their dreams and make a positive impact on the world.</p>
                    <h2 className='text-xl sm:text-[2xl] md:text-3xl text-[#f59c17] font-semibold mt-7'>Mission</h2>
                    <p className='font-medium mt-2 text-zinc-500'>We are committed to providing a complete education that combines strong academics, creativity, and character-building to help each student reach their full potential and become caring, active citizens.</p>
                    <ul className='mt-5 flex flex-col gap-2'>
                        <li className='flex gap-3 flex-nowrap items-center'><FaCheckCircle className='text-[#ff9900] text-xl' /><p>Individual attention in a small-class setting</p></li>
                        <li className='flex gap-3 flex-nowrap items-center'><FaCheckCircle className='text-[#ff9900] text-xl' /><p>Educational field trips and school presentations</p></li>
                        <li className='flex gap-3 flex-nowrap items-center'><FaCheckCircle className='text-[#ff9900] text-xl' /><p>Positive learning environment for your child</p></li>
                    </ul>
                    {/* <button className='bg-[#ff9900] mt-9 hover:bg-[#f59c17] px-5 py-5 text-sm font-medium text-white rounded-2xl flex gap-3 items-center'>Explore More<span><FaArrowRightLong color='white' /></span></button> */}
                </div>
            </div>
        </div>
    )
}

export default AboutForth