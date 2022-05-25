import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import persiana1 from "@imgs/persiana1.svg";
import persiana2 from "@imgs/persiana2.svg";
import LogoShadow from "@components/LogoShadow";
import Header from "@components/Header";
import Footer from "@components/Footer";

const Home = () => {
  const [state, setState] = useState(true);

  const toggleState = () => {
    setState(!state);
  };

  return (
    <Div>
      <Header toggleState={toggleState} state={state} />
      <SectionLogoShadow>
        {state ? <LogoShadow /> : <Redirect to="/itemsNav" />}
      </SectionLogoShadow>
      <Footer />
    </Div>
  );
};

export default Home;

///////////////  ESTILOS ////////////////////////////////////////

const animarBgImg = keyframes`
 
  0%{
    background-image: url("${persiana1}");
    background-repeat: repeat-y;
    background-size: 100% 14px;
  } 


  70%{
    background-image: url("${persiana1}");
    background-repeat: repeat-y;
    background-size: 100% 32px;

  } 

  100% {
    background-image: url("${persiana2}");
    background-repeat: repeat-y;
    background-size: 100% 32px;

  }


`;

const Div = styled.div`
  display: grid;
  grid-template: 10vh 65vh 18vh / 1fr;
  position: relative;

  @media (min-width: 375px) {
    grid-template: 10vh 65vh 18vh/ 1fr;
  }

  @media (min-width: 600px) {
    grid-template: 10vh 65vh 18vh/ 1fr;
  }

  @media (min-width: 700px) {
    grid-template: 10vh 65vh 18vh/ 1fr;
  }
`;

const SectionLogoShadow = styled.section`
  display: flex;
  animation: ${animarBgImg} 3s ease-in-out forwards;

  div {
    align-items: center;
    img {
      @media (min-width: 700px) {
        width: 80%;
        margin: 0 10% 0 10%;
      }
    }
  }
`;
