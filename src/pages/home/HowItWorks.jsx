import React from "react";
import call from "./../../assets/images/icons/call.svg";
import handshake from "./../../assets/images/icons/handshake.svg";
import doc from "./../../assets/images/icons/doc.svg";
import headset from "./../../assets/images/icons/headset.svg";

export const HowItWorks = () => {
  const works_items = [
    {
      id: 1,
      title: "1. Enquire Now",
      icon: call, // Replace 'call' with the actual icon reference if needed
      worklist: ["Filling the web form", "Web live chat", "Email", "Call us"]
    },
    {
      id: 2,
      title: "2. Connect Travel Expert",
      icon: handshake, // Replace 'headset' with the actual icon reference
      worklist: ["Discuss your requirement", "Free expert travel advice"]
    },
    {
      id: 3,
      title: "3. Received 3 Travel Options",
      icon: doc, // Replace 'document' with the actual icon reference
      worklist: ["Discuss changes", "Finalize trip plan", "Pay 10%"]
    },
    {
      id: 4,
      title: "4. Receive Your Trip Confirmation",
      icon: headset, // Replace 'handshake' with the actual icon reference
      worklist: ["Filling the web form", "100% satisfaction guaranteed"]
    }
  ];

  return (
    <>
      <section className=" px-[10%] w-full bg-[#03FF000D] flex flex-col justify-center items-center py-[10%] pb-[2%] md:pb-[4%] md:py-[4%] font-nunito ">
        <div className=" text-center text-[25px] md:text-[50px] font-light ">
          <span className=" font-bold">How</span> It Works?
        </div>

        <div className=" mt-2 md:mt-0 text-center text-black text-sm md:text-base font-normal">
        Discover our simple process for planning and booking your perfect
        travel experience.
      </div>
       
        <div className=" flex mt-[20%] md:mt-[10%] flex-wrap justify-center md:justify-between w-full">
          {works_items.map((workItem) => {
            return <WorkCard data={workItem} />;
          })}
        </div>
      </section>
    </>
  );
};

const WorkCard = ({ data }) => {
  return (
    <div className=" relative flex flex-col w-[90%] md:w-[23%] 3xl:w-[20%] gap-2 bg-white p-5 pt-[5%] 3xl:pt-[4%] shadow-md  pl-10 mb-16 md:mb-0">
      <div className="absolute top-[-5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex justify-center items-center border border-theme-green-color w-[20%] 3xl:w-[25%] aspect-square rounded-full">
        <img src={data.icon} className="w-6 3xl:w-8" alt="" />
      </div>

      <div className=" mt-[10%] md:mt-0 text-base font-bold text-black">{data.title}</div>
      <div className=" flex flex-col gap-1">
        {data.worklist.map((work, index) => {
          return (
            <div key={index} className="flex items-center gap-3">
              <span className="w-[10px] h-[10px] rounded-full bg-theme-green-middle-color"></span>
              <span className=" font-light text-base">{work}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
