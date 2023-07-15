import React from "react";
import { FaBed, FaArrowRightLong } from "react-icons/fa6";

const Roomcard = () => {
    return (
        <div className="w-full lg:h-screen p-2 flex items-center text-center py-16">

            <div className=" max-w-[1240px] m-auto ">
                <p className='text-3xl font-bold tracking-wide text-left pb-8'>Guest Rooms</p>
                <div className='pb-8 text-right'>
                    <button class=" bg-blue-[#C97291] hover:scale-105 ease-in duration-300 text-black font-bold py-2 px-4 border border-gray-700 rounded">
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

//  <div className='col-span-1 '>

//                   <h2 className='py-4  text-xl uppercase tracking-widdest text-left'>Room Types</h2>
//                   <div style={{
//                       backgroundImage: 'url(/images/DeluxeK.jpg)',
//                       backgroundSize: '400px',
//                       backgroundRepeat: 'no-repeat',
//                       height: '400px',
//                       width: '350px'
//                   }}
//                       className='rounded-md shadow-md'
//                   >

//                   </div>

//               </div>
//               <div className='col-span-1 grid-row-2  py-10 '>
//                   <div className='row-span-1 '>
//                       <div style={{
//                           backgroundImage: 'url(/images/king.jpg)',
//                           backgroundSize: '400px',
//                           backgroundRepeat: 'no-repeat',
//                           backgroundPosition: '50% 45%',
//                           height: '180px',
//                           width: '350px',

//                       }}
//                           className='rounded-md shadow-md'
//                       >
//                       </div>

//                   </div>
//                   <div className='row-span-1  py-6'>
//                       <div style={{
//                           backgroundImage: 'url(/images/single.jpg)',
//                           backgroundSize: '400px',
//                           backgroundRepeat: 'no-repeat',
//                           backgroundPosition: '50% 60%',
//                           height: '180px',
//                           width: '350px'
//                       }}
//                           className='rounded-md shadow-md  '
//                       >
//                       </div>

//                   </div>
//                   <h1 className='py-4 tracking-widdest text-right text-l text-gray-500 underline cursor-pointer'>See More</h1>

//               </div>
