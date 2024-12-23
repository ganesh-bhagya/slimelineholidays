import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/images/logo.png";
import footerimg from "./../../assets/images/footer.png";
import call from "./../../assets/images/icons/call.svg";
import email from "./../../assets/images/icons/email.svg";
import address from "./../../assets/images/icons/address.svg";
import clock from "./../../assets/images/icons/clock.svg";

export const Footer = ({ scrollRefs }) => {
  const navigate = useNavigate();

  const scrollToDiv = (rerName) => {
    const isHomePage = window.location.pathname === "/";
    if (!isHomePage) {
      navigate(`/?scrollTo=${rerName}`);
    } else {
      if (rerName === "abtus") {
        scrollRefs.abtus.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "contactus") {
        scrollRefs.contactus.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "faq") {
        scrollRefs.faq.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "testimonials") {
        scrollRefs.testimonials.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "services") {
        scrollRefs.services.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "gallery") {
        scrollRefs.gallery.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const scrollToDivMobile = (rerName) => {
    handleFadeIn();
    const isHomePage = window.location.pathname === "/";
    if (!isHomePage) {
      navigate(`/?scrollTo=${rerName}`);
    } else {
      if (rerName === "abtus") {
        scrollRefs.abtus.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "contactus") {
        scrollRefs.contactus.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "faq") {
        scrollRefs.faq.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "testimonials") {
        scrollRefs.testimonials.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "services") {
        scrollRefs.services.current.scrollIntoView({ behavior: "smooth" });
      } else if (rerName === "gallery") {
        scrollRefs.gallery.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const isServicesLink = new URLSearchParams(window.location.search).get(
      "scrollTo"
    );
    if (isServicesLink !== null) {
      const navigationTimeout = setTimeout(() => {
        if (isServicesLink === "abtus") {
          scrollRefs.abtus.current.scrollIntoView({ behavior: "smooth" });
        } else if (isServicesLink === "contactus") {
          scrollRefs.contactus.current.scrollIntoView({ behavior: "smooth" });
        } else if (rerName === "faq") {
          scrollRefs.faq.current.scrollIntoView({ behavior: "smooth" });
        } else if (rerName === "testimonials") {
          scrollRefs.testimonials.current.scrollIntoView({
            behavior: "smooth"
          });
        } else if (rerName === "services") {
          scrollRefs.services.current.scrollIntoView({ behavior: "smooth" });
        } else if (rerName === "gallery") {
          scrollRefs.gallery.current.scrollIntoView({ behavior: "smooth" });
        }

        const urlWithoutQueryParam = window.location.pathname;
        window.history.replaceState({}, document.title, urlWithoutQueryParam);
      }, 1000);

      return () => clearTimeout(navigationTimeout);
    }
  }, [scrollRefs]);

  const navigationItems = [
    { id: "home", link: "/", name: "Home", children: 0, type: "external" },
    { id: "abtus", link: "/", name: "About Us", children: 0, type: "internal" },
    {
      id: "packages",
      link: "/packages",
      name: "Packages",
      children: 0,
      type: "external"
    },
    {
      id: "services",
      link: "/",
      name: "Services",
      children: 0,
      type: "internal"
    },
    {
      id: "gallery",
      link: "/",
      name: "Gallery",
      children: 0,
      type: "internal"
    },
    { id: "faq", link: "/", name: "FAQs", children: 0, type: "internal" },
    {
      id: "testimonials",
      link: "/",
      name: "Testimonials",
      children: 0,
      type: "internal"
    },
    {
      id: "contactus",
      link: "/",
      name: "Contact Us",
      children: 0,
      type: "internal"
    }
  ];

  return (
    <section
      className="w-full    flex flex-col relative font-nunito overflow-hidden"
      style={{
        backgroundImage: `url(${footerimg})`,
        backgroundPosition: "top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
        // backgroundBlendMode: "overlay"
      }}
    >
      <div className="absolute  flex w-full md:h-auto h-full  ">
        {/* <img src={map} className="object-cover opacity-85" alt="" /> */}
      </div>
      <div className=" w-full pb-[5%] flex flex-col md:flex-row justify-between py-[10%] md:py-[5%] md:pb-[5%]  px-[5%]  md:px-[10%]  ">
        <div className="md:w-[30%] flex flex-col mb-12 md:mb-0">
          <div className=" w-[300px] overflow-hidden ">
            <img src={logo} alt="" />
          </div>
          <div className="flex  flex-col gap-5 mt-10 md:ml-5">
            <div className=" flex items-center gap-4">
              <span className=" w-[35px] aspect-square rounded-full border border-[#03FF3F] flex items-center justify-center">
                <img src={call} className="w-4" alt="" />
              </span>
              <a
                href="tel:+94777514294"
                className="text-white font-light text-base"
              >
                (+94) 777 514 294
              </a>
            </div>
            <div className=" flex items-center gap-4">
              <span className=" w-[35px] aspect-square rounded-full border border-[#03FF3F] flex items-center justify-center">
                <img src={email} className="w-4" alt="" />
              </span>
              <a
                href="mailto:info@slimelineholidays.com"
                className=" text-white font-light text-base"
              >
                info@slimelineholidays.com
              </a>
            </div>
            <div className=" flex items-center gap-4">
              <span className=" w-[35px] aspect-square rounded-full border border-[#03FF3F] flex items-center justify-center">
                <img src={address} className="w-4" alt="" />
              </span>
              <span className=" text-white font-light text-base">
                Slimeline Tours, Modarawalla, Marawilla
              </span>
            </div>
            <div className=" flex items-center gap-4">
              <span className=" w-[35px] aspect-square rounded-full border border-[#03FF3F] flex items-center justify-center">
                <img src={clock} className="w-4" alt="" />
              </span>
              <span className=" text-white font-light text-base">
                Mon - Fri: 08.00 - 16.00
              </span>
            </div>
          </div>
        </div>
        <div className="md:w-[15%] flex flex-col gap-3 mb-12 md:mb-0">
          <MenuTitle title="Quick Links" />
          <div className=" w-full flex flex-col gap-1 mt-5">
            {navigationItems.map((item, itemIndex) => (
              <MenuItem
                key={itemIndex}
                name={item.name}
                link={item.link}
                type={item.type}
                id={item.id}
                scrollToDiv={scrollToDiv}
                children={item.children}
              />
            ))}
          </div>
        </div>
        <div className="md:w-[40%] hidden  md:flex flex-col gap-3 mb-12 md:mb-0 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.311201985419!2d79.80907687448605!3d7.430773411956828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2c695c85f03dd%3A0x731c8ea1aa4c6f51!2sSlimline%20Tours!5e0!3m2!1sen!2slk!4v1732119348477!5m2!1sen!2slk"
            width="500"
            height="350"
            // className="rounded-lg"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <div className="absolute top-0 left-0 w-[500px] h-[350px] bg-black bg-opacity-30  flex items-center justify-center">
           
          </div> */}
        </div>
        <div className="w-full md:w-[40%] md:hidden flex flex-col gap-3 mb-12 md:mb-0 relative">
          <div className="w-full aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.311201985419!2d79.80907687448605!3d7.430773411956828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2c695c85f03dd%3A0x731c8ea1aa4c6f51!2sSlimline%20Tours!5e0!3m2!1sen!2slk!4v1732119348477!5m2!1sen!2slk"
              className="w-full h-[300px] "
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          {/* Add any other content here */}
        </div>

        <div className=" w-full flex justify-center md:hidden">
          <FooterBottom />
        </div>
      </div>
      <div className=" md:px-[7%] 3xl:px-[15%] px-[7%] flex items-center justify-center w-full py-3 bg-black ">
        <div className="  text-white text-[12px] font-normal leading-[30px]">
          Copyright © 2024 | All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

const MenuTitle = ({ title }) => {
  return (
    <div className=" text-white text-[20px] 3xl:text-[22px] font-bold leading-[30px]">
      {title}
    </div>
  );
};

const MenuItem = ({ link, name, children, id, type, scrollToDiv }) => {
  return (
    <>
      {type === "internal" ? (
        <button
          onClick={() => scrollToDiv(id)}
          className="text-white text-start text-base font-normal leading-[30px]"
        >
          {name}
        </button>
      ) : (
        <Link
          to={link}
          className="text-white text-base font-normal leading-[30px]"
        >
          {name}
        </Link>
      )}
    </>
  );
};

const FooterBottom = () => {
  return (
    <div className="flex items-center gap-5 ">
      <div className=" text-white 3xl:text-base text-sm font-normal 3xl:leading-[30px]">
        Terms & Condition
      </div>
      <div className=" text-white 3xl:text-base text-sm  font-normal 3xl:leading-[30px]">
        Privacy Policy
      </div>
      <div className=" text-white 3xl:text-base text-sm  font-normal 3xl:leading-[30px]">
        Contact Us
      </div>
    </div>
  );
};
