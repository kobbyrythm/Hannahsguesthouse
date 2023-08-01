import React from 'react'

const Welcome = () => {
    return (
        <div className=''>
            <section className='py-20 md:py-30 flex items-center text-base flex-col mt-20 md:mt-0'>
                <h1 className='  text-2xl md:text-4xl  font-semibold tracking-wider'>Welcome to Hannah&apos;s Guest House</h1>
                <div className='flex flex-col lg:flex-row mt-10 md:mt-16 w-full gap-12'>
                    <div className='lg:w-[50%] flex flex-col justify-center items-center px-10 md:px-20 text-justify '>
                        {' '}
                        <p className=''> 
                            Welcome to Hannah&apos;s Guest House! We are delighted to invite
                            you to experience a warm and welcoming stay at our charming guest
                            house in the heart of Aberdeen. Nestled in the vibrant
                            neighborhood of Bon Accord, our establishment offers a delightful
                            blend of comfort, convenience, and Scottish hospitality
                        </p>
                        <br />
                        <p className=''>
                            Whether you are a leisure traveler seeking a cozy retreat or a
                            business traveler in need of a comfortable base, Hannah&apos;s
                            Guest House is the perfect choice. Our dedicated team is committed
                            to ensuring your stay is nothing short of exceptional, providing
                            you with a home away from home. From our tastefully appointed
                            rooms to our personalized services, we strive to create an
                            unforgettable experience for each and every guest. Situated in
                            close proximity to Aberdeen&apos;s renowned attractions, shopping
                            destinations, and cultural sites, our guest house serves as an
                            ideal starting point for exploring the beauty and rich heritage of
                            this captivating city.
                        </p>
                    </div>
                    <div
                        className='lg:w-[50%] h-[350px] lg:h-auto flex justify-center items-center mt-10 lg:mt-0 bg-cover mx-6'
                        style={{
                            backgroundImage: 'url(images/outsideview1.jpeg)',
                            backgroundPosition: '50% 75%',
                            backgroundRepeat: 'no-repeat',
                            height: "400px",
                            width: "500px",
                        }}
                    ></div>
                </div>
            </section>
           

        </div>
    )
}

export default Welcome;