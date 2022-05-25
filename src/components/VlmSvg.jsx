import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import BtnPlay from "@components/BtnPlay";
import BtnPause from "@components/BtnPause";

const VlmSvg = () => {
  const [vlm, setVlm] = useState(true);

  let refMuroH = useRef();
  let refPiso = useRef();
  let refVentana = useRef();
  let refMuroV = useRef();
  let refGrada = useRef();
  let refCubierta = useRef();
  let refTorecilla = useRef();
  let refEstructura = useRef();
  let refCerca = useRef();

  const activarAnimarVlmPaths = () => {
    const piso = refPiso.current.children;
    const muroVertical = refMuroV.current.children;
    const muroHorizontal = refMuroH.current.children;
    const cubierta = refCubierta.current.children;
    const torrecilla = refTorecilla.current.children;
    const estructura = refEstructura.current.children;
    const ventanas = refVentana.current.children;
    const grada = refGrada.current.children;
    const cerca = refCerca.current.children;

    function ocultarVlmPaths(elem) {
      for (let i = 0; i <= elem.length - 1; i++) {
        elem[i].style.opacity = 0;
      }
    }

    function activarOcultarVlmPaths() {
      ocultarVlmPaths(piso);
      ocultarVlmPaths(muroVertical);
      ocultarVlmPaths(muroHorizontal);
      ocultarVlmPaths(cubierta);
      ocultarVlmPaths(torrecilla);
      ocultarVlmPaths(estructura);
      ocultarVlmPaths(ventanas);
      ocultarVlmPaths(grada);
      ocultarVlmPaths(cerca);
    }

    function mostrarVlmPaths(elem) {
      for (let i = 0; i <= elem.length - 1; i++) {
        elem[i].style.opacity = 1;
      }
    }

    function addFill(elem, color) {
      for (let i = 0; i <= elem.length - 1; i++) {
        elem[i].style.fill = color;
      }
      cubierta[7].style.fill = "#ddd7d2";
    }

    function activarMostrarVlmPaths() {
      let color = "#a42020";
      mostrarVlmPaths(piso);
      mostrarVlmPaths(muroVertical);
      mostrarVlmPaths(muroHorizontal);
      mostrarVlmPaths(cubierta);
      addFill(cubierta, color);
      mostrarVlmPaths(torrecilla);
      mostrarVlmPaths(estructura);
      mostrarVlmPaths(ventanas);
      mostrarVlmPaths(grada);
      mostrarVlmPaths(cerca);
    }

    function pintarVlmPaths(vlmPaths) {
      var i = 0;
      let timer = setInterval(function () {
        let long = vlmPaths[i].getTotalLength();
        vlmPaths[i].style.opacity = 1;
        const animacion = vlmPaths[i].animate(
          [
            {
              strokeDashOffset: long,
            },

            {
              strokeDashOffset: 0,
            },
          ],
          {
            duration: 2000,
            direction: "normal",
            easing: "linear",
          }
        );
        if (i === vlmPaths.length - 1) {
          clearInterval(timer);
        }
        i++;
      }, 100);
    }

    function animarPisos() {
      pintarVlmPaths(piso);
    }

    function animarMurosVerticales() {
      pintarVlmPaths(muroVertical);
    }

    function animarMurosHorizontales() {
      pintarVlmPaths(muroHorizontal);
    }

    function animarStrokeCubierta() {
      pintarVlmPaths(cubierta);
      cubierta[7].style.fill = "#ddd7d2";
    }

    function activarFillCubierta() {
      addFill(cubierta, "#a42020");
    }

    function animarTorrecilla() {
      pintarVlmPaths(torrecilla);
    }

    function animarEstructura() {
      pintarVlmPaths(estructura);
    }

    function animarVentanas() {
      pintarVlmPaths(ventanas);
    }

    function animarGradas() {
      pintarVlmPaths(grada);
    }

    function animarCerca() {
      pintarVlmPaths(cerca);
    }

    function animarVlmPaths() {
      setTimeout(animarPisos);
      setTimeout(animarMurosVerticales, 1000);
      setTimeout(animarMurosHorizontales, 2000);
      setTimeout(animarStrokeCubierta, 3000);
      setTimeout(animarTorrecilla, 4000);
      setTimeout(animarEstructura, 5000);
      setTimeout(animarVentanas, 6000);
      setTimeout(animarGradas, 7000);
      setTimeout(animarCerca, 8000);
      setTimeout(activarFillCubierta, 8000);
    }
    activarOcultarVlmPaths();
    animarVlmPaths();
  };

  const activarMostrarVlmPaths = () => {
    const piso = refPiso.current.children;
    const muroVertical = refMuroV.current.children;
    const muroHorizontal = refMuroH.current.children;
    const cubierta = refCubierta.current.children;
    const torrecilla = refTorecilla.current.children;
    const estructura = refEstructura.current.children;
    const ventanas = refVentana.current.children;
    const grada = refGrada.current.children;
    const cerca = refCerca.current.children;

    function mostrarVlmPaths(elem) {
      for (let i = 0; i <= elem.length - 1; i++) {
        elem[i].style.opacity = 1;
      }
    }

    function addFill(elem, color) {
      for (let i = 0; i <= elem.length - 1; i++) {
        elem[i].style.fill = color;
      }
      cubierta[7].style.fill = "#ddd7d2";
    }

    let color = "#a42020";
    mostrarVlmPaths(piso);
    mostrarVlmPaths(muroVertical);
    mostrarVlmPaths(muroHorizontal);
    mostrarVlmPaths(cubierta);
    addFill(cubierta, color);
    mostrarVlmPaths(torrecilla);
    mostrarVlmPaths(estructura);
    mostrarVlmPaths(ventanas);
    mostrarVlmPaths(grada);
    mostrarVlmPaths(cerca);
  };

  const vlmToggle = () => {
    setVlm(!vlm);
  };

  useEffect(() => {
    if (vlm) {
      activarMostrarVlmPaths();
    } else {
      activarAnimarVlmPaths();
    }
  }, [vlm]);

  return (
    <>
      <DivVlmSvg>
        <div>
          <svg
            id="perpectiva-vlm"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 306 227"
          >
            <rect
              id="recuadro"
              data-name="Rectángulo 1"
              width="100%"
              height="100%"
              fill="#ddd7d2"
            />

            <g ref={refVentana}>
              <path
                id="Ven1"
                className="ventana"
                d="M232.668,308.842,247.6,316.8v12.8L232.668,321Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#062903"
                strokeWidth="1"
              />
              <path
                id="Ven1a"
                className="ventana"
                d="M233.625,309.875c-.125.75,0,10.25,0,10.25l13.75,7.813"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#062903"
                strokeWidth="0.5"
              />
              <path
                id="Ven2"
                className="ventana"
                d="M255.417,321.5l4.917,2.417v6.833l-4.917-2.917Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#062903"
                strokeWidth="1"
              />
              <path
                id="Ven2a"
                className="ventana"
                d="M256.313,322.344s.031,4.781,0,4.938a41.586,41.586,0,0,0,3.688,2.25"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#062903"
                strokeWidth="0.5"
              />
              <path
                id="Ven3"
                className="ventana"
                d="M242,337.417V343l8,4.25v-5.083"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#062903"
                strokeWidth="1"
              />
              <path
                id="Ven3a"
                className="ventana"
                d="M243,338v4.25l6.5,3.333"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#062903"
                strokeWidth="0.5"
              />
              <path
                id="Ven5"
                className="ventana"
                d="M299.441,354.571v14.143l15.273-8.857V345.571Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#062903"
                strokeWidth="1"
              />
              <path
                id="Ven5a"
                className="ventana"
                d="M313.531,346.969v12.094l-13.594,7.781"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#062903"
                strokeLinecap="round"
                strokeWidth="0.5"
              />
              <path
                id="Ven6"
                className="ventana"
                d="M329.714,337.417v17.155l15.857-9.429V327.714Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#32482c"
                strokeWidth="1"
              />
              <path
                id="Ven6a"
                className="ventana"
                d="M344.406,328.969c0,.219.031,15.438-.187,15.813s-13.937,8.281-13.937,8.281"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#32482c"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.5"
              />
              <path
                id="Ven7"
                className="ventana"
                d="M329.714,311.33c.143-.044,15.286-8.9,15.286-7.9v14.286l-15.286,8.143Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#062903"
                strokeWidth="1"
              />
              <path
                id="Ven7a"
                className="ventana"
                d="M343.938,303.969V316.75l-13.844,7.344"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#062903"
                strokeLinecap="round"
                strokeWidth="0.5"
              />
            </g>

            <g ref={refMuroV}>
              <path
                id="MuroV1"
                className="muro-v"
                d="M201.286,313.857v20.286"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroV2"
                className="muro-v"
                d="M206.429,317v19.286"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroV3"
                className="muro-v"
                d="M208.571,318.4V335"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroV4"
                className="muro-v"
                d="M227.429,329.026v19.26"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroV5"
                className="muro-v"
                d="M268.571,329.026v23.832"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroV6"
                className="muro-v"
                d="M223.544,304.286v22.857"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="MuroV7"
                className="muro-v"
                d="M271.93,372.714V353.429"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroV8"
                className="muro-v"
                d="M273.714,372.143V354.286"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="Murov9"
                className="muro-v"
                d="M283.143,379.857V360.143"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroV10"
                className="muro-v"
                d="M290.571,383.714V359"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroV11"
                className="muro-v"
                d="M296,379.857V352.571"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroV12"
                className="muro-v"
                d="M319.143,364.714c.571-3,0-41.286,0-41.286"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="0.5"
              />
              <path
                id="MuroV13"
                className="muro-v"
                d="M320.143,364.714V322.571"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroV14"
                className="muro-v"
                d="M325.714,362.667V315.714"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroV15"
                className="muro-v"
                d="M350.857,299.143"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="MuroV16"
                className="muro-v"
                d="M350.857,346.429c.429-.857,0-46.571,0-46.571"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="0.5"
              />
              <path
                id="MuroV17"
                className="muro-v"
                d="M353,299.857"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="Murov18"
                className="muro-v"
                d="M352.429,346.429V299.286"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroV19"
                className="muro-v"
                d="M359,342.333l-.571-43.048"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
            </g>

            <g ref={refMuroH}>
              <path
                id="MuroH1"
                className="muro-h"
                d="M268.375,352.875l-45-26"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="MuroH13"
                className="muro-h"
                d="M351.048,345.375l1.39.813"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="MuroH14"
                className="muro-h"
                d="M320.143,365.313l-1.08-.594"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
            </g>

            <g ref={refPiso}>
              <path
                id="Piso7"
                className="piso"
                d="M374.156,334.25c-1.25.969,16.719-10,16.719-10v5.875L377,335.625l-3-1.375"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                id="Piso8"
                className="piso"
                d="M296.5,378.5l23.125-14"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="0.5"
              />
              <path
                id="Piso9"
                className="piso"
                d="M359.25,342.875,290.75,383"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="0.5"
              />
              <path
                id="Psio10"
                className="piso"
                d="M356.571,345.571l-66,39.143"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="Piso11"
                className="piso"
                d="M195.641,337.7l5.563-3.453"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeLinecap="round"
                strokeWidth=".5"
              />
              <path
                id="Piso12"
                className="piso"
                d="M283.143,419.875,379.75,363.5l22-13.125,20.125-8.25"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="Piso13"
                className="piso"
                d="M300.75,419.875C303,418,411,356,411,356l37.333-15.333"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="Piso14"
                className="piso"
                d="M182.5,345.75l116.25,65.5"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="Piso15"
                className="piso"
                d="M359.429,342"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="Piso16"
                className="piso"
                d="M370.714,313.143l14,8.571"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="Piso18"
                className="piso"
                d="M209.5,335.5c1.053.262,18.429,10.75,18.429,10.75"
                transform="translate(-148.929 -194.5)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="Piso19"
                className="piso"
                d="M207.188,335.875,227.313,347.5"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="Piso20"
                className="piso"
                d="M228.313,348.286c.813.027,44.188,24.9,44.188,24.9"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="Piso21"
                className="piso"
                d="M202,332.875l4.125,2.375"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="Piso22"
                className="piso"
                d="M290.571,384.5l-89.228-50.469"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="Piso23"
                className="piso"
                d="M273.714,372.714l4.393,2.58,4.393,2.58"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="Piso24"
                className="piso"
                d="M272.875,373.5l9.875,5.438"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="0.5"
              />
              <path
                id="Piso25"
                className="piso"
                d="M327.375,361.652l25.286-15.527"
                transform="translate(-149.661 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="0.5"
              />
              <path
                id="Piso26"
                className="piso"
                d="M272.063,373.5l1.906-1.312"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeWidth="1"
              />
              <path
                id="Piso29"
                className="piso"
                d="M206.781,335.875l1.906-1.156"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeLinecap="round"
                strokeWidth="1"
              />
            </g>

            <g ref={refGrada}>
              <path
                id="Grada1"
                className="grada"
                d="M375.625,354.571l16.875-9.446L374.25,334.5"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                id="Grada2"
                className="grada"
                d="M357,345.375l22.25,18.25V360.25l-3.875-2v-3.5L357,344Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                id="Grada3"
                className="grada"
                d="M375.375,358l17.438-9.779V345.25l-17.437,9.655Z"
                transform="translate(-148 -193.875)"
                fill="none"
                stroke="#707070"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                id="Grada4"
                className="grada"
                d="M396.625,350.625,379.25,360.5l-3.5-2.75,17.125-9.5Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                id="Grada5"
                className="grada"
                d="M396.375,353.438,379.5,363.5v-3.312l17.125-9.562Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#707070"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </g>

            <g ref={refCubierta}>
              <path
                id="cub1"
                className="cubierta"
                d="M299.441,276,339,298.25l-51,64.5L269.75,352l35-42.5Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#710505"
                strokeWidth="1"
              />
              <path
                id="cub2"
                className="cubierta"
                d="M299.25,276l-54.5,32,25.75,21.5L305,309.25,299.25,276"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#710505"
                strokeWidth="1"
              />
              <path
                id="cub3"
                className="cubierta"
                d="M221.5,303.75l23,4,54-31.75L256,283Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#710505"
                strokeWidth="1"
              />
              <path
                id="cub4"
                className="cubierta"
                d="M250,246.25,197.75,311.5s25.75,14.75,25.75,14V304.75l-2.214-.893L256,283l43-7Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#710505"
                strokeWidth="1"
              />
              <path
                id="cub5"
                className="cubierta"
                d="M304.375,249.5,392.75,301l-53.5-2.5-89.5-52.25Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#710505"
                strokeWidth="1"
              />
              <path
                id="cub6"
                className="cubierta"
                d="M307.078,264.25H318.75l-19,11-2-5.75Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#710505"
                strokeWidth="1"
              />
              <path
                id="cub7"
                className="cubierta"
                d="M319.6,264.25l11.9,14.25-10,6-20.75-9.75Z"
                transform="translate(-148 -194)"
                fill="#ddd7d2"
                stroke="#710505"
                strokeWidth="1"
              />
              <path
                id="cub8"
                className="cubierta"
                d="M330.188,279v4.313H323Z"
                transform="translate(-148 -193.063)"
                fill="#ddd7d2"
                stroke="#710505"
                strokeWidth="1"
              />
              <path
                id="cub9"
                className="cubierta"
                d="M264.531,235.563l-4.437,5.344a16.24,16.24,0,0,0,2.594,1.719c.219-.094,4.625-5.281,4.625-5.281Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#710505"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                id="cub10"
                className="cubierta"
                d="M271.188,235.688l-6.344-.187,2.781,1.969,7.094.5Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#710505"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </g>

            <g ref={refTorecilla}>
              <path
                id="Torrecilla1"
                className="torrecilla"
                d="M264.188,241.688V246"
                transform="translate(-148.156 -193.375)"
                fill="none"
                stroke="#a42020"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="Torrecilla2"
                className="torrecilla"
                d="M264.188,241.688V246"
                transform="translate(-148.156 -193.375)"
                fill="none"
                stroke="#a42020"
                strokeWidth="1"
              />
              <path
                id="Torrecilla3"
                className="torrecilla"
                d="M264.188,241.687v4"
                transform="translate(-151.156 -193.059)"
                fill="none"
                stroke="#a42020"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="Torrecilla4"
                className="torrecilla"
                d="M264.188,242.188v8.656"
                transform="translate(-139 -197.719)"
                fill="none"
                stroke="#a42020"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="Torrecilla5"
                className="torrecilla"
                d="M266.656,241.813l3.188-1.906v4.313s-3.156,1.719-3.187,1.5S266.656,241.813,266.656,241.813Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeLinejoin="round"
                strokeWidth="0.5"
              />
              <path
                id="Torrecilla6"
                className="torrecilla"
                d="M269,240.594v3.313l-2.187,1.031"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="0.5"
              />
              <path
                id="Torrecilla7"
                className="torrecilla"
                d="M267.906,241.2c-.016.078,0,2.063,0,2.063l-1.25.469"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="0.5"
              />
              <path
                id="Torrecilla8"
                className="torrecilla"
                d="M269,243.578l.891.578"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#a42020"
                strokeWidth="0.5"
              />
              <path
                id="Torrecilla9"
                className="torrecilla"
                d="M269,243.578l1.078.688"
                transform="translate(-150.188 -195.109)"
                fill="none"
                stroke="#a42020"
                strokeWidth="0.5"
              />
            </g>

            <g ref={refEstructura}>
              <path
                id="Estr1"
                className="estructura"
                d="M297.031,353.031c.021,0,21.688-12.906,21.688-12.906h0v3.031l-.187.219-21.5,12.563Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#b6b2b2"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                id="Estr2"
                className="estructura"
                d="M296.75,353.962c.022,0,23.75-13.759,23.75-13.759v2.844c-.2.452-23.75,14.344-23.75,14.344Z"
                transform="translate(-118 -212.516)"
                fill="none"
                stroke="rgba(178,175,175,0.91)"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                id="Estr3"
                className="estructura"
                d="M384.75,304.479l.461,19.334,2.383,1.13V302.917Z"
                transform="translate(-148 -193.276)"
                fill="none"
                stroke="#b6b2b2"
                strokeLinejoin="round"
                strokeWidth="1"
              />
              <path
                id="Estr4"
                className="estructura"
                d="M387.594,325.857l2.656-1.482-.375-22.5h-3.75l-26.469,15.047v2.547l27.937-15.781Z"
                transform="translate(-148 -194)"
                fill="none"
                stroke="#b6b2b2"
                strokeLinejoin="round"
                strokeWidth="1"
              />
            </g>

            <g ref={refCerca}>
              <path
                id="cerca1"
                className="cerca"
                d="M402,325.528V336.75"
                transform="translate(-158 -201)"
                fill="none"
                stroke="#033612"
                strokeWidth="1"
              />
              <path
                id="cerca2"
                className="cerca"
                d="M402,325.528V336.75"
                transform="translate(-158 -201)"
                fill="none"
                stroke="#033612"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="cerca3"
                className="cerca"
                d="M402,325.528V336.75"
                transform="translate(-147 -194)"
                fill="none"
                stroke="#033612"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="cerca4"
                className="cerca"
                d="M402,325.528V336.75"
                transform="translate(-136 -187)"
                fill="none"
                stroke="#033612"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="cerca5"
                className="cerca"
                d="M402,325.528V336.75"
                transform="translate(-124 -179)"
                fill="none"
                stroke="#033612"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="cerca6"
                className="cerca"
                d="M402,325.528V336.75"
                transform="translate(-111 -172)"
                fill="none"
                stroke="#033612"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="cerca7"
                className="cerca"
                d="M392.25,319.938c1.711,1.106,8.936,5.437,15.021,9.07,4.02,2.4,7.542,4.493,7.542,4.493"
                transform="translate(-148.25 -192.875)"
                fill="none"
                stroke="#033612"
                strokeWidth="1"
              />
              <path
                id="cerca8"
                className="cerca"
                d="M392.25,319.938c1.711,1.106,8.936,5.437,15.021,9.07,4.02,2.4,7.542,4.493,7.542,4.493"
                transform="translate(-114.25 -171.875)"
                fill="none"
                stroke="#033612"
                strokeWidth="1"
              />
              <path
                id="cerca9"
                className="cerca"
                d="M392.25,319.938c1.711,1.106,8.936,5.437,15.021,9.07,4.02,2.4,7.542,4.493,7.542,4.493"
                transform="translate(-114.25 -167.875)"
                fill="none"
                stroke="#033612"
                strokeWidth="1"
              />
              <path
                id="cerca10"
                className="cerca"
                d="M392.25,319.938c1.711,1.106,8.936,5.437,15.021,9.07,4.02,2.4,7.542,4.493,7.542,4.493"
                transform="translate(-148.25 -188.875)"
                fill="none"
                stroke="#033612"
                strokeWidth="1"
              />
              <path
                id="cerca11"
                className="cerca"
                d="M402,325.528V336.75"
                transform="translate(-352 -195)"
                fill="none"
                stroke="#033612"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="cerca12"
                className="cerca"
                d="M402,325.528V336.75"
                transform="translate(-365 -187)"
                fill="none"
                stroke="#033612"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="cerca13"
                className="cerca"
                d="M402,325.528V336.75"
                transform="translate(-380 -178)"
                fill="none"
                stroke="#033612"
                strokeLinecap="round"
                strokeWidth="1"
              />
              <path
                id="Cerca14"
                className="cerca"
                d="M199.429,324.528,153,351.714"
                transform="translate(-147 -193)"
                fill="none"
                stroke="#033612"
                strokeWidth="1"
              />
              <path
                id="Cerca15"
                className="cerca"
                d="M199.429,324.528,153,351.714"
                transform="translate(-147 -188)"
                fill="none"
                stroke="#033612"
                strokeWidth="1"
              />
            </g>
          </svg>
        </div>
        <h4>Proyección isométrica dibujada con Adobe-XD</h4>
        <DivVlmSvgBtn onClick={vlmToggle}>
          {vlm ? <BtnPlay /> : <BtnPause />}
        </DivVlmSvgBtn>
      </DivVlmSvg>
    </>
  );
};

export default VlmSvg;

// ESTILOS

const DivVlmSvg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 1.4rem;

  h4 {
    font-size: 1.2rem;
    font-weight: 300;
    padding-bottom: 15px;
  }
`;

const DivVlmSvgBtn = styled.div`
  display: flex;
  justify-content: center;
`;
