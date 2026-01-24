import React, { useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import abtus from "./../../assets/images/awardsbg.webp";
import certificatw from "./../../assets/images/certificate/certificate.webp";
import client from "./../../assets/images/client.webp";
import gallery1 from "./../../assets/images/gallery/gallery1.webp";
import gallery2 from "./../../assets/images/gallery/gallery2.webp";
import gallery3 from "./../../assets/images/gallery/gallery3.webp";
import gallery4 from "./../../assets/images/gallery/gallery4.webp";
import gallery5 from "./../../assets/images/gallery/gallery5.webp";
import gallery6 from "./../../assets/images/gallery/gallery6.webp";

export const Testimonials = ({ scrollRef }) => {
  const swiperRef = useRef(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const certificateItems = [
    { img: certificatw },
    { img: certificatw },
    { img: certificatw },
    { img: certificatw }
  ];

  return (
    <section
      ref={(node) => {
        ref(node); // Combine ref for animation
        scrollRef.current = node; // Assign to scrollRef
      }}
      className={`h-auto flex flex-col w-full relative justify-between items-center font-nunito px-[5%] md:px-[10%] py-[10%] md:py-[5%]`}
      style={{
        backgroundImage: `url(${abtus})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center"
      >
        <div className="text-start text-[35px] md:text-[50px] font-light text-theme-green-color">
          <span className="font-bold">What</span> our client say
        </div>
        <p className="text-white text-center text-base font-light md:w-[75%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={controls}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-[10%] md:mt-[7%] w-full"
      >
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          pagination={{
            el: ".custom-pagination",
            clickable: true,
            renderBullet: (index, className) =>
              `<span class="${className} custom-bullet"></span>`
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30
            }
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          onSlideChange={(swiper) => {
            const bullets = document.querySelectorAll(".custom-bullet");
            bullets.forEach((bullet, i) => {
              if (i === swiper.realIndex) {
                bullet.style.backgroundColor = "#2F563D";
              } else {
                bullet.style.backgroundColor = "white";
              }
            });
          }}
          onSwiper={(swiper) => {
            const bullets = document.querySelectorAll(".custom-bullet");
            bullets.forEach((bullet, i) => {
              if (i === swiper.realIndex) {
                bullet.style.backgroundColor = "#2F563D";
              } else {
                bullet.style.backgroundColor = "white";
              }
            });
          }}
        >
          {certificateItems.map((item, index) => (
            <SwiperSlide className="w-full h-fit" key={index}>
              <div className="w-full flex flex-col md:flex-row justify-between">
                <div className="md:w-[49%] flex flex-col gap-2 mb-6 md:mb-0">
                  <div className="rounded-xl bg-[#F1FFF2] p-5 text-sm md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </div>

                  <div className="flex items-center gap-3 mt-5">
                    <img src={client} className="w-14 md:w-16" alt="Client" />

                    <div className="flex flex-col text-base text-white">
                      <span>Steve David</span>
                      <span className="font-semibold">UK</span>
                    </div>
                  </div>
                </div>
                <div className="md:w-[49%] flex flex-wrap justify-between p-3 rounded-lg bg-[#00000072] border border-theme-green-color">
                  {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, idx) => (
                    <div
                      key={idx}
                      className="w-[32%] aspect-square overflow-hidden mb-3"
                    >
                      <img src={img} alt={`Gallery ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};
