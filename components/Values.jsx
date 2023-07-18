import React from 'react'

const Values = () => {
    return (

        <div className = 'flex h-[100vh] w-[100vw] items-center justify-center py-4'>
            <div style = {{ 
                backgroundImage:' url(images/mainbg.jpg)', 
                backgroundPosition: '50% 75%',
                backgroundSize: '1920px',
                backgroundRepeat: 'no-repeat',
                height:'400px'
                }}
                className='relative w-[100vw]'>

            </div>

            <div className= 'flex p-10 h-[600px] w-[450px]  right-20 justify-center absolute bg-[#B84770] text-center '>
                <div>
                    <h3 className='font-bold text-3xl opacity-80'>What we provide</h3>
                   <h4 className='text-left text-lg py-2'>Warm Hospitality</h4>
                    <p className='text-left text-sm'>At our guest house, we take pride in providing warm and genuine hospitality to all our guests  From the moment you step through our doors, you'll be greeted with a friendly smile and a heartfelt welcome</p>

                    <div className= 'py-5'>
                        <h4 className='text-left text-lg py-2'>Tranquil Retreat</h4>
                        <p className='text-left text-sm'> Escape from the hustle and bustle of everyday life and immerse yourself in a serene and tranquil retreat at our guest house.</p>
                    </div>

                    <div className='py-5'>
                        <h4 className='text-left text-lg py-2'>Exquisite Accommodations</h4>
                        <p className='text-left text-sm'> Indulge in the luxury of our exquisite accommodations, designed with your comfort in mind. Each room is thoughtfully decorated and furnished to create a cozy and elegant ambiance.</p>
                    </div>
                </div>

                
                

            </div>

        </div>
        
    )
}

export default Values