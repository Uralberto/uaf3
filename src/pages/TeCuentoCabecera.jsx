import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import styled from "styled-components";
import BtnRegresar from "@components/BtnRegresar";
import Header from "@components/Header";
import Footer from "@components/Footer";

const TeCuentoCabecera = () => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  const history = useHistory();

  const regresar = () => {
    history.push("/itemsNav");
  };

  return (
    <section>
      <Header toggleState={toggleState} state={state} />

      <BtnRegresar regresar={regresar}></BtnRegresar>

      {!state ? (
        <DivCabecera>
          <h1>Te cuento</h1>
          <h6>Marzo/2022</h6>
          <p>
            Sigo en un asunto que dí por muerto. En algo que ganó mi atención
            cuando inicié universidad en 1981. Le decíamos “programar”, como
            ahora. Alcanzo a recordar el lenguaje de programación{" "}
            <i>Fortran IV</i> que usaba para resolver, por ejemplo, ecuaciones
            simultáneas de primer grado{" "}
            <Link to="/teCuentoCuerpo">(Leer más)</Link>.<br></br>
          </p>
        </DivCabecera>
      ) : (
        <Redirect to="/itemsNav" />
      )}

      <Footer />
    </section>
  );
};

export default TeCuentoCabecera;

//Estilos

const colorDarkBlue3 = "#24309a";
const colorBlue3 = "#7aa1f7";

const DivCabecera = styled.div`
  margin-bottom: 100px;

  h1 {
    padding-top: 8%;
    font-size: 2.4rem;
    font-weight: 400;
  }

  h6 {
    padding-bottom: 8%;
    font-weight: 300;
  }
  a {
    text-decoration: none;
    font-size: 1.8rem;
    font-weight: 200;
    color: ${colorDarkBlue3};
  }
  a:hover {
    color: ${colorBlue3};
    transition: 0.3s;
  }
`;
