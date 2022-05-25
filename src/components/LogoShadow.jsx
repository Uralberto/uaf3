import React from "react";
import styled, { keyframes } from "styled-components";
import logoGris from "@imgs/logoGris.svg";

const LogoShadow = () => {
  return (
    <DivLogoShadow>
      <img src={logoGris} alt="logo gris con estilos filter: drop-shadow" />
    </DivLogoShadow>
  );
};

export default LogoShadow;

// ESTILOS

const colorGray7 = "#d2cfd2";
const colorGray8 = "#fcf9fc";
const colorGray9 = " #858585";
const colorGray10 = " #e7e4e7";
const colorGray11 = "  #d2cfd2";
const colorGray12 = "#fcf9fc";

const colorBg = "#e7e4e7";

const animarDropShadow = keyframes`
   0% {
    opacity: 0;
  }

  30% {
    filter: drop-shadow(0px 0px 0px  #858585)
      drop-shadow(-0px -0px 0px #e7e4e7 );
  }

  100% {
    filter: drop-shadow(3px 1px 1px #d2cfd2)
      drop-shadow(-1px -1px 3px #fcf9fc);
    transform: rotate(-30deg);
  }
`;

const DivLogoShadow = styled.div`
  position: relative;
  width: 90%;
  margin: auto;
  overflow: hidden;
  img {
    width: 100%;
    stroke-width: 100px;
    filter: drop-shadow(3px 1px 1px #d2cfd2) drop-shadow(-1px -1px 3px #fcf9fc);
    animation: ${animarDropShadow} 2.2s steps(20, end) forwards;
  }
`;
