import React from 'react'

const Welcome = () => {
    return (
        <div className='flex justify-center relative h-[550px] w-full  pt-16  my-16 '>
            <div className=' absolute '>
                <h1 className='font-bold text-3xl tracking-wider  '>Welcome To Hannah's Guest House</h1>
            </div>
            <div className='grid  mx-auto md:grid-cols-2  gap-8 py-16 px-8'>
                <div className=' px-8 py-8'>
                    <div className='px-8 text-sm'>
                        <p className='py-4 '>
                            Welcome to Hannah's Guest House! We are delighted to invite you to experience a warm and welcoming stay at our charming guest house in the heart of Aberdeen.
                            Nestled in the vibrant neighborhood of Bon Accord, our establishment offers a delightful blend of comfort, convenience, and Scottish hospitality
                        </p>
                        <p className='py-4 '>
                            Whether you are a leisure traveler seeking a cozy retreat or a business traveler in need of a comfortable base, Hannah's Guest House is the perfect choice.
                            Our dedicated team is committed to ensuring your stay is nothing short of exceptional, providing you with a home away from home.
                            From our tastefully appointed rooms to our personalized services, we strive to create an unforgettable experience for each and every guest. 
                        </p>
                        <p className='py-4 '>
                            Situated in close proximity to Aberdeen's renowned attractions, shopping destinations, and cultural sites,
                            our guest house serves as an ideal starting point for exploring the beauty and rich heritage of this captivating city.
                        </p>
                    </div>

                </div>
                <div className='px-40 py-10 text-right '>
                    <div 
                        style={{
                            backgroundImage: "url(/images/outside.png)",
                            backgroundPosition: '50% 50%',
                            backgroundSize: "600px",
                            backgroundRepeat: "no-repeat",
                            height: "320px",
                            width: "500px",
                        }}

                    ></div>
                </div>

            </div>

        </div>
    )
}

export default Welcome;