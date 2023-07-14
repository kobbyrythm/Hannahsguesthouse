import React from "react";

const Roomcard = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center text-center py-16">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-1 max-w-sm rounded overflow-hidden shadow-lg">
          <div
            style={{
              backgroundImage: "url(/images/DeluxeK.jpg)",
              backgroundSize: "400px",
              backgroundRepeat: "no-repeat",
              height: "300px",
              width: "350px",
            }}
            
          ></div>
          <div className='px-6 py-24'></div>
        </div>
      </div>
    </div>
  );
};

export default Roomcard;

//  <div className='col-span-1 '>

//                   <h2 className='py-4  text-xl uppercase tracking-widdest text-left'>Room Types</h2>
//                   <div style={{
//                       backgroundImage: 'url(/images/DeluxeK.jpg)',
//                       backgroundSize: '400px',
//                       backgroundRepeat: 'no-repeat',
//                       height: '400px',
//                       width: '350px'
//                   }}
//                       className='rounded-md shadow-md'
//                   >

//                   </div>

//               </div>
//               <div className='col-span-1 grid-row-2  py-10 '>
//                   <div className='row-span-1 '>
//                       <div style={{
//                           backgroundImage: 'url(/images/king.jpg)',
//                           backgroundSize: '400px',
//                           backgroundRepeat: 'no-repeat',
//                           backgroundPosition: '50% 45%',
//                           height: '180px',
//                           width: '350px',

//                       }}
//                           className='rounded-md shadow-md'
//                       >
//                       </div>

//                   </div>
//                   <div className='row-span-1  py-6'>
//                       <div style={{
//                           backgroundImage: 'url(/images/single.jpg)',
//                           backgroundSize: '400px',
//                           backgroundRepeat: 'no-repeat',
//                           backgroundPosition: '50% 60%',
//                           height: '180px',
//                           width: '350px'
//                       }}
//                           className='rounded-md shadow-md  '
//                       >
//                       </div>

//                   </div>
//                   <h1 className='py-4 tracking-widdest text-right text-l text-gray-500 underline cursor-pointer'>See More</h1>

//               </div>
