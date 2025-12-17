import { useState, useEffect } from 'react';
import './Review.css';
import quotes from '.././../assets/quotes.webp';

const testimonials = [
  {
    img: quotes,
    name: 'Person 1',
    text: 'My child has improved so much since attending this school. Highly recommend!'
  },
  {
    img: quotes,
    name: 'Person 2',
    text: `The teachers genuinely care about each student's success. We have seen amazing growth in our child's confidence and abilities.`
  },
  {
    img: quotes,
    name: 'Person 3',
    text: 'The school provides a well-rounded education that includes arts, sports, and academics. Our child looks forward to going to school every day.'
  }
];

const Review = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentActive, setCurrentActive] = useState(0);
  const testimSpeed = 4500;


  const playSlide = (slide) => {
    // console.log("Hii");
    if (slide < 0) {
      slide = testimonials.length - 1;
    }
    if (slide > testimonials.length - 1) {
      slide = 0;
    }
    setCurrentSlide(slide);
    setCurrentActive(slide);
  };

  useEffect(() => {
    // playSlide(currentSlide);
    

    const timer = setTimeout(() => {
      playSlide(currentSlide + 1);
    }, testimSpeed);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  const handleArrowClick = (direction) => {
    if (direction === 'left') {
      playSlide(currentSlide - 1);
    } else {
      playSlide(currentSlide + 1);
    }
  };

  const handleDotClick = (index) => {
    console.log(index);
    // setCurrentSlide(index);
    playSlide(index);
  };

  return (
    <div id="testim" className="testim mt-20 space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out">
      <h1 className='w-[90%] sm:w-[70%] md:w-[50%] m-auto font-semibold text-zinc-700 text-[1.5rem] sm:text-[4vw] md:text-[3vw] text-center'>Parents Words Are The Key
      To Happy Kids</h1>
      <div className="wrap ">
        <span id="left-arrow" className="arrow left" onClick={() => handleArrowClick('left')}>
          &#10094;
        </span>
        <span id="right-arrow" className="arrow right" onClick={() => handleArrowClick('right')}>
          &#10095;
        </span>
        <div id="testim-content" className="cont">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`${
                index === currentActive ? 'active' : ''
              } ${index !== currentActive && index === currentSlide ? 'inactive' : ''}`}
            >
              <div className="img">
                <img src={testimonial.img} alt={testimonial.name} />
              </div>
              <h2>{testimonial.name}</h2>
              <p>{testimonial.text}</p>
            </div>
          ))}
        </div>
        <div id="testim-dots" className="dots">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentActive ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
