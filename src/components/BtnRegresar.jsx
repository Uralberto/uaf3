import React from "react";
import styled from "styled-components";
import flechaRegresar from "@icons/flechaRegresar.svg";

// rsc

const BtnRegresar = (props) => {
  return (
    <ButtonRegresar onClick={props.regresar}>
      <img src={flechaRegresar} alt="icono flecha regresar" />
      <span>Regresar</span>
    </ButtonRegresar>
  );
};

export default BtnRegresar;

// ESTILOS

const ButtonRegresar = styled.button`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px 0;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  span {
    padding-left: 10px;
  }
`;

// Sigo en un asunto que dí por muerto. En algo que ganó mi atención
//             cuando inicié universidad en 1981. Hace un buen rato. Le decíamos
//             “programar”, como ahora. Alcanzo a recordar el lenguaje de
//             programación <i>Fortran IV</i> que usaba para resolver, por ejemplo,
//             ecuaciones simultáneas de primer grado
