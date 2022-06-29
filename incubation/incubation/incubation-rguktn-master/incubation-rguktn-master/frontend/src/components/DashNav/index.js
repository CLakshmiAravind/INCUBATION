import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  DashNav,
  DashNavbarContainer,
  DashNavLogo,
  MobileIcon,
  DashNavMenu,
  DashNavItem,
  DashNavLinks,
  DashNavLink,
  DashNavButton,
  DashNavButtonLink,
} from "./DashNavElements";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const DashNavbar = ({ toggle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userSignin = useSelector((state) => state.userSignin);
  const { admin } = userSignin;

  const logoutHandler = () => {
    dispatch(logout());

    navigate("/", { replace: true });
  };

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <DashNav>
          <DashNavbarContainer>
            <DashNavLogo to="/">incubation</DashNavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <DashNavMenu>
              <DashNavItem>
                {admin ? (
                  <DashNavLinks to="/adminpage">All Posts</DashNavLinks>
                ) : (
                  <DashNavLinks to="/dashboard"> My Posts</DashNavLinks>
                )}
              </DashNavItem>
              <DashNavItem>
                <DashNavLink to="/projectsandresearch">
                  Projects&Research
                </DashNavLink>
              </DashNavItem>
              <DashNavItem>
                <DashNavLink to="/startups">Startups</DashNavLink>
              </DashNavItem>
              <DashNavItem>
                <DashNavLink to="/events">Events</DashNavLink>
              </DashNavItem>
            </DashNavMenu>
            <DashNavButton>
              <DashNavButtonLink onClick={logoutHandler}>
                Log Out
              </DashNavButtonLink>
            </DashNavButton>
          </DashNavbarContainer>
        </DashNav>
      </IconContext.Provider>
    </>
  );
};

export default DashNavbar;
