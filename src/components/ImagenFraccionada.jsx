import React from "react";
import styled, { keyframes } from "styled-components";
import { Link, Redirect, useHistory } from "react-router-dom";

const mosaico = require.context("../assets/imgs/mosaico");

const ImagenFraccionada = () => {
  const imgs = mosaico.keys().reverse();

  return (
    <div>
      <DivMosaico>
        {imgs.map((item, index) => (
          <DivImg key={`fraccionarAnimar${index}`}>
            <Img src={mosaico(item)} />
          </DivImg>
        ))}
      </DivMosaico>
      );
    </div>
  );
};

export default ImagenFraccionada;

const DivMosaico = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  grid-template-rows: repeat(12, 5.8%);
  row-gap: 1px;
  column-gap: 1px;
  margin-top: -10px;
  transform-origin: center;
  overflow: hidden;
`;

const DivImg = styled.div`
  position: relative;
  transform-origin: center;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;
