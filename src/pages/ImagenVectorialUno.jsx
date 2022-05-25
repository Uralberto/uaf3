import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import Header from "@components/Header";
import BtnRegresar from "@components/BtnRegresar";
import ArnulfoUno from "@components/ArnulfoUno";

import Footer from "@components/Footer";

const ImagenVectorialUno = () => {
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
        <SectionImagenVectorialUno>
          <h1>Imagen vectorial uno animada</h1>
          <h6>Mayo/2022</h6>
          <p>
            Aquí se toma de nuevo la imagen del proyecto{" "}
            <Link to="/arnulfo">Arnulfo</Link> para mostrar otras opciones de
            animación con más color y movimiento. Si visitaste el proyecto
            Arnulfo es posible que sepas que la imagen original está formada por
            172 piezas grises. En esta oportunidad los grises pasan a ser
            colores vivos y las propiedades que definen el borde de las piezas
            se transforman. <i>Css</i> y <i>JavaScript</i> referencian el borde
            con la palabra <i>stroke</i>, trazo.
          </p>
          <p>
            En la imagen abajo las piezas no tienen color de relleno pero si
            borde amarillo y punteado. Se logra con una función{" "}
            <i>JavaScript</i> que hace precisamente eso: quita el relleno (
            <i>fill</i> ) y el borde (<i>stroke</i>) lo pinta como una línea
            discontinua. La propiedad que se manipula para este efecto se llama{" "}
            <i>stroke-dasharray</i>. Indica el patrón de rayas y espacios del
            borde. Si se quiere, con la propiedad <i>stroke-width</i> se le da
            un mayor o menor grosor.{" "}
          </p>
          <p>
            La imagen, que pretende simular una lámina acrílica perforada, es el
            estado inicial de donde parten las animaciones que se muestran luego
            de cliquear cada botón. En la primera animación, cada pieza recibe
            un color aleatorio cada 10 milisegundos. En la subsiguiente, las
            piezas se dispersan y cambian de color aleatoriamente y, en cada
            ciclo de animación, el color y el movimiento de cada pieza siempre
            son diferentes.{" "}
          </p>
          <p>
            La última animación juega con el color, el grosor y el patrón de
            rayas y espacios del <i>stroke</i> de cada pieza. Una función{" "}
            <i>JavaScript</i> manipula aleatoriamente el valor de tales
            propiedades. No se interviene el relleno (la propiedad <i>fill</i> )
            del espacio interno.
          </p>

          <DivArnulfoSvg>
            <ArnulfoUno></ArnulfoUno>
          </DivArnulfoSvg>
        </SectionImagenVectorialUno>
      ) : (
        <Redirect to="/itemsNav" />
      )}

      <BtnRegresar regresar={regresar} />
      <Footer />
    </>
  );
};

export default ImagenVectorialUno;

////////////////  Estilos ///////////////

const colorBlue3 = "#7aa1f7";
const colorDarkBlue3 = "#24309a";

const SectionImagenVectorialUno = styled.section`
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

  a {
    text-decoration: none;
    padding-left: 5px;
    color: ${colorDarkBlue3};
  }
  a:hover {
    transition: 0.3s;
    color: ${colorBlue3};
  }
`;

const DivArnulfoSvg = styled.div``;
