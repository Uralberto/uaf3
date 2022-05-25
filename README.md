**# uaf3**

El repositorio **uaf3** guarda mi tercer sitio web personal construido totalmente con la librería **React**. Reemplaza a **uaf2**, el repositorio de mi segundo sitio, subido a la red a mediados de 2021. **Uaf2** es _Html_, _Css_ y _JavaScript_ puro, con efectos de animación declarados con piezas de código _JavaScript_, principalmente. **uaf2** y **uaf3** son muy afines en diseño excepto la pagina que despliega mi perfil que ahora tiene una presentación menos aburrida a través del uso de elementos gráficos. También hay pequeñas ediciones en casi todos los contenidos de texto que obedecen a una mejor redacción y a la descripción de ajustes realizados a ciertos contenidos gráficos.

**uaf3** conserva las ideas del Neoformismo, especialmente en los botones y las opciones de navegación. Se trata de una técnica que da la apariencia de tres dimensiones a objetos que sólo tienen dos. Cada opción de navegación dirige al usuario a un contenido específico y saca de la vista cualquier otro contenido que no esté asociado. Puede sonar obvio, pero es dispendioso si se hace con _JavaScript_ puro. Con **React**, en cambio, el asunto es más sencillo. Además, resulta de gran ayuda para estructurar el código en forma eficiente haciéndolo más legible y mantenible.

El menú de navegación principal cuenta con tres opciones. Las opción **Te cuento** solo pretende dejar en contexto al visitante sobre los antecedentes de este ejercicio digital. Intenta responder por qué existe, qué lo motiva. La novedad frente al **Te cuento** de **uaf2** es la imagen de fondo animada que insinúa una persiana discreta.

La opción **Yo** es el típico _about_, mi perfil. El menú que despliega la opción **Explora** es posiblemente el modelo a seguir para los menús de navegación que a futuro se introduzcan. A su izquierda (de **Explora**) se muestra una carita feliz resultante de la mutación del logo: se quita el elemento triangular azul que sugiere la letra **A** y se recorta la línea superior izquierda del elemento que sugiere la letra **U**. Los elementos no se quitan totalmente; lo poquito que queda de cada uno se comportan como los ojos de la carita. Finalmente se pinta de amarillo el área del círculo. Animación pensada para agradecer de manera sencilla el interés de los visitantes.

El logo arriba a la izquierda es una imagen _SVG_ que se anima al momento de cargar la página. La animación se logra manipulando los atributos _stroke-dasharray_ y _stroke-dashoffset_ de los elementos que lo conforman. Está circunscrito en un circulo que ofrece una perspectiva de alto relieve (Neoformismo). El elemento triangular azul repite su movimiento de rotación cada 15 segundos.

A la derecha del logo van dos elementos: uno lleva el nombre (mi nombre) y, el otro, es una imagen _SVG_ justo debajo que comunica el área de interés (_frontend_) a través de una línea de código animada. El menú hamburguesa no tiene nada en particular mas allá de que la barra central lleva un color diferente. Cuando muta a botón de cierre, la típica equis, las barras diagonales terminan con colores distintos al terminar la animación que las interviene de manera independiente.

El logo central en alto relieve que se despliega al cargar el sitio, es una imagen _SVG_ con color igual al _background_ de todas las páginas. Tiene el nombre de _logo-shadow_. El efecto que se muestra se logra con la propiedad _filter_ de _Css_ en donde _#fcf9fc_ es el color que ilumina los elementos del logo por el lado izquierdo y _#d2cfd2_ es el color que les da el toque de sombra por el lado derecho, provocando de esta manera el efecto de relieve. Así se ve el código _Css:_

`.contenedor-logo-shadow__drop-shadow {`
`width: 100%;`
`stroke-width: 100px;`
`filter: drop-shadow(3px 1px 1px #d2cfd2) drop-shadow(-1px -1px 3px #fcf9fc);`
`animation: animarDropShadow 1.5s steps(20, end) forwards`
`}`

Volviendo al menú **Explora**, allí encontrarán ocho proyectos construidos en este viaje de aprendizaje iniciado en 2018. En cada uno hay una descripción breve que deja entrever temas técnicos detrás de su desarrollo, sin entrar en mayores detalles. Espero despertar tu interés, en especial, si las imágenes vectoriales y las animaciones son parte de tus gustos.
