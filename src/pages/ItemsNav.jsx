import React, { useState, useRef, useEffect, forwardRef } from "react";
import { Link, Redirect } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import persianaVertical from "@imgs/persianaVertical.svg";

import Item from "@components/Item";
import Header from "../components/Header";
import Footer from "@components/Footer";

const ItemsNav = () => {
  const [state, setState] = useState(false);

  const items = [
    {
      id: 1,
      nombre: "Te cuento",
      ruta: "teCuentoCabecera",
    },
    {
      id: 2,
      nombre: "Explora",
      ruta: "explora",
    },
    {
      id: 3,
      nombre: "Yo",
      ruta: "yo",
    },
  ];

  const toggleState = () => {
    setState(!state);
  };
  const ulRef = useRef();

  useEffect(() => {
    let time = 0;

    const liChildren = ulRef.current.children;
    for (let i = 0; i <= liChildren.length - 1; i++) {
      setTimeout(() => {
        liChildren[i].animate([{ visibility: "visible" }], {
          duration: 333,
          fill: "forwards",
          easing: "ease-out",
        });
      }, time);

      time = time + 333;
    }
  }, []);

  return (
    <Div>
      <Header toggleState={toggleState} state={state} />

      {!state ? (
        <Nav>
          <UlItemsNav ref={ulRef}>
            {items.map((item) => (
              <li key={`itemsNav${item.id}`}>
                <Link to={`/${item.ruta}`}>
                  <Item nombreItem={item.nombre} />
                </Link>
              </li>
            ))}
          </UlItemsNav>
        </Nav>
      ) : (
        <Redirect to="/" />
      )}

      <Footer></Footer>
    </Div>
  );
};

export default ItemsNav;

//////////////   ESTILOS  ////////////////////////////////////////////

const animarBgImg = keyframes`
 
  0%{
    background-image: url("${persianaVertical}");
    background-repeat: repeat-x;
    background-size: 0  100% ;
    background-position: center center; 
  } 



  100% {
    background-image: url("${persianaVertical}" )  ;
    background-repeat: repeat;
    background-size: 5px 100% ;
    background-position: center center

  }


`;

const mainColorDarkBlue = "#272839";
const colorBlue3 = "#7aa1f7";

const Div = styled.div`
  display: grid;
  grid-template: 10vh 65vh 18vh / 1fr;
  position: relative;
`;

const Nav = styled.nav`
  animation: ${animarBgImg} 2s ease-in-out forwards;
  margin-bottom: 30px;
`;

const UlItemsNav = styled.ul`
  padding-top: 15vh;
  padding-bottom: 10vh;
  height: auto;
  width: 80%;
  margin: 0 10%;
  list-style: none;
  text-decoration: none;
  font-weight: 300;
  li {
    visibility: hidden;
  }
  a {
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 300;
    color: ${mainColorDarkBlue};
    &:hover {
      color: ${colorBlue3};
      transition: 0.3s;
    }
  }
`;
