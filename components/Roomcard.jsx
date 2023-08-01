import React from "react";
import { FaBed, FaBath, FaArrowRightLong } from "react-icons/fa6";
import { GiFlowerPot } from "react-icons/gi";
import { BiBed } from 'react-icons/bi';
import { Luxurious_Script} from 'next/font/google';
import Rooms from '../app/(sampleData)/details.json';
import Link from "next/link";


const luxurious = Luxurious_Script({
    weight: '400',
    subsets: ['latin-ext'],
    display: 'swap',
});

const Roomcard = () => {
    return (
        <div>
            <section className=' bg-rose-50 py-10 flex justify-center flex-col items-center'>
                <h1
                    className={`${luxurious.className} mb-8 text-center text-6xl font-bold text`}
                >
                    Guest Rooms
                </h1>
                <div className=' relative pb-32 gap-y-4  px-4 lg:px-5 flex flex-col md:flex-row justify-start items-center  md:gap-2 lg:gap-5 flex-wrap md:gap-y-8'>
                    {Rooms.map((x, index) => (
                        <Link href={`/rooms/${x.name.replace(/ /g, '-')}`}>

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
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Roomcard;
