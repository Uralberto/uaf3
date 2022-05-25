import React from "react";
import styled from "styled-components";
import btnPlay from "@icons/btnPlay.svg";

const BtnPlay = () => {
  return (
    <ButtonPlay>
      <img src={btnPlay} alt="botón play" />
    </ButtonPlay>
  );
};

export default BtnPlay;

// ESTILOS

const colorGray3 = "#b4b3b7";
const colorGray1 = "#f6f3f3;";

const ButtonPlay = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  img {
    filter: drop-shadow(-1px -1px 0px #f6f3f3) drop-shadow(2px 2px 0px #b4b3b7);
    width: 35px;
  }
`;
