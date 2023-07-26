import React from 'react'
const Values = () => {
    return (

        <div className = ''>
            <section>
                <div
                    style={{
                        backgroundImage: 'url(images/mainbg.jpg)',
                        backgroundPosition: '50% 75%',
                        backgroundSize: '1920px',
                        backgroundRepeat: 'no-repeat',
                        height: '400px',
                    }}
                    className='relative w-[100vw]  my-28 '
                >
                    <div className=' bg-[#B84770] flex p-10 md:absolute h-auto w-[100%] md:w-[550px] -top-20 right-20 items-center text-lg flex-col text-white '>
                        <h1 className='text-white text-xl font-semibold '>Values</h1>
                        <h1 className='self-start mt-4 font-medium'>Warm Hospitality</h1>
                        <p className=' text-white/60'>
                            At our guest house, we take pride in providing warm and genuine
                            hospitality to all our guests. From the moment you step through
                            our doors, you&apos;ll be greeted with a friendly smile and a
                            heartfelt welcome.
                        </p>
                        <h1 className='self-start mt-4 font-medium'>Tranquil Retreat</h1>
                        <p className=' text-white/60'>
                            Escape from the hustle and bustle of everyday life and immerse
                            yourself in a serene and tranquil retreat at our guest house.
                        </p>
                        <h1 className='self-start mt-4 font-medium'>
                            Exquisite Accomodations
                        </h1>
                        <p className=' text-white/60'>
                            Indulge in the luxury of our exquisite accommodations, designed
                            with your comfort in mind. Each room is thoughtfully decorated and
                            furnished to create a cozy and elegant ambiance.
                        </p>
                    </div>
                </div>
            </section>

        </div>
        
    )
}

export default Values