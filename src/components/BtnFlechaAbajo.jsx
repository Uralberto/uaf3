import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import flechaAbajo from "@icons/flechaAbajo.svg";

const BtnFlechaAbajo = () => {
  return (
    <ButtonFlechaAbajo>
      <img src={flechaAbajo} alt="icono flecha abajo" />
    </ButtonFlechaAbajo>
  );
};

export default BtnFlechaAbajo;

// ESTILOS
const colorBlue3 = "#7aa1f7";

const ButtonFlechaAbajo = styled.button`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  img {
    &:hover {
      filter: drop-shadow(-3px -3px 3px ${colorBlue3});
      transition: 0.1s;
    }
  }
`;
