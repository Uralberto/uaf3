import React from "react";
import styled, { keyframes } from "styled-components";

//rsc
const LogoFeliz = () => {
  return (
    <DivLogoFeliz className="LogoFeliz">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" fill="none">
        <g
          id="paths"
          className="paths"
          transform="translate(164.551 -1678.359)"
        >
          <circle
            id="anillo"
            cx="201"
            cy="201"
            r="193.5"
            transform="translate(-116.551 1728.359)"
          />
          <PathLetraA
            d="M95.893,4.243a6,6,0,0,1,8.485,0L190.03,89.894a6,6,0,0,1-4.243,10.243H14.485a6,6,0,0,1-4.243-10.243Z"
            transform="translate(109.083 1741.809) rotate(45)"
          />
          <PathParteUnoLetraU
            d="M1448.641-44.333h-34.318l-2.753.4-2.191.939-1.033.97-.814,1.283-.5,1.064-.407,1-.188,1.314-.144,2.441.144,136.561.438,5.82.564,5.883"
            transform="translate(-1426.352 1857.358)"
          />
          <PathParteDosLetraU
            d="M-18.714,1971.715s13.5,86.788,99.25,86.8,98.484-86.769,98.484-86.769"
            transform="translate(-0.1 -0.176)"
          />
        </g>
      </svg>
    </DivLogoFeliz>
  );
};

export default LogoFeliz;

// ESTILOS

const colorNaranja = "#f7cd52";

const colorDarkBlue1 = "#262b59";

const recortarA = keyframes`
   to {
      stroke-dashoffset: 490px;
      stroke-width: 30px;
      transform: translate(80.083px, 1741.809px) rotate(45deg)
    }
`;

const fillAmarillo = keyframes`
  to {
      fill: ${colorNaranja};
    }
`;

const recortarU = keyframes`
 to {
      stroke-dashoffset: 490px;
      stroke-width: 30px;
    }

`;

const DivLogoFeliz = styled.div`
  width: 40px;

  svg {
    width: 90%;
    animation: ${fillAmarillo} 2s linear forwards;
  }

  g {
    stroke: ${colorDarkBlue1};
    stroke-width: 17px;
  }
`;

const PathLetraA = styled.path`
  stroke: ${colorDarkBlue1};
  stroke-linecap: round;
  stroke-dasharray: 500px;
  stroke-dashoffset: 0;
  animation: ${recortarA} 2s ease-in-out forwards;
`;

const PathParteUnoLetraU = styled.path`
  stroke-linecap: round;
  stroke-dasharray: 500px;
  stroke-dashoffset: 0;
  animation: ${recortarU} 2s ease-in-out forwards;
`;

const PathParteDosLetraU = styled.path``;
