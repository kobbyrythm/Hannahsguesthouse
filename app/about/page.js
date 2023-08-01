import React from "react";
import Link from "next/link";
import { MdPark, MdMuseum, MdArrowBack } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import { Ma_Shan_Zheng } from "next/font/google";

const mashen= Ma_Shan_Zheng({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',

})
const About = () => {
  return (
    <div className="w-full max-h-full flex-col ">
      <div className="items-center justify-center">
        <div className="w-full h-[250px]">
          <div
            className=" w-[100vw]"
            style={{
              backgroundImage: "url(/images/DeluxeK.jpg)",
              backgroundPosition: "50% 45%",
              backgroundSize: "1920px",
              backgroundRepeat: "no-repeat",
              height: "250px",
            }}
          >
            <div className="flex justify-center">
              <p className="font-bold py-8 text-[60px] tracking-wider text-white ">
                About Us
              </p>
            </div>
            <div className=" w-12 flex bg-black/20 text-white rounded-full p-2  cursor-pointer">
              <Link href="/">
                <MdArrowBack size={30} />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex h-[400px] py-4 border">
          <div className="justify-center text-center">
            <p className="font-bold py-8 text-3xl tracking-wider text-black">
              Welcome !
            </p>
            <p className="px-16 text-sm tracking-wide  ">
              Welcome to Hannah's Guest House, a charming haven of comfort and
              hospitality in the heart of Aberdeen. Since its inception,
              Hannah's Guest House has been committed to delivering a
              personalized and memorable experience for each and every guest.
              Our story began with a vision to create a home away from home,
              where visitors can unwind, recharge, and immerse themselves in the
              beauty of Aberdeen. Over the years, we have become renowned for
              our exceptional service, attention to detail, and a genuine
              passion for ensuring our guests have a delightful stay.
            </p>
            <p className="px-16 py-8 text-sm tracking-wide  ">
              As a family-run guest house, we understand the importance of
              personalized service. Our dedicated team is always on hand to
              assist with any requests, offer local recommendations, and ensure
              your comfort throughout your stay. We believe in going the extra
              mile to exceed your expectations and make your time with us truly
              unforgettable.
            </p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 px-8 py-8 h-[450px] divide">
        <div className="  px-8 flex">
          <div>
            <h1
              className={`${mashen.className} text-[5rem] md:text-[12rem] text-black leading-[2.5rem] md:leading-[5.5rem]`}
            >
              Bed & <br />Breakfast
            </h1>

            <p className="text-sm px-32 ">Order breakfast from £5</p>
          </div>
        </div>

        <div className="px-32 py-10 ">
          <div
            className="rounded-lg"
            style={{
              backgroundImage: "url(/images/outside.png)",
              backgroundPosition: "50% 50%",
              backgroundSize: "500px",
              backgroundRepeat: "no-repeat",
              height: "320px",
              width: "500px",
            }}
          ></div>
        </div>
      </div>

      <div className="py-8 px-16 h-[500px]">
        <div className="flex justify-center">
          <p className="font-bold py-8 text-3xl tracking-wider text-black">
            Local Attractions
          </p>
          <div className="px-40 text-sm tracking-wide py-4 ">
            <div className="py-4">
              <MdMuseum size={40} />
            </div>
            <b>Aberdeen Maritime Museum</b>: Located on Shiprow, this
            award-winning museum showcases Aberdeen's rich maritime heritage,
            with exhibits on shipbuilding, fishing, and offshore oil industries.
          </div>
          <div className="px-40 text-sm tracking-wide py-4 ">
            <div className="py-4">
              <MdPark size={40} />
            </div>
            <b>Duthie Park</b>:One of Aberdeen's largest public parks, Duthie
            Park offers beautiful gardens, a boating pond, a winter gardens
            conservatory, and a children's play area, making it perfect for
            leisurely strolls and family outings.
          </div>
          <div className="px-40 text-sm tracking-wide py-4 ">
            <div className="py-4">
              <GrGallery size={35} />
            </div>
            <b>Aberdeen Art Gallery</b>:Known for its extensive collection of
            fine art, the Aberdeen Art Gallery houses works from renowned
            artists, including Monet, Van Gogh, and Renoir, as well as local
            Scottish artists.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
