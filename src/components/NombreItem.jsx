import React from "react";
import styled, { keyframes } from "styled-components";

const NombreItem = (props) => {
  return <DivNombreItem>{props.nombreItem}</DivNombreItem>;
};

export default NombreItem;

// ESTILOS

const animarItemTexto = keyframes`
   to {
    transform: rotateY(0deg);
  }
`;

const DivNombreItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  transform-origin: left;
  transform: rotateY(90deg);
  animation: ${animarItemTexto} 2s linear forwards;
`;
