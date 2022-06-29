import React, { useState } from "react";
import DashSidebar from "../components/DashSideBar";
import Admin from "../components/Admin";
import DashNavbar from "../components/DashNav";

const Adminpage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <DashNavbar toggle={toggle} />
      <DashSidebar isOpen={isOpen} toggle={toggle} />
      <Admin />
    </>
  );
};

export default Adminpage;
