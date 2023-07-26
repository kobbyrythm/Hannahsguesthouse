import React from 'react'
import Link from "next/link";
import { MdArrowBack, MdBed, MdLiving, MdFreeBreakfast, MdOutlineLocalParking, MdOutlineWifi } from "react-icons/md";

const SelectRoom = (props) => {
  return (
      <div className=" flex-col h-full w-full">
          <div className="w-full h-[250px] pb-8">
              <div
                  style={{
                      backgroundImage: "url(/images/DeluxeK.jpg)",
                      backgroundPosition: "50% 45%",
                      backgroundSize: "1920px",
                      backgroundRepeat: "no-repeat",
                      height: "250px",
                  }}
              >
                  <div className="flex justify-center">
                      <p className="font-bold py-8 text-[60px] tracking-wider text-white ">
                          Rooms
                      </p>
                  </div>
                  <div className=" ">
                      <div className="w-12 bg-black/20 text-white rounded-full p-2 cursor-pointer">
                          <Link href="/">
                              <MdArrowBack size={30} />
                          </Link>
                      </div>
                  </div>

              </div>
          </div>
          <div className="  h-[700px]  py-16 px-16 my-16 mx-32 border border-black rounded-lg">
              <div className="grid py-2 md:grid-cols-2 gap-8 ">
                  <div className="flex ">
                      <div
                          className="py-8 rounded shadow-lg"
                          style={{
                              backgroundImage: "url(/images/outside.png)",
                              backgroundPosition: "50% 50%",
                              backgroundSize: "600px",
                              backgroundRepeat: "no-repeat",
                              height: "350px",
                              width: "400px",
                          }}
                      ></div>
                  </div>

                  <div className="">
                      <div className="flex  flex-row gap-16 ">
                          <p className=" font-bold text-3xl">Single Room</p>
                          <p className=" text-3xl">£50</p>
                      </div>
                      <div className="divide-y divide-gray-400 ">
                          <p className="py-8 tracking-wide text-sm ">
                              
                          </p>

                          <div className="flex-row py-4">
                              <div className="border w-32 px-4 border-gray-500 rounded-lg py-2">
                                  <MdBed />
                                  <p className="py-2  text-[15px]">1 Single Bed</p>
                              </div>
                          </div>
                          <div className="grid md:grid-cols-2 py-4 gap-2 md:gap-4 opacity-60">
                              <div className=' '>
                                  <MdOutlineWifi />
                                  <p className=' text-md tracking-wide pt-1'>Free Wifi</p>

                                  <div className='py-8'>
                                      <MdOutlineLocalParking />
                                      <p className=' text-md tracking-wide pt-1'>Parking Available</p>
                                  </div>
                              </div>
                              <div className=' '>
                                  <MdFreeBreakfast />
                                  <p className=' text-md tracking-wide pt-1'>Breakfast</p>

                                  <div className='py-8'>
                                      <MdLiving />
                                      <p className=' text-md tracking-wide pt-1'>Living Room</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className=' grid grid-cols-2  '>

                          <div className='' >
                              <button class=" mt-4 ml-48  bg-transparent object-right hover:bg-[#B84770] text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                                  View More
                              </button>
                          </div>

                          <div className=' '>
                              <button class=" mt-4 ml-40  bg-transparent  hover:bg-[#B84770] text-black font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                                  View More
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default SelectRoom