import React from 'react'
import { FaLocationDot, FaSquareFacebook, FaInstagram, FaAt, FaPhone, FaTiktok } from "react-icons/fa6";
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className='flex flex-wrap justify-between bg-[#000000] pb-20 pt-20 px-60  justify-items-center fixed left-0 bottom-0 w-full  text-white '>
            <div className=' py-4 px-4'>
                <div className='font-bold text-2xl pb-4'><h3>Get In Touch</h3></div>
                <div className='opacity-50'>
                    <p className="flex  items-center pb-3">
                        <span className="mr-2"><FaLocationDot /></span>
                        Bon Accord AB11 6UA
                    </p>
                    <p className='flex items-center pb-3'>
                        <span className='mr-2'><FaPhone /></span>
                        +44 7753662690
                    </p>
                    <p className='flex items-center'>
                        <span className='mr-2'><FaAt /></span>
                        hannahsguesthouse@gmail.com
                    </p>
                </div>
            </div>

            <div className=' font-bold text-center '>
                <h3 className='font-bold text-2xl pb-4'>Quick Links</h3>
                <div className='opacity-50'>
                    <Link href='/'>
                        <h3>Home</h3>
                    </Link>
                    <Link href='rooms'>
                        <h3>Room</h3>
                    </Link>
                    <Link href='about'>
                        <h3>About</h3>
                    </Link>
                    <Link href='contact'>
                        <h3>Contact</h3>
                    </Link>
                </div>
                
            </div>

            <div >
                <h3 className='font-bold text-2xl pb-4'>Our Social Media</h3>
                <div className="flex justify-center">
                    <div className="flex opacity-50 text-center gap-5">
                        <span className="text-3xl"><FaSquareFacebook /></span>
                        <span className="text-3xl"><FaInstagram /></span>
                        <span className="text-3xl"><FaTiktok /></span>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;