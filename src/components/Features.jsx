import apple_and_books from '../assets/apple-and-books.webp';
import games from '../assets/games.webp';
import open_book from '../assets/open-book.webp';
import school from '../assets/school.webp';
import seesaw from '../assets/seesaw.webp';
import sister_and_brother from '../assets/sister-and-brother.webp';
import { useEffect } from 'react';
const Features = () => {

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


  const featuresList = [
    {
      icon: seesaw,
      heading: "Infrastructure",
      content: "Classrooms with interactive whiteboards and sports fields."
    },
    {
      icon: apple_and_books,
      heading: "Certified Tutors",
      content: "We have a team of highly qualified and certified tutors."
    },
    {
      icon: sister_and_brother,
      heading: "small Class Size",
      content: "Focused learning with fewer students per class."
    },
    {
      icon: open_book,
      heading: "Library",
      content: "A library with a variety of books and resources."
    },
    {
      icon: games,
      heading: "Activities",
      content: "Engaging extracurricular programs including music, arts, and sports."
    },
    {
      icon: school,
      heading: "Safety First",
      content: " The safety and well-being of our students are our top priorities."
    },
  ]
  return (
    <div>
      <div className="content-side">
        <h1 className='mb-10 w-[90%] sm:w-[70%] md:w-[50%] m-auto font-semibold text-zinc-800 text-[1.5rem] sm:text-[4.8vw] md:text-[3.8vw] text-center'>Welcome to <span className='text-[#ff9900]'>Cambridge</span></h1>
        <div className="inner-main-box space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out
">
          {
            featuresList.map((feature) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="boxes box-1">
                  <div className="feature-box-img">
                    <img src={feature.icon} alt="" />
                  </div>
                  <h4>{feature.heading}</h4>
                  <div className="feature-line"></div>
                  <p className="text-cont">{feature.content}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Features