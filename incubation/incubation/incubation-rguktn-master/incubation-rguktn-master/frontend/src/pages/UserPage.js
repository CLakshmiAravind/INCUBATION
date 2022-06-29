import React, { useState } from "react";
import DashSidebar from "../components/DashSideBar";
import Dashboard from "../components/Dashboard";
import DashNavbar from "../components/DashNav";
import ScrollToTop from "../components/ScrollToTop";

const Userpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DashNavbar toggle={toggle} />
      <DashSidebar isOpen={isOpen} toggle={toggle} />
      <ScrollToTop />
      <Dashboard />
    </>
  );
};

export default Userpage;
