/* eslint-disable react/prop-types */

const HeroSecond = (props) => {
  return (
    <div>
        <div className='w-full relative h-[30vh] sm:h-[50vh] flex justify-center items-center -z-20 bg-[#f2f7fd] mt-0 lg:mt-0'>
            <h1 className='text-[6vw] md:text-[5vw] font-medium text-zinc-800 mt-8 sm:mt-20'>{props.heading}</h1>
            <h1 className='absolute top-[50%] left-[50%] text-[#ff9900] text-[8vw] md:text-[7vw] -z-10 opacity-20 font-semibold -translate-x-[50%] -translate-y-[70%]'>Cambridge</h1>
        </div>
    </div>
  )
}

export default HeroSecond