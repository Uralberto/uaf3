import React from "react";
import styled from "styled-components";
import flechaArriba from "@icons/flechaArriba.svg";

const BtnArriba = () => {
  return (
    <BotonArriba className="BtnArriba">
      <img src={flechaArriba} alt="botón arriba" />
    </BotonArriba>
  );
};

export default BtnArriba;

//EESTILOS ESTILOS
const colorNaranja30 = "#f7cd5230";

const BotonArriba = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 0;
  justify-content: right;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 400;

  img {
    width: 30px;
    height: 30px;
    background-color: ${colorNaranja30};
    padding: 4px;
  }
`;
