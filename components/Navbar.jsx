'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenuAlt2 } from 'react-icons/hi';

const Navbar = () => {
	const [show, setShow] = useState(false);

	const handleMobileMenu = () => {
		setShow(!show);
	};

	return (
		<div className='flex justify-between px-12 py-4 bg-[#B84770]'>
			<div>
				<Image src='/Logo.png' height={55} width={55} alt='HannahsLogo' />
			</div>
			<div className='flex-row gap-5 items-center hidden md:flex lg:flex'>
				<Link href='/'>
					<h3>Home</h3>
				</Link>
				<Link href='contact'>
					<h3>Rooms</h3>
				</Link>
				<Link href='about'>
					<h3>About</h3>
				</Link>
				<Link href='contact'>
					<h3>Contact</h3>
				</Link>
			</div>
			<div>
				<button className='hidden p-2 justify-center items-center md:flex text-black bg-white border-r-4'>
					Book Now
				</button>
			</div>
			<button className='flex md:hidden text-2xl' onClick={handleMobileMenu}>
				<HiMenuAlt2 />
			</button>
			<div
				className={
					!show
						? 'fixed right-[-300px] top-0 bg-blue-950 z-10 w-[300px] h-[100%] transition-all'
						: 'fixed right-0 top-0 z-10 h-[100%] w-[500px]  bg-blue-950 transition-all '
				}
			>
				<div className='flex justify-between px-10 py-5'>
					<Image src='/Logo.png' height={35} width={35} alt='hannahsLogo' />
					<button onClick={handleMobileMenu}>X</button>
				</div>
				Mobile Menu
			</div>
		</div>
	);
};

export default Navbar;
