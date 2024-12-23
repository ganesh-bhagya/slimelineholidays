import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody
} from "@material-tailwind/react";

import call from "./../../assets/images/icons/call.svg";
import handshake from "./../../assets/images/icons/handshake.svg";
import doc from "./../../assets/images/icons/doc.svg";
import headset from "./../../assets/images/icons/headset.svg";
import { generalFaqItems } from "../../utils/dataArrays";

export const FAQ = ({ scrollRef }) => {
  const [open, setOpen] = useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <section
        ref={scrollRef}
        className="px-[5%] md:px-[10%] w-full bg-[#03FF000D] flex flex-col justify-center items-center py-[10%] md:py-[4%] font-nunito "
      >
        <div className=" text-center text-[25px] md:text-[50px] font-light ">
          <span className=" font-bold">FAQs</span>
        </div>

        <div className=" mt-2 md:mt-0 mb-5 text-center text-black text-sm md:text-base font-normal">
          Discover our simple process for planning and booking your perfect
          travel experience.
        </div>

        <div className=" w-full flex flex-col ">
          {generalFaqItems.map((faq, faqIndex) => {
            let turn = faqIndex + 1;
            return (
              <FaqItem
                key={faqIndex}
                open={open}
                turn={turn}
                handleOpen={handleOpen}
                title={faq.title}
                des={faq.des}
                index={faqIndex}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

const FaqItem = ({ open, turn, handleOpen, title, des, index }) => {
  return (
    <div className=" ">
      <Accordion open={open === turn} className={` mb-3  font-nunito `}>
        <AccordionHeader
          onClick={() => handleOpen(turn)}
          className="border-none  p-5 bg-[#D3FFD1]"
        >
          <div className="flex relative w-full gap-5 justify-between items-start px-3">
            <div className="w-[85%] flex items-center gap-5">
              <span className=" text-theme-green-color 3xl:text-lg text-[26px] font-nunito font-semibold">
                Q
              </span>
              <span className=" text-black 3xl:text-lg text-base font-nunito font-normal">
                {title}
              </span>
            </div>

            <span className={` 3xl:text-lg text-[26px] font-semibold`}>
              {open === turn ? "+" : "-"}
            </span>
          </div>
        </AccordionHeader>

        <AccordionBody className="p-5 bg-white mt-4">
          <div className="flex relative w-full gap-5  items-start px-3">
            <span className=" text-theme-green-color font-nunito 3xl:text-lg text-[26px] font-semibold">
              A
            </span>
            <span className="w-[90%] text-black font-nunito text-sm md:text-base font-normal ">
              {des}
            </span>
          </div>
        </AccordionBody>
      </Accordion>
    </div>
  );
};
