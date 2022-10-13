import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoUaf from "@imgs/logoUaf.svg";
import BtnRegresar from "@components/BtnRegresar";
import diploma from "@logos/diploma.svg";
import html from "@logos/html5.svg";
import css3 from "@logos/css3.svg";
import sass from "@logos/sass.svg";
import javascript from "@logos/javascript.svg";
import react from "@logos/react.svg";
import git from "@logos/git.svg";
import github from "@logos/github.svg";
import vue from "@logos/vue.svg";
import npm from "@logos/npm.svg";
import deTodo from "@logos/deTodo.svg";
import adobeXd from "@logos/adobeXd.svg";
import twitter from "@icons/twitter.svg";
import linkedin from "@icons/linkedin.svg";
import linkedinAzul from "@icons/linkedinAzul.svg";
import githubBlanco from "@icons/githubBlanco.svg";
import twitterAzul from "@icons/twitterAzul.svg";

const Yo = () => {
  return (
    <>
      <SectionYo>
        <Link to="/itemsNav">
          <BtnRegresar />
        </Link>
        <DivYoDetalle>
          <DivLogo>
            <Link to="/itemsNav">
              {" "}
              <img src={logoUaf} alt="logo uaf" />{" "}
            </Link>
          </DivLogo>

          <DivCv>
            <DivNombreProfesion>
              <h2>Uriel Alberto Arévalo Franco</h2>
              <H2DevFrontend>Desarrollador frontend</H2DevFrontend>
              <h2>Ingeniero civil</h2>
            </DivNombreProfesion>

            <div className="cv__informacion-detallada">
              <DivObjetivoProfesional>
                <h3>Objetivo profesional</h3>
                <p>
                  Aportar conocimiento como
                  desarrollador <i>frontend</i> en espacios de trabajo 
                  donde el respeto y la empatía sean importantes como cultura organizacional. Quiero
                  afianzar el conocimiento ganado como autodidacta y persistir en
                  el aprendizaje de nuevo conocimiento para crecer de manera
                  sostenida en el amplio universo <i>frontend</i>.
                </p>
              </DivObjetivoProfesional>

              <div>
                <h3>Experiencia profesional</h3>
              </div>
              <DivExpProf>
                <h4>Experiencia como frontend autodidacta (2018-2022)</h4>
                <p>
                  A partir de la idea de ser <i>frontend</i> {""}
                  autodidacta, pensada en 2018, los proyectos emprendidos hasta
                  ahora son de carácter personal y enfocados al ámbito familiar,
                  especialmente. Encontré allí una motivación importante para
                  llevarlos adelante. Este sitio web se nutre con ellos y el
                  ánimo es incorporar más proyectos a futuro
                  <Link to="/explora">(Visítalos aquí). </Link>
                </p>
                <p>
                  Está concebido para que sea escalable aprovechando las
                  ventajas que ofrece <i>React</i>, librería de código abierto
                  que permite una organización modular del código, facilita su
                  lectura, su actualización, su mantenimiento, amen de la
                  ganancia en rendimiento.
                </p>
              </DivExpProf>

              <DivExpProf>
                <h4>Ingeniero civil independiente (1999-2020) </h4>
                <p>
                  {" "}
                  Proveedor de servicios relacionados con la profesión. No menos
                  de 50 proyectos de diversa tipología, públicos y privados,
                  ejecutados en los últimos 20 años. Destaco la construcción de
                  edificaciones nuevas, el mejoramiento y/o mantenimiento de
                  edificaciones, obras de urbanismo, dirección de obra a
                  terceros e interventorías.
                </p>


                
              </DivExpProf>

              {/* <DivExpProf>
                <h4>Experiencia relevante anterior a 1999</h4>
                <DivExpDescripcion className="cv__experiencia-descripcion cv__experiencia-anterior-1999">
                  <DivExpDescripcionItem>
                    <Vineta color={colorNaranja}></Vineta>
                    <p>
                      <b>
                        Instituto Colombiano de la Reforma Agraria (Incora).
                      </b>{" "}
                      Funciones de planeación y supervisión de proyectos de
                      infraestructura social(1989-1992).
                    </p>
                  </DivExpDescripcionItem>
                  <DivExpDescripcionItem>
                    <Vineta color={mainColorBlue}></Vineta>
                    <p className="experiencia-instituciones">
                      <b>
                        Consejo Regional de Planificación Económica y Social de
                        la Orinoquia.
                      </b>{" "}
                      Funciones de promoción de la política nacional para el
                      sector agua potable y saneamiento básico; apoyo a
                      entidades territoriales para impulsar los Bancos de
                      Proyectos de Inversión Pública (1992-1995).
                    </p>
                  </DivExpDescripcionItem>
                  <DivExpDescripcionItem>
                    <Vineta color={colorNaranja}></Vineta>
                    <p className="experiencia-instituciones">
                      <b>Gobernación de Arauca.</b> Coordinación de la
                      estructuración técnica y legal del Banco de Proyectos de
                      Inversión Pública Departamental y acompañamiento a los
                      municipios de la región en el mismo propósito (1995-1997).
                    </p>
                  </DivExpDescripcionItem>
                </DivExpDescripcion>
              </DivExpProf> */}

              <DivHistoriaAcademica>
                <h3>Historia académica</h3>
                <DivHistoriaAcademicaInstituciones>
                  <DivHistoriaAcademicaInstitucion>
                    <Vineta color={mainColorBlue}></Vineta>
                    <h4>
                      Universidad Santo Tomas, sede Bogotá. <br />
                      <span>Ingeniero civil (1987).</span>
                    </h4>
                  </DivHistoriaAcademicaInstitucion>
                  <DivHistoriaAcademicaInstitucion>
                    <Vineta color={colorNaranja} />
                    <DivContenedorPlatzi>
                      <h4>
                        Platzi, platarforma de educación online (Agosto/2018 a
                        la fecha)
                      </h4>
                      <DivContenedorPlatziSubtitulo>
                        <DivLogosDev>
                          <img src={diploma} alt="logo diploma" />
                        </DivLogosDev>
                        <h5>Cursos aprobados</h5>
                      </DivContenedorPlatziSubtitulo>
                      <DivContenedorCursos>
                        <DivCursosTecnologia>
                          <DivLogosDev>
                            <img className="html" src={html} alt="logo html5" />
                            <img src={css3} />
                            <img src={sass} />
                          </DivLogosDev>
                          <Cursos>
                            <Curso>Html y Css, </Curso>
                            <Curso>Curso práctico de Html y Css, </Curso>
                            <Curso>Desarrollo web online, </Curso>
                            <Curso>Responsive Design, </Curso>
                            <Curso>Css Grid Layout, </Curso>
                            <Curso>Animaciones para la web, </Curso>
                            <Curso>Responsive Design-mobil First, </Curso>
                            <Curso>Curso definitivo de Html y Css, </Curso>
                            <Curso>Sass.</Curso>
                          </Cursos>
                        </DivCursosTecnologia>

                        <DivCursosTecnologia>
                          <DivLogosDev>
                            <img src={javascript} alt="logo javaScript" />
                          </DivLogosDev>
                          <Cursos>
                            <Curso>Programación básica, </Curso>
                            <Curso>Báscio de Javascript, </Curso>
                            <Curso>Fundamentos de Javascript, </Curso>
                            <Curso>Asincronismo con javascript, </Curso>
                            <Curso>Closure y Scope en Javascript, </Curso>
                            <Curso>Profesional de Javascript, </Curso>
                            <Curso>Debugging con Chrome Devtools, </Curso>
                            <Curso>Ecmascript 6+, </Curso>
                            <Curso>
                              JavaScript Engine (V8) y el Navegador{" "}
                            </Curso>
                            <Curso>Manipulación del DOM, </Curso>
                            <Curso>Closures y Scope en JavaScript, </Curso>
                            <Curso>
                              Single Page Application con JavaScript Vanilla.
                            </Curso>
                          </Cursos>
                        </DivCursosTecnologia>

                        <DivCursosTecnologia>
                          <DivLogosDev>
                            <img src={react} alt="logo react" />
                          </DivLogosDev>
                          <Cursos>
                            <Curso>React.JS (junio/2021), </Curso>
                            <Curso>
                              React JS Escuela de JavaScript(agosto/2021),{" "}
                            </Curso>
                            <Curso>Práctico de React.js, </Curso>
                            <Curso>React Router y Redux. </Curso>
                          </Cursos>
                        </DivCursosTecnologia>

                        <DivCursosTecnologia>
                          <DivLogosDev>
                            <img src={git} alt="logo git" />
                            <img src={github} alt="logo github" />
                          </DivLogosDev>
                          <Cursos>
                            <Curso>
                              Curso profesional de Git y GitHub (2018),{" "}
                            </Curso>
                            <Curso>
                              Curso profesional de Git y GitHub (2019).
                            </Curso>
                          </Cursos>
                        </DivCursosTecnologia>

                        <DivCursosTecnologia>
                          <DivLogosDev>
                            <img src={vue} alt="logo vue" />
                          </DivLogosDev>
                          <Cursos>
                            {" "}
                            <Curso>Básico de Vue.js</Curso>
                          </Cursos>
                        </DivCursosTecnologia>

                        <DivCursosTecnologia>
                          <DivLogosDev>
                            <img src={npm} alt="logo npm" />
                          </DivLogosDev>
                          <Cursos>
                            <Curso>
                              Gestion de dependencias y paquetes con NPM
                            </Curso>
                          </Cursos>
                        </DivCursosTecnologia>

                        <DivCursosTecnologia>
                          <DivLogosDev>
                            <img src={adobeXd} alt="logo AdobeXD" />
                          </DivLogosDev>
                          <Cursos>
                            <Curso>AdobeXD, </Curso>
                            <Curso>Sistema de Diseño</Curso>
                          </Cursos>
                        </DivCursosTecnologia>

                        <DivCursosTecnologia>
                          <DivLogosDev>
                            <img src={deTodo} alt="logo de todo" />
                          </DivLogosDev>
                          <Cursos>
                            <Curso>Marca personal, </Curso>
                            <Curso>Introducción al marketing digital, </Curso>

                            <Curso>Creación de portafolio y cv, </Curso>

                            <Curso>
                              Prework: buenas prácticas y entorno de desarrollo,{" "}
                            </Curso>
                            <Curso>Frontend Developer, </Curso>
                            <Curso>
                              Fundamentos de ingeniería de software,{" "}
                            </Curso>
                            <Curso>Trabajo remoto o teletrabajo, </Curso>
                            <Curso>
                              Introducción a la web: Historia y funcionamiento
                              de la internet.
                            </Curso>
                          </Cursos>
                        </DivCursosTecnologia>
                      </DivContenedorCursos>
                    </DivContenedorPlatzi>
                  </DivHistoriaAcademicaInstitucion>
                </DivHistoriaAcademicaInstituciones>
              </DivHistoriaAcademica>

              <DivInfoAdicional>
                <h3>Información adicional</h3>

                <DivInfoAdicionalDetalle>
                  <DivInfoAdicionalTema>
                    <Vineta color={mainColorBlue} />
                    <div>
                      <h4>Idiomas:</h4>
                      <span>Inglés (lectura, nivel medio)</span>
                    </div>
                  </DivInfoAdicionalTema>

                  <DivInfoAdicionalTema>
                    <Vineta color={colorNaranja} />
                    <div>
                      <h4>Hobbies:</h4>
                      <span>
                        Contenidos de opinión política. <br />{" "}
                      </span>
                      <p>
                        Podcast. He aquí algunos de los mas escuchados:
                        <a
                          href="https://open.spotify.com/show/66phcUoQsM3URyzhFDz9ig"
                          target="_blank"
                        >
                          Platzi,
                        </a>
                        <a
                          href="https://www.danielprimo.io/podcast"
                          target="_blank"
                        >
                          Web reactiva,
                        </a>
                        <a
                          href="https://open.spotify.com/show/1B8g8K40hS6I56m0i6pq8i"
                          target="_blank"
                        >
                          Coderos,
                        </a>{" "}
                        relacionados con tecnologías web;
                        <a href="https://radioambulante.org/ " target="_blank">
                          Radio Ambulante,
                        </a>
                        <a href="https://www.ted.com/" target="_blank">
                          Ted,
                        </a>
                        <a
                          href="https://www.ivoox.com/podcast-podcast-contrahistoria_sq_f1298566_1.html"
                          target="_blank"
                        >
                          La Contra Historia,
                        </a>
                        <a
                          href="https://www.cosasdeinternet.fm/sobre-nosotros"
                          target="_blank"
                        >
                          Cosas de Internet,
                        </a>
                        <a href="https://elhilo.audio/" target="_blank">
                          El Hilo,
                        </a>{" "}
                        relacionados con contenidos de tipo variado.
                      </p>
                    </div>
                  </DivInfoAdicionalTema>

                  <DivInfoAdicionalTema>
                    <Vineta color={mainColorBlue} />
                    <div>
                      <h4>Experiencia colaborativa:</h4>
                      <p>
                        Contribuí con escritos para un portal web con énfasis en
                        La Playa de Belén, mi municipio de origen. {""} Ir a
                        <a
                          href="http://www.guidoperezarevalo.org/PERFILES/URIEL_ALBERTO_AREVALO/PORTADA.html"
                          target="_blank"
                        >
                          http://www.guidoperezarevalo.org/
                        </a>
                      </p>
                    </div>
                  </DivInfoAdicionalTema>
                </DivInfoAdicionalDetalle>

                <DivAreasInteres>
                  <h3>Areas de interés</h3>

                  <div>
                    <Vineta color={colorNaranja} />
                    <p>
                      Imágenes vectoriales (SVG), Animaciones web, diseño
                      gráfico, fotografía naturalista, salsa clásica del Caribe,
                      sonidos alternativos latinoamericanos.
                    </p>
                  </div>
                </DivAreasInteres>

                <DivContacto>
                  <h3>Contacto</h3>
                  <DivOpcionesContacto>
                    <Vineta color={mainColorBlue} />
                    <DivContactoRedes>
                      <a href="https://twitter.com/Uralberto" target="_blank">
                        <img src={twitter} alt="logo Twitter" />
                        <span>@Uralberto</span>
                      </a>

                      <a href="https://github.com/Uralberto" target="_blank">
                        <img src={github} alt="logo gitHub" />
                        <span>Uralberto</span>
                      </a>

                      <a
                        href="https://www.linkedin.com/in/uriel-alberto-arevalo-franco-7258ab13/"
                        target="_blank"
                      >
                        <img src={linkedin} alt="logo Linkedin" />{" "}
                        <span>Linkedin</span>
                      </a>
                    </DivContactoRedes>
                  </DivOpcionesContacto>
                </DivContacto>
              </DivInfoAdicional>
            </div>
          </DivCv>

          <DivIconos>
            <div>
              <a
                className="twitter"
                href="https://twitter.com/Uralberto"
                target="_blank"
              >
                <img src={twitterAzul} alt="logo Twitter" />
              </a>
              <a
                className="github"
                href="https://github.com/Uralberto"
                target="_blank"
              >
                <img src={githubBlanco} alt="logo Twitter" />
              </a>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/uriel-alberto-arevalo-franco-7258ab13/"
                target="_blank"
              >
                <img src={linkedinAzul} alt="logo Twitter" />
              </a>
            </div>
          </DivIconos>

          <DivNone>{""}</DivNone>
        </DivYoDetalle>
      </SectionYo>
    </>
  );
};

export default Yo;

// ESTILOS

const mainColorDarkBlue = "#272839";
const colorBlue3 = "#7aa1f7";
const mainColorBlue = "#2337f1";
const colorNaranja = "#f7cd52";
const mainColorBlueTransparent = "#2338f123";
const colorDarkBlue3 = "#24309a";

const SectionYo = styled.section`
  font-weight: 300;
  color: ${mainColorDarkBlue};

  p {
    font-size: 1.3rem;
    @media (min-width: 600px) {
      font-size: 1.6rem;
    }
  }

  a {
    text-decoration: none;
    color: ${colorDarkBlue3};
    padding-left: 5px;
  }
  a:hover {
    color: ${colorBlue3};
    transition: 0.3s;
  }

  h3 {
    padding: 15px 0 5px;
    border-bottom: 1px solid ${mainColorBlue};
    font-size: 1.6rem;
    font-weight: 400;
    @media (min-width: 600px) {
      font-size: 1.8rem;
    }
  }
  h4 {
    padding: 10px 0 0;
    font-weight: 400;
    font-size: 1.4rem;
    @media (min-width: 600px) {
      font-size: 1.7rem;
    }
  }
`;

const DivYoDetalle = styled.div`
  display: grid;
  grid-template-rows: 85px 1fr;
  grid-template-columns: 1fr 15px 50px;

  grid-template-areas:
    "cv none logo"
    "cv none iconos";
  @media (min-width: 600px) {
    grid-template-columns: 1fr 15px 60px;
  }
`;

const DivLogo = styled.div`
  display: flex;
  align-items: center;
  width: 50px;
  grid-area: logo;
  background-color: ${colorNaranja};
  a {
    padding-left: 0;
  }
  img {
    margin-left: 20%;
    width: 60%;
  }

  @media (min-width: 600px) {
    width: 60px;
  }
`;

const DivCv = styled.div`
  padding-top: 2px;
  grid-area: cv;
  padding-bottom: 15px;
  border-bottom: 1px solid ${mainColorBlue};
`;

const DivNombreProfesion = styled.div`
  font-weight: 400;
  border-top: 1px solid ${mainColorBlue};
  border-bottom: 1px solid ${mainColorBlue};
  padding-top: 8px;
  padding-bottom: 8px;
  h2 {
    font-size: 1.7rem;
    font-weight: 400;
    @media (min-width: 600px) {
      font-size: 2rem;
    }
  }
`;

const H2DevFrontend = styled.h2`
  color: ${mainColorBlue};
`;

const DivObjetivoProfesional = styled.div`
  h3 {
    padding: 15px 0 5px;
    font-weight: 400;
  }
  p {
    padding: 5px 0 0px 0px;
  }
`;

const DivExpProf = styled.div`
  h4 {
    padding: 10px 0 0;
    font-weight: 400;
  }
  p {
    padding: 5px 0 0px 0px;
  }
`;

const DivExpDescripcion = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px 0 0px 0px;
`;

const DivExpDescripcionItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  p {
    width: 97%;
    padding: 2px 0 2px 10px;
  }
  b {
    font-weight: 400;
  }
`;

const Vineta = styled.span`
  width: 3%;
  height: auto;
  margin: 4px 0 5px 0px;
  background-color: ${({ color }) => color};
  opacity: 0.3;
`;

const DivHistoriaAcademica = styled.div`
  h4 {
    width: 100%;
    font-weight: 400;
    padding: 3px 0 3px 10px;
  }
`;

const DivHistoriaAcademicaInstituciones = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DivHistoriaAcademicaInstitucion = styled.div`
  display: flex;
  padding: 10px 0 0;
  width: 100%;
  height: auto;
  span {
    font-size: 1.1rem;

    @media (min-width: 600px) {
      font-size: 1.3rem;
    }
  }
`;

const DivContenedorPlatzi = styled.div`
  width: 100%;
`;

const DivContenedorPlatziSubtitulo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 10px;
  padding: 5px 0 10px 0;
  margin-left: 5px;
  border-top: 1px solid ${mainColorBlueTransparent};
  border-bottom: 1px solid ${mainColorBlueTransparent};

  img {
    margin-left: 3px;
  }
  h5 {
    font-size: 1.4rem;
    font-weight: 400;
    position: relative;
    top: 4px;
    margin-left: -8px;
  }
`;

const DivLogosDev = styled.div`
  width: 40px;
  height: auto;
  margin-left: 8px;
  margin-right: 5px;
  img {
    width: 50%;
    position: relative;
    top: 2px;
  }
`;

const DivContenedorCursos = styled.div`
  width: 100%;
`;

const DivCursosTecnologia = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0 5px 0;
  margin-left: 5px;

  border-bottom: 1px solid ${mainColorBlueTransparent};
`;

const Cursos = styled.div`
  width: 100%;
`;

const Curso = styled.span`
  width: 100%;
  margin-right: 3px;
  line-height: 10px;
`;

const DivInfoAdicional = styled.div``;

const DivInfoAdicionalDetalle = styled.div`
  padding-top: 6px;
`;

const DivInfoAdicionalTema = styled.div`
  display: flex;

  div {
    width: 97%;
    padding: 3px 0 3px 5px;
    padding-left: 10px;
  }
  h4 {
    padding-top: 0;
  }
`;

const DivAreasInteres = styled.div`
  div {
    display: flex;
    padding-top: 5px;
  }
  p {
    width: 97%;
    padding: 3px 0 3px 10px;
  }
`;

const DivContacto = styled.div``;

const DivOpcionesContacto = styled.div`
  display: flex;
  padding: 6px 0 3px 5px;
  div {
    width: 97%;
    padding: 1.5px 0 1.5px 2px;
  }
`;

const DivContactoRedes = styled.div`
  a {
    display: flex;
    align-items: center;
    width: 8%;
    padding: 2px 0 5px 5px;
    img {
      width: 100%;
      margin-right: 5px;
      @media (min-width: 600px) {
        width: 70%;
      }
      @media (min-width: 768px) {
        width: 50%;
      }
    }
  }
`;

const DivIconos = styled.div`
  grid-area: iconos;
  background-color: ${colorNaranja};
  div {
    position: sticky;
    top: 100px;
    height: auto;
    margin-top: 200px;
  }
  img {
    width: 100%;
    padding: 30%;
  }
  a {
    padding-left: 0;
  }
`;

const DivNone = styled.div`
  grid-area: none;
`;
