import React, { useState, useRef, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import BtnPlay from "@components/BtnPlay";
import BtnPause from "@components/BtnPause";
import laminaOxidada from "@imgs/laminaOxidada.png";

const ArnulfoSvg = () => {
  const [isAnimationUnoOn, setIsAnimationUnoOn] = useState(false);
  const [isAnimationDosOn, setIsAnimationDosOn] = useState(false);
  const [isAnimationTresOn, setIsAnimationTresOn] = useState(false);
  const [isAnimationCuatroOn, setIsAnimationCuatroOn] = useState(false);
  const [intervalId, setIntervalId] = useState(0);

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

  let gRef = useRef();

  function colorRandom() {
    let set = "0123456789ABCDEF";
    let codigo = [];
    for (let i = 0; i <= 5; i++) {
      let num = Math.floor(Math.random() * 16);
      codigo.push(set[num]);
    }
    let codigoColor = "#" + codigo.join("");
    return codigoColor;
  }

  function pathsInicio() {
    const paths = gRef.current.children;
    for (let i = 0; i <= 173; i++) {
      let dadPath = paths[i];
      dadPath.style.opacity = 1;
      dadPath.style.strokeWidth = 1;
      dadPath.style.stroke = " #f8cd51";
      dadPath.style.strokeDasharray = ".5 1 1.5";
      dadPath.style.fill = "none";
      paths[115].style.strokeWidth = 0;
    }
  }

  function pathsParaColorear() {
    const paths = gRef.current.children;
    for (let i = 0; i <= paths.length - 1; i++) {
      let dadPath = paths[i];
      dadPath.style.strokeWidth = 0;
    }
  }

  ///////////////////// Animacion "colorear-titilar" para pintar con colores aleatorios los paths cada "t" tiempo de manera titilante //////////////////////////////////////////////

  function pintarPaths() {
    const paths = gRef.current.children;
    pathsParaColorear();
    for (let i = 0; i <= paths.length - 1; i++) {
      let dadPath = paths[i];
      dadPath.style.fill = colorRandom();
    }
  }

  const pintarPathsCiclo = () => {
    return setInterval(pintarPaths, 100);
  };

  useEffect(() => {
    if (!isAnimationUnoOn) {
      clearInterval(intervalId);
      pathsInicio();
    } else {
      const newIntervalId = pintarPathsCiclo();
      setIntervalId(newIntervalId);
    }
  }, [isAnimationUnoOn]);

  useEffect(() => {
    return () => clearInterval(intervalId);
  });

  ///////////////////// Animacion "Colorear-dispersar",pintar con colores aleatorios los paths cada "t" tiempo y dispersarlos también aleatoreamente /////////////////////////////

  //función para volver al translate original de lo paths
  function dadTransformInicial() {
    const paths = gRef.current.children;
    for (let i = 0; i <= paths.length - 1; i++) {
      let dadPath = paths[i];
      dadPath.setAttribute("transform", "translate(-784 -179)");
    }
  }

  // Animación "Colorerar-dispersar" - Inicia código para pintar aleatoriamente los cuerpos (los fill)  de los  paths y moverlos
  let factor = 100;
  let x1 = -784;
  let y1 = -179;
  let delta = 50;
  let translateInicial = "translate(-784px, -179px)";
  let rotateInicial = "rotateZ(0deg)";
  let rotateFinal = "rotateZ(180deg)";

  function animarTransformfill() {
    const paths = gRef.current.children;

    for (let i = 0; i <= paths.length - 1; i++) {
      let dadPath = paths[i];
      let px = Math.random() * factor;
      let py = Math.random() * factor;
      let translateXY = `translate(${x1 - px}px , ${y1 - py}px)`;
      dadPath.style.fill = colorRandom();
      dadPath.style.strokeWidth = 0;
      dadPath.animate(
        [{ transform: translateInicial }, { transform: translateXY }],
        {
          duration: 2000,
          easing: "ease-out",
          fill: "backwards",
        }
      );

      factor = -factor + 1;
      translateInicial = `translate(${x1 + delta}px , ${y1 + delta}px)`;
      delta = -delta * Math.random();
    }
  }

  const animarTransformfillCiclo = () => {
    return setInterval(animarTransformfill, 2200);
  };

  useEffect(() => {
    if (!isAnimationDosOn) {
      clearInterval(intervalId);
      pathsInicio();
    } else {
      animarTransformfill();
      const newIntervalId = animarTransformfillCiclo();
      setIntervalId(newIntervalId);
    }
  }, [isAnimationDosOn]);

  ////////////// Animacion "Colorear-bordes" - Inicia  código para pintar aleatoriamente los strokes de los  paths y moverlos  ///////////////////////

  function animarTransformStroke() {
    const paths = gRef.current.children;
    for (let i = 0; i <= paths.length - 1; i++) {
      let dadPath = paths[i];
      let numRandom = Math.floor(Math.random() * 4) + 1;

      switch (numRandom) {
        case 1:
          dadPath.style.stroke = colorRandom();
          dadPath.style.strokeWidth = 1;

          break;

        case 2:
          dadPath.style.stroke = colorRandom();
          dadPath.style.strokeWidth = 2;
          dadPath.style.strokeDashArray = "3 2 1 ";
          break;

        case 3:
          dadPath.style.stroke = colorRandom();
          dadPath.style.strokeWidth = 2;
          dadPath.style.strokeDashArray = "1 2 3";

        case 4:
          dadPath.style.stroke = colorRandom();
          dadPath.style.strokeWidth = 1;

          break;
      }
    }
  }

  function activarAnimarTransformStrokeCiclo() {
    return setInterval(animarTransformStroke, 500);
  }

  useEffect(() => {
    pathsInicio();
    if (!isAnimationTresOn) {
      clearInterval(intervalId);
    } else {
      animarTransformStroke();
      const newIntervalId = activarAnimarTransformStrokeCiclo();
      setIntervalId(newIntervalId);
    }
  }, [isAnimationTresOn]);

  return (
    <>
      <DivSvgArnulfo>
        <SvgArnulfo
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 127.351 149.966"
        >
          <G ref={gRef} id="dad" transform="translate(-11.657 -14.438)">
            <path
              id="Trazado_670"
              data-name="Trazado 670"
              d="M810.969,307.5,826,311.2l9.625,9.925.719-2.312,1.313-4.437,1.578-6.172-6.922-2.891-6.312-.25-4.062.25Z"
              transform="translate(-784 -179)"
              fill="#a5a4a4"
              stroke="#a5a4a4"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_715"
              data-name="Trazado 715"
              d="M858.625,212.719a5.669,5.669,0,0,1,1.656.656c.5.25,2,1.031,2,1.031l1.25.469,1.375.5s.844.75.938.813,1.75,1.25,1.75,1.25l1.344.969,1.063.5-.812.219h-.875l-.875-.219-1.344-.656-2.437-1.281-1.937-1.094-1.109-.828-.2-.984Z"
              transform="translate(-784 -179)"
              fill="#686868"
              stroke="#686868"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_787"
              data-name="Trazado 787"
              d="M901.469,256.422l-.531-1.047-.625-.766.094-1.734-1.25-1.125-.75-.531-.312-.531-.437-.844.438-.531.75-.266a2.19,2.19,0,0,0,.625.453,8.7,8.7,0,0,1,1.188.844l.625.875.375,1.125.109.875.141.453v1.813Z"
              transform="translate(-784 -179)"
              fill="#777575"
              stroke="#777575"
              strokeWidth="1"
            />
            <rect
              id="Rectángulo_5"
              data-name="Rectángulo 5"
              width="10"
              height="4"
              transform="translate(70 62)"
              fill="none"
            />
            <path
              id="Trazado_716"
              data-name="Trazado 716"
              d="M852.406,243.188l.677-.437,1.542-1.167h1.958l2.667-.146,4.172,1.516,2.7,2.109.375,1.5-2.125-.437-5.042-1.792-3.021.292-2.875-.292-.844-.271Z"
              transform="translate(-784 -179)"
              fill="#4a4a4a"
              stroke="#4a4a4a"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_636"
              data-name="Trazado 636"
              d="M828.891,248.813a4.533,4.533,0,0,1,1.266-1.687,2.775,2.775,0,0,1,2.2-.625H835.5l1.813.625,1.063.875.188.438-.187.375-1.812.938-2.75.438H830.44Z"
              transform="translate(-784 -179)"
              fill="none"
              stroke="#504d4d"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_717"
              data-name="Trazado 717"
              d="M866.875,250.813l.547-.375.266-.312-.437-.75-1.312-1.187-1.187-.5-1.687-.375-1.25-.141-1.562.141-.969.375-1.016.531-1.422.938-.375.313-.281.781.656.672,2.313.2H865l1.875-.312"
              transform="translate(-784 -179)"
              fill="#8e8b8b"
              stroke="#515050"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_637"
              data-name="Trazado 637"
              d="M833.906,247.844v1.3l.25,1.031h.438l.75-.062,1.531-.672.828-.391.438-.281.156-.328-.078-.375-.516-.422-.719-.516-1.016-.344-.516-.234H835l-.578.109-.266.469Z"
              transform="translate(-784 -179)"
              fill="#484848"
              stroke="#484848"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_638"
              data-name="Trazado 638"
              d="M835.578,247.875l.859-.187.5.438-.125.609-.687.078-.625-.3Z"
              transform="translate(-784 -179)"
              fill="#8a7e7e"
              stroke="#707070"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_718"
              data-name="Trazado 718"
              d="M861.875,247.7l-.656.7-.078.828v.625l.234.484.3.438.328.2h3.734l.547-.7.078-.656V248.8l-.547-.5-1.594-.594-1.375-.312-.609.109Z"
              transform="translate(-784 -179)"
              fill="#484848"
              stroke="#635e5e"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_719"
              data-name="Trazado 719"
              d="M863.094,248.922v.578l.484.359.484-.187.281-.328-.078-.422-.328-.2-.437-.125Z"
              transform="translate(-784 -179)"
              fill="#8a7e7e"
              stroke="#707070"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_742"
              data-name="Trazado 742"
              d="M865.938,250.953l.547-.156h.656l.313-.328v-.391l-.375-.625-.25-.25-.344-.266Z"
              transform="translate(-784 -179)"
              fill="#645e5e"
              stroke="#635e5e"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_639"
              data-name="Trazado 639"
              d="M830,247.313l.672-.5.7-.187,1.234-.219h1.641l.109.094-.3.391-.328.891v1.344l.328.875-.875.141-.891-.078h-1.375l-.734-.062-.844-.453-.359-.672.141-.625C829.031,248.156,830,247.313,830,247.313Z"
              transform="translate(-784 -179)"
              fill="#8e8b8b"
              stroke="#4f4d4d"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_640"
              data-name="Trazado 640"
              d="M839.672,277.047l2.7.531,3.594.422h3.094l3.313.188,2.328-.125,2.5-.187,2.766-.625,3.156-.312L862.25,278l-2.5.563-3.187.5h-1.937l-1.906.188h-2.875l-1.375-.187h-3.22l-1.594-.375h-1.281l-2.187-.328-.594-.094L839,278l-1.391-.828-.625-.609Z"
              transform="translate(-784 -179)"
              fill="#615d5d"
              stroke="#615d5d"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_641"
              data-name="Trazado 641"
              d="M836.938,277c0,.125,1.313,2.688,1.313,2.688l.813,1.531,1.313,1.656,1.906,1.609,1.594.453,3.406.156,1.906-.156,1.625-.344a8.139,8.139,0,0,0,1.313.125c.094-.062,2.188-.656,2.188-.656l1.188-.937,1.563-.844,1.625-.75,2-1,1.344-1.062.875-1.062.219-.969.156.313-1.25,2.781-.25.906-1.094,1.438-.937,1.656-1.406,1.125-1.281,1.031-1.906,1.5-2.437.781-2.375.469-3.062-.125-1.25-.156-1.937-.781-2.344-1.469-1.625-1.812-1.5-2.687-.631-1.47-.594-1.469Z"
              transform="translate(-784 -179)"
              fill="#585757"
              stroke="#615d5d"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_642"
              data-name="Trazado 642"
              d="M862,278.125l-1.844,1.063-1.125,1.25-.937.438-.531.438-.406.5-1.062.5-.781-.187-.531.188-.437.813-.5.469-.937.281-.75-.156-.125-.359-.344-.391-.453.078-.187.422-.391.406-.719.25-.75-.25-.969.406-.781-.156-.562-.25-.687.25H845.16l-.437-.406-.656.156h-.391l-.562-.156-.7-.594-.062-.531-.344-.781-.625-.312h-.937l-.719-.406-.375-.844-.219-.312v-.594l.219-.406.375-.469-1.625-1.062-1.187-.562.219.344.656,1.469.938,1.813.781,1.344.938,1.156,1.281,1.156.781.469,2.656.547h2.859l1.922-.234,1.016-.062,1.484-.094,1.719-.625,1.469-1,.969-.531,1.344-.781.594-.312,1.625-.625.813-.625.781-.562.469-.5.375-.531.375-.531v-.781Z"
              transform="translate(-784 -179)"
              fill="#4b4747"
              stroke="#4b4747"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_678"
              data-name="Trazado 678"
              d="M848.422,286.469h0l.391-.406.75-.109,1.125-.141,1.234.141.844.109.172.063.094.188-.094.156-1.469.438H850.25l-1.25.156-.391-.156-.187-.437"
              transform="translate(-784 -179)"
              fill="#8f8787"
              stroke="#8f8787"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_679"
              data-name="Trazado 679"
              d="M839.859,278.469l-.187-.234,2.172.328,1.188.188h.906l1.063.281h3.656l.719.219h3.906l.311-.084.5-.135h3.094l.62-.136.661-.145h.844l1.75-.406-1.375.688-3.031.219-.781.281h-.844l-.687-.281-1.406.5-.531.375-.312.156-.125.063-.3-.406-.391-.406h-.719l-.531.406-.375.188-.75-.875h-.937l-.844-.084-.641.365-.266.141-.078.172-.141.094-.437-.687h-.344l-.656-.219-1.094-.136h-.906l-.719.271-.656-.6Z"
              transform="translate(-784 -179)"
              fill="#4b4747"
              stroke="#4b4747"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_643"
              data-name="Trazado 643"
              d="M853.906,264.625l1.094,1.5.563.938v.844l-.344,1-.375.344-.594.25-.625.438-.656.781-.531.281h-.75l-1.156-.562-.625-.5-.844-.437-.875.219-1.625.719-.875.281-.875.656-1.062.75h-1.812l-.875-.906-.375-1.281-.781-.687-1-.781L837,267.5l-.531-1.375.688-1.031,1.25-.469,1.5-1.042.781-1.167.719-2.073.781-1.781.438-1.375h.125l.156-2.625.844-3.156v-3.062"
              transform="translate(-784 -179)"
              fill="none"
              stroke="#474444"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_680"
              data-name="Trazado 680"
              d="M844.906,271.375l.813-.531,1-.312.938-.469.844-.281.75-.219.406.219.469.563-.875.313-.75.188-.687.25-.656.281-1.437.375-.812.125h-.5Z"
              transform="translate(-784 -179)"
              fill="#444040"
              stroke="#444040"
              strokeWidth="1"
            />
            <path
              id="Trazado_720"
              data-name="Trazado 720"
              d="M853.078,270.859h0l.344-.687.375-.594,1.094-.344.094.344-.359.375-.516.406-.516.3-.406.266"
              transform="translate(-784 -179)"
              fill="#444040"
              stroke="#444040"
              strokeWidth="1"
            />
            <path
              id="Trazado_644"
              data-name="Trazado 644"
              d="M837.625,267.859l.25,1.188.953,1.078.813.547.859.594.547.484.422.141-.312-.547-.344-.75-.078-.594-.625-.547-.469-.328-.578-.578-.547-.3Z"
              transform="translate(-784 -179)"
              fill="#403e3e"
              stroke="#403e3e"
              strokeWidth="1"
            />
            <path
              id="Trazado_645"
              data-name="Trazado 645"
              d="M842.5,249.844l-.5,1.823-.667,2.75-.5,2.667-.583,1.667-1.083,2.833-1.651,2.833h.318l.4-.151.3-.062.635-.286,1.083-1.167,1.344-2.359.406-1.224.917-2.083V255l.667-2.333v-3.5l-.667-1.833-.417.833Z"
              transform="translate(-784 -179)"
              fill="#5e5b5b"
              stroke="#5e5b5b"
              strokeWidth="1"
            />
            <path
              id="Trazado_721"
              data-name="Trazado 721"
              d="M861.063,270.078l1.063.2L866,272.969l1.031,2.094.781,2.188-.781,3.656-2.094,3.969-4.562,4.188,2.25-2.812,1.75-2.562,1.125-3.937.5-2.875L864.938,274,864,272.75l-1.375-1.312Z"
              transform="translate(-784 -179)"
              fill="#635e5e"
              stroke="#635e5e"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_646"
              data-name="Trazado 646"
              d="M874.25,270.922l-.875,5.453-2.687,6L867.875,287l-3,5.563-4.125,4.75-2.562,2.063-3.5,1.875-3.812,1-2.312.5H844.25l-3.75-1-2.5-2.375L835.313,296l-2.187-3.437-2.062-4.062-1.125-3.187-1.812-5.562-.937-5.375V272"
              transform="translate(-784 -179)"
              fill="none"
              stroke="#403e3e"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_681"
              data-name="Trazado 681"
              d="M876.063,267.859l-.312,6.891-1.812,5.938-1.875,3.75-1.937,3.5-2.187,3.313-2.312,3.188-1.687,2.25-2.219,2.5-2.5,1.953-3.109,1.844-2.844,1.141-2.641.5-2.406.359L846,304.625l-2.781-.531-2.531-1.562-.187-.687,3.063.844h5.75l3.078-.687L855,300.938l3.438-1.75h0l3.172-2.828,1.953-2.234,1.563-2.062,1.563-2.875,1.25-2.312,2.188-3.375,1-2.125L872.313,279l1.063-2.437.563-2.875.438-2.25.563-3.187.719-4.266Z"
              transform="translate(-784 -179)"
              fill="#535353"
              stroke="#3e3d3d"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_722"
              data-name="Trazado 722"
              d="M850.531,306l3.552-.417,2.833-.583,2.833-1-2.083,3.083-1.917-.583-1.167,1.5-.917-.917Z"
              transform="translate(-784 -179)"
              fill="#3e3d3d"
              stroke="#3e3d3d"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_647"
              data-name="Trazado 647"
              d="M840,263.167l.609,1.49v1.484l1.641.443v1l-1.167.5-.661.583H840l-.984-.37-1.849-.714-.417-1.333.188-.625,1.281-1.25"
              transform="translate(-784 -179)"
              fill="#585656"
              stroke="#585656"
              strokeWidth="1"
            />
            <path
              id="Trazado_682"
              data-name="Trazado 682"
              d="M845.531,248.594v2.99l-.406,1.245-.292,1.505-.5,2.417-.5,1.667-.5,2.25-1.167,1.667-1.151.573-.432,1.422-.3-.641-.219-.516.521-.839.75-1.333.542-1.125v-.406l.292-.812.646-1.437.25-1.266v-.891l.594-2.031.109-1.547v-2.047l-.187-.844-.516-1.125v-.781l.271-.854,1,1.323Z"
              transform="translate(-784 -179)"
              fill="#686565"
              stroke="#686565"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_683"
              data-name="Trazado 683"
              d="M875.953,269.484,876.5,275l.25,2.438-.25,3.063-.437,2.063-.484,1.578-1.391,3.609-1.687,2.813-.687,2.063-2.125,2.813-.437.813L868.188,298l-1.312,1.75.938-.687,3.563-3.937,3.25-4.562,2.875-4,2.875-5.062,1.375-2.656,1.5-2.031-.5,3.375-.437,2.375.438,4-1.25,3.313-4,4.938-3.625,3.563L871,300.563l-4.437,3.125-5.187,3.156-3.687,2.031-2.375,1.438-2.5,1.375-2.937-.312-2-1.625-2.312-1.437-1.344-.875L841.656,305l-.469-1.312-.312-1.062,2.625,1.438,3.125.625,2.109.078,3.047-.453,3.031-.937,3.625-1.75,2.313-1.656,1.344-1.187.766-.625.984-1.156,1.406-1.875,1.625-2.375,3.406-5.187,1.344-2.312,1.063-2.094.438-1.281.75-1.219.313-1.219,1.047-3.187.375-1.625Z"
              transform="translate(-784 -179)"
              fill="#5b5a5a"
              stroke="#5b5a5a"
              strokeWidth="1"
            />
            <path
              id="Trazado_749"
              data-name="Trazado 749"
              d="M886.813,270.922v3.953L885.75,278l-.312,3.438-.312,1.875-.5,2.75L884,287.625l-1.375,1.75-1.125.688,1.125-3.5v-1.75l-.219-2.25.219-1.125.375-2.375v-1.5l.313-1,1.078-2.219,1.047-2.094,1.375-2.25Z"
              transform="translate(-784 -179)"
              fill="#403f3f"
              stroke="#403f3f"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_648"
              data-name="Trazado 648"
              d="M837.281,281.3l-.656,1.578-.312,1.563v.609l-.187.594,1.047,1.547.453,1.109,1.172.25,1.141,1.141h1.031V288.3l.719-1.281-.312-.406-.75-1.047-.687-.75-.687-1-.531-.937-.531-1.5-.562-1Z"
              transform="translate(-784 -179)"
              fill="#444343"
              stroke="#444343"
              strokeWidth="1"
            />
            <path
              id="Trazado_649"
              data-name="Trazado 649"
              d="M832.75,272.083l-.417,1.5-.24,1.083.125.411.281.109,1.167.594.786.781.88.521h.833l.661.307.516-.531,1.24-.693.182-1.37.4-.714,1.25-.5v-.75l1.333-.75-1.333-.667-1.833-1.5-1-.917-1.036.7-1.214,1.016-1.38-.8-.609.068Z"
              transform="translate(-784 -179)"
              fill="#504c4c"
              stroke="#504c4c"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_746"
              data-name="Trazado 746"
              d="M869.688,255.563l-.312,1.688,1.063.583,2.25,1.6,2.563,2.891.609,2.438.141,2.068v3.75l.656,4.135.8-3.047v-3.125l.214-4.3-.214-2.167-.12-1.5v-2.75l-1.338-.91-.583-1.583-1.5-.417-.354-.573-1.812-.094-.844.25,1.344,1.563h-.969Z"
              transform="translate(-784 -179)"
              fill="#504f4f"
              stroke="#504f4f"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_684"
              data-name="Trazado 684"
              d="M848.344,251.125v3.625L846.5,258l-.219,4.25v1.969l-.187,1.656.406.625,1.844.281,1.531-.594,1.688.875,1.688.844.688-.844-.437-1.187L852.625,264v-2l.875-1.75-.875-1.75-2-2-.969-1.375-.469-2.25-.844-1.75"
              transform="translate(-784 -179)"
              fill="#5b5a5a"
              stroke="#5b5a5a"
              strokeWidth="1"
            />
            <path
              id="Trazado_723"
              data-name="Trazado 723"
              d="M852.429,249.344v3.085l1.714,1.429,2,.857L858,256.143l1.571,2,2.857-.714,2.228-1.007.828.453-1.578,1.844-1.478.424-2.857-.424L858,258.143l-3.857-2-2.476-.476L851.25,254l-.25-1.437.328-1.359.922-1.859"
              transform="translate(-784 -179)"
              fill="#707070"
              stroke="#707070"
              strokeWidth="1"
            />
            <path
              id="Trazado_724"
              data-name="Trazado 724"
              d="M869.063,257.125l5.223,3.625,1.339,2.5-.482,4.036-.857,4.571-.661,2.7L873.359,276l-1.672,3.813-1.75,3.616h-1.509l-.163-3.085-.453-3.656-.875-2.125-1.062-1.625L862,270.156l-3.857-2.871-1.018-2.1.736-.654-.093-.911-.2-1.908h0l.571-1.714,2.429-1h2s1.8-1.821,2.225-1.25l1.578-.7,1.125-.234Z"
              transform="translate(-784 -179)"
              fill="#727070"
              stroke="#707070"
              strokeWidth="1"
            />
            <path
              id="Trazado_725"
              data-name="Trazado 725"
              d="M863.719,261.286,862,264l1,3h2.429l1.714-1.714L868.429,264v-3.429l-1.286-1.143h-1.714Z"
              transform="translate(-784 -179)"
              fill="#858282"
              stroke="#707070"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_726"
              data-name="Trazado 726"
              d="M852.083,273.042l1.25-.708,2.083-.667.911-.354,1.339-.146.667-1.417.333-1.333a15.414,15.414,0,0,1,1.667.5,13.2,13.2,0,0,1,1.417,1.167h0l1.125,1.583,1.958,2.25,1.042,3-.375,1.917-.667,3.083-.583,1.9-1.083,1.688-1.323,1.594-1.51.573L859.75,287h-1.083l-1.333-.417,2.417-1.833,2-3.25.667-2.083.75-.917v-1.583l-3.417.333-1.417.333h-1.75V276.25l-.75-1.25-1.417-1.083Z"
              transform="translate(-784 -179)"
              fill="#7e7979"
              stroke="#7e7979"
              strokeWidth="1"
            />
            <path
              id="Trazado_650"
              data-name="Trazado 650"
              d="M845.667,271.891l.615-.141.063.844L845.813,274l1.188.833.859.292.453.641.063.469-.844.625h-.969l-1.4.891-3.417-.417-2.187-.474-1.312-.526.583-1.5.5-.833.917-.667.417-.667,1.083-.526h1.984l.6-.25h1.333"
              transform="translate(-784 -179)"
              fill="#656262"
              stroke="#656262"
              strokeWidth="1"
            />
            <path
              id="Trazado_651"
              data-name="Trazado 651"
              d="M831.063,279.813l2.688,5.938,1.422.672,1.016-.672,1.5,2.563,1.188.25.813,1.125H841v-1.375l.8-1.187,4.2,2.063.156,2.563L845.063,295l-2.375,1.5-.844,1.781L842,300.25l-1.469,1.531-.844-.312L838,300.25,834.875,295l-1.125-1.609-1-1.891-2.812-5.75a40.681,40.681,0,0,1-2.187-7.375c.013.078-.462-2.718-.5-2.937a15.9,15.9,0,0,1-.437-4.062l2.25,2.313,1.5,2.063Z"
              transform="translate(-784 -179)"
              fill="#5e5c5c"
              stroke="#5e5c5c"
              strokeWidth="0.5"
            />
            <path
              id="Trazado_652"
              data-name="Trazado 652"
              d="M828,276.313l1.375,5.25.813,1.063-.375-3.437-1.812-4.5Z"
              transform="translate(-784 -179)"
              fill="#8e8686"
              stroke="#8e8686"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_653"
              data-name="Trazado 653"
              d="M825.156,254.266l.281,5.8.25,3.063.25,2.563.375,3.063.313,3,2.25,1.656s.438,1.344.625.594a4.924,4.924,0,0,0,0-1.75l-1-1.125-.875-2.375.313-1.125v-1.38l-.625-2.562v-3.625l.313-1.312-.812-1.437Z"
              transform="translate(-784 -179)"
              fill="#4a4949"
              stroke="#4a4949"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_654"
              data-name="Trazado 654"
              d="M840.938,252.984l-.5,1.578-.734,2.094-.2,1.844v.813l-.969,1.8-.141,1.563.734-1.359,1.313-2.812.375-1.25.313-2.062.344-1.562.25-1.422Z"
              transform="translate(-784 -179)"
              fill="#474747"
              stroke="#474747"
              strokeWidth="1"
            />
            <path
              id="Trazado_685"
              data-name="Trazado 685"
              d="M842.141,268.417l.547,1.708h1.875l.563-1.708.688-.729v-.719l.391-.734,1.172.5,1.25.078.891-.406h.547l.625.406,1.375.375.8.5h.7l.172-.25.078-.937-.75-2.031h.5l.859,1.141.656.891.547,1.188-.375,1.063-.75.688h-.687l-.578.906-.484.328-.687.266-1.125-.375-.875-.75-1-.375-1.125.375-1.2.406-1.5.625L843.953,272h-1.812l-.766-.375L841,270.484l-.406-.781-.344-.406-1.187-.953.859.406h.531l.922-1.062,1.125-1.016,1.828.2-1.641.672Z"
              transform="translate(-784 -179)"
              fill="#706f6f"
              stroke="#707070"
              strokeWidth="0.5"
            />
            <path
              id="Trazado_727"
              data-name="Trazado 727"
              d="M852.083,293.25l2,.333L857.167,295v1.583l-.651,1.573-1.849.51L853.25,298l-1.167-1.417-1.417-1V293.25Z"
              transform="translate(-784 -179)"
              fill="#585757"
              stroke="#585757"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_686"
              data-name="Trazado 686"
              d="M848.313,294.75l.688,2.333,1.333.667.917.833,1.906.5.438-.833,1.74.333,1.917,1.083-1.583.917-3.26,1.292-2.234.625-1.172.083-2,.2h-3.417l-2.083-.656-.906-.25.906-1.292.417-.5V297.75l.667-.667,1.4,1.885,1.266-.385,1-.833.75-.667v-1.417l.5-2.417Z"
              transform="translate(-784 -179)"
              fill="#585757"
              stroke="#585757"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_687"
              data-name="Trazado 687"
              d="M849.5,295.406l-.375.969v.75l.594.906.938.625,1.281.438h.813l.641-.25.172-.812-.734-.672-.406-.281-.484-.516-.75-.562-.687-.375Z"
              transform="translate(-784 -179)"
              fill="#8f8787"
              stroke="#8f8787"
              strokeWidth="1"
            />
            <path
              id="Trazado_655"
              data-name="Trazado 655"
              d="M829.484,274.063l.984,1.609.375,1.625.156,1.578.25,1.313.922,1.906.641,1.094L833.5,285l.438.938.625.375h.75l.563-.375.313-.625v-1.25l-.312-.312v-1.125l-.562-.625-.75-.625-1.062-1.75-.687-1.562-.437-1.75-.312-1.7L831,273.938l-1.406-.094"
              transform="translate(-784 -179)"
              fill="#7d7b7b"
              stroke="#7d7b7b"
              strokeWidth="1"
            />
            <path
              id="Trazado_656"
              data-name="Trazado 656"
              d="M832.333,275.208l.354,2.292.563,1.813.938,1.688,1.438,1.125L836,283v1.25l.328-.328.172-.422.438-1.375L837.25,281l.344-.687-.344-.75-.156-.937-.156-1.125a3.148,3.148,0,0,0-.937-.312,8.285,8.285,0,0,1-1.5-.5l-.812-.875Z"
              transform="translate(-784 -179)"
              fill="#555252"
              stroke="#555252"
              strokeWidth="1"
            />
            <path
              id="Trazado_688"
              data-name="Trazado 688"
              d="M847.336,249.844l-.2,2.578-.094,1.594-.641,2.641.125,1.078,1.29-1.841.413-1.347-.093-2.836.093-.523Z"
              transform="translate(-783.984 -179)"
              fill="#535252"
              stroke="#535252"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_657"
              data-name="Trazado 657"
              d="M842,246.313,839.5,251l-1.917,2.417v1.833L837,257l-.156,1.859v1.266l.516,2.078-.359,2.63,1.333-1.75v-2l1.167-1.333v-2.333l.5-2.167.75-1.833.583-.75L842.25,251l.859-4.859-.2-.7L842.25,245"
              transform="translate(-784 -179)"
              fill="#686565"
              stroke="#686565"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_658"
              data-name="Trazado 658"
              d="M836.375,264.833l-.312,1.2-.781.609-.656.266-.625-.484-.531-.2-1.062.563-.844.391-.187.672-.156.672.641,1.234.7.594.25.094.188-.094.25-.406.75-.109.625.516.875.281.375-.469.656-.562.844-.344.422-.219-.078-.594V268l-.219-.156h-.125l-.469-.562-.187-1.062v-.594l.5-.437.656-.5.281-.281-.437.125h-.344l-.266.3h-.2l.094-.427.219-.891Z"
              transform="translate(-784 -179)"
              fill="#484747"
              stroke="#484747"
              strokeWidth="1"
            />
            <path
              id="Trazado_689"
              data-name="Trazado 689"
              d="M846.188,289.188l1.438.313h2l2.156-.156.75-.234.938-.2,1.344-.531.688-.344.469-.375.656-.406.563-.531.875.219.656.125h.844l.5.594h.125l.719-.156.688-.25-.375.563-.625.813-.25.281.875-.531.688-.562.844-.75.719-.812.875-.656.938-1.281.438-.969.719-1.437.281-.812.344-.937.25-1.094.531-1.75.438,2.844.281,3.016,1.25.391-.375.75-2.125,3.5-1.031,2.125-1,1.469-.719,1.406-1.969,2.156-1.391,1.578-1.578,1.422-1.266,1.078-.844.5-1.047-.3-.969-.719,1.125-.344.344-1,.219-.562v-1.656l-.719-.375L855,293.938l-.656-.312-.594-.25-1.094-.187h-1.812s-.281-.187-.344,0a4.29,4.29,0,0,0,0,.906V295.5h-.875l-.281.375-.312.75-.156-.625-.312-.719-.344-.937-.281-.719-.312-.437-.437.75-.156.656v1.656l-.187.938-.406.688-1.062.438-1.094.469h-.719l-.687-.75L842.531,297l.563-1,.938-.312,1.156-.719.188-1.594.813-1.406v-2.937"
              transform="translate(-784 -179)"
              fill="#707070"
              stroke="#707070"
              strokeWidth="1"
            />
            <path
              id="Trazado_690"
              data-name="Trazado 690"
              d="M854.859,256.625l2.578,1.188,1.625.688,1.25.453-1.25,1.234-1.25.563-.375,1.125.188,1.344.188,1.109-.687.672.313,1.156.375.906.492.59,1.633.941-1.344-.281-.289,1.375-.492.75-.375.813h-1.125l-1.625.5-.812.438-1.016.375-1.016.453.906.422,1.578.5.359.313.688.5.938,1,.141.719.063,1.2,1.3.078-3.937.25h-3.8l-1.656-.094-.984-.094-.625.188H846l-.594-.187.594-.625,1.125-.437,1.375-.5v-.5l-1.062-.687-.734-.672-.7-.453.422-1.437-.109-.75.609-.266.828-.234.75-.375,1.563-.437h.375l1.125.438.8.3.641-.3.234.172.641-.312.813-.609.3-.437.078-.562.563-.922-.078-1.141-.391-.969-.734-1-.547-.5-.25-.266h-.687l-.266-.641.078-1.437.266-.734.3-.594.313-.609-.156-.469-.609-1.094h.7l.5-.344.25-.594.377-.562Z"
              transform="translate(-784 -179)"
              fill="#7d7d7d"
              stroke="#7d7d7d"
              strokeWidth="1"
            />
            <path
              id="Trazado_659"
              data-name="Trazado 659"
              d="M836.438,252.688l-1.828.172-.359-.172-1.107-.375-1.33-1.17-.1-.846h-1.792l-1.636.846L827,250.429l-1.857.446v3.563l1.748,2.719.109,6.219.422,1.5v1.344l.125,1.625.739,2.442,1.214-2.161.75-4.75.607-4.518v-2.714l.857-2.018,3.473-.312,2.375-1.125"
              transform="translate(-784 -179)"
              fill="#6b6a6a"
              stroke="#6b6a6a"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_660"
              data-name="Trazado 660"
              d="M830.188,266.766l-.531.656-.125.8-.328.563-.375.813-.531.953.313.609.438.516.609.578a2.642,2.642,0,0,0,0,.5c.031.063,0,1.156,0,1.156h1.188l.422.094.5.359.375.266s.063-.25.063-.266v-.453l.063-.391.172-.359.156-.531.156-.672V270.91l.063-.25.156-.109-.219-.094-.312-.109-.3-.328-.375-.422-.406-.812-.094-.187v-.375l.188-.906.078-.172-.078-.312-.453-.156Z"
              transform="translate(-784 -179)"
              fill="#5a5959"
              stroke="#5a5959"
              strokeWidth="1"
            />
            <path
              id="Trazado_661"
              data-name="Trazado 661"
              d="M831.781,254.234l-.344.828L831,255.8l-.078.641v2.234l-.125.875-.078.922-.078.922-.172.531-.156.828-.078.641-.094.844L830,265.313a9.825,9.825,0,0,1-.156,1.031,7.4,7.4,0,0,0-.141.891l.219-.187.391-.266.484-.156.578.156.2.344s.453-.219.516-.266.453-.234.453-.234l.531-.281.391-.172.422.172.578.438.281.188.25-.187.188-.094.281-.062.266-.281.281-.437.172-.437.063-.547.094-.234.313-.359.219-.266.078-.2.328-.641.078-.625.141-.516-.375-1.094-.172-.609-.078-.375v-2.734l.078-.437.547-1.609v-1.609l.094-.406.375-.484H837.5l-.625.391-.734.344-.891.438h-1.219l-1.2.094Z"
              transform="translate(-784 -179)"
              fill="#676666"
              stroke="#676666"
              strokeWidth="1"
            />
            <path
              id="Trazado_662"
              data-name="Trazado 662"
              d="M831.844,251.016l-.156-.312s1.109.078,1.172.078,1.359-.078,1.359-.078h1.359l2.859,1.078-.484.891h-1.312l-.625.063-.875.078h-.469l-.266-.078-.266-.2-.7-.234-.344-.156-.234-.234-.25-.219-.437-.344Z"
              transform="translate(-784 -179)"
              fill="#7e7c7c"
              stroke="#7e7c7c"
              strokeWidth="1"
            />
            <path
              id="Trazado_663"
              data-name="Trazado 663"
              d="M837.125,210.875H836l-.406.859-.719.641-3.125,3-2.187,3.344-2.109,2.391-1.047,3.328-.687,6.625v8.375l-.312,3.313-.281,2.781v5.219l1.813-.375-.281-2.312.875-.594v-.844l.719-.562.531-.969,1.25-.812,1.188-.8-.125-.359v-.516l.5-1.2.906-.531,2.219-.625a34.733,34.733,0,0,1-3.625-1.062,2.743,2.743,0,0,1-1.812-1.969V235.44l3.641-5.219,1.469-3.719,2.75-2.781-.016-6.344,2-3.375-.875-2.844Z"
              transform="translate(-784 -179)"
              fill="#585858"
              stroke="#585858"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_691"
              data-name="Trazado 691"
              d="M841.75,243.219a2.422,2.422,0,0,1-.437-1.359,5.966,5.966,0,0,1,.516-1.672l.719-.906.516-.094.422.344.766,1.094.875,1.422.328-.187.172-1.234v-3.5L845,234.344v-.719l.453.2L847,235l.875,2.5.25,1.125-.25,1.25,1.063-1.062-.109-1.922.344-.891.969-1,.109,1.5-.25,1.875.25,1.5,1.938.75,3.438-1.25h2.5l2.078,1.25L863.688,243l-4.437-1.687-4.625.313-2.266,1.453-.7.063L851,243l-1-1.375-1.734.156L847,243.219v2l-.594-.094-.781-.625h-1.062v2.156l-.312.188-.25-.328-.812-.469-.641-1.422Z"
              transform="translate(-784 -179)"
              fill="#8d8b8b"
              stroke="#838383"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_692"
              data-name="Trazado 692"
              d="M844.406,258.563l-.2,2.172-.625,1.594-.391,1.859v1.2l.391.89-.094.438-1.062-.094-1.141-.266-.594-.266v-1.906l.109-.672.25-.578,1.125-.484.547-.781.641-.937.391-1.609.656-2.687Z"
              transform="translate(-784 -179)"
              fill="#716f6f"
              stroke="#707070"
              strokeWidth="1"
            />
            <path
              id="Trazado_693"
              data-name="Trazado 693"
              d="M845.406,251.586l-.266,1.336-.172,1.453-.531,2.281-.125,2.781-.187,1.75-.562,1.438-.234.891-.109.688v1.078l.266,1.344.2.109.5.188-.475.307-.838.333-.406.422-.3.391.3.953.328.672.766.094.906-.094.656-1.625.547-.687.078-.766.375-.672V264.5l.156-2.719.094-3.266.063-.578-.062-1.125.438-2.125L847.25,253v-2.25l.156-1-.094-1.937-1.75.828-.156,1.547Z"
              transform="translate(-784 -179)"
              fill="#858383"
              stroke="#858383"
              strokeWidth="1"
            />
            <path
              id="Trazado_664"
              data-name="Trazado 664"
              d="M829.828,250.328l-.8.391-.625.25-.187.125-.469-.125-.75-.641-.266-2.172.531-.891.234-.7.719-.562.625-.922,1.094-.75.438-.187s.719-.641.875-.578a20.516,20.516,0,0,0,2.094-.5,8.92,8.92,0,0,0,1.563-.094,2.526,2.526,0,0,1,.969,0c.125.031,1.25.594,1.25.594s.938.375,1.031.375a4.2,4.2,0,0,1,.813.594c0,.031.969.75.969.75l.688.313.813.406.313.281V247.6l-2.344,3.375-.312.281-.125-.156-1-.375h-.844l-.531-.29h-.516l.609-.194,1.281-.141.406-.375.125-.562.141-.484.141-.516v-.406l-.406-.375-.406-.344-.719-.344-.875-.406L835.5,246h-3.875l-.781.281-.906.406-.5.344-.406.344-.344.375-.281.719v.5l.281.75.547.3Z"
              transform="translate(-784 -179)"
              fill="#5e5d5d"
              stroke="#5e5d5d"
              strokeWidth="1"
            />
            <path
              id="Trazado_694"
              data-name="Trazado 694"
              d="M843.583,267.438c.01.25.042,1.281.385,1.219a2.891,2.891,0,0,0,.875-.469v-1.281h-.469l-.406.281-.385.25"
              transform="translate(-784 -179)"
              fill="#b9b1b1"
              stroke="#b9b1b1"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_728"
              data-name="Trazado 728"
              d="M861.141,251.188h3.922l1.078-.2.922-.094.359-.281.266-.375v-.3l-.266-.422-.2-.281-.5-.437-.2-.266-.375-.281-.531-.234-.625-.187-1.312-.359-.8-.187h-2.141l-1.047.188-.906.359,1.141-.781,1.328-.094h2.063l.563.188a6.94,6.94,0,0,1,.891.141c.047.047.938.438.938.438l.594.391.594.344.719.641.469.484.3.719.078.594-.078.406-.687.141-.969-.141-1.109.141-4.2-.141Z"
              transform="translate(-784 -179)"
              fill="#555353"
              stroke="#555353"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_665"
              data-name="Trazado 665"
              d="M838.219,211.063l-.469.813,1.188,1.813-.719,1.938-1.094,1.75v6.375l-1.5,1.313L834.5,226.25l-.562,1.25-.437,1.063-.562,1.375-.562.938-1.562,1.75L830,233.813l-.625.938-.109,1.8.109,1.266,1.172,1.359,2.391.641,1.563.313,1.688.313,2.375.5s1.313.5,1.313.75,1,1.25,1,1.25l.5.438.844,1.5.594.531-1.437-3.719.438-1.562.563-.75-1-.75-.812-.437-.437-1v-1.75l.75-1.625.5-2.937v-2l.609-2.5.391-.812L843,222.7v-2.25l.813-1.812,1.313-1.531.906-1.141.109-2.406.875-1.609-.7-1.25-1.719-.406-.781-.172-1.75-.172h-1.937Z"
              transform="translate(-784 -179)"
              fill="#656464"
              stroke="#656464"
              strokeWidth="1"
            />
            <path
              id="Trazado_695"
              data-name="Trazado 695"
              d="M847.25,211.75h2.25l2.5-.312s1.688.5,1.938.625,4.125.563,4.125.563l1.313.438.875.781.438,1.219.969.875,2.031.938-1.75,2.313-.687,2.688-2.625,1.188-2.768,1.563L854.5,226.5l-1.062,2.875-.75,1.938L852,233l-.687,1-.625,1.375-.5.375V235l-.937.906-.406.906L848,234.625v-1.25l.5-1.25-.875-2.75L848,227.5l.281-1.266.219-.8-.875-.812.078,1.328-.766,1.922L846.375,230l.563,2.125-.562.875.563,2-1.562-1-.375.625.188.75h-.875l-.562-2-.812,1.25v2.125l.875,3.188-.875-.812-.484.25-1.109-.719-.75-.422L840,236.5l.313-1.578.375-1.547.688-2.062v-1.937l.25-1.875.313-1,.438-1.062.563-2v-3.312l.813-1.375.563-.875,1.063-1.125.625-.812v-1.562l.375-1.75.563-.562"
              transform="translate(-784 -179)"
              fill="#717070"
              stroke="#707070"
              strokeWidth="1"
            />
            <path
              id="Trazado_696"
              data-name="Trazado 696"
              d="M843.167,234.313s-.354.531-.26.688a2.888,2.888,0,0,1,0,.906l.125,1.188.344,1.344.438,1.313.156.438.406.656s.406.719.438.813.438.375.438.375l.25-.375.125-.984v-3l-.125-.766v-.469l-.25-.531v-.437h-.875l-.266-.719-.141-.625-.156-.656-.437.25"
              transform="translate(-784 -179)"
              fill="#919090"
              stroke="#919090"
              strokeWidth="1"
            />
            <path
              id="Trazado_697"
              data-name="Trazado 697"
              d="M847.688,225.094v.891l-.125.25-.25.547-.219.875-.187.656-.219.656-.25.688v.469l.172.547a3.618,3.618,0,0,0,.078.7c.063.156.219.719.219.719l-.219.375-.25.438.25.813.141.719.141.359.125.391.3.781.3.938.281.781v2l.313-.141.125-.266.516-.453V237.8l-.141-1.234-.219-.687-.594-1.281v-1.437l.438-.875v-.531l-.437-1.156-.281-.781-.125-.422.125-.422.281-.969v-.625l.125-.594.125-.687.188-.625-.187-.375-.531-.344Z"
              transform="translate(-784 -179)"
              fill="#989898"
              stroke="#989898"
              strokeWidth="1"
            />
            <path
              id="Trazado_747"
              data-name="Trazado 747"
              d="M872,220.938v2.634l1.857,3.714.571,5-.571,3L872,238.857l-.714,2.286-1.143,2.286.388,2.143,2.094,2,1.8,1.429.29,1.125-.29,1.018-.4.92-.656,1,.482,1.771,1.58.573.688,1.469,1.161.844-.114-2.8.114-1.493.871-2.132.7-.154-1.571-3.571-.129-1.728.844-1.031v-1.219l-.375-.937-.719-4.375.379-3.781.464-1.75-.125-2.031,1.232-1.29,1.143-1h0l-1.143-3.179.518-2,1.938-1.375-3.687-1.437L873.25,220"
              transform="translate(-784 -179)"
              fill="#5b5b5b"
              stroke="#5b5b5b"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_729"
              data-name="Trazado 729"
              d="M873.677,251.438l-.208,1.344.578-.672.62-1.526v-.536l-.245-1.031-.745-.849-.646-.833-.594-.458-1.687-1.208L870.333,244l.573-1.984.844-2.349,1-2,.927-1.917.99-3-.333-2.25-.458-3.219-.969-1.875-.984-4.078-.453.438-.562-.437-.781-2.422-.781.125H867.5l-1.062-.562-1.1-.635-1.708-.8-.958.8,1.167,1.417,1.5,2,2.167,1.5,1.333,1.25.75,1.917v2.167l.75,1.083.682,1.443-.109,2.141-.156,1.333-.859,1.667-1.474,1.917-.12,1.786.536,1.464.323,1.271-.323,1.4,1.026,3.385.474.594,1.417.6.583,1.333Z"
              transform="translate(-784 -179)"
              fill="#616161"
              stroke="#616161"
              strokeWidth="1"
            />
            <path
              id="Trazado_730"
              data-name="Trazado 730"
              d="M870.281,247.563h-1.469l-2.281-.875-.281-1.6L863.417,243v-4.25l.9-3.641.813-3.359-.292-2.5.292-3.359v-1.344l-1.708-1.214-2.083-1.583.5-2.25-.5-1.417h1.495l1.313,1.667,1.109,1.469,2,1.313,1.417,1.135.917,2v1.25l.56,1.75.774,1.833.667,1.167-.667,1.833-.333,1.417-.44.583-.737,1.188-1.073,1.146v1.833l.885,1.521v1l-.406,1.625,1.083,3.207Z"
              transform="translate(-784 -179)"
              fill="#6d6c6c"
              stroke="#6d6c6c"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_731"
              data-name="Trazado 731"
              d="M852.406,232.219v-2.031l.844-1.375.438-1,.5-.875.688-1.5.375-1.016.75-.359,1.063-.375L859,223l.938-.5,1-.437.516-.234,1.047.672,1.313,1.188,1.313.875v8.813l-.875,1.688v1.313l-.437,1.188-.312,1.25v3.938l-1.437-.937-1.125-.75L859,239.813l-.875-.437H856l-1.812.438-1.25.625-.859.188-1.812-.75-.2-1.062v-1.25l.2-1.766.328-.234.344-.578.313-.766.438-.844Z"
              transform="translate(-784 -179)"
              fill="#7e7d7d"
              stroke="#7e7d7d"
              strokeWidth="1"
            />
            <path
              id="Trazado_744"
              data-name="Trazado 744"
              d="M869.063,248.25l.469,2.141-1.016.281-.078.469-.156,1.25-.484.266.281,1.469-.641.688-.2,1.281.7.781,1.438.453.25-1.766,1.563.406H872l-.531-.641-.719-.828.875-.375,2.078.266-.234-1.359.156-.969v-.578s-.562-.953-.75-1.172S872,249,872,249l-.3-.828-.766-.234-.516-.312-1.359-.062Z"
              transform="translate(-784 -179)"
              fill="#7e7d7d"
              stroke="#7e7d7d"
              strokeWidth="1"
            />
            <path
              id="Trazado_732"
              data-name="Trazado 732"
              d="M857.656,244.578l1.2.5,1.125.766.3,1.109h2.469l1.313.234,1.219.266.953.531,1.3.922.375.5.375.578v.516l-.156.563-.594.359h-.641l-.156.391s.078-.141.422.5.75.25.75.25l.375-.25.094-.969.078-.7,1.063-.312-.281-1-.172-.984-.094-.437.094-.312-.391-.141-1.781-.609-.516-.234-1.094-.187-1.219-.266-1.25-.5-1.172-.375-.469-.2-.812-.25-.625-.25-.359-.109H858.3Z"
              transform="translate(-784 -179)"
              fill="#5d5c5c"
              stroke="#5d5c5c"
              strokeWidth="0.5"
            />
            <path
              id="Trazado_733"
              data-name="Trazado 733"
              d="M859.844,251.656l-.437.75.188.656,1.156.438,1.109.109,2.047-.109.813-.437.438-.656-.281-.484-.969-.547H860.75Z"
              transform="translate(-784 -179)"
              fill="#818080"
              stroke="#818080"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_734"
              data-name="Trazado 734"
              d="M859.531,245.583l-.687-.458-1-.391-.312-.141-1.031.141-1.469-.141-.953-.094-.8-.156-.656.25-.25.531-.312,1.375V247.9l.563.781-.25.563.156.672V252.4s.688.594.75.688,1.219.813,1.219.813,1,.5,1.094.531,1.094.625,1.094.625l1.063.781.594.531.5.656.813,1.047.828-.2,1.719-.391,1.3-.578,1.125-.531a3.053,3.053,0,0,0,.531.219c.094,0,.406.313.406.313l-.25.25L865,257.6l1.656-.437,1.281-.375-.625-.75.063-1.2.719-.8-.281-1.406h-.281l-.594-.656-.25-.219.25-.344H864.1l.531.344.375.219.156.438-.156.219-.219.469-.5.281-.781.188h-2.578l-1.266-.469-.25-.469v-.375l.25-.281.156-.219.563-.344.953.125-1.8-.312-1.125-.078-1.094-.109h-.5l-.516-.562-.156-.219.234-.812.438-.547.781-.609.75-.484.672-.3.8-.312.375-.219V246.5l-.219-.562-.312-.354"
              transform="translate(-784 -179)"
              fill="#6d6c6c"
              stroke="#6d6c6c"
              strokeWidth="1"
            />
            <path
              id="Trazado_698"
              data-name="Trazado 698"
              d="M848.25,241.781l-.625.75-.562.563v2.094h-.625l-.562-.562-.656-.156h-.687v2.188l-.281.25.281.656.344.438.625.531.375.156,1.406-.969.188,2.094.766,1.125.516.906.594,1.063.063.594.156.469.156.859.156.516.625.813,1.063,1.156.969.938.281.469h.344a5.2,5.2,0,0,1,.594-.156c.094,0,.438-.312.438-.312v-.437l.344-.5.313-.5v-.344l-.656-.187-.625-.125-.75-.312h-.781l-.469-.187-.219-.719-.219-.969v-1.062l-.156-.281.156-.781.438-.812.469-1.219.5-.875v-.406l-.5-.969v-.906l.188-1.062.125-.406.188-.562.281-.156.344-.156-.625-.281-.187-.469V243.1h-1.219l-.5-.562-.344-.437-.3-.406-.641-.062Z"
              transform="translate(-784 -179)"
              fill="#787878"
              stroke="#787878"
              strokeWidth="1"
            />
            <path
              id="Trazado_748"
              data-name="Trazado 748"
              d="M871.984,216.429l-1.841,2.143a8.937,8.937,0,0,0,0,2c.143.571,1.429,1.143,1.429,1.143l.857-1.143,1.821-.259,3.321.259,2,1.143H883l1-1.143.714-.857L883,218.571h-2.571l-.857-1.143h-1.143l-2-1-2.571-.163Z"
              transform="translate(-784 -179)"
              fill="#4b4b4b"
              stroke="#4b4b4b"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_750"
              data-name="Trazado 750"
              d="M877.667,234l1,4.667,1.25,2.917L880.75,245l-.417,2.833,1.083,2.5.917,3.333v2.25L879.917,253l-1.182-2.25-1.068-2-.75-2v-1.167l1.036-1.411-.286-1.422-.333-1.167-.417-1.75V235.25Z"
              transform="translate(-784 -179)"
              fill="#585757"
              stroke="#585757"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_751"
              data-name="Trazado 751"
              d="M880.75,245.25l1.063.938.563,2.375L883.5,249l-.156-2.594-.891-2.859.266-1.141,2.031,2.313.625,1.469.5,1.375,1.813,2.25v-1.906l-.437-2.219-1.062-2.375L885.875,241l-.594-3.3L885,236.188l1.688,3.75.563,2.125,1.438,2.063.5,1.563V242.75l-.937-2.812-.562-2.375v-1.375l2.5,3.75,1.063,2.125.938.875-.625-2.312-.687-2,.375-1.437v-1.562l-.812-1.812-.25-1.312v-1.125l2.438,1.125,2.063,2.5.813.625.7.563-1.516-4.812-1.812-1.75-1.312-1.812-.312-1.25-1.062-1.187s.188-.687.688-.625a14.659,14.659,0,0,1,2.641,1.813l3.156,3.594-.469-1.781-.266-1.812-.437-1.812v-1l2.75,2.313,1.063,2.313,1.984,2.469,1.016,2.969v1.813l-.625,3,.25,1.625-.625,1.813-.437,1.75-.625,1.438h-4.312l-1.562,1.625-1.5,2.125-.687,1.625-.937,1-.375.875-1.375,2.313-.7,1.344-.937,2.406-.359-1.031-1.187.469-1.812-.625-2.047-1.578-.078-.547v-1.5l-.281-1.328-.594-1.484-.187-.969-.576-.98-.375-1.437Z"
              transform="translate(-784 -179)"
              fill="#4a4a4a"
              stroke="#4a4a4a"
              strokeWidth="1"
            />
            <path
              id="Trazado_752"
              data-name="Trazado 752"
              d="M880.781,245.125l-.359-1.5,1.078,1.047.938,1-.2-1-.2-.906-.156-.828v-3.375l.359-.484,1.641.734,1.109.875v-1.609l-.828-2,.141-1.062.25-.766.25-.344.5.656,1.406,1.625.438-2.016.141-.844,1.656.922-.625-3-1.32-1.5s.188-1.312.375-1.312,3.375,1.094,3.375,1.094L889.938,228v-1.625l-1.078-1.594V223l1.078-1.062,2.125,1.938v-1.937l.688-1.375,1.75,2.313.5,1,.938,2.5.563,2.438.094,1.266-1.422-1.672-1.047-.969-.75-1.062-.625-.437-.687-.5-.937-.375-.437-.375-.375.75.813.938.313,1.063.766,1.3.859,1.016,1.188,1.188.75.813.625,1.438.313,1.25.25,1.625-1.687-1.25-1.125-1.453-1.312-1.109-1.375-.5-.375-.437-.156,1.109.219,1.375.75,1.453.063,1.266.125.672-.391.938.391,1.938.594,1.781.25,1.25-1.469-1.844-.578-1.516-1.172-1.484L888,236.688l-.375-.859v.859l.2,1.563.172.938.563,1.969.375,1.031.188.75.188,2v.813L888,243.094l-1-1.344v-1.062l-.5-1.125-.562-1.312-.437-1.062-.516-1.047.516,2.7.172.969.266,1.938.344,1.875.859,1.859.484,1.828v2.5l-1.594-1.969-.359-1.094-.859-1.812-1.094-1.312-1.062-1.328-.078,1.469.75,1.984.2,3.234-1.094-.5-.562-2.359-1.094-.922"
              transform="translate(-784 -179)"
              fill="#787676"
              stroke="#787676"
              strokeWidth="1"
            />
            <path
              id="Trazado_753"
              data-name="Trazado 753"
              d="M879.813,235l.156,1.531-.531,1.781v1.906l.531,1.25.484,2.156.609.813,1.344,1.188-.25-1.187-.25-1.328-.125-1.641.125-.687v-.562l-.125-.594.375-.406.75.109L885,240.563v-.937l-.187-.875-.375-1.031-.187-.281-.5-.281-1.156-.469-1.156-1.156-.656-1.344v-.906L880.1,233Z"
              transform="translate(-784 -179)"
              fill="#6e6e6e"
              stroke="#6e6e6e"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_754"
              data-name="Trazado 754"
              d="M880.2,233l1.156,2.453.922.969,1.844.891-.75-2.094-.25-.75-.187-.875-.219-.687-.437-.8-.156-.469v-.406l-.594-.5L881,230.42l-.328-.3-.281-.3-.531.594.344.688.469,1.172v.984L880.2,233H880v.688s-.141,1.094-.141,1.422.141,1.313.141,1.313l-.344,1.109-.25.625v.719s.031,1.422,0,1.359-.7-1.469-.7-1.469l-.422-1.969-.078-.578-.141-.594-.109-.609-.094-.547-.094-.344v-.2l-.328.328.172-.656.156-.594.094-.453.2-.437.75-.094.281.094.375.344.391.188.344.359"
              transform="translate(-784 -179)"
              fill="#878585"
              stroke="#878585"
              strokeWidth="1"
            />
            <path
              id="Trazado_755"
              data-name="Trazado 755"
              d="M880,228.547l.406.859-1.234-3.312-.391,1.188-.531.938-.187,1.188-.375,1.313v.7s.125,1,.125,1.125.25-.5.25-.5.359.094.453,0,.656,0,.656,0l.328.375.656.438.453.375v-.922l-.375-1-.234-.5-.172-.391.328-.359.25-.3"
              transform="translate(-784 -179)"
              fill="#686868"
              stroke="#686868"
              strokeWidth="1"
            />
            <path
              id="Trazado_756"
              data-name="Trazado 756"
              d="M881.953,229.281l.094.531v.719l.063.656.063.5.234.609.313.547.2.547.172.8.391,1.2.453,1.281.25.766.078-1.3.219-.75.125-.422.156-.141.313.375c.063.075.422.5.484.609s.609.75.609.75l.484.516s.3-1.2.313-1.344.281-1.391.281-1.391l1.625.859-.609-2.844-1.3-1.594.094-.641.188-.547.078-.156,1.266.391,2.031.609-.094-.781L890,228.328l-.109-.437v-1.516l-.219-.391-.25-.484-.437-.5-.109-.234-.609-.187h-.547a2.179,2.179,0,0,0-.078.625c.047.109.516.922.516.922l-.109.516-.406.172-.312.156.125.7.813.844.391.391h-.937l-1.031-.391L886,228.42l-.078-.422-.562-.422-.594-.156-.422-.3-.156-.312-.344-.344-.75.656-.312.375-.375.391-.453.359-.187.266Z"
              transform="translate(-784 -179)"
              fill="#959494"
              stroke="#959494"
              strokeWidth="1"
            />
            <path
              id="Trazado_772"
              data-name="Trazado 772"
              d="M887,222.813l.281-.594,1.031.219.469.531v1.781l-.469-.187-.594-.062-.185.476.091.165.25.672.281.313v.375l-.875.406.219.844,1,1.094h-.781l-.437-.125-.8-.234-.484-.141v-.375l-.594-.437-.75-.25-.437-.375-.344-.406.344-.375.438-.312.516-.281,1.219-.469.516-.562.219-.656-.125-.469Z"
              transform="translate(-784 -179)"
              fill="#878585"
              stroke="#878585"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_775"
              data-name="Trazado 775"
              d="M899.547,247.031H898l-1.375.844-1.5,1-1.812,2.75-2.187,3.5-3.437,3.563,1.875-4.125,1.563-2.937.844-1.312.844-1.437L894,247.031l1.063-.953.891-.766,2.328-.469h2.063l.594-1.281.313-2.062.563-.687-.219-2.078.219-1.234.563-2.5.875,1.938.5,2.313v4.813l-.5,3.375-.672,2.344-.453-.469-1.187-1.437Z"
              transform="translate(-784 -179)"
              fill="#474646"
              stroke="#474646"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_757"
              data-name="Trazado 757"
              d="M882.328,214.313,881.875,216l-.625.563-1.187,1.375.156.563,1.656.094h1.313l1.063.906.3.25-.812,1.156-.641.844,1.594-.062h.688l1.063,1.063.5.813v-.812l.281-.562,1.219.25v-1.375L887.5,219.5l-1.062-.812-1.5-.875.688-1.25-.687-.719-.687-1.031-.437-.75Z"
              transform="translate(-784 -179)"
              fill="#3b3b3b"
              stroke="#3b3b3b"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_773"
              data-name="Trazado 773"
              d="M888.219,218.083s-.312.729,0,.729a8.563,8.563,0,0,1,1.719.906l.531,1.25,1.344.844.281,2.094-2.156-1.937-1.125,1-.469-.531.188-.812-.312-.812-.328-.484-.656-1.062-1.172-.75-1.094-.734.406-.812.219-.406-.625-.75,1.969.25,1.063.813Z"
              transform="translate(-784 -179)"
              fill="#464646"
              stroke="#464646"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_776"
              data-name="Trazado 776"
              d="M888.063,216.906v.875l.109.969,1.016.438.719.406.438,1.156.438.438.656.469.563,1.078.344-1.266.359-.922-.359-.516-.906-.844-.5-.344-.594-.344-1.156-.562-.406-.25-.312-.2Z"
              transform="translate(-784 -179)"
              fill="#807f7f"
              stroke="#807f7f"
              strokeWidth="1"
            />
            <path
              id="Trazado_758"
              data-name="Trazado 758"
              d="M875.719,216.188l1.188.594.719.219.859.469s1.063-.156,1.094,0a2.354,2.354,0,0,0,.422.563l.469-.562.938-1,.641-.859.188-.922-.422-.656-1.031-1.312-1.578.953-.922.609-1.375.844Z"
              transform="translate(-784 -179)"
              fill="#414141"
              stroke="#414141"
              strokeWidth="1"
            />
            <path
              id="Trazado_745"
              data-name="Trazado 745"
              d="M871.583,216.429l-2.208-3.8-2.5-5.125,4.708,1.75,2.792.5h2.875l-4-5,4.625,1.75-3-4.125-.578-3.25-1.047-3,1.125-.625,3.5,2.125,8.875,4.75,4.125,8.125-5-4.875-4.375-2.25s-2.375-.625-1.5,0,5.875,5.875,5.875,5.875l5,5.375-2.75-2-4.172,1.484-1.766.516-1.437-2-2.875,2-1.578,1.8Z"
              transform="translate(-784 -179)"
              fill="#3d3c3c"
              stroke="#3d3c3c"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_759"
              data-name="Trazado 759"
              d="M887.719,204.047l5.438,4.766,3.969,3.063,3.875,6.5,1.938,6.25,1.375,11.25-.984,5.688-.141-4.75-.828-1.859L901.688,228l-.641-2.484-1.969-3.984L898.625,224l-.359,2.109-1.719-1.547-.625-1.328-.531-.969-.516-.359-1.078-1.719-1.141-1.469-2.25-.531-1.641-.406-.953-1.031-.812-.578-2.3-.375-.953-1.609,1.375-.875,1.875-.437,1.078-.2,2.547,1.766-2.812-3.172L886,209.5l-3-2.812-2.031-1.875a8.162,8.162,0,0,1,2.031.75c1.063.563,3,1.5,3,1.5l2.422,1.172a11.343,11.343,0,0,1,2.2,2.016c.375.688-.672-1.719-.672-1.719l-1.391-2.656Z"
              transform="translate(-784 -179)"
              fill="#343434"
              stroke="#343434"
              strokeWidth="1"
            />
            <path
              id="Trazado_788"
              data-name="Trazado 788"
              d="M899.125,221.734l-1,.516v4.5l1.156,1.563,1.078,1.484.875.969.5,1.594.5,1.141s.016-1.75,0-1.7-.5-3.047-.5-3.047l-.5-2.969-.875-2.906-1.234-1.219"
              transform="translate(-784 -179)"
              fill="#3a3a3a"
              stroke="#3a3a3a"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_760"
              data-name="Trazado 760"
              d="M879.3,203.141l.719-.109a7.912,7.912,0,0,1,1.359-.125c.172.063,1.344.859,1.344.859l1.828,1.031,1.75,1.2,1.828,1.875.344.344-2.172-1.094-1.234-.609L883.7,206l-1.094-.609-1.234-.531-.484-.062-1.766-1.437Z"
              transform="translate(-784 -179)"
              fill="#505050"
              stroke="#505050"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_777"
              data-name="Trazado 777"
              d="M887.391,202.8l7.7,5.8L897,210.969l1.844,2.469,2.219,5.188-2.406-4.25-1.281-2.187-1.219-.969-1.906-1.531-3.859-3.219-1.859-1.594-.937-.844-.75-1.625"
              transform="translate(-784 -179)"
              fill="#505050"
              stroke="#505050"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_666"
              data-name="Trazado 666"
              d="M829.7,216.429l-4.531,4.353-1.8,4.234-.859,4.047s.068,3.771-.182,4.021.917,4.417.917,4.417l.75,4.583,1.531,4.37.135-7.536v-2.333l.417-3.5-.417-1.75.417-4.75.5-2.833.833-2.667,1.667-1.75,1.333-1.917,1.417-1.917Z"
              transform="translate(-784 -179)"
              fill="#717070"
              stroke="#717070"
              strokeWidth="1"
            />
            <path
              id="Trazado_789"
              data-name="Trazado 789"
              d="M892.094,233.625l2.24,5.042.667,4.667"
              transform="translate(-784 -179)"
              fill="none"
              stroke="#707070"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_790"
              data-name="Trazado 790"
              d="M894.031,228.844,898.5,234.5l1.333,7.167"
              transform="translate(-784 -179)"
              fill="none"
              stroke="#707070"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_778"
              data-name="Trazado 778"
              d="M889.714,241.583l1.857,4.56v2.143"
              transform="translate(-784 -179)"
              fill="none"
              stroke="#707070"
              strokeWidth="0.32"
            />
            <path
              id="Trazado_667"
              data-name="Trazado 667"
              d="M838.219,201.5l-3.781,2.875-2.625,3.438-3.562,4.063-1.75,4.188-1.75,4.5,1.844-1.422,1.672-1.531,1.984-1.3,1.563-.875,3.688-3.562,1-2.125,2.938-4.375s3.188-2.937,3.375-3.062,3.688-3.5,3.688-3.5h-1.937l-3.5,1Z"
              transform="translate(-784 -179)"
              fill="#636262"
              stroke="#636262"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_699"
              data-name="Trazado 699"
              d="M849.547,205.964l2.766-1.652,4.75-1s3.063-.5,3.5-.437,3.563,1.438,3.563,1.438l2.563,2.063.438,1.375,1.594,3.469,1.469,2.656.969,1.828.906.922-1.875-.562-3.062-2.187-1.562-1.562L863.125,210l-2.25-.5-1.937.75-3,1.063-2.437.5-1.984-.266-2.453.266-1.984.063-.156-1.375v-.094l.547-1.062.469-1.594Z"
              transform="translate(-784 -179)"
              fill="#575656"
              stroke="#575656"
              strokeWidth="1"
            />
            <path
              id="Trazado_735"
              data-name="Trazado 735"
              d="M855.813,211.438h3.25s1.625-.562,2-.312,3,1.813,3,1.813l1.078,1,1.547.813,1.063,1.125,3.188.734h.891l-2.062-.812-3.078-2.484-1.437-1.187-.937-1-1.094-.984-1.094-.391-1.234-.187Z"
              transform="translate(-784 -179)"
              fill="#474646"
              stroke="#474646"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_736"
              data-name="Trazado 736"
              d="M872.438,216.688l-1.656,1.125-.687,1.063h-.531l-.937-.812-1.969-1.25-1.781-1.5-2-.719-1.656-.781-1.5-.75-.734-.219-.422-.078-1.047-.172-1.672-.125-1.641-.328-.7-.312.2-.078,1.141-.187,1-.187h2.2l1.078.063,1.281-.281a2.209,2.209,0,0,1,.813,0,12.361,12.361,0,0,1,1.344.813l1.719,1.094.813.75,1.281.781,1.625,1.25,1.031.281.938.156.984.328Z"
              transform="translate(-784 -179)"
              fill="#5d5b5b"
              stroke="#5d5b5b"
              strokeWidth="1"
            />
            <path
              id="Trazado_700"
              data-name="Trazado 700"
              d="M868.094,202.375l-3.469-2.125-4.375-.75-4-.75-3.25.75-2.125,1.5-3,2.125-1.5,2.375-1.125,2.875.594,1.984L847,211.8l-.141-1.078.391-1.156.625-1.187,1.141-1.891,2.328-1.7,2.781-.781,3.75-.875h2.375l4.375,1.75h3.469l4.281.8Z"
              transform="translate(-784 -179)"
              fill="#4a4a4a"
              stroke="#4a4a4a"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_701"
              data-name="Trazado 701"
              d="M845.625,198.813l3.563-1.125h3.188l3.188.375,1.313.75-2.062.25-1.625.375-1.312.938-2.375,1.75-2.187,1.813-.687,1.125-.656,1.438-.344,1.438.344,2.625L843.6,210.1l-.535-3.1.5-3.875.438-1,.438-1.125Z"
              transform="translate(-784 -179)"
              fill="#636363"
              stroke="#656363"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_702"
              data-name="Trazado 702"
              d="M844.5,200.875l-3.266,2.844-.969.875-.422,1.531a12.4,12.4,0,0,1,.5,1.719,8.209,8.209,0,0,0,.75,1.375l.75.625.7.188.969.109.078-1-.5-1.641v-1.375l.281-1.656.313-1.656Z"
              transform="translate(-784 -179)"
              fill="#6e6a6a"
              stroke="#6e6a6a"
              strokeWidth="1"
            />
            <path
              id="Trazado_668"
              data-name="Trazado 668"
              d="M840.281,204.75l-.781.5-.7,1.234-.625.719-.5.609-.531.844-.469.8-.25.578-.234.453-.125.328h.469l1.344.219h.406s.484-.437.609-.375.828-.5.828-.5.234-.187.328-.125.734-.156.734-.156h.969l-.531-.5-.437-.562-.312-.562-.187-.437-.156-.7-.25-1.234Z"
              transform="translate(-784 -179)"
              fill="#5e5e5e"
              stroke="#5e5e5e"
              strokeWidth="1"
            />
            <path
              id="Trazado_779"
              data-name="Trazado 779"
              d="M889.094,217.875s2,.5,2.156.5a3.921,3.921,0,0,1,1.438.375c.125.188,1.031,1.438,1.031,1.438l1.563,1.938.625.969,1.718,1.9.625,1.125-1.969-1.781-.812-.625.125,1.625-.969-2.25-1.156-1.656-.781-1.031-1.312-1.281-.812-.375Z"
              transform="translate(-784 -179)"
              fill="#636363"
              stroke="#636363"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_761"
              data-name="Trazado 761"
              d="M884.25,221.719H882.8l-1.687.109-.359.516-1.344.969-.187.563-.344,1.406.531,1.531.688,1.844s.344,1.078.344,1.234.469.359.469.359l1.125.891v-.891c0-.156-.344-1.781-.344-1.781l.922-.859.828-.8.688-.594s.906-.781,1.094-.719a6.516,6.516,0,0,0,1.469-.594l.375-.844v-.406l-.375-.344-.312-.562-.469-.516-.609-.516Z"
              transform="translate(-784 -179)"
              fill="#7b7878"
              stroke="#7b7878"
              strokeWidth="1"
            />
            <path
              id="Trazado_737"
              data-name="Trazado 737"
              d="M864.953,204.938h3.578s1.25.313,1.344.313,1.219.25,1.219.25l1.406.219,2,.75s.875.984.969,1.078,1.3,1.672,1.391,1.7.328.469.328.469H874.5l-2-.344-1.625-.406-1.25-.469-1.094-.437-.781-.25-.625-.344-.969-1Z"
              transform="translate(-784 -179)"
              fill="#535252"
              stroke="#535252"
              strokeWidth="1"
            />
            <path
              id="Trazado_703"
              data-name="Trazado 703"
              d="M844.594,199.266l1.766-1.078,4.219-1.531,3.172-1.031,4.594-1.094,2.906-.594h6.188l2.969.406,2.469.75,1.266.766-.8.172.5,1.438.407,1.53.313,1.063.156,1.625,1.063,1.906L877.8,206.5l-4.453-1.781,1.156,1.719-2.187-.844-.969-.5-3.031-2.5L866,201.031l-1.719-.844-1.406-.125-2.719-.531L857.5,199l-1.031-.5-1.031-.437-2.812-.375-2.219.125-4.687.938Z"
              transform="translate(-784 -179)"
              fill="#484848"
              stroke="#484848"
              strokeWidth="1"
            />
            <path
              id="Trazado_704"
              data-name="Trazado 704"
              d="M840.063,280.594s-.125.2-.078.234.094.172.156.219a.694.694,0,0,0,.359,0c.016-.016-.047-.453,0-.453Z"
              transform="translate(-784 -179)"
              fill="#9f9e9e"
              stroke="#9f9e9e"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_705"
              data-name="Trazado 705"
              d="M844.828,280.75v.359a1.434,1.434,0,0,0,.141.375c.063.063.188-.172.188-.172v-.3l.094-.266-.094-.094Z"
              transform="translate(-784 -179)"
              fill="#9f9e9e"
              stroke="#9f9e9e"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_791"
              data-name="Trazado 791"
              d="M898.063,246.953l-1.479.714L894.917,249l-.792,1.406L895.5,252l1.417,3.417.667,3.333-.208,2.031v1.844l-.458,2.625,2.5-5,.917-5.417v-2l-1.917-1.583-.833-1.333s1-1.083,1.25-.917S901,250.667,901,250.667l1.406,3.99-.281,1.422h.078l.391-1.687.406-2.266v-1.219l-.5-1.219-1.083-1.187-.854-1-.969-.547-.76-.141Z"
              transform="translate(-784 -179)"
              fill="#444343"
              stroke="#444343"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_792"
              data-name="Trazado 792"
              d="M894.766,251.188l-.578.625-.312,1.375.75,2.563L896,258.313l.25,3.25-1.187,2.625-1.187-.312.75-1.687v-2.625l-1.75-2.125-.937-.75.5-1.375.234-2.016v-.484l.719-1.3.688-1.031Z"
              transform="translate(-784 -179)"
              fill="#5d5c5c"
              stroke="#5d5c5c"
              strokeWidth="1"
            />
            <path
              id="Trazado_780"
              data-name="Trazado 780"
              d="M892.641,252.781v1.344l-.391,1.813-.625,1.3.625,2.078v1.5l-.625,1.156.625,1.469,1.188.438,1.656.266.141,2.031-1.109.7-1.594,1.109L891.5,267.5l-.219-1.2-.406-1.359-.812-1.062v-2.75l.063-1.328-.5-1.3-.812-1.031,2.061-2.47,1.375-2.219"
              transform="translate(-784 -179)"
              fill="#4d4c4c"
              stroke="#4d4c4c"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_793"
              data-name="Trazado 793"
              d="M894.031,251.844l-.172,1.5.328,1.125.25.813.438.938.594,1.125.625,1.375v1.219l.188,1.469L896,262.3l-.375.672-.312.844-.187.438V266.1l.391.063,1.266-.625a5.4,5.4,0,0,1,.156-.75c.063-.125.406-2.156.406-2.156v-1.937l.188-1.969-.375-1.781-.25-1.25-.312-1.062-.5-1.156-.469-.906-.312-.937-.437-.406Z"
              transform="translate(-784 -179)"
              fill="#7d7b7b"
              stroke="#7d7b7b"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_781"
              data-name="Trazado 781"
              d="M901.813,256.5l.219-.391h.156l-1.437,5.266-.75,2.938-.687,1.938-1.062,2.313-1.312,1.813-1.75,2.063-3.062,1.313h-2.437l-2.062-.875-.687-1.125v-.812L887.63,272l1.25.438,1.563.75h2.25l1.375-.75,1.563-1.125,1.313-1.875,1.625-2.625.672-1.7.766-2.3.75-2.812,1.063-3.5"
              transform="translate(-784 -179)"
              fill="#434242"
              stroke="#434242"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_794"
              data-name="Trazado 794"
              d="M891.75,256.875l-.109.5.313,1.047.266.906.078.625v.563l-.078.547-.469.469-.109.391.2.578.281.531.094.281.531.266.391.125.547.188.172-.078.375-.781.313-.8v-1.391l.078-.734-.078-.578-.859-1.109-.547-.578-.391-.469L892.3,257l-.172-.125-.281-.156Z"
              transform="translate(-784 -179)"
              fill="#7d7b7b"
              stroke="#7d7b7b"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_782"
              data-name="Trazado 782"
              d="M900.344,254.766l-.25,1.953-.437,1.844-.312,1.844-.562,1.219-.594,1.094-.625,1.25-.594,1.219-.375.438-.562.25-.656.25-.719.25-.906.719-.969.719h-.875l-.375-.375-.187-1.062v-.75l-.5-.625-.531-.687-.25-.812v-3.25l.25-.625-.25-.5-.437-.75-.281-.156-.5.625.125.781.156,1.219-.156,1.063-.469,1.125-.375,1.281-.25,1.313a5.752,5.752,0,0,1,.25.938c-.031.094.719.875.719.875l1.031.375.969.969.188,1.188.125.875-.312.844.688.781.969.281.875.063s2.063-1.125,2-1.125,2.031-2.906,2.031-2.906l1.172-1.953.453-1.2.875-2.594.531-2.187.641-2.125.453-1.484.172-1.141-.422-.5Z"
              transform="translate(-784 -179)"
              fill="#6a6767"
              stroke="#6a6767"
              strokeWidth="1"
            />
            <path
              id="Trazado_783"
              data-name="Trazado 783"
              d="M888.906,257.484l-.828.766.141.656-.312,1.109-.484,1.344-.344,1.469-.516,2.031-.156,1.391.094.813.063,1.531.188.625V270l.219.875.313-1.281.625-.375.844.781a6.1,6.1,0,0,1,.828.453,7.923,7.923,0,0,1,.641.734l.328.469h.359l.188-.781-.187-1.656-.156-.375-.281-.469-.25-.344L889,267.5l-.25-.156-.281-.281-.562-1.094v-.781l.109-.672.453-1.359.531-1.281.125-1.016-.219-1.3-.156-.656.375-.531.234-.234Z"
              transform="translate(-784 -179)"
              fill="#4d4c4c"
              stroke="#4d4c4c"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_784"
              data-name="Trazado 784"
              d="M887.2,270l.094-.359.359-.219s.156-.125.219-.125a1.806,1.806,0,0,1,.359.219,3.19,3.19,0,0,0,.313.3c.141.109.719.438.719.438l.594.422.469.7.344.25s.156.016.188.063a3.746,3.746,0,0,1,.328.359,5.4,5.4,0,0,0,.484.516s.563.141.609.172a5.669,5.669,0,0,0,.609.109h.375l-.469.25-1.031.078h-1.187l-.891-.328-.844-.437-.484-.125-.484-.234-.312-.172-.359-.5-.234-.391.094-.594Z"
              transform="translate(-784 -179)"
              fill="#5b5b5b"
              stroke="#5b5b5b"
              strokeWidth="1"
            />
            <path
              id="Trazado_706"
              data-name="Trazado 706"
              d="M839.281,279.25l.359-.484.172-.3h.688l.7.172.453.391.141.109.672-.219h1.047l.953.188.438.141.563.063.313.313.234.375.359-.375.531-.375h1.906s.531.594.594.625a1.85,1.85,0,0,1,.25.25L850,280l.109-.219.359-.156h.719s.344.063.375.25a1.105,1.105,0,0,0,.313.438l.344-.094.5-.344.594-.25.531-.156.5-.125.266.125h.141c.281.313.859,0,.859,0h.516l.7-.219,1.359-.219.813.078h.625l1.422-.8h.469l-1.2.719-.375.438-.312.656-.625.188-.969.688h-.312l-.25.219-.391.547-1.031.531-.547-.2h-.578l-.312.2-.156.5-.328.391-.562.484-.469.078h-.531l-.281-.125-.156-.266-.375-.312h-.281l-.2.234-.25.344-.422.313-.594.109-.5-.109-.469-.187-.219.375-.906.078-.531-.266-.469-.187-.531.188-.594.188-.516-.078-.359-.3-.437-.078-.344.078-.531.063-.453-.141-.484-.312-.187-.312-.187-.391-.094-.359-.125-.312-.187-.219-.328-.141-.422-.094-.625-.156-.5-.156-.281-.406-.328-.594-.187-.344Z"
              transform="translate(-784 -179)"
              fill="#888484"
              stroke="#707070"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_707"
              data-name="Trazado 707"
              d="M841.766,279.188v.453"
              transform="translate(-784 -179)"
              fill="none"
              stroke="#707070"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_708"
              data-name="Trazado 708"
              d="M846,280.125l.094.448-.094.287"
              transform="translate(-784 -179.094)"
              fill="none"
              stroke="#707070"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_709"
              data-name="Trazado 709"
              d="M849.656,280.125a1.879,1.879,0,0,0,0,.3,3.03,3.03,0,0,1,.125.344v.219"
              transform="translate(-784 -179)"
              fill="none"
              stroke="#707070"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_738"
              data-name="Trazado 738"
              d="M882.563,288.5,877.25,295l-6.75,6-8.25,5.25-7.75,5,1.5,3.5,6.625,6.375L870.5,330.5l1.75,2.25L879.5,322l6.5-10.75,4.25-6.75,2-3.5-1.5-5.562-2.812-5.875L885.125,284Z"
              transform="translate(-784 -179)"
              fill="#aeacac"
              stroke="#9f9a9a"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_669"
              data-name="Trazado 669"
              d="M840.375,301.844,841.75,305l2.25,2.25,2.5,1.75,1.75,1.75.328,1.172-.484.922L844,317.125l-2.25,3-2.359,3.125-3.312,4.625-2.453,3.813v-1.094l.25-2.844,2.922-7.125,1.469-6.969,1.391-6.562V301.5"
              transform="translate(-784 -179)"
              fill="#a2a1a1"
              stroke="#9f9d9d"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_710"
              data-name="Trazado 710"
              d="M854,311.429c.656,0,6.286,6.714,6.286,6.714l2.286,3-.946,1.571-1.469,1.489-2.585,3.083-1.462,2.7-2.966-.556-3.43-1.43-1.571-2.286v-3l-1.714-1.571-2.571-1.571v-1.429l3.429-3.714,1.339-2.522,4.518.094Z"
              transform="translate(-784 -179)"
              fill="#33313e"
              stroke="#33313e"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_711"
              data-name="Trazado 711"
              d="M856.143,330l.414,3.679,1.11,8.9-9.524-.44s-6,.571-6.143,0,2.857-8.857,2.857-8.857l3.286-7.429"
              transform="translate(-784 -179)"
              fill="#33313e"
              stroke="#707070"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_630"
              data-name="Trazado 630"
              d="M801.471,314.47l5.32,1.33,4.94,3.99,10.641,5.89,9.881,7.41,10.071,6.46-6.933-6.46L823.7,322.261l-4.75-5.32-6.27-5.13-6.229-4.029v1.406l-3.272,2.622Z"
              transform="translate(-784 -179)"
              fill="#a2a0a0"
              stroke="#a5a4a4"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_631"
              data-name="Trazado 631"
              d="M835.5,297.281l-4.125,1.094L825.5,299.75l-5.5,1.375-5,2.25-4.75,1.875-3.875,2.5-2.562,1.75-.969,1.828-.594,1.859,2.5-2.437,1.625-1.625v-1.062l9.625-.937,5.125-1L828,305.25h4.375l6.75,2.813-7.187-4.844,2.313-2.094,3.313-1.375Z"
              transform="translate(-784 -179)"
              fill="#828282"
              stroke="#828282"
              strokeWidth="1"
            />
            <path
              id="Trazado_627"
              data-name="Trazado 627"
              d="M795.688,315.125l4.875-3.906-1.687,4.906-1.75,7.125-.75,4.25-.344.531"
              transform="translate(-784 -179)"
              fill="#828282"
              stroke="#828282"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_628"
              data-name="Trazado 628"
              d="M803.344,309.844l-2.687,1.719-1.906,4.688-.687,3.5-.937,3.75-.75,4.188v.875l.219,3.156s1.031-3.969,1.031-4.406S803.344,309.844,803.344,309.844Z"
              transform="translate(-784 -179)"
              fill="#9d9a9a"
              stroke="#9d9a9a"
              strokeWidth="1"
            />
            <path
              id="Trazado_671"
              data-name="Trazado 671"
              d="M839.25,308.156l-2.812,10.656s-.781,2.5-.812,2.375-1.312,4.375-1.312,4.375l-.469,1.5-.7,3.469-2.359-1.656,2.844,2.688a10.483,10.483,0,0,1,0-1.719,17.392,17.392,0,0,0,.219-2.031l1.5-3.344,1.375-3.781s2.781-13.187,2.844-13.281l.156-5.656-.469,4.125Z"
              transform="translate(-784 -179)"
              fill="#676565"
              stroke="#676565"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_632"
              data-name="Trazado 632"
              d="M806.344,308.344l4.469-1.094s14.75,3.531,15.188,4,9.219,9.813,9.219,9.813l-.906,4.5-.5,1.375-.672,3.531-2.391-1.562-6.937-6.656-4.75-5.25-6.344-5.187-6.094-3.687"
              transform="translate(-784 -179)"
              fill="#b7b6b6"
              stroke="#b7b6b6"
              strokeWidth="1"
            />
            <path
              id="Trazado_672"
              data-name="Trazado 672"
              d="M837.594,299.844l-4.51,1.625-4.167.365-2.333,1.01,12.042,5.719.531-1.656v-.969l.281-2.094.188-1.25v-1.125l-.75-.594-.812-.562Z"
              transform="translate(-784 -179)"
              fill="#b7b6b6"
              stroke="#b7b6b6"
              strokeWidth="1"
            />
            <path
              id="Trazado_633"
              data-name="Trazado 633"
              d="M801.813,314.375l.813,10.958v16.729s8.708-10.063,9.708-10.4,16.729-.917,16.729-.917l-6.625-4.937L811.969,320l-5.031-4.062Z"
              transform="translate(-784 -179)"
              fill="#a5a4a4"
              stroke="#a5a4a4"
              strokeWidth="1"
            />
            <path
              id="Trazado_629"
              data-name="Trazado 629"
              d="M802.25,313.313l-1.125,2.875-5.094,14.969v10.938h6.5V322.688Z"
              transform="translate(-784 -179)"
              fill="#afaeae"
              stroke="#afaeae"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_673"
              data-name="Trazado 673"
              d="M812.375,331.719s3.556,10.344,4.156,10.344,7.25.125,7.25.125Z"
              transform="translate(-784 -179)"
              fill="#a2a0a0"
              stroke="#a2a0a0"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_634"
              data-name="Trazado 634"
              d="M802.719,342.094s5.719-7.125,5.781-7.281,3.875-3.094,3.875-3.094l4.219,10.375Z"
              transform="translate(-784 -179)"
              fill="#afaeae"
              stroke="#afaeae"
              strokeWidth="1"
            />
            <path
              id="Trazado_674"
              data-name="Trazado 674"
              d="M812.438,331.563l5.938-.344,10.8-.469,13.391,9.031-.594,2.188-18.062.25-11.094-10.156-.375-.5"
              transform="translate(-784 -179)"
              fill="#afaeae"
              stroke="#afaeae"
              strokeWidth="1"
            />
            <path
              id="Trazado_675"
              data-name="Trazado 675"
              d="M833.688,331.563s3.281-5.031,3.313-5.187l1.188-1.562,2.188-2.875,2.344-3,1.281.719,2.344,1.438,1.719,1.531.156,3.219-3.25,7.406-2.437,6.5-4.187-4Z"
              transform="translate(-784 -179)"
              fill="#aeabab"
              stroke="#929292"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_712"
              data-name="Trazado 712"
              d="M848.063,312.906l-2.844,3.078-1.172,1.172L842.688,319s1.156.656,1.156.484v-1.406l3.516-3.687Z"
              transform="translate(-784 -179)"
              fill="#28272e"
              stroke="#28272e"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_739"
              data-name="Trazado 739"
              d="M862.609,321.156a2.434,2.434,0,0,1,.484.578c0,.063-3.25,3.75-3.25,3.75l-1.984,2.484-1.094,2.344-.578.313-.094-.609,1.406-2.594,2.641-3.328"
              transform="translate(-784 -179)"
              fill="#28272e"
              stroke="#28272e"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_713"
              data-name="Trazado 713"
              d="M846.313,308.766l1.688,1.2,1.281,1.047s.438.453.547.438,2.953.328,2.953.328l1.234-.594,7.141-4.3-6.672,4.375.234.609-.7-.422-.922.516-4.547-.094-.3-1.234-2.594-2.312Z"
              transform="translate(-784 -179)"
              fill="#28272e"
              stroke="#28272e"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_740"
              data-name="Trazado 740"
              d="M863.109,321.875l9.156,11s2.047-2.875,2.3-3.125,2.75-4.187,2.75-4.187l10.313,7.5-1.812,7.438-1.062,2.188-27.141-.719-1.484-11.344.641-.25,1.2-2.422,1.938-2.547Z"
              transform="translate(-784 -179)"
              fill="#aba9a9"
              stroke="#afaeae"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_762"
              data-name="Trazado 762"
              d="M921.8,314.719l-5.675,2.719-7.281,2.531L881,319.8l14.25-1.3,14.125-1.062Z"
              transform="translate(-784 -179)"
              fill="#9a9999"
              stroke="#9a9999"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_763"
              data-name="Trazado 763"
              d="M882.75,316.875l14.125-4.187,12.25-2.375,6.688,1.75-15.391,2.078-6.509,1.227-11.163,1.507"
              transform="translate(-784 -179)"
              fill="#9a9999"
              stroke="#9a9999"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_764"
              data-name="Trazado 764"
              d="M889.714,305.117l18.143,4.6H901L891.857,312l-5.571,1.714-3.692,3.192Z"
              transform="translate(-784 -179)"
              fill="#9a9999"
              stroke="#9a9999"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_765"
              data-name="Trazado 765"
              d="M909.094,310.313l-1.281-.562h-6.687l-9.312,2.344-5.594,1.578-3.594,3.141,5.406-1.594,6.719-1.937s6.375-1.562,6.906-1.594S909.094,310.313,909.094,310.313Z"
              transform="translate(-784 -179)"
              fill="#aeacac"
              stroke="#aeacac"
              strokeWidth="1"
            />
            <path
              id="Trazado_766"
              data-name="Trazado 766"
              d="M880.891,319.8l1.7-2.883,11.331-1.449,8.99-1.7,11.424-1.386,1.451-.268,5.446,1.719.156,1.125-3.527.638-8.8,1.859-7.9.662-7.772.614Z"
              transform="translate(-783.953 -179)"
              fill="#aeacac"
              stroke="#aeacac"
              strokeWidth="1"
            />
            <path
              id="Trazado_795"
              data-name="Trazado 795"
              d="M892.25,300.875H900l6.125,1.313,8.563,2.438,6.766,3.625v1.672l-5.7-3.234-11.875-3.125-6.125-1.375-6.25.375.75-1.687"
              transform="translate(-784 -179)"
              fill="#9a9999"
              stroke="#9a9999"
              strokeWidth="1"
            />
            <path
              id="Trazado_796"
              data-name="Trazado 796"
              d="M892.141,302.563l5.547-.5,17.813,4.5,6.328,3.375-8.453-.062-12.5-3.75-10.266-2.2.813-1.359Z"
              transform="translate(-784 -179)"
              fill="#a2a0a0"
              stroke="#a2a0a0"
              strokeWidth="1"
            />
            <path
              id="Trazado_785"
              data-name="Trazado 785"
              d="M889.828,305.125l.688-1.141,10.2,2.2,7.938,2.25,4.406,1.344,8.906.563V314.7l-6.156-2.609-6.875-1.812-2.312-.875-10.875-2.781-5.922-1.5"
              transform="translate(-784 -179)"
              fill="#aeacac"
              stroke="#aeacac"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_797"
              data-name="Trazado 797"
              d="M890.75,295.391l7.813,2.109,14,3.375,9.125,2.813-16.312-3.437-6.5-1.125-4.125.25-2.5,1.5Z"
              transform="translate(-784 -179)"
              fill="#9a9999"
              stroke="#9a9999"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_741"
              data-name="Trazado 741"
              d="M863.031,321.813l9.313,10.938"
              transform="translate(-784 -179)"
              fill="none"
              stroke="#28272e"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_676"
              data-name="Trazado 676"
              d="M842.813,318.953l-5.672,7.359-3.391,5.328"
              transform="translate(-784 -179)"
              fill="none"
              stroke="#28272e"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_767"
              data-name="Trazado 767"
              d="M892,301.563l-2.687,4.125-7.75,12.75-4.25,7-4.937,7.188"
              transform="translate(-784 -179)"
              fill="none"
              stroke="#737171"
              strokeWidth="0.2"
            />
            <path
              id="Trazado_786"
              data-name="Trazado 786"
              d="M889.125,291.938l8.688,1.844,7.719,2.5,14.219,7.25-7.062-2.625-13.125-3.125-8.812-2.469Z"
              transform="translate(-784 -179)"
              fill="#aeacac"
              stroke="#aeacac"
              strokeWidth="1"
            />
            <path
              id="Trazado_798"
              data-name="Trazado 798"
              d="M906.406,302.2l6.813-.359L922,303.875l-.094,4.75-7.266-4.109Z"
              transform="translate(-784 -179)"
              fill="#888787"
              stroke="#888787"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_799"
              data-name="Trazado 799"
              d="M892.938,300.469l1.844-1,4.063-.375,5.969,1.094,8.438,1.844-7,.219-6.375-1.344h-7.812Z"
              transform="translate(-784 -179)"
              fill="#aeacac"
              stroke="#aeacac"
              strokeWidth="1"
            />
            <path
              id="Trazado_768"
              data-name="Trazado 768"
              d="M877.25,325.625l16.25,3.208-8.25,13,2.375-8.8Z"
              transform="translate(-784 -179)"
              fill="#9a9999"
              stroke="#9a9999"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_769"
              data-name="Trazado 769"
              d="M877.031,325.8l3.875-5.925,9.281.656L900.4,324l6.35,4,3.5,4.333,3.031,3.167,1.344,1.625-3.312-7.969-2.912-9.281,4.881-1.5,8.688-3.625v2.594l.781,25.056-7.187-.337L908.4,333.4l-5.6-5.4-9.2-4-9.2-1.2-3.2,1.2-4,1.8"
              transform="translate(-784 -179)"
              fill="#949292"
              stroke="#9a9999"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_770"
              data-name="Trazado 770"
              d="M882.188,319.734s10.25-.016,10.688,0,7.25-.3,7.25-.3l8.188.3L922.6,339.8l-9.037-5.362,1.063,2.75-4.125-4.531-3.625-4.5-6.375-4-5.687-2.062-4.687-1.437-9.312-.75,1.563-.172"
              transform="translate(-784 -179)"
              fill="#aeacac"
              stroke="#aeacac"
              strokeWidth="1"
            />
            <path
              id="Trazado_771"
              data-name="Trazado 771"
              d="M879.75,324.25l4.625-1.625,9.281,1.219L903,328l6.75,6.625L916,342.25l-5.125-3.5-4.625-4.125-7.375-4.75-5.5-1-9-1.75-7.25-1.625Z"
              transform="translate(-784 -179)"
              fill="#b4b2b2"
              stroke="#b4b2b2"
              strokeWidth="1"
            />
            <path
              id="Trazado_774"
              data-name="Trazado 774"
              d="M884.938,342.25s8.219-13.625,8.531-13.375a49.178,49.178,0,0,0,5.188.969l7.438,4.781s3.75,2.875,3.844,3.156,5.906,4.313,5.906,4.313h-8.719l-8.469.156Z"
              transform="translate(-784 -179)"
              fill="#aba9a9"
              stroke="#aba9a9"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_714"
              data-name="Trazado 714"
              d="M848.156,838.688l-.219.563.406.563.719-.344.281-.625-.281-.437Z"
              transform="translate(-788 -721)"
              fill="#8f8787"
              stroke="#8f8787"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_677"
              data-name="Trazado 677"
              d="M833.672,250.281l.594.25.469.063.75.078.359-.141h.281l.2-.25.344-.094h1.281l.422-.5.109-.391.25-.422.094-.609v-.437l-.344-.375-.312-.109v-.125l-.344-.234-.391-.141-.344-.219-.312-.172-.453-.094-.2-.109-.516-.187-.437-.062h-1.578l-.953-.125-1.953.281-1.047.688-.844.828-.187.469-.25.563.25.719.188.266.313.281.578.219.813.094-.609-.312-.25-.156-.391-.234-.453-.7.219-.547.234-.5.641-.609.469-.312.328-.281.672-.172h.844l.719-.094.484.094h2.078l.922.25,1.172.516.594.453.2.313v.5l-.141.3-.219.313-.437.2-.484.281-.969.328-.828.281h-1.266Z"
              transform="translate(-784 -179)"
              fill="#575555"
              stroke="#575555"
              strokeWidth="0.1"
            />
            <path
              id="Trazado_743"
              data-name="Trazado 743"
              d="M876.667,274.75l-.333,4.917L875.75,284l-1.667,3.583-1.99,3.651-3.094,5.2-2.141,3.766,5.516-6.141,3.375-4.979,2.25-3.167,3.484-5.979,1.641-3.156,1.625-3.281,2.083-3.333-.5-3.5.5-2.583.5-2.083.75-2v-1.516l-.75-.984-.969.565h-.1l-1.516-.565-1.078-.641-2.3-2.141-1.875-2.385-.75-1.833-1.167,1.833-.5,2.5.5,7.167v9.75Z"
              transform="translate(-784 -179)"
              fill="#414141"
              stroke="#414141"
              strokeWidth="1"
            />
            <path
              id="Trazado_635"
              data-name="Trazado 635"
              d="M831.172,243.531l-1.016.469v-.917l.531-.9,1.063-.875,2.75-1,1.333.188,2.674.583.93.526.594.578,1.1,1.25.591,1.016.328.609.188.391v.2l-.109.219-.266.531-1.645-1.25L838.656,244l-2.073-.917-1.255-.279h-1.047l-1.016.211-1.016.266Z"
              transform="translate(-784 -179)"
              fill="#4a4a4a"
              stroke="#4a4a4a"
              strokeWidth="0.5"
            />
          </G>
        </SvgArnulfo>

        <span>
          Imagen vectorial (formato SVG, del inglés{" "}
          <i>Scalable Vector Graphics</i>)
        </span>
        <DivBotones>
          <div onClick={toggleAnimationUno}>
            {isAnimationUnoOn ? <BtnPause /> : <BtnPlay />}
            <span>Colorear-titilar piezas</span>{" "}
          </div>
          <div onClick={toggleAnimationDos}>
            {isAnimationDosOn ? <BtnPause /> : <BtnPlay />}
            <span>Colorear-dispersar piezas</span>
          </div>

          <div onClick={toggleAnimationTres}>
            {isAnimationTresOn ? <BtnPause /> : <BtnPlay />}
            <span>Colorear-titilar trazos</span>
          </div>
        </DivBotones>
      </DivSvgArnulfo>
    </>
  );
};

export default ArnulfoSvg;

const colorDarkBlue1a = "#272b59";

const escalar = keyframes`
  
to{
    transform: scale(.85);
}  

`;

const DivSvgArnulfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 10%;
  margin-top: 10%;

  span {
    padding-top: 2%;
    font-size: 1.4rem;
    padding-bottom: 20px;
    align-self: flex-start;
  }
`;

const SvgArnulfo = styled.svg`
  /* background-image: url(${laminaOxidada}); */
  background-color: ${colorDarkBlue1a};
  background-size: cover;

  path {
    stroke: 0.1px;
  }
`;

const G = styled.g`
  stroke-width: 0.1px;
  transform: scale(0);
  animation: ${escalar} 1s ease-out forwards;
`;

const DivBotones = styled.div`
  /* padding-top: 10%; */
  display: flex;
  justify-content: space-around;
  @media (min-width: 375px) {
    padding-bottom: 8%;
  }
  @media (min-width: 600px) {
    padding-top: 6%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 15%;

    img {
      width: 50%;
      @media (min-width: 375px) {
        width: 40%;
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
