const GuiaContent = () => (
  <div className='mt-3' style={{height: '250px', overflow: 'auto'}}>
    <p>Hace aproximadamente 3 años empecé a experimentar con fotogrametría, desde entonces he estado perfeccionando un sistema de captura fiable y consistente que cumpliera con mis objetivos, probando diferentes técnicas y software, para crear mi primera&nbsp; <strong>LIBRERÍA&nbsp;DE MODELOS 3D ESCANEADOS</strong> que puedes encontrar en la <strong> tienda</strong>. Durante este tiempo muchas personas me han preguntado por los detalles del proceso. En esta guía encontrarás la información necesaria para experimentar con ésta interesante técnica por tu cuenta.</p>
    <div>
      <h4><strong>¿EN QUE CONSISTE LA FOTOGRAMETRÍA?</strong></h4>
      <p>Es una técnica que nos permite crear modelos 3D a partir de multiples fotografías realizadas desde diferentes ángulos usando software especializado que es capaz de interpretar las variaciones de perspectiva y crear una nube de puntos tridimensional.</p>
      <p>La fotogrametría tiene muy diversas aplicaciones en VFX, video juegos y 3D en general. Puede usarse, por ejemplo, para escanear un actor real y transformarlo en un doble digital que podrá sustituir al actor real cuando sea necesario.</p>
      <p>También se usa con mucha frecuencia en video juegos para escanear “assets” como rocas, plantas, terrenos, superficies, etc. lo que permite a los artistas crear un entorno virtual mucho más realista. Un ejemplo notable de esta tecnología fue el juego “Star Wars: Battlefront” donde muchos de los ecosistemas del juego estaban construidos casi en exclusiva con modelos escaneados mediante fotogrametría.</p>
      <p>&nbsp;</p>
      <p>Además, la fotogrametría se usa desde hace muchos años en topografía y para el estudio geográfico. En la actualidad, el uso de drones ha permitido hacer estas técnicas accesibles a la mayoría.</p>
      <p>&nbsp;</p>
      <p>Otro ejemplo notable del uso de esta tecnología es el trabajo de Sebastián Zapata en <strong>Friendly Shade</strong>&nbsp;que a llevado el escaneo de superficies al siguiente nivel.</p>
      <p>&nbsp;</p>
    </div>
    <div>
      <h4><strong>CUANDO USAR FOTOGRAMETRÍA Y CUANDO NO</strong></h4>
      <p>A pesar de que la fotogrametría es una excelente técnica de escaneado, no es perfecta y es necesario conocer sus limitaciones antes de comenzar a trabajar para evitar problemas durante el proceso.</p>
      <p>Como esta tecnología usa fotografías y software de reconocimiento de patrones para reconstruir la geometría, si nuestro objeto o superficie no tiene detalles o tiene patrones demasiado uniformes, el software no va a poder establecer la perspectiva y por lo tanto la reconstrucción de nuestro modelo va a ser complicada. Un ejemplo sería un objeto de un metal pulido o una tela con un patrón muy uniforme. Una posible solución a este problema es usar pegatinas sobre nuestro modelo o pintarlo con lacas anti-reflejo o pinturas neutras para poder escanear la superficie, pero al hacerlo, afectamos el escaneo de la textura. Por esta razón es importante planificar antes de realizar cualquier escaneo.</p>
    </div>
    <div>
      <h4>PROS</h4>
      <p><strong>-Relativamente fácil y económico</strong><br></br>
      <strong>-Obtenemos la geometría y la textura</strong><br></br>
      <strong>-Muy buena calidad (con el equipo adecuado)</strong></p>
      <p>&nbsp;</p>
    </div>
    <div>
      <h4>CONTRAS</h4>
      <p><strong>-No funciona bien en superficies sin detalle variable</strong><br></br>
      <strong>-Es dificil escanear metales o cristal</strong><br></br>
      <strong>-Requiere mucho tiempo y planificación</strong></p>
    </div>
    <div>
      <h4><b>OBJETIVOS DE ESTE MÉTODO&nbsp;DE TRABAJO</b></h4>
    </div>
    <div>
      <ul>
      <li><strong>Modelos con buen detalle (fotografías grandes y nítidas)</strong></li>
      <li><strong>Rapidez en el proceso de captura (Automatizar procesos)</strong></li>
      <li><strong>Consistencia en los resultados (Iluminación controlada)</strong></li>
      <li><strong>Buen equilibrio entre calidad/rapidez/presupuesto</strong></li>
      <li><strong>Modelos ligeros para su uso en ArchViz principalmente</strong></li>
      </ul>
    </div>
    <div>
      <p>Antes de comenzar a desarrollar un flujo de trabajo para fotogrametría es importante establecer los objetivos del mismo para garantizar que todas las decisiones que tomemos por el camino están destinadas a satisfacer dichos objetivos.</p>
      <p>Si nuestro objetivo es la rapidez del escaneo, usaremos menos fotografías y sacrificaremos detalles. Si nuestra prioridad es la portabilidad, tendremos que pensar como hacer el escaneo con un equipo reducido, etc. Este paso es especialmente importante porque va a condicionar ademas el equipo necesario para el trabajo. Toda la información de esta guía esta destinada a satisfacer estos objetivos en concreto y no otros.</p>
    </div>
    <div>
      <h4><strong>EQUIPO NECESARIO</strong></h4>
      <p>Teniendo siempre en cuenta los objetivos establecidos anteriormente, necesitamos el siguiente equipo de trabajo:</p>
      <p>&nbsp;</p>
      <ul>
      <li><strong>CÁMARA DE FOTOS:</strong> Para lograr el mejor equilibrio entre tiempo invertido y detalles capturados optamos por una cámara de alta resolución como la <strong> Canon 5DS R</strong> de 50Mp que, al no tener filtro de paso bajo, nos proporciona más nitidez. Recordemos que cuanta más resolución y nitidez más preciso va a ser el resultado del escaneo. Otra alternativa interesante podría ser la <strong>Sony A7 r2</strong> de 42Mp. Estas cámaras son caras y ofrecen excelentes resultados, pero se puede utilizar cualquier cámara para hacer fotogrametría, lo importante es empezar a practicar y descubrir las necesidades de equipo poco a poco.</li>
      </ul>
      <ul>
      <li><strong>LENTE:</strong> En este sentido es recomendable contar con una lente lo mas nítida posible, en nuestro caso contamos con varias lentes Prime de alta calidad de 35mm, 50mm y Macro para cuando es necesario escanear objetos muy pequeños. Pero nuevamente, para comenzar, es posible hacerlo con cualquier equipo que tengamos disponible.</li>
      </ul>
      <ul>
      <li><strong>TRIPODE Y ROTULA:</strong> El trípode es una pieza esencial del equipamiento que necesitaremos para hacer fotogrametría ya que nos va a permitir estabilidad y consistencia en los resultados. En nuestro caso estamos usando un <strong> Manfrotto 055</strong> de fibra de carbono y una rotula <strong>Manfrotto 410 Junior</strong> Geared.</li>
      </ul>
      <ul>
      <li><strong>DISPARADOR REMOTO:</strong> Esencial para evitar tocar la cámara en el momento del disparo y garantizar la máxima nitidez. Recomiendo un disparador inalambrico.</li>
      </ul>
      <ul>
      <li><strong>COLOR CHECKER:</strong> Esencial si queremos lograr una textura calibrada con un albedo correcto.</li>
      </ul>
      <ul>
      <li><strong>LUCES DE ESTUDIO:</strong> Para lograr unas condiciones que no dependan del clima, es recomendable tener un set de luces de estudio que nos permitan escanear siempre igual en cualquier situación. En nuestro caso contamos con flashes profesionales de estudio. Existen alternativas económicas de luz continua pero dada su baja intensidad pueden afectar a la nitidez de las fotografías al necesitar tiempos de exposición largos y su color cambia frecuentemente lo que puede alterar el albedo.</li>
      </ul>
      <ul>
      <li><strong>HARDWARE:</strong> A la hora de hacer fotogrametría uno de los procesos mas lentos es el calculo de la nube de puntos que tiene que hacer el programa de escaneo. Este proceso puede llegar a tardar SEMANAS si no se cuenta con el equipo adecuado. Recomiendo un mínimo de 64Gb de ram (preferiblemente 128) y si el software soporta GPU, tantas como puedas instalar. Dependiendo de los objetivos de calidad que tengas puedes sacrificar hardware.</li>
      </ul>
      <ul>
      <li><strong>OTROS: </strong>También es importante contar con una plataforma giratoria que nos permita estandarizar los grados que rotaremos antes de cada disparo (existen opciones automáticas), cinta métrica para tomar medidas y garantizar consistencia si movemos la cámara, gaffer tape, etc.</li>
      </ul>
      <p><em><strong>NOTA:</strong> Es posible sustituir los flashes de estudio por un sistema con polarización cruzada como un “ring Flash”, pero en este documento solo cubriremos lo necesario para escanear usando luces de gran tamaño en lugar de polarización cruzada. Ambas técnicas tienen sus pros y contras.</em></p>
    </div>
    <div>
      <h4><strong>SOFTWARE NECESARIO</strong></h4>
      <p>Una vez reunido todo el equipo necesario le toca el turno al software. Existen alternativas 100% gratuitas para realizar el proceso de fotogrametría, sin embargo, en nuestro caso hemos decidido invertir en ciertas aplicaciones para optimizar los resultados y trabajar de forma mas cómoda y rápida.</p>
    </div>
    <div>
      <h4><strong>METODO DE TRABAJO</strong></h4>
      <p>Podemos reducir el proceso a una serie de etapas desde la captura de las fotografías hasta que obtenemos nuestro modelo 3D con materiales listo para ser usado en nuestros proyectos, durante cada una de las etapas del proceso tendremos presente los objetivos que se plantearon al principio del documento para lograr los resultados deseados.</p>
      <p>&nbsp;</p>
    </div>
    <div>
      <h4>PASO 1. OBTENER LAS&nbsp;FOTOGRAFÍAS</h4>
      <p>Sin duda la parte mas importante del proceso es la correcta captura de las fotografías de nuestro objeto, con el objetivo de obtener resultados consistente y buena calidad</p>
      <p><strong>ISO:</strong> Generalmente la más baja posible permitida por la cámara (ISO 100 en nuestro caso) para evitar el ruido, ya que el ruido puede confundir al software durante el proceso de escaneo.</p>
      <p><strong>F-Number:</strong> Generalmente intentaremos usar un diafragma lo más cerrado posible para aumentar la profundidad de campo y evitar así pérdida de nitidez por desenfoque. Valores entre f8 y f22.</p>
      <p><strong>Velocidad de obturación:</strong> Aunque estemos usando un buen trípode, recomiendo usar velocidades de disparo rápidas para maximizar la nitidez. Dependiendo de la óptica 1/125s por ejemplo.</p>
      <p><strong>Iluminación y fondo:</strong> Es importante usar fuentes de luz grandes situadas de forma frontal para eliminar sombras indeseadas en nuestro modelo. Si se trata de objetos brillantes esféricos (como frutas) es preferible usar un fondo negro y evitar luces laterales para neutralizar al máximo los especulares. Para objetos menos brillantes como rocas, etc podemos usar un chroma que nos facilitara la tarea de crear las máscaras posteriormente, pero a título personal, prefiero usar un fondo neutro para evitar contaminación y especulares. Otra alternativa sería usar polarización cruzada con un “ring Flash” o 2 luces situadas a 45º respecto a la cámara.</p>
      <p><strong>Cantidad de fotos:</strong>&nbsp;Normalmente es necesario un 75-80% de superposición de datos entre fotografías para obtener buenos resultados. Yo recomiendo&nbsp;un mínimo de 64 fotografías para cada rotación completa y suele ser necesario hacer 3 o 4 alturas diferentes. Por regla general son necesarias 150-200 fotografías como MÍNIMO por modelo para obtener buenos resultados.</p>
      <p><strong>Encuadre: </strong>Cada pixel de nuestra fotografía es información útil que el programa de fotogrametría puede usar para añadir detalle, de manera que trataremos siempre de llenar el encuadre con nuestro modelo para desperdiciar la mínima cantidad de pixels posibles. Si se trata de objetos muy pequeños, necesitaremos una lente macro para poder acercarnos más y poder enfocar.</p>
      <p><strong>Exposición:</strong> Para aprovechar al máximo la información contenida en el negativo digital hay que intentar “derechear”&nbsp; el histograma&nbsp;(exponer para las altas luces) sin sobre-exponer partes importantes del modelo.</p>
      <p><strong>Formato de archivo:</strong>&nbsp;Este es un aspecto muy importante de la captura de fotografías para fotogrametría. Yo recomiendo usar el formato RAW de nuestra cámara para obtener imágenes de 14-16bpc que nos permitirán posteriormente obtener la información lineal para nuestro albedo. Si buscamos un albedo lo más correcto posible, necesitaremos crear una versión lineal de nuestro archivo RAW usando por ejemplo DCRAW. Si el resultado es demasiado “lavado” podemos hacer dos versiones de nuestras fotografías: Una versión lineal para proyectar las texturas de albedo al completar el proceso y una versión más contrastada para facilitar la tarea del software de fotogrametría.</p>
      <p>A la hora de tomar las fotografías es muy importante ser extremadamente metódico, por ejemplo, podemos marcar nuestra peana giratoria para usar siempre la misma cantidad de grados en cada posición (entre 5º y 10º) y hacer las fotografías siempre en el mismo orden.</p>
    </div>
    <div>
      <h4>PASO 2. PHOTOSCAN</h4>
      <p>Una vez capturadas nuestras fotografías toca introducirlas en nuestro software de fotogrametría para generar nuestra nube de puntos. En nuestro caso vamos a usar Photoscan, pero podríamos usar las alternativas gratuitas mencionadas anteriormente.</p>
      <p>Si el proceso de captura de fotografías se hizo en condiciones de iluminación controlada y de forma metódica, este paso no requiere mayor complicación, si las fotografías se hicieron a mano alzada o con luz natural, es posible que sea necesario identificar las imágenes problemáticas y eliminarlas para que no dañen el cálculo.</p>
      <p>Una vez cargadas nuestras imágenes en Photoscan, el siguiente paso es alinearlas para que el software pueda calcular la posición desde la que fueron tomadas. Al terminar deberíamos tener una nube de puntos de baja resolución y una estimación de la posición de nuestras cámaras como se muestra en la siguiente imagen.&nbsp;Esta fase es ideal para identificar posibles problemas en nuestras fotos. SI vemos que una de nuestras cámaras está mal alineada, podemos eliminarla para evitar problemas y si vemos que nuestra nube de puntos contiene muchos puntos “residuales” podemos eliminarlos para agilizar el proceso posterior.</p>
      <p>La siguiente fase del proceso es extremadamente lenta y puede llegar a tardar días de calculo, por lo que se hace especialmente importante asegurarse que todo esta correctamente alineado. Una forma de evitar que el software tenga que calcular zonas innecesarias para optimizar los tiempos es usar máscaras para eliminar de la ecuación el fondo. Esto podemos hacerlo de forma manual, mediante rotoscopía, con diferencia o con Chroma Key en software como After Effect y cargar nuestra mascara con “_MASK” para que Photoscan la reconozca automáticamente. También existe la posibilidad de usar la geometría de baja resolución calculada previamente como máscara.</p>
      <p>Una vez completado el proceso tendremos una nube de puntos de muy alta densidad con millones de puntos que representan la posición tridimensional de cada uno de los vertices calculados durante el proceso anterior, pero estos puntos aun no definen una geometria tridimensional, son simplemente puntos en el espacio. Para generar nuestra geometria de alta resolución poligonal usaremos la opción de photoscan <strong>Workflow &gt; Build Mesh</strong></p>
      <p>Vamos por buen camino!. Con esto ya tenemos un modelo 3D de alta resolución que representa de forma muy fiel nuestro objeto original, pero aun nos queda mucho trabajo por delante. Ahora es necesario proyectar las fotografías sobre esta geometria, por suerte éste es un proceso muy rápido porque Photoscan ya tiene calculada la posición de cada cámara y simplemente tiene que proyectar las imágenes y generar una textura. En este punto es donde podemos cambiar nuestras imágenes contrastadas por nuestras texturas lineales obtenidas con DCRAW para garantizar un albedo correcto.</p>
      <p>Una vez terminado el proceso tendremos nuestro modelo 3D y nuestras texturas lineales aplicadas sobre unas coordenadas de mapeado automáticas creadas por Photoscan. La cosa va tomando forma, pero este modelo aun no esta listo para ser usado en producción, estamos hablando de un modelo con millones de polígonos y coordenadas de mapeado automáticas difíciles de gestionar, ademas, el software de fotogrametría no suele ser capaz de representar correctamente superficies completamente pulidas por lo que se suele hacer necesario un trabajo posterior para corregir el modelo en Zbrush. En la parte 2 de esta guía podrás descubrir como transformar este modelo de alta resolución en un modelo más manejable y como trasladar la información de altura y el albedo a unas nuevas coordenadas de mapeado creadas manualmente</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
    <div>
      <h4>PASO 3. RETOPOLOGIA</h4>
      <p>El primer paso para optimizar nuestro modelo para su uso es reducir considerablemente su cantidad de polígonos manteniendo su estructura y silueta. Esta tarea puede hacerse de muchas formas, en <strong>este video</strong> explico como hacerlo de forma manual en 3D Studio MAX. Una de las opciones más interesantes para esta parte de nuestro flujo de trabajo es ZBrush que tiene varias herramientas automáticas como ZRemesher que pueden ahorrarnos mucho trabajo y nos ofrecen excelentes resultados para objetos orgánicos. Una alternativa gratuita automática para este proceso es <strong>Instant Meshes</strong></p>
    </div>
    <div>
      <h4>PASO 4. CREACIÓN DE COORDENADAS DE MAPEADO UV</h4>
      <p>Ya estamos un paso más cerca de nuestro resultado final, pero de momento, nuestro nuevo modelo de baja resolución no cuenta con coordenadas de mapeado ni texturas. Para poder transferir los detalles de nuestro modelo original y el albedo a nuestro modelo de baja resolución, necesitamos unas nuevas coordenadas de mapeado. Este trabajo podemos hacerlo directamente en ZBrush con la herramienta UV Master o en otra aplicación como 3D Studio MAX o UV Layout. En <strong>este video</strong> se explica de forma detallada el proceso de creación de coordenadas de mapeado en 3D Studio MAX.</p>
      <p>&nbsp;</p>
    </div>
    <div>
      <h4>PASO 5. CREACIÓN DE TEXTURAS</h4>
      <p>Ya tenemos nuestro modelo de alta resolución con textura y nuestro modelo de baja resolución con nuevas coordenadas de mapeado. El siguiente paso en el proceso consiste en usar la información de nuestro modelo de alta resolución para crear nuevos mapas para el modelo optimizado. Esta tarea puede realizarse con multiples aplicaciones como xNormal, el propio ZBrush, etc. En nuestro caso hemos preferido usar Substance Designer por si facilidad de uso, sus excelentes resultados y la posibilidad de automatizar el proceso en múltiples modelos a la vez.</p>
      <p><strong>Albedo:</strong> Es la textura generada por Photoscan proyectada sobre las nuevas coordenadas de mapeado.<br></br>
      <strong>NormalMap:</strong> Contiene la información de altura del modelo de alta resolución en forma de mapa de normales.<br></br>
      <strong>Linear Displacement:</strong> Información de altura del modelo original en escala de grises.<br></br>
      <strong>AO/Curvature:</strong> Util para añadir volumen “artificial” a nuestra textura, puede ser interesante en video juegos.<br></br>
      <strong>Local Normal:</strong> Mapa de normales local que puede ser de utilidad para hacer <em>delighting</em> manual si es necesario.<br></br>
      <strong>Glossiness:</strong> En nuestro caso este mapa se obtiene de forma manual usando una combinación de albedo, altura y fotografías de referencia.</p>
    </div>
    <div>
      <h4>PASO 6. CREACIÓN DE MATERIALES PBR</h4>
      <p>Finalmente, con el modelo 3D de baja resolución y las texturas generadas en Substance Designer tenemos todo lo necesario para completar el proceso y crear nuestros materiales PBR. Puedes encontrar gran cantidad de <strong>vídeos sobre materiales</strong> en nuestros tutoriales. Para garantizar los mejores resultados recomiendo tomar fotografías del modelo real en condiciones de iluminación fáciles de reproducir para usarlas como referencia.</p>
      <p>Este es el resultado final renderizado en 3D Studio Max y V-ray:</p>
      <p>&nbsp;</p>
    </div>
    <div>
      <h4><strong>CONCLUSIONES FINALES</strong></h4>
      <ul>
      <li><span>La planificación es clave para obtener buenos resultados.</span></li>
      <li><span>Buena iluminación y metodología simplifican el proceso.</span></li>
      <li>Obtener buenos resultados requiere mucho tiempo y dedicación.</li>
      <li><span>La fotogrametría no es perfecta, pero es un buen punto de partida.</span></li>
      <li><span>La calidad del equipo puede mejorar el resultado.</span></li>
      </ul>
    </div>
  </div>
)

export default GuiaContent
