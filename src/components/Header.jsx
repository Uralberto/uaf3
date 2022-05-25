import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoAnimado from "@components/LogoAnimado";
import NombreEslogan from "@components/NombreEslogan";
import BtnBurger from "@components/BtnBurger";
import BtnClose from "@components/BtnClose";

const Header = (props) => {
  return (
    <MyHeader>
      <Link to="/itemsNav">
        <LogoAnimado />
      </Link>

      <NombreEslogan />
      <MenuBurger>
        {props.state ? (
          <BtnBurger toggleState={props.toggleState} />
        ) : (
          <BtnClose toggleState={props.toggleState} />
        )}
      </MenuBurger>
    </MyHeader>
  );
};

export default Header;

// ESTILOS

const colorBg = "#e7e4e7";
const colorGray7 = "#d2cfd2";
const colorGray8 = " #fcf9fc";

const MyHeader = styled.header`
  width: 100%;
  min-width: 200px;
  display: grid;
  align-items: center;
  grid-template: 100% / 40px 1fr 40px;
  font-size: 1.6rem;
  margin-bottom: 30px;
  position: relative;
`;

const MenuBurger = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20%;

  &:hover {
    box-shadow: 1px 1px 2px ${colorGray7}, -1px -1px 2px ${colorGray8};
    transition: 0.2s;
    height: 70%;
    align-items: center;
  }
`;
