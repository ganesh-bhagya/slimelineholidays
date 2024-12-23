import React from "react";
import kandy from "./../../assets/images/pakcages/kandy.png";
import sigiriya from "./../../assets/images/pakcages/sigiriya.png";
import yala from "./../../assets/images/pakcages/yala.png";
import { StarWhiteIcon, StarYellowIcon } from "../../utils/icons";
import { packages } from "../../utils/dataArrays";
import { Link } from "react-router-dom";

// const packages = [
//   {
//     id: 1,
//     name: "Sri Lanka Vacation 3 Days",
//     image: kandy,
//     stars: 4,
//     price: 1150,
//     days: 3,
//     country: "Sri Lanka"
//   },
//   {
//     id: 1,
//     name: "Sri Lanka Vacation 5 Days",
//     image: yala,
//     stars: 4,
//     price: 2500,
//     days: 3,
//     country: "Sri Lanka"
//   },
//   {
//     id: 1,
//     name: "Sri Lanka Vacation 7 Days",
//     image: sigiriya,
//     stars: 4,
//     price: 3750,
//     days: 3,
//     country: "Sri Lanka"
//   },
//   {
//     id: 1,
//     name: "Sri Lanka Vacation 3 Days",
//     image: kandy,
//     stars: 4,
//     price: 1150,
//     days: 3,
//     country: "Sri Lanka"
//   }
// ];
export const OurPackages = () => {
  return (
    <>
      <section className=" px-[5%] md:px-[10%] w-full bg-[#03FF000D] flex flex-col justify-center items-center md:py-[4%] pt-[50%] md:pt-[4%]  font-nunito ">
        <div className=" text-center text-[25px] md:text-[50px] font-light ">
          <span className=" font-bold">Our</span> Packages
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
      <div className=" flex flex-col md:w-[24%] aspect-[1/1.3] mb-10">
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
