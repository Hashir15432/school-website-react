import About_second_pic from '../../assets/About_second_pic.webp';
// import check_mark from '../../assets/check-mark.webp';
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const AboutSecond = () => {
  
  const navigate = useNavigate();

  function contactPage(){
    navigate('/contact');
  }
  
  return (
    <div className='w-[100%] px-[20px] lg:px-[75px] py-10 space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out'>
        <div className='flex justify-between w-full space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out'>
            <div className='about_pic w-[90%] md:w-[45%] flex justify-center items-center relative'>
                <img className='w-[80%] sm:w-[60%] rounded-b-full md:w-[90%] object-cover drop-shadow-xl' src={About_second_pic} alt=' ' />
            </div>
            <div className='w-[90%] md:w-[45%] space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out'>
                <p className='text-[#ff9900] font-medium text-lg'>About Us</p>
                <h2 className='text-xl sm:text-[2xl] md:text-3xl text-zinc-800 font-semibold mt-3'>We offer a High Quality Blend of Co-Curricular Activities, Sports and Academics.</h2>
                <p className='font-medium mt-6 text-zinc-500'>We provide a balanced education that includes strong academics, diverse co-curricular activities, and engaging sports programs to help students grow and succeed.</p>
                <button onClick={contactPage} className='bg-[#ff9900] mt-9 hover:bg-[#f59c17] px-5 py-5 text-sm font-medium text-white rounded-2xl flex gap-3 items-center'>Explore More<span><FaArrowRightLong color='white' /></span></button>
            </div>
        </div>
    </div>
  )
}

export default AboutSecond