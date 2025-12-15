import './SectionFirst.css'
import one from '../assets/one_pic.webp';
import two from '../assets/two_pic.webp';
import three from '../assets/three_pic.webp';
import four from '../assets/four_pic.webp';
import { useEffect } from 'react';
const SectionFirst = () => {

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
        <div>
            <div className="divisions division_4 pt-10 pb-20 " onMouseMove="animate_balls(event)">
                <div className="title_header space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out

">
                    <h2 className="text-[1.5rem] sm:text-[4vw] md:text-[3vw] title medium mb-4 text-zinc-800 font-semibold">We promise best future for your kids</h2>
                    {/* <p className='mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p> */}
                    {/* <aside class="fixed_flex">
                    <a href="#" class="btn btn_1">Explore more</a>
                    <i class="fa fa-angle-right"></i>
                    <a href="javascript:void(0)">Gallery Portfolio</a>
                </aside> */}
                </div>
                <div className="cards space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out">
                    <span className="ball"></span>
                    <span className="ball"></span>
                    <span className="ball"></span>
                    <span className="ball"></span>
                    <section className="fixed_flex space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out">
                        <figure className="flex_content">
                            <img src={one} alt="" loading="lazy" />
                        </figure>
                        <figure className="flex_content">
                            <img src={two} alt="" loading="lazy" />
                        </figure>
                        <figure className="flex_content">
                            <img src={three} alt="" loading="lazy" />
                        </figure>
                        <figure className="flex_content">
                            <img src={four} alt="" loading="lazy" />
                        </figure>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default SectionFirst