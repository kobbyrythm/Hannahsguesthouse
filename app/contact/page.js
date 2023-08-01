'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import {
	FaPhone,
	FaAt,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

function Contact() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();
	const onSubmit = (data) => console.log(data);

	return (
		<div>
			<section
				style={{
					backgroundImage: 'url(/images/contact.jpeg)',
					backgroundPosition: '50% 55%',
					backgroundSize: '1920px',
					backgroundRepeat: 'no-repeat',
				}}
				className='h-[20vh] lg:h-[30vh] flex justify-center items-center relative'
			>
				<div className=" absolute top-4 left-4 w-10% flex bg-black/20 text-white rounded-full p-2  cursor-pointer">
					<Link href="/">
						<MdArrowBack size={30} />
					</Link>
				</div>

				<div className='bg-black/60 h-full w-full flex justify-center items-center flex-col gap-2'>
					<h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white'>
						CONTACT
					</h1>
				</div>
			</section>
			<div className='py-10 px-10 lg:px-20'>
				<div className=' flex flex-col md:flex-row p-10 lg:p-20 border-[1px] rounded-lg bg-pink-50/50 gap-y-20'>
					<div className='md:w-[50%] '>
						<div className='flex justify-center items-center mb-10'>
							<h1 className='font-bold text-2xl'>Get in Touch With Us</h1>
						</div>
						{/* Contact Form with React-hook-form */}
						<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
							<label>Full Name</label>
							<input
								placeholder='Enter Full Name'
								{...register('firstName')}
								className='mb-6 border-[1px] px-4 py-2'
							/>

							<label>Email</label>
							<input
								placeholder='Enter Your Email'
								{...register('Email')}
								className='mb-6 border-[1px] px-4 py-2'
							/>

							<label>Message</label>
							<textarea
								multiple={10}
								placeholder='Enter A Message'
								{...register('Message')}
								className='mb-6 border-[1px] px-4 py-2 h-32'
							/>

							<input
								type='submit'
								className='p-5 bg-[#B84770] text-white font-bold'
							/>
						</form>
					</div>
					<div className='md:w-[50%] px-2 md:px-10 lg:px-20'>
						<div className='flex justify-center items-center mb-10'>
							<h1 className='font-bold text-2xl'>Contact Info</h1>
						</div>
						<div className='opacity-50 flex items-center md:items-center flex-col'>
							<div className='flex  items-center pb-5 gap-2 text-sm'>
								<FaLocationDot />
								<p>193 Bon Accord Street, Aberdeen, AB11 6UA, UK</p>
							</div>
							<div className='flex items-center pb-5 text-sm'>
								<span className='mr-2'>
									<FaPhone />
								</span>
								+44 7753662690
							</div>
							<div className='flex items-center text-sm'>
								<span className='mr-2'>
									<FaAt />
								</span>
								hannahsguesthouse@gmail.com
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
