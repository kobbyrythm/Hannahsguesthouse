import React from "react";
import { FaBed, FaBath, FaArrowRightLong } from "react-icons/fa6";
import { GiFlowerPot } from "react-icons/gi";
import { BiBed } from 'react-icons/bi';

const Roomcard = () => {
    return (
        <div className=" py-20 bg-slate-400 pb-32 px-6 lg:px-20 flex flex-col md:flex-row justify-center items-center gap-10 flex-wrap">
            <div className="w-[350px]  border-black/30 border-2 flex flex-col rounded-lg overflow-hidden">
                <div
                    className="bg-cover h-[200px]"
                    style={{
                        backgroundImage: "url(images/bed1.jpeg)",
                        backgroundPosition: "50% 75%",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <div className="h-[80px] px-4 py-5 bg-white">
                    <h1 className="font-semibold">SuperKing Room Ensuite</h1>
                    <p className=" text-xs flex flex-row gap-1">
                        <BiBed />
                        Large Double Bed
                    </p>
                    <p className=" text-xs flex flex-row gap-1">
                        <FaBath />
                        Bathroom
                    </p>
                </div>
            </div>
            <div className="w-[350px]  border-black/30 border-2 flex flex-col rounded-lg overflow-hidden">
                <div
                    className="bg-cover h-[200px]"
                    style={{
                        backgroundImage: "url(images/mainbg.jpg)",
                        backgroundPosition: "50% 75%",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <div className="h-[80px] px-4 py-5 bg-white">
                    <h1 className="font-semibold">Kingsize Room Ensuite</h1>
                    <p className=" text-xs flex flex-row gap-1">
                        <BiBed />
                        Large Double Bed
                    </p>
                    <p className=" text-xs flex flex-row gap-1">
                        <GiFlowerPot />
                        Garden
                    </p>
                </div>
            </div>
            <div className="w-[350px]  border-black/30 border-2 flex flex-col rounded-lg overflow-hidden">
                <div
                    className="bg-cover h-[200px]"
                    style={{
                        backgroundImage: "url(images/DeluxeK.jpg)",
                        backgroundPosition: "50% 75%",
                        backgroundRepeat: "no-repeat",
                    }}
                />
                <div className="h-[80px] px-4 py-5 bg-white">
                    <h1 className="font-semibold">Double Room</h1>
                    <p className=" text-xs flex flex-row gap-1">
                        <BiBed />
                        Double Bed
                    </p>
                    <p className=" text-xs flex flex-row gap-1">
                        <FaBath />
                        Shared Bathroom
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Roomcard;
