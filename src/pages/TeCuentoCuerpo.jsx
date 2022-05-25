import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import BtnRegresar from "@components/BtnRegresar";
import BtnArriba from "@components/BtnArriba";
import Header from "@components/Header";
import Footer from "@components/Footer";
import miCuaderno1982 from "@imgs/miCuaderno1982.png";
import mesaLampara from "@imgs/mesaLampara.svg";

const TeCuentoCuerpo = () => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState(!state);
  };

  return (
    <>
      <span id="head"></span>
      <Header toggleState={toggleState} state={state} />
      {!state ? (
        <DivCuerpo>
          <Link to="/itemsNav">
            <BtnRegresar />
          </Link>
          <h1>Te cuento</h1>
          <h6>Marzo/2022</h6>
          <p>
            Sigo en un asunto que dí por muerto. En algo que ganó mi atención
            cuando inicié universidad en 1981. Hace un buen rato. Le decíamos
            “programar”, como ahora. Alcanzo a recordar el lenguaje de
            programación <i>Fortran IV</i> que usaba para resolver, por ejemplo,
            ecuaciones simultáneas de primer grado.
          </p>
          <p>
            Un computador <i>Wang</i> enorme estaba detrás de la sala de
            monitores. “Tienen suerte...”, decía la coordinadora de la sala, “a
            los estudiantes antiguos les tocó tarjetas perforadas”. Sigo
            lamentando que sólo fueran dos horas de clase a la semana en apenas
            dos semestres curriculares.{" "}
          </p>
          <DivCuaderno>
            <ImgCuaderno src={miCuaderno1982} alt="mi-cuaderno-1982" />
            <ImgMesa src={mesaLampara} alt="mesa-lampara" />
          </DivCuaderno>
          <PieDeCuaderno>
            Apuntes de clase, 1982. Las calculadoras de bolsillo ya existían; el
            ábaco es para exagerar.
          </PieDeCuaderno>
          <p>
            Por accidente tropecé con Platzi, una plataforma educativa muy
            reconocida en Latinoamérica hoy día. Fue en 2018. Encontré cursos
            que llamaron mi atención al navegar su sitio. Uno en especial:
            Programación básica. Contenía la palabra “programación” y era
            gratis. ¿Por qué no?, me dije.
          </p>
          <p>
            Lo tomé y descubrí que el gusto por programar estaba vivo. A partir
            de allí me sentí con capacidad y energía para seguir aprendiendo sin
            saber con claridad qué iba a encontrar por el camino. Las ganas de
            explorar el universo web y entender qué había detrás no paraban de
            inquietarme. Me frustraba ser un simple usuario o un mero consumidor
            de contenidos. Soslayar las ganas de aprender pudo haber sido un
            acto de traición en mi contra, pienso ahora en retrospectiva.
          </p>
          <p>
            En el proceso de aprendizaje he sentido atracción por la
            arquitectura <i>frontend</i>, vale decir, aquello que vemos en las
            pantallas de nuestros dispositivos, lo que hace interesante la
            experiencia para un usuario web. Se conoce también como desarrollo{" "}
            <i>frontend</i> o desarrollo web. Esta última denominación, no
            obstante, tiene un alcance muy amplio. Cualquiera sea la
            denominación, mi deseo es ser parte de eso.
          </p>
          <p>
            Entrar al mundo <i>frontend</i> ha significado estar dispuesto a
            explorar una cantidad infinita de recursos que la red ofrece:{" "}
            <i>youtubers</i>, sitios web especializados, <i>podcast</i>,{" "}
            <i>blogs</i>, etc. El reto es ganar habilidad para filtrarlos
            procurando llegar a los más idóneos. Pienso que eso se logra con el
            tiempo tras buscar y buscar, una y otra vez.
          </p>
          <p>
            Hay que decir de todos modos que no pasó mucho tiempo para saber de
            algunas fuentes muy reputadas que son el pan de cada día en la vida
            de muchos desarrolladores. Listo algunas para quienes puedan estar
            interesados:
          </p>
          <EnlacesParaDev>
            <MyA href="https://developer.mozilla.org" target="_blank">
              MDN Web Docs
            </MyA>
            <MyA href="https://es.stackoverflow.com" target="_blank">
              Stackoverflow
            </MyA>
            <MyA href=" https://github.com" target="_blank">
              Github
            </MyA>
            <MyA href="https://css-tricks.com" target="_blank">
              Css-tricks
            </MyA>
            <MyA href=" https://codepen.io" target="_blank">
              Codepen.io
            </MyA>
          </EnlacesParaDev>
          <p>
            Son un complemento muy importante de la oferta educativa que tengo
            en Platzi. Esta a su vez se fortalece con los aportes que la
            comunidad de estudiantes ofrece de manera constante. Por cierto, una
            comunidad respetuosa y de espíritu colaborativo. La oportunidad de
            concretar una buena ruta de aprendizaje más el acceso a cursos de
            buena factura, no deja de ser una gran ventaja. Esto mismo puede ser
            lento o difícil cuando se consumen contenidos diversos y de
            múltiples fuentes. Pero está bien hacerlo, de todos modos.
          </p>
          <p>
            Los <i>youtubers</i> &nbsp; cada día ganan más espacio como
            evangelizadores. Si bien hay quienes prefieren contenidos de texto
            para aprender o absolver dudas, ver un video puede motivar,
            inspirar, además de enseñar. Hoy por hoy consumo contenidos como los
            que ofrece
            <MyA
              href="https://www.youtube.com/channel/UCY2ogSxB2beBNBRMKU_dXzA "
              target="_blank"
            >
              {" "}
              Sacha Lifszyc,{" "}
            </MyA>
            <MyA
              href="https://www.youtube.com/results?search_query=coderos"
              target="_blank"
            >
              {" "}
              Coderos,{" "}
            </MyA>
            <MyA href=" https://www.youtube.com/c/midudev  " target="_blank">
              {" "}
              Midudev,{" "}
            </MyA>
            <MyA
              href=" https://www.youtube.com/results?search_query=leonidas+esteban"
              target="_blank"
            >
              {" "}
              Leonidas Esteban,{" "}
            </MyA>
            <MyA
              href=" https://www.youtube.com/results?search_query=falcon+master"
              target="_blank"
            >
              {" "}
              FalconMasters,{" "}
            </MyA>
            <MyA href=" https://www.youtube.com/user/Bluuweb " target="_blank">
              {" "}
              Bluuweb,{" "}
            </MyA>
            <MyA
              href="https://www.youtube.com/channel/UCw05fUBPwmpu-ehXFMqfdMw"
              target="_blank"
            >
              {" "}
              Oscar Barajas,{" "}
            </MyA>
            <MyA
              href="https://www.youtube.com/user/codigofacilito"
              target="_blank"
            >
              {" "}
              CódigoFacilito,{" "}
            </MyA>
            <MyA
              href=" https://www.youtube.com/channel/UCXR7VjA26PcHP3vb6F2X3VQ"
              target="_blank"
            >
              {" "}
              Jonmircha,{" "}
            </MyA>
            <MyA
              href=" https://www.youtube.com/channel/UC4FHiPgS1KXkUMx3dxBUtPg"
              target="_blank"
            >
              {" "}
              HolaMundo,{" "}
            </MyA>{" "}
            por mencionar algunos.{" "}
          </p>
          <p>
            Los contenidos en inglés son extremadamente abundantes. Saber el
            idioma es fundamental para crecer. <i>Google</i> ayuda mucho con la
            traducción de textos; la subtitulación de videos también ayuda. De
            todos modos hay que hacer los esfuerzos necesarios hasta conversar
            de manera fluida. Estoy en eso, no al ritmo que quisiera, pero no
            abandono el reto.{" "}
          </p>
          <p>
            Con el inglés aprendido me lanzo con más ánimo al consumo de
            contenidos en ese idioma. Siento que me va bien siguiendo{" "}
            <i>youtubers</i> que abordan temas que despiertan mi curiosidad:
            gráficos vectoriales escalables (svg) y animaciones. He descubierto
            cosas interesantes sobre el tema con
            <MyA
              href="https://www.youtube.com/watch?v=Lg13omZ8EwU"
              target="_blank"
            >
              {" "}
              DesignCourse,{" "}
            </MyA>
            <MyA
              href="https://www.youtube.com/results?search_query=ed+dev"
              target="_blank"
            >
              {" "}
              Ed Dev{" "}
            </MyA>
            y
            <MyA
              href="https://www.youtube.com/c/keyframers/videos"
              target="_blank"
            >
              {" "}
              KeyFramers.
            </MyA>
          </p>
          <p>
            Este es mi tercer sitio web. Con el quiero reflejar buena parte del
            conocimiento ganado como autodidacta. Mostrar habilidades en áreas
            de mi interés y en las que deseo profundizar. Pretendo que funcione
            para delinear un perfil de lo soy y lo que podría hacer en la
            industria digital.{" "}
          </p>{" "}
          <p>
            Está construido totalmente con la librería <i>react</i> y tiene
            mucha similitud con mi sitio web anterior, es decir, el segundo, en
            cuyo desarrollo no utilicé recursos externos (<i>frameworks</i>,
            librerías o paquetes) a fin de probar qué tanto podía lograr con{" "}
            <i>JavaScript </i>puro (<i>vanilla</i>). Te invito a visitarlo en el
            siguiente enlace:
            <MyA href=" https://uralberto.github.io" target="_blank">
              <i> uralberto.github.io.</i>
            </MyA>{" "}
          </p>
          <p>
            <i>React</i> permite una mejor organización del código y hace mas
            secilla la tarea de ajustar y/o actualizar el sitio amen de la
            ganancia en rendimiento (<i>performance</i>). Permite también el uso{" "}
            <i>Styles Components</i>, herramienta que neutraliza la colisión de
            estilos entre diferentes piezas de código. Si comparo la estructura
            del código de este mi tercer sitio web con su predecesor, la
            diferencia es abismal. Me quedo con <i>React</i>.
          </p>
          <p>
            Con mi primer sitio web aprendí muchas cosas. Sentí gran
            satisfacción cuando subió a la red en 2019. Lo dejo aquí
            pretendiendo dejar trazabilidad de mi evolución en <i>frontend</i>.
            Agradecido de antemano si te animas a visitarlo:
            <MyA href=" https://uralberto.github.io/uaf1/" target="_blank">
              <i> uralberto.github.io/uaf1.</i>
            </MyA>{" "}
          </p>
          <p>
            Si deseas explorar aún más sobre este nuevo sitio web te propongo
            visitar{" "}
            <MyA href="https://github.com/Uralberto/uaf3" target="_blank">
              <i>github.com/Uralberto/uaf3</i>
            </MyA>
          </p>
          <FlechaArriba href="#head">
            <BtnArriba />
          </FlechaArriba>
        </DivCuerpo>
      ) : (
        <Redirect to="/itemsNav" />
      )}

      <Footer />
    </>
  );
};

export default TeCuentoCuerpo;

// ESTILOS
const colorDarkBlue3 = "#24309a";
const colorBlue3 = "#7aa1f7";

const DivCuerpo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;

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
  }
`;

const MyA = styled.a`
  color: ${colorDarkBlue3};
  text-decoration: none;
  &:hover {
    color: ${colorBlue3};
    transition: 0.3s;
  }
`;

const DivCuaderno = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  padding-top: 200px;
  padding-bottom: 10px;
`;

const ImgCuaderno = styled.img`
  display: block;
  width: 140px;
  position: absolute;
  top: 80px;
  left: 8px;
  z-index: 100;
`;

const ImgMesa = styled.img`
  width: 200px;
  position: absolute;
  z-index: 200;
`;

const PieDeCuaderno = styled.span`
  width: 100%;
  display: block;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 1.4rem;
  padding-bottom: 10px;
`;

const EnlacesParaDev = styled.p`
  display: flex;
  flex-direction: column;
`;

const FlechaArriba = styled.a`
  position: sticky;
  bottom: 50px;
`;
