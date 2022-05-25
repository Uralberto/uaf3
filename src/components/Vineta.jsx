import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const Vineta = () => {
  const vinetaRef = useRef();

  useEffect(() => {
    // let time = 0;

    const vineta = vinetaRef.current;
    setTimeout(() => {
      // vineta.animate([{ visibility: "visible" }], {
      vineta.animate([{ transform: "scale(1)" }], {
        duration: 800,
        fill: "forwards",
        easing: "ease-out",
      });
    }, 800);
  }, []);

  return (
    <DivVineta ref={vinetaRef}>
      <svg
        className="logosvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 600"
        fill="none"
        data-item="te-cuento"
      >
        <GPaths id="paths" transform="translate(164.551 -1678.359)">
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
        </GPaths>
      </svg>
    </DivVineta>
  );
};

export default Vineta;

//ESTILOS

const DivVineta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  margin-left: 10px;
  transform: scale(0);
  /* visibility: hidden; */
`;

const GPaths = styled.g`
  stroke: #262b59;
  stroke-width: 17px;
`;

const PathLetraA = styled.path`
  stroke-linecap: round;
  stroke: #262b59;
`;

const PathParteUnoLetraU = styled.path`
  stroke-linecap: round;
`;

const PathParteDosLetraU = styled.path``;
