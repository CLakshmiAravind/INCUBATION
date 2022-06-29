import React from "react";
import { useNavigate } from "react-router-dom";
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
} from "./DashSidebarElements";

const DashSidebar = ({ isOpen, toggle }) => {
  const navigate = useNavigate();

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLinks to="home" onClick={toggle}>
            My Posts
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
          <SidebarRoute
            onClick={() => {
              localStorage.removeItem("userInfo");
              navigate("/", { replace: true });
            }}
          >
            LogOut
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default DashSidebar;
