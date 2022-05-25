import React from "react";
import styled from "styled-components";
import Vineta from "@components/Vineta";
import NombreItem from "@components/NombreItem";
import BtnFlechaAbajo from "@components/BtnFlechaAbajo";

const SubItem = ({ nombreSubItem }) => {
  return (
    <DivSubItem>
      <Vineta />
      <NombreItem nombreItem={nombreSubItem} />
      <BtnFlechaAbajo />
    </DivSubItem>
  );
};

export default SubItem;

// ESTILOS

const DivSubItem = styled.div`
  display: grid;
  grid-template: 30px / 30px 1fr 50px;
  width: 90%;
  margin-left: 4%;
  margin-top: 12px;
  margin-bottom: 12px;
  box-shadow: 1px 1px 1px #c7c4c7, -1px -1px 1px #fcf9fc;
  border-radius: 25px;
  transform-origin: center;
  list-style: none;
  button {
    width: 100%;
    img {
      width: 50%;
    }
  }
  @media (min-width: 600px) {
    width: 80%;
  }
`;
