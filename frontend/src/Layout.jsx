import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Topbar from "./Components/Topbar/Topbar";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
