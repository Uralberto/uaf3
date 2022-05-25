import React from "react";
import styled, { keyframes } from "styled-components";
import Vineta from "@components/Vineta";
import NombreItem from "@components/NombreItem";
import BtnFlechaAbajo from "@components/BtnFlechaAbajo";

const Item = ({ nombreItem }) => {
  return (
    <DivItem>
      <Vineta />
      <NombreItem nombreItem={nombreItem} />
      <BtnFlechaAbajo />
    </DivItem>
  );
};

export default Item;

//ESTILOS

const colorGray7 = "#d2cfd2";
const colorGray8 = " #fcf9fc";

const DivItem = styled.div`
  display: grid;
  grid-template: 30px / 30px 1fr 50px;
  width: 84%;
  margin-left: 8%;
  margin-top: 12px;
  margin-bottom: 12px;
  box-shadow: 1px 1px 1px ${colorGray7}, -1px -1px 1px ${colorGray8};
  border-radius: 25px;
  transform-origin: center;
  transform: translateY(-50px);
  list-style: none;
  text-decoration: none;

  button {
    width: 100%;
  }
`;
