import React from "react";
import styled from "styled-components";
import github from "@icons/github.svg";
import linkedin from "@icons/linkedin.svg";
import twitter from "@icons/twitter.svg";

const Footer = () => {
  return (
    <MyFooter>
      <DivContenedorRedes>
        <div>
          <a href="https://twitter.com/Uralberto" target="_blank">
            <img src={twitter} alt="icono de twitter" />
          </a>
        </div>

        <div>
          <a href="https://github.com/Uralberto" target="_blank">
            <img src={github} alt="icono de github" />
          </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/uriel-alberto-arevalo-franco-7258ab13/"
            target="_blank"
          >
            <img src={linkedin} alt="icono de linkedin" />
          </a>
        </div>
      </DivContenedorRedes>
    </MyFooter>
  );
};

export default Footer;

// ESTILOS

const colorBg = "#e7e4e7";
const colorGray3a = "#c6c5c972";

const MyFooter = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 20px;
`;

const DivContenedorRedes = styled.div`
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-top: 1px solid ${colorGray3a};
  border-bottom: 1px solid ${colorGray3a};

  img {
    width: 70%;
  }
  @media (min-width: 600px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }

  @media (min-width: 700px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
