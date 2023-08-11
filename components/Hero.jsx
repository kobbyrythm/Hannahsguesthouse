'use client';
import React, {useState,useEffect} from 'react'
import { BsChevronCompactRight, BsChevronCompactLeft, BsSearch } from "react-icons/bs";
import { Luxurious_Script, Luxurious_Roman } from 'next/font/google';


const luxurious = Luxurious_Script({
    weight: '400',
    subsets: ['latin-ext'],
    display: 'swap',
});

const luxuriousR = Luxurious_Roman({
    weight: '400',
    subsets: ['latin-ext'],
    display: 'swap',
});

const Hero = () => {

    

    const slides = [
        {
            url: '/images/view1.jpeg'
        },
        {
            url: '/images/outsideview1.jpeg'
        },
        {
            url: '/images/single.jpg'
        },
        {
            url: '/images/valuebg.jpg'
        },

    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex-1;
        setCurrentIndex(newIndex);

        }
    
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }
    
    const [checkIn, setCheckIn] = useState (new Date ());

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widget.freetobook.com/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);


    return (

        <section
            style={{
                backgroundImage: 'url(/images/view1.jpeg)',
                backgroundPosition: '50% 75%',
                backgroundSize: '1920px',
                backgroundRepeat: 'no-repeat',
            }}
            className='h-[50vh] lg:h-[75vh] flex justify-center items-center relative'
        >
            <div className=' bg-black/20 h-full w-full flex justify-center items-center flex-col gap-2'>
                <h1
                    className={`${luxurious.className} text-[6rem] md:text-[12rem] text-white leading-[2.5rem] md:leading-[5.5rem]`}
                >
                    Hannah&apos;s
                </h1>
                <h2
                    className={`${luxuriousR.className} text-[1.5rem] md:text-[3.0rem] text-white`}
                >
                    Guest House
                </h2>
            </div>
            {/* Quick Search Bar*/}
            <div className=' bg-white absolute md:left-[12%] lg:left-[25%] md:p-2  p-6 lg:-bottom-8 md:-bottom-12 -bottom-32 rounded-2xl md:rounded-none border-[0.1px] border-black/20 drop-shadow-md flex-row flex justify-between text-sm md:text-lg '>
                <div
                    className='ftb-widget md:w-[600px] lg:w-[800px]'
                    data-id='20201'
                    data-token='R2QXxtCo5naWwHl1KSGAgE16oHBB3Xfsjlk758elAvKw2pW9GR3ClcgObUEzf'
                ></div>
            </div>
        </section>


       
            // <div className="className='max-w-full h-[700px] w-full m-auto pb-8 relative group'">

                

            // </div>
            

      
    );
};

export default Hero;