import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Redirect, useHistory } from "react-router-dom";

const mosaico = require.context("../assets/imgs/mosaico");

import Header from "@components/Header";
import BtnRegresar from "@components/BtnRegresar";
import BtnPlay from "@components/BtnPlay";
import BtnPause from "@components/BtnPause";
import Footer from "@components/Footer";

console.log(mosaico.id);

const FraccionarAnimar = () => {
  const [state, setState] = useState(false);
  const [isAnimationUnoOn, setIsAnimationUnoOn] = useState(false);
  const [isAnimationDosOn, setIsAnimationDosOn] = useState(false);
  const [isAnimationTresOn, setIsAnimationTresOn] = useState(false);
  const [isAnimationCuatroOn, setIsAnimationCuatroOn] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

  const toggleState = () => {
    setState(!state);
  };

  const toggleAnimationUno = () => {
    setIsAnimationUnoOn(!isAnimationUnoOn);
  };

  const toggleAnimationDos = () => {
    setIsAnimationDosOn(!isAnimationDosOn);
  };

  const toggleAnimationTres = () => {
    setIsAnimationTresOn(!isAnimationTresOn);
  };

  const toggleAnimationCuatro = () => {
    setIsAnimationCuatroOn(!isAnimationCuatroOn);
  };

  const history = useHistory();
  const regresar = () => {
    history.push("/explora");
  };

  const imgs = mosaico.keys().reverse();

  const imgRef = useRef();
  let tOUno = "right";

  ///////////Logica animacion uno: Carnaval///////////////////////////////////////////

  const animarImgUno = (fraccionImg) => {
    imgRef.current.children[fraccionImg].style.transformOrigin = tOUno;
    let delayed = Math.random() * 5000;
    imgRef.current.children[fraccionImg].animate(
      [
        { transform: "rotateY(90deg)" },
        { transform: "skew(20deg)" },
        { transform: "rotate(180deg)" },
        { transform: "skew(-20deg)" },
        { transform: "rotateY(45deg)" },
      ],
      {
        duration: 5000,
        fill: "backwards",
        easing: "ease-out",
        delay: delayed,
      }
    );
  };

  const pararAnimarImgUno = (fraccionImg) => {
    imgRef.current.children[fraccionImg].style.transformOrigin = tOUno;
    imgRef.current.children[fraccionImg].animate(
      [
        { transform: "rotateY(0deg)" },
        { transform: "skew(0deg)" },
        { transform: "rotate(0deg)" },
        { transform: "skew(0deg)" },
        { transform: "rotateY(0deg)" },
      ],
      {
        duration: 10000,
        fill: "backwards",
        easing: "ease-out",
      }
    );
  };

  useEffect(() => {
    const fraccionesImg = imgRef.current.children;
    if (isAnimationUnoOn) {
      for (let k = 0; k <= fraccionesImg.length - 1; k++) {
        animarImgUno(k);
        if (tOUno === "right") {
          tOUno = "left";
        } else {
          tOUno = "right";
        }
      }
    } else {
      for (let k = 0; k <= fraccionesImg.length - 1; k++) {
        pararAnimarImgUno(k);
      }
    }
  }, [isAnimationUnoOn]);

  ///////////Logica animacion dos: Crescendo  ///////////////////////////////////////////
  // Animación del contenedor de cada imágen del mosaico
  // Los contendores de cada imagen del mosaicoa se envían al pie del contenedor
  // se envían al pie de la imágen y luego suben a su posición original con
  // movimiento de translación y rotación

  let f1 = 50;
  let f2 = 1;

  function animarImgDos(n) {
    const fraccionesImg = imgRef.current.children;
    let h = imgRef.current.clientHeight;
    let py = fraccionesImg[n].offsetTop;
    let px = f1 * f2;
    let deg = Math.random() * 360;

    let transformCero =
      "translate(" + px + "px" + "," + (h - py) + "px) rotate(" + deg + "deg)";
    let transformCien = "translate(0px, 0px) rotate(0deg)";

    fraccionesImg[n].animate(
      {
        transform: [transformCero, transformCien],
      },
      { duration: 10000, easing: "ease-out" }
    );

    f1 -= 0.3;
    f2 = -f2;
  }

  useEffect(() => {
    const fraccionesImg = imgRef.current.children;
    let i = fraccionesImg.length - 1;
    let k;
    if (isAnimationDosOn) {
      console.log("uriel en if");
      for (k = i; k >= 0; k--) {
        animarImgDos(k);
        if (tOUno === "right") {
          tOUno = "left";
        } else {
          tOUno = "right";
        }
      }
    } else {
    }
  }, [isAnimationDosOn]);

  ///////////Logica animacion tres: Ráfaga///////////////////////////////////////////
  // Animación del contenedor de cada imágen del mosaico
  // Efecto de borrado de cada contenedor, de arriba a abajo
  // Enseguida los contenedores vuelven y aparecen de arriba abajo con movimientos de rotación y transalción
  // Algo así como la recuperación de los contenedotes que se han borrado

  let f3 = 1;
  let f4 = 1;

  useEffect(() => {
    const fraccionesImg = imgRef.current.children;
    let i = fraccionesImg.length - 1;
    if (isAnimationTresOn) {
      let sI = setInterval(function () {
        let py = fraccionesImg[i].offsetTop;
        let pxl = fraccionesImg[i].offsetLeft * f3;

        let deg = Math.random() * 180;

        let topCero = py + "px";
        let topCien = 0 + "px";

        let leftCero = pxl + "px";
        let leftCien = 0 + "px";

        let rotateCero = "rotate(" + deg + "deg)";
        let rotateCien = "rotate(0deg)";

        fraccionesImg[i].animate(
          {
            top: [topCero, topCien],
            left: [leftCero, leftCien],
            transform: [rotateCero, rotateCien],
          },
          { duration: 1500, easing: "ease-out", fill: "forwards" }
        );

        f3 -= 0.004;
        f4 = -f4;
        i--;
        if (i === 1) {
          clearInterval(sI);
        }
      }, 20);
    }
  }, [isAnimationTresOn]);

  ///////////Logica animacion cuatro: persiana///////////////////////////////////////////

  const persianaAbajo = (i, k, fraccionesImg, delay) => {
    if (isAnimationCuatroOn) {
      for (i; i <= k; i++) {
        let deg = 90;
        let rotateCero = "rotateX(" + deg + "deg)";
        let rotateCien = "rotateX(0deg)";
        fraccionesImg[i].style.transformOrigin = "center";
        fraccionesImg[i].animate(
          {
            transform: [rotateCero, rotateCien],
          },
          {
            duration: 500,
            easing: "ease-in-out",
            fill: "forwards",
            delay: delay,
          }
        );
      }
    }
  };

  const persianaArriba = (i, k, fraccionesImg, delay) => {
    if (isAnimationCuatroOn) {
      for (i; i >= 0; i--) {
        let deg = 90;
        let rotateCero = "rotateX(" + deg + "deg)";
        let rotateCien = "rotateX(0deg)";
        fraccionesImg[i].style.transformOrigin = "center";
        fraccionesImg[i].animate(
          {
            transform: [rotateCien, rotateCero],
          },
          {
            duration: 500,
            easing: "ease-in-out",
            fill: "forwards",
            delay: delay,
          }
        );
      }
    }
  };

  useEffect(() => {
    const fraccionesImg = imgRef.current.children;

    let i = 227;
    let k = 209;
    let delay = 0;

    for (let j = 1; j <= 12; j++) {
      persianaArriba(i, k, fraccionesImg, delay);

      i = i - 19;
      k = k - 19;
      delay = delay + 200;
    }

    const timer = setTimeout(() => {
      let i1 = 0;
      let k1 = 18;
      let delay1 = 0;

      for (let j = 1; j <= 12; j++) {
        persianaAbajo(i1, k1, fraccionesImg, delay1);
        i1 = i1 + 19;
        k1 = k1 + 19;
        delay1 = delay1 + 200;
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isAnimationCuatroOn]);

  return (
    <>
      <Header toggleState={toggleState} state={state} />
      <BtnRegresar regresar={regresar} />

      {!state ? (
        <SectionFraccionarAnimar>
          <h1>Fraccionar-Animar</h1>
          <h6>Mayo/2022</h6>
          <p>
            Una imagen se puede fraccionar según las prestaciones del software a
            usar. Para este proyecto se utilizó
            <a
              href="https://postcron.com/image-splitter/editor/es/upload-image"
              target="_blank"
            >
              <i>ImageSplitter</i>
            </a>
            , una plataforma online gratuita.{" "}
          </p>{" "}
          <p>
            La imagen escogida se dividió en 228 fracciones las cuales se
            organizaron en 12 filas y 19 columnas. Cada fracción es una pequeña
            imagen con un número de orden y ubicación diferentes. Implicó
            definir 228 contenedores en el documento <i>html</i> para cada
            fracción.{" "}
          </p>{" "}
          <p>
            Los editores de código ofrecen atajos para estructurar los
            contenedores de manera ágil, incluidos los selectores de clase y el{" "}
            <i>src</i> de cada fracción de imagen. Eso cuando se trabaja con{" "}
            <i>html</i> y <i>Css</i>, solamente. Toma tiempo, es dispendioso.
            Con la librería <i>React</i> el trabajo se limita a unas pocas
            líneas de código mapeando el <i>array</i> que contiene todas las
            fracciones.
          </p>
          <p>
            Para la ubicación correcta de cada fracción fue práctico usar
            <i>CSS Grid Layout</i>, herramienta que permite determinar número de
            filas y columnas, ancho y altura de cada elemento, entre otras
            propiedades. Si las fracciones se organizan mal, el resultado es una
            imagen desordenada.
          </p>{" "}
          <p>
            Cuatro efectos de animación pueden activar abajo al tocar cada
            botón. Fueron construidos con el método <i>animate()</i> de{" "}
            <i>JavaScript</i>. Hubo algo de dificultad a la hora de crear,
            dinámicamente, los <i>keyframes</i> del método. Se consultaron
            diversos contenidos sobre el tema hasta encontrar la manera más
            legible y mantenible. Una experiencia interesante de aprendizaje.
          </p>
          <p>
            ¿Qué falta? Bueno, el asunto a resolver es que a la hora de activar
            cualquier animación se inactiven las que están activadas. Notarán
            que al activar al tiempo mas de una animación, estas tienden a
            superponerse.
          </p>
          <DivMosaico ref={imgRef}>
            {imgs.map((item, index) => (
              <DivImg key={`fraccionarAnimar${index}`}>
                <Img src={mosaico(item)} ref={imgRef} />
              </DivImg>
            ))}
          </DivMosaico>
          <DivBotones>
            <div onClick={toggleAnimationUno}>
              {isAnimationUnoOn ? <BtnPause /> : <BtnPlay />}
              <span>Carnaval</span>
            </div>
            <div onClick={toggleAnimationDos}>
              {isAnimationDosOn ? <BtnPause /> : <BtnPlay />}
              <span>Crescendo</span>
            </div>

            <div onClick={toggleAnimationTres}>
              {isAnimationTresOn ? <BtnPause /> : <BtnPlay />}
              <span>Ráfaga</span>
            </div>

            <div onClick={toggleAnimationCuatro}>
              {isAnimationCuatroOn ? <BtnPause /> : <BtnPlay />}
              <span>Persiana</span>
            </div>
          </DivBotones>
        </SectionFraccionarAnimar>
      ) : (
        <Redirect to="/itemsNav" />
      )}

      <BtnRegresar regresar={regresar} />
      <Footer />
    </>
  );
};

export default FraccionarAnimar;

/////////////Esstilos-Estilos//////////////////////

const colorBlue3 = "#7aa1f7";

const colorDarkBlue3 = "#24309a";

const SectionFraccionarAnimar = styled.section`
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
    color: ${colorDarkBlue3};
    padding-left: 5px;
  }
  a:hover {
    color: ${colorBlue3};
    transition: 0.3s;
  }
`;

const DivMosaico = styled.div`
  position: relative;
  padding-top: 15px;
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  grid-template-rows: repeat(12, 14px);
  row-gap: 1px;
  column-gap: 1px;
  overflow: hidden;
  @media (min-width: 375px) {
    grid-template-rows: repeat(12, 17.22px);
  }
  @media (min-width: 600px) {
    grid-template-rows: repeat(12, 27.48px);
  }
  @media (min-width: 768px) {
    grid-template-rows: repeat(12, 35.27px);
  }
`;

const DivImg = styled.div`
  position: relative;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const DivBotones = styled.div`
  padding-top: 10%;
  display: flex;
  justify-content: space-around;
  @media (min-width: 375px) {
    padding-bottom: 8%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 15%;

    img {
      width: 50%;
      @media (min-width: 375px) {
        width: 30%;
      }
    }
    span {
      width: 100%;
      padding-top: 8px;
      font-size: 1rem;
      text-align: center;
      padding-bottom: 20px;
    }
  }
`;
