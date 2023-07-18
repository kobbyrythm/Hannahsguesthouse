'use client';
import React, {useState} from 'react'
import { BsChevronCompactRight, BsChevronCompactLeft, BsSearch } from "react-icons/bs";


const Hero = () => {

    const slides = [
        {
            url: '/images/DelukeK.jpg'
        },
        {
            url: '/images/mainbg.jpg'
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

    return (
        <div className='max-w-full h-[700px] w-full m-auto pb-8 relative group'>
            <div style={{
                backgroundImage: `url(${slides[currentIndex].url})`
            }}
                className='w-full h-full rounded-lg bg-center bg-cover duration-500'>
            
            <div className = 'py-56 px-56'>
                    <p className=' scriptedfont text-center text-white  font-bold tracking-wider text-[120px] font-luxurious '>Hannah's</p>
                    <p className='text-center text-white tracking-wide text-[60px]'>GuestHouse</p>
            </div>

            </div>

            <div className ='hidden group-hover:block absolute top-[50%] right-5 text-2xl bg-black/20 text-white rounded-full p-2  cursor-pointer'>
                < BsChevronCompactRight onClick={nextSlide} size={30}/>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] left-5 text-2xl bg-black/20 text-white rounded-full p-2  cursor-pointer'>
                 < BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>

            <div className='flex absolute h-[100px] w-[900px] mx-96 rounded-3xl shadow-sm border -my-8 bg-white  text-black items-center  '>

                <div className='flex grid-cols-4 gap-8'>
                    <div className=' py-4 px-8'>
                        <p className='font-bold pb-3 px-4 tracking-wide'>CHECK IN</p>
                        <p className='px-4 text-sm opacity-50'>Add date</p>

                    </div>

                    <div className=' py-4 px-8'>
                        <p className='font-bold pb-3 px-4 tracking-wide'>CHECK OUT</p>
                        <p className='px-4 text-sm opacity-50'>Add date</p>
                       

                    </div>
                    
                    <div className='py-4 px-8'>
                        <p className='font-bold pb-3 px-4 tracking-wide'>GUESTS</p>
                        <select className='w-full text-sm opacity-50 leading-tight item-center  focus:outline-none '>
                            <option>Add Guests</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        
                    </div>

                    <div className=' pt-4 pl-40  hover:scale-105 ease-in duration-300  cursor-pointer '>
                        
                        <div className=' hover:bg-[#b66482] bg-[#B84770] px-3 py-3 rounded-xl'>
                            <BsSearch size={30} />
                        </div>
                      


                    </div>

                </div>

            </div>

        </div>
    );
};

export default Hero;