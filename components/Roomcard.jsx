import React from 'react'

const Roomcard = () => {
  return (
      <div className='flex relative flex-wrap mb-4 px-56 items-center justify-center'>

          <div className='w-1/2 '>
            <div style = {{
                backgroundImage:'url(/images/DeluxeK.jpg)',
                backgroundSize: '400px',
                backgroundRepeat:'no-repeat',
                height:'400px',
                width:'350px' 
            }}
                className='rounded-md shadow-md'
            >
            </div>

        </div>
          <div className='w-1/2 py-20 -mx-12 '>
            <div className='h-1/2 '>
                  <div style={{
                      backgroundImage: 'url(/images/king.jpg)',
                      backgroundSize: '400px',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition:'50% 45%',
                      height: '180px',
                      width: '350px',
                      paddingBottom:'20px',
                  }}
                      className='rounded-md shadow-md'
                  >
                  </div>


            </div>
              <div className='h-1/2 mt-10'>
                  <div style={{
                      backgroundImage: 'url(/images/single.jpg)',
                      backgroundSize: '400px',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: '50% 60%',
                      height: '180px',
                      width: '350px'
                  }}
                      className='rounded-md shadow-md '
                  >
                  </div>


              </div>
            
        </div>

        
        
    </div>
  );
};

export default Roomcard;