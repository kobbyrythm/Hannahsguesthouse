import React from "react";
import { FaBed, FaArrowRightLong } from "react-icons/fa6";

const Roomcard = () => {
    return (
        <div className="w-full lg:h-screen  px-16 flex items-center text-center py-8">

            <div className=" max-w-[1240px] m-auto ">
                <p className='text-3xl font-bold tracking-wide text-left pb-8'>Guest Rooms</p>
                <div className='pb-8 text-right'>
                    <button class="  hover:scale-105 ease-in duration-300  bg-transparent object-right hover:bg-[#B84770] text-black  hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent font-bold py-2 px-4 border border-gray-700 rounded">
                        View all rooms
                    </button>
                </div>
               

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <div className=" max-w-sm rounded overflow-hidden shadow-lg">
                        <div
                            style={{
                                backgroundImage: "url(/images/DeluxeK.jpg)",
                                backgroundSize: "400px",
                                backgroundRepeat: "no-repeat",
                                height: "300px",
                                width: "350px",
                            }}

                        ></div>
                        <div className='px-6 py-8'>
                            <p className=' text-left text-3xl tracking-widdest font-bold'>Deluxe King Room</p>
                            <p className='flex mt-2 tracking-wide text-xl opacity-50'>
                                <span className='mr-2 mt-1.5 text-align '><FaBed /></span>
                                Large Double Bed
                            </p>
                            <div className='mt-5'>
                                <button class=" mt-4 ml-48  bg-transparent object-right hover:bg-[#B84770] text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className=" max-w-sm rounded overflow-hidden shadow-lg">
                        <div
                            style={{
                                backgroundImage: "url(/images/DeluxeK.jpg)",
                                backgroundSize: "400px",
                                backgroundRepeat: "no-repeat",
                                height: "300px",
                                width: "350px",
                            }}

                        ></div>
                        <div className='px-6 py-8'>
                            <p className=' text-left text-3xl tracking-widdest font-bold'>Deluxe King Room</p>
                            <p className='flex mt-2 tracking-wide text-xl opacity-50'>
                                <span className='mr-2 mt-1.5 text-align '><FaBed /></span>
                                Large Double Bed
                            </p>
                            <div className=' mt-5'>
                                <button class=" mt-4 ml-48  bg-transparent object-right hover:bg-[#B84770] text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className=" max-w-sm rounded overflow-hidden shadow-lg">
                        <div
                            style={{
                                backgroundImage: "url(/images/DeluxeK.jpg)",
                                backgroundSize: "400px",
                                backgroundRepeat: "no-repeat",
                                height: "300px",
                                width: "350px",
                            }}

                        ></div>
                        <div className='px-6 py-8'>
                            <p className=' text-left text-3xl tracking-widdest font-bold'>Deluxe King Room</p>
                            <p className='flex mt-2 tracking-wide text-xl opacity-50'>
                                <span className='mr-2 mt-1.5 text-align '><FaBed /></span>
                                Large Double Bed
                            </p>
                            <div className='mt-5'>
                                <button class=" mt-4 ml-48  bg-transparent object-right hover:bg-[#B84770] text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                                    View More
                                </button>
                            </div>
                        </div>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default Roomcard;

