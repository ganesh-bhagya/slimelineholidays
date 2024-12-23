import React, { useContext, useEffect } from "react";
import { Header } from "../../components/layouts/Header";
import { HomeHero } from "./HomeHero";
import { OurPackages } from "./OurPackages";
import { AboutUs } from "./AboutUs";
import { WhyUs } from "./WhyUs";
import { HowItWorks } from "./HowItWorks";
import { Gallery } from "./Gallery";
import { Footer } from "../../components/layouts/Footer";
import { Awards } from "./Awards";
import { FAQ } from "./FAQ";
import { Testimonials } from "./Testimonials";
import { ContactUs } from "./ContactUs";
import NavigationContext from "../../contexts/NavigationContext";

export const Home = () => {
  const scrollRefs = useContext(NavigationContext);

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header scrollRefs={scrollRefs} />
      <HomeHero />
      <OurPackages />
      <AboutUs scrollRef={scrollRefs.abtus} />
      <WhyUs />
      <HowItWorks />
      <Gallery scrollRef={scrollRefs.gallery} />
      <Awards />
      <FAQ scrollRef={scrollRefs.faq} />
      <Testimonials scrollRef={scrollRefs.testimonials} />
      <ContactUs scrollRef={scrollRefs.contactus} />
      <Footer scrollRefs={scrollRefs} />
    </>
  );
};
