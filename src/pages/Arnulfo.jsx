import React, { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import BtnRegresar from "@components/BtnRegresar";
import Header from "@components/Header";
import ArnulfoSvg from "@components/ArnulfoSvg";
import Footer from "@components/Footer";
import papaRb from "@imgs/papaRb.png";

const Arnulfo = () => {
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
        <SectionArnulfo>
          <h1>Arnulfo</h1>
          <h6>Mayo/2022</h6>

          <p>
            Se trata de animaciones programadas con código Javascript aplicadas
            a una imagen vectorial. Se asignan valores aleatorios (<i>random</i>
            ) de opacidad a las piezas que la conforman.
          </p>

          <p>
            {" "}
            El valor de la opacidad es 1 cuando la animación es detenida. Las
            piezas que definen la corbata terminan con un color generado
            aleatoriamente.
          </p>

          <p>
            La imagen tiene 173 piezas diferentes, cada una con un tono gris
            particular. La aninación se activa o inactiva a gusto del usuario.
          </p>

          <p>
            {" "}
            Los cambios de tonalidad gris o de color, para el caso de la
            corbata, son consecuencia del valor <i>random</i> de opacidad que
            cada pieza recibe por un lapso de 50 milisegundos.{" "}
          </p>

          <p>
            Se ensayó aplicar un color final (no gris) <i>random</i> a cada
            pieza pero los resultados se alejaron mucho del espiritu que la
            imagen original transmite. ¿Quien es? Mi padre, luchador hasta el
            final de sus días.
          </p>

          <DivImgArnulfo>
            <img src={papaRb} alt="imagen papa con bg removido" />
            <SpanPieDeFoto>
              Fotografía de referencia para dibujar la imagen vectorial. No es
              muy nítida, pero el ánimo que entraña favoreció su elección. Es
              del año 1981.
            </SpanPieDeFoto>
          </DivImgArnulfo>
          <ArnulfoSvg />
        </SectionArnulfo>
      ) : (
        <Redirect to="/itemsNav" />
      )}

      <BtnRegresar regresar={regresar} />
      <Footer />
    </>
  );
};

export default Arnulfo;

// ESTILOS

const SectionArnulfo = styled.section`
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

const DivImgArnulfo = styled.div`
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

export const SpanPieDeFoto = styled.span`
  padding-top: 2%;
  font-size: 1.4rem;
  padding-bottom: 20px;
  align-self: flex-start;
`;
