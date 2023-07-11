import React from 'react'
import { FaLocationDot, FaSquareFacebook, FaInstagram, FaAt, FaPhone, FaTiktok } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='flex flex-wrap justify-between px-6 py-6 bg-[#000000] fixed left-0 bottom-0 w-full '>
            <div className='opacity-50 py-4 px-4' >
                <div className='font-bold text-3xl pb-4'><h3>Get In Touch</h3></div>
                <div>
                    <p className="flex items-center pb-3">
                        <span className="mr-2"><FaLocationDot /></span>
                        Bon Accord AB11 6UA
                    </p>


                    <p className='flex items-center pb-3'>
                        <span className='mr-2'><FaPhone /></span>
                        +44 7753662690
                    </p>

                    <p className='flex items-center'>
                        <span className='mr-2'> <FaAt /></span>
                        hannahsguesthouse@gmail.com
                    </p>
                </div>
            </div>

            <div className=' opacity-50 font-bold align-content: center;'>
                <h3 className='font-bold text-3xl pb-4'>Quick Links</h3>
                <Link href='/'>
                    <h3 class="text-center">Home</h3>
                </Link>

                <Link href='rooms'>
                    <h3 class="text-center">Room</h3>
                </Link>

                <Link href='about'>
                    <h3 class="text-center">About</h3>
                </Link>

                <Link href='contact'>
                    <h3 class="text-center">Contact</h3>
                </Link>
            </div>

            <div>
                <h3 className=' font-bold text-3xl  opacity-50 pb-4'>Our Social Media</h3>

                <div class="flex justify-center">
                    <div class="flex text-center gap-5">
                        <span class="text-3xl"><FaSquareFacebook /></span>
                        <span class="text-3xl"><FaInstagram /></span>
                        <span class="text-3xl"><FaTiktok /></span>
                    </div>
                </div>

            </div>


        </footer>
    );
};

export default Footer;