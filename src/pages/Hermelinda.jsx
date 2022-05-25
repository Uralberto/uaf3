import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import BtnRegresar from "@components/BtnRegresar";
import Header from "@components/Header";
import HermelindaSvg from "@components/HermelindaSvg";
import Footer from "@components/Footer";
import mamaRb from "@imgs/mamaRb.png";

function Hermelinda() {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  const history = useHistory();
  const regresar = () => {
    history.push("/explora");
  };

  return (
    <>
      <Header toggleState={toggleState} state={state} />
      <BtnRegresar regresar={regresar} />

      {!state ? (
        <SectionHermelinda>
          <h1>Hermelinda</h1>
          <h6>Marzo/2022</h6>
          <p>
            En este proyecto, igual que en Arnulfo, se aplican animaciones con{" "}
            <i>Javascript</i>. Se asigna un valor inicial de opacidad cercano a
            cero para todas las piezas que conforman la imagen vectorial. En
            total son 304, cada una con un tono gris particular.
          </p>{" "}
          <p>
            Muy cerca del final de cada ciclo de animación las piezas que
            definen los aretes titilan con un efecto multicolor aleatorio. Cada
            vez que la animación es inactivada, los aretes siguen titilando pero
            en tiempo muy breve dejan de hacerlo y terminan pintados con un
            color igualmente aleatorio{" "}
          </p>{" "}
          <p>
            Las demás piezas aparecen de manera secuencial hasta completarse
            toda la imagen al término de cada ciclo de animación. Se logra
            cuando el valor final de opacidad, en este caso 1, se aplica a cada
            pieza de manera secuencial, no al mismo tiempo. Al detener la
            animación antes de terminar cada ciclo, el evento activa el llamado
            a la imagen completa. ¿Quién es ella? Mi madre, sigue maravillosa
            pese a su ausencia.
          </p>
          <DivImgHermelinda>
            <img src={mamaRb} alt="imagen herme 1994" />
            <span>
              Foto de referencia para dibujar la imagen vectorial. Elegida por
              su semblante feliz. Las fronteras difusas entre claros y oscuros
              implicó más esfuerzo de dibujo.
            </span>
          </DivImgHermelinda>
          <HermelindaSvg />
        </SectionHermelinda>
      ) : (
        <Redirect to="/itemsNav" />
      )}
      <BtnRegresar regresar={regresar} />
      <Footer />
    </>
  );
}

export default Hermelinda;

const SectionHermelinda = styled.section`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    padding-top: 8%;
    font-size: 2.4rem;
    font-weight: 400;
  }
  h6 {
    padding-bottom: 8%;
    font-weight: 300;
  }

  p {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

const DivImgHermelinda = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0;
  margin-top: 6%;
  img {
    width: 50%;
  }
  span {
    font-size: 1.4rem;
    margin-left: 15px;
    padding-bottom: 0;
    align-self: flex-end;
  }
`;
