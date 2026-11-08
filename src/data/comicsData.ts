// Generado a partir de historietas/0*_misiones_*.md: la narración es idéntica a la lectura de cada misión.
// Para habilitar la historieta de una misión, agrega sus imágenes en public/historietas/m{id}/p{n}.webp
// y su número en COMIC_MISSIONS_WITH_IMAGES.

export interface ComicPanel {
  title: string;
  narration: string;
  speaker?: string;
  dialogue?: string;
  /** Dónde va el globo sobre la imagen (para no tapar lo importante). */
  bubblePosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /** Hacia qué lado sale la cola del globo (apunta a quien habla). */
  bubbleTail?: 'left' | 'right';
  /** Posición libre del centro del globo, en % del ancho y alto de la viñeta. */
  bubbleX?: number;
  bubbleY?: number;
  /** Punta de la cola del globo (boca de quien habla), en % de la viñeta. */
  tailX?: number;
  tailY?: number;
}

export const COMIC_MISSIONS_WITH_IMAGES: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

export const getComicPanelImage = (missionId: number, panelIndex: number) =>
  `/historietas/m${missionId}/p${panelIndex + 1}.webp`;

export const COMICS: Record<number, ComicPanel[]> = {
  1: [
    { title: "Llegada a la ribera", narration: "En algunas zonas de Colombia, incluida la región Caribe, se ha documentado una práctica de extracción de huevos de iguana para consumo y comercialización.", speaker: "Sara", dialogue: "¡Miren, allá arriba!", bubbleX: 40, bubbleY: 12, tailX: 53, tailY: 23 },
    { title: "Las hembras capturadas", narration: "Las hembras pueden ser capturadas cuando llevan los huevos en su aparato reproductor." },
    { title: "Lo que hacen para sacar los huevos", narration: "Para extraerlos, algunas personas les abren el abdomen de manera artesanal. Después pueden cerrar la herida de diferentes formas o, en otros casos, dejar al animal herido y expuesto.", speaker: "Luna", dialogue: "¿Qué está haciendo?", bubbleX: 22, bubbleY: 64, tailX: 38, tailY: 43 },
    { title: "Piedras en lugar de huevos", narration: "También se han descrito prácticas en las que introducen objetos o piedras en la cavidad antes de cerrar el corte. Estas manipulaciones pueden provocar hemorragias, infecciones, daños internos y la muerte del animal." },
    { title: "Las que sobreviven", narration: "Las hembras que sobreviven pueden quedar con lesiones graves en su aparato reproductor y su capacidad de reproducirse puede verse afectada, dependiendo del daño sufrido." },
    { title: "Huevos para la venta", narration: "Los huevos extraídos se destinan al consumo y pueden venderse cocidos o preparados para su comercialización." },
    { title: "Una hembra, una generación", narration: "El problema no termina con la muerte o lesión de una sola iguana. Una hembra adulta puede contribuir a que nazca una nueva generación. Si muchas hembras reproductoras son eliminadas o quedan incapacitadas para reproducirse, disminuye el número de individuos que pueden aportar crías a la población." },
    { title: "Lo que comprendieron los Guardianes", narration: "Los Guardianes observan que una práctica que puede parecer una forma de obtener alimento o ingresos tiene consecuencias sobre el bienestar de los animales y sobre la capacidad de la población para mantenerse en el tiempo.", speaker: "Luna", dialogue: "No es solo una iguana... es todo lo que viene después.", bubbleX: 45, bubbleY: 13, tailX: 52, tailY: 29 },
  ],
  2: [
    { title: "En canoa por el caño", narration: "Era temprano y el sol apenas se reflejaba sobre el agua quieta. Los Guardianes avanzaban en canoa por un caño estrecho, rodeados de tarulla y raíces que salían del lodo.", speaker: "Sara", dialogue: "Qué silencio hay aquí...", bubbleX: 82, bubbleY: 12, tailX: 68, tailY: 33 },
    { title: "La captura en la ciénaga", narration: "En una ciénaga, los Guardianes encontraron personas capturando icoteas o galápagos para consumo. Algunas estaban amarradas dentro de costales y otras esperaban en la orilla, con el caparazón cubierto de barro." },
    { title: "Las hembras adultas", narration: "Entre los animales había hembras adultas. Una de las Guardianas se acercó y notó que eran icoteas grandes, de esas que ya han vivido varios años en el humedal.", speaker: "Sara", dialogue: "Tranquila, no te vamos a hacer daño.", bubbleX: 70, bubbleY: 11, tailX: 42, tailY: 33 },
    { title: "Las playas de los nidos", narration: "Cada temporada, hembras como esas buscan las playas de la orilla para hacer sus nidos." },
    { title: "Lo que recordó el equipo", narration: "El equipo recordó que los individuos reproductores son fundamentales para que una población pueda producir nuevas generaciones. Si la extracción continúa durante mucho tiempo, la cantidad de animales capaces de reproducirse puede disminuir y la recuperación de la población puede hacerse más difícil." },
    { title: "Mirando el agua", narration: "Los Guardianes se quedaron en silencio, mirando el agua, y se preguntaron cuántas icoteas quedarían en esa ciénaga dentro de algunos años." },
  ],
  3: [
    { title: "El barro de la sabana", narration: "La mañana estaba húmeda y el barro de la sabana inundable guardaba las marcas de todo lo que había pasado por allí durante la noche. Los Guardianes caminaban despacio, mirando el suelo con atención." },
    { title: "Huellas de chigüiros y pisingos", narration: "Durante un recorrido aparecieron huellas y señales de chigüiros, pisingos y pequeños mamíferos. Algunas huellas eran grandes y otras pequeñas, como si adultos y crías hubieran caminado juntos hacia el agua.", speaker: "Tomás", dialogue: "¡Miren! Unas grandes... y otras chiquitas.", bubbleX: 66, bubbleY: 12, tailX: 37, tailY: 35 },
    { title: "Señales de cacería", narration: "También encontraron evidencias de cacería. Entre los matorrales había trampas hechas con alambre y cuerdas, cartuchos vacíos y un sendero muy pisado que mostraba que alguien volvía una y otra vez.", speaker: "Sara", dialogue: "¿Quién habrá puesto esto aquí?", bubbleX: 22, bubbleY: 66, tailX: 20, tailY: 36 },
    { title: "Un individuo menos", narration: "Los Guardianes entendieron que cada animal cazado representa un individuo menos, pero que el efecto puede ser mayor cuando la extracción ocurre repetidamente." },
    { title: "Reproductores para seguir existiendo", narration: "Una población necesita suficientes individuos, incluidos reproductores, para mantener sus ciclos de vida." },
    { title: "Dibujar las huellas", narration: "Antes de regresar, el equipo dibujó las huellas en su libreta para compartirlas con la comunidad.", speaker: "Luna", dialogue: "Así la comunidad también podrá verlas.", bubbleX: 60, bubbleY: 8, tailX: 48, tailY: 32 },
  ],
  4: [
    { title: "Huellas junto al corral", narration: "Al amanecer, los trabajadores de la finca encontraron huellas grandes y redondas junto al corral. En las últimas semanas habían perdido algunos terneros, y el miedo se notaba en sus voces." },
    { title: "El jaguar se acerca", narration: "Un jaguar comenzó a acercarse a una finca donde había ganado. Algunas personas querían perseguirlo o matarlo." },
    { title: "Escuchar a todos", narration: "Los Guardianes escucharon a todos con respeto y luego recorrieron los alrededores para entender qué estaba pasando.", speaker: "Ganadero", dialogue: "Ya perdimos varios terneros...", bubbleX: 60, bubbleY: 8, tailX: 76, tailY: 32 },
    { title: "El hábitat fragmentado", narration: "Los Guardianes encontraron que alrededor del territorio habían desaparecido zonas de vegetación y que el hábitat estaba fragmentado. Donde antes había monte, ahora se veían troncos cortados y potreros abiertos que llegaban hasta el borde de los últimos árboles." },
    { title: "Menos presas", narration: "También había menos presas naturales. Casi no aparecían rastros de venados ni de chigüiros, animales de los que el jaguar suele alimentarse.", speaker: "Sara", dialogue: "No veo ni un solo rastro...", bubbleX: 70, bubbleY: 55, tailX: 39, tailY: 47 },
    { title: "Un conflicto con dos lados", narration: "El conflicto no podía analizarse solamente desde el punto de vista del animal o del ganadero: había que comprender los cambios del territorio que habían contribuido a acercar a ambos." },
    { title: "Pensar en todos", narration: "Esa noche, el equipo se sentó a pensar cómo proteger al mismo tiempo al ganado, a las familias y al jaguar.", speaker: "Tomás", dialogue: "Tiene que haber una forma de cuidarlos a todos.", bubbleX: 55, bubbleY: 10, tailX: 43, tailY: 41 },
  ],
  5: [
    { title: "Jaulas bajo el alero", narration: "En un patio de Magangué, bajo un alero de zinc, colgaban varias jaulas. Desde adentro se escuchaban los gritos de loros y pericos de plumas verdes.", speaker: "Tomás", dialogue: "¡Cuánto ruido hacen!", bubbleX: 67, bubbleY: 50, tailX: 50, tailY: 46 },
    { title: "Una familia que las quiere", narration: "Una familia tenía varias aves silvestres en su vivienda. Decían quererlas y cuidarlas." },
    { title: "La abuela y los nombres", narration: "La abuela les daba de comer todas las mañanas y los niños les habían puesto nombre a cada una." },
    { title: "La pregunta", narration: "Los Guardianes preguntaron de dónde habían llegado. Hubo un momento de silencio. Nadie sabía con seguridad la respuesta.", speaker: "Luna", dialogue: "¿Y de dónde llegaron?", bubbleX: 24, bubbleY: 19, tailX: 21, tailY: 42 },
    { title: "Sin saber su procedencia", narration: "Algunas habían sido capturadas o adquiridas sin que existiera información clara sobre su procedencia. Una de ellas había llegado muy pequeña, sin que nadie supiera en qué parte del monte la habían sacado de su nido." },
    { title: "La demanda que incentiva capturas", narration: "El equipo comprendió que cuando se extraen animales silvestres para convertirlos en mascotas, también puede existir una demanda que incentive nuevas capturas. El bienestar de un individuo y la conservación de la especie deben analizarse conjuntamente." },
    { title: "Una pregunta difícil", narration: "Los Guardianes se despidieron con una pregunta difícil en la cabeza: ¿cómo cuidar a estas aves sin que otras sigan siendo sacadas del bosque?", speaker: "Sara", dialogue: "Me quedé pensando en esas jaulas...", bubbleX: 37, bubbleY: 10, tailX: 27, tailY: 37 },
  ],
  6: [
    { title: "El mono de la cadena", narration: "Durante una misión en una comunidad cercana a Magangué, los Guardianes encontraron un mono que llevaba mucho tiempo viviendo en una vivienda." },
    { title: "Un espacio reducido", narration: "Permanecía sujeto mediante una cadena y pasaba gran parte del día en un espacio reducido." },
    { title: "\"Lo criamos desde pequeño\"", narration: "La familia decía que lo quería mucho y que lo había criado desde pequeño.", speaker: "La señora", dialogue: "Lo criamos desde chiquito.", bubbleX: 45, bubbleY: 9, tailX: 32, tailY: 39 },
    { title: "Aves en jaulas", narration: "En otra vivienda encontraron aves mantenidas durante años en jaulas.", speaker: "Emanuel", dialogue: "¿Cuántos años llevarán ahí?", bubbleX: 55, bubbleY: 57, tailX: 76, tailY: 42 },
    { title: "Comida y agua no bastan", narration: "Los Guardianes comprendieron que proporcionar alimento y agua no significa necesariamente satisfacer todas las necesidades de un animal silvestre. Los animales tienen comportamientos relacionados con movimiento, alimentación, refugio, interacción y reproducción." },
    { title: "Moverse y volar", narration: "Un mono necesita oportunidades de desplazamiento e interacción acordes con su especie; muchas aves necesitan posibilidades de movimiento y vuelo." },
    { title: "El cariño no lo hace doméstico", narration: "También entendieron que el cariño de una persona no convierte a un animal silvestre en doméstico. Cuando existe demanda de fauna silvestre como mascota, puede incentivarse la captura de nuevos individuos." },
  ],
  7: [
    { title: "Algo se mueve entre las bolsas", narration: "Era mediodía y el calor hacía brillar el pavimento. Cerca de un basurero a cielo abierto, los Guardianes vieron moverse algo entre las bolsas rotas.", speaker: "Tomás", dialogue: "¿Vieron eso? Algo se movió.", bubbleX: 82, bubbleY: 9, tailX: 60, tailY: 16 },
    { title: "Perros y gatos de la calle", narration: "En un barrio de Magangué, los Guardianes encontraron perros y gatos que vivían en las calles. Algunos buscaban alimento entre residuos y otros presentaban heridas o enfermedades." },
    { title: "El perro flaco y la familia de cachorros", narration: "Un perro flaco, con sarna en el lomo y las costillas marcadas, se acercó con desconfianza; detrás de él caminaba una perra seguida de varios cachorros.", speaker: "Sara", dialogue: "Tranquilo, amigo. No te vamos a hacer daño.", bubbleX: 58, bubbleY: 84, tailX: 70, tailY: 64 },
    { title: "Abandonado por la familia", narration: "Descubrieron que algunos habían sido abandonados después de haber sido animales de compañía. Una vecina contó que uno de esos perros había vivido en una casa de la cuadra hasta que la familia se mudó y lo dejó atrás.", speaker: "La vecina", dialogue: "Ese perrito vivía en esa casa.", bubbleX: 72, bubbleY: 25, tailX: 55, tailY: 42 },
    { title: "Los peligros de la calle", narration: "El abandono puede exponerlos al hambre, enfermedades, accidentes, peleas y maltrato." },
    { title: "Las verdaderas soluciones", narration: "El equipo comprendió que alimentar ocasionalmente a un animal no soluciona las causas del problema. La tenencia responsable, la prevención del abandono, la atención veterinaria, la adopción y los programas de esterilización pueden contribuir a disminuir el número de animales que terminan en las calles." },
    { title: "De regreso a la escuela", narration: "Antes de irse, los Guardianes anotaron el lugar donde los habían encontrado y regresaron a la escuela pensando en lo que podían hacer." },
  ],
  8: [
    { title: "La fotografía antigua", narration: "Desde lo alto de la colina, el viento caliente movía la fotografía entre las manos de los Guardianes. La imagen tenía más de cincuenta años y mostraba un valle cubierto por bosque seco tropical, con ceibas enormes y copas que se tocaban unas con otras.", speaker: "Tomás", dialogue: "Miren cómo era este valle...", bubbleX: 35, bubbleY: 15, tailX: 67, tailY: 40 },
    { title: "Antes y ahora", narration: "Los Guardianes compararon una fotografía antigua con el paisaje actual. Donde antes había árboles y vegetación, ahora aparecían potreros, caminos y zonas intervenidas.", speaker: "Luna", dialogue: "¡No parece el mismo lugar!", bubbleX: 32, bubbleY: 13, tailX: 35, tailY: 44 },
    { title: "Tocones y tierra desnuda", narration: "Aquí y allá se veían troncos caídos, tocones cortados y parches de tierra desnuda donde ya casi no crecía nada." },
    { title: "Lo que es un bosque", narration: "Comprendieron que un bosque no es solamente un conjunto de árboles: allí existen animales, plantas, microorganismos, suelo, agua y relaciones ecológicas." },
    { title: "Lo que se pierde", narration: "Al desaparecer la cobertura vegetal pueden perderse refugios, alimento, sombra y protección del suelo." },
    { title: "Tocar la tierra seca", narration: "Uno de los Guardianes tocó la tierra seca bajo sus pies y comparó en silencio el paisaje que veía con el de la fotografía." },
  ],
  9: [
    { title: "El mapa sobre la mesa", narration: "Sobre la mesa del salón, los Guardianes extendieron un mapa satelital de La Mojana y Magangué. Con el dedo siguieron las manchas verdes que todavía quedaban.", speaker: "Tomás", dialogue: "Quedan muy pocas manchas verdes.", bubbleX: 88, bubbleY: 24, tailX: 80, tailY: 47 },
    { title: "De conectado a dividido", narration: "El paisaje pasó de tener zonas de vegetación conectada a estar dividido por cultivos, potreros, viviendas y caminos." },
    { title: "Islas verdes", narration: "Ahora el verde aparecía en pequeños parches aislados, rodeados de cercas de alambre, potreros y carreteras destapadas." },
    { title: "Lo que da la tierra", narration: "La agricultura y la ganadería proporcionan recursos a las comunidades, pero la transformación excesiva puede fragmentar hábitats y modificar el suelo y el agua." },
    { title: "Familias campesinas", narration: "Muchas familias campesinas siembran maíz, yuca y plátano, y crían ganado en la sabana; de esas actividades depende buena parte de su alimento y su trabajo." },
    { title: "Marcar el mapa", narration: "Los Guardianes debían analizar cómo utilizar el territorio sin ignorar las relaciones ecológicas. Para empezar, marcaron en el mapa cada parche de vegetación y observaron con cuidado qué los rodeaba.", speaker: "Luna", dialogue: "Marquemos cada parche, uno por uno.", bubbleX: 14, bubbleY: 56, tailX: 19, tailY: 45 },
  ],
  10: [
    { title: "El pescador y las dragas", narration: "El río bajaba ancho y oscuro. En la orilla, un pescador recogía su red con bocachicos y bagres, mientras a lo lejos se escuchaba el motor de las dragas que buscaban oro aguas arriba.", speaker: "Sara", dialogue: "¿Oyen ese motor a lo lejos?", bubbleX: 12, bubbleY: 6, tailX: 9, tailY: 17 },
    { title: "El caso del mercurio", narration: "En una zona relacionada con actividades mineras, los Guardianes estudiaron el caso del mercurio." },
    { title: "Mercurio para separar el oro", narration: "Aprendieron que en algunas minas se usa mercurio para separar el oro de la arena y del barro, y que parte de esa sustancia puede terminar en los caños y en el río." },
    { title: "Del ambiente a los organismos", narration: "Comprendieron que un contaminante puede entrar al ambiente y llegar a organismos." },
    { title: "Se acumula en la cadena alimentaria", narration: "Algunas sustancias pueden acumularse en los tejidos y aumentar su concentración a través de las relaciones alimentarias." },
    { title: "Hasta los seres humanos", narration: "Así, un problema que comienza en el agua puede terminar afectando organismos de diferentes niveles de una cadena alimentaria, incluidos los seres humanos que consumen determinados recursos." },
    { title: "La comida de todos los días", narration: "El pescador escuchó con atención. Para él y su familia, el pescado del río era parte de la comida de todos los días.", speaker: "El pescador", dialogue: "En mi casa comemos pescado del río todos los días.", bubbleX: 45, bubbleY: 8, tailX: 31, tailY: 33 },
  ],
  11: [
    { title: "Grava donde había bosque", narration: "El ruido de una retroexcavadora se escuchaba a lo lejos. Donde antes crecía un bosque junto al río, ahora había montículos de grava y huecos llenos de agua turbia.", speaker: "Emanuel", dialogue: "¿Aquí había un bosque?", bubbleX: 62, bubbleY: 8, tailX: 49, tailY: 30 },
    { title: "Un territorio transformado", narration: "Los Guardianes observaron un territorio transformado por actividades mineras. Había zonas con vegetación removida y alteraciones del suelo y del agua." },
    { title: "Tierra agrietada, río marrón", narration: "La tierra estaba dura y agrietada, casi sin capa vegetal, y el río corría denso y de color marrón.", speaker: "Sara", dialogue: "La tierra está dura como una piedra.", bubbleX: 72, bubbleY: 14, tailX: 41, tailY: 27 },
    { title: "Efectos que viajan", narration: "Comprendieron que la extracción de recursos puede modificar el paisaje y que sus efectos pueden desplazarse mediante el agua, el viento y los organismos." },
    { title: "Lluvia y viento", narration: "Cuando llovía, el agua bajaba por las laderas peladas arrastrando barro hacia los caños, y en verano el viento levantaba polvo que caía sobre los cultivos cercanos." },
    { title: "El mapa de los cambios", narration: "La misión era identificar las relaciones entre extracción, territorio y ecosistemas. Con la libreta en la mano, el equipo empezó a dibujar un mapa de todo lo que había cambiado." },
  ],
  12: [
    { title: "Residuos por todas partes", narration: "Los Guardianes recorrieron diferentes sectores de Magangué y encontraron residuos acumulados en calles, lotes, zonas cercanas a viviendas y lugares próximos a caños y ciénagas.", speaker: "Tomás", dialogue: "Hay basura por todas partes.", bubbleX: 14, bubbleY: 9, tailX: 20, tailY: 33 },
    { title: "Bolsas, envases, llantas", narration: "Había bolsas, envases, restos de alimentos, llantas y otros residuos abandonados sobre el suelo." },
    { title: "La lluvia los arrastra", narration: "Cuando llovía, parte de estos materiales podía ser arrastrada hacia canales y cuerpos de agua." },
    { title: "Residuos en el agua", narration: "En algunos puntos encontraron residuos flotando o acumulados en cuerpos de agua. Los animales podían entrar en contacto con ellos o ingerirlos accidentalmente." },
    { title: "El suelo también se daña", narration: "En tierra, los residuos podían deteriorar el suelo y afectar organismos." },
    { title: "El humo de la quema", narration: "Además, cuando algunas personas quemaban basura, se producía humo y se liberaban sustancias contaminantes al aire.", speaker: "Luna", dialogue: "¡Qué humo tan fuerte!", bubbleX: 50, bubbleY: 10, tailX: 42, tailY: 45 },
    { title: "No desaparece aunque no la veamos", narration: "Los Guardianes comprendieron que la contaminación no desaparece porque dejemos de verla. Un residuo en una calle puede ser transportado por el agua; un contaminante del agua puede entrar en contacto con organismos; y la quema puede trasladar contaminantes al aire." },
    { title: "Un sistema conectado", narration: "Calles, suelos, caños, ciénagas, vegetación, animales y personas forman un sistema conectado." },
  ],
  13: [
    { title: "Las marcas en la pared", narration: "En la orilla del río Cauca, en La Mojana, una abuela señaló las marcas que las crecientes habían dejado en la pared de su casa. «Un año el agua llegó hasta aquí», dijo, «y al año siguiente este mismo playón se agrietó de tanta sequía»." },
    { title: "Lo que contaban las personas", narration: "Las personas del territorio comentaban que habían experimentado períodos de calor, lluvias fuertes, sequías y cambios repentinos del tiempo.", speaker: "Un vecino", dialogue: "¡Ya uno no sabe ni cuándo va a llover!", bubbleX: 56, bubbleY: 31, tailX: 66, tailY: 43 },
    { title: "Pozos secos y cosechas perdidas", narration: "Hablaban de veranos cada vez más largos y calientes, de pozos que se secaban, de cosechas perdidas y de aguaceros fuertes que llegaban cuando nadie los esperaba." },
    { title: "Variaciones naturales y actividades humanas", narration: "Los Guardianes estudiaron que el clima tiene variaciones naturales, pero que las actividades humanas, especialmente la emisión de gases de efecto invernadero por combustibles fósiles y la deforestación, contribuyen al calentamiento global y pueden modificar condiciones climáticas." },
    { title: "Tala y quema en la región", narration: "En la región también habían visto la tala de bosques y la quema de rastrojos." },
    { title: "No todo tiene una sola causa", narration: "El equipo comprendió que no todos los eventos meteorológicos tienen una única causa humana, pero que el calentamiento global modifica el sistema climático y puede aumentar ciertos riesgos y cambios regionales." },
    { title: "Leer el cielo", narration: "Al terminar, los Guardianes miraron el cielo y entendieron que leer el clima también es una forma de leer el territorio.", speaker: "Sara", dialogue: "Miren esas nubes allá...", bubbleX: 55, bubbleY: 14, tailX: 54, tailY: 45 },
  ],
  14: [
    { title: "Un potrero sobre el agua", narration: "Desde la orilla, la ciénaga parecía un potrero verde. Casi no se veía el agua: solo hojas redondas y brillantes, y algunas flores de color lila.", speaker: "Sara", dialogue: "¿Y dónde está el agua?", bubbleX: 58, bubbleY: 38, tailX: 37, tailY: 31 },
    { title: "Tarulla por todas partes", narration: "En una ciénaga, los Guardianes observaron una gran cantidad de tarulla cubriendo la superficie del agua." },
    { title: "El pescador que no puede pasar", narration: "Un pescador les contó que desde hacía meses casi no podía atravesar la ciénaga con su canoa, porque las plantas se enredaban en el canalete.", speaker: "El pescador", dialogue: "Ya ni puedo pasar con mi canoa.", bubbleX: 44, bubbleY: 8, tailX: 61, tailY: 20 },
    { title: "Investigar antes de actuar", narration: "Antes de intervenir, decidieron investigar qué especie era, por qué había aumentado y qué efectos estaba produciendo. Tomaron fotografías, hicieron preguntas a los vecinos y buscaron información sobre plantas acuáticas." },
    { title: "Introducida, invasora... o no", narration: "Comprendieron que una especie introducida puede convertirse en invasora cuando causa impactos y se establece de manera que afecta comunidades o procesos ecológicos. No toda presencia abundante significa automáticamente que una especie sea invasora; primero hay que comprender el contexto." },
    { title: "La primera herramienta: la pregunta", narration: "Por eso, el equipo decidió que la primera herramienta de un Guardián no sería el machete, sino la pregunta.", speaker: "Luna", dialogue: "Primero preguntar, después actuar.", bubbleX: 70, bubbleY: 10, tailX: 50, tailY: 35 },
  ],
  15: [
    { title: "Reunir las pistas", narration: "Después de completar sus misiones, los Guardianes reunieron las pistas.", speaker: "Luna", dialogue: "¡Miren todo lo que hemos recogido!", bubbleX: 78, bubbleY: 8, tailX: 61, tailY: 26 },
    { title: "Las primeras misiones", narration: "Recordaron las iguanas y la importancia de las hembras reproductoras; las icoteas, chigüiros y pisingos afectados por la cacería; el jaguar y la transformación del hábitat;" },
    { title: "Los animales en las casas", narration: "los animales silvestres mantenidos como mascotas; los monos encadenados y las aves enjauladas; los perros y gatos abandonados;" },
    { title: "El territorio herido", narration: "los bosques talados; los paisajes transformados; la minería y el mercurio; los residuos del municipio; el cambio climático y la tarulla en los humedales." },
    { title: "Ningún problema está aislado", narration: "Comprendieron que ninguno de estos problemas estaba completamente aislado.", speaker: "Tomás", dialogue: "Todo está unido...", bubbleX: 70, bubbleY: 7, tailX: 80, tailY: 33 },
    { title: "Cómo se conectan", narration: "El cambio del hábitat puede afectar a una especie; la disminución de una población puede alterar relaciones ecológicas; un contaminante puede desplazarse por el agua y las cadenas alimentarias; la transformación del territorio puede modificar suelo, vegetación y agua; y las decisiones humanas pueden afectar tanto a los ecosistemas como a las comunidades." },
    { title: "Proteger las relaciones", narration: "Los Guardianes descubrieron que proteger la naturaleza no significa salvar una especie aislada." },
    { title: "El territorio del que todos hacemos parte", narration: "Significa comprender las relaciones que mantienen vivo el territorio del que todos hacemos parte." },
  ],
};

export const hasComic = (missionId: number) =>
  COMIC_MISSIONS_WITH_IMAGES.includes(missionId) && (COMICS[missionId]?.length ?? 0) > 0;
