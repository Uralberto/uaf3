import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link, Redirect, useHistory } from "react-router-dom";
import imgCocuy from "@imgs/cocuy.png";

import Header from "@components/Header";
import BtnRegresar from "@components/BtnRegresar";
import BtnPlay from "@components/BtnPlay";
import BtnPause from "@components/BtnPause";
import Footer from "@components/Footer";

const Cocuy = () => {
  const [state, setState] = useState(false);
  const [isAnimationOn, setIsAnimationOn] = useState(false);
  const [timerId1, setTimerId1] = useState(0);
  const [timerId2, setTimerId2] = useState(0);
  const [timerId3, setTimerId3] = useState(0);
  const [timerId4, setTimerId4] = useState(0);
  const [timerId5, setTimerId5] = useState(0);

  const toggleState = () => {
    setState(!state);
  };

  const toggleAnimation = () => {
    setIsAnimationOn(!isAnimationOn);
  };

  const history = useHistory();
  const regresar = () => {
    history.push("/explora");
  };

  let tiempoIntervalo = 50;
  let tiempoAnimacion = 1000;
  let lineWidth = 1;
  let factorAltura = 0.13;
  const capaUno = useRef();
  const capaDos = useRef();
  const capaTres = useRef();
  const capaCuatro = useRef();
  const capaCinco = useRef();
  const cocuy = useRef();

  //////////// Animación de la capa uno ////////////////////

  const animarCapaUno = () => {
    let capa1 = capaUno.current;
    let ctx = capa1.getContext("2d");
    let width = capa1.width;
    let height = factorAltura * width;

    let piax = 0;
    let piay = 0.77 * height;

    let pc1ax = 0.2 * width;
    let pc1ay = 0.82 * height;

    let pc2ax = 0.34 * width;
    let pc2ay = 0.77 * height;

    let pfax = 0.41 * width;
    let pfay = 0.79 * height;

    let pc1bx = 0.45 * width;
    let pc1by = 0.77 * height;

    let pc2bx = 0.55 * width;
    let pc2by = 0.82 * height;

    let pfbx = 0.72 * width;
    let pfby = 0.85 * height;

    let pc1cx = 0.75 * width;
    let pc1cy = 0.82 * height;

    let pc2cx = 0.86 * width;
    let pc2cy = 0.88 * height;

    let pfcx = 1 * width;
    let pfcy = 0.84 * height;

    let pcx = [
      piax,
      pc1ax,
      pc2ax,
      pfax,
      pc1bx,
      pc2bx,
      pfbx,
      pc1cx,
      pc2cx,
      pfcx,
    ];
    let pcy = [
      piay,
      pc1ay,
      pc2ay,
      pfay,
      pc1by,
      pc2by,
      pfby,
      pc1cy,
      pc2cy,
      pfcy,
    ];

    function pintarCapa1() {
      ctx.beginPath();
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(pcx[0] - lineWidth, height + lineWidth);
      ctx.lineTo(pcx[0] - lineWidth, pcy[0]);
      ctx.bezierCurveTo(pcx[1], pcy[1], pcx[2], pcy[2], pcx[3], pcy[3]);
      ctx.bezierCurveTo(pcx[4], pcy[4], pcx[5], pcy[5], pcx[6], pcy[6]);
      ctx.bezierCurveTo(
        pcx[7],
        pcy[7],
        pcx[8],
        pcy[8],
        pcx[9] + lineWidth,
        pcy[9]
      );
      ctx.lineTo(pcx[9] + lineWidth, height + lineWidth);
      ctx.fillStyle = "#369537";
      ctx.strokeStyle = "#27283940";
      ctx.fill();
      ctx.stroke();
    }

    function crecerCapa1() {
      let j = 0;
      let k = 0;
      let diferenciaAltura = [];
      let reductorAltura = 0;
      for (j = 0; j <= 9; j++) {
        diferenciaAltura[j] = height - pcy[j];
      }

      let timer = setInterval(function () {
        if (reductorAltura <= 1) {
          for (k = 1; k <= 9; k++) {
            pcy[k] = height - diferenciaAltura[k] * reductorAltura;
          }

          pintarCapa1();

          reductorAltura = reductorAltura + 0.1;
        }
        if (reductorAltura > 1) {
          clearInterval(timer);
        }
      }, tiempoIntervalo);
    }

    crecerCapa1();
  };

  //////////// Animación de la capa dos ////////////////////

  function animarCapaDos() {
    let capa2 = capaDos.current;
    let ctx = capa2.getContext("2d");
    let width = capa2.width;
    let height = factorAltura * width;

    let piax = 0;
    let piay = 0.71 * height;

    let pc1ax = 0.37 * width;
    let pc1ay = 0.71 * height;

    let pc2ax = 0.62 * width;
    let pc2ay = 0.78 * height;

    let pfax = 0.68 * width;
    let pfay = 0.79 * height;

    let pc1bx = 0.69 * width;
    let pc1by = 0.7 * height;

    let pc2bx = 0.71 * width;
    let pc2by = 0.78 * height;

    let pfbx = 0.73 * width;
    let pfby = 0.75 * height;

    let pc1cx = 0.84 * width;
    let pc1cy = 0.72 * height;

    let pc2cx = 0.9 * width;
    let pc2cy = 0.76 * height;

    let pfcx = 1 * width;
    let pfcy = 0.79 * height;

    let pcx = [
      piax,
      pc1ax,
      pc2ax,
      pfax,
      pc1bx,
      pc2bx,
      pfbx,
      pc1cx,
      pc2cx,
      pfcx,
    ];
    let pcy = [
      piay,
      pc1ay,
      pc2ay,
      pfay,
      pc1by,
      pc2by,
      pfby,
      pc1cy,
      pc2cy,
      pfcy,
    ];

    function pintarCapa2() {
      ctx.beginPath();
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(pcx[0] - lineWidth, height);
      ctx.lineTo(pcx[0] - lineWidth, pcy[0]);
      ctx.bezierCurveTo(pcx[1], pcy[1], pcx[2], pcy[2], pcx[3], pcy[3]);
      ctx.bezierCurveTo(pcx[4], pcy[4], pcx[5], pcy[5], pcx[6], pcy[6]);
      ctx.bezierCurveTo(
        pcx[7],
        pcy[7],
        pcx[8],
        pcy[8],
        pcx[9] + lineWidth,
        pcy[9]
      );
      ctx.lineTo(pcx[9] + lineWidth, height + lineWidth);
      ctx.fillStyle = "#276f29 ";
      ctx.strokeStyle = "#27283950";
      ctx.fill();
      ctx.stroke();
    }

    function crecerCapa2() {
      let j = 0;
      let k = 0;
      let diferenciaAltura = [];
      let reductorAltura = 0;
      for (j = 0; j <= 9; j++) {
        diferenciaAltura[j] = height - pcy[j];
      }

      let timer = setInterval(function () {
        if (reductorAltura <= 1) {
          for (k = 1; k <= 6; k++) {
            pcy[k] = height - diferenciaAltura[k] * reductorAltura;
          }

          pintarCapa2();

          reductorAltura = reductorAltura + 0.1;
        }
        if (reductorAltura > 1) {
          clearInterval(timer);
        }
      }, tiempoIntervalo);
    }

    crecerCapa2();
  }

  //////////// Animación de la capa tres ////////////////////

  function animarCapaTres() {
    let capa3 = capaTres.current;
    let ctx = capa3.getContext("2d");
    let width = capa3.width;
    let height = factorAltura * width;

    let piax = 0;
    let piay = 0.71 * height;

    let pc1ax = 0.08 * width;
    let pc1ay = 0.6 * height;

    let pc2ax = 0.17 * width;
    let pc2ay = 0.8 * height;

    let pfax = 0.28 * width;
    let pfay = 0.35 * height;

    let pc1bx = 0.29 * width;
    let pc1by = 0.35 * height;

    let pc2bx = 0.3 * width;
    let pc2by = 0.3 * height;

    let pfbx = 0.32 * width;
    let pfby = 0.33 * height;

    let pc1cx = 0.33 * width;
    let pc1cy = 0.34 * height;

    let pc2cx = 0.36 * width;
    let pc2cy = 0.23 * height;

    let pfcx = 0.4 * width;
    let pfcy = 0.25 * height;

    let pc1dx = 0.42 * width;
    let pc1dy = 0.48 * height;

    let pc2dx = 0.44 * width;
    let pc2dy = 0.34 * height;

    let pfdx = 0.445 * width;
    let pfdy = 0.45 * height;

    let pc1ex = 0.48 * width;
    let pc1ey = 0.64 * height;

    let pc2ex = 0.54 * width;
    let pc2ey = 0.62 * height;

    let pfex = 0.62 * width;
    let pfey = 0.78 * height;

    let pcx = [
      piax,
      pc1ax,
      pc2ax,
      pfax,

      pc1bx,
      pc2bx,
      pfbx,

      pc1cx,
      pc2cx,
      pfcx,

      pc1dx,
      pc2dx,
      pfdx,

      pc1ex,
      pc2ex,
      pfex,
    ];

    let pcy = [
      piay,
      pc1ay,
      pc2ay,
      pfay,

      pc1by,
      pc2by,
      pfby,

      pc1cy,
      pc2cy,
      pfcy,

      pc1dy,
      pc2dy,
      pfdy,

      pc1ey,
      pc2ey,
      pfey,
    ];

    function pintarCapa3() {
      ctx.beginPath();
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(pcx[0] - lineWidth, height);
      ctx.lineTo(pcx[0] - lineWidth, pcy[0]);
      ctx.bezierCurveTo(pcx[1], pcy[1], pcx[2], pcy[2], pcx[3], pcy[3]);
      ctx.bezierCurveTo(pcx[4], pcy[4], pcx[5], pcy[5], pcx[6], pcy[6]);
      ctx.bezierCurveTo(pcx[7], pcy[7], pcx[8], pcy[8], pcx[9], pcy[9]);
      ctx.bezierCurveTo(pcx[10], pcy[10], pcx[11], pcy[11], pcx[12], pcy[12]);
      ctx.bezierCurveTo(
        pcx[13],
        pcy[13],
        pcx[14],
        pcy[14],
        pcx[15] + lineWidth,
        pcy[15]
      );
      ctx.lineTo(pcx[15] + lineWidth, height + lineWidth);
      ctx.fillStyle = "#134715";
      ctx.strokeStyle = "#272839 ";
      ctx.fill();
      ctx.stroke();
    }

    function crecerCapa3() {
      let j = 0;
      let k = 0;
      let diferenciaAltura = [];
      let reductorAltura = 0;
      for (j = 0; j <= 15; j++) {
        diferenciaAltura[j] = height - pcy[j];
      }

      let timer = setInterval(function () {
        if (reductorAltura <= 1) {
          for (k = 3; k <= 12; k++) {
            pcy[k] = height - diferenciaAltura[k] * reductorAltura;
          }

          pintarCapa3();

          reductorAltura = reductorAltura + 0.1;
        }
        if (reductorAltura > 1) {
          clearInterval(timer);
        }
      }, tiempoIntervalo);
    }

    crecerCapa3();
  }

  //////////// Animación de la capa cuatro ////////////////////
  function animarCapaCuatro() {
    let capa4 = capaCuatro.current;
    let ctx = capa4.getContext("2d");
    let width = capa4.width;
    let height = factorAltura * width;

    let piax = 0;
    let piay = 0.43 * height;

    let pc1ax = 0.02 * width;
    let pc1ay = 0.46 * height;

    let pc2ax = 0.03 * width;
    let pc2ay = 0.32 * height;

    let pfax = 0.1 * width;
    let pfay = 0.35 * height;

    let pc1bx = 0.12 * width;
    let pc1by = 0.37 * height;

    let pc2bx = 0.14 * width;
    let pc2by = 0.27 * height;

    let pfbx = 0.22 * width;
    let pfby = 0.36 * height;

    let pc1cx = 0.25 * width;
    let pc1cy = 0.46 * height;

    let pc2cx = 0.25 * width;
    let pc2cy = 0.27 * height;

    let pfcx = 0.27 * width;
    let pfcy = 0.4 * height;

    let pcx = [
      piax,
      pc1ax,
      pc2ax,
      pfax,
      pc1bx,
      pc2bx,
      pfbx,
      pc1cx,
      pc2cx,
      pfcx,
    ];
    let pcy = [
      piay,
      pc1ay,
      pc2ay,
      pfay,
      pc1by,
      pc2by,
      pfby,
      pc1cy,
      pc2cy,
      pfcy,
    ];

    function pintarCapa4() {
      ctx.beginPath();
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = lineWidth;
      ctx.beginPath();
      ctx.moveTo(pcx[0] - lineWidth, height);
      ctx.lineTo(pcx[0] - lineWidth, pcy[0]);
      ctx.bezierCurveTo(pcx[1], pcy[1], pcx[2], pcy[2], pcx[3], pcy[3]);
      ctx.bezierCurveTo(pcx[4], pcy[4], pcx[5], pcy[5], pcx[6], pcy[6]);
      ctx.bezierCurveTo(
        pcx[7],
        pcy[7],
        pcx[8],
        pcy[8],
        pcx[9] + lineWidth,
        pcy[9]
      );
      ctx.lineTo(pcx[9] + lineWidth, height + lineWidth);
      ctx.fillStyle = "#0b280d";
      ctx.strokeStyle = "#272839";
      ctx.fill();
      ctx.stroke();
    }

    function crecerCapa4() {
      let j = 0;
      let k = 0;
      let n = 0;
      let diferenciaAltura = [];
      let reductorAltura = 0.1;
      for (j = 0; j <= 9; j++) {
        diferenciaAltura[j] = height - pcy[j];
      }

      let timer = setInterval(function () {
        if (reductorAltura <= 1) {
          for (k = 1; k <= 7; k++) {
            pcy[k] = height - diferenciaAltura[k] * reductorAltura;
          }

          pintarCapa4();

          reductorAltura = reductorAltura + 0.1;
        }
        if (reductorAltura > 1) {
          clearInterval(timer);
        }
      }, tiempoIntervalo);
    }

    crecerCapa4();
  }

  //////////// Animación de la capa cinco ////////////////////

  function animarCapaCinco() {
    const capa5 = capaCinco.current;
    let ctx = capa5.getContext("2d");
    let width = capa5.width;
    let height = factorAltura * width;

    let p1x = 0;
    let p1y = 0;

    let p2x = width;
    let p2y = 0;

    let p3x = width;
    let p3y = height;

    let px = [p1x, p2x, p3x];
    let py = [p1y, p2y, p3y];

    function pintarCapa5() {
      ctx.beginPath();
      ctx.clearRect(0, 0, width, height);
      ctx.lineWidth = 0.1;
      ctx.beginPath();
      ctx.moveTo(0, height);
      ctx.lineTo(px[0], py[0]);
      ctx.lineTo(px[1], py[1]);
      ctx.lineTo(px[2], py[2]);
      ctx.fill();
      let grad = ctx.createRadialGradient(
        0.2 * width,
        height,
        10,
        0.5 * width,
        height,
        0.5 * width
      );
      grad.addColorStop(0, "#fff");
      grad.addColorStop(0.8, "#5E83F5");
      ctx.fillStyle = grad;
    }

    function crecerCapa5() {
      let j = 0;
      let k = 0;
      let n = 0;
      let diferenciaAltura = [];
      let reductorAltura = 0.1;
      for (j = 0; j <= 3; j++) {
        diferenciaAltura[j] = height - py[j];
      }

      let timer = setInterval(function () {
        if (reductorAltura <= 1) {
          for (k = 0; k <= 4; k++) {
            py[k] = height - diferenciaAltura[k] * reductorAltura;
          }

          pintarCapa5();

          reductorAltura = reductorAltura + 0.1;
        }
        if (reductorAltura > 1) {
          clearInterval(timer);
        }
      }, tiempoIntervalo);
    }

    crecerCapa5();
  }

  function desvanecerImgCocuy() {
    const imgCocuy = cocuy.current;
    imgCocuy.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 4000,
      fill: "forwards",
    });
  }

  // Inician funciones que borran las capas y así poder  iniciar una nueva animación con el botón
  function borraCapaUno() {
    const capa1 = capaUno.current;
    let ctx = capa1.getContext("2d");
    let width = capa1.width;
    let height = factorAltura * width;
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
  }

  function borraCapaDos() {
    const capa2 = capaDos.current;
    let ctx = capa2.getContext("2d");
    let width = capa2.width;
    let height = factorAltura * width;
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
  }

  function borraCapaTres() {
    const capa3 = capaTres.current;
    let ctx = capa3.getContext("2d");
    let width = capa3.width;
    let height = factorAltura * width;
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
  }

  function borraCapaCuatro() {
    const capa4 = capaCuatro.current;
    let ctx = capa4.getContext("2d");
    let width = capa4.width;
    let height = factorAltura * width;
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
  }

  function borraCapaCinco() {
    const capa5 = capaCinco.current;
    let ctx = capa5.getContext("2d");
    let width = capa5.width;
    let height = factorAltura * width;
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
  }

  useEffect(() => {
    if (isAnimationOn) {
      desvanecerImgCocuy();
      borraCapaUno();
      borraCapaDos();
      borraCapaTres();
      borraCapaCuatro();
      borraCapaCinco();
      let timerId1 = setTimeout(animarCapaUno, tiempoAnimacion * 0);
      let timerId2 = setTimeout(animarCapaDos, tiempoAnimacion * 1);
      let timerId3 = setTimeout(animarCapaTres, tiempoAnimacion * 2);
      let timerId4 = setTimeout(animarCapaCuatro, tiempoAnimacion * 3);
      let timerId5 = setTimeout(animarCapaCinco, tiempoAnimacion * 4);
    } else {
    }
    // return clearTimeout(timerId1, timerId2, timerId3);
  }, [isAnimationOn]);

  return (
    <>
      <Header toggleState={toggleState} state={state} />
      <BtnRegresar regresar={regresar} />

      {!state ? (
        <SectionCocuy>
          <h1>Cocuy</h1>
          <h6>Mayo/2022</h6>
          <p>
            <i>SVG</i> y <i>canvas</i> son herramientas para dibujar en
            navegadores web. Proyectos como Villa Las Marías, Arnulfo o
            Hermelinda, presentados en este sitio, incluyen al menos una imagen{" "}
            <i>SVG</i>.
          </p>
          <p>
            {" "}
            Cocuy, a la vez que un ejercicio de aprendizaje, fue también la
            oportunidad para crear algo que tuviera conexión con la región donde
            he vivido los últimos años. Es el nombre de la sierra al costado
            oeste del departamento de Arauca, Colombia. Muchos la admiramos
            cuando viajamos desde Arauca capital, ciudad rodeada de enormes
            llanuras, hacia a los municipios del piedemonte (Tame, Fortul o
            Saravena) por carretera. También cuando tenemos la oportunidad de
            volar de Arauca a Bogotá.
          </p>
          <p>
            {" "}
            Más abajo encontrarán el resultado del ejercicio. Intenta recrear
            cómo la sierra se agranda cuando nos acercamos a ella dejando atrás
            la gran llanura al oriente. Está construido con la herramienta{" "}
            <i>canvas</i>. Consta de 5 capas <i>canvas</i> más una fotografía de
            la sierra que le sirve de fondo (<i>background</i>). Esta se
            desvance para darle paso a las capas que emergen de abajo hacia
            arriba de manera escalonada, efecto logrado con funciones{" "}
            <i>JavaScript</i>. Las capas reproducen de manera aproximada las
            formas de relieve que la fotografía muestra.{" "}
          </p>
          <p>
            Las capas se redimensionan dependiendo del dispositivo que las
            despliega. Los puntos que definen las formas de relieve se
            recalculan en función del ancho de la ventana gráfica del
            dispositivo (<i>viewport</i>). Las formas del relieve son curvas{" "}
            <i>bezier</i> consecutivas. Cada curva <i>bezier</i> es definida por
            4 puntos: uno inicial, uno final y dos intermedios llamados puntos
            de control. Cada capa requrió de al menos 3 curvas <i>bezier</i>. La
            capa que muestra el pico más alto requirió 5. El número total curvas{" "}
            <i>bezier</i> utilizadas fue de 14.
          </p>
          <p> Cliquea en el botón para ver la animación.</p>

          <DivCanvas>
            <Canvas1 ref={capaUno} width="1024"></Canvas1>
            <Canvas2 ref={capaDos} width="1024"></Canvas2>
            <Canvas3 ref={capaTres} width="1024"></Canvas3>
            <Canvas4 ref={capaCuatro} width="1024"></Canvas4>
            <Canvas5 ref={capaCinco} width="1024"></Canvas5>
            <img
              ref={cocuy}
              src={imgCocuy}
              alt="imagen de la sierra del Cocuy"
            />
          </DivCanvas>
          <H6>Sierra del Cocuy vista desde la ciudad de Tame, Arauca.</H6>
          <DivCocuyBtn onClick={toggleAnimation}>
            {isAnimationOn ? <BtnPause /> : <BtnPlay />}
          </DivCocuyBtn>
        </SectionCocuy>
      ) : (
        <Redirect to="/itemsNav" />
      )}

      <BtnRegresar regresar={regresar} />
      <Footer />
    </>
  );
};

export default Cocuy;

/////////////////////  Estilos   ///////////////////////////////////

const saleElSol = keyframes`
  0% {
opacity: 1;
  }
  85%{
    opacity: .9
  }
 91% {
   opacity: .3;
}
100% {
   opacity: 1;
}

`;

const SectionCocuy = styled.section`
  padding-bottom: 5px;
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
    padding-bottom: 5px;
  }
`;

const DivCanvas = styled.div`
  position: relative;
  width: 100%;
  height: 52px;
  margin-top: 20px;
  @media (min-width: 600px) {
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }

  canvas {
    width: 100%;
    position: absolute;
  }

  img {
    width: 100%;
    height: auto;
    position: absolute;
    z-index: 2;
  }
`;
const Canvas1 = styled.canvas`
  width: 100%;
  position: absolute;
  z-index: 50;
`;
const Canvas2 = styled.canvas`
  width: 100%;
  position: absolute;
  z-index: 40;
`;
const Canvas3 = styled.canvas`
  width: 100%;
  position: absolute;
  z-index: 30;
`;
const Canvas4 = styled.canvas`
  width: 100%;
  position: absolute;
  z-index: 20;
`;
const Canvas5 = styled.canvas`
  animation: ${saleElSol} 6s ease-out;
  width: 100%;
  position: absolute;
  z-index: 10;
`;

const H6 = styled.h6`
  font-size: 1.2rem;
`;

const DivCocuyBtn = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 80%;
    @media (min-width: 375px) {
      width: 100%;
    }
    @media (min-width: 768px) {
      width: 120%;
    }
  }
`;
