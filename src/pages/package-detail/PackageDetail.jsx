import React, { useContext, useEffect } from "react";
import { Header } from "../../components/layouts/Header";
import { Footer } from "../../components/layouts/Footer";
import { PackageDetailHero } from "./PackageDetailHero";
import { PackageDetailBody } from "./PackageDetailBody";
import { packages } from "../../utils/dataArrays";
import { useParams } from "react-router-dom";
import NavigationContext from "../../contexts/NavigationContext";

export const PackageDetail = () => {
  const { slug } = useParams(); // Get the slug from the URL
  const packageDetail = packages.find((pkg) => pkg.slug === slug); // Find the matching package

  if (!packageDetail) {
    return <p>Package not found</p>; // Handle the case where the package doesn't exist
  }

  useEffect(() => {
    // Scroll to the top when the component is mounted
    window.scrollTo(0, 0);
  }, []);

  const scrollRefs = useContext(NavigationContext);
  return (
    <>
      <Header />
      <PackageDetailHero data={packageDetail} />
      <PackageDetailBody data={packageDetail} />
      <Footer />
    </>
  );
};
