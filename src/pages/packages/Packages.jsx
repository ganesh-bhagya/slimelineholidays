import React, { useEffect } from "react";
import { Header } from "../../components/layouts/Header";
import { Footer } from "../../components/layouts/Footer";
import { PackagesHero } from "./PackagesHero";
import { PackagesBody } from "./PackagesBody";

export const Packages = () => {

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <PackagesHero />
      <PackagesBody />
      <Footer />
    </>
  );
};
