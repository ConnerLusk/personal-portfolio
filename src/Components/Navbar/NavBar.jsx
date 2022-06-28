import React from "react";
import styled from "styled-components";
import { HamburgerMenu } from "../HamburgerMenu";

const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  flex-direction: row-reverse;
`;

export function Navbar(props) {
  return (
    <NavbarContainer>
      <HamburgerMenu />
    </NavbarContainer>
  );
}