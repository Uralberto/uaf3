import React, { useState } from "react";
import { useHistory, Redirect } from "react-router-dom";
import styled from "styled-components";
import Header from "@components/Header";
import Footer from "@components/Footer";
import VlmSvg from "@components/VlmSvg";
import vlm2018 from "@imgs/vlm2018.png";
import isometricaVlm from "@imgs/isometricaVlm.png";
import BtnRegresar from "@components/BtnRegresar";

const VillaLasMarias = () => {
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
      <SectionVillaLasMarias>
        {!state ? (
          <div>
            <h1>Villa Las Marías</h1>
            <h6>Marzo/2022</h6>
            <p>
              En 1999 adquirimos en familia un pequeño lote rural pensando en un
              espacio de encuentro. Luego nos dimos a la tarea de explorar ideas
              para financiarlo. Solo hasta el 2005 vimos la opción de iniciar su
              construcción.
            </p>
            <p>
              La primera imagen abajo es la proyección isométrica del proyecto,
              hecha a mano. Sirvió de base para decidir qué construir.
            </p>
            <p>
              En 2019 celebramos 20 años del nacimiento de la idea. Pensé en la
              animación de la proyección isométrica para la ocasión. Dibujé una
              imagen vectorial de la misma para manipularala con animaciones
              declaradas con código Javascript, solamente. Pulsa el botón para
              activarlas.
            </p>

            <img src={isometricaVlm} alt="vlm isometrica" />
            <h4>Proyección isométrica</h4>
            <VlmSvg />
            <ImgVlm src={vlm2018} alt="foto vlm 2018" />
            <h4 className="h4">
              Villa Las Marías, espacio de encuentro, Ocaña (N. de S.). 2018.
            </h4>
          </div>
        ) : (
          <Redirect to="/itemsNav" />
        )}
      </SectionVillaLasMarias>
      <BtnRegresar regresar={regresar} />
      <Footer />
    </>
  );
};

export default VillaLasMarias;

//ESTILOS

const SectionVillaLasMarias = styled.section`
  width: 100%;

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
    padding: 0 0 15px 0;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 300;
    padding: 0px 0 18px 0;
    @media (min-width: 600px) {
      font-size: 1.4rem;
    }
  }

  img {
    width: 100%;
  }
`;

const ImgVlm = styled.img`
  padding-top: 40px;
`;
