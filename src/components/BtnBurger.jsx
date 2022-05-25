import React from "react";
import styled from "styled-components";

const BtnBurger = (props) => {
  return (
    <ButtonBurger onClick={props.toggleState}>
      <svg id="burguer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
        <g className="burger-paths" transform="translate(1.5 2.121)">
          <path
            id="linea1"
            d="M0,0H30"
            stroke="#272839"
            strokeLinecap="round"
            strokeWidth="3px"
            transform="translate(0 2.5)"
          />

          <path
            id="linea2"
            d="M0,0H30"
            stroke="#2337f1"
            strokeLinecap="round"
            strokeWidth="3px"
            transform="translate(0 11)"
          />
          <path
            id="linea3"
            d="M0,0H30 "
            stroke="#272839"
            strokeLinecap="round"
            strokeWidth="3px"
            transform="translate(0 19.5)"
          />
        </g>
      </svg>
    </ButtonBurger>
  );
};

export default BtnBurger;

//////   ESTILOS ESTILOS  ///////////////////////////////////

const ButtonBurger = styled.button`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
