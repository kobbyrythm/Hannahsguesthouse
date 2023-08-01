'use client'

import React from 'react'
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import Image from 'next/image';
import { Swiper, SwiperSlide, useSwiper, SwiperRef } from 'swiper/react';
import { useEffect, useState } from 'react';
import { FreeMode, Navigation, Controller } from 'swiper/modules';
import 'swiper/css';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
// import TestimonialData from './(sampleData)/testimonials.json';

const Review = () => {

    const swiperr = useSwiper();
    const [SwiperRef, setSwiperRef] = useState(null);

    const prevHandler = () => {
        SwiperRef.slidePrev();
    };

    const nextHandler = () => {
        SwiperRef.slideNext();
    };

    return (

        
        
        <section className='relative mt-96 py-10 md:mt-0 md:py-16 bg-rose-50'>
            <h1
                className={` absolute -top-[60px] left-5 text-[8rem] font-mono italic text-pink-900 font-extrabold`}
            >
                &apos;&apos;
            </h1>
            <Swiper
               
                modules={[Controller, FreeMode]}
                className='catSwiper  w-[90%]'
                breakpoints={{
                    0: {
                        slidesPerView: 1.1,
                        spaceBetween: 10,
                       
                    },
                    480: {
                        slidesPerView: 2.5,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2.1,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 15,
                    },
                    1280: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
                direction='horizontal'
                onSwiper={(swiper) => setSwiperRef(swiper)}
            >
                {/* {TestimonialData?.map((x, index) => (
                    <SwiperSlide key={index}>
                        <div className='bg-white h-80 lg:h-96 rounded-[10px] min-w-[19rem] md:w-[18rem] lg:w-[26rem] flex flex-col my-6 text-black p-8 shadow-3xl drop-shadow-md border-[0.5px] '>
                            <div className='gap-x-4 h-[80%] overflow-hidden'>
                                <h1 className='font-bold mb-2'>{x.title}</h1>
                                <p className='text-black/50 text-sm md:text-base overflow-hidden lg:text-justify'>
                                    {x.review}
                                </p>
                            </div>
                            <div className='mt-4 flex flex-col lg:flex-row gap-y-4 justify-between'>
                                <div>
                                    <h1 className='font-bold'>{x.name}</h1>
                                    <p className='text-black/50'>{x.country}</p>
                                </div>
                                <div className='flex flex-row gap-2 text-amber-400'>
                                    {[...Array(Math.floor(x.rating))].map((_, i) => (
                                        <BiSolidStar key={i} />
                                    ))}
                                    {x.rating - Math.floor(x.rating) >= 0.5 && (
                                        <BiSolidStarHalf />
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))} */}
            </Swiper>
            <div className='flex justify-center items-center p-12'>
                <div className='rounded-full flex justify-between border-[1px] bg-white shadow-md drop-shadow-sm border-gray-200 py-2 px-5 w-32 text-2xl'>
                    <MdNavigateBefore onClick={prevHandler} />
                    <MdNavigateNext onClick={nextHandler} />
                </div>
            </div>
        </section>
    )
}

export default Review