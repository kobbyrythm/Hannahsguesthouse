import React from "react";
import { FaBed, FaBath, FaArrowRightLong } from "react-icons/fa6";
import { GiFlowerPot } from "react-icons/gi";
import { BiBed } from 'react-icons/bi';
import { Luxurious_Script, Luxurious_Roman } from 'next/font/google';
// import Rooms from '../(sampleData)/details.json';


const luxurious = Luxurious_Script({
    weight: '400',
    subsets: ['latin-ext'],
    display: 'swap',
});


const Roomcard = () => {
    return (
        <div className=" py-20 bg-slate-400 pb-32 px-6 lg:px-20 flex flex-col md:flex-row justify-center items-center gap-10 flex-wrap">
            <section className=' bg-rose-50 py-10 flex justify-center flex-col items-center'>
                <h1
                    className={`${luxurious.className} mb-8 text-center text-6xl font-bold text`}
                >
                    Guest Rooms
                </h1>
                <div className=' relative pb-32 gap-y-4  px-4 lg:px-5 flex flex-col md:flex-row justify-start items-center  md:gap-2 lg:gap-5 flex-wrap md:gap-y-8'>
                    {Rooms.map((x, index) => (
                        <div
                            key={index}
                            className='w-[350px] border-black/10 border-2 flex flex-col rounded-lg overflow-hidden'
                        >
                            <div
                                className='bg-cover h-[200px]'
                                style={{
                                    backgroundImage: `url(${x.image})`,
                                    backgroundPosition: '50% 75%',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            />
                            <div className='min-h-[80px] px-4 py-5 bg-white'>
                                <h1 className='font-semibold text-ellipsis line-clamp-1'>
                                    {x.name}
                                </h1>
                                <p className='text-xs flex flex-row gap-1'>
                                    <BiBed />
                                    {x.bed}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Roomcard;
