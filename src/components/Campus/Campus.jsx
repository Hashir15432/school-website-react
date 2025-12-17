import '../Principal/Principal.css';
import principal_one from '.././../assets/about-shape-3.webp';
import campus from '.././../assets/campus.webp';
import education from '.././../assets/education.webp';
import reading from '.././../assets/reading.webp';
import forest from '.././../assets/forest.webp';
import graduation from '.././../assets/graduation.webp';

const Campus = () => {


  return (
    <div className='principal_div px-6 sm:px-12 mt-28 mb-10 md:my-28'>
      <section className="section about space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out" id="about" aria-label="about">
        <div className="w-full flex flex-wrap justify-between">

          <figure className="about-banner w-[100%] md:w-[60%] flex justify-center items-center relative">

            <div className="rounded-lg overflow-hidden w-[65%] ">
              <img src={campus} loading="lazy" alt="about banner"
                className="img-cover" />
            </div>

            {/* <img src={principal_name} className='principal_con absolute -bottom-5 left-12 w-[30%] drop-shadow-2xl' alt='' /> */}


            {/* <img src={principal_contact} className='absolute -top-10 right-10 w-[22%] drop-shadow-2xl' alt='' /> */}

            <img src={principal_one} className='absolute top-0 left-0 w-[80%] lg:w-full drop-shadow-2xl -z-10' alt='principal_one img' />



          </figure>

          <div className="about-content w-[100%] md:w-[35%] mt-20 md:mt-0 space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out">

            <p className="text-lg text-[#ff9900] font-medium">Our Campus</p>
            <h2 className='text-2xl lg:text-3xl text-[#000066] font-medium mt-3'>A Place for Learning and Growth</h2>

            <p className='text-zinc-500 mt-1'>Welcome to our campus, a vibrant and dynamic environment designed to foster learning, creativity, and personal growth. Our campus is more than just a building; its a community where students, teachers, and staff come together to create a supportive and inspiring educational experience.</p>
            <div className='flex flex-wrap justify-center mt-4 sm:justify-between space-y-8 reveal-on-scroll opacity-0 translate-y-10
                            transition-all duration-1000 ease-out'>
              <div className='flex flex-col w-[80%] sm:w-[45%] mt-4 justify-center p-3 items-center gap-3'>
                <img className='w-16' src={reading} alt='' />
                <p className='text-zinc-900 text-center text-sm'>Safe and Secure Environment</p>
              </div>
              <div className='flex flex-col w-[80%] sm:w-[45%] mt-4 justify-center p-3 items-center gap-3'>
                <img className='w-16' src={forest} alt='' />
                <p className='text-zinc-900 text-center text-sm'>Eco-Friendly Campus Grounds</p>
              </div>
              <div className='flex flex-col w-[80%] sm:w-[45%] mt-4 justify-center p-3 items-center gap-3'>
                <img className='w-16' src={graduation} alt='' />
                <p className='text-zinc-900 text-center text-sm'>Student Wellness Support</p>
              </div>
              <div className='flex flex-col w-[80%] sm:w-[45%] mt-4 justify-center p-3 items-center gap-3'>
                <img className='w-16' src={education} alt='' />
                <p className='text-zinc-900 text-center text-sm'>Experienced and Dedicated Faculty</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Campus