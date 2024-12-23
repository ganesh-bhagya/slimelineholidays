import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home/Home";
import { Packages } from "../pages/packages/Packages";
import { PackageDetail } from "../pages/package-detail/PackageDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/packages",
    element: <Packages />
  },
  {
    path: "/packages/:slug",
    element: <PackageDetail />
  }
]);

export default router;
