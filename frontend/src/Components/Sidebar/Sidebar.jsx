import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  Wrapper,
  Menu,
  SideLinks,
  BtnWrap,
  SideRoute,
  NavLink
} from "./SidebarStyles";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <Wrapper>
        <Menu>
          <SideLinks
            to="about"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            About
          </SideLinks>
          <NavLink
            to="/signup"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Sign Up
          </NavLink>
          <NavLink
            to="/prevReports"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Previous Reports
          </NavLink>
          <NavLink
            to="/newReport"
            onClick={toggle}
            spy={true}
            exact="true"
            offset={-80}
            activeClass="active"
          >
            Create New
          </NavLink>
        </Menu>

        <BtnWrap>
          <SideRoute to="/login">Log In</SideRoute>
        </BtnWrap>
      </Wrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
