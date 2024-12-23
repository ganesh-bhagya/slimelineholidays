import React from "react";
import abtus from "./../../assets/images/aboutus.png";
import abtus2 from "./../../assets/images/abtus2.png";

export const AboutUs = ({ scrollRef }) => {
  return (
    <section
      ref={scrollRef}
      className={`h-auto flex flex-col md:flex-row w-full relative justify-between items-center font-nunito px-[5%] md:px-[10%] py-[10%] pb-[40%] md:pb-[20%]`}
      style={{
        backgroundImage: `url(${abtus})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
        // backgroundBlendMode: "overlay"
      }}
    >
      <div className=" flex flex-col gap-10 md:w-[55%] items-center md:items-start ">
        <div className=" text-start text-[25px] md:text-[50px] font-light text-theme-green-color ">
          <span className=" font-bold">About</span> Us
        </div>
        <p className=" text-white text-center md:text-start text-xs md:text-base font-light md:w-[75%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="md:w-[80%] flex flex-col p-5 rounded-xl bg-[#00000072] border border-theme-green-color gap-3">
          <div className=" font-nunito font-bold text-[20px] md:text-[25px] text-white text-center md:text-start">
            Our Mission
          </div>
          <p className=" text-xs md:text-base font-light text-white text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. nulla
            pariatur.
          </p>
        </div>
        <div className="md:w-[80%] flex flex-col p-5 rounded-xl bg-[#00000072] border border-theme-green-color gap-3">
          <div className=" font-nunito font-bold text-[20px] md:text-[25px] text-white text-center md:text-start">
            Our Vision
          </div>
          <p className=" text-xs md:text-base font-light text-white text-center md:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. nulla
            pariatur.
          </p>
        </div>
      </div>
      <div className=" hidden md:block absolute  right-0 top-[10%] bottom-[10%] w-[40%] 3xl:w-[38%]">
        <img
          src={abtus2}
          className=" w-full max-h-[825px] 3xl:max-h-[835px]"
          alt=""
        />
      </div>
      <div className=" md:hidden mt-10 ">
        <img
          src={abtus2}
          className=" w-full max-h-[825px] 3xl:max-h-[835px]"
          alt=""
        />
      </div>
      <div className="absolute w-[60%] md:w-[60%] p-8 px-[10%] bg-[#F1FFF2]  flex flex-col md:flex-row items-center justify-between bottom-[-20%] md:bottom-[-8%] right-[20%]">
        <div className=" flex flex-col justify-center items-center">
          <span className=" text-[50px] text-center text-theme-green-middle-color font-bold ">
            200
          </span>
          <span className=" text-base text-center text-black font-light ">
            Amazing Tours
          </span>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <span className=" text-[50px] text-center text-theme-green-middle-color font-bold ">
            150
          </span>
          <span className=" text-base text-center text-black font-light ">
            Happy Clients
          </span>
        </div>
        <div className=" flex flex-col justify-center items-center">
          <span className=" text-[50px] text-center text-theme-green-middle-color font-bold ">
            20
          </span>
          <span className=" text-base text-center text-black font-light ">
            Years in Business
          </span>
        </div>
      </div>
    </section>
  );
};
