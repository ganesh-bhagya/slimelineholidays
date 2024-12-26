import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import kandy from "./../../assets/images/pakcages/kandy.png";
import sigiriya from "./../../assets/images/pakcages/sigiriya.png";
import yala from "./../../assets/images/pakcages/yala.png";
import { StarWhiteIcon, StarYellowIcon } from "../../utils/icons";
import { packages } from "../../utils/dataArrays";
import { Link } from "react-router-dom";

export const OurPackages = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="px-[5%] md:px-[10%] w-full bg-[#03FF000D] flex flex-col justify-center items-center md:py-[4%] pt-[50%] md:pt-[4%] font-nunito"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center text-[25px] md:text-[50px] font-light"
        >
          <span className="font-bold">Our</span> Packages
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-3 w-full text-theme-green-middle-color text-[20px] md:text-[25px] font-bold md:font-semibold"
        >
          Sri Lanka Tour Packages
        </motion.div>

        <div className="flex justify-between w-full flex-col md:flex-row mt-5">
          {packages
            .filter((item) => item.country === "Sri Lanka")
            .map((item, packageIndex) => {
              return <PakcageCard key={packageIndex} data={item} />;
            })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-3 w-full text-theme-green-middle-color text-[20px] md:text-[25px] font-bold md:font-semibold"
        >
          Maldives Tour Packages
        </motion.div>

        <div className="flex justify-between w-full flex-col md:flex-row mt-5">
          {packages
            .filter((item) => item.country === "Sri Lanka")
            .map((item, packageIndex) => {
              return <PakcageCard key={packageIndex} data={item} />;
            })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-3 w-full text-theme-green-middle-color text-[20px] md:text-[25px] font-bold md:font-semibold"
        >
          UAE Tour Packages
        </motion.div>

        <div className="flex justify-between w-full flex-col md:flex-row mt-5">
          {packages
            .filter((item) => item.country === "Sri Lanka")
            .map((item, packageIndex) => {
              return <PakcageCard key={packageIndex} data={item} />;
            })}
        </div>
      </motion.section>
    </>
  );
};

const PakcageCard = ({ data }) => {
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
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:w-[24%] aspect-[1/1.3] mb-10"
    >
      <div
        className="w-full h-full relative flex flex-col justify-end p-3 pb-3"
        style={{
          backgroundImage: `url(${data.image}), linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "overlay", // Ensures the gradient blends with the image
        }}
      >
        <span className="absolute right-2 top-2 bg-theme-green-color p-2 px-5 text-black font-semibold text-[14px]">
          {data.days} Days
        </span>
        <div className="text-white text-[14px] mb-3 ">{data.name}</div>
        <div className="flex justify-between w-full items-end text-white">
          <div className="flex flex-col gap-[2px]">
            <span className="text-[10px] font-semibold"> From</span>
            <span className="text-[25px] font-bold"> $ {data.price}</span>
            <span className="text-[10px] font-semibold"> per person</span>
          </div>
          <div className="flex flex-col gap-2 items-end">
            <span className="bg-theme-green-middle-color p-1 px-3 text-white font-semibold text-[10px] mb-1 w-fit">
              Sri Lanka
            </span>
            <div className="flex items-center gap-1">
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
        className="bg-theme-green-middle-color w-full flex justify-center items-center text-white text-[16px] mt-3 py-3"
      >
        Explore
      </Link>
    </motion.div>
  );
};
