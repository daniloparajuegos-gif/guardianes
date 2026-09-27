import { Mission } from '../types';

export const PEDAGOGICAL_METADATA = {
  title: "GUARDIANES DEL BOSQUE",
  subtitle: "Estrategia gamificada para el fortalecimiento de la comprensión lectora",
  grade: "Grado séptimo",
  context: "Contexto ambiental de Magangué, La Mojana y región Caribe",
  slogan: "Leer • Comprender • Reflexionar • Actuar",
  levels: [
    {
      id: 1,
      name: "Los ojos del Guardián",
      type: "Literal",
      badge: "Guardián Observador",
      icon: "eye",
      description: "Identificar información explícita: quién, qué, dónde, datos, hechos y características."
    },
    {
      id: 2,
      name: "Las pistas ocultas",
      type: "Inferencial",
      badge: "Guardián Rastreador",
      icon: "search",
      description: "Relacionar pistas, deducir información y establecer causas y consecuencias."
    },
    {
      id: 3,
      name: "La decisión del Guardián",
      type: "Crítico",
      badge: "Guardián del Equilibrio",
      icon: "scale",
      description: "Valorar situaciones, argumentar y proponer acciones utilizando evidencias del texto."
    }
  ],
  purpose: "Fortalecer la comprensión lectora mediante textos contextualizados en problemáticas ambientales del territorio, promoviendo simultáneamente la reflexión sobre el cuidado de los seres vivos, los ecosistemas y las relaciones entre las actividades humanas y el ambiente.",
  story: "El territorio enfrenta diferentes situaciones ambientales. Los estudiantes reciben la misión de convertirse en Guardianes del Bosque. Para avanzar deberán observar, leer, encontrar pistas, conectar información, analizar conflictos y proponer acciones. Cada misión les permite obtener una insignia y acercarse a la misión final: comprender que los problemas ambientales están relacionados.",
  closingMessage: "Ser Guardián del Bosque significa aprender a leer el territorio y también aprender a leer los textos que hablan de él. La meta final es que el estudiante pueda comprender información, relacionarla, cuestionarla y utilizarla para interpretar situaciones reales y proponer acciones responsables."
};

export const MISSIONS_DATA: Mission[] = [
  {
    id: 1,
    slug: 'el-secreto-de-los-nidos',
    title: 'El secreto de los nidos',
    icon: '🦎',
    badgeName: 'Protector de la Vida',
    badgeDescription: 'Comprendió el impacto de la extracción de huevos sobre las hembras reproductoras y las futuras generaciones.',
    territoryZone: 'Bosque y Sabana',
    conflictSummary: 'Extracción artesanal de huevos de iguana durante época reproductiva y sus severos efectos poblacionales.',
    arrivalContext: 'Has llegado a las riberas y matorrales secos de la región Caribe. Entre las ramas altas de los árboles, donde suelen asolearse las iguanas, notas ramas quebradas y rastros de intervención humana reciente.',
    observationDetails: {
      spotlightTitle: 'Evidencias en la zona de anidación',
      details: [
        'Hembras de iguana verde con vientres abultados cerca de bancos de arena.',
        'Herramientas punzantes artesanales y restos de fogatas en los claros.',
        'Población visible con marcada ausencia de juveniles de temporadas anteriores.'
      ],
      environmentalAspects: [
        'Época de desove de reptiles tropicales.',
        'Importancia de la fecundidad en la cadena trófica local.',
        'Vulnerabilidad física ante manipulaciones invasivas.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `En algunas zonas de Colombia, incluida la región Caribe, se ha documentado una práctica de extracción de huevos de iguana para consumo y comercialización. Las hembras pueden ser capturadas cuando llevan los huevos en su aparato reproductor. Para extraerlos, algunas personas les abren el abdomen de manera artesanal. Después pueden cerrar la herida de diferentes formas o, en otros casos, dejar al animal herido y expuesto. También se han descrito prácticas en las que introducen objetos o piedras en la cavidad antes de cerrar el corte. Estas manipulaciones pueden provocar hemorragias, infecciones, daños internos y la muerte del animal. Las hembras que sobreviven pueden quedar con lesiones graves en su aparato reproductor y su capacidad de reproducirse puede verse afectada, dependiendo del daño sufrido.

Los huevos extraídos se destinan al consumo y pueden venderse cocidos o preparados para su comercialización. El problema no termina con la muerte o lesión de una sola iguana. Una hembra adulta puede contribuir a que nazca una nueva generación. Si muchas hembras reproductoras son eliminadas o quedan incapacitadas para reproducirse, disminuye el número de individuos que pueden aportar crías a la población.

Los Guardianes observan que una práctica que puede parecer una forma de obtener alimento o ingresos tiene consecuencias sobre el bienestar de los animales y sobre la capacidad de la población para mantenerse en el tiempo.`,
    readingWordCount: 228,
    literalQuestions: [
      {
        id: 'm1_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Para qué se extraen los huevos de las iguanas según el texto?',
        options: [
          { id: 'a', text: 'Para fines de investigación biológica y cría en cautiverio según los principios de ecología básica.', feedback: '🔎 Revisa el texto: el texto especifica que no se trata de estudios científicos.' },
          { id: 'b', text: 'Para consumo y comercialización vinculado a las alteraciones de los ciclos biológicos naturales.', isCorrect: true, feedback: '🌿 ¡Correcto! El texto señala textualmente que se destinan al consumo y venta cocidos o preparados.' },
          { id: 'c', text: 'Para protegerlos de los depredadores naturales de la zona desde una perspectiva de conservación.', feedback: '🔎 Observa de nuevo el primer y segundo párrafo.' },
          { id: 'd', text: 'Para decorar artesanías locales y festivales vinculado a las alteraciones de los ciclos biológicos naturales dentro del marco del equilibrio natural.', feedback: '🔎 Vuelve al texto: se menciona claramente la alimentación y los ingresos.' }
        ],
        pedagogicalTip: 'La respuesta aparece de forma explícita en el primer y segundo párrafo.'
      },
      {
        id: 'm1_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué lesiones o consecuencias puede sufrir una iguana cuando es sometida a esta práctica?',
        options: [
          { id: 'a', text: 'Únicamente cansancio temporal y pérdida de apetito durante unas horas desde una perspectiva de conservación.', feedback: '🔎 Observa la gravedad descrita en el primer párrafo.' },
          { id: 'b', text: 'Pérdida de la cola que luego se regenera de forma natural lo que evidencia una alteración de los recursos disponibles según los principios de ecología básica.', feedback: '🔎 El texto habla de la apertura del abdomen y de sus consecuencias internas.' },
          { id: 'c', text: 'Hemorragias, infecciones, daños internos, lesiones en el aparato reproductor y la muerte de la zona.', isCorrect: true, feedback: '🌿 ¡Exacto! Esas son las lesiones y consecuencias clínicas directas que describe el texto.' },
          { id: 'd', text: 'Ceguera temporal y deshidratación leve lo que evidencia una alteración de los recursos disponibles con consecuencias en la estructura demográfica de las especies considerando las interacciones bióticas.', feedback: '🔎 Vuelve a revisar las manipulaciones abdominales descritas en el texto.' }
        ],
        pedagogicalTip: 'Localiza la lista de efectos fisiológicos directos en el primer párrafo.'
      },
      {
        id: 'm1_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué puede ocurrir con la capacidad reproductiva de una hembra que sobrevive a una intervención de este tipo?',
        options: [
          { id: 'a', text: 'Aumenta su fecundidad duplicando el número de huevos en el año siguiente en el contexto de las problemáticas de conservación identificadas desde una perspectiva de conservación.', feedback: '🔎 El texto no menciona mejoras biológicas sino perjuicios graves.' },
          { id: 'b', text: 'Su capacidad de reproducirse puede verse afectada o quedar totalmente incapacitada.', isCorrect: true, feedback: '🌿 ¡Muy bien! El texto resalta que las sobrevivientes sufren secuelas en su aparato reproductor.' },
          { id: 'c', text: 'Permanece intacta ya que las heridas cicatrizan de inmediato sin daño interno relacionado con el equilibrio biológico del área de estudio dentro del marco del equilibrio natural.', feedback: '🔎 El texto aclara que sufren daños graves en su aparato reproductor.' },
          { id: 'd', text: 'Cambia de hábitat pero continúa poniendo huevos normalmente lo que evidencia una alteración de los recursos disponibles considerando las interacciones bióticas.', feedback: '🔎 Revisa el final del primer párrafo sobre la reproducción.' }
        ],
        pedagogicalTip: 'Enfócate en la frase final del párrafo 1 y el inicio del párrafo 2.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm1_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué la extracción de huevos de muchas hembras puede afectar a toda la población de iguanas?',
        options: [
          { id: 'a', text: 'Porque al eliminar o inutilizar a las reproductoras, disminuye drásticamente el relevo generacional de crías.', isCorrect: true, feedback: '🌿 ¡Gran deducción! Si no nacen nuevas generaciones, la población envejecerá y colapsará numéricamente.' },
          { id: 'b', text: 'Porque las demás iguanas macho deciden migrar hacia otros departamentos del país analizando las dinámicas del territorio.', feedback: '🔎 Relaciona el concepto biológico de hembra reproductora con el tamaño poblacional futuro.' },
          { id: 'c', text: 'Porque las iguanas cambian su dieta vegetal a una dieta carnívora por estrés desde una perspectiva de conservación.', feedback: '🔎 Revisa la conexión causal que propone el texto entre individuos fértiles y tamaño poblacional.' },
          { id: 'd', text: 'Porque los depredadores dejan de cazar en esa zona específica analizando las dinámicas del territorio.', feedback: '🔎 Busca la relación entre la reproducción y el mantenimiento de la especie a lo largo del tiempo.' }
        ],
        pedagogicalTip: 'Conecta la muerte de hembras fértiles con el número de crías futuras.'
      },
      {
        id: 'm1_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: 'Si una hembra sobrevive pero queda con daños reproductivos, ¿por qué su supervivencia no significa necesariamente que la población se haya recuperado?',
        options: [
          { id: 'a', text: 'Porque una iguana que no puede reproducirse ya no aporta nuevos individuos a las futuras generaciones lo que evidencia una alteración de los recursos disponibles.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! Para que la población se mantenga activa se requiere la capacidad biológica de generar crías.' },
          { id: 'b', text: 'Porque las iguanas heridas atraen plagas al bosque que destruyen los árboles según los principios de ecología básica.', feedback: '🔎 Piensa en la diferencia entre la vida de un individuo y el futuro de la especie.' },
          { id: 'c', text: 'Porque la falta de reproduccin impide el mantenimiento de la densidad poblacional considerando las interacciones bióticas.', feedback: '🔎 Analiza el rol ecológico reproductivo que explica el autor.' },
          { id: 'd', text: 'Porque altera la estructura demogrǭfica al eliminar individuos reproductivamente activos relacionado con el equilibrio biológico del área de estudio asociado a los impactos ambientales en la región descrita según los principios de ecología básica.', feedback: '🔎 Reflexiona sobre la capacidad biológica de la especie para sostenerse en el tiempo.' }
        ],
        pedagogicalTip: 'Distingue entre la supervivencia individual y la función reproductora poblacional.'
      },
      {
        id: 'm1_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Qué relación existe entre la extracción de huevos, la muerte o infertilidad de las hembras y el número de iguanas de las siguientes generaciones?',
        options: [
          { id: 'a', text: 'Es una relación directa de causa y efecto: a mayor extracción e infertilidad, menor será el número de crías en el futuro de la zona.', isCorrect: true, feedback: '🌿 ¡Exacto! Se trata de una espiral descendente en la capacidad de renovación de la especie.' },
          { id: 'b', text: 'No existe relación, ya que las iguanas ponen huevos espontáneamente en cualquier época sin apareamiento dentro del marco del equilibrio natural.', feedback: '🔎 Revisa cómo la pérdida de hembras impacta la natalidad.' },
          { id: 'c', text: 'Aumenta el número de crías porque las pocas iguanas sobrevivientes ponen nidadas gigantes lo que evidencia una alteración de los recursos disponibles según los principios de ecología básica.', feedback: '🔎 El texto advierte sobre la reducción de individuos que aportan crías.' },
          { id: 'd', text: 'La relación es aleatoria y depende únicamente de la temporada de lluvias con consecuencias en la estructura demográfica de las especies según los registros de observación del entorno natural dentro del marco del equilibrio natural.', feedback: '🔎 Conecta las pistas que da el autor en el párrafo 2.' }
        ],
        pedagogicalTip: 'Establece la cadena de causalidad entre extracción, daño reproductor y declive demográfico.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm1_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: 'Si encuentras personas comercializando huevos obtenidos mediante esta práctica, ¿qué debería hacer un Guardián y por qué?',
        options: [
          { id: 'a', text: 'Ignorar la prǭctica para no interferir con las dinǭmicas de subsistencia locales como un factor relevante en la cadena trófica del hábitat desde una perspectiva de conservación.', feedback: '🔎 Pensamiento crítico: comprar fomenta el comercio y la demanda de nuevas capturas.' },
          { id: 'b', text: 'No comprar, dialogar pedagógicamente sobre el daño a la especie e informar a las autoridades ambientales protectoras.', isCorrect: true, feedback: '🌿 ¡Decisión sabia y coherente! Detiene la demanda económica y activa la protección institucional.' },
          { id: 'c', text: 'Ignorar la situación porque es una costumbre de la zona que no se puede cambiar en el contexto de las problemáticas de conservación identificadas desde una perspectiva de conservación.', feedback: '🔎 El Guardián asume un rol activo de cuidado del territorio sustentado en la evidencia.' },
          { id: 'd', text: 'Enfrentar físicamente a las personas en el mercado sin dialogar asociado a los impactos ambientales en la región descrita en el contexto de las problemáticas de conservación identificadas analizando las dinámicas del territorio.', feedback: '🔎 La intervención del Guardián debe ser pedagógica, responsable y a través de los canales adecuados.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Justifica tu decisión analizando cómo cortar la demanda sin generar conflictos violentos.'
      },
      {
        id: 'm1_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué alternativas podrían promoverse para disminuir la necesidad de obtener ingresos mediante la extracción y comercialización de huevos?',
        options: [
          { id: 'a', text: 'Promover proyectos comunitarios de avicultura sostenible, huertas ecológicas, turismo de naturaleza y alternativas productivas locales.', isCorrect: true, feedback: '🌿 ¡Brillante! Resuelve la necesidad económica de las familias sin vulnerar la fauna silvestre.' },
          { id: 'b', text: 'Prohibir la venta de cualquier alimento en el municipio sin ofrecer soluciones económicas analizando las dinámicas del territorio.', feedback: '🔎 Las medidas sostenibles deben considerar el bienestar de las familias campesinas.' },
          { id: 'c', text: 'Fomentar la extraccin regulada sin evaluar la capacidad de carga del ecosistema considerando las interacciones bióticas.', feedback: '🔎 Eso solo trasladaría el daño a otro componente de la fauna.' },
          { id: 'd', text: 'Subsidiar la compra de piedras e hilo para hacer heridas más limpias a las iguanas dentro del marco del equilibrio natural.', feedback: '🔎 El objetivo es detener la crueldad y el daño biológico, no perpetuarlo.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Plantea alternativas económicas que armonicen los medios de vida humanos con la conservación.'
      },
      {
        id: 'm1_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué proteger a las hembras reproductoras es importante para las futuras generaciones y para el equilibrio del ecosistema?',
        options: [
          { id: 'a', text: 'Porque las hembras reproductoras garantizan la continuidad de la especie, dispersión de semillas y el equilibrio de la red trófica según los registros de observación del entorno natural.', isCorrect: true, feedback: '🌿 ¡Excelente valoración crítica! Entiendes la función ecológica integral del reptil en el ecosistema.' },
          { id: 'b', text: 'Únicamente porque tienen colores más vistosos para las fotografías de los visitantes dentro del marco del equilibrio natural.', feedback: '🔎 Valora el papel ecológico y la supervivencia biológica.' },
          { id: 'c', text: 'Porque alteran la cadena trfica al disminuir la presencia de consumidores primarios considerando las interacciones bióticas.', feedback: '🔎 Recuerda el rol real biológico de las iguanas en la vegetación y la cadena trófica.' },
          { id: 'd', text: 'No tiene importancia ecológica real, solo tiene valor turístico como un factor relevante en la cadena trófica del hábitat relacionado con el equilibrio biológico del área de estudio relacionado con el equilibrio biológico del área de estudio considerando las interacciones bióticas.', feedback: '🔎 Reflexiona sobre la interdependencia entre especies y el bosque.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Argumenta relacionando la función ecológica de la iguana con el equilibrio de todo el hábitat.'
      }
    ],
    environmentalChallenge: {
      title: 'Alerta de Conservación Comunitaria',
      instruction: 'Elabora una alerta de conservación para la comunidad explicando por qué proteger las hembras y sus futuras generaciones es importante.',
      type: 'alert',
      fields: [
        { id: 'title', label: 'Titular de la Alerta de Conservación', placeholder: 'Ej. ¡ALERTA VERDE: Proteger a la hembra es cuidar el mañana de nuestro bosque!', type: 'text' },
        { id: 'audience', label: 'A quién va dirigida', placeholder: 'Comerciantes, familias, jóvenes y comunidad de la región...', type: 'text' },
        { id: 'problemExplanation', label: 'Explicación del problema basada en la lectura', placeholder: 'Describe qué ocurre con la extracción artesanal y las lesiones reproductivas...', type: 'textarea' },
        { id: 'callToAction', label: 'Llamado a la acción y alternativa comunitaria', placeholder: '¿Qué acciones deben tomar los vecinos y qué alternativa propones?', type: 'textarea' }
      ]
    }
  },
  {
    id: 2,
    slug: 'una-captura-que-parecia-pequena',
    title: 'Una captura que parecía pequeña',
    icon: '🐢',
    badgeName: 'Guardián de las Generaciones',
    badgeDescription: 'Comprendió el riesgo demográfico que representa la captura sostenida de galápagos e icoteas hembras en los humedales.',
    territoryZone: 'Ciénagas y Caños',
    conflictSummary: 'Cacería de icoteas y galápagos hembras para consumo tradicional durante temporadas secas y cuaresma en la ciénaga.',
    arrivalContext: 'Navegas en canoa por un caño que desemboca en la ciénaga. En las orillas lodosas observas rastros de ramas removidas y trampas artesanales entre el tarullal.',
    observationDetails: {
      spotlightTitle: 'Observaciones en la ciénaga',
      details: [
        'Aguas bajas descubriendo playones donde las tortugas de agua dulce salen a tomar sol.',
        'Sacos y corrales rústicos temporales con icoteas adultas capturadas.',
        'Disminución notable en los registros de anidaciones en las orillas arenosas.'
      ],
      environmentalAspects: [
        'Crecimiento lento y madurez tardía en quelonios.',
        'Vulnerabilidad estacional durante la temporada de desove.',
        'Rol de las icoteas en la limpieza acuática y dispersión.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `En una ciénaga, los Guardianes encontraron personas capturando icoteas o galápagos para consumo. Entre los animales había hembras adultas. El equipo recordó que los individuos reproductores son fundamentales para que una población pueda producir nuevas generaciones. Si la extracción continúa durante mucho tiempo, la cantidad de animales capaces de reproducirse puede disminuir y la recuperación de la población puede hacerse más difícil.`,
    readingWordCount: 65,
    literalQuestions: [
      {
        id: 'm2_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué animales encontraron?',
        options: [
          { id: 'a', text: 'Peces bocachicos y bagres del río Magdalena analizando las dinámicas del territorio.', feedback: '🔎 Vuelve al texto: se mencionan reptiles específicos de agua dulce.' },
          { id: 'b', text: 'Icoteas o galápagos en el hábitat.', isCorrect: true, feedback: '🌿 ¡Correcto! El texto nombra de manera explícita icoteas o galápagos.' },
          { id: 'c', text: 'Chigüiros y nutrias de río que forma parte integral de la dinámica de los ecosistemas locales dentro del marco del equilibrio natural.', feedback: '🔎 Lee con atención la primera oración del caso.' },
          { id: 'd', text: 'Aves migratorias de la ciénaga afectando la capacidad de regeneración de las zonas intervenidas dentro del marco del equilibrio natural.', feedback: '🔎 El texto habla de galápagos o icoteas.' }
        ],
        pedagogicalTip: 'La respuesta está en la primera línea de la lectura.'
      },
      {
        id: 'm2_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Dónde estaban siendo capturados?',
        options: [
          { id: 'a', text: 'En una ciénaga.', isCorrect: true, feedback: '🌿 ¡Exacto! Los hechos ocurren en un ecosistema cenagoso.' },
          { id: 'b', text: 'En la plaza central de mercado desde una perspectiva de conservación.', feedback: '🔎 ¿En qué lugar natural los hallaron los Guardianes?' },
          { id: 'c', text: 'En un zoocriadero certificado por el gobierno según los principios de ecología básica.', feedback: '🔎 Revisa el texto: estaban capturándolos libremente en la naturaleza.' },
          { id: 'd', text: 'En un laboratorio de biología marina según los principios de ecología básica.', feedback: '🔎 El texto sitúa el caso en una ciénaga.' }
        ],
        pedagogicalTip: 'Identifica el escenario geográfico en el primer enunciado.'
      },
      {
        id: 'm2_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué tipo de individuos preocupó especialmente a los Guardianes?',
        options: [
          { id: 'a', text: 'Los machos más pequeños recién nacidos dentro del marco del equilibrio natural.', feedback: '🔎 Observa la segunda oración: ¿a quiénes se destaca?' },
          { id: 'b', text: 'Las hembras adultas en el contexto de las problemáticas de conservación identificadas.', isCorrect: true, feedback: '🌿 ¡Muy bien! El texto resalta que había hembras adultas reproductoras.' },
          { id: 'c', text: 'Las aves rapaces que sobrevolaban la ciénaga analizando las dinámicas del territorio.', feedback: '🔎 Concéntrate en los individuos capturados.' },
          { id: 'd', text: 'Los animales enfermos o con caparazón roto desde una perspectiva de conservación.', feedback: '🔎 El texto especifica: "Entre los animales había hembras adultas".' }
        ],
        pedagogicalTip: 'Localiza la mención del tipo biológico de individuo en el segundo enunciado.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm2_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué capturar hembras reproductoras puede tener efectos sobre las generaciones futuras?',
        options: [
          { id: 'a', text: 'Porque las hembras son las encargadas de desovar y garantizar el nacimiento de las nuevas crías en el humedal en el contexto de las problemáticas de conservación identificadas.', isCorrect: true, feedback: '🌿 ¡Deducción impecable! Cada hembra extraída interrumpe cientos de posibles nacimientos futuros.' },
          { id: 'b', text: 'Porque las hembras adultas son las únicas que saben nadar contra la corriente analizando las dinámicas del territorio.', feedback: '🔎 Enfócate en el significado de "reproducción" y "nuevas generaciones".' },
          { id: 'c', text: 'Porque sin hembras los huevos se pudren en los árboles analizando las dinámicas del territorio.', feedback: '🔎 Recuerda que las icoteas anidan en la tierra o arena de las riberas.' },
          { id: 'd', text: 'Porque el caparazón de la hembra atrae la lluvia a la ciénaga en el contexto de las problemáticas de conservación identificadas vinculado a las alteraciones de los ciclos biológicos naturales considerando las interacciones bióticas.', feedback: '🔎 Conecta el concepto biológico con la estabilidad poblacional.' }
        ],
        pedagogicalTip: 'Infiere cómo la falta de nacimientos merma la población con el paso del tiempo.'
      },
      {
        id: 'm2_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Qué puede ocurrir si la cantidad de animales capturados supera la capacidad de reproducción de la población?',
        options: [
          { id: 'a', text: 'La población sufrirá un declive progresivo hasta el colapso o extinción local de la zona.', isCorrect: true, feedback: '🌿 ¡Excelente análisis! Cuando la tasa de extracción supera a la tasa de natalidad, la población decae.' },
          { id: 'b', text: 'La ciénaga se congelará por falta de calor biológico según los principios de ecología básica.', feedback: '🔎 Analiza el balance entre tasa de pérdida y tasa de reemplazo poblacional.' },
          { id: 'c', text: 'Las icoteas aprenderán a poner huevos bajo el agua para esconderse como un factor relevante en la cadena trófica del hábitat dentro del marco del equilibrio natural.', feedback: '🔎 Piensa en las consecuencias biológicas reales sobre el número de individuos.' },
          { id: 'd', text: 'Los peces reemplazarán genéticamente a los galápagos afectando la capacidad de regeneración de las zonas intervenidas dentro del marco del equilibrio natural.', feedback: '🔎 Evalúa qué sucede numéricamente con una especie sometida a sobreexplotación.' }
        ],
        pedagogicalTip: 'Aplica el balance matemático natural: extracción mayor a natalidad = reducción.'
      },
      {
        id: 'm2_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Qué relación existe entre cacería y recuperación poblacional?',
        options: [
          { id: 'a', text: 'Una cacería excesiva y desregulada dificulta o anula la capacidad natural de la especie para recuperarse.', isCorrect: true, feedback: '🌿 ¡Pista descifrada! La capacidad biológica de regeneración tiene límites que la cacería continua desborda.' },
          { id: 'b', text: 'La cacería acelera la recuperación porque nacen el triple de tortugas inmediatamente lo que evidencia una alteración de los recursos disponibles desde una perspectiva de conservación.', feedback: '🔎 El texto aclara que la recuperación puede hacerse "más difícil".' },
          { id: 'c', text: 'No existe relación ya que la naturaleza es infinita e inmune al ser humano lo que evidencia una alteración de los recursos disponibles dentro del marco del equilibrio natural.', feedback: '🔎 Revisa la última frase del texto sobre los límites de recuperación.' },
          { id: 'd', text: 'La recuperación de una población solo depende de los pescadores del río asociado a los impactos ambientales en la región descrita dentro del marco del equilibrio natural.', feedback: '🔎 Relaciona el ritmo de captura humana con los ciclos biológicos de maduración.' }
        ],
        pedagogicalTip: 'Relaciona la velocidad de extracción humana con la lentitud de los ciclos de reproducción natural.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm2_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué decisión debería tomar un Guardián ante esta situación?',
        options: [
          { id: 'a', text: 'Promover acuerdos comunitarios de veda, proteger las áreas de desove y sensibilizar sobre la liberación de hembras fértiles.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! Construye gobernanza comunitaria y protege el ciclo vital.' },
          { id: 'b', text: 'Apropiarse de los animales para venderlos a un precio más alto en la ciudad según los principios de ecología básica.', feedback: '🔎 Un Guardián del Bosque vela por la integridad del ecosistema, no por el lucro.' },
          { id: 'c', text: 'Destruir todas las canoas del humedal durante la noche sin hablar con nadie considerando las interacciones bióticas.', feedback: '🔎 El diálogo y los acuerdos comunitarios son la base de la conservación duradera.' },
          { id: 'd', text: 'No intervenir porque el bienestar de los animales acuáticos no afecta el territorio desde una perspectiva de conservación.', feedback: '🔎 Todo en la ciénaga está conectado; el Guardián tiene una misión de custodia.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Valora medidas de concertación comunitaria como vedas y protección de nidadas.'
      },
      {
        id: 'm2_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué alternativas podrían disminuir la presión de caza sobre las icoteas?',
        options: [
          { id: 'a', text: 'Diversificar las fuentes de proteína comunitaria con piscicultura sostenible, zoocría legal regulada y agricultura familiar relacionado con el equilibrio biológico del área de estudio.', isCorrect: true, feedback: '🌿 ¡Excelente propuesta! Da alternativas reales de seguridad alimentaria a la comunidad.' },
          { id: 'b', text: 'Obligar a la comunidad a consumir únicamente productos procesados traídos del exterior desde una perspectiva de conservación.', feedback: '🔎 Las alternativas deben ser accesibles, locales y sostenibles.' },
          { id: 'c', text: 'Drenar la ciénaga para que las tortugas se vayan a otro departamento considerando las interacciones bióticas.', feedback: '🔎 Destruir el humedal causaría un desastre ecológico total.' },
          { id: 'd', text: 'Aumentar la captura a toda hora para acabarlas antes de que termine el mes como un factor relevante en la cadena trófica del hábitat que forma parte integral de la dinámica de los ecosistemas locales analizando las dinámicas del territorio.', feedback: '🔎 Eso provocaría la extinción inmediata de la especie en el humedal.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Propón alternativas realistas de soberanía alimentaria comunitaria.'
      },
      {
        id: 'm2_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué es necesario pensar en las futuras generaciones al tomar decisiones ambientales?',
        options: [
          { id: 'a', text: 'Porque el bienestar de los hijos y nietos de la región dependerá de que los ecosistemas sigan vivos y prestando servicios a nivel local.', isCorrect: true, feedback: '🌿 ¡Postura ética profunda! La sostenibilidad significa no agotar hoy lo que otros necesitarán mañana.' },
          { id: 'b', text: 'Porque está de moda hablar del futuro en los discursos políticos desde una perspectiva de conservación.', feedback: '🔎 El sentido pedagógico radica en la responsabilidad intergeneracional real.' },
          { id: 'c', text: 'Para que los jóvenes del futuro no tengan que estudiar ciencias naturales en el contexto de las problemáticas de conservación identificadas según los registros de observación del entorno natural según los principios de ecología básica.', feedback: '🔎 Reflexiona sobre la justicia ambiental y el acceso a recursos naturales sanos.' },
          { id: 'd', text: 'No es necesario pensar en el futuro, solo importa el beneficio económico de hoy lo que evidencia una alteración de los recursos disponibles en el contexto de las problemáticas de conservación identificadas desde una perspectiva de conservación.', feedback: '🔎 Ese pensamiento cortoplacista es el que genera los desastres ecológicos actuales.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Fundamenta el concepto de justicia intergeneracional y sostenibilidad ecológica.'
      }
    ],
    environmentalChallenge: {
      title: 'Esquema Causal: Pérdida de Reproductoras',
      instruction: 'Representa mediante un esquema cómo la captura de individuos reproductores puede afectar las generaciones futuras.',
      type: 'schema',
      fields: [
        { id: 'step1', label: '1. Causa Inicial (Acción humana en la ciénaga)', placeholder: 'Ej. Captura continua de hembras adultas de icotea durante época de desove...', type: 'text' },
        { id: 'step2', label: '2. Efecto Inmediato (En la población reproductora)', placeholder: 'Ej. Disminución drástica de hembras fértiles capaces de poner huevos en los playones...', type: 'text' },
        { id: 'step3', label: '3. Efecto a Mediano Plazo (Nuevas generaciones)', placeholder: 'Ej. Menos crías y juveniles; la población empieza a envejecer y no hay reemplazo...', type: 'text' },
        { id: 'step4', label: '4. Consecuencia Final para el Ecosistema', placeholder: 'Ej. Colapso de la especie en la ciénaga y pérdida del equilibrio biológico del humedal...', type: 'text' }
      ]
    }
  },
  {
    id: 3,
    slug: 'cuando-cada-animal-cuenta',
    title: 'Cuando cada animal cuenta',
    icon: '🐗',
    badgeName: 'Rastreador de Fauna',
    badgeDescription: 'Comprendió el valor individual y poblacional de mamíferos y aves silvestres frente a la cacería repetida.',
    territoryZone: 'Bosque y Sabana',
    conflictSummary: 'Rastros de cacería reiterada sobre chigüiros, pisingos y mamíferos medianos en pastizales y bosques ribereños.',
    arrivalContext: 'Avanzas por la transición entre la sabana inundable y el bosque ripario. El suelo húmedo conserva huellas de pezuñas y almohadillas, pero también cartuchos usados y senderos trillados de cazadores.',
    observationDetails: {
      spotlightTitle: 'Señales en el barro y la vegetación',
      details: [
        'Huellas características de chigüiro y pisingo en las orillas fangosas.',
        'Matorrales pisoteados con marcas de trampas de lazo y restos de perdigones.',
        'Manadas reducidas a unos pocos ejemplares solitarios y desconfiados.'
      ],
      environmentalAspects: [
        'Organización social y defensa comunitaria en manadas de chigüiros.',
        'Función de herbivoría y moldeado de pastizales naturales.',
        'Límite de capacidad de carga poblacional.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `Durante un recorrido aparecieron huellas y señales de chigüiros, pisingos y pequeños mamíferos. También encontraron evidencias de cacería. Los Guardianes entendieron que cada animal cazado representa un individuo menos, pero que el efecto puede ser mayor cuando la extracción ocurre repetidamente. Una población necesita suficientes individuos, incluidos reproductores, para mantener sus ciclos de vida.`,
    readingWordCount: 56,
    literalQuestions: [
      {
        id: 'm3_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué animales aparecen en el texto?',
        options: [
          { id: 'a', text: 'Chigüiros, pisingos y pequeños mamíferos.', isCorrect: true, feedback: '🌿 ¡Correcto! Esas son exactamente las especies mencionadas en la primera oración.' },
          { id: 'b', text: 'Jaguares, serpientes y osos perezosos en el contexto de las problemáticas de conservación identificadas según los principios de ecología básica.', feedback: '🔎 Revisa el inicio del texto: ¿de qué animales hallaron huellas?' },
          { id: 'c', text: 'Perros y gatos callejeros afectando la capacidad de regeneración de las zonas intervenidas analizando las dinámicas del territorio.', feedback: '🔎 Fíjate en los animales silvestres mencionados en el recorrido.' },
          { id: 'd', text: 'Bocachicos y mojarras de agua dulce según los registros de observación del entorno natural según los principios de ecología básica.', feedback: '🔎 Revisa la primera frase del texto.' }
        ],
        pedagogicalTip: 'La lista de fauna aparece al inicio del texto.'
      },
      {
        id: 'm3_l2',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué actividad encontraron los Guardianes?',
        options: [
          { id: 'a', text: 'Evidencias de cacería asociado a los impactos ambientales en la región descrita.', isCorrect: true, feedback: '🌿 ¡Exacto! El texto afirma literalmente: "También encontraron evidencias de cacería".' },
          { id: 'b', text: 'Excavación de pozos petroleros analizando las dinámicas del territorio.', feedback: '🔎 Localiza la actividad humana específica descrita en el segundo enunciado.' },
          { id: 'c', text: 'Turismo ecológico fotográfico guiado desde una perspectiva de conservación.', feedback: '🔎 Vuelve al texto: se encontraron rastros de extracción de fauna.' },
          { id: 'd', text: 'Construcción de una autopista pavimentada según los principios de ecología básica.', feedback: '🔎 Lee la segunda frase del caso.' }
        ],
        pedagogicalTip: 'Observa la segunda oración de la lectura.'
      },
      {
        id: 'm3_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué representa cada animal cazado para la población?',
        options: [
          { id: 'a', text: 'Representa un individuo menos, con un efecto mayor cuando la extracción ocurre repetidamente según los registros de observación del entorno natural.', isCorrect: true, feedback: '🌿 ¡Muy bien! Has identificado la cita textual exacta del texto.' },
          { id: 'b', text: 'Representa más espacio y alimento abundante para los demás según los principios de ecología básica.', feedback: '🔎 El autor recalca que disminuye el número necesario para los ciclos de vida.' },
          { id: 'c', text: 'Representa una mejora en la genética de la manada desde una perspectiva de conservación.', feedback: '🔎 Revisa la tercera oración del texto.' },
          { id: 'd', text: 'No representa ningún cambio cuantificable que forma parte integral de la dinámica de los ecosistemas locales asociado a los impactos ambientales en la región descrita según los principios de ecología básica.', feedback: '🔎 El texto destaca que cada individuo cuenta dentro del grupo.' }
        ],
        pedagogicalTip: 'Identifica la explicación en la tercera frase del texto.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm3_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué la cacería repetida puede reducir una población?',
        options: [
          { id: 'a', text: 'Porque la tasa de mortalidad constante supera el tiempo natural necesario para que nazcan y crezcan nuevos ejemplares del territorio.', isCorrect: true, feedback: '🌿 ¡Exacto! La extracción continua desangra la estructura demográfica de la población.' },
          { id: 'b', text: 'Porque los animales deciden no alimentarse por tristeza dentro del marco del equilibrio natural.', feedback: '🔎 Piensa en la relación matemática entre nacimientos y muertes continuas.' },
          { id: 'c', text: 'Porque los cazadores se quedan a vivir en las cuevas de los animales como un factor relevante en la cadena trófica del hábitat en el contexto de las problemáticas de conservación identificadas según los principios de ecología básica.', feedback: '🔎 Infiere a partir del impacto acumulativo de la extracción repetida.' },
          { id: 'd', text: 'Porque el olor a pólvora cambia el clima de la región Caribe asociado a los impactos ambientales en la región descrita como un factor relevante en la cadena trófica del hábitat analizando las dinámicas del territorio.', feedback: '🔎 Evalúa el impacto biológico sobre el tamaño numérico de la población.' }
        ],
        pedagogicalTip: 'Analiza el efecto acumulativo: una extracción repetida no da tregua al ciclo biológico.'
      },
      {
        id: 'm3_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Qué puede ocurrir si se cazan muchos individuos reproductores?',
        options: [
          { id: 'a', text: 'Se rompe el ciclo de reemplazo generacional y la población colapsa por falta de crías.', isCorrect: true, feedback: '🌿 ¡Gran análisis! Los reproductores son el motor del futuro biológico de cualquier especie.' },
          { id: 'b', text: 'Los animales juveniles aprenden a poner huevos sin necesidad de adultos asociado a los impactos ambientales en la región descrita desde una perspectiva de conservación.', feedback: '🔎 Recuerda que los mamíferos necesitan adultos maduros para concebir y cuidar a las crías.' },
          { id: 'c', text: 'Aumenta el número de árboles maderables en la ribera afectando la capacidad de regeneración de las zonas intervenidas analizando las dinámicas del territorio.', feedback: '🔎 Concéntrate en el destino de la especie afectada.' },
          { id: 'd', text: 'Los cazadores son premiados automáticamente por el municipio asociado a los impactos ambientales en la región descrita analizando las dinámicas del territorio.', feedback: '🔎 Revisa las consecuencias biológicas deducidas del texto.' }
        ],
        pedagogicalTip: 'Vincula la pérdida de machos y hembras maduros con la natalidad.'
      },
      {
        id: 'm3_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué la capacidad de recuperación no es ilimitada?',
        options: [
          { id: 'a', text: 'Porque cada especie tiene tiempos biológicos fijos de gestación, crecimiento y límites de recursos en su hábitat.', isCorrect: true, feedback: '🌿 ¡Exacto! La biología no es instantánea; tiene ritmos y límites que la presión humana puede agotar.' },
          { id: 'b', text: 'Porque la luna llena solo ocurre una vez cada dos años analizando las dinámicas del territorio.', feedback: '🔎 Piensa en los factores biológicos que limitan la velocidad con que una especie tiene crías.' },
          { id: 'c', text: 'Porque los animales prefieren descansar en vez de reproducirse analizando las dinámicas del territorio.', feedback: '🔎 Considera los ciclos naturales de gestación y maduración.' },
          { id: 'd', text: 'Porque los científicos controlan el número exacto desde computadores considerando las interacciones bióticas.', feedback: '🔎 Reflexiona sobre los límites naturales de los ecosistemas vivos.' }
        ],
        pedagogicalTip: 'Reflexiona: los seres vivos tardan meses en gestar y crecer; no se multiplican por arte de magia.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm3_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué medidas propondrías?',
        options: [
          { id: 'a', text: 'Establecer calendarios de no cacería (vedas), monitoreo comunitario de huellas y protección estricta de hembras con crías afectando la capacidad de regeneración de las zonas intervenidas.', isCorrect: true, feedback: '🌿 ¡Propuesta excelente! Combina ciencia ciudadana, acuerdos locales y respeto ecológico.' },
          { id: 'b', text: 'Repartir más armas y trampas automáticas para agilizar la cacería dentro del marco del equilibrio natural.', feedback: '🔎 Esa medida agravaría el conflicto y extinguiría a la fauna.' },
          { id: 'c', text: 'Cercar todo el territorio con rejas eléctricas de alto voltaje según los principios de ecología básica.', feedback: '🔎 Las rejas fragmentan el hábitat y lesionan a todas las especies silvestres.' },
          { id: 'd', text: 'No hacer nada porque los animales no sienten dolor ni tienen importancia como un factor relevante en la cadena trófica del hábitat en el contexto de las problemáticas de conservación identificadas según los principios de ecología básica.', feedback: '🔎 Toda especie cumple un rol esencial en el equilibrio del territorio.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Plantea medidas consensuadas de manejo de fauna silvestre y vigilancia comunitaria.'
      },
      {
        id: 'm3_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Cómo podría participar la comunidad?',
        options: [
          { id: 'a', text: 'Formando comités de Guardianes Comunitarios, vigilando sus sabanas e intercambiando experiencias de conservación y ecoturismo del territorio.', isCorrect: true, feedback: '🌿 ¡Muy bien! La comunidad es el verdadero custodio permanente del territorio.' },
          { id: 'b', text: 'Vendiendo la carne de monte ilegalmente en mercados clandestinos desde una perspectiva de conservación.', feedback: '🔎 La participación comunitaria debe orientarse a la protección y la sostenibilidad.' },
          { id: 'c', text: 'Abandonando sus casas para que el bosque crezca solo como un factor relevante en la cadena trófica del hábitat según los registros de observación del entorno natural dentro del marco del equilibrio natural.', feedback: '🔎 Las personas y la naturaleza pueden coexistir en equilibrio mediante prácticas conscientes.' },
          { id: 'd', text: 'Denunciando únicamente a los niños de la escuela según los registros de observación del entorno natural relacionado con el equilibrio biológico del área de estudio dentro del marco del equilibrio natural.', feedback: '🔎 La responsabilidad comunitaria compromete a adultos, familias e instituciones.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Enfoca la participación en la apropiación social, el conocimiento local y la vigilancia compartida.'
      },
      {
        id: 'm3_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué proteger una población requiere pensar más allá de un solo individuo?',
        options: [
          { id: 'a', text: 'Porque la supervivencia de la especie depende del tamaño grupal, la diversidad genética y las relaciones del conjunto.', isCorrect: true, feedback: '🌿 ¡Pensamiento ecológico superior! Un animal aislado no hace futuro; se necesita una población sana.' },
          { id: 'b', text: 'Porque un solo animal no alcanza para alimentar a un pueblo entero que forma parte integral de la dinámica de los ecosistemas locales desde una perspectiva de conservación.', feedback: '🔎 Piensa desde la ecología de poblaciones y la conservación biológica.' },
          { id: 'c', text: 'Porque los animales siempre viajan en fila india para no perderse lo que evidencia una alteración de los recursos disponibles que forma parte integral de la dinámica de los ecosistemas locales según los principios de ecología básica.', feedback: '🔎 Valora la estructura genética y demográfica que sustenta a la especie.' },
          { id: 'd', text: 'No se necesita pensar en el grupo, cada individuo vive totalmente separado de los demás en el contexto de las problemáticas de conservación identificadas analizando las dinámicas del territorio.', feedback: '🔎 Recuerda el concepto de manada, ciclos reproductivos y dinámica poblacional.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Sustenta la diferencia entre la mirada individualista y la mirada ecológica y sistémica.'
      }
    ],
    environmentalChallenge: {
      title: 'Mensaje a la Comunidad: Cada Individuo Cuenta',
      instruction: 'Crea un mensaje para la comunidad explicando por qué cada individuo cuenta para mantener una población.',
      type: 'message',
      fields: [
        { id: 'header', label: 'Lema del Mensaje', placeholder: 'Ej. En nuestras sabanas y bosques, ¡cada huella cuenta!', type: 'text' },
        { id: 'targetGroup', label: 'Público objetivo', placeholder: 'Pobladores rurales, cazadores y familias del municipio...', type: 'text' },
        { id: 'bodyText', label: 'Mensaje argumentativo fundamentado en la lectura', placeholder: 'Explica con tus palabras por qué cazar repetidamente rompe el ciclo de vida de chigüiros y mamíferos...', type: 'textarea' },
        { id: 'commitment', label: 'Compromiso o acuerdo sugerido', placeholder: '¿Qué acuerdo de protección propones para respetar los ciclos reproductivos?', type: 'textarea' }
      ]
    }
  },
  {
    id: 4,
    slug: 'el-jaguar-que-salio-del-bosque',
    title: 'El jaguar que salió del bosque',
    icon: '🐆',
    badgeName: 'Defensor de los Depredadores',
    badgeDescription: 'Comprendió las causas de los conflictos humano-fauna vinculados a la fragmentación de hábitats y la escasez de presas.',
    territoryZone: 'Bosque y Sabana',
    conflictSummary: 'Acercamiento de un jaguar a una finca ganadera tras la fragmentación de su bosque y la reducción de sus presas naturales.',
    arrivalContext: 'Llegas al lindero entre un remanente boscoso y una finca ganadera. El alambre de púas divide árboles talados recientes de pastizales con terneros. Hay tensión en los trabajadores de la finca.',
    observationDetails: {
      spotlightTitle: 'Señales en el lindero de la finca',
      details: [
        'Parches de bosque aislados sin corredores biológicos conectados.',
        'Escasez de venados, saínos y presas naturales en el sotobosque.',
        'Huellas profundas de felino grande cerca del corral ganadero.'
      ],
      environmentalAspects: [
        'Territorialidad amplia de los grandes depredadores tope.',
        'Efecto de borde y fragmentación del paisaje vegetal.',
        'Riesgo de cacería por represalia ante pérdida de ganado.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `Un jaguar comenzó a acercarse a una finca donde había ganado. Algunas personas querían perseguirlo o matarlo. Los Guardianes encontraron que alrededor del territorio habían desaparecido zonas de vegetación y que el hábitat estaba fragmentado. También había menos presas naturales. El conflicto no podía analizarse solamente desde el punto de vista del animal o del ganadero: había que comprender los cambios del territorio que habían contribuido a acercar a ambos.`,
    readingWordCount: 71,
    literalQuestions: [
      {
        id: 'm4_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué animal llegó a la finca?',
        options: [
          { id: 'a', text: 'Un jaguar lo que evidencia una alteración de los recursos disponibles.', isCorrect: true, feedback: '🌿 ¡Correcto! El texto menciona explícitamente al jaguar.' },
          { id: 'b', text: 'Un puma de montaña dentro del marco del equilibrio natural.', feedback: '🔎 Revisa la primera palabra del texto.' },
          { id: 'c', text: 'Un caimán aguja según los principios de ecología básica.', feedback: '🔎 Vuelve al texto: se trata del gran felino americano.' },
          { id: 'd', text: 'Un zorro cangrejero considerando las interacciones bióticas.', feedback: '🔎 El texto habla de un jaguar que se acercó a la finca.' }
        ],
        pedagogicalTip: 'La respuesta está en la primera oración del caso.'
      },
      {
        id: 'm4_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué actividad humana estaba siendo afectada?',
        options: [
          { id: 'a', text: 'La ganadería (finca donde había ganado) afectando la capacidad de regeneración de las zonas intervenidas.', isCorrect: true, feedback: '🌿 ¡Exacto! El ganado de la finca era el elemento vulnerable.' },
          { id: 'b', text: 'La pesca artesanal en el muelle según los principios de ecología básica.', feedback: '🔎 ¿Qué actividad se menciona que había en la finca?' },
          { id: 'c', text: 'La minería de oro y aluvión analizando las dinámicas del territorio.', feedback: '🔎 Lee la primera oración: habla de una finca con ganado.' },
          { id: 'd', text: 'La recolección de café en la cordillera lo que evidencia una alteración de los recursos disponibles afectando la capacidad de regeneración de las zonas intervenidas dentro del marco del equilibrio natural.', feedback: '🔎 Concéntrate en la actividad productiva mencionada en el texto.' }
        ],
        pedagogicalTip: 'Identifica la actividad productiva en la finca.'
      },
      {
        id: 'm4_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué cambios encontraron los Guardianes en el territorio?',
        options: [
          { id: 'a', text: 'Desaparición de zonas de vegetación, hábitat fragmentado y menos presas naturales de la zona.', isCorrect: true, feedback: '🌿 ¡Muy bien! Esos tres cambios explícitos fueron detectados en el territorio.' },
          { id: 'b', text: 'Llegada de carreteras pavimentadas con peajes modernos según los principios de ecología básica.', feedback: '🔎 Revisa la tercera y cuarta oración sobre los cambios ambientales.' },
          { id: 'c', text: 'Inundaciones provocadas por un huracán marino relacionado con el equilibrio biológico del área de estudio desde una perspectiva de conservación.', feedback: '🔎 El texto destaca la pérdida de vegetación y fragmentación.' },
          { id: 'd', text: 'Aparición espontánea de nuevas selvas vírgenes relacionado con el equilibrio biológico del área de estudio según los principios de ecología básica.', feedback: '🔎 Vuelve a leer qué pasó con la vegetación alrededor.' }
        ],
        pedagogicalTip: 'Localiza los tres factores ambientales alterados en la tercera y cuarta línea.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm4_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué la transformación del hábitat puede favorecer encuentros entre jaguares y ganado?',
        options: [
          { id: 'a', text: 'Porque al talar el bosque y cercar potreros, las rutas de los jaguares coinciden forzosamente con las zonas donde pasta el ganado.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! El ser humano redujo el espacio natural del felino superponiendo sus límites.' },
          { id: 'b', text: 'Porque los jaguares prefieren la carne con sal que comen las vacas relacionado con el equilibrio biológico del área de estudio con consecuencias en la estructura demográfica de las especies según los principios de ecología básica.', feedback: '🔎 Analiza la pérdida de espacio boscoso y la cercanía obligada.' },
          { id: 'c', text: 'Porque el ganado llama a los jaguares con mugidos nocturnos relacionado con el equilibrio biológico del área de estudio que forma parte integral de la dinámica de los ecosistemas locales dentro del marco del equilibrio natural.', feedback: '🔎 Reflexiona sobre la reducción del hábitat y la fragmentación territorial.' },
          { id: 'd', text: 'Porque los árboles caídos hacen que el jaguar no pueda caminar en el bosque asociado a los impactos ambientales en la región descrita según los registros de observación del entorno natural considerando las interacciones bióticas.', feedback: '🔎 Conecta la transformación del paisaje con la superposición de territorios.' }
        ],
        pedagogicalTip: 'Relaciona la pérdida de selva con la coincidencia espacial involuntaria entre felino y ganado.'
      },
      {
        id: 'm4_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Qué relación existe entre la disminución de presas y el comportamiento del depredador?',
        options: [
          { id: 'a', text: 'Al escasear sus presas naturales en el bosque, el depredador busca fuentes alternativas de alimento como los animales domésticos.', isCorrect: true, feedback: '🌿 ¡Pista inferencial clave! El hambre y la falta de presas silvestres lo empujan a cazar ganado.' },
          { id: 'b', text: 'El jaguar se vuelve vegetariano y busca pasto en los potreros desde una perspectiva de conservación.', feedback: '🔎 Recuerda que el jaguar es un carnívoro estricto.' },
          { id: 'c', text: 'El jaguar duerme más tiempo para no gastar energía analizando las dinámicas del territorio.', feedback: '🔎 Piensa en la necesidad biológica de alimentarse para sobrevivir.' },
          { id: 'd', text: 'El jaguar busca compañía humana para no sentirse solo considerando las interacciones bióticas.', feedback: '🔎 Evalúa el comportamiento trófico forzado por la falta de alimento salvaje.' }
        ],
        pedagogicalTip: 'Piensa en la pirámide trófica: sin saínos ni venados, el felino busca lo disponible para no morir de inanición.'
      },
      {
        id: 'm4_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué eliminar un jaguar no necesariamente resuelve las causas del conflicto?',
        options: [
          { id: 'a', text: 'Porque las causas estructurales (bosque talado, hábitat fragmentado y falta de presas) continúan y otro jaguar ocupará el territorio con consecuencias en la estructura demográfica de las especies.', isCorrect: true, feedback: '🌿 ¡Brillante deducción ecológica! Matar al individuo no arregla el territorio desequilibrado.' },
          { id: 'b', text: 'Porque la piel del jaguar no se puede vender legalmente según los principios de ecología básica.', feedback: '🔎 Analiza las causas profundas del conflicto señaladas en el texto.' },
          { id: 'c', text: 'Porque los jaguares reviven mágicamente después de tres semanas considerando las interacciones bióticas.', feedback: '🔎 Reflexiona sobre el territorio y la ecología del paisaje.' },
          { id: 'd', text: 'Porque el ganado aprende a cazar en ausencia del felino como un factor relevante en la cadena trófica del hábitat lo que evidencia una alteración de los recursos disponibles que forma parte integral de la dinámica de los ecosistemas locales analizando las dinámicas del territorio.', feedback: '🔎 Considera si eliminar un animal repara el bosque talado.' }
        ],
        pedagogicalTip: 'Distingue entre eliminar un síntoma (un animal) y solucionar la causa raíz (la fragmentación del hábitat).'
      }
    ],
    criticalQuestions: [
      {
        id: 'm4_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué acciones podrían disminuir el conflicto?',
        options: [
          { id: 'a', text: 'Implementar cercas vivas y eléctricas disuasorias, resguardar terneros en corrales nocturnos y restaurar corredores biológicos del territorio.', isCorrect: true, feedback: '🌿 ¡Solución integral y sostenible! Protege la inversión del ganadero y la vida del felino.' },
          { id: 'b', text: 'Envenenar las fuentes de agua donde bebe la fauna silvestre dentro del marco del equilibrio natural.', feedback: '🔎 Envenenar el agua destruiría todo el ecosistema y enfermaría a la comunidad.' },
          { id: 'c', text: 'Talar todo el bosque restante para que no quede ningún animal con consecuencias en la estructura demográfica de las especies relacionado con el equilibrio biológico del área de estudio según los principios de ecología básica.', feedback: '🔎 La deforestación total agrava la desertificación y las sequías.' },
          { id: 'd', text: 'Prohibir a los ganaderos salir de sus casas afectando la capacidad de regeneración de las zonas intervenidas lo que evidencia una alteración de los recursos disponibles considerando las interacciones bióticas.', feedback: '🔎 Las soluciones deben ser justas y viables para la convivencia humana y animal.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Propón medidas técnicas no letales: corrales antidepredatorios, luces y corredores boscosos.'
      },
      {
        id: 'm4_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Cómo equilibrar la protección de la fauna y las necesidades de los productores?',
        options: [
          { id: 'a', text: 'Mediante sistemas silvopastoriles, acuerdos de coexistencia pacífica, apoyo técnico ganadero y compensaciones por conservación.', isCorrect: true, feedback: '🌿 ¡Excelente equilibrio! Integra la productividad rural con la salud del ecosistema.' },
          { id: 'b', text: 'Priorizando únicamente las ganancias inmediatas del ganadero sin importar la extinción relacionado con el equilibrio biológico del área de estudio desde una perspectiva de conservación.', feedback: '🔎 La extinción de depredadores tope desequilibra el ecosistema y genera plagas.' },
          { id: 'c', text: 'Obligando a los ganaderos a regalar todo su ganado a la selva lo que evidencia una alteración de los recursos disponibles como un factor relevante en la cadena trófica del hábitat dentro del marco del equilibrio natural.', feedback: '🔎 El bienestar de las familias rurales también forma parte del territorio sostenible.' },
          { id: 'd', text: 'Ignorando a ambas partes hasta que una de las dos desaparezca relacionado con el equilibrio biológico del área de estudio vinculado a las alteraciones de los ciclos biológicos naturales según los principios de ecología básica.', feedback: '🔎 El Guardián media para construir acuerdos basados en la evidencia.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Busca el punto de encuentro entre la dignidad económica humana y la ética ecológica.'
      },
      {
        id: 'm4_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué es importante analizar las causas antes de actuar?',
        options: [
          { id: 'a', text: 'Porque actuar impulsivamente o con violencia puede empeorar el problema ecológico y social sin resolver la verdadera raíz.', isCorrect: true, feedback: '🌿 ¡Principio fundamental del Guardián! Primero comprender las dinámicas para intervenir con acierto.' },
          { id: 'b', text: 'Para tener tiempo de cobrar honorarios por más reuniones según los principios de ecología básica.', feedback: '🔎 Reflexiona sobre el rigor investigativo y la prudencia ambiental.' },
          { id: 'c', text: 'Porque la ley prohíbe pensar mientras se trabaja en el campo dentro del marco del equilibrio natural.', feedback: '🔎 Comprender las causas evita acciones destructivas e inútiles.' },
          { id: 'd', text: 'No es importante analizar causas, lo que importa es disparar primero desde una perspectiva de conservación.', feedback: '🔎 Esa es justamente la actitud destructiva que el documento cuestiona.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Refuerza la premisa del Guardián: "Comprender antes de intervenir".'
      }
    ],
    environmentalChallenge: {
      title: 'Protocolo de Convivencia: Ganadería y Fauna Silvestre',
      instruction: 'Diseña un pequeño protocolo de convivencia entre productores y fauna silvestre.',
      type: 'protocol',
      fields: [
        { id: 'title', label: 'Nombre del Protocolo de Convivencia', placeholder: 'Ej. Protocolo de Coexistencia Finca Amiga del Jaguar y del Bosque...', type: 'text' },
        { id: 'step1', label: 'Medida 1: Manejo del Ganado y Corrales', placeholder: 'Ej. Encierro nocturno de terneros en corrales iluminados con cercado protegido...', type: 'textarea' },
        { id: 'step2', label: 'Medida 2: Manejo del Hábitat y Bosque', placeholder: 'Ej. Mantener parches de bosque conectados (corredores biológicos) y evitar la cacería de presas naturales...', type: 'textarea' },
        { id: 'step3', label: 'Medida 3: Qué hacer ante un avistamiento', placeholder: 'Ej. No disparar ni perseguir; activar alarmas de sonido disuasorio y reportar a la autoridad ambiental...', type: 'textarea' }
      ]
    }
  },
  {
    id: 5,
    slug: 'una-familia-un-loro-y-una-pregunta-dificil',
    title: 'Una familia, un loro y una pregunta difícil',
    icon: '🦜',
    badgeName: 'Voz de la Fauna',
    badgeDescription: 'Diferenció el cariño individual hacia una mascota silvestre de la problemática ecológica de la extracción y el tráfico de fauna.',
    territoryZone: 'Comunidad y Territorio',
    conflictSummary: 'Tenencia de aves silvestres en viviendas familiares con cariño aparente, ocultando el tráfico de fauna y la demanda que incentiva nuevas capturas.',
    arrivalContext: 'Caminas por un barrio residencial de Magangué. En los patios traseros se escuchan reclamos de loros y pericos desde jaulas colgadas bajo aleros de zinc.',
    observationDetails: {
      spotlightTitle: 'Observaciones en el patio familiar',
      details: [
        'Loro real con plumas recortadas sobre una percha de madera.',
        'Familias que expresan afecto hacia el animal como si fuera un miembro más.',
        'Desconocimiento absoluto del origen del ave: comprada a vendedores ambulantes en la carretera.'
      ],
      environmentalAspects: [
        'Tráfico ilegal de fauna silvestre como motor de extinción.',
        'Mortalidad masiva durante el transporte ilegal de pichones.',
        'Pérdida de la función de dispersión de semillas en la selva.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `Una familia tenía varias aves silvestres en su vivienda. Decían quererlas y cuidarlas. Los Guardianes preguntaron de dónde habían llegado. Algunas habían sido capturadas o adquiridas sin que existiera información clara sobre su procedencia. El equipo comprendió que cuando se extraen animales silvestres para convertirlos en mascotas, también puede existir una demanda que incentive nuevas capturas. El bienestar de un individuo y la conservación de la especie deben analizarse conjuntamente.`,
    readingWordCount: 71,
    literalQuestions: [
      {
        id: 'm5_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué animales encontraron?',
        options: [
          { id: 'a', text: 'Varias aves silvestres en una vivienda con consecuencias en la estructura demográfica de las especies.', isCorrect: true, feedback: '🌿 ¡Correcto! La primera frase lo dice con total claridad.' },
          { id: 'b', text: 'Perros y gatos de raza analizando las dinámicas del territorio.', feedback: '🔎 Vuelve al texto: se trata de animales silvestres emplumados.' },
          { id: 'c', text: 'Peces ornamentales de acuario marino desde una perspectiva de conservación.', feedback: '🔎 Lee la primera oración de la lectura.' },
          { id: 'd', text: 'Iguanas verdes en jaulas de alambre según los registros de observación del entorno natural como un factor relevante en la cadena trófica del hábitat dentro del marco del equilibrio natural.', feedback: '🔎 El texto habla de aves silvestres.' }
        ],
        pedagogicalTip: 'La respuesta está al inicio del texto.'
      },
      {
        id: 'm5_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué afirmaba la familia?',
        options: [
          { id: 'a', text: 'Que querían y cuidaban a las aves de la zona.', isCorrect: true, feedback: '🌿 ¡Exacto! "Decían quererlas y cuidarlas", indica el texto.' },
          { id: 'b', text: 'Que las tenían listas para vender en el mercado público considerando las interacciones bióticas.', feedback: '🔎 Observa la segunda oración: ¿cuál era la postura de la familia?' },
          { id: 'c', text: 'Que querían liberarlas al día siguiente en el parque natural considerando las interacciones bióticas.', feedback: '🔎 Vuelve a revisar lo que expresaba la familia.' },
          { id: 'd', text: 'Que las aves eran peligrosas y agresivas vinculado a las alteraciones de los ciclos biológicos naturales analizando las dinámicas del territorio.', feedback: '🔎 El texto destaca el afecto expresado por la familia.' }
        ],
        pedagogicalTip: 'Revisa la segunda frase de la lectura.'
      },
      {
        id: 'm5_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué información buscaron los Guardianes?',
        options: [
          { id: 'a', text: 'De dónde habían llegado las aves (su procedencia).', isCorrect: true, feedback: '🌿 ¡Muy bien! Los Guardianes indagaron sobre el origen y procedencia de los animales.' },
          { id: 'b', text: 'El costo económico exacto del alpiste en el supermercado como un factor relevante en la cadena trófica del hábitat considerando las interacciones bióticas.', feedback: '🔎 Fíjate en la pregunta que formularon los Guardianes a la familia.' },
          { id: 'c', text: 'Cuántos huevos ponían a la semana para su consumo con consecuencias en la estructura demográfica de las especies desde una perspectiva de conservación.', feedback: '🔎 Los Guardianes quisieron saber de dónde habían llegado.' },
          { id: 'd', text: 'El nombre científico en latín de las plumas caídas vinculado a las alteraciones de los ciclos biológicos naturales considerando las interacciones bióticas.', feedback: '🔎 El texto menciona: "preguntaron de dónde habían llegado".' }
        ],
        pedagogicalTip: 'Localiza la pregunta de los Guardianes en la tercera línea.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm5_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Cómo puede la demanda de mascotas silvestres incentivar nuevas capturas?',
        options: [
          { id: 'a', text: 'Porque mientras haya personas dispuestas a comprar animales silvestres, habrá traficantes motivados a sacarlos de la selva para obtener dinero.', isCorrect: true, feedback: '🌿 ¡Deducción económica y ecológica certera! Sin demanda no existiría el negocio del tráfico de fauna.' },
          { id: 'b', text: 'Porque las aves enjauladas cantan pidiendo que traigan a sus hermanos analizando las dinámicas del territorio.', feedback: '🔎 Piensa en la relación entre comprador, dinero y cazador furtivo.' },
          { id: 'c', text: 'Porque el gobierno premia a quienes compran loros en la carretera considerando las interacciones bióticas.', feedback: '🔎 Analiza el concepto de "demanda que incentiva nuevas capturas".' },
          { id: 'd', text: 'No tiene influencia; los cazadores atrapan aves sin importar si alguien las compra analizando las dinámicas del territorio.', feedback: '🔎 Reflexiona sobre el estímulo económico que genera el comercio de mascotas.' }
        ],
        pedagogicalTip: 'Aplica el principio de oferta y demanda al tráfico ilegal de fauna.'
      },
      {
        id: 'm5_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué cuidar individualmente a un animal no elimina necesariamente el impacto de su extracción?',
        options: [
          { id: 'a', text: 'Porque ese individuo fue arrancado de su población natural, impidiéndole reproducirse y cumplir su rol ecológico en el bosque lo que evidencia una alteración de los recursos disponibles.', isCorrect: true, feedback: '🌿 ¡Profundo y exacto! Aunque esté bien alimentado en una jaula, la especie y el bosque perdieron un integrante vital.' },
          { id: 'b', text: 'Porque los animales cuidados en casa crecen el doble y no caben en la sala desde una perspectiva de conservación.', feedback: '🔎 Distingue entre el bienestar del individuo y el impacto sobre la especie y el hábitat.' },
          { id: 'c', text: 'Porque las aves bien cuidadas contagian de tristeza a las plantas del jardín desde una perspectiva de conservación.', feedback: '🔎 Evalúa la función de dispersión y reproducción que el ave ya no puede realizar en la selva.' },
          { id: 'd', text: 'Porque el cariño humano es dañino biológicamente para las plumas afectando la capacidad de regeneración de las zonas intervenidas vinculado a las alteraciones de los ciclos biológicos naturales con consecuencias en la estructura demográfica de las especies considerando las interacciones bióticas.', feedback: '🔎 Analiza la frase final: el bienestar individual vs la conservación de la especie.' }
        ],
        pedagogicalTip: 'Distingue entre el afecto a un animal cautivo y el daño ecológico sufrido por el ecosistema de donde fue arrancado.'
      },
      {
        id: 'm5_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Qué relación existe entre la captura de individuos y las poblaciones naturales?',
        options: [
          { id: 'a', text: 'La captura sostenida disminuye la densidad poblacional silvestre y puede llevar a la extinción local de las especies de la zona.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! Cada animal retirado debilita la viabilidad de la población natural.' },
          { id: 'b', text: 'La captura permite que el bosque esté más limpio y ordenado analizando las dinámicas del territorio.', feedback: '🔎 Revisa cómo la sustracción de ejemplares altera los ecosistemas.' },
          { id: 'c', text: 'Las poblaciones naturales crecen más rápido cuando se capturan sus miembros según los registros de observación del entorno natural como un factor relevante en la cadena trófica del hábitat dentro del marco del equilibrio natural.', feedback: '🔎 Todo lo contrario: la extracción diezma el número de reproductores.' },
          { id: 'd', text: 'No existe relación, la selva no se entera de lo que ocurre en las casas relacionado con el equilibrio biológico del área de estudio asociado a los impactos ambientales en la región descrita considerando las interacciones bióticas.', feedback: '🔎 Todos los animales de compañía silvestre provinieron de algún hábitat natural intervenido.' }
        ],
        pedagogicalTip: 'Vincula la sustracción continua de aves con el despoblamiento de los bosques.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm5_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué debería hacer una persona que posee fauna silvestre?',
        options: [
          { id: 'a', text: 'Asesorarse con la autoridad ambiental (como la corporación autónoma regional) para evaluar su rehabilitación o manejo ético sin liberarla bruscamente.', isCorrect: true, feedback: '🌿 ¡Conducta responsable! No liberarla sin protocolo veterinario para no condenarla a morir, buscando ayuda especializada.' },
          { id: 'b', text: 'Soltarla inmediatamente en cualquier calle de la ciudad sin saber si puede volar o comer sola lo que evidencia una alteración de los recursos disponibles como un factor relevante en la cadena trófica del hábitat dentro del marco del equilibrio natural.', feedback: '🔎 Un animal criado en cautiverio puede morir rápidamente si se libera sin un proceso técnico de rehabilitación.' },
          { id: 'c', text: 'Esconderla en un sótano para que nadie se dé cuenta y comprar otra ave lo que evidencia una alteración de los recursos disponibles afectando la capacidad de regeneración de las zonas intervenidas considerando las interacciones bióticas.', feedback: '🔎 El objetivo es corregir el problema y no seguir estimulando el tráfico.' },
          { id: 'd', text: 'Venderla al vecino más cercano para ganar dinero con consecuencias en la estructura demográfica de las especies como un factor relevante en la cadena trófica del hábitat según los principios de ecología básica.', feedback: '🔎 Venderla perpetúa el delito y el maltrato hacia la fauna.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Enfatiza la entrega voluntaria a autoridades ambientales y los procesos científicos de rehabilitación.'
      },
      {
        id: 'm5_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Cómo podría promoverse la tenencia responsable sin incentivar la captura?',
        options: [
          { id: 'a', text: 'Educando sobre animales propiamente domésticos (perros y gatos que requieren hogar) y dejando claro que los animales silvestres pertenecen a la libertad.', isCorrect: true, feedback: '🌿 ¡Claridad pedagógica ejemplar! Separar claramente lo doméstico de lo silvestre protege a ambas partes.' },
          { id: 'b', text: 'Permitiendo que cada niño capture un loro al año de premio escolar considerando las interacciones bióticas.', feedback: '🔎 Eso fomentaría la destrucción directa de los nidos de fauna nativa.' },
          { id: 'c', text: 'Prohibiendo tener cualquier clase de mascota, incluso perros abandonados desde una perspectiva de conservación.', feedback: '🔎 Los animales de compañía rescatados sí pueden ser cuidados responsablemente en el hogar.' },
          { id: 'd', text: 'Haciendo concursos de jaulas decoradas en las plazas públicas desde una perspectiva de conservación.', feedback: '🔎 La jaula no debe normalizarse como hogar de un animal silvestre.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Distingue con claridad entre fauna doméstica (compañía) y fauna silvestre (conservación en libertad).'
      },
      {
        id: 'm5_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué la procedencia del animal es importante?',
        options: [
          { id: 'a', text: 'Porque conocer la procedencia permite identificar redes ilegales de tráfico, proteger los ecosistemas de origen y actuar con legalidad ética con consecuencias en la estructura demográfica de las especies.', isCorrect: true, feedback: '🌿 ¡Criterio ético intachable! Saber el origen evidencia si se apoyó un delito o un daño ecológico.' },
          { id: 'b', text: 'Solo para saber si el animal habla español o inglés dentro del marco del equilibrio natural.', feedback: '🔎 Reflexiona sobre la trazabilidad y la legalidad ambiental.' },
          { id: 'c', text: 'Para ponerle un pasaporte internacional de viaje analizando las dinámicas del territorio.', feedback: '🔎 La procedencia revela si hubo extracción ilegal de hábitats vulnerables.' },
          { id: 'd', text: 'No tiene ninguna importancia mientras el animal coma galletas vinculado a las alteraciones de los ciclos biológicos naturales asociado a los impactos ambientales en la región descrita con consecuencias en la estructura demográfica de las especies analizando las dinámicas del territorio.', feedback: '🔎 La procedencia es la clave para entender el circuito del tráfico ilegal de especies.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Sustenta la importancia de la trazabilidad para frenar el comercio ilícito de especies.'
      }
    ],
    environmentalChallenge: {
      title: 'Campaña: La Fauna Silvestre No Es Mascota',
      instruction: 'Elabora un mensaje sobre por qué no se debe extraer fauna silvestre del medio natural para convertirla en mascota.',
      type: 'message',
      fields: [
        { id: 'slogan', label: 'Frase de impacto para la campaña', placeholder: 'Ej. Su hogar es el cielo y la selva, no nuestra sala...', type: 'text' },
        { id: 'ecologicalReason', label: 'Razón ecológica fundamental', placeholder: 'Explica qué función cumple el ave o mamífero en la naturaleza (semillas, polinización, equilibrio)...', type: 'textarea' },
        { id: 'welfareReason', label: 'Razón sobre el bienestar animal', placeholder: 'Explica por qué una jaula y comida humana no reemplazan su libertad ni sus necesidades biológicas...', type: 'textarea' },
        { id: 'citizenAction', label: 'Llamado a los vecinos de Magangué', placeholder: '¿Qué hacer si les ofrecen fauna silvestre en venta?', type: 'textarea' }
      ]
    }
  },
  {
    id: 6,
    slug: 'una-jaula-no-es-un-bosque',
    title: 'Una jaula no es un bosque',
    icon: '🐒',
    badgeName: 'Liberador de Fauna',
    badgeDescription: 'Comprendió las necesidades etológicas de los animales silvestres y la incompatibilidad del cautiverio con su bienestar integral.',
    territoryZone: 'Comunidad y Territorio',
    conflictSummary: 'Mono mantenido encadenado en un patio de Magangué y aves enjauladas: confusión entre afecto humano y bienestar biológico.',
    arrivalContext: 'En una calle periurbana de Magangué, un sonido metálico llama tu atención. Al asomarte entre las maderas de un patio, ves una cadena tensa atada a un poste.',
    observationDetails: {
      spotlightTitle: 'Escenario de cautiverio urbano',
      details: [
        'Mono aullador o maicero atado por la cintura con cadena de hierro oxidada.',
        'Espacio de movimiento menor a dos metros cuadrados sobre piso de cemento.',
        'Aves cantoras en jaulas diminutas sin posibilidad de desplegar las alas.'
      ],
      environmentalAspects: [
        'Necesidades etológicas de desplazamiento vertical, salto y forrajeo.',
        'Comportamiento social gregario en primates y aves.',
        'Desarrollo de estereotipias y sufrimiento psicológico en cautiverio.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `Durante una misión en una comunidad cercana a Magangué, los Guardianes encontraron un mono que llevaba mucho tiempo viviendo en una vivienda. Permanecía sujeto mediante una cadena y pasaba gran parte del día en un espacio reducido. La familia decía que lo quería mucho y que lo había criado desde pequeño.

En otra vivienda encontraron aves mantenidas durante años en jaulas. Los Guardianes comprendieron que proporcionar alimento y agua no significa necesariamente satisfacer todas las necesidades de un animal silvestre. Los animales tienen comportamientos relacionados con movimiento, alimentación, refugio, interacción y reproducción. Un mono necesita oportunidades de desplazamiento e interacción acordes con su especie; muchas aves necesitan posibilidades de movimiento y vuelo.

También entendieron que el cariño de una persona no convierte a un animal silvestre en doméstico. Cuando existe demanda de fauna silvestre como mascota, puede incentivarse la captura de nuevos individuos.`,
    readingWordCount: 147,
    literalQuestions: [
      {
        id: 'm6_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Cómo permanecía el mono en la vivienda?',
        options: [
          { id: 'a', text: 'Sujeto mediante una cadena y pasando gran parte del día en un espacio reducido en el hábitat.', isCorrect: true, feedback: '🌿 ¡Correcto! El texto describe textualmente la sujeción con cadena y el espacio restringido.' },
          { id: 'b', text: 'Libre saltando entre los árboles frutales del vecindario desde una perspectiva de conservación.', feedback: '🔎 Revisa el segundo párrafo: ¿cómo estaba asegurado el animal?' },
          { id: 'c', text: 'En una clínica veterinaria con aire acondicionado según los registros de observación del entorno natural dentro del marco del equilibrio natural.', feedback: '🔎 Lee la segunda oración del primer párrafo.' },
          { id: 'd', text: 'En un parque zoológico municipal con cuidadores con consecuencias en la estructura demográfica de las especies analizando las dinámicas del territorio.', feedback: '🔎 El texto habla de una vivienda familiar donde estaba encadenado.' }
        ],
        pedagogicalTip: 'Localiza la descripción en la segunda frase del primer párrafo.'
      },
      {
        id: 'm6_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué otros animales permanecían encerrados?',
        options: [
          { id: 'a', text: 'Aves mantenidas durante años en jaulas.', isCorrect: true, feedback: '🌿 ¡Exacto! En la otra vivienda hallaron aves enjauladas durante años.' },
          { id: 'b', text: 'Caballos y vacas de carga con consecuencias en la estructura demográfica de las especies analizando las dinámicas del territorio.', feedback: '🔎 Observa la primera línea del segundo párrafo.' },
          { id: 'c', text: 'Caimanes en piletas de cemento afectando la capacidad de regeneración de las zonas intervenidas según los principios de ecología básica.', feedback: '🔎 El texto menciona específicamente aves en jaulas.' },
          { id: 'd', text: 'Conejos y cuyos de laboratorio en el contexto de las problemáticas de conservación identificadas desde una perspectiva de conservación.', feedback: '🔎 Vuelve a revisar el inicio del párrafo 2.' }
        ],
        pedagogicalTip: 'Observa la primera línea del segundo párrafo.'
      },
      {
        id: 'm6_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué necesidades de los animales menciona el texto?',
        options: [
          { id: 'a', text: 'Movimiento, alimentación, refugio, interacción y reproducción (desplazamiento y vuelo).', isCorrect: true, feedback: '🌿 ¡Muy bien! Has extraído las 5 necesidades vitales citadas textualmente.' },
          { id: 'b', text: 'Jugar videojuegos y dormir en camas con colchón dentro del marco del equilibrio natural.', feedback: '🔎 Revisa la lista de comportamientos naturales en el segundo párrafo.' },
          { id: 'c', text: 'Aprender palabras humanas y vestirse con ropa desde una perspectiva de conservación.', feedback: '🔎 Fíjate en las necesidades biológicas reales mencionadas por el autor.' },
          { id: 'd', text: 'Únicamente recibir agua y granos una vez al día considerando las interacciones bióticas.', feedback: '🔎 El texto señala expresamente que comida y agua no bastan.' }
        ],
        pedagogicalTip: 'Extrae la enumeración de comportamientos del segundo párrafo.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm6_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué dar comida y agua no garantiza el bienestar de un animal silvestre?',
        options: [
          { id: 'a', text: 'Porque el bienestar incluye salud física, mental y emocional: la libertad de volar, trepar, interactuar con su especie y expresar instintos naturales asociado a los impactos ambientales en la región descrita.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! Alimentar el cuerpo no compensa el encarcelamiento ni la privación de la vida silvestre.' },
          { id: 'b', text: 'Porque la comida de casa siempre está envenenada dentro del marco del equilibrio natural.', feedback: '🔎 Piensa en las necesidades etológicas y de comportamiento que una jaula anula.' },
          { id: 'c', text: 'Porque los animales solo beben agua de lluvia recogida en hojas desde una perspectiva de conservación.', feedback: '🔎 Analiza el concepto de bienestar integral frente a la simple supervivencia física.' },
          { id: 'd', text: 'Porque a los animales no les gusta que los humanos los miren mientras comen afectando la capacidad de regeneración de las zonas intervenidas en el contexto de las problemáticas de conservación identificadas asociado a los impactos ambientales en la región descrita desde una perspectiva de conservación.', feedback: '🔎 Conecta las necesidades citadas (vuelo, movimiento, interacción con su grupo) con la salud del animal.' }
        ],
        pedagogicalTip: 'Comprende que el bienestar biológico va más allá de no morir de hambre: exige libertad de conducta.'
      },
      {
        id: 'm6_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué un mono criado por una familia puede seguir teniendo necesidades propias de su especie?',
        options: [
          { id: 'a', text: 'Porque sus instintos, anatomía y psicología evolucionaron durante millones de años en la selva y no se borran por criarlo en una casa a nivel local.', isCorrect: true, feedback: '🌿 ¡Brillante deducción biológica! La evolución de una especie silvestre no cambia por crianza doméstica en una sola generación.' },
          { id: 'b', text: 'Porque el mono sueña con vengarse de la familia considerando las interacciones bióticas.', feedback: '🔎 Enfócate en la naturaleza biológica e instintiva inmutable de las especies silvestres.' },
          { id: 'c', text: 'Porque los monos leen enciclopedias sobre su especie en secreto lo que evidencia una alteración de los recursos disponibles lo que evidencia una alteración de los recursos disponibles desde una perspectiva de conservación.', feedback: '🔎 Distingue entre domesticación histórica milenaria e instinto silvestre individual.' },
          { id: 'd', text: 'Porque el clima de Magangué le recuerda a África en el contexto de las problemáticas de conservación identificadas como un factor relevante en la cadena trófica del hábitat dentro del marco del equilibrio natural.', feedback: '🔎 Reflexiona sobre la frase: "el cariño de una persona no convierte a un animal silvestre en doméstico".' }
        ],
        pedagogicalTip: 'Relaciona la evolución genética de millones de años con la imposibilidad de "domesticar" en una sola vida individual.'
      },
      {
        id: 'm6_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Qué relación existe entre la demanda de animales silvestres como mascotas y la captura de individuos?',
        options: [
          { id: 'a', text: 'Cada persona que compra o acepta tener un animal silvestre genera un mercado rentable que promueve que otros cazadores vayan a la selva a atrapar más crías.', isCorrect: true, feedback: '🌿 ¡Pista descifrada con rigor! La demanda urbana es el combustible que alimenta la captura en el monte.' },
          { id: 'b', text: 'No existe relación, porque los cazadores solo capturan animales para divertirse solos relacionado con el equilibrio biológico del área de estudio lo que evidencia una alteración de los recursos disponibles dentro del marco del equilibrio natural.', feedback: '🔎 Revisa la última frase del texto sobre cómo la demanda incentiva nuevas capturas.' },
          { id: 'c', text: 'La demanda hace que los animales silvestres se acerquen voluntariamente a las tiendas con consecuencias en la estructura demográfica de las especies relacionado con el equilibrio biológico del área de estudio considerando las interacciones bióticas.', feedback: '🔎 Analiza la relación de causa y efecto económica entre demanda y extracción.' },
          { id: 'd', text: 'Al aumentar la demanda, los animales de la selva se vuelven más inteligentes para escapar relacionado con el equilibrio biológico del área de estudio lo que evidencia una alteración de los recursos disponibles dentro del marco del equilibrio natural.', feedback: '🔎 Vincula el incentivo económico con la persistencia del tráfico.' }
        ],
        pedagogicalTip: 'Sigue el rastro económico: el cliente que compra una cría financia la expedición del próximo traficante.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm6_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué argumentos presentaría un Guardián a la familia?',
        options: [
          { id: 'a', text: 'Explicar con respeto que el verdadero amor hacia un animal silvestre implica desear su libertad, y que mantenerlo atado le genera frustración y privación biológica.', isCorrect: true, feedback: '🌿 ¡Argumentación empática y contundente! Transforma el falso cariño posesivo en respeto por la dignidad del ser vivo.' },
          { id: 'b', text: 'Insultar a la familia y romper la cadena con piedras sin dialogar considerando las interacciones bióticas.', feedback: '🔎 El Guardián utiliza la pedagogía y la ley para crear conciencia duradera, no agresiones.' },
          { id: 'c', text: 'Decirles que compren otro mono para que no esté solo con la cadena según los principios de ecología básica.', feedback: '🔎 Eso duplicaría el sufrimiento y estimularía el tráfico ilegal.' },
          { id: 'd', text: 'Felicitar a la familia por tener una cadena tan brillante analizando las dinámicas del territorio.', feedback: '🔎 El objetivo del Guardián es liberar a la fauna de la opresión del cautiverio.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Construye un argumento que apele al verdadero respeto y a las necesidades reales del animal.'
      },
      {
        id: 'm6_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué debería hacer una persona que encuentra fauna silvestre mantenida como mascota?',
        options: [
          { id: 'a', text: 'Notificar de manera pacífica a la entidad ambiental territorial (como la Corporación Autónoma Regional) para su rescate y proceso de rehabilitación con consecuencias en la estructura demográfica de las especies.', isCorrect: true, feedback: '🌿 ¡Procedimiento correcto! Garantiza una custodia técnica por médicos veterinarios y biólogos.' },
          { id: 'b', text: 'Comprar el animal para tenerlo ahora en su propia casa según los principios de ecología básica.', feedback: '🔎 Comprar el animal perpetúa el ciclo de venta.' },
          { id: 'c', text: 'Ignorar el hecho porque cada quien hace lo que quiere en su propiedad analizando las dinámicas del territorio.', feedback: '🔎 La fauna silvestre es patrimonio común y no propiedad privada consumible.' },
          { id: 'd', text: 'Llevarse el animal a la fuerza y dejarlo en un parque del centro de la ciudad en el contexto de las problemáticas de conservación identificadas asociado a los impactos ambientales en la región descrita como un factor relevante en la cadena trófica del hábitat dentro del marco del equilibrio natural.', feedback: '🔎 La liberación sin rehabilitación veterinaria condena al animal a la muerte.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Establece la ruta institucional de entrega y rehabilitación con expertos.'
      },
      {
        id: 'm6_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué una jaula no puede considerarse equivalente a un hábitat natural?',
        options: [
          { id: 'a', text: 'Porque una jaula es un espacio carcelario inerte que suprime el vuelo, la búsqueda de alimento, el clima natural y la relación con la comunidad de su especie en el área.', isCorrect: true, feedback: '🌿 ¡Juicio crítico irrebatible! Un hábitat es un sistema dinámico vivo, no cuatro barrotes de metal.' },
          { id: 'b', text: 'Porque las jaulas no tienen cortinas ni televisor dentro del marco del equilibrio natural.', feedback: '🔎 Argumenta desde las características de un ecosistema frente a la reclusión física.' },
          { id: 'c', text: 'Únicamente porque el metal se calienta con el sol de Magangué que forma parte integral de la dinámica de los ecosistemas locales que forma parte integral de la dinámica de los ecosistemas locales desde una perspectiva de conservación.', feedback: '🔎 Analiza la riqueza sensorial, social y ecológica del bosque frente a la jaula.' },
          { id: 'd', text: 'Sí son equivalentes si se le pone un espejo y agua limpia todos los días que forma parte integral de la dinámica de los ecosistemas locales afectando la capacidad de regeneración de las zonas intervenidas considerando las interacciones bióticas.', feedback: '🔎 Ningún objeto inerte reemplaza la inmensidad del bosque nativo.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Contrasta la complejidad de relaciones ecológicas del bosque con la esterilidad de una jaula.'
      }
    ],
    environmentalChallenge: {
      title: 'Tabla Comparativa: Libertad vs Cautiverio',
      instruction: 'Compara en una tabla las necesidades de un animal silvestre en libertad y las condiciones de un animal mantenido en cautiverio.',
      type: 'table',
      fields: [
        { id: 'dim1', label: '1. Desplazamiento y Movimiento', placeholder: 'En libertad: Vuelo ilimitado, saltos entre ramas / En cautiverio: Espacio restringido a 1 metro, atrofia...', type: 'textarea' },
        { id: 'dim2', label: '2. Alimentación y Forrajeo', placeholder: 'En libertad: Búsqueda activa de decenas de frutos, brotes e insectos / En cautiverio: Dieta monótona humana...', type: 'textarea' },
        { id: 'dim3', label: '3. Interacción Social y Afectiva', placeholder: 'En libertad: Vivir en manada, comunicación y cortejo / En cautiverio: Soledad forzada, sin sus congéneres...', type: 'textarea' },
        { id: 'dim4', label: '4. Salud Emocional y Comportamiento', placeholder: 'En libertad: Expresión plena de instintos naturales / En cautiverio: Estrés, agresividad, tristeza o estereotipias...', type: 'textarea' }
      ]
    }
  },
  {
    id: 7,
    slug: 'los-que-nadie-queria-ver',
    title: 'Los que nadie quería ver',
    icon: '🐕',
    badgeName: 'Defensor de los Animales',
    badgeDescription: 'Comprendió la problemática del abandono animal urbano y la necesidad de esterilización, adopción y tenencia responsable.',
    territoryZone: 'Comunidad y Territorio',
    conflictSummary: 'Perros y gatos abandonados en las calles de Magangué: hambre, enfermedades zoonóticas y reproducción descontrolada.',
    arrivalContext: 'Caminas por un sector periférico de Magangué cercano a un basurero a cielo abierto. Entre los desechos, varios perros con sarna y costillas marcadas buscan sobras.',
    observationDetails: {
      spotlightTitle: 'Calles periféricas del municipio',
      details: [
        'Perros y gatos callejeros con heridas abiertas y signos de desnutrición.',
        'Perras y gatas en gestación o amamantando camadas en cajas de cartón.',
        'Vecinos que se quejan de malos olores y agresiones, o que los ahuyentan con piedras.'
      ],
      environmentalAspects: [
        'Salud pública municipal y riesgo de enfermedades transmisibles (zoonosis).',
        'Impacto de perros asilvestrados sobre la fauna silvestre nativa cercana.',
        'Importancia de la esterilización quirúrgica masiva.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `En un barrio de Magangué, los Guardianes encontraron perros y gatos que vivían en las calles. Algunos buscaban alimento entre residuos y otros presentaban heridas o enfermedades. Descubrieron que algunos habían sido abandonados después de haber sido animales de compañía. El abandono puede exponerlos al hambre, enfermedades, accidentes, peleas y maltrato.

El equipo comprendió que alimentar ocasionalmente a un animal no soluciona las causas del problema. La tenencia responsable, la prevención del abandono, la atención veterinaria, la adopción y los programas de esterilización pueden contribuir a disminuir el número de animales que terminan en las calles.`,
    readingWordCount: 96,
    literalQuestions: [
      {
        id: 'm7_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué animales encontraron?',
        options: [
          { id: 'a', text: 'Perros y gatos que vivían en las calles de un barrio de Magangué.', isCorrect: true, feedback: '🌿 ¡Correcto! La primera oración lo menciona textualmente.' },
          { id: 'b', text: 'Monos aulladores y ardillas de cola roja vinculado a las alteraciones de los ciclos biológicos naturales analizando las dinámicas del territorio.', feedback: '🔎 Vuelve a leer la primera línea del texto.' },
          { id: 'c', text: 'Cabras y ovejas de pastoreo libre relacionado con el equilibrio biológico del área de estudio dentro del marco del equilibrio natural.', feedback: '🔎 El texto habla de perros y gatos callejeros.' },
          { id: 'd', text: 'Palomas mensajeras en las plazas públicas con consecuencias en la estructura demográfica de las especies desde una perspectiva de conservación.', feedback: '🔎 Revisa el inicio de la lectura.' }
        ],
        pedagogicalTip: 'La respuesta está en la primera línea.'
      },
      {
        id: 'm7_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué problemas presentaban algunos?',
        options: [
          { id: 'a', text: 'Buscaban alimento entre residuos y otros presentaban heridas o enfermedades.', isCorrect: true, feedback: '🌿 ¡Exacto! Esos eran los síntomas físicos evidentes registrados en el texto.' },
          { id: 'b', text: 'Sobrepeso por comer demasiado concentrado importado dentro del marco del equilibrio natural.', feedback: '🔎 Lee la segunda oración del texto.' },
          { id: 'c', text: 'Estaban perfectamente adiestrados para competencias deportivas considerando las interacciones bióticas.', feedback: '🔎 El texto destaca el hambre, heridas y enfermedades.' },
          { id: 'd', text: 'Tenían collares de lujo con placas de oro considerando las interacciones bióticas.', feedback: '🔎 Vuelve a leer las condiciones de abandono descritas en el párrafo 1.' }
        ],
        pedagogicalTip: 'Observa la segunda oración del primer párrafo.'
      },
      {
        id: 'm7_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué situaciones podían llevar a un animal a terminar en la calle?',
        options: [
          { id: 'a', text: 'Haber sido abandonados después de haber sido animales de compañía según los registros de observación del entorno natural.', isCorrect: true, feedback: '🌿 ¡Muy bien! El texto resalta que fueron dejados a su suerte por sus antiguos dueños.' },
          { id: 'b', text: 'Decidir voluntariamente independizarse de las casas considerando las interacciones bióticas.', feedback: '🔎 Los animales domésticos no deciden quedar en la indigencia.' },
          { id: 'c', text: 'Viajar en autobús desde otras ciudades para conocer el río según los principios de ecología básica.', feedback: '🔎 Revisa la tercera oración del párrafo 1 sobre el abandono humano.' },
          { id: 'd', text: 'Escapar para fundar una nueva ciudad en la selva como un factor relevante en la cadena trófica del hábitat lo que evidencia una alteración de los recursos disponibles desde una perspectiva de conservación.', feedback: '🔎 El texto señala: "habían sido abandonados después de haber sido animales de compañía".' }
        ],
        pedagogicalTip: 'Localiza la causa directa en la tercera frase del párrafo 1.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm7_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué el abandono puede aumentar el número de animales sin hogar?',
        options: [
          { id: 'a', text: 'Porque los animales no esterilizados abandonados en la calle se reproducen sin control, multiplicando exponencialmente las camadas sin hogar en el hábitat.', isCorrect: true, feedback: '🌿 ¡Deducción biológica exacta! Cada perro o gato abandonado fértil genera decenas de crías en las calles.' },
          { id: 'b', text: 'Porque las calles de Magangué se hacen más grandes cada año desde una perspectiva de conservación.', feedback: '🔎 Conecta el abandono con la capacidad reproductiva sin control.' },
          { id: 'c', text: 'Porque los animales abandonados compran casas desocupadas asociado a los impactos ambientales en la región descrita que forma parte integral de la dinámica de los ecosistemas locales analizando las dinámicas del territorio.', feedback: '🔎 Piensa en la multiplicación de crías nacidas en el desamparo.' },
          { id: 'd', text: 'No aumenta el número, los animales de la calle nunca tienen crías según los registros de observación del entorno natural en el contexto de las problemáticas de conservación identificadas desde una perspectiva de conservación.', feedback: '🔎 Reflexiona sobre la falta de esterilización en animales callejeros.' }
        ],
        pedagogicalTip: 'Relaciona la fecundidad canina/felina con la ausencia de esterilización en las calles.'
      },
      {
        id: 'm7_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué alimentar ocasionalmente a un animal no necesariamente soluciona el problema?',
        options: [
          { id: 'a', text: 'Porque calma el hambre inmediata pero no atiende la causa raíz: la falta de hogar, vacunas, esterilización y tenencia responsable.', isCorrect: true, feedback: '🌿 ¡Pista clave revelada! La compasión del plato de comida no frena la sobrepoblación ni el maltrato.' },
          { id: 'b', text: 'Porque a los perros no les gusta la comida de las personas vinculado a las alteraciones de los ciclos biológicos naturales que forma parte integral de la dinámica de los ecosistemas locales considerando las interacciones bióticas.', feedback: '🔎 Distingue entre aliviar un síntoma momentáneo y solucionar el problema estructural.' },
          { id: 'c', text: 'Porque los animales se acostumbran a pedir propina en dinero relacionado con el equilibrio biológico del área de estudio según los registros de observación del entorno natural según los principios de ecología básica.', feedback: '🔎 Analiza el inicio del segundo párrafo: ¿por qué no resuelve las causas?' },
          { id: 'd', text: 'Porque el agua limpia enferma a los animales callejeros lo que evidencia una alteración de los recursos disponibles lo que evidencia una alteración de los recursos disponibles dentro del marco del equilibrio natural.', feedback: '🔎 Evalúa qué se requiere para una solución integral de fondo.' }
        ],
        pedagogicalTip: 'Distingue entre ayuda paliativa (dar sobras un día) y solución integral (salud, esterilización, adopción).'
      },
      {
        id: 'm7_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Qué relación existe entre reproducción sin control, abandono y aumento de animales en las calles?',
        options: [
          { id: 'a', text: 'Es un círculo vicioso: a mayor abandono y menor esterilización, mayor proliferación de camadas callejeras que sufrirán abandono.', isCorrect: true, feedback: '🌿 ¡Excelente análisis sistémico! Ambos factores se retroalimentan provocando una crisis de bienestar y salud pública.' },
          { id: 'b', text: 'No existe relación, son eventos que ocurren en meses distintos por casualidad analizando las dinámicas del territorio.', feedback: '🔎 Conecta la reproducción sin esterilizar con la cantidad de animales sin dueño.' },
          { id: 'c', text: 'La reproducción sin control reduce el número de perros porque no hay espacio analizando las dinámicas del territorio.', feedback: '🔎 Todo lo contrario: satura las calles de animales desprotegidos.' },
          { id: 'd', text: 'El abandono hace que las perras dejen de tener cachorros dentro del marco del equilibrio natural.', feedback: '🔎 Revisa la cadena de eventos analizada por los Guardianes en el párrafo 2.' }
        ],
        pedagogicalTip: 'Establece la dinámica de retroalimentación: abandono + natalidad desmedida = sobrepoblación.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm7_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué acciones responsables podría realizar un Guardián ante un animal herido?',
        options: [
          { id: 'a', text: 'Brindarle auxilio inicial seguro, buscar atención veterinaria o refugio temporal y gestionar su esterilización y adopción como un factor relevante en la cadena trófica del hábitat.', isCorrect: true, feedback: '🌿 ¡Acción noble y responsable! Rescata la vida con criterio de bienestar y proyección futura.' },
          { id: 'b', text: 'Arrojarlo al río para que no sufra más considerando las interacciones bióticas.', feedback: '🔎 Esa es una conducta cruel contraria a la ética del Guardián.' },
          { id: 'c', text: 'Tomarle una foto para burlarse en redes sociales y marcharse analizando las dinámicas del territorio.', feedback: '🔎 El Guardián asume una postura de empatía activa y solución real.' },
          { id: 'd', text: 'Encadenarlo en la calle para que cuide las basuras del barrio afectando la capacidad de regeneración de las zonas intervenidas que forma parte integral de la dinámica de los ecosistemas locales considerando las interacciones bióticas.', feedback: '🔎 El encadenamiento perpetúa el maltrato animal.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Construye una ruta de auxilio médico veterinario, recuperación y adopción ética.'
      },
      {
        id: 'm7_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué debería hacer una comunidad para disminuir el abandono?',
        options: [
          { id: 'a', text: 'Implementar campañas educativas de tenencia responsable, esterilización masiva comunitaria, censos de mascotas y sanciones al abandono del territorio.', isCorrect: true, feedback: '🌿 ¡Medidas de política comunitaria ejemplares! Atacan la raíz del problema con educación y corresponsabilidad.' },
          { id: 'b', text: 'Prohibir a las familias encariñarse con los animales de compañía desde una perspectiva de conservación.', feedback: '🔎 El afecto es valioso; lo que se requiere es responsabilidad y compromiso para toda la vida.' },
          { id: 'c', text: 'Trasladar a los perros en camionetas de noche hacia otros municipios vecinos vinculado a las alteraciones de los ciclos biológicos naturales asociado a los impactos ambientales en la región descrita desde una perspectiva de conservación.', feedback: '🔎 Eso no resuelve el problema, solo traslada el sufrimiento a otra comunidad.' },
          { id: 'd', text: 'Esperar que llueva fuerte para que el agua se lleve a los animales según los registros de observación del entorno natural como un factor relevante en la cadena trófica del hábitat según los principios de ecología básica.', feedback: '🔎 La indolencia agrava las crisis humanitarias y de salud en el territorio.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Propón soluciones participativas: jornadas de esterilización, adopción responsable y acuerdos vecinales.'
      },
      {
        id: 'm7_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué esterilización, adopción y tenencia responsable pueden formar parte de una estrategia de protección animal?',
        options: [
          { id: 'a', text: 'Porque cortan la sobrepoblación de raíz, dan segundas oportunidades a animales rescatados y garantizan cuidados éticos y de salud.', isCorrect: true, feedback: '🌿 ¡Visión integral y madura! Son los tres pilares universales del bienestar animal y la salud pública.' },
          { id: 'b', text: 'Porque son las únicas palabras que empiezan por las primeras letras del alfabeto vinculado a las alteraciones de los ciclos biológicos naturales considerando las interacciones bióticas.', feedback: '🔎 Valora el impacto combinado de estas tres herramientas preventivas.' },
          { id: 'c', text: 'Para que los veterinarios vendan más champú de perros como un factor relevante en la cadena trófica del hábitat asociado a los impactos ambientales en la región descrita desde una perspectiva de conservación.', feedback: '🔎 Reflexiona sobre la dignidad de los animales de compañía en la sociedad.' },
          { id: 'd', text: 'No forman parte de ninguna estrategia, son trámites burocráticos inútiles que forma parte integral de la dinámica de los ecosistemas locales dentro del marco del equilibrio natural.', feedback: '🔎 Estas acciones evitan el sufrimiento de miles de seres sintientes.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Sustenta la tríada preventiva: esterilizar (prevenir), adoptar (reparar) y cuidar responsablemente (sostener).'
      }
    ],
    environmentalChallenge: {
      title: 'Plan Comunitario de Tenencia Responsable',
      instruction: 'Propón tres acciones comunitarias para prevenir abandono y maltrato y promover tenencia responsable.',
      type: 'protocol',
      fields: [
        { id: 'action1', label: 'Acción 1: Prevención y Esterilización', placeholder: 'Ej. Organizar jornadas barriales de esterilización quirúrgica gratuita o a bajo costo para perros y gatos...', type: 'textarea' },
        { id: 'action2', label: 'Acción 2: Educación y Compromiso Familiar', placeholder: 'Ej. Talleres en la escuela y juntas de acción comunal sobre el costo y compromiso a 15 años de tener una mascota...', type: 'textarea' },
        { id: 'action3', label: 'Acción 3: Red de Adopción y Auxilio Vecinal', placeholder: 'Ej. Crear un grupo comunitario de adopción responsable y hogares de paso para animales vulnerables...', type: 'textarea' }
      ]
    }
  },
  {
    id: 8,
    slug: 'donde-antes-habia-arboles',
    title: 'Donde antes había árboles',
    icon: '🌳',
    badgeName: 'Sembrador de Bosques',
    badgeDescription: 'Comprendió que un bosque no es solo madera, sino un entramado de relaciones ecológicas vivas entre suelo, agua y biodiversidad.',
    territoryZone: 'Bosque y Sabana',
    conflictSummary: 'Comparación fotográfica del paisaje: sustitución de bosque nativo continuo por potreros, caminos erosionados y pérdida de cobertura.',
    arrivalContext: 'Te encuentras en una colina con vista panorámica hacia el valle del río. En tus manos sostienes una fotografía aérea de hace cincuenta años y miras el paisaje actual.',
    observationDetails: {
      spotlightTitle: 'Comparación del paisaje en la colina',
      details: [
        'En la foto antigua: un dosel verde tupido e ininterrumpido con nacimientos de agua protegidos.',
        'En el paisaje actual: pastizales monótonos para ganado, senderos de tierra desnuda y cárcavas de erosión.',
        'Arroyos secos en el lecho del valle que antes fluían todo el año.'
      ],
      environmentalAspects: [
        'La esponja hídrica del bosque nativo y recarga de acuíferos.',
        'Sujeción del suelo por las raíces contra la escorrentía.',
        'Pérdida de hábitat para aves polinizadoras y mamíferos arbóreos.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `Los Guardianes compararon una fotografía antigua con el paisaje actual. Donde antes había árboles y vegetación, ahora aparecían potreros, caminos y zonas intervenidas. Comprendieron que un bosque no es solamente un conjunto de árboles: allí existen animales, plantas, microorganismos, suelo, agua y relaciones ecológicas. Al desaparecer la cobertura vegetal pueden perderse refugios, alimento, sombra y protección del suelo.`,
    readingWordCount: 65,
    literalQuestions: [
      {
        id: 'm8_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué encontraron al comparar las imágenes?',
        options: [
          { id: 'a', text: 'Donde antes había árboles y vegetación, ahora aparecían potreros, caminos y zonas intervenidas.', isCorrect: true, feedback: '🌿 ¡Correcto! El texto lo enuncia textualmente en la segunda oración.' },
          { id: 'b', text: 'Que el bosque había crecido y cubierto todo el municipio dentro del marco del equilibrio natural.', feedback: '🔎 Vuelve a revisar la transformación del paisaje observada por los Guardianes.' },
          { id: 'c', text: 'Que se habían construido rascacielos y aeropuertos gigantes dentro del marco del equilibrio natural.', feedback: '🔎 El texto habla de potreros, caminos y zonas intervenidas.' },
          { id: 'd', text: 'Que las imágenes eran idénticas y no había cambiado nada desde una perspectiva de conservación.', feedback: '🔎 El texto destaca el contraste entre el pasado boscoso y el presente intervenido.' }
        ],
        pedagogicalTip: 'La respuesta está en la segunda oración de la lectura.'
      },
      {
        id: 'm8_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué elementos forman parte del bosque según el texto?',
        options: [
          { id: 'a', text: 'Animales, plantas, microorganismos, suelo, agua y relaciones ecológicas como un factor relevante en la cadena trófica del hábitat.', isCorrect: true, feedback: '🌿 ¡Exacto! Una visión holística y científica del ecosistema boscoso.' },
          { id: 'b', text: 'Únicamente troncos de madera listos para aserradero considerando las interacciones bióticas.', feedback: '🔎 Revisa la tercera oración: el bosque no es solo un conjunto de árboles.' },
          { id: 'c', text: 'Tractores, cercas de púas y bombas de gasolina desde una perspectiva de conservación.', feedback: '🔎 Concéntrate en los componentes naturales enumerados en el texto.' },
          { id: 'd', text: 'Plásticos, cemento y cables de electricidad según los registros de observación del entorno natural lo que evidencia una alteración de los recursos disponibles analizando las dinámicas del territorio.', feedback: '🔎 El texto enumera los componentes vivos y no vivos del ecosistema.' }
        ],
        pedagogicalTip: 'Extrae la lista de componentes de la tercera frase.'
      },
      {
        id: 'm8_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué puede perderse cuando desaparece la vegetación?',
        options: [
          { id: 'a', text: 'Refugios, alimento, sombra y protección del suelo a nivel local.', isCorrect: true, feedback: '🌿 ¡Muy bien! Son exactamente los cuatro beneficios ecológicos citados al final.' },
          { id: 'b', text: 'El ruido de las motocicletas en la carretera considerando las interacciones bióticas.', feedback: '🔎 Observa la última línea del texto sobre las pérdidas ambientales.' },
          { id: 'c', text: 'La cantidad de piedras en el fondo de los ríos en el contexto de las problemáticas de conservación identificadas desde una perspectiva de conservación.', feedback: '🔎 Vuelve a leer la última frase de la lectura.' },
          { id: 'd', text: 'La señal de telefonía celular de la región en el contexto de las problemáticas de conservación identificadas desde una perspectiva de conservación.', feedback: '🔎 Concéntrate en las funciones vitales que brinda la vegetación.' }
        ],
        pedagogicalTip: 'Localiza la última oración del caso.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm8_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Cómo puede la pérdida de árboles afectar a animales?',
        options: [
          { id: 'a', text: 'Los deja sin refugio contra depredadores y clima, y destruye sus fuentes de frutos, hojas, nidos y presas.', isCorrect: true, feedback: '🌿 ¡Deducción ecológica precisa! Sin árboles no hay hábitat ni sustento trófico para la fauna.' },
          { id: 'b', text: 'Hace que los animales aprendan a volar aunque no tengan alas como un factor relevante en la cadena trófica del hábitat analizando las dinámicas del territorio.', feedback: '🔎 Piensa en la dependencia directa de la fauna respecto a la vegetación.' },
          { id: 'c', text: 'Los obliga a comer arena del suelo para no tener hambre lo que evidencia una alteración de los recursos disponibles considerando las interacciones bióticas.', feedback: '🔎 Evalúa cómo la destrucción del hogar vegetal fuerza a la fauna a huir o morir.' },
          { id: 'd', text: 'No les afecta porque los animales prefieren vivir en potreros limpios vinculado a las alteraciones de los ciclos biológicos naturales dentro del marco del equilibrio natural.', feedback: '🔎 Recuerda que la fauna silvestre depende de la complejidad de la selva nativa.' }
        ],
        pedagogicalTip: 'Conecta la tala de árboles con la destrucción del hogar y la despensa de las especies.'
      },
      {
        id: 'm8_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Qué relación existe entre vegetación y protección del suelo?',
        options: [
          { id: 'a', text: 'Las raíces amarran la tierra y el follaje amortigua la lluvia; sin vegetación, el agua y el viento lavan los nutrientes causando erosión.', isCorrect: true, feedback: '🌿 ¡Pista maestra descubierta! La cubierta vegetal es el escudo y la armadura viva del suelo fértil.' },
          { id: 'b', text: 'La vegetación debilita el suelo porque las raíces lo perforan como agujas dentro del marco del equilibrio natural.', feedback: '🔎 Todo lo contrario: las raíces funcionan como una malla que evita derrumbes.' },
          { id: 'c', text: 'El suelo crece más rápido cuando no tiene ninguna planta encima considerando las interacciones bióticas.', feedback: '🔎 Sin plantas, el sol calcinante y las lluvias torrenciales desertifican el suelo.' },
          { id: 'd', text: 'No existe relación, la tierra no necesita plantas para mantenerse firme analizando las dinámicas del territorio.', feedback: '🔎 Revisa el papel protector de la cobertura vegetal frente a la erosión.' }
        ],
        pedagogicalTip: 'Piensa en las raíces como una red que sostiene el suelo frente a la fuerza del agua y el viento.'
      },
      {
        id: 'm8_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué la pérdida de una parte del ecosistema puede producir otros cambios?',
        options: [
          { id: 'a', text: 'Porque todos los elementos están interconectados; la alteración de uno desencadena efectos en cadena en el agua, el suelo y la vida relacionado con el equilibrio biológico del área de estudio.', isCorrect: true, feedback: '🌿 ¡Comprensión de sistemas ecológicos de alto nivel! En la naturaleza nada funciona aislado.' },
          { id: 'b', text: 'Porque las plantas enojadas le avisan a las nubes para que no llueva según los principios de ecología básica.', feedback: '🔎 Piensa en la red de interacciones bióticas y abióticas.' },
          { id: 'c', text: 'Porque los ecosistemas son piezas de plástico que se rompen al tacto según los principios de ecología básica.', feedback: '🔎 Analiza el concepto de "relaciones ecológicas" que destaca el autor.' },
          { id: 'd', text: 'No produce cambios, los ecosistemas se reparan solos en dos minutos lo que evidencia una alteración de los recursos disponibles que forma parte integral de la dinámica de los ecosistemas locales que forma parte integral de la dinámica de los ecosistemas locales considerando las interacciones bióticas.', feedback: '🔎 Los desequilibrios en un componente repercuten en todo el territorio.' }
        ],
        pedagogicalTip: 'Aplica el principio ecológico fundamental: en un ecosistema todo está conectado.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm8_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué acciones de reforestación y conservación propondrías?',
        options: [
          { id: 'a', text: 'Sembrar especies nativas de la región, proteger nacimientos de agua, crear cercas vivas y dejar áreas en regeneración natural asistida en el hábitat.', isCorrect: true, feedback: '🌿 ¡Plan de restauración impecable! Priorizar especies autóctonas revive las verdaderas relaciones ecológicas.' },
          { id: 'b', text: 'Sembrar árboles plásticos que no requieran agua ni cuidado considerando las interacciones bióticas.', feedback: '🔎 Los árboles plásticos no proporcionan alimento, sombra ni absorción de carbono.' },
          { id: 'c', text: 'Talar más árboles para que haya espacio donde sembrar pasto africano según los registros de observación del entorno natural en el contexto de las problemáticas de conservación identificadas dentro del marco del equilibrio natural.', feedback: '🔎 Eso aumentaría la deforestación y la pérdida de biodiversidad.' },
          { id: 'd', text: 'Comprar madera importada para decorar las colinas erosionadas con consecuencias en la estructura demográfica de las especies lo que evidencia una alteración de los recursos disponibles desde una perspectiva de conservación.', feedback: '🔎 Se requiere restaurar el ecosistema vivo, no colocar madera muerta.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Promueve la siembra de árboles nativos y la restauración ecológica participativa.'
      },
      {
        id: 'm8_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Cómo equilibrar necesidades humanas y conservación?',
        options: [
          { id: 'a', text: 'Adoptando modelos agroforestales y silvopastoriles que permitan producir alimentos y madera sin destruir los bosques ni erosionar los suelos.', isCorrect: true, feedback: '🌿 ¡Solución de sostenibilidad genuina! Integra producción económica con custodia de la naturaleza.' },
          { id: 'b', text: 'Destruyendo todos los pueblos para que no haya seres humanos en el territorio afectando la capacidad de regeneración de las zonas intervenidas según los registros de observación del entorno natural desde una perspectiva de conservación.', feedback: '🔎 La meta es la convivencia armónica y el desarrollo sostenible de las comunidades.' },
          { id: 'c', text: 'Consumiendo todos los recursos naturales de una vez antes de que se acaben que forma parte integral de la dinámica de los ecosistemas locales con consecuencias en la estructura demográfica de las especies dentro del marco del equilibrio natural.', feedback: '🔎 Esa es la fórmula del colapso ecológico y social.' },
          { id: 'd', text: 'Ignorando la conservación porque la economía es lo único que importa según los registros de observación del entorno natural en el contexto de las problemáticas de conservación identificadas dentro del marco del equilibrio natural.', feedback: '🔎 Sin ecosistemas sanos, la economía y la agricultura también colapsan.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Enfoca la respuesta en la agroecología, la forestería comunitaria y la coexistencia.'
      },
      {
        id: 'm8_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué recuperar un bosque implica más que sembrar árboles?',
        options: [
          { id: 'a', text: 'Porque reconstruir un bosque exige restaurar la fertilidad del suelo, el ciclo del agua, la presencia de hongos, polinizadores y fauna nativa.', isCorrect: true, feedback: '🌿 ¡Profundidad crítica extraordinaria! Un monocultivo de árboles no es un bosque; el bosque es una comunidad viva.' },
          { id: 'b', text: 'Porque los árboles necesitan que les pongan nombres humanos a cada rama desde una perspectiva de conservación.', feedback: '🔎 Reflexiona sobre la complejidad de un bosque nativo frente a una plantación de madera.' },
          { id: 'c', text: 'Porque se necesita pintar los troncos de verde para que se vean bonitos considerando las interacciones bióticas.', feedback: '🔎 Evalúa las relaciones ecológicas descritas en el caso.' },
          { id: 'd', text: 'Sembrar árboles es lo único que se necesita, nada más tiene importancia desde una perspectiva de conservación.', feedback: '🔎 El texto enseña que el bosque es suelo, agua, microorganismos y relaciones.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Distingue entre plantar árboles en hilera y restaurar un ecosistema forestal complejo y biodiverso.'
      }
    ],
    environmentalChallenge: {
      title: 'Matriz Antes y Después del Paisaje',
      instruction: 'Elabora un antes/después del paisaje y señala qué relaciones ecológicas cambiaron.',
      type: 'table',
      fields: [
        { id: 'before_soil', label: '1. El Bosque Original (Antes)', placeholder: 'Cobertura vegetal densa, suelo húmedo y rico en materia orgánica, nacimientos de agua protegidos...', type: 'textarea' },
        { id: 'after_soil', label: '2. El Paisaje Transformado (Después)', placeholder: 'Potreros abiertos, suelo endurecido y erosionado, arroyos secos y calor extremo...', type: 'textarea' },
        { id: 'broken_relations', label: '3. Relaciones Ecológicas que se Rompieron', placeholder: 'Pérdida de polinización, ausencia de refugio para aves y mamíferos, escorrentía rápida del agua...', type: 'textarea' },
        { id: 'restoration_step', label: '4. Acción del Guardián para Iniciar la Recuperación', placeholder: 'Aislamiento de rondas hídricas, siembra de árboles nativos y enriquecimiento del suelo...', type: 'textarea' }
      ]
    }
  },
  {
    id: 9,
    slug: 'un-territorio-que-cambio',
    title: 'Un territorio que cambió',
    icon: '🌾',
    badgeName: 'Cartógrafo del Ecosistema',
    badgeDescription: 'Comprendió el concepto de fragmentación del paisaje y la importancia de la planificación territorial ecológica.',
    territoryZone: 'Territorio Integrado',
    conflictSummary: 'División excesiva del paisaje por cultivos, potreros y vías: fragmentación de hábitats y alteración del agua y del suelo.',
    arrivalContext: 'Miras un mapa satelital de la región de La Mojana y Magangué. Donde antes había un mosaico continuo de selva inundable, hoy se ven pequeños parches verdes rodeados de cercas y terraplenes.',
    observationDetails: {
      spotlightTitle: 'Patrones en el mosaico territorial',
      details: [
        'Zonas boscosas reducidas a "islas" aisladas sin puentes vegetales entre sí.',
        'Canales artificiales y terraplenes que alteran el curso natural de las crecientes del río.',
        'Fauna que se ve obligada a cruzar carreteras y potreros abiertos donde es cazada o atropellada.'
      ],
      environmentalAspects: [
        'Aislamiento genético de poblaciones animales y vegetales en islas de hábitat.',
        'Alteración del pulso de inundación natural de La Mojana.',
        'Conflicto entre la vocación del suelo y las actividades agropecuarias intensivas.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `El paisaje pasó de tener zonas de vegetación conectada a estar dividido por cultivos, potreros, viviendas y caminos. La agricultura y la ganadería proporcionan recursos a las comunidades, pero la transformación excesiva puede fragmentar hábitats y modificar el suelo y el agua. Los Guardianes debían analizar cómo utilizar el territorio sin ignorar las relaciones ecológicas.`,
    readingWordCount: 52,
    literalQuestions: [
      {
        id: 'm9_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué actividades aparecen en el paisaje?',
        options: [
          { id: 'a', text: 'Cultivos, potreros (ganadería), viviendas y caminos lo que evidencia una alteración de los recursos disponibles.', isCorrect: true, feedback: '🌿 ¡Correcto! Esas son las actividades y elementos que dividen el territorio en la lectura.' },
          { id: 'b', text: 'Parques de diversiones y pistas de esquí en nieve analizando las dinámicas del territorio.', feedback: '🔎 Vuelve a revisar la primera oración del texto.' },
          { id: 'c', text: 'Únicamente fábricas de automóviles analizando las dinámicas del territorio.', feedback: '🔎 El texto describe cultivos, potreros, viviendas y caminos.' },
          { id: 'd', text: 'Puertos marítimos transatlánticos relacionado con el equilibrio biológico del área de estudio con consecuencias en la estructura demográfica de las especies analizando las dinámicas del territorio.', feedback: '🔎 Lee con atención las actividades agropecuarias mencionadas.' }
        ],
        pedagogicalTip: 'La respuesta está en la primera oración.'
      },
      {
        id: 'm9_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué elementos dividieron las zonas de vegetación?',
        options: [
          { id: 'a', text: 'Cultivos, potreros, viviendas y caminos en el área.', isCorrect: true, feedback: '🌿 ¡Exacto! Esos elementos humanos fragmentaron la vegetación que antes estaba conectada.' },
          { id: 'b', text: 'Una muralla de piedra construida en la época colonial analizando las dinámicas del territorio.', feedback: '🔎 Revisa la primera frase: ¿qué dividió las zonas conectadas?' },
          { id: 'c', text: 'Montañas volcánicas recién surgidas afectando la capacidad de regeneración de las zonas intervenidas dentro del marco del equilibrio natural.', feedback: '🔎 Concéntrate en la división del paisaje por el uso del suelo.' },
          { id: 'd', text: 'Cables submarinos de telecomunicaciones con consecuencias en la estructura demográfica de las especies dentro del marco del equilibrio natural.', feedback: '🔎 El texto habla de cultivos, potreros, viviendas y caminos.' }
        ],
        pedagogicalTip: 'Localiza qué causó la separación del dosel vegetal continuo.'
      },
      {
        id: 'm9_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué actividades humanas proporcionan recursos a las comunidades?',
        options: [
          { id: 'a', text: 'La agricultura y la ganadería.', isCorrect: true, feedback: '🌿 ¡Muy bien! El texto reconoce expresamente su valor alimentario y económico.' },
          { id: 'b', text: 'El comercio de tecnología espacial asociado a los impactos ambientales en la región descrita analizando las dinámicas del territorio.', feedback: '🔎 Lee la segunda oración: ¿qué actividades proporcionan recursos?' },
          { id: 'c', text: 'La venta de piedras talladas en la plaza analizando las dinámicas del territorio.', feedback: '🔎 El texto menciona textualmente agricultura y ganadería.' },
          { id: 'd', text: 'La pesca en aguas internacionales lejanas según los principios de ecología básica.', feedback: '🔎 Identifica las dos actividades productivas rurales del texto.' }
        ],
        pedagogicalTip: 'Observa el inicio de la segunda oración.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm9_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Cómo puede la fragmentación afectar a las especies?',
        options: [
          { id: 'a', text: 'Aísla a las poblaciones en parches pequeños, reduce el alimento y la reproducción cruzada y aumenta el riesgo de atropellamiento o caza.', isCorrect: true, feedback: '🌿 ¡Excelente deducción biológica! Los parches aislados actúan como jaulas sin rejas para las especies silvestres.' },
          { id: 'b', text: 'Hace que los animales aprendan a utilizar el transporte público según los principios de ecología básica.', feedback: '🔎 Piensa en las barreras físicas que impiden a los animales cruzar de un bosque a otro.' },
          { id: 'c', text: 'Favorece que los animales se hagan amigos de los tractores considerando las interacciones bióticas.', feedback: '🔎 Evalúa el aislamiento demográfico y la falta de espacio vital.' },
          { id: 'd', text: 'No les afecta porque los animales pueden teletransportarse según los principios de ecología básica.', feedback: '🔎 Reflexiona sobre el concepto ecológico de conectividad del paisaje.' }
        ],
        pedagogicalTip: 'Infiere las consecuencias de quedar atrapado en parches boscosos desconectados.'
      },
      {
        id: 'm9_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué el uso del territorio puede modificar agua y suelo?',
        options: [
          { id: 'a', text: 'Porque el arado intensivo compacta la tierra, la deforestación altera las lluvias y el desvío de cauces reseca humedales y satura otros afectando la capacidad de regeneración de las zonas intervenidas.', isCorrect: true, feedback: '🌿 ¡Pista inferencial descubierta! Las actividades agropecuarias mal planificadas alteran la hidrología y la textura del suelo.' },
          { id: 'b', text: 'Porque el suelo se vuelve de color azul cuando se siembra yuca desde una perspectiva de conservación.', feedback: '🔎 Piensa en cómo el pisoteo del ganado y el riego excesivo transforman la tierra.' },
          { id: 'c', text: 'Porque el agua desaparece mágicamente cuando ve personas cerca dentro del marco del equilibrio natural.', feedback: '🔎 Analiza el impacto de drenajes, canales y remoción de vegetación.' },
          { id: 'd', text: 'El uso del territorio nunca modifica el agua ni el suelo relacionado con el equilibrio biológico del área de estudio con consecuencias en la estructura demográfica de las especies lo que evidencia una alteración de los recursos disponibles según los principios de ecología básica.', feedback: '🔎 Recuerda que el suelo y el agua responden a las prácticas de manejo.' }
        ],
        pedagogicalTip: 'Conecta la maquinaria, el pisoteo del ganado y el drenaje con la hidrología y la erosión.'
      },
      {
        id: 'm9_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué conservación y producción deben analizarse conjuntamente?',
        options: [
          { id: 'a', text: 'Porque una producción que destruye la naturaleza se queda sin agua ni fertilidad futura, y una conservación que ignora a la gente no es sostenible a nivel local.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento integrador! Producción y conservación son dos caras de la misma moneda para la vida humana.' },
          { id: 'b', text: 'Para que los libros de geografía tengan el doble de páginas considerando las interacciones bióticas.', feedback: '🔎 Reflexiona sobre la interdependencia entre economía campesina y salud ambiental.' },
          { id: 'c', text: 'Porque a los animales les gusta trabajar en las cosechas de maíz relacionado con el equilibrio biológico del área de estudio con consecuencias en la estructura demográfica de las especies analizando las dinámicas del territorio.', feedback: '🔎 Evalúa la necesidad de producir alimentos sin liquidar el capital natural.' },
          { id: 'd', text: 'No deben analizarse juntas, son enemigas eternas que nunca pueden convivir con consecuencias en la estructura demográfica de las especies según los registros de observación del entorno natural desde una perspectiva de conservación.', feedback: '🔎 El desafío del Guardián es precisamente buscar el equilibrio armónico entre ambas.' }
        ],
        pedagogicalTip: 'Comprende que la agricultura depende de los servicios ecológicos (agua, suelo fértil, polinizadores) del bosque.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm9_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué medidas propondrías para ordenar este territorio?',
        options: [
          { id: 'a', text: 'Diseñar corredores biológicos entre parches de bosque, respetar rondas de ríos y ciénagas y delimitar zonas productivas sostenibles.', isCorrect: true, feedback: '🌿 ¡Propuesta de ordenamiento territorial de nivel experto! Reconecta la naturaleza sin expulsar la agricultura.' },
          { id: 'b', text: 'Asfaltar todo el territorio para que ningún animal tenga que pisar barro que forma parte integral de la dinámica de los ecosistemas locales asociado a los impactos ambientales en la región descrita desde una perspectiva de conservación.', feedback: '🔎 Eso aumentaría la temperatura y destruiría por completo la vocación fértil del suelo.' },
          { id: 'c', text: 'Eliminar todos los cultivos para que no haya comida en la región como un factor relevante en la cadena trófica del hábitat relacionado con el equilibrio biológico del área de estudio según los principios de ecología básica.', feedback: '🔎 Las comunidades necesitan soberanía alimentaria mediante prácticas ecológicas.' },
          { id: 'd', text: 'Dejar que cada persona tale y desvíe caños como prefiera sin ninguna norma como un factor relevante en la cadena trófica del hábitat como un factor relevante en la cadena trófica del hábitat considerando las interacciones bióticas.', feedback: '🔎 El desorden territorial es el causante directo de inundaciones y sequías extremas.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Propón herramientas de ordenamiento ambiental: rondas de protección, corredores verdes y zonificación.'
      },
      {
        id: 'm9_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Cómo podría planificarse mejor el territorio?',
        options: [
          { id: 'a', text: 'Con la participación activa de campesinos, pescadores, autoridades ambientales e indígenas, basándose en la geografía y ciclos del agua.', isCorrect: true, feedback: '🌿 ¡Planificación participativa ejemplar! Quienes habitan el territorio y conocen sus crecientes deben co-diseñar el plan.' },
          { id: 'b', text: 'Decidiendo todo desde una oficina cerrada en la capital sin visitar Magangué según los principios de ecología básica.', feedback: '🔎 Los planes de escritorio lejanos desconocen la realidad viva de las comunidades y humedales.' },
          { id: 'c', text: 'Lanzando monedas al aire para decidir dónde poner cada carretera según los principios de ecología básica.', feedback: '🔎 La planificación territorial exige ciencia ecológica, cartografía social y diálogo comunitario.' },
          { id: 'd', text: 'Esperando a que ocurra una tragedia invernal para improvisar soluciones temporales analizando las dinámicas del territorio.', feedback: '🔎 La prevención y la planificación anticipada evitan pérdidas de vidas y recursos.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Sustenta la planificación participativa basada en la cuenca hidrográfica y el saber local.'
      },
      {
        id: 'm9_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué una decisión sobre el suelo puede afectar a otros componentes del ecosistema?',
        options: [
          { id: 'a', text: 'Porque cambiar el uso del suelo altera la recarga de agua, la temperatura local, la supervivencia de la fauna y la seguridad de las familias según los registros de observación del entorno natural.', isCorrect: true, feedback: '🌿 ¡Criterio ecológico impecable! El suelo es la base sobre la que se sostienen el agua, la atmósfera y la biodiversidad.' },
          { id: 'b', text: 'Porque el suelo se queja mediante temblores cada vez que se siembra arroz analizando las dinámicas del territorio.', feedback: '🔎 Piensa en las consecuencias físicas y biológicas de la alteración del suelo.' },
          { id: 'c', text: 'Solo afecta a las lombrices de tierra, nada más en el planeta analizando las dinámicas del territorio.', feedback: '🔎 Valora la conexión entre el suelo y los ciclos hídricos y climáticos globales.' },
          { id: 'd', text: 'Las decisiones sobre el suelo no tienen ningún efecto fuera de la cerca de la finca relacionado con el equilibrio biológico del área de estudio afectando la capacidad de regeneración de las zonas intervenidas desde una perspectiva de conservación.', feedback: '🔎 Los impactos ambientales no respetan cercas ni linderos de propiedad privada.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Explica cómo el suelo regula el ciclo del agua, la vegetación y el clima regional.'
      }
    ],
    environmentalChallenge: {
      title: 'Mapeador Conceptual de Conectividad Territorial',
      instruction: 'Diseña un mapa sencillo que muestre cómo una transformación del territorio puede afectar varias especies.',
      type: 'map',
      fields: [
        { id: 'zoneA', label: '1. Zona de Hábitat Original (Bosque o Ciénaga Núcleo)', placeholder: 'Describe el ecosistema de origen y las especies que lo habitan (aves, monos, felinos)...', type: 'textarea' },
        { id: 'barrier', label: '2. Barrera o Transformación Creada por el Ser Humano', placeholder: 'Carretera sin pasos de fauna, potrero extenso deforestado, canal de drenaje...', type: 'textarea' },
        { id: 'affected_species', label: '3. Especies Afectadas y Cómo se Interrumpe su Vida', placeholder: 'Monos que no bajan al suelo quedan aislados; pequeños mamíferos son atropellados...', type: 'textarea' },
        { id: 'corridor_solution', label: '4. Solución de Conectividad Ecológica', placeholder: 'Corredores biológicos ribereños, puentes pasafauna aéreos y cercas vivas...', type: 'textarea' }
      ]
    }
  },
  {
    id: 10,
    slug: 'el-veneno-que-viajo-por-el-rio',
    title: 'El veneno que viajó por el río',
    icon: '☠️',
    badgeName: 'Investigador del Agua',
    badgeDescription: 'Comprendió los procesos de bioacumulación y biomagnificación del mercurio minero a través de la cadena trófica hasta el ser humano.',
    territoryZone: 'Ríos y Minería',
    conflictSummary: 'Contaminación con mercurio procedente de actividades mineras, bioacumulación en peces y afectación de la cadena trófica humana.',
    arrivalContext: 'Navegas por una curva del río Magdalena cerca de desembocaduras de cuencas mineras. Pescadores artesanales recogen redes con bocachicos y bagres, mientras aguas arriba operan dragas.',
    observationDetails: {
      spotlightTitle: 'Evidencias en la cuenca baja del río',
      details: [
        'Sedimentos grisáceos y aguas turbias con químicos pesados procedentes de la minería de oro.',
        'Peces carnívoros de gran tamaño (bagre rayado) en la dieta diaria de las familias ribereñas.',
        'Informes de salud con niveles detectables de metales pesados en comunidades de pescadores.'
      ],
      environmentalAspects: [
        'Persistencia química del mercurio y su transformación en metilmercurio tóxico.',
        'Proceso de biomagnificación en los niveles tróficos superiores.',
        'Afectación neurológica y reproductiva en organismos vivos y seres humanos.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `En una zona relacionada con actividades mineras, los Guardianes estudiaron el caso del mercurio. Comprendieron que un contaminante puede entrar al ambiente y llegar a organismos. Algunas sustancias pueden acumularse en los tejidos y aumentar su concentración a través de las relaciones alimentarias. Así, un problema que comienza en el agua puede terminar afectando organismos de diferentes niveles de una cadena alimentaria, incluidos los seres humanos que consumen determinados recursos.`,
    readingWordCount: 71,
    literalQuestions: [
      {
        id: 'm10_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué contaminante estudiaron?',
        options: [
          { id: 'a', text: 'El mercurio en el hábitat.', isCorrect: true, feedback: '🌿 ¡Correcto! El mercurio es el contaminante metálico citado textualmente.' },
          { id: 'b', text: 'El plástico triturado dentro del marco del equilibrio natural.', feedback: '🔎 Revisa la primera frase del texto.' },
          { id: 'c', text: 'Detergentes con cloro lo que evidencia una alteración de los recursos disponibles según los principios de ecología básica.', feedback: '🔎 Vuelve al texto: se trata del metal usado en minería.' },
          { id: 'd', text: 'Cenizas de carbón vegetal en el contexto de las problemáticas de conservación identificadas según los principios de ecología básica.', feedback: '🔎 El caso estudia específicamente el mercurio.' }
        ],
        pedagogicalTip: 'La respuesta está en la primera línea del texto.'
      },
      {
        id: 'm10_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Con qué actividad se relacionó el caso?',
        options: [
          { id: 'a', text: 'Con actividades mineras.', isCorrect: true, feedback: '🌿 ¡Exacto! Se originó en zonas vinculadas a la minería.' },
          { id: 'b', text: 'Con la siembra de plátano en fincas según los principios de ecología básica.', feedback: '🔎 Lee la primera línea: ¿en qué zona se estudió el caso?' },
          { id: 'c', text: 'Con la elaboración artesanal de queso analizando las dinámicas del territorio.', feedback: '🔎 El texto relaciona el mercurio con la actividad minera.' },
          { id: 'd', text: 'Con el turismo de playa en la costa desde una perspectiva de conservación.', feedback: '🔎 Identifica la actividad productiva causante en el texto.' }
        ],
        pedagogicalTip: 'Localiza la actividad en la primera oración.'
      },
      {
        id: 'm10_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Por qué organismos diferentes pueden entrar en contacto con el contaminante?',
        options: [
          { id: 'a', text: 'Porque el contaminante entra al ambiente, se acumula en los tejidos y viaja a través de las relaciones alimentarias.', isCorrect: true, feedback: '🌿 ¡Muy bien! Has identificado el mecanismo de propagación biológica del texto.' },
          { id: 'b', text: 'Porque todos los animales se reúnen a nadar juntos a la misma hora considerando las interacciones bióticas.', feedback: '🔎 Revisa cómo se transmite el contaminante según el segundo y tercer enunciado.' },
          { id: 'c', text: 'Porque el mercurio vuela por el aire como si fuera un insecto según los principios de ecología básica.', feedback: '🔎 El texto explica el paso del agua a los tejidos y a la cadena trófica.' },
          { id: 'd', text: 'Porque los pescadores pintan a los peces con pintura brillante considerando las interacciones bióticas.', feedback: '🔎 Observa la explicación científica de la acumulación en tejidos.' }
        ],
        pedagogicalTip: 'Extrae la explicación del segundo y tercer enunciado.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm10_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Cómo puede un contaminante del agua llegar a una cadena alimentaria?',
        options: [
          { id: 'a', text: 'Es absorbido por microorganismos y algas, que son comidos por peces pequeños, estos por peces mayores y finalmente por depredadores con consecuencias en la estructura demográfica de las especies.', isCorrect: true, feedback: '🌿 ¡Deducción de biomagnificación impecable! El contaminante sube peldaño a peldaño en la red trófica.' },
          { id: 'b', text: 'Los peces compran el contaminante en el mercado del río dentro del marco del equilibrio natural.', feedback: '🔎 Sigue la ruta ecológica de la alimentación entre eslabones acuáticos.' },
          { id: 'c', text: 'El agua se transforma en comida instantánea para las aves dentro del marco del equilibrio natural.', feedback: '🔎 Piensa en la ingesta biológica de fitoplancton a carnívoros.' },
          { id: 'd', text: 'Solo llega si los peces lo beben directamente en vasos de vidrio que forma parte integral de la dinámica de los ecosistemas locales como un factor relevante en la cadena trófica del hábitat que forma parte integral de la dinámica de los ecosistemas locales dentro del marco del equilibrio natural.', feedback: '🔎 Analiza la absorción tisular descrita en el texto.' }
        ],
        pedagogicalTip: 'Sigue el paso del mercurio: agua → microalgas → pez forrajero → gran depredador.'
      },
      {
        id: 'm10_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué los organismos de niveles tróficos superiores pueden estar expuestos a concentraciones mayores?',
        options: [
          { id: 'a', text: 'Por biomagnificación: un gran pez carnívoro ingiere cientos de presas contaminadas a lo largo de su vida acumulando todo su veneno a nivel local.', isCorrect: true, feedback: '🌿 ¡Pista clave descifrada! Los depredadores tope concentran el mercurio de miles de organismos inferiores.' },
          { id: 'b', text: 'Porque nadan más cerca de la superficie donde hace más sol dentro del marco del equilibrio natural.', feedback: '🔎 Piensa en la acumulación metabólica en grasas y tejidos musculares a lo largo del tiempo.' },
          { id: 'c', text: 'Porque los animales grandes son más débiles genéticamente en el contexto de las problemáticas de conservación identificadas vinculado a las alteraciones de los ciclos biológicos naturales según los principios de ecología básica.', feedback: '🔎 El fenómeno se debe a la suma sucesiva de dosis contenidas en cada presa consumida.' },
          { id: 'd', text: 'Porque los ríos profundos tienen más sal mineral según los registros de observación del entorno natural afectando la capacidad de regeneración de las zonas intervenidas según los principios de ecología básica.', feedback: '🔎 Recuerda el concepto de acumulación progresiva en tejidos a través de la dieta.' }
        ],
        pedagogicalTip: 'Aplica el principio de biomagnificación: el depredador grande come miles de presas y acumula el veneno de todas.'
      },
      {
        id: 'm10_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué los seres humanos también forman parte del problema?',
        options: [
          { id: 'a', text: 'Porque son quienes introducen el mercurio en la minería y a la vez son consumidores en la cima de la cadena al comer pescado contaminado.', isCorrect: true, feedback: '🌿 ¡Análisis integral perfecto! El ser humano es a la vez causa de la contaminación y víctima biológica de su propio impacto.' },
          { id: 'b', text: 'Porque a los humanos les gusta bañarse con agua de color plateado según los registros de observación del entorno natural con consecuencias en la estructura demográfica de las especies considerando las interacciones bióticas.', feedback: '🔎 Reflexiona sobre el papel del ser humano como agente extractivo y comensal del río.' },
          { id: 'c', text: 'Porque los humanos respiran bajo el agua en las ciénagas afectando la capacidad de regeneración de las zonas intervenidas en el contexto de las problemáticas de conservación identificadas considerando las interacciones bióticas.', feedback: '🔎 Conecta las actividades mineras humanas con el consumo posterior de recursos pesqueros.' },
          { id: 'd', text: 'Los humanos no forman parte del problema, la naturaleza genera mercurio sola asociado a los impactos ambientales en la región descrita como un factor relevante en la cadena trófica del hábitat considerando las interacciones bióticas.', feedback: '🔎 El texto señala explícitamente: "incluidos los seres humanos que consumen determinados recursos".' }
        ],
        pedagogicalTip: 'Comprende el doble rol humano: generador de la sustancia química y consumidor final del pescado de la cuenca.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm10_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué medidas de prevención propondrías frente a este problema?',
        options: [
          { id: 'a', text: 'Erradicar el uso de mercurio en la minería mediante tecnologías limpias gravimétricas, monitorear ríos y apoyar a mineros en reconversión.', isCorrect: true, feedback: '🌿 ¡Medidas de política y tecnología ambiental acertadas! Elimina el tóxico en la fuente sin dejar sin sustento a las familias.' },
          { id: 'b', text: 'Prohibir a las personas del Caribe comer pescado para siempre sin ofrecer otra comida analizando las dinámicas del territorio.', feedback: '🔎 El pescado es la base de la seguridad alimentaria caribeña; la solución es limpiar el río y erradicar el mercurio.' },
          { id: 'c', text: 'Echar cloro y perfume al río Magdalena para tapar el sabor del metal analizando las dinámicas del territorio.', feedback: '🔎 Eso aumentaría la toxicidad química del agua.' },
          { id: 'd', text: 'Verter más mercurio para que los peces se acostumbren a él considerando las interacciones bióticas.', feedback: '🔎 El mercurio es un veneno no biodegradable que daña el sistema nervioso.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Plantea alternativas de beneficio de oro libres de mercurio (mesas gravimétricas, centrifugación) y monitoreo.'
      },
      {
        id: 'm10_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué es importante vigilar el agua y los organismos continuamente?',
        options: [
          { id: 'a', text: 'Porque el mercurio es invisible e inodoro a simple vista; solo el análisis científico continuo detecta riesgos antes de daños graves en la salud como un factor relevante en la cadena trófica del hábitat.', isCorrect: true, feedback: '🌿 ¡Criterio preventivo esencial! Las amenazas invisibles requieren vigilancia científica de laboratorio.' },
          { id: 'b', text: 'Para que los científicos tengan trabajo y puedan salir en televisión dentro del marco del equilibrio natural.', feedback: '🔎 Valora la alerta temprana en salud pública y bioseguridad alimentaria.' },
          { id: 'c', text: 'Porque el agua cambia de color según el día de la semana desde una perspectiva de conservación.', feedback: '🔎 La toxicología ambiental permite proteger a comunidades vulnerables antes de intoxicaciones masivas.' },
          { id: 'd', text: 'No es importante vigilar, lo que no se ve no hace ningún daño en el contexto de las problemáticas de conservación identificadas vinculado a las alteraciones de los ciclos biológicos naturales afectando la capacidad de regeneración de las zonas intervenidas desde una perspectiva de conservación.', feedback: '🔎 Ese descuido histórico es el causante de graves enfermedades neurológicas en la región.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Sustenta la importancia de la bio-vigilancia y el principio de precaución en salud pública.'
      },
      {
        id: 'm10_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué responsabilidades deberían asumir quienes generan contaminación?',
        options: [
          { id: 'a', text: 'Reparar el daño ambiental, suspender de inmediato el vertimiento de sustancias tóxicas y asumir los costos médicos y de remediación ecológica en el área.', isCorrect: true, feedback: '🌿 ¡Principio ético y jurídico fundamental: "Quien contamina, responde y repara"! Justica ambiental pura.' },
          { id: 'b', text: 'Cambiar de nombre a su empresa y trasladarse a otro río para seguir contaminando según los principios de ecología básica.', feedback: '🔎 La evasión de responsabilidades vulnera los derechos fundamentales de las comunidades.' },
          { id: 'c', text: 'Ninguna responsabilidad, porque el oro es más importante que la salud humana que forma parte integral de la dinámica de los ecosistemas locales lo que evidencia una alteración de los recursos disponibles considerando las interacciones bióticas.', feedback: '🔎 La vida, la salud y la integridad de los ecosistemas están por encima de cualquier ganancia.' },
          { id: 'd', text: 'Pagar una moneda a cada habitante para que no hablen del tema según los registros de observación del entorno natural en el contexto de las problemáticas de conservación identificadas según los principios de ecología básica.', feedback: '🔎 La remediación exige restauración ecológica real y cese de prácticas lesivas.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Aplica el principio de responsabilidad ambiental y justicia restaurativa.'
      }
    ],
    environmentalChallenge: {
      title: 'Diagrama Trófico: Ruta del Contaminante en el Río',
      instruction: 'Dibuja una cadena alimentaria y señala cómo podría desplazarse un contaminante por ella.',
      type: 'chain',
      fields: [
        { id: 'level1', label: '1. Origen y Nivel 1 (Agua, lodo y plancton)', placeholder: 'Descarga de mercurio en el río → absorbido por bacterias y microalgas del lecho...', type: 'textarea' },
        { id: 'level2', label: '2. Nivel 2 (Consumidores primarios / peces pequeños)', placeholder: 'Peces forrajeros y caracoles comen algas con mercurio y lo retienen en sus órganos...', type: 'textarea' },
        { id: 'level3', label: '3. Nivel 3 (Grandes peces carnívoros / bagres)', placeholder: 'Grandes peces depredadores comen cientos de peces menores: alta biomagnificación...', type: 'textarea' },
        { id: 'level4', label: '4. Nivel 4 (Ser humano y aves pescadoras)', placeholder: 'Familias de pescadores consumen pescado frecuentemente: el veneno entra al cuerpo humano...', type: 'textarea' }
      ]
    }
  },
  {
    id: 11,
    slug: 'la-huella-de-la-mineria',
    title: 'La huella de la minería',
    icon: '⛏️',
    badgeName: 'Guardián del Territorio',
    badgeDescription: 'Comprendió el alcance espacial de los impactos mineros transportados por el agua, el viento y los organismos más allá del tajo de extracción.',
    territoryZone: 'Ríos y Minería',
    conflictSummary: 'Remoción masiva de suelo y vegetación por minería aluvial y dispersión de sedimentos y contaminantes a lo largo de la cuenca.',
    arrivalContext: 'Caminas por una zona donde una retroexcavadora y dragas removieron hectáreas de tierra. Montículos de grava estéril reemplazaron al bosque de galería y el río corre denso y marrón.',
    observationDetails: {
      spotlightTitle: 'Cicatrices del paisaje extractivo',
      details: [
        'Cráteres artificiales inundados con aguas estancadas de color amarillo verdoso.',
        'Suelo despojado de su capa vegetal orgánica fértil, dejando solo arenas y piedras.',
        'Playones aguas abajo colmatados de sedimentos que impiden la navegación de canoas.'
      ],
      environmentalAspects: [
        'Destrucción irreversible del perfil edáfico y la fertilidad del suelo.',
        'Sedimentación que asfixia lechos de desove de peces en ciénagas conectadas.',
        'Transporte de partículas y químicos finos por el viento y las corrientes fluviales.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `Los Guardianes observaron un territorio transformado por actividades mineras. Había zonas con vegetación removida y alteraciones del suelo y del agua. Comprendieron que la extracción de recursos puede modificar el paisaje y que sus efectos pueden desplazarse mediante el agua, el viento y los organismos. La misión era identificar las relaciones entre extracción, territorio y ecosistemas.`,
    readingWordCount: 54,
    literalQuestions: [
      {
        id: 'm11_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué actividad transformó el territorio?',
        options: [
          { id: 'a', text: 'Actividades mineras (extracción de recursos).', isCorrect: true, feedback: '🌿 ¡Correcto! La minería es la causa explícita señalada en la primera línea.' },
          { id: 'b', text: 'La siembra de flores ornamentales vinculado a las alteraciones de los ciclos biológicos naturales considerando las interacciones bióticas.', feedback: '🔎 Revisa la primera frase del texto.' },
          { id: 'c', text: 'La instalación de un parque de molinos de viento que forma parte integral de la dinámica de los ecosistemas locales considerando las interacciones bióticas.', feedback: '🔎 El texto habla de actividades mineras y extracción de recursos.' },
          { id: 'd', text: 'Un campeonato de fútbol intercolegial con consecuencias en la estructura demográfica de las especies considerando las interacciones bióticas.', feedback: '🔎 Identifica la actividad en la primera línea.' }
        ],
        pedagogicalTip: 'La respuesta está en la primera oración del caso.'
      },
      {
        id: 'm11_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué componentes fueron afectados?',
        options: [
          { id: 'a', text: 'La vegetación (removida), el suelo y el agua afectando la capacidad de regeneración de las zonas intervenidas.', isCorrect: true, feedback: '🌿 ¡Exacto! Los tres componentes físicos y biológicos citados en el texto.' },
          { id: 'b', text: 'Únicamente los cables de internet del municipio considerando las interacciones bióticas.', feedback: '🔎 Lee la segunda frase: ¿qué componentes sufrieron alteraciones?' },
          { id: 'c', text: 'Los aviones que vuelan por la estratósfera considerando las interacciones bióticas.', feedback: '🔎 El texto menciona vegetación removida, alteraciones del suelo y del agua.' },
          { id: 'd', text: 'Las estrellas del cielo nocturno desde una perspectiva de conservación.', feedback: '🔎 Identifica los tres elementos ambientales en el texto.' }
        ],
        pedagogicalTip: 'Observa la segunda oración de la lectura.'
      },
      {
        id: 'm11_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Por qué los efectos pueden desplazarse según el texto?',
        options: [
          { id: 'a', text: 'Porque pueden desplazarse mediante el agua, el viento y los organismos en el contexto de las problemáticas de conservación identificadas.', isCorrect: true, feedback: '🌿 ¡Muy bien! Son los tres vectores naturales de transporte citados en la lectura.' },
          { id: 'b', text: 'Porque viajan en camiones de carga con tiquete pagado desde una perspectiva de conservación.', feedback: '🔎 Revisa la tercera oración: ¿a través de qué medios viajan los efectos?' },
          { id: 'c', text: 'Porque la tierra gira muy rápido alrededor del sol dentro del marco del equilibrio natural.', feedback: '🔎 El texto señala: "mediante el agua, el viento y los organismos".' },
          { id: 'd', text: 'Porque las leyes ambientales los obligan a mudarse que forma parte integral de la dinámica de los ecosistemas locales con consecuencias en la estructura demográfica de las especies desde una perspectiva de conservación.', feedback: '🔎 Localiza los tres factores en la tercera frase.' }
        ],
        pedagogicalTip: 'Extrae los tres vectores de propagación en la tercera frase.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm11_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Cómo puede la pérdida de vegetación relacionarse con cambios del suelo?',
        options: [
          { id: 'a', text: 'Al quitar las plantas, el suelo queda sin raíces que lo sostengan y sin materia orgánica, volviéndose estéril, duro y fácil de lavar por la lluvia del territorio.', isCorrect: true, feedback: '🌿 ¡Gran deducción edafológica! La vegetación es la madre protectora y nutricia del suelo fértil.' },
          { id: 'b', text: 'el suelo sufre un proceso de compactacin y pǸrdida de nutrientes al quitar las raíces desde una perspectiva de conservación.', feedback: '🔎 Piensa en la pérdida de cohesión, retención de humedad y fertilidad.' },
          { id: 'c', text: 'Las plantas enfrían el suelo y sin ellas el suelo se evapora en el aire relacionado con el equilibrio biológico del área de estudio asociado a los impactos ambientales en la región descrita analizando las dinámicas del territorio.', feedback: '🔎 Conecta la remoción de capa vegetal con la desestructuración del suelo.' },
          { id: 'd', text: 'No se relaciona, el suelo es piedra inerte que no cambia jamás según los registros de observación del entorno natural asociado a los impactos ambientales en la región descrita analizando las dinámicas del territorio.', feedback: '🔎 Evalúa cómo la maquinaria y la falta de plantas arruinan la fertilidad.' }
        ],
        pedagogicalTip: 'Analiza cómo la pérdida de raíces desata erosión y pérdida total de fertilidad biológica.'
      },
      {
        id: 'm11_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Cómo puede el agua transportar contaminantes o sedimentos?',
        options: [
          { id: 'a', text: 'La corriente arrastra lodos finos y químicos disueltos río abajo, depositándolos en ciénagas, playones y campos de cultivo lejanos.', isCorrect: true, feedback: '🌿 ¡Pista inferencial clara! El río actúa como una gran banda transportadora de sedimentos y sustancias.' },
          { id: 'b', text: 'El agua congela los contaminantes y los empuja como bloques de hielo con consecuencias en la estructura demográfica de las especies lo que evidencia una alteración de los recursos disponibles analizando las dinámicas del territorio.', feedback: '🔎 Recuerda la fuerza del flujo continuo de los ríos de la cuenca del Caribe.' },
          { id: 'c', text: 'Los sedimentos caminan solos por la orilla del río durante la noche relacionado con el equilibrio biológico del área de estudio asociado a los impactos ambientales en la región descrita analizando las dinámicas del territorio.', feedback: '🔎 Infiere a partir de la dinámica hidrológica del arrastre por corriente.' },
          { id: 'd', text: 'El agua solo puede llevar cosas que floten como madera seca afectando la capacidad de regeneración de las zonas intervenidas en el contexto de las problemáticas de conservación identificadas dentro del marco del equilibrio natural.', feedback: '🔎 Las partículas en suspensión y sustancias disueltas viajan miles de kilómetros.' }
        ],
        pedagogicalTip: 'Imagina el río como una cinta transportadora: lo que se echa en la cabecera llega a las ciénagas bajas.'
      },
      {
        id: 'm11_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué los efectos ambientales pueden extenderse más allá del sitio de extracción?',
        options: [
          { id: 'a', text: 'Porque las cuencas y el viento no tienen fronteras; los ríos llevan los lodos y los animales que bebieron agua viajan a otros bosques.', isCorrect: true, feedback: '🌿 ¡Deducción de ecología del paisaje excelente! Un impacto local se vuelve regional por la movilidad del agua, aire y fauna.' },
          { id: 'b', text: 'Porque los mineros gritan tan fuerte que se escucha en todo el país considerando las interacciones bióticas.', feedback: '🔎 Analiza la conectividad física de los elementos naturales en una cuenca.' },
          { id: 'c', text: 'Porque la tierra se encoge cuando se extraen minerales pesados dentro del marco del equilibrio natural.', feedback: '🔎 Piensa en cómo el agua y el viento comunican lugares muy distantes.' },
          { id: 'd', text: 'Los efectos nunca se extienden, se quedan exactamente en el hoyo de la mina dentro del marco del equilibrio natural.', feedback: '🔎 El texto aclara expresamente que los efectos se desplazan mediante agua, viento y organismos.' }
        ],
        pedagogicalTip: 'Sintetiza: el agua fluye, el viento sopla y la fauna migra; el daño no se queda quieto.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm11_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué medidas de prevención y restauración propondrías?',
        options: [
          { id: 'a', text: 'Exigir planes de cierre con restitución de suelos, reforestación inmediata con especies pioneras nativas y prohibición de minería en rondas hídricas vinculado a las alteraciones de los ciclos biológicos naturales.', isCorrect: true, feedback: '🌿 ¡Propuesta técnica integral! Frena la destrucción en áreas críticas y obliga a cicatrizar las heridas del territorio.' },
          { id: 'b', text: 'Tapar los cráteres con basura plástica traída de las ciudades considerando las interacciones bióticas.', feedback: '🔎 Eso crearía una contaminación química aún más tóxica y peligrosa.' },
          { id: 'c', text: 'Prohibir a los campesinos hablar sobre la minería en las escuelas analizando las dinámicas del territorio.', feedback: '🔎 La educación y la denuncia informada son herramientas vitales de conservación.' },
          { id: 'd', text: 'Dejar que las lluvias inunden los tajos para que se conviertan en piscinas públicas lo que evidencia una alteración de los recursos disponibles afectando la capacidad de regeneración de las zonas intervenidas vinculado a las alteraciones de los ciclos biológicos naturales según los principios de ecología básica.', feedback: '🔎 Esas aguas contienen metales pesados y sedimentos peligrosos para la salud.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Formula medidas de restauración ecológica de suelos y protección estricta de ecosistemas frágiles.'
      },
      {
        id: 'm11_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué debería revisarse antes y durante una actividad extractiva?',
        options: [
          { id: 'a', text: 'Estudios de impacto ambiental serios, el cauce del agua subterránea y superficial, la presencia de comunidades y el plan de recuperación en el área.', isCorrect: true, feedback: '🌿 ¡Rigurosidad y vigilancia preventiva! La evaluación previa previene desastres irreversibles.' },
          { id: 'b', text: 'Únicamente el precio del oro en la bolsa de valores internacional analizando las dinámicas del territorio.', feedback: '🔎 La rentabilidad económica no puede primar sobre la supervivencia ecológica del territorio.' },
          { id: 'c', text: 'El color de los uniformes que usarán los operadores de las máquinas en el contexto de las problemáticas de conservación identificadas como un factor relevante en la cadena trófica del hábitat analizando las dinámicas del territorio.', feedback: '🔎 Lo crucial son los componentes ecológicos: agua, suelo, biodiversidad y salud comunitaria.' },
          { id: 'd', text: 'No se debe revisar nada, es mejor actuar primero y preocuparse después que forma parte integral de la dinámica de los ecosistemas locales asociado a los impactos ambientales en la región descrita dentro del marco del equilibrio natural.', feedback: '🔎 Ese descuido es la causa de los desastres ambientales documentados en el caso.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Sustenta la necesidad de estudios de impacto ambiental participativos y monitoreo en tiempo real.'
      },
      {
        id: 'm11_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué la restauración ambiental es importante?',
        options: [
          { id: 'a', text: 'Porque devuelve la capacidad a la tierra de generar vida, retener agua, brindar seguridad a las comunidades y evitar desiertos estériles.', isCorrect: true, feedback: '🌿 ¡Criterio ecológico restaurativo maduro! Sanar el territorio es garantizar la vida de las próximas generaciones.' },
          { id: 'b', text: 'Para que las fotos satelitales se vean bonitas en internet en el contexto de las problemáticas de conservación identificadas según los registros de observación del entorno natural desde una perspectiva de conservación.', feedback: '🔎 Piensa en la restauración de los servicios ecosistémicos indispensables para la vida humana y silvestre.' },
          { id: 'c', text: 'Porque la ley exige sembrar cinco flores para archivar un papel afectando la capacidad de regeneración de las zonas intervenidas vinculado a las alteraciones de los ciclos biológicos naturales considerando las interacciones bióticas.', feedback: '🔎 La restauración es un compromiso biológico y ético con la salud de la cuenca.' },
          { id: 'd', text: 'No es importante, la tierra destruida no le hace falta a nadie como un factor relevante en la cadena trófica del hábitat como un factor relevante en la cadena trófica del hábitat desde una perspectiva de conservación.', feedback: '🔎 Una tierra degradada genera pobreza, hambrunas y éxodos campesinos.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Defiende la restauración como un acto de reparación ecológica y justicia con el territorio.'
      }
    ],
    environmentalChallenge: {
      title: 'Ruta de Impactos de la Actividad Minera',
      instruction: 'Elabora una ruta de impactos de la actividad minera desde el sitio de extracción hasta otros componentes del ecosistema.',
      type: 'route',
      fields: [
        { id: 'stage1', label: '1. Sitio de Extracción (Tajo minero)', placeholder: 'Tala de bosque nativo, remoción de cobertura vegetal fértil y excavación de gravas...', type: 'textarea' },
        { id: 'stage2', label: '2. En el Suelo y la Atmósfera Local', placeholder: 'Pérdida de nutrientes del suelo, generación de polvo tóxico y vientos que dispersan partículas...', type: 'textarea' },
        { id: 'stage3', label: '3. En el Río y Cuerpos de Agua (Transporte fluvial)', placeholder: 'Sedimentos que enturbian el agua, mercurio en suspensión y colmatación de canales...', type: 'textarea' },
        { id: 'stage4', label: '4. En las Ciénagas Bajas, Peces y Comunidades', placeholder: 'Muerte de vegetación acuática, asfixia de alevinos de bocachico y consumo de peces contaminados por familias...', type: 'textarea' }
      ]
    }
  },
  {
    id: 12,
    slug: 'el-municipio-que-estaba-enfermando',
    title: 'El municipio que estaba enfermando',
    icon: '🗑️',
    badgeName: 'Guardián del Territorio Limpio',
    badgeDescription: 'Comprendió el ciclo de los residuos sólidos urbanos, su arrastre pluvial hacia ciénagas y caños, y los efectos nocivos de la quema de basuras.',
    territoryZone: 'Comunidad y Territorio',
    conflictSummary: 'Acumulación de basuras en calles y lotes de Magangué, arrastre hacia caños y ciénagas durante lluvias y contaminación del aire por quema.',
    arrivalContext: 'Recorres un barrio céntrico y sus caños tributarios en Magangué tras un fuerte aguacero tropical. Bolsas de plástico, llantas y envases flotan en los caños que van a la ciénaga.',
    observationDetails: {
      spotlightTitle: 'Rastros de residuos en caños urbanos',
      details: [
        'Lotes baldíos con basuras acumuladas que despiden lixiviados hacia el subsuelo.',
        'Humo denso y picante por quema clandestina de plásticos en las esquinas de los barrios.',
        'Caños taponados por residuos que provocan encharcamientos e inundaciones en las viviendas.'
      ],
      environmentalAspects: [
        'Transporte hídrico de plásticos hacia ecosistemas cenagosos y marinos.',
        'Generación de dioxinas y furanos cancerígenos al quemar residuos plásticos.',
        'Calles, suelos, aguas, fauna y personas como un solo sistema interconectado.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `Los Guardianes recorrieron diferentes sectores de Magangué y encontraron residuos acumulados en calles, lotes, zonas cercanas a viviendas y lugares próximos a caños y ciénagas. Había bolsas, envases, restos de alimentos, llantas y otros residuos abandonados sobre el suelo. Cuando llovía, parte de estos materiales podía ser arrastrada hacia canales y cuerpos de agua.

En algunos puntos encontraron residuos flotando o acumulados en cuerpos de agua. Los animales podían entrar en contacto con ellos o ingerirlos accidentalmente. En tierra, los residuos podían deteriorar el suelo y afectar organismos. Además, cuando algunas personas quemaban basura, se producía humo y se liberaban sustancias contaminantes al aire.

Los Guardianes comprendieron que la contaminación no desaparece porque dejemos de verla. Un residuo en una calle puede ser transportado por el agua; un contaminante del agua puede entrar en contacto con organismos; y la quema puede trasladar contaminantes al aire. Calles, suelos, caños, ciénagas, vegetación, animales y personas forman un sistema conectado.`,
    readingWordCount: 161,
    literalQuestions: [
      {
        id: 'm12_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué tipos de residuos encontraron?',
        options: [
          { id: 'a', text: 'Bolsas, envases, restos de alimentos, llantas y otros residuos abandonados.', isCorrect: true, feedback: '🌿 ¡Correcto! La lista textual exacta aparece en la segunda frase del primer párrafo.' },
          { id: 'b', text: 'Monedas de oro y diamantes preciosos desde una perspectiva de conservación.', feedback: '🔎 Revisa el segundo enunciado del primer párrafo.' },
          { id: 'c', text: 'Únicamente hojas secas que cayeron de los árboles dentro del marco del equilibrio natural.', feedback: '🔎 El texto detalla bolsas, envases, alimentos, llantas y desechos.' },
          { id: 'd', text: 'Instrumentos musicales rotos en una fiesta dentro del marco del equilibrio natural.', feedback: '🔎 Localiza la lista de basuras descrita por los Guardianes.' }
        ],
        pedagogicalTip: 'La respuesta está en la segunda oración del texto.'
      },
      {
        id: 'm12_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué podía ocurrir con algunos residuos cuando llovía?',
        options: [
          { id: 'a', text: 'Podían ser arrastrados hacia canales y cuerpos de agua afectando la capacidad de regeneración de las zonas intervenidas.', isCorrect: true, feedback: '🌿 ¡Exacto! El agua pluvial arrastraba los desechos hacia los caños.' },
          { id: 'b', text: 'Se convertían automáticamente en abono orgánico perfumado desde una perspectiva de conservación.', feedback: '🔎 Lee la tercera frase del primer párrafo.' },
          { id: 'c', text: 'Volaban hacia el cielo y desaparecían en las nubes dentro del marco del equilibrio natural.', feedback: '🔎 El texto indica que eran arrastrados hacia canales y agua.' },
          { id: 'd', text: 'Se derretían sin dejar ningún rastro químico que forma parte integral de la dinámica de los ecosistemas locales asociado a los impactos ambientales en la región descrita dentro del marco del equilibrio natural.', feedback: '🔎 Revisa el efecto de las lluvias sobre los residuos en las calles.' }
        ],
        pedagogicalTip: 'Observa la última frase del primer párrafo.'
      },
      {
        id: 'm12_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué componentes del ambiente podían verse afectados?',
        options: [
          { id: 'a', text: 'Calles, suelos, caños, ciénagas, aire, vegetación, animales y personas en el hábitat.', isCorrect: true, feedback: '🌿 ¡Muy bien! Todos los componentes interconectados del sistema socioambiental.' },
          { id: 'b', text: 'Solo los contenedores de basura de la alcaldía desde una perspectiva de conservación.', feedback: '🔎 Revisa los párrafos 2 y 3: ¿qué elementos sufren el impacto?' },
          { id: 'c', text: 'Únicamente las plantas de plástico de las casas vinculado a las alteraciones de los ciclos biológicos naturales desde una perspectiva de conservación.', feedback: '🔎 El texto habla de suelo, agua, aire, organismos y personas.' },
          { id: 'd', text: 'Ningún componente, porque el plástico es biodegradable en un minuto vinculado a las alteraciones de los ciclos biológicos naturales considerando las interacciones bióticas.', feedback: '🔎 Concéntrate en la frase final: "forman un sistema conectado".' }
        ],
        pedagogicalTip: 'Extrae la red de componentes descrita en el segundo y tercer párrafo.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm12_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Cómo puede un residuo de una calle terminar afectando un cuerpo de agua?',
        options: [
          { id: 'a', text: 'La lluvia lo lava de la calle al desagüe, de allí al caño urbano y del caño desemboca en la ciénaga o el río.', isCorrect: true, feedback: '🌿 ¡Deducción de drenaje hídrico perfecta! El flujo superficial conecta el asfalto con el ecosistema acuático.' },
          { id: 'b', text: 'El residuo camina con patas hacia el río para nadar asociado a los impactos ambientales en la región descrita con consecuencias en la estructura demográfica de las especies según los principios de ecología básica.', feedback: '🔎 Piensa en la fuerza mecánica de la corriente de las lluvias torrenciales.' },
          { id: 'c', text: 'Los vecinos llevan la basura de la calle en canoa al centro de la ciénaga a propósito vinculado a las alteraciones de los ciclos biológicos naturales dentro del marco del equilibrio natural.', feedback: '🔎 Infiere a partir del arrastre natural de las aguas pluviales en calles inclinadas.' },
          { id: 'd', text: 'Los peces del río salen a la calle a recoger la basura afectando la capacidad de regeneración de las zonas intervenidas desde una perspectiva de conservación.', feedback: '🔎 Conecta el ciclo del agua con el transporte de contaminantes sólidos.' }
        ],
        pedagogicalTip: 'Sigue la pendiente del agua: calle inclinada → cuneta → caño → ciénaga.'
      },
      {
        id: 'm12_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué contaminar un cuerpo de agua puede afectar a organismos que no viven permanentemente allí?',
        options: [
          { id: 'a', text: 'Porque aves migratorias, ganado y seres humanos beben de esa agua, consumen sus peces y entran en contacto con sus orillas.', isCorrect: true, feedback: '🌿 ¡Pista clave revelada! Un humedal abastece a infinidad de especies terrestres y aéreas que dependen de él.' },
          { id: 'b', text: 'Porque los animales del desierto viajan en avión a visitar la ciénaga analizando las dinámicas del territorio.', feedback: '🔎 Recuerda que animales terrestres y aves acuden al agua para alimentarse e hidratarse.' },
          { id: 'c', text: 'Porque el agua envenenada emite ondas de radio que persiguen a los animales considerando las interacciones bióticas.', feedback: '🔎 Analiza las cadenas tróficas y el uso compartido del agua dulce.' },
          { id: 'd', text: 'No les afecta en absoluto si no viven dentro del agua todo el tiempo según los principios de ecología básica.', feedback: '🔎 Todos los organismos del territorio dependen del agua para calmar la sed y comer.' }
        ],
        pedagogicalTip: 'Piensa en las especies que van al agua solo a beber o alimentarse: ganado, aves, seres humanos.'
      },
      {
        id: 'm12_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Qué relación existe entre quema de residuos y contaminación del aire?',
        options: [
          { id: 'a', text: 'Al quemar plásticos y llantas, el fuego no destruye los químicos sino que los convierte en gases tóxicos y humo que todos respiramos según los registros de observación del entorno natural.', isCorrect: true, feedback: '🌿 ¡Comprensión química del residuo impecable! La materia no desaparece: el residuo sólido se vuelve gas venenoso.' },
          { id: 'b', text: 'La quema limpia el aire y produce perfume de rosas en el barrio considerando las interacciones bióticas.', feedback: '🔎 El humo libera toxinas peligrosas y material particulado a los pulmones.' },
          { id: 'c', text: 'El fuego hace que la basura se vuelva invisible y deje de existir para siempre considerando las interacciones bióticas.', feedback: '🔎 Recuerda el principio: "la contaminación no desaparece porque dejemos de verla".' },
          { id: 'd', text: 'No existe relación, el humo de la basura sube a la luna directamente según los registros de observación del entorno natural que forma parte integral de la dinámica de los ecosistemas locales que forma parte integral de la dinámica de los ecosistemas locales dentro del marco del equilibrio natural.', feedback: '🔎 El humo permanece en el aire que respiran los niños y ancianos del municipio.' }
        ],
        pedagogicalTip: 'Recuerda: la materia no se destruye; quemar plástico traslada el veneno del suelo a los pulmones.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm12_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué acciones propondrías para disminuir la contaminación?',
        options: [
          { id: 'a', text: 'Separación en la fuente, rutas eficientes de recolección municipal, prohibición y sanción de quema y jornadas de limpieza comunitaria de caños del territorio.', isCorrect: true, feedback: '🌿 ¡Plan integral de gestión de residuos! Combina educación ciudadana, servicio público eficiente y orden.' },
          { id: 'b', text: 'Arrojar toda la basura al río Cauca para que se la lleve más rápido considerando las interacciones bióticas.', feedback: '🔎 Eso contaminaría a las comunidades vecinas aguas abajo.' },
          { id: 'c', text: 'Enterrar las llantas y plásticos debajo de las camas de las casas afectando la capacidad de regeneración de las zonas intervenidas que forma parte integral de la dinámica de los ecosistemas locales dentro del marco del equilibrio natural.', feedback: '🔎 Esas sustancias tóxicas dañan la salud en espacios cerrados.' },
          { id: 'd', text: 'Prohibir a las personas comprar comida o agua con consecuencias en la estructura demográfica de las especies según los registros de observación del entorno natural en el contexto de las problemáticas de conservación identificadas dentro del marco del equilibrio natural.', feedback: '🔎 La clave es el consumo responsable, la reducción de plásticos y el reciclaje.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Plantea la estrategia de las 3R (Reducir, Reutilizar, Reciclar) y la recolección municipal regular.'
      },
      {
        id: 'm12_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Cómo responderías a quien dice que la basura de un lote no afecta al río?',
        options: [
          { id: 'a', text: 'Mostrándole que la lluvia y el viento no respetan linderos; los lixiviados van al acuífero y el agua arrastra los plásticos directo al caño y al río.', isCorrect: true, feedback: '🌿 ¡Argumentación pedagógica irrebatible! Desmonta el mito de la basura "aislada" con el ciclo del agua.' },
          { id: 'b', text: 'Diciéndole que tiene razón y que arroje más basura al lote relacionado con el equilibrio biológico del área de estudio en el contexto de las problemáticas de conservación identificadas desde una perspectiva de conservación.', feedback: '🔎 El Guardián enseña la conexión ecológica del territorio con fundamentos.' },
          { id: 'c', text: 'Peleando a gritos en la calle sin explicar razones que forma parte integral de la dinámica de los ecosistemas locales lo que evidencia una alteración de los recursos disponibles dentro del marco del equilibrio natural.', feedback: '🔎 La pedagogía ambiental convence con evidencia científica y sentido común.' },
          { id: 'd', text: 'Diciéndole que el río tiene filtros mágicos que desintegran las llantas lo que evidencia una alteración de los recursos disponibles afectando la capacidad de regeneración de las zonas intervenidas analizando las dinámicas del territorio.', feedback: '🔎 Las llantas y plásticos duran cientos de años contaminando los cuerpos de agua.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Usa la evidencia del arrastre pluvial para demostrar que el lote y el río están conectados.'
      },
      {
        id: 'm12_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué solucionar la contaminación requiere acciones de toda la comunidad?',
        options: [
          { id: 'a', text: 'Porque todos generamos residuos diariamente y si una sola persona o barrio arroja basura, el sistema conectado de caños y aire afectará a todos por igual.', isCorrect: true, feedback: '🌿 ¡Principio de corresponsabilidad territorial! El cuidado del entorno común exige el compromiso de cada vecino e institución.' },
          { id: 'b', text: 'Para que la alcaldía no tenga que hacer nada en todo el año según los principios de ecología básica.', feedback: '🔎 La alcaldía tiene deberes legales, pero requiere el comportamiento cívico de la ciudadanía.' },
          { id: 'c', text: 'Porque es una regla impuesta para cansar a los estudiantes en vacaciones dentro del marco del equilibrio natural.', feedback: '🔎 La limpieza del municipio salva vidas de enfermedades como dengue y cólera.' },
          { id: 'd', text: 'No se requiere de toda la comunidad, con que limpie una sola persona alcanza considerando las interacciones bióticas.', feedback: '🔎 Una persona no puede limpiar los residuos de miles de habitantes si estos continúan arrojándolos.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Sustenta el principio de bien común y corresponsabilidad ciudadana e institucional.'
      }
    ],
    environmentalChallenge: {
      title: 'Trazado de la Ruta del Residuo',
      instruction: 'Traza la ruta: calle/lote → lluvia → canal/caño → ciénaga → organismos → personas. Explica el recorrido de un residuo.',
      type: 'route',
      fields: [
        { id: 'p1', label: '1. Calle o Lote (Origen)', placeholder: 'Una bolsa plástica y envases son tirados en un lote baldío del barrio...', type: 'text' },
        { id: 'p2', label: '2. Lluvia Tropical (Transporte inicial)', placeholder: 'El aguacero torrencial lava la calle y arrastra la bolsa hacia la cuneta...', type: 'text' },
        { id: 'p3', label: '3. Canal / Caño (Vía de flujo)', placeholder: 'La basura entra al caño comunal, lo obstruye y causa desbordamiento...', type: 'text' },
        { id: 'p4', label: '4. Ciénaga / Río (Ecosistema receptor)', placeholder: 'Desemboca en la ciénaga donde se fragmenta en microplásticos flotantes...', type: 'text' },
        { id: 'p5', label: '5. Organismos (Ingesta accidental)', placeholder: 'Peces y aves acuáticas confunden los plásticos con comida y se atoran...', type: 'text' },
        { id: 'p6', label: '6. Personas (Impacto de regreso)', placeholder: 'Las familias consumen peces afectados, sufren inundaciones y respiran malos olores...', type: 'text' }
      ]
    }
  },
  {
    id: 13,
    slug: 'un-clima-que-esta-cambiando',
    title: 'Un clima que está cambiando',
    icon: '🌡️',
    badgeName: 'Guardián del Clima',
    badgeDescription: 'Diferenció el tiempo meteorológico del cambio climático global y comprendió las acciones de mitigación y adaptación regional.',
    territoryZone: 'Territorio Integrado',
    conflictSummary: 'Períodos de calor sofocante, sequías severas e inundaciones extremas atribuidas a gases de efecto invernadero y deforestación.',
    arrivalContext: 'Contemplas las riberas del río Cauca en La Mojana. Marcas de crecientes históricas en las paredes de las casas contrastan con playones agrietados por meses de sequía implacable.',
    observationDetails: {
      spotlightTitle: 'Señales climáticas en La Mojana',
      details: [
        'Cultivos de arroz inundados por roturas de diques en invierno prolongado.',
        'Suelos agrícolas endurecidos como ladrillo y pozos secos durante veranos atípicos.',
        'Pobladores que comentan que el régimen de lluvias ya no coincide con los almanaques tradicionales.'
      ],
      environmentalAspects: [
        'Efecto invernadero potenciado por quema de combustibles fósiles y tala de bosques.',
        'Diferencia conceptual entre el tiempo meteorológico del día y el sistema climático a largo plazo.',
        'Vulnerabilidad climática en planicies inundables de la depresión momposina.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `Las personas del territorio comentaban que habían experimentado períodos de calor, lluvias fuertes, sequías y cambios repentinos del tiempo. Los Guardianes estudiaron que el clima tiene variaciones naturales, pero que las actividades humanas, especialmente la emisión de gases de efecto invernadero por combustibles fósiles y la deforestación, contribuyen al calentamiento global y pueden modificar condiciones climáticas.

El equipo comprendió que no todos los eventos meteorológicos tienen una única causa humana, pero que el calentamiento global modifica el sistema climático y puede aumentar ciertos riesgos y cambios regionales.`,
    readingWordCount: 88,
    literalQuestions: [
      {
        id: 'm13_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué cambios del tiempo mencionan las personas?',
        options: [
          { id: 'a', text: 'Períodos de calor, lluvias fuertes, sequías y cambios repentinos del tiempo como un factor relevante en la cadena trófica del hábitat.', isCorrect: true, feedback: '🌿 ¡Correcto! Esos cuatro fenómenos aparecen textualmente en la primera línea.' },
          { id: 'b', text: 'Nevadas constantes y formación de glaciares en el río analizando las dinámicas del territorio.', feedback: '🔎 Lee la primera oración del caso.' },
          { id: 'c', text: 'Lluvia de ranas y granizo de diamantes según los principios de ecología básica.', feedback: '🔎 El texto habla de calor, lluvias fuertes, sequías y cambios repentinos.' },
          { id: 'd', text: 'Que el tiempo no había cambiado en absoluto vinculado a las alteraciones de los ciclos biológicos naturales como un factor relevante en la cadena trófica del hábitat desde una perspectiva de conservación.', feedback: '🔎 Vuelve a leer lo que comentaban los pobladores del territorio.' }
        ],
        pedagogicalTip: 'La respuesta está en la primera línea.'
      },
      {
        id: 'm13_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué actividades humanas contribuyen al calentamiento global según el texto?',
        options: [
          { id: 'a', text: 'La emisión de gases de efecto invernadero por combustibles fósiles y la deforestación del territorio.', isCorrect: true, feedback: '🌿 ¡Exacto! Ambas actividades humanas se destacan en la segunda oración.' },
          { id: 'b', text: 'El uso de bicicletas y la siembra de huertas caseras considerando las interacciones bióticas.', feedback: '🔎 Lee la segunda oración: ¿qué actividades humanas emiten gases?' },
          { id: 'c', text: 'La lectura de libros infantiles en las bibliotecas afectando la capacidad de regeneración de las zonas intervenidas desde una perspectiva de conservación.', feedback: '🔎 El texto menciona combustibles fósiles y deforestación.' },
          { id: 'd', text: 'Dormir temprano por las noches de calor lo que evidencia una alteración de los recursos disponibles que forma parte integral de la dinámica de los ecosistemas locales según los principios de ecología básica.', feedback: '🔎 Identifica las dos actividades extractivas señaladas en el texto.' }
        ],
        pedagogicalTip: 'Observa la segunda oración del primer párrafo.'
      },
      {
        id: 'm13_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué diferencia establece el texto entre el clima y eventos particulares?',
        options: [
          { id: 'a', text: 'El clima tiene variaciones naturales y no todo evento meteorológico tiene una única causa humana, pero el calentamiento global modifica el sistema general.', isCorrect: true, feedback: '🌿 ¡Muy bien! Has comprendido la distinción científica entre evento puntual y sistema climático.' },
          { id: 'b', text: 'Que el clima es una invención de la televisión y los eventos son reales vinculado a las alteraciones de los ciclos biológicos naturales afectando la capacidad de regeneración de las zonas intervenidas considerando las interacciones bióticas.', feedback: '🔎 Revisa el segundo párrafo sobre eventos meteorológicos vs sistema climático.' },
          { id: 'c', text: 'Que el clima solo dura diez minutos y los eventos duran cien años según los registros de observación del entorno natural afectando la capacidad de regeneración de las zonas intervenidas según los principios de ecología básica.', feedback: '🔎 El texto aclara que hay variaciones naturales pero el sistema global se modifica.' },
          { id: 'd', text: 'No establece ninguna diferencia, son exactamente la misma palabra lo que evidencia una alteración de los recursos disponibles asociado a los impactos ambientales en la región descrita dentro del marco del equilibrio natural.', feedback: '🔎 Fíjate en la distinción entre un evento meteorológico y el sistema climático general.' }
        ],
        pedagogicalTip: 'Localiza la diferenciación en el segundo párrafo.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm13_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué no todo evento meteorológico tiene una única causa humana?',
        options: [
          { id: 'a', text: 'Porque la Tierra tiene ciclos naturales (como El Niño y La Niña), pero las emisiones humanas alteran su intensidad y frecuencia.', isCorrect: true, feedback: '🌿 ¡Deducción científica impecable! La variabilidad natural interactúa con la presión del calentamiento global antropogénico.' },
          { id: 'b', text: 'Porque los eventos meteorológicos son enviados por meteoritos del espacio desde una perspectiva de conservación.', feedback: '🔎 Piensa en la combinación entre ciclos planetarios naturales y alteración humana.' },
          { id: 'c', text: 'Porque los seres humanos no tienen ningún poder sobre la atmósfera desde una perspectiva de conservación.', feedback: '🔎 El texto aclara que el calentamiento modifica el sistema aumentando riesgos.' },
          { id: 'd', text: 'Porque el tiempo atmosférico se inventó hace dos días desde una perspectiva de conservación.', feedback: '🔎 Recuerda que el clima ha variado de forma natural a lo largo de las eras geológicas.' }
        ],
        pedagogicalTip: 'Distingue entre la variabilidad natural del planeta y el calentamiento acelerado por actividades humanas.'
      },
      {
        id: 'm13_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Cómo pueden las emisiones humanas contribuir al calentamiento global?',
        options: [
          { id: 'a', text: 'Los gases de combustibles fósiles atrapan el calor del sol en la atmósfera como un invernadero impidiendo que escape al espacio en el contexto de las problemáticas de conservación identificadas.', isCorrect: true, feedback: '🌿 ¡Pista maestra descifrada! El exceso de gases termoactivos eleva la temperatura media planetaria.' },
          { id: 'b', text: 'Las emisiones son fuego directo que enciende fósforos en el cielo según los principios de ecología básica.', feedback: '🔎 Comprende el mecanismo de retención de radiación infrarroja de los gases de efecto invernadero.' },
          { id: 'c', text: 'Las emisiones empujan a la Tierra más cerca del sol en su órbita analizando las dinámicas del territorio.', feedback: '🔎 Analiza el concepto de "efecto invernadero" citado en el texto.' },
          { id: 'd', text: 'Las emisiones humanas enfrían el planeta congelando los trópicos vinculado a las alteraciones de los ciclos biológicos naturales con consecuencias en la estructura demográfica de las especies asociado a los impactos ambientales en la región descrita considerando las interacciones bióticas.', feedback: '🔎 El texto habla de calentamiento global y aumento de temperaturas.' }
        ],
        pedagogicalTip: 'Explica el mecanismo del efecto invernadero: retención del calor por acumulación de gases.'
      },
      {
        id: 'm13_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué la deforestación puede relacionarse con el cambio climático?',
        options: [
          { id: 'a', text: 'Porque los árboles absorben y almacenan dióxido de carbono; al talarlos y quemarlos, ese carbono se libera a la atmósfera calentando el aire en el área.', isCorrect: true, feedback: '🌿 ¡Excelente conexión biológica! Los bosques son el gran pulmón y sumidero de carbono del planeta.' },
          { id: 'b', text: 'Porque los árboles talados atraen a los truenos y relámpagos analizando las dinámicas del territorio.', feedback: '🔎 Conecta el papel de los árboles como almacenes de carbono con el calentamiento global.' },
          { id: 'c', text: 'Porque las hojas verdes reflejan la luz de la luna según los registros de observación del entorno natural con consecuencias en la estructura demográfica de las especies según los principios de ecología básica.', feedback: '🔎 Evalúa cómo la pérdida del dosel vegetal incrementa el CO2 en el aire.' },
          { id: 'd', text: 'No tiene relación, los árboles no tienen nada que ver con el aire asociado a los impactos ambientales en la región descrita lo que evidencia una alteración de los recursos disponibles según los principios de ecología básica.', feedback: '🔎 Recuerda que la fotosíntesis captura carbono y regula la humedad atmosférica.' }
        ],
        pedagogicalTip: 'Recuerda: el árbol vivo guarda carbono; el árbol talado o quemado lo devuelve como gas invernadero.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm13_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué acciones de adaptación y mitigación propondrías?',
        options: [
          { id: 'a', text: 'Mitigación: frenar la deforestación y usar energías limpias; Adaptación: proteger ciénagas amortiguadoras de crecientes y diversificar cultivos.', isCorrect: true, feedback: '🌿 ¡Estrategia climática completa y rigurosa! Ataca las causas (mitigación) y protege a la comunidad de los impactos (adaptación).' },
          { id: 'b', text: 'Mitigación: comprar más ventiladores; Adaptación: quejarse del sol en la calle con consecuencias en la estructura demográfica de las especies con consecuencias en la estructura demográfica de las especies dentro del marco del equilibrio natural.', feedback: '🔎 Las respuestas deben ser estructurales y ecológicas para el territorio de La Mojana.' },
          { id: 'c', text: 'Talar todos los árboles para que no se caigan con las tormentas con consecuencias en la estructura demográfica de las especies que forma parte integral de la dinámica de los ecosistemas locales desde una perspectiva de conservación.', feedback: '🔎 Talar aumentaría las emisiones y empeoraría las inundaciones.' },
          { id: 'd', text: 'Esperar a que el clima se arregle solo sin cambiar ninguna práctica humana vinculado a las alteraciones de los ciclos biológicos naturales que forma parte integral de la dinámica de los ecosistemas locales según los principios de ecología básica.', feedback: '🔎 La inacción climática condena a las comunidades ribereñas a desastres continuos.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Distingue claramente: Mitigar = reducir causas (emisiones/tala); Adaptar = prepararse para los efectos (inundaciones/sequías).'
      },
      {
        id: 'm13_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué es importante distinguir entre tiempo atmosférico y clima?',
        options: [
          { id: 'a', text: 'Porque el tiempo es el estado de hoy (si llovió o hizo sol), mientras que el clima es el patrón de décadas; confundirlos impide planificar a largo plazo.', isCorrect: true, feedback: '🌿 ¡Distinción epistemológica fundamental! Un día frío no niega el calentamiento global, como una golondrina no hace verano.' },
          { id: 'b', text: 'Para pasar los exámenes de geografía con buena calificación desde una perspectiva de conservación.', feedback: '🔎 Comprende la diferencia temporal: el tiempo cambia a diario; el clima define el régimen a largo plazo.' },
          { id: 'c', text: 'Porque el tiempo atmosférico lo inventó la radio y el clima los libros dentro del marco del equilibrio natural.', feedback: '🔎 Reflexiona sobre cómo esta confusión lleva a la gente a negar la crisis climática.' },
          { id: 'd', text: 'No es importante, cualquier persona puede llamarlos como quiera analizando las dinámicas del territorio.', feedback: '🔎 La precisión conceptual permite tomar decisiones agrícolas y de prevención de desastres acertadas.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Enfatiza la escala temporal: tiempo = hoy (horas/días); clima = tendencia histórica (décadas/siglos).'
      },
      {
        id: 'm13_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué responsabilidades pueden asumir comunidad, instituciones y personas?',
        options: [
          { id: 'a', text: 'Personas: no quemar basuras ni talar; Instituciones: invertir en alertas tempranas y protección de cuencas; Comunidad: organizar comités de resiliencia que forma parte integral de la dinámica de los ecosistemas locales.', isCorrect: true, feedback: '🌿 ¡Distribución ética de roles perfecta! La acción climática requiere la articulación de todos los niveles sociales.' },
          { id: 'b', text: 'Solo el presidente de la república debe preocuparse por el clima según los principios de ecología básica.', feedback: '🔎 La responsabilidad climática involucra desde el hogar local hasta los tratados internacionales.' },
          { id: 'c', text: 'Ninguna responsabilidad, el ser humano no puede hacer nada frente a la naturaleza desde una perspectiva de conservación.', feedback: '🔎 Nuestras decisiones de consumo, siembra y energía tienen un impacto directo en el clima.' },
          { id: 'd', text: 'La única responsabilidad es cerrar las ventanas cuando llueva vinculado a las alteraciones de los ciclos biológicos naturales lo que evidencia una alteración de los recursos disponibles afectando la capacidad de regeneración de las zonas intervenidas desde una perspectiva de conservación.', feedback: '🔎 La resiliencia territorial exige obras de protección, educación y adaptación productiva.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Distribuye responsabilidades según escala: individual (hábitos), comunitaria (resiliencia local) e institucional (políticas públicas).'
      }
    ],
    environmentalChallenge: {
      title: 'Ficha de Acción Climática: Mitigación y Adaptación',
      instruction: 'Elabora una acción de mitigación y una de adaptación frente al cambio climático.',
      type: 'mitigation_adaptation',
      fields: [
        { id: 'mitigation_title', label: '1. Título de la Acción de Mitigación (Reducir causas)', placeholder: 'Ej. Reforestación comunitaria de rondas hídricas con árboles nativos sumideros de carbono...', type: 'text' },
        { id: 'mitigation_desc', label: 'Descripción de cómo reduce emisiones o captura carbono', placeholder: 'Los árboles capturan CO2 del aire y al frenar la deforestación evitamos que el carbono almacenado se libere...', type: 'textarea' },
        { id: 'adaptation_title', label: '2. Título de la Acción de Adaptación (Prepararse para efectos)', placeholder: 'Ej. Restauración de ciénagas como esponjas naturales frente a inundaciones en La Mojana...', type: 'text' },
        { id: 'adaptation_desc', label: 'Descripción de cómo protege a la comunidad ante sequías e inundaciones', placeholder: 'Al permitir que la ciénaga reciba los excesos del río Cauca, las viviendas no se inundan y en verano retiene agua para regadío...', type: 'textarea' }
      ]
    }
  },
  {
    id: 14,
    slug: 'la-planta-que-cubrio-el-agua',
    title: 'La planta que cubrió el agua',
    icon: '🌿',
    badgeName: 'Protector de los Humedales',
    badgeDescription: 'Comprendió la diferencia entre abundancia biológica y especie invasora, aplicando el principio de investigar y comprender antes de intervenir.',
    territoryZone: 'Ciénagas y Caños',
    conflictSummary: 'Proliferación masiva de tarulla (tapón flotante) sobre la ciénaga: análisis ecológico previo antes de tomar decisiones de extracción o control.',
    arrivalContext: 'Te asomas a la orilla de una ciénaga en las afueras de Magangué. Una alfombra verde brillante de tarulla o jacinto de agua cubre casi la totalidad del espejo de agua.',
    observationDetails: {
      spotlightTitle: 'Manto verde sobre la ciénaga',
      details: [
        'Superficie del agua completamente oculta bajo hojas flotantes y raíces densas.',
        'Pescadores que no pueden remar sus canoas ni lanzar atarrayas debido al taponamiento.',
        'Aguas oscuras por debajo del manto con menor penetración de luz solar y olor a descomposición.'
      ],
      environmentalAspects: [
        'Capacidad fito-remediadora de la tarulla para absorber exceso de nutrientes de aguas servidas.',
        'Desoxigenación y bloqueo de fotosíntesis para fitoplancton sumergido por cobertura total.',
        'Principio fundamental del Guardián: indagar causas profundas antes de arrasar con la especie.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `En una ciénaga, los Guardianes observaron una gran cantidad de tarulla cubriendo la superficie del agua. Antes de intervenir, decidieron investigar qué especie era, por qué había aumentado y qué efectos estaba produciendo. Comprendieron que una especie introducida puede convertirse en invasora cuando causa impactos y se establece de manera que afecta comunidades o procesos ecológicos. No toda presencia abundante significa automáticamente que una especie sea invasora; primero hay que comprender el contexto.`,
    readingWordCount: 76,
    literalQuestions: [
      {
        id: 'm14_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué planta observaron?',
        options: [
          { id: 'a', text: 'Tarulla en el área.', isCorrect: true, feedback: '🌿 ¡Correcto! La tarulla (jacinto acuático) es la planta nombrada textualmente.' },
          { id: 'b', text: 'Eucalipto gigante dentro del marco del equilibrio natural.', feedback: '🔎 Lee la primera frase de la lectura.' },
          { id: 'c', text: 'Palma de cera del Quindío según los registros de observación del entorno natural dentro del marco del equilibrio natural.', feedback: '🔎 Vuelve al texto: se trata de la planta flotante del agua.' },
          { id: 'd', text: 'Cactus espinoso de desierto analizando las dinámicas del territorio.', feedback: '🔎 El texto habla de la tarulla sobre la superficie del agua.' }
        ],
        pedagogicalTip: 'La respuesta está en la primera línea.'
      },
      {
        id: 'm14_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Dónde se encontraba la planta?',
        options: [
          { id: 'a', text: 'En una ciénaga (cubriendo la superficie del agua).', isCorrect: true, feedback: '🌿 ¡Exacto! Se encontraba tapizando el agua de una ciénaga.' },
          { id: 'b', text: 'En la cumbre de un nevado de la cordillera con consecuencias en la estructura demográfica de las especies analizando las dinámicas del territorio.', feedback: '🔎 Revisa el primer enunciado: ¿en qué ecosistema estaba?' },
          { id: 'c', text: 'En macetas de plástico dentro de una escuela según los registros de observación del entorno natural según los principios de ecología básica.', feedback: '🔎 El texto ubica el caso en una ciénaga sobre la superficie del agua.' },
          { id: 'd', text: 'En el desierto de La Guajira en el contexto de las problemáticas de conservación identificadas según los principios de ecología básica.', feedback: '🔎 Concéntrate en el escenario natural acuático.' }
        ],
        pedagogicalTip: 'Localiza el escenario en la primera oración.'
      },
      {
        id: 'm14_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué decidieron investigar antes de intervenir?',
        options: [
          { id: 'a', text: 'Qué especie era, por qué había aumentado y qué efectos estaba produciendo.', isCorrect: true, feedback: '🌿 ¡Muy bien! Las tres preguntas científicas previas asumidas por los Guardianes.' },
          { id: 'b', text: 'El precio de venenos químicos para matar toda la vegetación dentro del marco del equilibrio natural.', feedback: '🔎 Lee la segunda oración del texto con atención.' },
          { id: 'c', text: 'Cuántos likes ganaría un video de la planta en redes sociales dentro del marco del equilibrio natural.', feedback: '🔎 Fíjate en el método investigativo descrito en el segundo enunciado.' },
          { id: 'd', text: 'Si la planta podía hablar con los peces de la ciénaga según los principios de ecología básica.', feedback: '🔎 Los Guardianes investigaron especie, causas del aumento y efectos producidos.' }
        ],
        pedagogicalTip: 'Extrae las tres preguntas de investigación en la segunda oración.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm14_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué una cobertura excesiva de plantas puede modificar condiciones del agua?',
        options: [
          { id: 'a', text: 'Impide el paso de la luz solar para la fotosíntesis de algas sumergidas y al morir consume el oxígeno disuelto, asfixiando peces asociado a los impactos ambientales en la región descrita.', isCorrect: true, feedback: '🌿 ¡Deducción biológica y limnológica perfecta! El taponamiento altera el ciclo de luz y oxígeno del agua.' },
          { id: 'b', text: 'Hace que el agua se vuelva de color fucsia fosforescente analizando las dinámicas del territorio.', feedback: '🔎 Piensa en la falta de luz bajo el agua y el consumo de oxígeno durante la descomposición.' },
          { id: 'c', text: 'Convierte el agua dulce en agua salada del océano desde una perspectiva de conservación.', feedback: '🔎 Evalúa qué ocurre con las algas del fondo cuando no les llega sol.' },
          { id: 'd', text: 'No modifica nada, el agua sigue exactamente igual con o sin plantas encima con consecuencias en la estructura demográfica de las especies que forma parte integral de la dinámica de los ecosistemas locales desde una perspectiva de conservación.', feedback: '🔎 Recuerda que la luz y el oxígeno son vitales para la vida acuática.' }
        ],
        pedagogicalTip: 'Infiere cómo el manto opaco bloquea la luz solar y cómo la materia orgánica muerta agota el oxígeno del agua.'
      },
      {
        id: 'm14_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué no se debe llamar invasora a una especie solamente porque sea abundante?',
        options: [
          { id: 'a', text: 'Porque una especie nativa puede proliferar por desequilibrios (como exceso de nutrientes en el agua) sin haber sido introducida de otro país a nivel local.', isCorrect: true, feedback: '🌿 ¡Pista conceptual de gran precisión! Abundancia no equivale a invasión exótica; puede ser respuesta a contaminación orgánica.' },
          { id: 'b', text: 'Porque se genera una competencia excesiva por los recursos limitados del suelo si se les llama con nombres feos considerando las interacciones bióticas.', feedback: '🔎 Revisa la definición del texto: especie introducida que causa impactos ecológicos adversos.' },
          { id: 'c', text: 'Porque todas las plantas del mundo son invasoras por naturaleza en el contexto de las problemáticas de conservación identificadas vinculado a las alteraciones de los ciclos biológicos naturales según los principios de ecología básica.', feedback: '🔎 Distingue entre especie nativa que responde a un síntoma y especie exótica invasora.' },
          { id: 'd', text: 'Porque en la naturaleza no existen las especies invasoras según los registros de observación del entorno natural relacionado con el equilibrio biológico del área de estudio según los principios de ecología básica.', feedback: '🔎 Analiza la frase final: "primero hay que comprender el contexto".' }
        ],
        pedagogicalTip: 'Distingue entre especie introducida invasora y especie nativa que prolifera como síntoma de aguas eutrofizadas.'
      },
      {
        id: 'm14_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Qué relación existe entre una especie introducida y los cambios en un ecosistema?',
        options: [
          { id: 'a', text: 'Al no tener depredadores o controladores naturales en el nuevo hábitat, puede multiplicarse desplazando a las especies locales y alterando el equilibrio.', isCorrect: true, feedback: '🌿 ¡Gran deducción ecológica! La ausencia de controles biológicos locales permite la invasión desmedida.' },
          { id: 'b', text: 'Las especies introducidas siempre construyen casitas de madera para los peces vinculado a las alteraciones de los ciclos biológicos naturales como un factor relevante en la cadena trófica del hábitat según los principios de ecología básica.', feedback: '🔎 Recuerda cómo las especies foráneas compiten por luz, espacio y nutrientes con las nativas.' },
          { id: 'c', text: 'Una especie introducida nunca sobrevive más de dos horas en el trópico lo que evidencia una alteración de los recursos disponibles que forma parte integral de la dinámica de los ecosistemas locales analizando las dinámicas del territorio.', feedback: '🔎 Muchas especies introducidas se adaptan y colonizan agresivamente hábitats vulnerables.' },
          { id: 'd', text: 'No existe relación, todas las especies del planeta se comportan idéntico con consecuencias en la estructura demográfica de las especies según los registros de observación del entorno natural dentro del marco del equilibrio natural.', feedback: '🔎 Reflexiona sobre el impacto ecológico de alterar comunidades biológicas preexistentes.' }
        ],
        pedagogicalTip: 'Conecta la falta de competidores y depredadores locales con la ventaja desmedida de una especie foránea.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm14_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué información debería recopilarse antes de retirar la planta?',
        options: [
          { id: 'a', text: 'Identificar si es nativa o introducida, medir el nivel de contaminación del agua que la alimenta y evaluar el impacto del retiro en la fauna.', isCorrect: true, feedback: '🌿 ¡Protocolo de evaluación científica irreprochable! Si la tarulla absorbe contaminantes, retirarla toda de golpe sin tratar el agua causaría otro problema.' },
          { id: 'b', text: 'Saber el precio de las atarrayas en la tienda del centro analizando las dinámicas del territorio.', feedback: '🔎 Enfócate en los parámetros limnológicos, biológicos y ecológicos del humedal.' },
          { id: 'c', text: 'Preguntar si a los peces les gusta el color verde de las hojas considerando las interacciones bióticas.', feedback: '🔎 Revisa los factores ecológicos clave antes de intervenir en el cuerpo de agua.' },
          { id: 'd', text: 'No se debe recopilar nada, hay que echar veneno a ciegas de inmediato considerando las interacciones bióticas.', feedback: '🔎 Aplicar agroquímicos en un humedal envenenaría el agua potable y los peces.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Plantea un diagnóstico: origen taxonómico, análisis de nutrientes (nitrógeno/fósforo) y método de manejo.'
      },
      {
        id: 'm14_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué riesgos tendría intervenir sin comprender el problema?',
        options: [
          { id: 'a', text: 'Podríamos usar químicos que envenenen el agua, eliminar una planta que purificaba lixiviados o gastar recursos sin frenar el verdadero vertimiento lo que evidencia una alteración de los recursos disponibles.', isCorrect: true, feedback: '🌿 ¡Advertencia crítica fundamental! La cura apresurada e ignorante puede ser peor que la enfermedad.' },
          { id: 'b', text: 'Que la planta se enoje y persiga a los campesinos por el camino considerando las interacciones bióticas.', feedback: '🔎 Piensa en los desequilibrios químicos y biológicos provocados por intervenciones torpes.' },
          { id: 'c', text: 'Que el agua de la ciénaga se vuelva gas gaseosa según los principios de ecología básica.', feedback: '🔎 Considera el riesgo de colapsar la cadena trófica por aplicar métodos inadecuados.' },
          { id: 'd', text: 'No hay ningún riesgo, en el medio ambiente cualquier acción a ciegas siempre sale bien según los registros de observación del entorno natural que forma parte integral de la dinámica de los ecosistemas locales afectando la capacidad de regeneración de las zonas intervenidas considerando las interacciones bióticas.', feedback: '🔎 Intervenir sin diagnosticar ha destruido humedales enteros a lo largo de la historia.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Sustenta cómo una intervención a ciegas (ej. herbicidas) agrava la catástrofe ecológica.'
      },
      {
        id: 'm14_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Por qué el principio del Guardián debe ser comprender antes de intervenir?',
        options: [
          { id: 'a', text: 'Porque la naturaleza es un sistema complejo de relaciones; solo cuando entendemos sus causas podemos aplicar soluciones sabias y duraderas del territorio.', isCorrect: true, feedback: '🌿 ¡Máxima pedagógica y ética del Guardián del Bosque! La ciencia y el respeto guían la acción transformadora.' },
          { id: 'b', text: 'Para tener una excusa y no trabajar nunca analizando las dinámicas del territorio.', feedback: '🔎 La comprensión activa es el pilar de la conservación efectiva y responsable.' },
          { id: 'c', text: 'Porque la ley penaliza a quien aprenda sobre la naturaleza afectando la capacidad de regeneración de las zonas intervenidas como un factor relevante en la cadena trófica del hábitat considerando las interacciones bióticas.', feedback: '🔎 Comprender antes de actuar previene daños irreparables en el territorio.' },
          { id: 'd', text: 'No debe ser ese principio, lo que importa es actuar rápido sin pensar con consecuencias en la estructura demográfica de las especies relacionado con el equilibrio biológico del área de estudio considerando las interacciones bióticas.', feedback: '🔎 Actuar sin pensar es lo que ha provocado las 14 crisis ambientales estudiadas.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Sella el lema del programa: Leer • Comprender • Reflexionar • Actuar.'
      }
    ],
    environmentalChallenge: {
      title: 'Protocolo Previo de Investigación del Humedal',
      instruction: 'Propón qué información debería recopilar un Guardián antes de intervenir sobre una planta que cubre un cuerpo de agua.',
      type: 'protocol',
      fields: [
        { id: 'check1', label: '1. Identificación Científica y Origen de la Planta', placeholder: 'Verificar especie botánica exacta: ¿es nativa adaptada o introducida foránea invasora?...', type: 'textarea' },
        { id: 'check2', label: '2. Calidad del Agua y Causas del Crecimiento', placeholder: 'Medir nutrientes en el agua (nitrógeno y fósforo de aguas negras o fertilizantes que la alimentan)...', type: 'textarea' },
        { id: 'check3', label: '3. Efectos Biológicos en la Ciénaga', placeholder: 'Niveles de oxígeno disuelto bajo el manto, paso de luz, paso de canoas y estado de los peces...', type: 'textarea' },
        { id: 'check4', label: '4. Propuesta de Manejo Sabio y Sostenible', placeholder: 'Retiro manual y mecánico dosificado para compostaje o biogás, controlando la fuente de aguas residuales...', type: 'textarea' }
      ]
    }
  },
  {
    id: 15,
    slug: 'el-equilibrio-perdido',
    title: 'El equilibrio perdido',
    icon: '🌎',
    badgeName: 'Gran Guardián',
    badgeDescription: 'Comprendió que los problemas ambientales no están aislados, sino interconectados en una sola red territorial viva donde proteger la naturaleza es proteger la comunidad.',
    territoryZone: 'Territorio Integrado',
    conflictSummary: 'Síntesis final de la aventura: integración de todas las pistas anteriores. Comprender que proteger la naturaleza significa cuidar las relaciones del territorio.',
    arrivalContext: 'Has llegado a la cumbre más alta donde convergen el río Grande de la Magdalena, los caños de La Mojana, los remanentes del bosque seco y los poblados de Magangué. Extiendes tu Pasaporte del Guardián lleno de sellos.',
    observationDetails: {
      spotlightTitle: 'La gran panorámica del territorio conectado',
      details: [
        'Las aguas que bajan de las minas tocan los caños donde nada la icotea y bebe el jaguar.',
        'Los bosques talados aumentan el calor y el arrastre de lluvias hacia los barrios del municipio.',
        'Cada especie protegida sostiene la red viva de la que también dependen los seres humanos.'
      ],
      environmentalAspects: [
        'Enfoque sistémico de cuenca hidrográfica y territorio biocultural.',
        'Interdependencia ecológica entre seres vivos, suelo, agua, clima y decisiones humanas.',
        'Consolidación del compromiso ético como Guardián del Bosque.'
      ]
    },
    instructions: 'Lee cuidadosamente. Busca las pistas en el texto, relaciona la información y fundamenta tus respuestas. En las preguntas críticas, utiliza información de la lectura para justificar tus decisiones.',
    fullReadingText: `Después de completar sus misiones, los Guardianes reunieron las pistas. Recordaron las iguanas y la importancia de las hembras reproductoras; las icoteas, chigüiros y pisingos afectados por la cacería; el jaguar y la transformación del hábitat; los animales silvestres mantenidos como mascotas; los monos encadenados y las aves enjauladas; los perros y gatos abandonados; los bosques talados; los paisajes transformados; la minería y el mercurio; los residuos del municipio; el cambio climático y la tarulla en los humedales.

Comprendieron que ninguno de estos problemas estaba completamente aislado. El cambio del hábitat puede afectar a una especie; la disminución de una población puede alterar relaciones ecológicas; un contaminante puede desplazarse por el agua y las cadenas alimentarias; la transformación del territorio puede modificar suelo, vegetación y agua; y las decisiones humanas pueden afectar tanto a los ecosistemas como a las comunidades.

Los Guardianes descubrieron que proteger la naturaleza no significa salvar una especie aislada. Significa comprender las relaciones que mantienen vivo el territorio del que todos hacemos parte.`,
    readingWordCount: 168,
    literalQuestions: [
      {
        id: 'm15_l1',
        number: 1,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué problemas recuerdan los Guardianes?',
        options: [
          { id: 'a', text: 'Iguanas e icoteas sin reproductoras, cacería, jaguar sin hábitat, mascotas silvestres, animales enjaulados, perros abandonados, tala, minería, mercurio, basuras, clima y tarulla.', isCorrect: true, feedback: '🌿 ¡Memoria territorial impecable! Has sintetizado la lista de los 14 problemas que integran el territorio.' },
          { id: 'b', text: 'Únicamente el precio del pescado en el mercado de la ciudad vinculado a las alteraciones de los ciclos biológicos naturales afectando la capacidad de regeneración de las zonas intervenidas dentro del marco del equilibrio natural.', feedback: '🔎 Revisa el primer párrafo: ¿cuáles son todos los casos reunidos?' },
          { id: 'c', text: 'Que se habían quedado sin batería en sus linternas que forma parte integral de la dinámica de los ecosistemas locales afectando la capacidad de regeneración de las zonas intervenidas lo que evidencia una alteración de los recursos disponibles considerando las interacciones bióticas.', feedback: '🔎 El texto recapitula todas las misiones de la expedición.' },
          { id: 'd', text: 'Problemas de tráfico de aviones y trenes de alta velocidad afectando la capacidad de regeneración de las zonas intervenidas como un factor relevante en la cadena trófica del hábitat según los registros de observación del entorno natural analizando las dinámicas del territorio.', feedback: '🔎 Concéntrate en la recapitulación ambiental del párrafo 1.' }
        ],
        pedagogicalTip: 'La lista completa de problemáticas recorridas está en el primer párrafo.'
      },
      {
        id: 'm15_l2',
        number: 2,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué situaciones de maltrato o presión sobre los animales aparecen?',
        options: [
          { id: 'a', text: 'Extracción de huevos abriendo el vientre, cacería repetida, monos encadenados, aves en jaulas y perros/gatos abandonados.', isCorrect: true, feedback: '🌿 ¡Exacto! Esas son las situaciones explícitas de maltrato y presión recordadas en el texto.' },
          { id: 'b', text: 'Que los animales debían asistir a la escuela en uniforme desde una perspectiva de conservación.', feedback: '🔎 Vuelve a leer el primer párrafo e identifica los casos de maltrato animal.' },
          { id: 'c', text: 'Que los peces no tenían chalecos salvavidas analizando las dinámicas del territorio.', feedback: '🔎 Fíjate en los monos encadenados, aves enjauladas y fauna cazada.' },
          { id: 'd', text: 'Ninguna situación de maltrato, todos los animales vivían en paz considerando las interacciones bióticas.', feedback: '🔎 El texto evidencia las presiones humanas sobre la fauna.' }
        ],
        pedagogicalTip: 'Localiza los ejemplos de afectación animal en el primer párrafo.'
      },
      {
        id: 'm15_l3',
        number: 3,
        level: 'literal',
        levelLabel: 'Los ojos del Guardián',
        questionText: '¿Qué componentes del territorio aparecen relacionados según el texto?',
        options: [
          { id: 'a', text: 'Hábitat, especies, poblaciones, agua, cadenas alimentarias, suelo, vegetación, ecosistemas, comunidades y decisiones humanas lo que evidencia una alteración de los recursos disponibles.', isCorrect: true, feedback: '🌿 ¡Muy bien! Has identificado la totalidad de los componentes del sistema socioecológico.' },
          { id: 'b', text: 'Únicamente los postes de luz y las antenas de televisión considerando las interacciones bióticas.', feedback: '🔎 Observa el segundo párrafo: ¿qué elementos forman la red de relaciones?' },
          { id: 'c', text: 'Solo los billetes de dinero y las monedas de metal dentro del marco del equilibrio natural.', feedback: '🔎 El texto habla de suelo, agua, vegetación, especies y comunidades.' },
          { id: 'd', text: 'Las estrellas lejanas del espacio exterior lo que evidencia una alteración de los recursos disponibles con consecuencias en la estructura demográfica de las especies vinculado a las alteraciones de los ciclos biológicos naturales dentro del marco del equilibrio natural.', feedback: '🔎 Revisa la conexión territorial en el segundo párrafo.' }
        ],
        pedagogicalTip: 'Extrae la red de componentes descrita en el segundo párrafo.'
      }
    ],
    inferentialQuestions: [
      {
        id: 'm15_i1',
        number: 4,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Cómo puede una decisión humana producir efectos en varios componentes del ecosistema?',
        options: [
          { id: 'a', text: 'Porque al alterar un elemento (ej. talar un bosque para minería), se modifica el suelo, se contamina el agua, se desplaza a la fauna y se afecta la salud humana en cadena en el hábitat.', isCorrect: true, feedback: '🌿 ¡Gran análisis sistémico! Toda acción humana tiene ondas de impacto concéntricas en la red de la vida.' },
          { id: 'b', text: 'Porque los ecosistemas se comunican por mensajes de texto considerando las interacciones bióticas.', feedback: '🔎 Piensa en el efecto dominó que desata cualquier intervención desmedida.' },
          { id: 'c', text: 'Las decisiones humanas nunca afectan a más de un componente a la vez con consecuencias en la estructura demográfica de las especies con consecuencias en la estructura demográfica de las especies considerando las interacciones bióticas.', feedback: '🔎 El texto recalca que las decisiones afectan a suelo, agua, vegetación y comunidades a la vez.' },
          { id: 'd', text: 'Porque los animales imitan todo lo que deciden las personas con consecuencias en la estructura demográfica de las especies lo que evidencia una alteración de los recursos disponibles en el contexto de las problemáticas de conservación identificadas desde una perspectiva de conservación.', feedback: '🔎 Conecta las pistas del párrafo 2 sobre la interdependencia.' }
        ],
        pedagogicalTip: 'Aplica la metáfora del dominó: empujar una ficha humana derriba fichas en el suelo, agua y fauna.'
      },
      {
        id: 'm15_i2',
        number: 5,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Por qué un problema ambiental puede extenderse más allá del lugar donde comenzó?',
        options: [
          { id: 'a', text: 'Porque el agua fluye, el aire circula, los animales migran y las cadenas tróficas y comerciales interconectan las regiones.', isCorrect: true, feedback: '🌿 ¡Deducción geográfica y biológica magistral! Los ecosistemas son sistemas abiertos en constante movimiento.' },
          { id: 'b', text: 'Porque los problemas ambientales viajan en bicicleta por la carretera según los registros de observación del entorno natural vinculado a las alteraciones de los ciclos biológicos naturales según los principios de ecología básica.', feedback: '🔎 Reflexiona sobre los vectores naturales de transporte hidrológico y biológico.' },
          { id: 'c', text: 'Porque la Tierra gira tan rápido que desparrama las cosas como un factor relevante en la cadena trófica del hábitat según los registros de observación del entorno natural desde una perspectiva de conservación.', feedback: '🔎 Analiza cómo los ríos y los vientos extienden los impactos.' },
          { id: 'd', text: 'Los problemas ambientales nunca se extienden, siempre se quedan quietos asociado a los impactos ambientales en la región descrita como un factor relevante en la cadena trófica del hábitat dentro del marco del equilibrio natural.', feedback: '🔎 El texto enseña que el mercurio, la basura y el clima traspasan cualquier frontera.' }
        ],
        pedagogicalTip: 'Recuerda que los ríos no conocen linderos: lo que pasa en la montaña baja a la ciénaga y al mar.'
      },
      {
        id: 'm15_i3',
        number: 6,
        level: 'inferencial',
        levelLabel: 'Las pistas ocultas',
        questionText: '¿Qué demuestra la relación entre población, hábitat y contaminación?',
        options: [
          { id: 'a', text: 'Demuestra que la salud de las poblaciones biológicas depende de un hábitat sin fragmentar y limpio; si el hábitat se contamina, la población colapsa.', isCorrect: true, feedback: '🌿 ¡Comprensión de la tríada ecológica suprema! Hábitat sano = población viva = territorio en equilibrio.' },
          { id: 'b', text: 'Demuestra que los animales prefieren vivir en lugares con basura según los principios de ecología básica.', feedback: '🔎 Conecta los tres conceptos: si el hogar se deteriora, sus habitantes enferman.' },
          { id: 'c', text: 'Demuestra que la contaminación crea nuevas especies más fuertes desde una perspectiva de conservación.', feedback: '🔎 Todo lo contrario: la contaminación y la fragmentación diezman a las especies nativas.' },
          { id: 'd', text: 'Demuestra que no existe ninguna relación entre el hábitat y sus habitantes considerando las interacciones bióticas.', feedback: '🔎 Revisa la síntesis del segundo párrafo sobre el equilibrio integral.' }
        ],
        pedagogicalTip: 'Sintetiza la relación: un hábitat degradado destruye a la población que lo habita.'
      }
    ],
    criticalQuestions: [
      {
        id: 'm15_c1',
        number: 7,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué acciones debería priorizar una comunidad para proteger su territorio? Fundamenta con información de las misiones.',
        options: [
          { id: 'a', text: 'Proteger rondas de ríos y ciénagas, frenar la deforestación y el mercurio, erradicar el tráfico de fauna y gestionar sus residuos comunitariamente con consecuencias en la estructura demográfica de las especies.', isCorrect: true, feedback: '🌿 ¡Plan territorial maestro de un Gran Guardián! Has articulado las soluciones fundamentales de todo el recorrido.' },
          { id: 'b', text: 'Dedicar todo el presupuesto a fiestas patronales y olvidar los bosques según los principios de ecología básica.', feedback: '🔎 La supervivencia y el bienestar dependen de los servicios ecosistémicos del territorio.' },
          { id: 'c', text: 'Esperar a que organizaciones extranjeras vengan a barrer las calles analizando las dinámicas del territorio.', feedback: '🔎 La comunidad local es la verdadera protagonista del cuidado de su hogar.' },
          { id: 'd', text: 'Vender todos los animales y talar todos los árboles para tener dinero rápido que forma parte integral de la dinámica de los ecosistemas locales vinculado a las alteraciones de los ciclos biológicos naturales con consecuencias en la estructura demográfica de las especies considerando las interacciones bióticas.', feedback: '🔎 Esa es la fórmula del colapso ecológico y la miseria futura.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Integra al menos 3 aprendizajes de las misiones anteriores en una propuesta integral para Magangué y La Mojana.'
      },
      {
        id: 'm15_c2',
        number: 8,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Cómo podría participar la comunidad en la solución de los problemas identificados?',
        options: [
          { id: 'a', text: 'Creando comités ciudadanos de monitoreo, adoptando prácticas agrícolas limpias, no comprando fauna y participando en las decisiones del municipio a nivel local.', isCorrect: true, feedback: '🌿 ¡Poder ciudadano y gobernanza ambiental viva! La conservación florece cuando la comunidad se apropia de su destino.' },
          { id: 'b', text: 'Comprando más jaulas y cadenas para los animales del bosque según los principios de ecología básica.', feedback: '🔎 La participación debe orientarse a la liberación, no a la opresión de la fauna.' },
          { id: 'c', text: 'Arrojando los residuos en el caño más hondo durante la noche lo que evidencia una alteración de los recursos disponibles en el contexto de las problemáticas de conservación identificadas según los principios de ecología básica.', feedback: '🔎 La limpieza comunitaria requiere civismo y separación en la fuente.' },
          { id: 'd', text: 'Ignorando lo que aprendieron en la escuela para no complicarse la vida relacionado con el equilibrio biológico del área de estudio relacionado con el equilibrio biológico del área de estudio dentro del marco del equilibrio natural.', feedback: '🔎 El conocimiento adquirido en Guardianes del Bosque es para transformar la realidad.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Destaca la participación comunitaria organizada: escuelas, juntas comunales, pescadores y familias.'
      },
      {
        id: 'm15_c3',
        number: 9,
        level: 'critico',
        levelLabel: 'La decisión del Guardián',
        questionText: '¿Qué significa para ti ser un Guardián del Bosque después de completar las misiones?',
        options: [
          { id: 'a', text: 'Significa aprender a leer el territorio y los textos con mirada crítica, defendiendo la vida, cuidando las relaciones ecológicas y actuando con responsabilidad.', isCorrect: true, feedback: '🌿 ¡GRAN GUARDIÁN CONSAGRADO! Has interiorizado el propósito más elevado de esta estrategia de aprendizaje.' },
          { id: 'b', text: 'Significa únicamente tener una insignia virtual en una pantalla de computador como un factor relevante en la cadena trófica del hábitat en el contexto de las problemáticas de conservación identificadas considerando las interacciones bióticas.', feedback: '🔎 Ser Guardián es un compromiso ético y práctico con la vida y la comunidad real.' },
          { id: 'c', text: 'Significa que ya no tengo que leer ningún libro en mi vida asociado a los impactos ambientales en la región descrita como un factor relevante en la cadena trófica del hábitat desde una perspectiva de conservación.', feedback: '🔎 Todo lo contrario: leer bien te permite comprender el mundo y defender tus derechos.' },
          { id: 'd', text: 'Significa tener permiso para mandar a los demás sin hacer nada según los registros de observación del entorno natural en el contexto de las problemáticas de conservación identificadas analizando las dinámicas del territorio.', feedback: '🔎 El Guardián lidera con el ejemplo, la humildad, el diálogo y el cuidado activo.' }
        ],
        requiresWrittenArgument: true,
        pedagogicalTip: 'Reflexiona sobre tu transformación personal: leer, comprender, reflexionar y actuar en tu territorio.'
      }
    ],
    environmentalChallenge: {
      title: 'Manifiesto Territorial del Gran Guardián',
      instruction: 'Construye tu manifiesto de compromiso con el territorio integrando lo aprendido en las 14 misiones.',
      type: 'synthesis',
      fields: [
        { id: 'manifesto_title', label: 'Título de tu Manifiesto como Gran Guardián', placeholder: 'Ej. Pacto de Amor y Custodia por Magangué, La Mojana y el Caribe...', type: 'text' },
        { id: 'key_learning', label: '1. Lo que comprendí sobre las relaciones del territorio', placeholder: 'Explica con tus palabras cómo aprendiste que nada en el bosque está aislado y que dañar un río o talar un árbol nos daña a todos...', type: 'textarea' },
        { id: 'my_action', label: '2. Mi compromiso personal en mi escuela, casa y comunidad', placeholder: '¿Qué acciones diarias vas a practicar (cuidado animal, no arrojar basuras, defender la fauna, sembrar)?...', type: 'textarea' },
        { id: 'message_to_region', label: '3. Mensaje final a los jóvenes de grado séptimo de Colombia', placeholder: 'Dedica unas palabras a los futuros Guardianes del Bosque sobre el poder de leer el territorio y cuidarlo...', type: 'textarea' }
      ]
    },
    isFinalMission: true
  }
];

export const DEMO_TEACHER_STUDENTS = [
  {
    id: 'demo-1',
    name: 'Valentina Montes Carpio',
    grade: '7°A',
    avatar: 'fauna',
    completedMissionCount: 15,
    completedMissionIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    earnedBadges: ['Protector de la Vida', 'Guardián de las Generaciones', 'Rastreador de Fauna', 'Defensor de los Depredadores', 'Voz de la Fauna', 'Liberador de Fauna', 'Defensor de los Animales', 'Sembrador de Bosques', 'Cartógrafo del Ecosistema', 'Investigador del Agua', 'Guardián del Territorio', 'Guardián del Territorio Limpio', 'Guardián del Clima', 'Protector de los Humedales', 'Gran Guardián'],
    literalAccuracy: 95,
    inferentialAccuracy: 92,
    criticalAccuracy: 89,
    lastActive: 'Hoy, 10:45 AM',
    evidencesCount: 15,
    sampleReflection: 'Entendí que cuando extraen una iguana hembra no solo matan un animal, sino que cortan el futuro de todo el bosque.',
    isDemonstration: true
  },
  {
    id: 'demo-2',
    name: 'Santiago Arrieta Pérez',
    grade: '7°A',
    avatar: 'rio',
    completedMissionCount: 11,
    completedMissionIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    earnedBadges: ['Protector de la Vida', 'Guardián de las Generaciones', 'Rastreador de Fauna', 'Defensor de los Depredadores', 'Voz de la Fauna', 'Liberador de Fauna', 'Defensor de los Animales', 'Sembrador de Bosques', 'Cartógrafo del Ecosistema', 'Investigador del Agua', 'Guardián del Territorio'],
    literalAccuracy: 88,
    inferentialAccuracy: 85,
    criticalAccuracy: 80,
    lastActive: 'Ayer, 3:20 PM',
    evidencesCount: 11,
    sampleReflection: 'El mercurio de las minas viaja en el agua y termina en el plato de pescado de nuestras propias familias en Magangué.',
    isDemonstration: true
  },
  {
    id: 'demo-3',
    name: 'Mariana Gómez Salcedo',
    grade: '7°B',
    avatar: 'bosque',
    completedMissionCount: 8,
    completedMissionIds: [1, 2, 3, 4, 5, 6, 7, 8],
    earnedBadges: ['Protector de la Vida', 'Guardián de las Generaciones', 'Rastreador de Fauna', 'Defensor de los Depredadores', 'Voz de la Fauna', 'Liberador de Fauna', 'Defensor de los Animales', 'Sembrador de Bosques'],
    literalAccuracy: 91,
    inferentialAccuracy: 81,
    criticalAccuracy: 84,
    lastActive: 'Hace 2 días',
    evidencesCount: 8,
    sampleReflection: 'Un mono encadenado no es una mascota feliz; sus instintos necesitan selva y compañeros.',
    isDemonstration: true
  },
  {
    id: 'demo-4',
    name: 'Carlos Mario Támara',
    grade: '7°B',
    avatar: 'selva',
    completedMissionCount: 5,
    completedMissionIds: [1, 2, 3, 4, 5],
    earnedBadges: ['Protector de la Vida', 'Guardián de las Generaciones', 'Rastreador de Fauna', 'Defensor de los Depredadores', 'Voz de la Fauna'],
    literalAccuracy: 80,
    inferentialAccuracy: 74,
    criticalAccuracy: 71,
    lastActive: 'Hace 3 días',
    evidencesCount: 5,
    sampleReflection: 'No debemos perseguir al jaguar; si talamos su hábitat y cazamos sus presas, él busca comida donde haya ganado.',
    isDemonstration: true
  },
  {
    id: 'demo-5',
    name: 'Lucía Fernández Díaz',
    grade: '7°A',
    avatar: 'cielo',
    completedMissionCount: 14,
    completedMissionIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
    earnedBadges: ['Protector de la Vida', 'Guardián de las Generaciones', 'Rastreador de Fauna', 'Defensor de los Depredadores', 'Voz de la Fauna', 'Liberador de Fauna', 'Defensor de los Animales', 'Sembrador de Bosques', 'Cartógrafo del Ecosistema', 'Investigador del Agua', 'Guardián del Territorio', 'Guardián del Territorio Limpio', 'Guardián del Clima', 'Protector de los Humedales'],
    literalAccuracy: 96,
    inferentialAccuracy: 94,
    criticalAccuracy: 92,
    lastActive: 'Hoy, 8:10 AM',
    evidencesCount: 14,
    sampleReflection: 'Antes de arrancar la tarulla de una ciénaga hay que investigar si el agua tiene exceso de desechos orgánicos que la nutren.',
    isDemonstration: true
  }
];
