import activity_pic from '.././../assets/activity_pic.webp';
import './Activity.css';
import '../Style/style.css';
import { useEffect } from 'react';
const Activity = () => {

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
        <div className='px-[20px] md:px-[30px] lg:px-[75px] py-20 space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out'>
            <h1 className='section_heading relative text-3xl sm:text-4xl mb-10 sm:mb-16 lg:mb-20 font-medium text-center'>Our Activities</h1>
            <div className='flex flex-wrap w-full gap-6 sm:gap-12 justify-between relative space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out'>
                <div className='bg-white hidden md:block rounded-full overflow-hidden absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[35%] outline-dashed outline-2 outline-[#0fbaf4] p-3 space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out'>
                    <img className='w-full rounded-full' src={activity_pic} alt='' />
                </div>
                <div className='p-5 activiy_box hover:bg-[#ff9900] hover:text-white flex shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)] w-[100%] sm:w-[45%] rounded-lg'>
                    <div className='flex box-border flex-col gap-3 w-[70%]'>
                        <h1 className='text-xl font-medium'>Creative Activities</h1>
                        <p className='activiy_box_para text-md'>Help developing your child creativity and social skill</p>
                    </div>
                </div>
                <div className='p-5 activiy_box hover:bg-[#003399] hover:text-white flex sm:justify-end shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)] w-[100%] sm:w-[45%] rounded-lg space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out

'>
                    <div className='flex flex-col gap-3 w-[70%]'>
                        <h1 className='text-xl font-medium'>Sports & Playing</h1>
                        <p className='activiy_box_para text-md'>Sport games for kids that help kids channel all the energy.</p>
                    </div>
                </div>
                <div className='p-5 activiy_box hover:bg-[#003399] hover:text-white flex shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)] w-[100%] sm:w-[45%] rounded-lg'>
                    <div className='flex flex-col gap-3 w-[70%]'>
                        <h1 className='text-xl font-medium'>E-Learning Media</h1>
                        <p className='activiy_box_para text-md'>Provides services and products developed for education.</p>
                    </div>
                </div>
                <div className='p-5 activiy_box hover:bg-[#ff9900] hover:text-white flex sm:justify-end shadow-[0_0px_30px_-15px_rgba(0,0,0,0.3)] w-[100%] sm:w-[45%] rounded-lg'>
                    <div className='flex flex-col gap-3 w-[70%]'>
                        <h1 className='text-xl font-medium'>Social Development</h1>
                        <p className='activiy_box_para text-md'>Actually impact many of the other forms of development.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Activity