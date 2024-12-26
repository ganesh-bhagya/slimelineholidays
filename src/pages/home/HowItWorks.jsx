import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import call from "./../../assets/images/icons/call.svg";
import handshake from "./../../assets/images/icons/handshake.svg";
import doc from "./../../assets/images/icons/doc.svg";
import headset from "./../../assets/images/icons/headset.svg";

export const HowItWorks = () => {
  const works_items = [
    {
      id: 1,
      title: "1. Enquire Now",
      icon: call,
      worklist: ["Filling the web form", "Web live chat", "Email", "Call us"]
    },
    {
      id: 2,
      title: "2. Connect Travel Expert",
      icon: handshake,
      worklist: ["Discuss your requirement", "Free expert travel advice"]
    },
    {
      id: 3,
      title: "3. Received 3 Travel Options",
      icon: doc,
      worklist: ["Discuss changes", "Finalize trip plan", "Pay 10%"]
    },
    {
      id: 4,
      title: "4. Receive Your Trip Confirmation",
      icon: headset,
      worklist: ["Filling the web form", "100% satisfaction guaranteed"]
    }
  ];

  return (
    <section className="px-[10%] w-full bg-[#03FF000D] flex flex-col justify-center items-center py-[10%] pb-[2%] md:pb-[4%] md:py-[4%] font-nunito">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-center text-[25px] md:text-[50px] font-light"
      >
        <span className="font-bold">How</span> It Works?
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-2 md:mt-0 text-center text-black text-sm md:text-base font-normal"
      >
        Discover our simple process for planning and booking your perfect travel
        experience.
      </motion.div>

      <div className="flex mt-[20%] md:mt-[10%] flex-wrap justify-center md:justify-between w-full">
        {works_items.map((workItem) => {
          return <WorkCard key={workItem.id} data={workItem} />;
        })}
      </div>
    </section>
  );
};

const WorkCard = ({ data }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col w-[90%] md:w-[23%] 3xl:w-[20%] gap-2 bg-white p-5 pt-[5%] 3xl:pt-[4%] shadow-md pl-10 mb-16 md:mb-0"
    >
      <div className="absolute top-[-5%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex justify-center items-center border border-theme-green-color w-[20%] 3xl:w-[25%] aspect-square rounded-full">
        <img src={data.icon} className="w-6 3xl:w-8" alt="" />
      </div>

      <div className="mt-[10%] md:mt-0 text-base font-bold text-black">
        {data.title}
      </div>
      <div className="flex flex-col gap-1">
        {data.worklist.map((work, index) => {
          return (
            <div key={index} className="flex items-center gap-3">
              <span className="w-[10px] h-[10px] rounded-full bg-theme-green-middle-color"></span>
              <span className="font-light text-base">{work}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};
