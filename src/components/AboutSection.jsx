import './style.css';
import about_one from '../assets/about_pic4.webp';
import about_two from '../assets/about_pic2.webp';
import check_mark from '../assets/check-mark.webp';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const AboutSection = () => {

  const navigate = useNavigate();
  function aboutPage(){
    navigate('/about');
  }

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
    <div className='w-[100%] px-[20px] lg:px-[75px] pt-20'>
        <div className='flex justify-between w-full'>
            <div className='about_pic w-[90%] md:w-[45%] flex justify-center items-center relative space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out'>
                <img className='w-[80%] sm:w-[60%] lg:w-[80%] object-cover drop-shadow-xl' src={about_one} alt=' ' />
                <img className='w-[30%] sm:w-[25%] lg:w-[30%] absolute right-0 sm:right-10 lg:right-0 bottom-0 drop-shadow-xl' src={about_two} alt='' />
            </div>
            <div className='w-[90%] md:w-[45%] space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out
'>
                <p className='text-[#ff9900] font-medium text-lg'>About Us</p>
                <h2 className='text-4xl text-zinc-800 font-semibold mt-3'>Top Choice For Children</h2>
                <p className='font-medium mt-4 text-zinc-500'>Welcome to Cambridge Innovative School, where we believe every child has the potential to achieve great things. Our dedicated staff and supportive community work together to provide a safe and inspiring learning environment. Here, students are encouraged to explore, learn, and grow.</p>
                <div className='flex flex-wrap mt-4 justify-between space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out'>
                  <div className='flex w-[100%] md:w-[45%] mt-4 justify-start p-3 shadow-lg rounded-2xl gap-3 items-center'>
                    <img className='w-7 h-7' src={check_mark} alt='' />
                    <p className='text-zinc-700 text-lg font-medium'>Sport Training</p>
                  </div>
                  <div className='flex w-[100%] md:w-[45%] mt-4 justify-start p-3 shadow-lg rounded-2xl gap-3 items-center'>
                    <img className='w-7 h-7' src={check_mark} alt='' />
                    <p className='text-zinc-700 text-lg font-medium'>Expert Teachers</p>
                  </div>
                  <div className='flex w-[100%] md:w-[45%] mt-4 justify-start p-3 shadow-lg rounded-2xl gap-3 items-center'>
                    <img className='w-7 h-7' src={check_mark} alt='' />
                    <p className='text-zinc-700 text-lg font-medium'>Easy To Learn</p>
                  </div>
                  <div className='flex w-[100%] md:w-[45%] mt-4 justify-start p-3 shadow-lg rounded-2xl gap-3 items-center'>
                    <img className='w-7 h-7' src={check_mark} alt='' />
                    <p className='text-zinc-700 text-lg font-medium'>Clear & Cleaning</p>
                  </div>
                </div>
                <button onClick={aboutPage} className='bg-[#ff9900] mt-7 hover:bg-[#f59c17] px-5 py-5 text-sm font-medium text-white rounded-2xl flex gap-3 items-center'>Explore More<span><FaArrowRightLong color='white' /></span></button>
            </div>
        </div>
    </div>
  )
}

export default AboutSection