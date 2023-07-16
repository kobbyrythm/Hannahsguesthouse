import React from 'react'
import { BsFillStarFill, BsStarHalf } from "react-icons/bs";
import Image from 'next/image';

const Review = () => {
    return (

        
        
        <div className='w-full h-[500px] p-2 flex items-center  my-16 bg-[#EDA0BC] ' >
            <div className=''>
                <Image
                    priority
                    src= '/images/review.svg'
                    width={55}
                    height={55}
                    alt="comma"
                />
            </div>

            <div className=' grid md:grid-cols-2 px-8 lg:grid-cols-3 gap-8 '>
                <div className='bg-white rounded overflow-hidden shadow-md max-w-[500px] '>

                    <div className='font-bold text-xl py-8 px-8'>
                        <p>Lovely good value accommodation in a nice part of town.</p>

                    </div>
                    <div className='text-sm  px-8'>
                        <p>Lovely single room in a nice part of town. Shared bathroom which was nice and clean and towels provided. Tea and coffee too.</p>
                    </div>

                    <div className='grid grid-cols-2 gap-8 py-8 px-8'>
                        <div className='flex-col'>
                            <p className='font-bold text-2xl tracking-wide'>Lynn</p>
                            <p className='text-sm opacity-50'>United Kingdom</p>
                        </div>

                        <div className=' flex grid-rows py-6 pl-8 justify-items-start text-right text-[#FFC107] gap-4'>
                            <div className='flex-row'>
                                <BsFillStarFill />
                            </div> <div className='flex-row'>
                                <BsFillStarFill />
                            </div>
                            <div className='flex-row'>
                                <BsFillStarFill />
                            </div>
                            <div className='flex-row'>
                                <BsFillStarFill />
                            </div>
                            <div className='flex-row'>
                                <BsStarHalf />
                            </div>
                        </div>

                    </div>

                </div>

                <div className='bg-white rounded overflow-hidden shadow-md max-w-[500px] '>

                    <div className='font-bold text-xl py-8 px-8'>
                        <p>I enjoyed my stay in Aberdeen.</p>

                    </div>
                    <div className='text-sm  px-8'>
                        <p>The room was spacious, clean, and cozy.
                            There was a kettle, a small fridge, plates, mugs, and even a UK plug adapter in the room!
                            The location is great. 5-10 mins walk to the main street, 5 mins walk to the Duthie park.
                            Hannah was a lovely host, super friendly and lovely!
                            Highly recommend, and would definitely stay again!

                            .</p>
                    </div>

                    <div className='grid grid-cols-2 gap-8 py-8 px-8'>
                        <div className='flex-col text-'>
                            <p className='font-bold text-2xl tracking-wide'>Yuki</p>
                            <p className='text-sm opacity-50'>Italy</p>
                        </div>

                        <div className=' flex grid-rows py-6 pl-8 justify-items-start text-right text-[#FFC107] gap-4'>
                            <div className='flex-row'>
                                <BsFillStarFill />
                            </div> <div className='flex-row'>
                                <BsFillStarFill />
                            </div>
                            <div className='flex-row'>
                                <BsFillStarFill />
                            </div>
                            <div className='flex-row'>
                                <BsFillStarFill />
                            </div>
                            <div className='flex-row'>
                                <BsStarHalf />
                            </div>
                        </div>

                    </div>

                </div>

                <div className='bg-white rounded overflow-hidden shadow-md max-w-[500px] '>

                    <div className='font-bold text-xl py-8 px-8'>
                        <p>Exceptional.</p>

                    </div>
                    <div className='text-sm  px-8'>
                        <p>Was clean, tidy and had everything that I needed. Very friendly owners. Was very central to the centre, just a short walk away from the main street of the city centre. Would definitely stay again.</p>
                    </div>

                    <div className='grid grid-cols-2 gap-8 py-8 px-8'>
                        <div className='flex-col'>
                            <p className='font-bold text-2xl tracking-wide'>Derek</p>
                            <p className='text-sm opacity-50'>United Kingdom</p>
                        </div>

                        <div className=' flex grid-rows py-6 pl-8 justify-items-start text-right text-[#FFC107] gap-4'>
                            <div className='flex-row'>
                                <BsFillStarFill />
                            </div> <div className='flex-row'>
                                <BsFillStarFill />
                            </div>
                            <div className='flex-row'>
                                <BsFillStarFill />
                            </div>
                            <div className='flex-row'>
                                <BsFillStarFill />
                            </div>
                            <div className='flex-row'>
                                <BsStarHalf />
                            </div>
                        </div>

                    </div>

                </div>

            </div>



        </div>
    )
}

export default Review