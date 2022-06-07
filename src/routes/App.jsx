import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import Home from "@pages/Home";
import ItemsNav from "@pages/ItemsNav";
import TeCuentoCabecera from "@pages/TeCuentoCabecera";
import TeCuentoCuerpo from "@pages/TeCuentoCuerpo";
import ItemsExplora from "@pages/ItemsExplora";
import Yo from "@pages/Yo";
import VillaLasMarias from "@pages/VillaLasMarias";
import Arnulfo from "@pages/Arnulfo";
import Hermelinda from "@pages/Hermelinda";
import Chicherme from "@pages/Chicherme";
import FraccionarAnimar from "@pages/FraccionarAnimar";
import Cocuy from "@pages/Cocuy";
import ImagenVectorialUno from "@pages/ImagenVectorialUno";
import ImagenVectorialDos from "@pages/ImagenVectorialDos";
import NotFound from "@pages/NotFound";
import Header from "../components/Header";

// import "@styles/global.css";

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}  >
        <EstilosGlobales />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/itemsNav" component={ItemsNav} />
          <Route exact path="/explora" component={ItemsExplora} />
          <Route exact path="/villaLasMarias" component={VillaLasMarias} />
          <Route exact path="/teCuentoCabecera" component={TeCuentoCabecera} />
          <Route exact path="/teCuentoCuerpo" component={TeCuentoCuerpo} />
          <Route exact path="/yo" component={Yo} />
          <Route exact path="/arnulfo" component={Arnulfo} />
          <Route exact path="/hermelinda" component={Hermelinda} />
          <Route exact path="/chicherme" component={Chicherme} />
          <Route exact path="/fraccionarAnimar" component={FraccionarAnimar} />
          <Route exact path="/cocuy" component={Cocuy} />
          <Route exact path="/animacionesUno" component={ImagenVectorialUno} />
          <Route exact path="/animacionesDos" component={ImagenVectorialDos} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;

// ESTILOS

const colorGray1 = "#f6f3f3";
const colorBg = "#e7e4e7";
const mainColorDarkBlue = "#272839";

const EstilosGlobales = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    display: flex;
    justify-content: center;
    font-size: 62.5%;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
    background-color: ${colorGray1}; 
    color: ${mainColorDarkBlue}
    

}

body{
    min-width: 320px;
    width: 100%;
    max-width: 800px;
    min-height: 100vh;
    font-size: 1.6rem;
    padding: 15px;
    background-color: ${colorBg};
    position: relative;
   
    @media (min-width:600px){
        padding: 35px
} 

@media (min-width:700px){
        padding: 40px
} 

}


`;
