import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarLinks,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="home" onClick={toggle}>
            Home
          </SidebarLinks>
          <SidebarLinks to="about" onClick={toggle}>
            About
          </SidebarLinks>
          <SidebarLink to="/projectsandresearch" onClick={toggle}>
            Projects&Research
          </SidebarLink>
          <SidebarLink to="/startups" onClick={toggle}>
            Startups
          </SidebarLink>
          <SidebarLink to="/events" onClick={toggle}>
            Events
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">SignIn</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
