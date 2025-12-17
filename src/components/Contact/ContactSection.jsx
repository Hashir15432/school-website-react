import { useState } from 'react'
import './ContactSection.css'
import { FaLocationDot, FaPhoneFlip, FaRegClock } from "react-icons/fa6";
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import { useEffect } from 'react';
const ContactSection = () => {

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

    const [contactData, setContactData] = useState({
        name: "",
        email: "",
        contact: "",
        message: ""
    })

    function changeHandler(e) {
        setContactData({
            ...contactData, [e.target.name]: e.target.value
        })
    }

    async function submitContact() {
        try {
            await axios.post('https://api.sheetbest.com/sheets/3206aff8-2bb8-4e97-bf89-81056b2bcfa2', contactData)
                .then((res) => {
                    // console.log(res);
                    if (res.status === 200) {
                        setContactData({
                            name: "",
                            email: "",
                            contact: "",
                            message: ""
                        })
                        Swal.fire({
                            title: "Message Sent",
                            // text: "You ",
                            icon: "success"
                        });
                    }
                    else {
                        Swal.fire({
                            icon: "error",
                            title: "Try Again",
                            text: "Something went wrong!",
                            // footer: '<a href="#">Why do I have this issue?</a>'
                        });
                    }
                })
        } catch (err) {
            console.log(err);
        }
    }



    return (
        <div className='px-0 lg:px-[75px] flex justify-center items-center my-20 space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out'>
            <div className="container">
                <div className="contactInfo space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out">
                    <div>
                        <h2>Contact Info</h2>
                        <div className='flex flex-col gap-7 mt-4 space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out'>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaPhoneFlip className='text-[#fff] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Call</h3>
                                    <p className='text-zinc-600 text-sm'>+92 827875125</p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-3 '>
                                <div>
                                    <FaRegClock className='text-[#fff] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Work Time</h3>
                                    <p className='text-zinc-600 text-sm'>Mon - Fri 9 AM - 3 PM</p>
                                </div>
                            </div>
                            <div className='flex justify-start items-center gap-3'>
                                <div>
                                    <FaLocationDot className='text-[#fff] text-xl' />
                                </div>
                                <div>
                                    <h3 className='font-medium'>Address</h3>
                                    <p className='text-zinc-600 text-sm'>Islamabad, Punjab</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contactForm border border-[#ff9900] space-y-8 reveal-on-scroll opacity-0 translate-y-10
                        transition-all duration-1000 ease-out">
                    <h2>Send a Message</h2>
                    <div className="formBox ">
                        <div className="inputBox w50">
                            <input type="text" name="name" value={contactData.name} onChange={changeHandler} required />
                            <span>Name</span>
                        </div>
                        <div className="inputBox w50">
                            <input type="email" name="email" value={contactData.email} onChange={changeHandler} required />
                            <span>Email Address</span>
                        </div>
                        <div className="inputBox w50">
                            <input
                                type="tel"
                                name="contact"
                                value={contactData.contact}
                                onChange={changeHandler}
                                required
                            />
                            <span>Contact</span>
                        </div>

                        <div className="inputBox w100">
                            <textarea name='message' onChange={changeHandler} value={contactData.message} required></textarea>
                            <span>Write your message here...</span>
                        </div>
                        <div className="inputBox w100">
                            <input type="submit" onClick={submitContact} value="Send" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection