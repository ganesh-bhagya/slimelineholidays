import React from "react";
import wyuss1 from "./../../assets/images/icons/wyuss1.svg";
import wyuss2 from "./../../assets/images/icons/wyuss2.svg";
import wyuss3 from "./../../assets/images/icons/wyuss3.svg";

export const WhyUs = () => {
  const choose_items = [
    {
      id: 1,
      icon: wyuss1,
      title: "Affordable",
      description:
        "We partner with top hotels worldwide, chosen for quality, location, and value, ensuring unparalleled comfort."
    },
    {
      id: 1,
      icon: wyuss2,
      title: "Affordable",
      description:
        "We partner with top hotels worldwide, chosen for quality, location, and value, ensuring unparalleled comfort."
    },
    {
      id: 1,
      icon: wyuss3,
      title: "Affordable",
      description:
        "We partner with top hotels worldwide, chosen for quality, location, and value, ensuring unparalleled comfort."
    },
    {
      id: 1,
      icon: wyuss1,
      title: "Affordable",
      description:
        "We partner with top hotels worldwide, chosen for quality, location, and value, ensuring unparalleled comfort."
    },
    {
      id: 1,
      icon: wyuss2,
      title: "Affordable",
      description:
        "We partner with top hotels worldwide, chosen for quality, location, and value, ensuring unparalleled comfort."
    },
    {
      id: 1,
      icon: wyuss3,
      title: "Affordable",
      description:
        "We partner with top hotels worldwide, chosen for quality, location, and value, ensuring unparalleled comfort."
    }
  ];
  return (
    <section className="px-[5%] md:px-[10%] w-full flex flex-col justify-center items-center  py-[4%] pb-[15%] md:pb-[4%] pt-[80%] md:pt-[10%] font-nunito ">
      <div className=" text-center text-[25px] md:text-[50px] font-light ">
        <span className=" font-bold">Why</span> Choose Us
      </div>
      <div className=" mt-2 md:mt-0 text-center text-black text-sm md:text-base font-normal">
        Exceptional Travel Solutions Tailored for You. Experience the Best in
        Comfort, Service, and Value
      </div>

      <div className="mt-[10%] flex flex-col md:flex-row items-center justify-between w-full  ">
        <div className="md:w-[50%] flex flex-col gap-8 md:border-r md:border-[#DDDDDD] md:p-5 pt-10">
          {choose_items.slice(0, 3).map((item) => {
            return <ChooseItem data={item} />;
          })}
        </div>
        <div className="md:w-[50%] flex flex-col gap-8 md:pl-[5%] md:p-5 pt-10">
          {choose_items.slice(0, 3).map((item) => {
            return <ChooseItem data={item} />;
          })}
        </div>
      </div>
    </section>
  );
};

const ChooseItem = ({ data }) => {
  return (
    <>
      <div className=" flex items-center justify-between gap-4 w-full md:pr-[3%]">
        <span className=" w-[10%]">
          <img src={data.icon} alt="" />
        </span>
        <div className="w-[90%] md:w-[85%] text-sm md:text-base">{data.description}</div>
      </div>
    </>
  );
};
