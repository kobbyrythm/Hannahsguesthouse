import React from "react";
const Values = () => {
  return (
    <div className="">
      <section>
        <div
          style={{
            backgroundImage: "url(images/mainbg.jpg)",
            backgroundPosition: "50% 75%",
            backgroundSize: "1920px",
            backgroundRepeat: "no-repeat",
            height: "400px",
          }}
          className="relative w-[100vw]  my-28 "
        >
          <div className=" bg-[#B84770] flex p-10 md:absolute h-auto w-[100%] md:w-[550px] -top-20 right-20 items-center text-lg flex-col text-white ">
            <h1 className="text-white text-xl font-semibold underline underline-offset-1">
              What we offer
            </h1>
            <h1 className="self-start mt-4 font-medium">Warm Hospitality</h1>
            <p className=" text-white/60">
              At our guest house, we take pride in providing warm and genuine
              hospitality to all our guests. From the moment you step through
              our doors, you&apos;ll be greeted with a friendly smile and a
              heartfelt welcome.
            </p>
            <h1 className="self-start mt-4 font-medium">Central Convenience</h1>
            <p className=" text-white/60">
              Nestled in a prime central location, we offer easy accessibility
              to key transport hubs like the bus and train stations, ensuring
              seamless travel experiences.
            </p>
            <h1 className="self-start mt-4 font-medium">
              Vibrant Surroundings
            </h1>
            <p className=" text-white/60">
              Immerse yourself in the vibrant atmosphere of our neighborhood,
              with an array of bars, restaurants, and the esteemed Duthie Park just steps away.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Values;
