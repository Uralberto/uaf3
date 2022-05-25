import React, { useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const BtnClose = (props) => {
  const svgRef = useRef();

  useEffect(() => {
    const lines = svgRef.current.children;
    lines[0].style.transformOrigin = "center";
    lines[0].animate(
      [
        {
          transform: "rotateZ(360deg)",
        },

        {
          transform: "rotateZ(0deg)",
        },
      ],
      { duration: 300, fill: "forwards", delay: 300 }
    );

    lines[1].style.transformOrigin = "center";
    lines[1].animate(
      [
        {
          transform: "rotateZ(360deg)",
        },
        {
          transform: "rotateZ(0deg)",
        },
      ],
      { duration: 300, fill: "forwards" }
    );
  });

  return (
    <ButtonClose onClick={props.toggleState}>
      <svg ref={svgRef} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25">
        <g>
          <line
            x1="0"
            y1="0"
            x2="25"
            y2="25"
            strokeWidth="3px"
            stroke="#2337f1"
            strokeLinecap="round"
            transformbox="fill-box"
          />
        </g>
        <g>
          <line
            x1="25"
            y1="0"
            x2="0"
            y2="25"
            strokeWidth="3px"
            stroke="#272839"
            strokeLinecap="round"
            transformbox="fill-box"
          />
        </g>
      </svg>
    </ButtonClose>
  );
};

export default BtnClose;

// ESTILOS ESTILOS

const animarEquix = keyframes`
  



`;

const ButtonClose = styled.button`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;

const Path = styled.path``;
