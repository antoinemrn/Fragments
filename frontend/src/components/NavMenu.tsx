import { routes } from "../resources/routes";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const NavMenu = () => {
  return (
    <NavLinkContainer>
      {routes.map((x) => (
        <NavLinkStyled to={`/${x.path}`} key={x.path}>
          {React.cloneElement(x.icon, {
            style: { width: "100%", height: "100%" },
          })}
          {x.name}
        </NavLinkStyled>
      ))}
    </NavLinkContainer>
  );
};

const NavLinkContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
`;

const NavLinkStyled = styled(NavLink)`
  display: grid;
  grid-template-columns: 25% 1fr;
  align-items: center;
  padding: 25px;
  text-align: center;
  color: #000000;
  text-decoration: none;
  &:hover,
  &.active {
    background: #f8f7f6;
    backdrop-filter: blur(15px);
  }
  &:visited {
    color: #000000;
    text-decoration: none;
  }
  &.active {
    font-weight: bold;
    border-left: solid 5px #1100af;
  }
`;

export default NavMenu;
