import React, { useState, useRef, useEffect } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import styled from "styled-components";
import Header from "@components/Header";
import SubItem from "@components/SubItem";
import Footer from "@components/Footer";
import BtnRegresar from "@components/BtnRegresar";
import LogoFeliz from "@components/LogoFeliz";

const ItemsExplora = (props) => {
  const [state, setState] = useState(false);

  const subItems = [
    {
      id: 1,
      nombre: "Villa Las Marias",
      ruta: "villaLasMarias",
    },
    {
      id: 2,
      nombre: "Arnulfo",
      ruta: "arnulfo",
    },

    {
      id: 3,
      nombre: "Hermelinda",
      ruta: "hermelinda",
    },

    {
      id: 4,
      nombre: "Chicherme",
      ruta: "chicherme",
    },

    {
      id: 5,
      nombre: "Fraccionar-animar",
      ruta: "fraccionarAnimar",
    },

    {
      id: 6,
      nombre: "Cocuy",
      ruta: "cocuy",
    },

    {
      id: 7,
      nombre: "Animaciones uno",
      ruta: "animacionesUno",
    },

    {
      id: 8,
      nombre: "Animaciones dos",
      ruta: "animacionesDos",
    },
  ];

  const toggleState = () => {
    setState(!state);
  };
  const history = useHistory();

  const regresar = () => {
    history.push("/itemsNav");
  };

  const ulRef = useRef();
  useEffect(() => {
    let time = 0;

    const liChildren = ulRef.current.children;
    for (let i = 0; i <= liChildren.length - 1; i++) {
      setTimeout(() => {
        liChildren[i].animate([{ visibility: "visible" }], {
          duration: 100,
          fill: "forwards",
          easing: "ease-out",
        });
      }, time);

      time = time + 100;
    }
  }, []);

  return (
    <>
      <Header toggleState={toggleState} state={state} />
      <DivBtnRegresar>
        <BtnRegresar regresar={regresar} />
      </DivBtnRegresar>

      {!state ? (
        <div>
          <DivCabecera>
            <LogoFeliz />

            <h2> Explora</h2>
          </DivCabecera>
          <nav>
            <UlItemsExplora ref={ulRef}>
              {subItems.map((subItem) => (
                <li key={`itemsExplora${subItem.id}`}>
                  <Link to={`/${subItem.ruta}`}>
                    <SubItem nombreSubItem={subItem.nombre} />
                  </Link>
                </li>
              ))}
            </UlItemsExplora>
          </nav>
        </div>
      ) : (
        <Redirect to="/itemsNav" />
      )}

      <Footer />
    </>
  );
};

export default ItemsExplora;

//ESTILOS

const mainColorDarkBlue = "#272839";
const colorBlue3 = "#7aa1f7";

const DivBtnRegresar = styled.div`
  padding-left: 15px;
`;

const DivCabecera = styled.div`
  display: flex;
  align-items: center;
  padding-left: 4%;
  padding-top: 15px;
  h2 {
    margin-left: 15px;
    width: auto;
    font-weight: 300;
  }
`;

const UlItemsExplora = styled.ul`
  padding-top: 15px;
  height: 60vh;
  width: 100%;

  li {
    list-style: none;
    visibility: hidden;
  }

  a {
    text-decoration: none;
    font-size: 1.4rem;
    font-weight: 300;
    color: ${mainColorDarkBlue};
    &:hover {
      color: ${colorBlue3};
      transition: 0.3s;
    }

    @media (min-width: 600px) {
      font-size: 1.6rem;
      font-weight: 300;
    }
  }
  img {
    @media (min-width: 600px) {
      width: 100%;
    }
  }
`;
