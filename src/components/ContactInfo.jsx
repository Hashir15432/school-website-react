import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { IoMdSend } from "react-icons/io";
import { useEffect } from "react";
const ContactInfo = () => {

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
    <div className='flex justify-center sm:justify-between items-start px-[20px] sm:px-[40px] md:px-[75px] gap-16 sm:gap-3 my-20 space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out'>
      <div className='flex flex-col justify-center items-center gap-1'>
        <FaLocationDot className='text-[#ff9900] text-xl' />
        <h1 className='text-lg font-medium mt-3'>OUR LOCATION</h1>
        <p className='text-zinc-500 text-md'>Islamabad</p>
        <p className='text-zinc-500 text-md'>Punjab</p>
      </div>
      <div className='w-[1px] hidden sm:block h-32 bg-zinc-400 '></div>
      <div className='flex flex-col justify-center items-center gap-1 '>
        <FaPhone className='text-xl text-[#ff9900]' />
        <h1 className='text-lg font-medium mt-3'>CONTACT US</h1>
        <p className='text-zinc-500 text-md'>00000000</p>
        <p className='text-zinc-500 text-md'>00000000</p>
      </div>
      <div className='w-[1px] h-32 bg-zinc-400 hidden sm:block'></div>
      <div className='flex flex-col justify-center items-center gap-1'>
        <IoMdSend className='text-[#ff9900] text-2xl' />
        <h1 className='text-lg font-medium mt-3'>WRITE SOME WORDS</h1>
        <p className='text-zinc-500 text-md'>Support.com</p>
      </div>
    </div>
  )
}

export default ContactInfo