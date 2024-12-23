import React from "react";
import kandy from "./../../assets/images/pakcages/kandy.png";
import sigiriya from "./../../assets/images/pakcages/sigiriya.png";
import yala from "./../../assets/images/pakcages/yala.png";
import { StarWhiteIcon, StarYellowIcon } from "../../utils/icons";
import { Link } from "react-router-dom";
import { packages } from "../../utils/dataArrays";

export const PackagesBody = () => {
 

  return (
    <>
      <section className=" px-[5%] md:px-[10%] w-full bg-white flex flex-col justify-center items-center md:py-[4%] pt-[15%] md:pt-[4%]  font-nunito ">
        <div className=" mt-2 md:mt-0 text-center text-black text-sm md:text-base font-normal mb-10">
          Discover exclusive travel services designed to take you around the
          globe with comfort, adventure, and <br />
          peace of mind, tailored to create your perfect journey
        </div>
        <div className="mt-3 w-full text-theme-green-middle-color text-[20px] md:text-[25px] font-bold md:font-semibold">
          Sri Lanka Tour Packages
        </div>

        <div className=" flex justify-between w-full flex-col md:flex-row mt-5 ">
          {packages
            .filter((item) => item.country === "Sri Lanka")
            .map((item, packageIndex) => {
              return <PakcageCard data={item} />;
            })}
        </div>
        <div className="mt-3 w-full text-theme-green-middle-color text-[20px] md:text-[25px] font-bold md:font-semibold">
          Maldives Tour Packages
        </div>

        <div className=" flex justify-between w-full flex-col md:flex-row mt-5 ">
          {packages
            .filter((item) => item.country === "Sri Lanka")
            .map((item, packageIndex) => {
              return <PakcageCard data={item} />;
            })}
        </div>
        <div className="mt-3 w-full text-theme-green-middle-color text-[20px] md:text-[25px] font-bold md:font-semibold">
          UAE Tour Packages
        </div>

        <div className=" flex justify-between w-full flex-col md:flex-row mt-5 ">
          {packages
            .filter((item) => item.country === "Sri Lanka")
            .map((item, packageIndex) => {
              return <PakcageCard data={item} />;
            })}
        </div>
      </section>
    </>
  );
};

const PakcageCard = ({ data }) => {
  return (
    <>
      <div className=" flex flex-col md:w-[23%] aspect-[1/1.3] mb-10">
        <div
          className="w-full h-full relative flex flex-col justify-end p-3 pb-3"
          style={{
            backgroundImage: `url(${data.image}), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "overlay" // Ensures the gradient blends with the image
          }}
        >
          <span className=" absolute right-2 top-2 bg-theme-green-color p-2 px-5 text-black font-semibold text-[14px]">
            {data.days} Days
          </span>
          <div className=" text-white text-[14px] mb-3 ">{data.name}</div>
          <div className=" flex justify-between w-full items-end text-white">
            <div className=" flex flex-col gap-[2px]">
              <span className=" text-[10px] font-semibold "> From</span>
              <span className=" text-[25px] font-bold "> $ {data.price}</span>
              <span className=" text-[10px] font-semibold "> per person</span>
            </div>
            <div className=" flex flex-col gap-2 items-end">
              <span className="  bg-theme-green-middle-color p-1 px-3 text-white font-semibold text-[10px] mb-1 w-fit">
                Sri Lanka
              </span>
              <div className=" flex items-center gap-1">
                <StarWhiteIcon />
                <StarYellowIcon />
                <StarYellowIcon />
                <StarYellowIcon />
                <StarYellowIcon />
              </div>
            </div>
          </div>
        </div>
        <Link
          to={`/packages/${data.slug}`}
          className=" bg-theme-green-middle-color w-full flex justify-center items-center text-white text-[16px] mt-3 py-3"
        >
          Explore
        </Link>
      </div>
    </>
  );
};
