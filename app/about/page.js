import React from "react";
import Link from "next/link";
import { MdPark, MdMuseum, MdArrowBack } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import Image from "next/image";
import { Ma_Shan_Zheng } from "next/font/google";


const mashen = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const About = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: "url(/images/aboutus.jpeg)",
          backgroundPosition: "50% 75%",
          backgroundSize: "1920px",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[20vh] lg:h-[30vh] flex justify-center items-center relative"
      >


        <div className="bg-black/60 h-full w-full flex justify-center items-center flex-col gap-2">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            ABOUT
          </h1>
        </div>

       
      </section>

      <section className='p-14 flex flex-col justify-center items-center gap-5'>
        <h1 className='font-bold text-2xl'>Welcome!</h1>
        <p className='text-center'>
          Welcome to Hannah&apos;s Guest House, a charming haven of comfort and
          hospitality in the heart of Aberdeen. Hannahs Guesthouse is situated on a quiet street in the Ferryhill area of central Aberdeen. Close to Union Square, the bus and train station. Union Street is only a five minute walk away and is the main street in Aberdeen - here you can find plenty of bars, shops and restaurants. Altens/Tullos industrial sites and training centres are within easy reach.


          
        </p>

        <p className='text-center'>
          As a family-run guest house, we understand the importance of
          personalized service. Our dedicated team is always on hand to assist
          with any requests, offer local recommendations, and ensure your
          comfort throughout your stay. We believe in going the extra mile to
          exceed your expectations and make your time with us truly
          unforgettable.
        </p>
      </section>



      <section className=' flex flex-col md:flex-row gap-y-10'>
        <div className='md:w-[50%] flex flex-col justify-center items-center '>
          <h1 className={` ${mashen.className} text-[5rem] leading-none`}>
            Bed & <p>Breakfast</p>
          </h1>
          <span className='mt-8 tracking-wider text-md opacity-40'>
            Order breakfast from £5.50
          </span>
        </div>
        <div className='md:w-[50%]'>
          <Image
            src={'/images/breakfastt.jpeg'}
            className='w-full h-auto'
            height={1500}
            width={1500}
            alt='hannahs breakfast'
          />
        </div>
      </section>


      <section className='py-10 bg-pink-200 mt-10'>
        <div className='flex justify-center items-center'>
          <div className='flex justify-center items-center w-[300px] md:w-[350px] text-lg md:text-2xl font-bold py-2 px-8 rounded-full bg-white border-[]'>
            <h1>Local Attractions</h1>
          </div>
        </div>

        <div className='flex flex-col md:flex-row mt-10 text-lg px-8 gap-14 '>
          <div className='md:w-[45%] lg:w-[35%] flex flex-col  gap-2 justify-center items-center cursor-pointer'>
            <Link href="https://www.aberdeencity.gov.uk/AAGM/plan-your-visit/aberdeen-maritime-museum">
              <h1 className='font-bold gap-2 flex md:flex-col lg:flex-row justify-center items-center'>
                <MdMuseum />
                Aberdeen Maritime Museum
              </h1>
            </Link>
           
            <p className='text-center'>
              Located on Shiprow, this award-winning museum showcases
              Aberdeen&apos;s rich maritime heritage, with exhibits on
              shipbuilding, fishing, and offshore oil industries.
            </p>
          </div>
          <div className='md:w-[45%] lg:w-[35%] flex flex-col  gap-2 justify-center items-center cursor-pointer'>
            <Link href="https://www.aberdeencity.gov.uk/services/leisure-culture-and-parks/parks-and-gardens/duthie-park">
              <h1 className='font-bold gap-2 flex justify-center items-center md:flex-col lg:flex-row '>
                <MdPark />
                Duthie Park
              </h1>
            </Link>
            
            <p className='text-center'>
              One of Aberdeen&apos;s largest public parks, Duthie Park offers
              beautiful gardens, a boating pond, a winter gardens conservatory,
              and a children&apos;s play area, making it perfect for leisurely
              strolls and family outings.
            </p>
          </div>
          <div className='md:w-[45%] lg:w-[35%] flex flex-col  gap-2 justify-center items-center cursor-pointer'>
            <Link href="https://www.aberdeencity.gov.uk/AAGM/plan-your-visit/aberdeen-art-gallery">
              <h1 className='font-bold gap-2 flex justify-center items-center md:flex-col lg:flex-row'>
                <GrGallery />
                Aberdeen Art Gallery
              </h1>
            </Link>
            
            <p className='text-center'>
              Known for its extensive collection of fine art, the Aberdeen Art
              Gallery houses works from renowned artists, including Monet, Van
              Gogh, and Renoir, as well as local Scottish artists.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
