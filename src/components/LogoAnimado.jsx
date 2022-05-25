import React from "react";
import styled, { keyframes } from "styled-components";

const LogoAnimado = () => {
  return (
    <DivLogoAnimado>
      <SvgLogo
        className="logosvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <g id="logoUaf" transform="translate(164.551 -1678.359)">
          <Circle
            cx="201"
            cy="201"
            r="193.5"
            transform="translate(-116.551 1728.359)"
          />

          <GPathUno>
            <PathUno
              d="M95.893,4.243a6,6,0,0,1,8.485,0L190.03,89.894a6,6,0,0,1-4.243,10.243H14.485a6,6,0,0,1-4.243-10.243Z"
              transform="translate(109.083 1741.809) rotate(45)"
            />
          </GPathUno>

          <g>
            <PathDos
              d="M1448.641-44.333h-34.318l-2.753.4-2.191.939-1.033.97-.814,1.283-.5,1.064-.407,1-.188,1.314-.144,2.441.144,136.561.438,5.82.564,5.883"
              transform="translate(-1426.352 1857.358)"
            />
          </g>

          <g>
            <PathTres
              d="M-18.714,1971.715s13.5,86.788,99.25,86.8,98.484-86.769,98.484-86.769"
              transform="translate(-0.1 -0.176)"
            />
          </g>
        </g>
      </SvgLogo>
    </DivLogoAnimado>
  );
};

export default LogoAnimado;

// ESTILOS

const mainColorDarkBlue = "#272839";
const mainColorBlue = "#2337f1";

const animacionLogoGeneral = keyframes`
  
  0% {
    transform: scale(1.04);
    stroke-width: 0;
  }
  100% {
    stroke-width: 20px;
  }

   `;

const animacionLetraA = keyframes`
 from {
    stroke-dashoffset: 452px;
  }
  to {
    stroke-dashoffset: 0;
  }
   `;

const animacionBrazoLetraU = keyframes`
 from {
    stroke-dashoffset: 197px;
  }
  to {
    stroke-dashoffset: 0;
  }
   `;

const animacionParteBajaLetraU = keyframes`
 from {
    stroke-dashoffset: 288px;
  }
  to {
    stroke-dashoffset: 0;
  }

   `;

const animacionAnilloExternoSeBorra = keyframes`
  90%{
opacity:1;
  }
  91%{
opacity: 0;
  }
  99%{
    pacity: 0;
  }
100%{
  opacity: 1;
}

   `;

const animacionAnilloExterno = keyframes`
  from {
    stroke-dashoffset: 1250px;
  }
  to {
    stroke-dashoffset: 0;
  }
   `;

const rotarLetraA = keyframes`
  0% {
    transform: rotate(0deg);
  }

  35% {
    transform: rotate(0deg);
  }

  40% {
    transform: rotate(-45deg);
  }
  46% {
    transform: rotate(-45deg);
  }

  50% {
    transform: rotate(0deg);
  }

  85% {
    transform: rotate(0deg);
  }

  90% {
    transform: rotate(-45deg);
  }

  96% {
    transform: rotate(-45deg);
  }

  100% {
    transform: rotate(0deg);
  }
   `;

const DivLogoAnimado = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* background: #e7e4e7; */
  box-shadow: 1px 1px 2px #c7c4c7, -1px -1px 2px #fcf9fc;
  fill: none;
  @media (min-width: 600px) {
    width: 120%;
  }
`;

const SvgLogo = styled.svg``;

const Circle = styled.circle`
  stroke-width: 15px;
  stroke: ${mainColorDarkBlue};
  stroke-dasharray: 1250;
  stroke-dashoffset: 0;
  animation: ${animacionLogoGeneral} 0s ease-out forwards,
    ${animacionAnilloExterno} 2s linear 2.5s forwards;
`;

const GPathUno = styled.g`
  animation: ${rotarLetraA} 30s ease-in-out infinite forwards;
  transform-origin: center;
  transform-box: fill-box;
`;

const PathUno = styled.path`
  stroke: ${mainColorBlue};
  stroke-dasharray: 452;
  stroke-dashoffset: 0;
  animation: ${animacionLogoGeneral} 2s ease-out forwards,
    ${animacionLetraA} 2s linear 2.5s forwards;
  transform-origin: 0 0;
`;

const PathDos = styled.path`
  stroke: ${mainColorDarkBlue};
  animation: ${animacionLogoGeneral} 2s ease-out forwards,
    ${animacionBrazoLetraU} 2s linear 2.5s forwards;
  stroke-dasharray: 197;
  stroke-dashoffset: 0;
`;

const PathTres = styled.path`
  stroke: ${mainColorDarkBlue};
  animation: ${animacionLogoGeneral} 1s ease-out forwards,
    ${animacionParteBajaLetraU} 2s linear 2.5s forwards;
  stroke-dasharray: 288;
  stroke-dashoffset: 0;
`;
