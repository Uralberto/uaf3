import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import Header from "@components/Header";
import BtnRegresar from "@components/BtnRegresar";
import HermelindaUno from "@components/HermelindaUno";
// import Hermelinda from "@pages/Hermelinda";

import Footer from "@components/Footer";

const ImagenVectorialDos = () => {
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
        <SectionImagenVectorialDos>
          <h1>Imagen vectorial dos animada</h1>
          <h6>Mayo/2022</h6>
          <p>
            Este proyecto usa la imagen vectorial del proyecto
            <Link to="/hermelinda">Hermelinda</Link> incluido en este sitio. Si
            ya lo visitaste probablemente sabrás que la imagen consta de 304
            piezas grises diferentes. Las piezas van marcadas con etiquetas{" "}
            <code>&lt;{"path>"}</code>. Las <code>&lt;{"path>"}</code> van
            dentro de un contenedor <code>&lt;{"g>"}</code> (grupo). El
            contenedor <code>&lt;{"g>"}</code>, por su parte, es contenido por
            un contenedor marcado con la etiqueta <code>&lt;{"defs>"}</code>.
            Finalmente, <code>&lt;{"defs>"}</code> es contenida por la etiqueta{" "}
            <code>&lt;{"svg>"}</code>, la envolvente principal. El documento{" "}
            <i>html</i>, <i>grosso modo</i>, se ve mas o menos así:
          </p>
          <br />
          <Pre>
            <code>{"<svg>"}</code>
            <br />
            <code>
              {"  "}
              {"<defs>"}
            </code>
            <br />
            <code>
              {"   "} {"<g"}
              <Span> id = 'img-uno'</Span>
            </code>
            <code>&gt;</code> <br />
            <code>
              {"       "}
              {"<path/>"}{" "}
            </code>{" "}
            <br />
            <code>
              {"       "}
              {"<path/>"}{" "}
            </code>
            <br /> {"       "}.<br /> {"       "}.<br />
            <code>
              {" "}
              {"   "}
              {"</g>"}
            </code>{" "}
            <br />
            <code>
              {" "}
              {"  "}
              {"</defs>"}
            </code>
            <br />
            <code>{"</svg>"}</code>
          </Pre>
          <br />
          <p>
            En <code>{"<g>"}</code> se pueden incluir clases para aplicar
            estilos a todos los <code>{"<path>"}</code> que envuelve. La
            etiqueta <code>{"<defs>"}</code> es un contenedor a introducir si se
            quiere usar la imagen en otro lugar del documento <i>html</i>. Para
            ello se utiliza la etiqueta <code>{"<use>"}</code>. Una manera de
            hacerlo es ubicarla justo antes de cerrar la etiqueta{" "}
            <code>{"<svg>"}</code>. Así:
          </p>{" "}
          <br />
          <Pre>
            <code>
              {"<svg"}
              <Span>{"   propiedades, clases..."}</Span>
              {">"}
            </code>
            <br />
            <code>
              {"  "}
              {"<g>"}
            </code>
            <br />
            <code>
              {"     "}
              {"<use"}
              <Span> {"href='#img-uno'"}</Span>
              {">"}
              {"</use>"}
            </code>

            <br />
            <code>
              {"  "}
              {"</g>"}
            </code>
            <br />
            <code>{"</svg>"}</code>
          </Pre>
          <p>
            <br />
            El enlace{" "}
            <Span>
              <code>'#img-uno'</code>
            </Span>{" "}
            se refiere al selector ubicado en la línea de código{" "}
            <code>
              {"   "} {"<g"}
              <Span> id = 'img-uno'</Span>
              {">"}{" "}
            </code>
            más arriba.
          </p>
          <p>
            Cada pieza, definida por un <code>{"<path>"}</code> particular, se
            traslada, gira o cambia de tamaño dependiendo de la animación que se
            active con los botones previstos para ello (ver más abajo). Con la
            animación Escalar las piezas se reducen a un décimo del tamaño
            inicial y luego crecen hasta llegar de nuevo al tamaño de partida.
            El punto de origen del escalamiento es el centro del contenedor de
            cada pieza.
          </p>
          <p>
            Con la animación Rotar las piezas giran con referencia a un eje{" "}
            <b>Z</b> y a un centro de giro por fuera de su propio contenedor. El
            centro de giro es también aleatorio; significa que la animación será
            diferente con cada toque de botón. Con la animación Dispersar se
            activan de igual manera animaciones aleatorias pero esta vez con
            movimientos de traslación en sentido{" "}
            <i>
              <b>X</b>
            </i>{" "}
            o{" "}
            <i>
              <b>Y</b>
            </i>{" "}
            . Adicionalmente activa movimientos de rotación tomando como centro
            de giro el centro del contenedor de cada pieza.{" "}
          </p>
          <p>
            La animación Desvanecer gira las piezas alrededor de un eje central
            horizontal ({" "}
            <i>
              <b>X </b>)
            </i>{" "}
            o de un eje central vertical ({" "}
            <i>
              <b>Y </b>
            </i>
            ). A cada pieza se le define como eje de giro la línea recta que
            pasa por el centro de la caja que la contiene. Grupos de piezas (son
            3 grupos con igual número de piezas) giran en sentido horizontal o
            vertical hasta completar 89° de giro con la idea de solo ver su
            canto, su borde, que termina siendo semejante a una forma
            lenticular.
          </p>
          <p>
            Si vamos a las opciones que <i>JavaScript</i> ofrece para animar
            tendríamos un menú infinito de posibilidades. El reto es lograr
            animaciones creativas e interesantes.
          </p>
          <DivHermelindaSvg>
            <HermelindaUno></HermelindaUno>
          </DivHermelindaSvg>
        </SectionImagenVectorialDos>
      ) : (
        <Redirect to="/itemsNav" />
      )}

      <BtnRegresar regresar={regresar} />
      <Footer />
    </>
  );
};

export default ImagenVectorialDos;

////////////////  Estilos ///////////////
const colorBlue3 = "#7aa1f7";
const colorDarkBlue3 = "#24309a";
const colorBgCode = "#dcdada";

const SectionImagenVectorialDos = styled.section`
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

const DivHermelindaSvg = styled.div``;

const Span = styled.span`
  font-size: 12px;
`;

const Pre = styled.pre`
  background-color: ${colorBgCode};
  padding: 10px;
`;
