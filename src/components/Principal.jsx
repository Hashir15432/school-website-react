import './Principal.css';
import about_banner from '../assets/principal_banner.webp';
import principal_one from '../assets/about-shape-3.webp';
import principal_name from '../assets/principal_name.webp';
import principal_contact from '../assets/principal_contact.webp';

const Principal = () => {


  return (
    <div className='principal_div px-6 sm:px-12 mt-28 mb-10 md:my-40 space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out
'>
        <section className="section about space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out
" id="about" aria-label="about">
        <div className="w-full flex flex-wrap justify-between">

          <figure className="about-banner w-[100%] md:w-[60%] flex justify-center items-center relative space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out">
            <div className="rounded-lg overflow-hidden w-[65%] space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out
">
              <img src={about_banner} loading="lazy" alt="about banner"
                className="img-cover" />
            </div>
            
            <img src={principal_name} className='principal_con absolute -bottom-5 left-12 w-[30%] drop-shadow-2xl' alt='' />


            <img src={principal_contact} className='absolute -top-10 right-10 w-[22%] drop-shadow-2xl' alt='' />

            <img src={principal_one} className='absolute top-0 left-0 lg:-top-16 lg:-left-14 w-[80%] lg:w-full drop-shadow-2xl -z-10' alt='' />



          </figure>

          <div className="about-content w-[100%] md:w-[35%] mt-20 md:mt-0 space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out
">

            <p className="text-lg text-[#ff9900] font-medium">Our Principal</p>
            <h2 className='text-2xl lg:text-3xl text-[#000066] font-semibold'>Adeel Azmat</h2>
            <p className="text-lg text-[#ff9900] font-medium mt-3 mb-1">Qualification : </p>

            <p className='text-[#000066]'>M.A (Eng., Hist. Sociology and Psychology), M.Ed., M.Phil., Ph.D (pursuing)</p>

            <p className="text-lg text-[#ff9900] font-medium mt-3 mb-1">Principals Message : </p>
            <p className='text-zinc-500'>Our team of passionate educators is committed to providing a supportive and engaging learning environment. We believe in the power of collaboration between school and home to guide our students toward success.</p>
            {/* <ul className="about-list">

              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                <span className="span">Expert Trainers</span>
              </li>

              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                <span className="span">Online Remote Learning</span>
              </li>

              <li className="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                <span className="span">Lifetime Access</span>
              </li>

            </ul> 

            <img src="./assets/images/about-shape-4.svg" width="100" height="100" loading="lazy" alt=""
              className="shape about-shape-4" /> */}

          </div>

        </div>
      </section>
    </div>
  )
}

export default Principal