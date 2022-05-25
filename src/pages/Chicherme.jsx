import React, { useState, useEffect, useRef } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";

import styled, { keyframes } from "styled-components";
import BtnRegresar from "@components/BtnRegresar";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ArnulfoSvg from "@components/ArnulfoSvg";
import HermelindaSvg from "@components/HermelindaSvg";
import BtnPlay from "@components/BtnPlay";
import BtnPause from "@components/BtnPause";

function Chicherme() {
  const [state, setState] = useState(false);
  const [isAnimationOn, setIsAnimationOn] = useState(true);
  const [timeOutId, setTimeOutId] = useState(0);

  const toggleState = () => {
    setState(!state);
  };

  const chichermeToggle = () => {
    setIsAnimationOn(!isAnimationOn);
  };

  const history = useHistory();
  const regresar = () => {
    history.push("/explora");
  };

  const tarjetaRef = useRef();
  const abrasRef = useRef();
  const abraIzqRef = useRef();
  const abraDerRef = useRef();

  const removerAbras = () => {
    tarjetaRef.current.removeChild(abrasRef.current);
  };

  const ponerAbras = () => {
    tarjetaRef.current.appendChild(abrasRef.current);
  };

  const abraIzqAbrir = () => {
    abraIzqRef.current.animate(
      [
        {
          transform: "rotateY(-90deg) skewY(-5deg)",
        },
      ],
      {
        duration: 4000,
        easing: "ease-out",
        fill: "forwards",
      }
    );
  };

  const abraIzqCerrar = () => {
    abraIzqRef.current.animate(
      [
        {
          transform: "rotateY(5deg) skewY(-0deg)",
        },
      ],
      {
        duration: 4000,
        easing: "ease-out",
        fill: "forwards",
      }
    );
  };

  const abraDerAbrir = () => {
    abraDerRef.current.animate(
      [
        {
          transform: "rotateY(90deg) skewY(5deg)",
        },
      ],
      {
        duration: 4000,
        easing: "ease-out",
        fill: "forwards",
      }
    );
  };

  const abraDerCerrar = () => {
    abraDerRef.current.animate(
      [
        {
          transform: "rotateY(5deg) skewY(0deg)",
        },
      ],
      {
        duration: 4000,
        easing: "ease-out",
        fill: "forwards",
      }
    );
  };

  useEffect(() => {
    if (!isAnimationOn) {
      ponerAbras();
      abraIzqAbrir();
      abraDerAbrir();
      var timer = setTimeout(removerAbras, 5000);
    } else {
      clearTimeout(timer);
      ponerAbras();
      abraIzqCerrar();
      abraDerCerrar();
    }
  }, [isAnimationOn]);

  return (
    <>
      <Header toggleState={toggleState} state={state} />
      <BtnRegresar regresar={regresar} />
      {!state ? (
        <SectionChicherme>
          <h1>Chicherme</h1>
          <h6>Marzo/2022</h6>
          <p>
            Aquí se integran los proyectos <Link to="/arnulfo">Arnulfo</Link> y
            <Link to="/hermelinda">Hermelinda</Link> para darle cuerpo a una
            tarjeta que conmemora su aniversario de bodas.
          </p>{" "}
          <p>
            {" "}
            Fue compartida en familia invitándola a explorar colores aleatorios
            para la corbata y los aretes hasta encontrar, a manera de reto
            sencillo, colores iguales para ambos accesorios.
          </p>
          <p>
            Dos elementos fungen como las hojas (abras) de una puerta. Cada hoja
            gira a su costado para recrear un efecto de puerta que se abre. Se
            logra de manera aceptable, digamos, pero puede mejorarse. Por
            ejemplo, hacer que el lado inferior de las abras se deforme hacia
            abajo, tal como se deforma el lado superior. Un asunto a resolver.{" "}
          </p>
          <p>
            La animación de las abras se superpone, por así decirlo, sobre las
            animaciones de las imágenes de Arnulfo y Hermelinda e impide que
            estas se ejecuten. Se resuelve el problema removiendo del documento{" "}
            <i>html</i> el elemento que declara las abras justo al terminar su
            efecto animación. Para que este se logre de nuevo (puerta que se
            abre) hay que reincorporar al documento <i>html</i> el elemento
            removido.
          </p>
          <p>
            La tarjeta, pensada para compartirla vía celular, se redimensiona en
            dispositivos más grandes sin apartarse del concepto de diseño. De
            igual manera, no pierde calidad de resolución si se depliega en{" "}
            <i>desktop</i> o en dispositivos aún mayores. Una gran ventaja del
            formato <i>SVG</i> frente a los muy conocidos <i>jpeg</i> o{" "}
            <i>png.</i>
          </p>
          <DivTarjeta ref={tarjetaRef}>
            <DivPadres>
              <DivArnulfo>
                <ArnulfoSvg></ArnulfoSvg>
              </DivArnulfo>
              <DivHermelinda>
                <HermelindaSvg></HermelindaSvg>
              </DivHermelinda>
            </DivPadres>

            <DivTextoAlusivo>
              <p>Aquí abajo el texto alusivo (se omite)</p>
              <P>
                {" "}
                Lorem ipsum sit amet consectetur adipisicing elit. Quibusdam
                harum perferendis velit, cum totam hic doloremque, magni
                expedita.
              </P>
            </DivTextoAlusivo>
            <DivAbras ref={abrasRef}>
              <AbraIzquierda ref={abraIzqRef} />
              <AbraDerecha ref={abraDerRef} />
            </DivAbras>
          </DivTarjeta>
          <DivPlayPause onClick={chichermeToggle}>
            {isAnimationOn ? <BtnPlay /> : <BtnPause />}
          </DivPlayPause>
        </SectionChicherme>
      ) : (
        <Redirect to="itemsNav" />
      )}

      <BtnRegresar regresar={regresar} />
      <Footer />
    </>
  );
}

export default Chicherme;

//////////////   ESTILOS /////////////////////////////////////////

const colorBlue3 = "#7aa1f7";
const colorDarkBlue3 = "#24309a";
const colorDarkBlue2 = "#252e7d";
const colorGray5 = " #6e6e78 ";
const mainColorDarkBlue = "#272839";

const SectionChicherme = styled.section`
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

  span {
    display: none;
  }

  button {
    padding-top: 20px;
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

const DivTarjeta = styled.div`
  position: relative;
  width: 100%;
  padding-top: 8%;
  margin-top: 10%;
  border-radius: 3px;
  align-items: center;
  background-color: rgb(243, 233, 217);
  border: solid 1px rgb(211, 209, 209);
  img {
    width: 70%;
  }
`;

const DivPadres = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const DivArnulfo = styled.div`
  width: 40%;
  svg {
    border-radius: 6px;
  }
`;

const DivHermelinda = styled.div`
  width: 40%;
  svg {
    border-radius: 6px;
  }
`;

const DivTextoAlusivo = styled.div`
  padding: 0 4% 4% 4%;
  border: 1px dashed rgb(225, 223, 198);
  background-color: transparent;
  margin: 7.5% 7.5% 7.5%;
  font-size: 1.3rem; ;
`;
const P = styled.p`
  margin: 10px;
  opacity: 0.1;
`;

const DivAbras = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  top: -0;
  border-radius: 2%;
  top: 0;
  left: 0;
  height: 100%;
`;

const AbraIzquierda = styled.div`
  width: 50%;
  background-color: ${colorDarkBlue2};
  border-left: 2px solid ${mainColorDarkBlue};
  box-shadow: 2px -2px 0px ${colorGray5};
  transform-origin: left 44%;
`;

const AbraDerecha = styled.div`
  width: 50%;
  background-color: ${colorDarkBlue2};
  border-right: 2px solid ${mainColorDarkBlue};
  box-shadow: 2px -2px 0px ${colorGray5};
  transform-origin: right;
`;

const DivPlayPause = styled.div`
  display: flex;
  justify-content: center;
`;
