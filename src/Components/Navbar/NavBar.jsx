import React from "react";
import styled from "styled-components";
import { HamburgerMenu } from "../hamburgerMenu/index";

const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  margin-left:3vw;
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <HamburgerMenu />
    </NavbarContainer>
  );
}
