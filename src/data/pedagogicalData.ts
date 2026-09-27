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
          { id: 'a', text: 'Para llevarlos a centros de investigación científica.', feedback: '🔎 El texto señala un uso cotidiano y comercial.' },
          { id: 'b', text: 'Para protegerlos del ataque de otros animales del bosque.', feedback: '🔎 Vuelve al texto: se menciona claramente la alimentación y los ingresos.' },
          { id: 'c', text: 'Para el consumo de las familias y la venta en el mercado.', isCorrect: true, feedback: '🌿 ¡Correcto! El texto señala que se destinan a la comida y el comercio.' },
          { id: 'd', text: 'Para usarlos de adorno en las fiestas y ferias del pueblo.', feedback: '🔎 Revisa el primer y segundo párrafo del relato.' }
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
          { id: 'a', text: 'Heridas graves, infecciones internas y la muerte del animal.', isCorrect: true, feedback: '🌿 ¡Exacto! Esas son las lesiones directas que describe el texto.' },
          { id: 'b', text: 'Cansancio temporal y pérdida de apetito por unas horas.', feedback: '🔎 Observa la gravedad descrita en el primer párrafo.' },
          { id: 'c', text: 'Pérdida de la cola que luego vuelve a crecer sola.', feedback: '🔎 El texto habla de la apertura del abdomen y de sus consecuencias internas.' },
          { id: 'd', text: 'Fiebre leve y debilidad por haber estado bajo el sol.', feedback: '🔎 Vuelve a revisar las graves manipulaciones que sufren las iguanas.' }
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
          { id: 'a', text: 'Mejora su fertilidad y pone el doble de huevos al año siguiente.', feedback: '🔎 El texto no menciona mejoras biológicas sino perjuicios graves.' },
          { id: 'b', text: 'Sana rápidamente sin sufrir ningún daño en sus órganos internos.', feedback: '🔎 El texto aclara que sufren daños graves en su aparato reproductor.' },
          { id: 'c', text: 'Cambia de lugar en el bosque pero sigue poniendo huevos con normalidad.', feedback: '🔎 Revisa el final del primer párrafo sobre la reproducción.' },
          { id: 'd', text: 'Su capacidad de reproducirse puede verse afectada o anularse.', isCorrect: true, feedback: '🌿 ¡Muy bien! El texto resalta que sufren secuelas en su aparato reproductor.' }
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
          { id: 'a', text: 'Porque los machos abandonan la zona en busca de otros bosques lejanos.', feedback: '🔎 Relaciona el papel de las hembras con el número de crías futuras.' },
          { id: 'b', text: 'Porque al perder a las hembras, nacen muchas menos crías en el futuro.', isCorrect: true, feedback: '🌿 ¡Gran deducción! Si no nacen crías, la población entera decae.' },
          { id: 'c', text: 'Porque las iguanas cambian su comida de hojas por insectos dañinos.', feedback: '🔎 Revisa la conexión entre hembras reproductoras y tamaño poblacional.' },
          { id: 'd', text: 'Porque los depredadores dejan de visitar el monte al no hallar iguanas.', feedback: '🔎 Piensa en qué pasa si no nacen crías.' }
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
          { id: 'a', text: 'Porque una iguana que no puede reproducirse ya no aporta nuevas crías.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! Para que la población viva se necesitan crías.' },
          { id: 'b', text: 'Porque las iguanas enfermas transmiten bacterias a los árboles vecinos.', feedback: '🔎 Piensa en la diferencia entre una sola iguana y la especie entera.' },
          { id: 'c', text: 'Porque las hembras lastimadas comen el doble de hojas y agotan el pasto.', feedback: '🔎 Analiza la función de la reproducción para mantener la especie.' },
          { id: 'd', text: 'Porque las demás iguanas del grupo rechazan a las hembras heridas.', feedback: '🔎 Reflexiona sobre la capacidad biológica de tener descendencia.' }
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
          { id: 'a', text: 'No existe relación, porque las iguanas nacen solas sin necesidad de huevos.', feedback: '🔎 Revisa cómo la pérdida de hembras impacta la natalidad.' },
          { id: 'b', text: 'Aumenta el número de crías porque las sobrevivientes ponen nidos gigantes.', feedback: '🔎 El texto advierte sobre la reducción de crías.' },
          { id: 'c', text: 'A mayor extracción y daño a las hembras, menor será el número de crías.', isCorrect: true, feedback: '🌿 ¡Exacto! Se trata de una relación directa de causa y efecto.' },
          { id: 'd', text: 'La cantidad de crías solo depende de si llueve mucho o poco en el año.', feedback: '🔎 Conecta las pistas que da el autor en el párrafo 2.' }
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
          { id: 'a', text: 'Comprar todos los huevos del puesto para que nadie más se los coma.', feedback: '🔎 Pensamiento crítico: comprar fomenta el comercio y nuevas capturas.' },
          { id: 'b', text: 'Ignorar la venta porque es una costumbre antigua que no se puede cambiar.', feedback: '🔎 El Guardián asume un rol activo de cuidado del territorio.' },
          { id: 'c', text: 'Pelear con los vendedores en el mercado para quitarles los canastos.', feedback: '🔎 La intervención del Guardián debe ser pacífica y pedagógica.' },
          { id: 'd', text: 'No comprar, explicar con respeto el daño ambiental y avisar a las autoridades.', isCorrect: true, feedback: '🌿 ¡Decisión sabia y coherente! Detiene la compra y busca protección.' }
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
          { id: 'a', text: 'Prohibir la venta de todo tipo de comida en el pueblo sin dar otra opción.', feedback: '🔎 Las soluciones deben apoyar la economía de las familias campesinas.' },
          { id: 'b', text: 'Promover la cría de gallinas, huertas caseras y pequeños negocios locales.', isCorrect: true, feedback: '🌿 ¡Brillante! Da ingresos a las familias sin maltratar la fauna.' },
          { id: 'c', text: 'Buscar huevos de otras aves silvestres para venderlos en vez de iguanas.', feedback: '🔎 Eso solo trasladaría el daño a otro animal silvestre.' },
          { id: 'd', text: 'Comprar hilos finos para que los cazadores cosan mejor a las iguanas.', feedback: '🔎 El objetivo es frenar el daño, no continuar con la práctica.' }
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
          { id: 'a', text: 'Porque garantizan nuevas generaciones y ayudan a regar semillas en el monte.', isCorrect: true, feedback: '🌿 ¡Excelente valoración crítica! Entiendes su función en el bosque.' },
          { id: 'b', text: 'Solo son valiosas porque tienen colores bonitos para tomarles fotos.', feedback: '🔎 Valora el papel ecológico y la supervivencia biológica.' },
          { id: 'c', text: 'Porque su presencia evita que caigan tormentas fuertes sobre los pueblos.', feedback: '🔎 Recuerda el rol real biológico de las iguanas en la vegetación.' },
          { id: 'd', text: 'No tienen importancia para la naturaleza, solo sirven de alimento humano.', feedback: '🔎 Reflexiona sobre el valor de cada especie en el ecosistema.' }
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
          { id: 'a', text: 'Tortugas icoteas en la ciénaga.', isCorrect: true, feedback: '🌿 ¡Correcto! Las icoteas o galápagos eran los animales capturados.' },
          { id: 'b', text: 'Peces bocachicos y bagres del río.', feedback: '🔎 Revisa qué animal acuático con caparazón se menciona.' },
          { id: 'c', text: 'Chigüiros descansando en la orilla.', feedback: '🔎 El texto habla de animales que nadan y desovan.' },
          { id: 'd', text: 'Patos pisingos y garzas blancas.', feedback: '🔎 Observa el animal central de la misión.' }
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
          { id: 'a', text: 'En la plaza principal de mercado del pueblo.', feedback: '🔎 Busca el lugar natural donde ocurrió el hallazgo.' },
          { id: 'b', text: 'En una piscina de cría artificial legal.', feedback: '🔎 El texto describe una captura en ambiente natural.' },
          { id: 'c', text: 'En un canal de riego dentro de un cultivo.', feedback: '🔎 La lectura sitúa la acción en la ciénaga.' },
          { id: 'd', text: 'En una ciénaga del territorio.', isCorrect: true, feedback: '🌿 ¡Exacto! Los animales eran extraídos directamente del humedal.' }
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
          { id: 'a', text: 'Los machos jóvenes que apenas aprenden a nadar.', feedback: '🔎 El texto hace énfasis especial en las reproductoras.' },
          { id: 'b', text: 'Las tortugas hembras en edad de reproducirse.', isCorrect: true, feedback: '🌿 ¡Muy bien! Capturar hembras adultas pone en riesgo a la especie.' },
          { id: 'c', text: 'Las aves que intentaban comerse a las tortugas.', feedback: '🔎 La preocupación se centró en las icoteas hembras.' },
          { id: 'd', text: 'Los peces que quedaban atrapados en las redes.', feedback: '🔎 Revisa qué tipo de individuos alarmó a los Guardianes.' }
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
          { id: 'a', text: 'Porque las hembras adultas son las únicas que saben buscar comida en el fondo.', feedback: '🔎 Relaciona el rol de la hembra con el nacimiento de nuevas crías.' },
          { id: 'b', text: 'Porque los machos dejan de comer y mueren de pena al quedar solos en el agua.', feedback: '🔎 Piensa en la consecuencia biológica sobre la población.' },
          { id: 'c', text: 'Porque al quitar las hembras, no habrá quién ponga huevos ni nazcan crías.', isCorrect: true, feedback: '🌿 ¡Gran deducción! Sin hembras que pongan huevos se acaba la especie.' },
          { id: 'd', text: 'Porque las tortugas hembras son las que avisan cuándo sube el nivel del agua.', feedback: '🔎 El problema clave está en la pérdida de huevos y crías.' }
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
          { id: 'a', text: 'El agua de la ciénaga se volverá salada por la falta de movimiento.', feedback: '🔎 Piensa en el número de animales, no en la química del agua.' },
          { id: 'b', text: 'Las tortugas sobrevivientes pondrán huevos de noche para no ser vistas.', feedback: '🔎 La capacidad de reproducirse tiene límites naturales.' },
          { id: 'c', text: 'Los peces del caño empezarán a tener caparazón para protegerse.', feedback: '🔎 Enfócate en el tamaño de la población de icoteas.' },
          { id: 'd', text: 'La cantidad de tortugas disminuirá hasta que desaparezcan de ese lugar.', isCorrect: true, feedback: '🌿 ¡Exacto! Si se saca más de lo que nace, la población se agota.' }
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
          { id: 'a', text: 'La cacería ayuda a que nazcan muchas más tortugas cada semana.', feedback: '🔎 Cazar en exceso reduce la población, no la aumenta.' },
          { id: 'b', text: 'Si la cacería es excesiva, la especie no alcanza a recuperarse a tiempo.', isCorrect: true, feedback: '🌿 ¡Muy bien! La tasa de captura supera el ritmo de reproducción.' },
          { id: 'c', text: 'No existe relación, porque los animales del agua nunca se acaban.', feedback: '🔎 Toda especie tiene un límite si se le extrae sin control.' },
          { id: 'd', text: 'La recuperación de las tortugas depende únicamente del clima del verano.', feedback: '🔎 La actividad humana influye directamente en su supervivencia.' }
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
          { id: 'a', text: 'Hacer acuerdos de veda con la comunidad y cuidar los sitios de desove.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! Los acuerdos comunitarios protegen la especie.' },
          { id: 'b', text: 'Vender las tortugas a turistas para recaudar fondos para la escuela.', feedback: '🔎 Un Guardián no promueve el comercio de fauna silvestre.' },
          { id: 'c', text: 'Romper las herramientas de los pescadores a escondidas en la noche.', feedback: '🔎 El diálogo y los acuerdos son el camino del Guardián.' },
          { id: 'd', text: 'No hacer nada porque los animales del agua no tienen importancia.', feedback: '🔎 El Guardián protege el equilibrio de los humedales.' }
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
          { id: 'a', text: 'Obligar a todos los habitantes a comprar carne enlatada muy costosa.', feedback: '🔎 Las alternativas deben ser viables para las familias locales.' },
          { id: 'b', text: 'Secar la ciénaga con motobombas para que las tortugas se marchen.', feedback: '🔎 Eso destruiría por completo el ecosistema del humedal.' },
          { id: 'c', text: 'Apoyar la cría de peces en estanques y la siembra de alimentos familiares.', isCorrect: true, feedback: '🌿 ¡Brillante! Ofrece comida sana sin agotar la ciénaga.' },
          { id: 'd', text: 'Cazar todas las icoteas de una vez para salir rápido de ellas.', feedback: '🔎 El objetivo es conservar la fauna, no acabarla.' }
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
          { id: 'a', text: 'Solo para cumplir con una tarea obligatoria de ciencias naturales.', feedback: '🔎 Piensa en el bienestar a largo plazo de la comunidad.' },
          { id: 'b', text: 'Porque las leyes exigen hablar del futuro en los periódicos locales.', feedback: '🔎 El cuidado ambiental nace del compromiso con la vida.' },
          { id: 'c', text: 'No es necesario pensar en el futuro si hoy tenemos bastante alimento.', feedback: '🔎 Agotar hoy los recursos deja sin sustento al mañana.' },
          { id: 'd', text: 'Porque los recursos naturales deben alcanzar para los hijos y nietos.', isCorrect: true, feedback: '🌿 ¡Excelente reflexión! La sostenibilidad asegura el futuro.' }
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
          { id: 'a', text: 'Jaguares, serpientes y osos perezosos.', feedback: '🔎 Revisa qué animales acuáticos y de orilla se describen.' },
          { id: 'b', text: 'Perros y gatos callejeros del pueblo.', feedback: '🔎 El texto habla de fauna silvestre de la sabana y el agua.' },
          { id: 'c', text: 'Tiburones y delfines de agua salada.', feedback: '🔎 El contexto es de agua dulce y orillas ribereñas.' },
          { id: 'd', text: 'Chigüiros, patos pisingos y pequeños mamíferos.', isCorrect: true, feedback: '🌿 ¡Correcto! Esos son los animales que aparecen en el texto.' }
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
          { id: 'a', text: 'Trabajos para perforar pozos de petróleo.', feedback: '🔎 Revisa la actividad descrita en los primeros párrafos.' },
          { id: 'b', text: 'Huellas y trampas que mostraban cacería.', isCorrect: true, feedback: '🌿 ¡Exacto! Los Guardianes encontraron rastros de cacería repetida.' },
          { id: 'c', text: 'Excursiones escolares con cámaras de fotos.', feedback: '🔎 Los rastros eran de personas atrapando animales.' },
          { id: 'd', text: 'Construcción de una carretera pavimentada.', feedback: '🔎 El problema encontrado fue la extracción de fauna.' }
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
          { id: 'a', text: 'Más espacio libre y alimento para los animales que quedan.', feedback: '🔎 Perder animales daña la población, no la ayuda.' },
          { id: 'b', text: 'Una mejora en la fuerza y rapidez de las crías sobrevivientes.', feedback: '🔎 La cacería continua no mejora la especie, la reduce.' },
          { id: 'c', text: 'Un animal menos, lo cual debilita al grupo si ocurre seguido.', isCorrect: true, feedback: '🌿 ¡Muy bien! Cada individuo cuenta para mantener a la manada.' },
          { id: 'd', text: 'Ningún cambio importante en la vida natural del territorio.', feedback: '🔎 El texto señala que las extracciones repetidas dejan huella.' }
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
          { id: 'a', text: 'Porque se cazan más animales de los que alcanzan a nacer y crecer.', isCorrect: true, feedback: '🌿 ¡Gran deducción! La velocidad de caza supera a la de reproducción.' },
          { id: 'b', text: 'Porque los animales se asustan tanto que dejan de alimentarse.', feedback: '🔎 La razón principal es matemática: mueren más de los que nacen.' },
          { id: 'c', text: 'Porque los cazadores se quedan a vivir en las madrigueras vacías.', feedback: '🔎 Piensa en el ciclo biológico de nacimiento y reemplazo.' },
          { id: 'd', text: 'Porque el ruido de los disparos cambia el clima de la región.', feedback: '🔎 Conecta la pérdida constante de individuos con la población.' }
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
          { id: 'a', text: 'Los animales jóvenes aprenden a tener crías antes de tiempo.', feedback: '🔎 Cada animal necesita llegar a su edad madura para reproducirse.' },
          { id: 'b', text: 'Crecen más árboles maderables en las orillas de los caños.', feedback: '🔎 La pregunta se refiere a lo que ocurre con los animales.' },
          { id: 'c', text: 'Se corta el nacimiento de crías y la población puede acabarse.', isCorrect: true, feedback: '🌿 ¡Exacto! Sin adultos que tengan crías, la población desaparece.' },
          { id: 'd', text: 'Los cazadores reciben un premio por limpiar el monte de fauna.', feedback: '🔎 Cazar reproductores causa un daño grave a la naturaleza.' }
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
          { id: 'a', text: 'Porque la luna llena solo sale durante algunos meses del año.', feedback: '🔎 La capacidad de recuperación depende de factores biológicos.' },
          { id: 'b', text: 'Porque los animales prefieren dormir en lugar de tener crías.', feedback: '🔎 Las especies tienen tiempos de gestación y cría que no se aceleran.' },
          { id: 'c', text: 'Porque los científicos controlan cuántos animales nacen en la selva.', feedback: '🔎 La naturaleza tiene ritmos propios que el humano debe respetar.' },
          { id: 'd', text: 'Porque cada especie necesita tiempo para nacer, crecer y reproducirse.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! El tiempo de gestación y cría tiene límites.' }
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
          { id: 'a', text: 'Repartir más escopetas para que la gente cace en menos tiempo.', feedback: '🔎 Las medidas del Guardián buscan proteger, no facilitar la caza.' },
          { id: 'b', text: 'Fijar épocas de veda, vigilar las huellas y proteger a las hembras.', isCorrect: true, feedback: '🌿 ¡Brillante! La veda y la vigilancia dan respiro a la fauna.' },
          { id: 'c', text: 'Poner rejas con corriente eléctrica alrededor de todo el monte.', feedback: '🔎 Las rejas eléctricas dañan a la fauna y dividen el territorio.' },
          { id: 'd', text: 'Dejar que cacen todo lo que quieran para que la carne no se pierda.', feedback: '🔎 La cacería sin control lleva a la desaparición de especies.' }
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
          { id: 'a', text: 'Crear comités comunitarios para cuidar el monte y vigilar la fauna.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! La unión de la comunidad cuida el territorio.' },
          { id: 'b', text: 'Vender carne de monte en secreto para ganar dinero extra en casa.', feedback: '🔎 El comercio ilegal daña al bosque y vulnera la ley.' },
          { id: 'c', text: 'Abandonar las fincas y los pueblos para que la selva crezca sola.', feedback: '🔎 La comunidad puede convivir en armonía sin tener que irse.' },
          { id: 'd', text: 'Echarle la culpa a los niños de la escuela de lo que pasa en el monte.', feedback: '🔎 Todos los vecinos deben colaborar con responsabilidad.' }
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
          { id: 'a', text: 'Porque un solo animal no alcanza para cocinar un sancocho grande.', feedback: '🔎 La pregunta apunta al equilibrio del ecosistema, no a la cocina.' },
          { id: 'b', text: 'Porque los animales siempre caminan pegados para no perderse.', feedback: '🔎 Piensa en la diversidad genética y la vida en comunidad.' },
          { id: 'c', text: 'Porque una especie sobrevive gracias al grupo y a su variedad genética.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento crítico! Una población fuerte necesita muchos miembros.' },
          { id: 'd', text: 'Porque a los animales les da miedo vivir sin verse las caras a diario.', feedback: '🔎 La salud de la especie depende del tamaño y vigor del grupo.' }
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
          { id: 'a', text: 'Una manada de lobos salvajes del norte.', feedback: '🔎 En el Caribe colombiano habitan jaguares y pumas.' },
          { id: 'b', text: 'Un jaguar rondando cerca de los potreros.', isCorrect: true, feedback: '🌿 ¡Correcto! El jaguar fue el felino identificado en la zona.' },
          { id: 'c', text: 'Un grupo de osos de anteojos en la llanura.', feedback: '🔎 El animal que generó alerta en la finca fue un felino.' },
          { id: 'd', text: 'Un cocodrilo gigante dentro de la casa.', feedback: '🔎 Revisa el animal silvestre que protagoniza la misión.' }
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
          { id: 'a', text: 'La pesca de bagre en el muelle del puerto.', feedback: '🔎 La finca afectada tenía animales de pastoreo.' },
          { id: 'b', text: 'La extracción de oro en las orillas del río.', feedback: '🔎 Revisa la actividad económica que se describe.' },
          { id: 'c', text: 'La ganadería por la pérdida de algunos terneros.', isCorrect: true, feedback: '🌿 ¡Exacto! Los ataques afectaban a los terneros de la finca.' },
          { id: 'd', text: 'El cultivo de café en las laderas de la montaña.', feedback: '🔎 En la zona de sabana se cría ganado vacuno.' }
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
          { id: 'a', text: 'Bosques talados, potreros abiertos y pocas presas naturales.', isCorrect: true, feedback: '🌿 ¡Muy bien! La pérdida de bosque dejó al jaguar sin alimento.' },
          { id: 'b', text: 'Carreteras nuevas y edificios de apartamentos modernos.', feedback: '🔎 El paisaje descrito es rural, con monte talado para pastos.' },
          { id: 'c', text: 'Inundaciones por lluvias que trajeron peces a la finca.', feedback: '🔎 La causa del conflicto fue la reducción de la selva.' },
          { id: 'd', text: 'Nuevos árboles frutales sembrados por los ganaderos.', feedback: '🔎 Al talar el bosque se perdieron los refugios de las presas.' }
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
          { id: 'a', text: 'Porque los jaguares prefieren la comida salada que comen las vacas.', feedback: '🔎 Los felinos no buscan sal, buscan presas para sobrevivir.' },
          { id: 'b', text: 'Porque las vacas llaman al jaguar con mugidos durante la noche.', feedback: '🔎 La razón es espacial: el ganado ocupa el antiguo territorio del felino.' },
          { id: 'c', text: 'Porque los árboles caídos no dejan caminar al jaguar en el monte.', feedback: '🔎 El jaguar pierde su hábitat y encuentra terneros desprotegidos.' },
          { id: 'd', text: 'Al tumbar el bosque, el territorio del jaguar se cruza con los potreros.', isCorrect: true, feedback: '🌿 ¡Gran deducción! La tala obliga al felino a caminar por donde pasta el ganado.' }
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
          { id: 'a', text: 'El jaguar se vuelve vegetariano y come pasto de los potreros.', feedback: '🔎 El jaguar es un carnívoro estricto.' },
          { id: 'b', text: 'Al no hallar chigüiros o venados, el felino busca terneros para comer.', isCorrect: true, feedback: '🌿 ¡Exacto! Ante el hambre por falta de presas, ataca animales domésticos.' },
          { id: 'c', text: 'El felino duerme muchas más horas para no gastar su energía.', feedback: '🔎 El hambre impulsa al depredador a buscar comida en las fincas.' },
          { id: 'd', text: 'El jaguar se acerca a las casas para buscar cariño de la gente.', feedback: '🔎 Es una necesidad biológica de alimentación lo que lo mueve.' }
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
          { id: 'a', text: 'Porque el bosque sigue talado y otro jaguar vendrá a ocupar el lugar.', isCorrect: true, feedback: '🌿 ¡Muy bien! Matar un jaguar no devuelve el bosque ni las presas.' },
          { id: 'b', text: 'Porque la piel del jaguar no tiene valor en el mercado del pueblo.', feedback: '🔎 La razón ecológica va más allá del valor comercial.' },
          { id: 'c', text: 'Porque el ganado aprende a cazar solo cuando no hay felinos cerca.', feedback: '🔎 Piensa en qué pasa con el hábitat que sigue sin comida natural.' },
          { id: 'd', text: 'Porque los jaguares regresan a la vida después de unas semanas.', feedback: '🔎 El problema de fondo es la pérdida del hábitat natural.' }
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
          { id: 'a', text: 'Poner veneno en los arroyos donde toma agua la fauna silvestre.', feedback: '🔎 Envenenar el agua destruye a todos los seres vivos del lugar.' },
          { id: 'b', text: 'Talar todo el monte para que no quede ningún animal escondido.', feedback: '🔎 Destruir el bosque empeora la sequía y la falta de agua.' },
          { id: 'c', text: 'Encerrar terneros de noche, usar cercas vivas y cuidar el bosque.', isCorrect: true, feedback: '🌿 ¡Brillante! Los corrales nocturnos y cercas vivas previenen ataques.' },
          { id: 'd', text: 'Encadenar a los terneros lejos de la casa para que sirvan de carnada.', feedback: '🔎 El objetivo es proteger la producción sin matar al felino.' }
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
          { id: 'a', text: 'Obligar a los campesinos a regalar todas sus vacas al municipio.', feedback: '🔎 Las familias campesinas necesitan sus animales para vivir.' },
          { id: 'b', text: 'Dejar que el ganado muera sin hacer nada hasta que no quede nada.', feedback: '🔎 Se deben buscar alternativas productivas y seguras.' },
          { id: 'c', text: 'Exigir que se cacen todos los felinos del departamento de una vez.', feedback: '🔎 La erradicación de depredadores rompe el equilibrio del bosque.' },
          { id: 'd', text: 'Combinar árboles con pasto y llegar a acuerdos que apoyen al ganadero.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! La convivencia protege al ganado y al jaguar.' }
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
          { id: 'a', text: 'Para cobrar más dinero por hacer reuniones largas con los vecinos.', feedback: '🔎 La razón es resolver el problema de raíz, no cobrar honorarios.' },
          { id: 'b', text: 'Porque actuar con violencia no quita el hambre del felino ni devuelve el monte.', isCorrect: true, feedback: '🌿 ¡Excelente pensamiento crítico! Conocer la causa permite dar soluciones reales.' },
          { id: 'c', text: 'Porque la ley exige escribir cartas antes de espantar a un animal.', feedback: '🔎 Analizar causas ayuda a convivir con la naturaleza.' },
          { id: 'd', text: 'No hace falta pensar, lo primero siempre debe ser disparar al animal.', feedback: '🔎 La violencia ciega empeora los conflictos ambientales.' }
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
          { id: 'a', text: 'Perros y gatos de raza fina.', feedback: '🔎 Revisa qué animales con plumas estaban enjaulados.' },
          { id: 'b', text: 'Peces de colores en una pecera grande.', feedback: '🔎 El texto habla de aves atrapadas de su hábitat.' },
          { id: 'c', text: 'Aves silvestres enjauladas en una casa.', isCorrect: true, feedback: '🌿 ¡Correcto! Había loros y pericos retenidos en una vivienda.' },
          { id: 'd', text: 'Monos aulladores atados a un árbol.', feedback: '🔎 Los animales encontrados en esta misión tenían plumas.' }
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
          { id: 'a', text: 'Que las querían mucho y las cuidaban como familia.', isCorrect: true, feedback: '🌿 ¡Exacto! La familia aseguraba que las trataba con cariño.' },
          { id: 'b', text: 'Que las tenían listas para vender en el mercado.', feedback: '🔎 La familia creía que estaba haciendo algo bueno.' },
          { id: 'c', text: 'Que las iban a soltar al día siguiente en la selva.', feedback: '🔎 La familia deseaba conservarlas en sus jaulas.' },
          { id: 'd', text: 'Que las aves eran agresivas y dañaban los muebles.', feedback: '🔎 Decían tenerles mucho afecto y darles alimento.' }
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
          { id: 'a', text: 'El precio del alpiste y del maíz en las tiendas.', feedback: '🔎 Los Guardianes investigaban el origen silvestre de las aves.' },
          { id: 'b', text: 'Cuántas veces al día cantaban las aves en la sala.', feedback: '🔎 La clave era rastrear cómo llegaron a esa casa.' },
          { id: 'c', text: 'Si las plumas caídas servían para tejer sombreros.', feedback: '🔎 Su objetivo era conocer la procedencia legal y ambiental.' },
          { id: 'd', text: 'El lugar de donde venían las aves (su procedencia).', isCorrect: true, feedback: '🌿 ¡Muy bien! Saber de dónde venían permite entender el tráfico.' }
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
          { id: 'a', text: 'Porque las aves cantan para llamar a sus hermanos del bosque.', feedback: '🔎 La relación es económica: la compra motiva la captura.' },
          { id: 'b', text: 'Porque si hay gente que compra, habrá cazadores que sigan atrapando.', isCorrect: true, feedback: '🌿 ¡Gran deducción! La demanda de mascotas alimenta el tráfico ilegal.' },
          { id: 'c', text: 'Porque el municipio premia a quienes tienen loros en los patios.', feedback: '🔎 La ley prohíbe la tenencia de fauna silvestre.' },
          { id: 'd', text: 'Porque a los cazadores no les importa si nadie compra los animales.', feedback: '🔎 Sin compradores, el negocio de atrapar aves deja de ser rentable.' }
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
          { id: 'a', text: 'Porque al sacarlo del bosque, ese animal ya no dispersa semillas ni se reproduce.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! Cada loro cumple una función vital en el monte.' },
          { id: 'b', text: 'Porque los animales en casa crecen tanto que no caben en los cuartos.', feedback: '🔎 El daño ocurre en la naturaleza de donde fue sacado el animal.' },
          { id: 'c', text: 'Porque las aves tristes marchitan las plantas del jardín de la casa.', feedback: '🔎 Piensa en el rol del ave en su hábitat original.' },
          { id: 'd', text: 'Porque el cariño de las personas debilita las alas de los animales.', feedback: '🔎 El problema es que se le quitó a la naturaleza un individuo fértil.' }
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
          { id: 'a', text: 'Atrapar aves ayuda a que los árboles del monte crezcan más limpios.', feedback: '🔎 Las aves ayudan a sembrar árboles, no a ensuciarlos.' },
          { id: 'b', text: 'Las aves silvestres se reproducen mejor cuando viven en jaulas.', feedback: '🔎 El encierro frena la reproducción natural de las especies.' },
          { id: 'c', text: 'Sacar aves del bosque debilita a la población y puede hacerla desaparecer.', isCorrect: true, feedback: '🌿 ¡Exacto! La captura constante vacía los bosques de aves.' },
          { id: 'd', text: 'No existe relación, la selva no siente la falta de diez o veinte loros.', feedback: '🔎 Cada ave extraída resta oportunidades de supervivencia a la bandada.' }
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
          { id: 'a', text: 'Soltarla en cualquier calle sin saber si sabe volar o buscar comida.', feedback: '🔎 Liberar un animal domesticado sin ayuda puede causarle la muerte.' },
          { id: 'b', text: 'Esconder la jaula en un rincón oscuro para que nadie la descubra.', feedback: '🔎 Ocultar el problema no ayuda al animal ni al bosque.' },
          { id: 'c', text: 'Venderla rápido a un vecino antes de que lleguen los Guardianes.', feedback: '🔎 Venderla continúa el ciclo del comercio ilegal de fauna.' },
          { id: 'd', text: 'Pedir ayuda a la autoridad ambiental para revisar si puede ser rehabilitada.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! Los expertos evalúan si el animal puede volver a la selva.' }
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
          { id: 'a', text: 'Hacer concursos para premiar la jaula más bonita del barrio.', feedback: '🔎 Enjaular fauna silvestre no debe celebrarse ni premiarse.' },
          { id: 'b', text: 'Enseñar a adoptar perros o gatos y dejar a los animales del monte libres.', isCorrect: true, feedback: '🌿 ¡Brillante! Las mascotas domésticas sí conviven bien con las familias.' },
          { id: 'c', text: 'Prohibir que los niños tengan cualquier mascota, incluso un perro.', feedback: '🔎 Los animales domésticos como perros y gatos sí pueden ser cuidados.' },
          { id: 'd', text: 'Regalar un loro silvestre a los estudiantes con mejores calificaciones.', feedback: '🔎 La fauna silvestre debe permanecer libre en su hábitat.' }
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
          { id: 'a', text: 'Porque ayuda a descubrir rutas ilegales y cuidar los bosques de origen.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento crítico! Identificar el origen protege los hábitats saqueados.' },
          { id: 'b', text: 'Solo sirve para saber si el animal aprende a repetir palabras.', feedback: '🔎 Conocer el origen ayuda a frenar las rutas de tráfico ilegal.' },
          { id: 'c', text: 'Para ponerle una placa con el nombre de la ciudad donde nació.', feedback: '🔎 El origen permite saber de qué ecosistema fue extraído.' },
          { id: 'd', text: 'No tiene importancia de dónde vino mientras tenga semillas en su plato.', feedback: '🔎 Saber la procedencia es clave para frenar el saqueo de fauna.' }
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
          { id: 'a', text: 'Un mono aullador atado con una cadena a un árbol.', isCorrect: true, feedback: '🌿 ¡Correcto! El texto describe al mono en cautiverio.' },
          { id: 'b', text: 'Un grupo de ardillas comiendo frutas en el suelo.', feedback: '🔎 El animal retenido era un primate de la región.' },
          { id: 'c', text: 'Un oso perezoso durmiendo en las ramas altas.', feedback: '🔎 Revisa qué animal estaba amarrado en el patio.' },
          { id: 'd', text: 'Dos iguanas hembras descansando sobre una cerca.', feedback: '🔎 La misión trata sobre el cautiverio de monos.' }
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
          { id: 'a', text: 'Perros y gatos domésticos viviendo en la casa.', feedback: '🔎 El texto habla de animales silvestres en cautiverio.' },
          { id: 'b', text: 'Gallinas y pavos criados para el consumo familiar.', feedback: '🔎 Los animales observados pertenecían al bosque natural.' },
          { id: 'c', text: 'Conejos de granja alimentados con pasto verde.', feedback: '🔎 Se trataba de fauna silvestre atrapada en el bosque.' },
          { id: 'd', text: 'Loros y pericos en jaulas de alambre en el patio.', isCorrect: true, feedback: '🌿 ¡Exacto! Había aves y monos retenidos como mascotas.' }
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
          { id: 'a', text: 'Dormir en camas con cobijas y jugar con juguetes.', feedback: '🔎 Los animales silvestres tienen necesidades biológicas de su especie.' },
          { id: 'b', text: 'Moverse libres, buscar comida silvestre y convivir con su grupo.', isCorrect: true, feedback: '🌿 ¡Muy bien! El bienestar exige libertad y vida con sus semejantes.' },
          { id: 'c', text: 'Aprender trucos humanos y acostumbrarse a usar ropa.', feedback: '🔎 Humanizar a un animal silvestre perjudica su salud natural.' },
          { id: 'd', text: 'Recibir granos de maíz y agua en una taza plástica.', feedback: '🔎 Su bienestar va mucho más allá de recibir alimento en un plato.' }
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
          { id: 'a', text: 'Porque la comida casera siempre contiene bacterias dañinas.', feedback: '🔎 La comida puede ser limpia, pero el encierro daña su conducta natural.' },
          { id: 'b', text: 'Porque los animales del bosque solo toman agua de las hojas altas.', feedback: '🔎 El encierro y la soledad son los que generan estrés y sufrimiento.' },
          { id: 'c', text: 'Porque un animal silvestre necesita trepar, volar y estar con su manada.', isCorrect: true, feedback: '🌿 ¡Gran deducción! El bienestar incluye salud mental, ejercicio y libertad.' },
          { id: 'd', text: 'Porque a las fieras les molesta que las personas las miren comer.', feedback: '🔎 Piensa en la necesidad de expresar conductas propias de su especie.' }
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
          { id: 'a', text: 'Porque el mono guarda rencor contra las personas que lo cuidan.', feedback: '🔎 No se trata de rencor, sino de instintos biológicos naturales.' },
          { id: 'b', text: 'Porque los monos aprenden a extrañar los árboles mirando fotografías.', feedback: '🔎 Sus necesidades de trepar y comunicarse son genéticas e innatas.' },
          { id: 'c', text: 'Porque el aire caliente del pueblo le produce mareos y debilidad.', feedback: '🔎 Su comportamiento responde a necesidades biológicas de primate.' },
          { id: 'd', text: 'Porque sus instintos y su cuerpo están adaptados a la vida en la selva.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! Millones de años de evolución no se borran en una casa.' }
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
          { id: 'a', text: 'No existe relación, porque los cazadores solo atrapan animales por gusto.', feedback: '🔎 Sin compradores, el comercio ilegal deja de ser un negocio.' },
          { id: 'b', text: 'La compra de mascotas motiva a los cazadores a atrapar más crías.', isCorrect: true, feedback: '🌿 ¡Exacto! Cada comprador mantiene activo el negocio del tráfico.' },
          { id: 'c', text: 'Tener mascotas hace que los animales del bosque salgan a las carreteras.', feedback: '🔎 La demanda económica es el motor que impulsa las capturas.' },
          { id: 'd', text: 'Al aumentar las compras, los animales aprenden a esconderse mejor.', feedback: '🔎 La presión de captura reduce las poblaciones en la naturaleza.' }
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
          { id: 'a', text: 'Explicarles que amar al mono es querer que viva libre en su hábitat.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! El verdadero afecto respeta la naturaleza del animal.' },
          { id: 'b', text: 'Gritarles y romper la cadena a la fuerza sin dar explicaciones.', feedback: '🔎 El Guardián actúa con diálogo respetuoso y educación ambiental.' },
          { id: 'c', text: 'Aconsejarles comprar otro mono para que no se sienta solo en la casa.', feedback: '🔎 Comprar más animales empeora el problema del tráfico de fauna.' },
          { id: 'd', text: 'Decirles que cambien la cadena por una cuerda de tela más suave.', feedback: '🔎 La meta es devolverlo a la naturaleza mediante rehabilitación.' }
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
          { id: 'a', text: 'Comprar el animal para cuidarlo en su propia casa sin decirle a nadie.', feedback: '🔎 Comprarlo premia al vendedor y continúa el ciclo de cautiverio.' },
          { id: 'b', text: 'Ignorar el caso porque cada familia decide qué hacer en su propiedad.', feedback: '🔎 La fauna silvestre es un bien común protegido por la ley.' },
          { id: 'c', text: 'Avisar a la entidad ambiental para que lo rescate y lo rehabilite.', isCorrect: true, feedback: '🌿 ¡Brillante! Las autoridades ambientales cuentan con expertos para su recuperación.' },
          { id: 'd', text: 'Soltar al mono en el parque del pueblo para que busque comida solo.', feedback: '🔎 Un animal domesticado puede morir si se le abandona sin rehabilitación.' }
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
          { id: 'a', text: 'Solo porque las rejas de metal se calientan mucho al mediodía.', feedback: '🔎 El problema de fondo es la pérdida de libertad y de estímulos naturales.' },
          { id: 'b', text: 'Porque una jaula no tiene muebles cómodos como los de una vivienda.', feedback: '🔎 La fauna no necesita comodidades humanas, necesita su ecosistema.' },
          { id: 'c', text: 'Son iguales si se limpia el piso y se le da agua fresca todos los días.', feedback: '🔎 El espacio reducido y el aislamiento causan estrés crónico al animal.' },
          { id: 'd', text: 'Porque en la jaula no puede trepar, buscar frutos ni vivir con su grupo.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento crítico! El hábitat ofrece espacio, clima y relaciones sociales.' }
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
          { id: 'a', text: 'Monos aulladores buscando semillas en los árboles.', feedback: '🔎 El caso trata sobre animales domésticos abandonados en la calle.' },
          { id: 'b', text: 'Chigüiros nadando en las orillas del río Magdalena.', feedback: '🔎 Revisa los animales de compañía que protagonizan la historia.' },
          { id: 'c', text: 'Cabras y cerdos pastando libremente en las aceras.', feedback: '🔎 La problemática se enfoca en perros y gatos sin hogar.' },
          { id: 'd', text: 'Perros y gatos callejeros en un barrio del municipio.', isCorrect: true, feedback: '🌿 ¡Correcto! La misión inicia con mascotas abandonadas en el barrio.' }
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
          { id: 'a', text: 'Estaban bien alimentados con concentrado de primera calidad.', feedback: '🔎 Los animales callejeros pasaban hambre y comían desperdicios.' },
          { id: 'b', text: 'Buscaban comida entre la basura y tenían heridas o sarna.', isCorrect: true, feedback: '🌿 ¡Exacto! Sufrían desnutrición, enfermedades y lesiones.' },
          { id: 'c', text: 'Llevaban collares nuevos con placas de identificación claras.', feedback: '🔎 Carecían de dueño y de atención veterinaria básica.' },
          { id: 'd', text: 'Estaban entrenados para cuidar los parques del municipio.', feedback: '🔎 El texto describe una situación de abandono y sufrimiento.' }
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
          { id: 'a', text: 'Decidir irse de la casa para vivir aventuras por el pueblo.', feedback: '🔎 Los animales domésticos dependen del cuidado de las personas.' },
          { id: 'b', text: 'Haber viajado solos desde otras ciudades en busca del río.', feedback: '🔎 No viajan por su cuenta; las familias los dejaron en la calle.' },
          { id: 'c', text: 'Haber sido abandonados por sus dueños al no poder cuidarlos.', isCorrect: true, feedback: '🌿 ¡Muy bien! El abandono de mascotas es la causa principal del problema.' },
          { id: 'd', text: 'Escapar para formar manadas salvajes en medio de la selva.', feedback: '🔎 El origen del problema está en la falta de tenencia responsable.' }
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
          { id: 'a', text: 'Porque los animales sin esterilizar tienen crías que nacen sin hogar.', isCorrect: true, feedback: '🌿 ¡Gran deducción! Una pareja sin esterilizar multiplica las camadas en la calle.' },
          { id: 'b', text: 'Porque las calles del pueblo se hacen más anchas cada año.', feedback: '🔎 El aumento de animales se debe a nacimientos sin control.' },
          { id: 'c', text: 'Porque los perros abandonados construyen refugios en lotes vacíos.', feedback: '🔎 La causa biológica del aumento es la reproducción descontrolada.' },
          { id: 'd', text: 'No aumenta el número, porque los perros callejeros no tienen crías.', feedback: '🔎 Al no estar esterilizados, se reproducen continuamente.' }
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
          { id: 'a', text: 'Porque a los perros de la calle les hace daño la comida casera.', feedback: '🔎 Alimentarlos ayuda en el momento, pero no soluciona el abandono.' },
          { id: 'b', text: 'Porque darles comida hace que se vuelvan agresivos con los vecinos.', feedback: '🔎 El problema de fondo es la salud pública y la falta de dueño.' },
          { id: 'c', text: 'Porque calma el hambre del día pero no resuelve la falta de un hogar.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! Se necesita esterilización, vacunas y adopción responsable.' },
          { id: 'd', text: 'Porque la comida se pudre rápido por el calor de la tarde.', feedback: '🔎 La solución requiere esterilización masiva y adopción.' }
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
          { id: 'a', text: 'No existe relación, la cantidad de animales en la calle no cambia.', feedback: '🔎 La falta de control reproductivo eleva el número de animales callejeros.' },
          { id: 'b', text: 'Tener más crías hace que los perros encuentren dueños más fácil.', feedback: '🔎 Al contrario: hay demasiados cachorros y muy pocas familias que adopten.' },
          { id: 'c', text: 'El abandono hace que las hembras dejen de tener cachorros en la calle.', feedback: '🔎 Sin esterilización, las hembras siguen teniendo camadas en desamparo.' },
          { id: 'd', text: 'A mayor abandono y sin esterilización, nacen más camadas sin hogar.', isCorrect: true, feedback: '🌿 ¡Exacto! Es un ciclo que multiplica el sufrimiento y la sobrepoblación.' }
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
          { id: 'a', text: 'Arrojarlo al caño para que la corriente se lo lleve lejos del barrio.', feedback: '🔎 Un Guardián respeta la vida y busca auxilio médico para el animal.' },
          { id: 'b', text: 'Darle agua limpia, buscar ayuda veterinaria y promover su adopción.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! El auxilio y la adopción salvan vidas.' },
          { id: 'c', text: 'Tomarle una fotografía para mostrarla a los amigos y seguir de largo.', feedback: '🔎 El Guardián asume una actitud solidaria y responsable.' },
          { id: 'd', text: 'Amarrarlo a un poste para que cuide las bolsas de basura de la cuadra.', feedback: '🔎 Dejarlo atado a la intemperie empeora su dolor y sus heridas.' }
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
          { id: 'a', text: 'Hacer jornadas de esterilización, educar a las familias y sancionar el abandono.', isCorrect: true, feedback: '🌿 ¡Brillante! La esterilización masiva y la educación previenen el problema.' },
          { id: 'b', text: 'Prohibir que los niños y familias sientan cariño por sus mascotas.', feedback: '🔎 El cariño responsable es la base del buen trato a los animales.' },
          { id: 'c', text: 'Llevar a los perros de noche y dejarlos tirados en otro municipio vecino.', feedback: '🔎 Eso solo traslada el problema y es un acto de crueldad penado por ley.' },
          { id: 'd', text: 'Esperar a que una creciente del río limpie las calles de animales.', feedback: '🔎 La comunidad debe actuar con programas preventivos organizados.' }
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
          { id: 'a', text: 'Solo para que las clínicas veterinarias tengan más clientes en el pueblo.', feedback: '🔎 El objetivo es la salud comunitaria y el bienestar de los animales.' },
          { id: 'b', text: 'Porque son reglas que inventaron para llenar formularios en la alcaldía.', feedback: '🔎 Son acciones comprobadas que frenan la sobrepoblación en las ciudades.' },
          { id: 'c', text: 'Porque evitan camadas no deseadas y aseguran que cada mascota tenga un hogar.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento crítico! Atacan las causas de fondo del abandono.' },
          { id: 'd', text: 'No sirven de nada, los animales de la calle viven mejor sin cuidados.', feedback: '🔎 En la calle sufren hambre, frío, atropellamientos y enfermedades graves.' }
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
          { id: 'a', text: 'Una siembra ordenada de frutales nativos en hileras rectas.', feedback: '🔎 Lo encontrado fue tala destructiva y pérdida de vegetación.' },
          { id: 'b', text: 'Árboles talados, troncos caídos y parches de tierra descapotada.', isCorrect: true, feedback: '🌿 ¡Correcto! El texto describe la deforestación y el suelo expuesto.' },
          { id: 'c', text: 'Un jardín botánico con senderos de piedra para turistas.', feedback: '🔎 Los Guardianes hallaron zonas deforestadas sin sombra ni hojas.' },
          { id: 'd', text: 'Nuevas lagunas artificiales para almacenar agua de lluvia.', feedback: '🔎 El impacto observado era la pérdida de árboles en el bosque seco.' }
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
          { id: 'a', text: 'Un páramo frío de alta montaña con frailejones.', feedback: '🔎 El contexto geográfico de Magangué es bosque seco y sabana tropical.' },
          { id: 'b', text: 'Un bosque nublado de cordillera con orquídeas.', feedback: '🔎 Revisa el ecosistema caluroso y estacional que se describe.' },
          { id: 'c', text: 'El bosque seco tropical de la región caribeña.', isCorrect: true, feedback: '🌿 ¡Exacto! Es uno de los ecosistemas más amenazados del país.' },
          { id: 'd', text: 'Una plantación de pinos sembrada para hacer papel.', feedback: '🔎 Se trata del bosque seco natural que pierde su cobertura.' }
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
          { id: 'a', text: 'Sombra fresca, humedad en el suelo y semillas que alimentan fauna.', isCorrect: true, feedback: '🌿 ¡Muy bien! Los árboles protegen la humedad y nutren la fauna.' },
          { id: 'b', text: 'Metales preciosos y piedras de colores brillantes.', feedback: '🔎 Las funciones descritas son ecológicas: sombra, suelo y refugio.' },
          { id: 'c', text: 'Calor sofocante y polvo seco que vuela por el aire.', feedback: '🔎 El calor y el polvo aparecen cuando se talan los árboles.' },
          { id: 'd', text: 'Inundaciones constantes durante todo el verano.', feedback: '🔎 El bosque regula el agua y amortigua los vientos fuertes.' }
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
          { id: 'a', text: 'Porque las motosierras calientan el suelo con su motor de gasolina.', feedback: '🔎 La causa es la pérdida de la cubierta vegetal y de la sombra.' },
          { id: 'b', text: 'Porque los animales del bosque se llevan la humedad en sus patas.', feedback: '🔎 Al quitar los árboles, el suelo queda desprotegido frente al sol y la lluvia.' },
          { id: 'c', text: 'El suelo no cambia, sigue teniendo la misma fertilidad con o sin monte.', feedback: '🔎 La tierra descubierta se erosiona y pierde sus nutrientes con rapidez.' },
          { id: 'd', text: 'Porque las raíces sostenían la tierra y las hojas guardaban la humedad.', isCorrect: true, feedback: '🌿 ¡Gran deducción! Sin árboles, el sol reseca la tierra y el viento se lleva el suelo fértil.' }
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
          { id: 'a', text: 'Los animales aprenden a fabricar sombrillas con ramas secas.', feedback: '🔎 La fauna huye o muere al destruirse su hábitat natural.' },
          { id: 'b', text: 'Los pájaros y mamíferos se quedan sin nidos, comida ni sombra para vivir.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! El bosque es la casa y el sustento de la fauna silvestre.' },
          { id: 'c', text: 'Las aves prefieren vivir en el suelo para caminar más cómodas.', feedback: '🔎 Muchas aves necesitan copas altas para anidar y alimentarse.' },
          { id: 'd', text: 'Los animales se alegran porque ahora entra más luz solar al suelo.', feedback: '🔎 La pérdida de árboles destruye las fuentes de frutos y semillas.' }
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
          { id: 'a', text: 'Al tumbar árboles se calienta el suelo y se evapora el agua de los pozos.', isCorrect: true, feedback: '🌿 ¡Muy bien! La masa vegetal regula el microclima y conserva el agua.' },
          { id: 'b', text: 'La tala frena el viento y hace que llueva más seguido en las fincas.', feedback: '🔎 Al contrario: talar reseca el ambiente y reduce la nubosidad local.' },
          { id: 'c', text: 'No existe relación, los árboles no tienen que ver con el agua ni el calor.', feedback: '🔎 La vegetación transpira vapor y protege los nacimientos de agua.' },
          { id: 'd', text: 'El clima solo cambia si la gente enciende fogatas en los potreros.', feedback: '🔎 La deforestación masiva altera la temperatura de toda la comarca.' }
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
          { id: 'a', text: 'Regar cemento sobre la tierra para evitar que vuelva a crecer monte.', feedback: '🔎 El cemento destruye la fertilidad y no permite sembrar alimentos.' },
          { id: 'b', text: 'Quemar los rastrojos secos para que el suelo quede limpio y parejo.', feedback: '🔎 Las quemas matan los microorganismos del suelo y provocan incendios.' },
          { id: 'c', text: 'Sembrar árboles nativos como ceiba e iguá y frenar la tala indiscriminada.', isCorrect: true, feedback: '🌿 ¡Brillante! La reforestación con especies propias recupera el bosque.' },
          { id: 'd', text: 'Traer árboles plásticos de adorno para que el paisaje se vea verde.', feedback: '🔎 Los árboles plásticos no dan oxígeno, ni frutos, ni agua.' }
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
          { id: 'a', text: 'Talar cada año más monte para no tener que abonar la tierra vieja.', feedback: '🔎 Acabar con el bosque deja a la comunidad sin agua y con suelos pobres.' },
          { id: 'b', text: 'Prohibir que los campesinos tomen una sola fruta de los árboles.', feedback: '🔎 Las familias pueden cosechar frutos si cuidan las plantas madre.' },
          { id: 'c', text: 'Comprar carbón mineral importado y botar la madera de las fincas.', feedback: '🔎 La solución es aprender a podar y reforestar en las propias parcelas.' },
          { id: 'd', text: 'Combinar árboles con cultivos y usar leña solo de ramas caídas y secas.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! El uso sostenible permite obtener leña sin arrasar el monte.' }
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
          { id: 'a', text: 'Porque un bosque seco no sirve para nada y solo produce ramas con espinas.', feedback: '🔎 El bosque seco protege acuíferos y alberga especies únicas del Caribe.' },
          { id: 'b', text: 'Porque retiene agua en sequías, frena huracanes y da hogar a fauna única.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento crítico! Este bosque es un escudo natural contra el cambio climático.' },
          { id: 'c', text: 'Solo para que los poetas escriban canciones sobre árboles antiguos.', feedback: '🔎 Presta servicios ambientales indispensables para la vida campesina.' },
          { id: 'd', text: 'Porque la madera fina se vende muy cara a compradores extranjeros.', feedback: '🔎 El valor real del bosque está en mantener vivo y fértil el territorio.' }
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
          { id: 'a', text: 'Una selva continua e impenetrable que cubre cientos de kilómetros.', feedback: '🔎 El paisaje estaba dividido por caminos, cercas y fincas.' },
          { id: 'b', text: 'Una gran ciudad llena de edificios altos y avenidas con semáforos.', feedback: '🔎 Se trata de una zona rural con mezcla de agricultura y parches verdes.' },
          { id: 'c', text: 'Un paisaje con parches de bosque aislados entre potreros y cultivos.', isCorrect: true, feedback: '🌿 ¡Correcto! El texto describe la fragmentación del territorio.' },
          { id: 'd', text: 'Una playa desértica de arena blanca junto a un puerto marítimo.', feedback: '🔎 El entorno es la sabana y humedales de la región ribereña.' }
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
          { id: 'a', text: 'Cercas de alambre, carreteras destapadas, potreros y cultivos limpios.', isCorrect: true, feedback: '🌿 ¡Exacto! Esas obras humanas partieron la continuidad del bosque.' },
          { id: 'b', text: 'Una muralla de piedra antigua construida en tiempos coloniales.', feedback: '🔎 Los límites actuales son producto del uso agrícola y ganadero.' },
          { id: 'c', text: 'Montañas rocosas muy empinadas que separan los valles.', feedback: '🔎 La división fue causada por actividades humanas recientes.' },
          { id: 'd', text: 'Ríos subterráneos que abrieron grietas hondas en el suelo.', feedback: '🔎 El monte quedó dividido en islas por la acción campesina y ganadera.' }
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
          { id: 'a', text: 'La fabricación de computadores y teléfonos celulares modernos.', feedback: '🔎 Las actividades descritas son del sector agropecuario rural.' },
          { id: 'b', text: 'La venta de piedras talladas en ferias internacionales de lujo.', feedback: '🔎 El sustento proviene de la siembra de cultivos y la cría de animales.' },
          { id: 'c', text: 'La pesca en barcos gigantescos en aguas del océano Pacífico.', feedback: '🔎 La economía local gira en torno a la tierra, el río y los animales.' },
          { id: 'd', text: 'La agricultura campesina y la ganadería tradicional de la sabana.', isCorrect: true, feedback: '🌿 ¡Muy bien! Son las actividades que dan sustento a las familias.' }
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
          { id: 'a', text: 'Los animales aprenden a tomar transporte público para visitar a sus familias.', feedback: '🔎 El aislamiento dificulta conseguir alimento y encontrar pareja para reproducirse.' },
          { id: 'b', text: 'Las especies quedan encerradas en islas verdes y corren riesgo al cruzar caminos.', isCorrect: true, feedback: '🌿 ¡Gran deducción! La fragmentación aísla manadas y las expone a atropellos o caza.' },
          { id: 'c', text: 'Los monos y venados se hacen amigos de los tractores y viajan en ellos.', feedback: '🔎 Al cruzar potreros abiertos sufren ataques de perros o de cazadores.' },
          { id: 'd', text: 'No les afecta, porque cualquier animal puede saltar cercas sin cansarse.', feedback: '🔎 Muchas especies pequeñas no se atreven a cruzar potreros sin árboles.' }
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
          { id: 'a', text: 'Porque talar y abrir zanjas reseca las ciénagas y aprieta la tierra fértil.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! El arado y el desvío de caños alteran el ciclo del agua.' },
          { id: 'b', text: 'Porque el suelo se vuelve azul brillante cada vez que se siembra yuca.', feedback: '🔎 Los cambios son de compactación, pérdida de humedad y nutrientes.' },
          { id: 'c', text: 'Porque el agua desaparece sola cuando siente que hay personas cerca.', feedback: '🔎 La evaporación y la falta de árboles disminuyen el agua en los pozos.' },
          { id: 'd', text: 'El trabajo en el campo nunca cambia el suelo ni el cauce de las aguas.', feedback: '🔎 La actividad humana transforma directamente el suelo y los arroyos.' }
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
          { id: 'a', text: 'Para que los libros de ciencias de la escuela sean más pesados y largos.', feedback: '🔎 Ambas necesidades deben equilibrarse para que haya futuro.' },
          { id: 'b', text: 'Porque a los animales silvestres les gusta ayudar a arar la tierra.', feedback: '🔎 La meta es producir alimentos sin destruir los recursos naturales.' },
          { id: 'c', text: 'Porque el campesino necesita comer hoy y cuidar la tierra para cosechar mañana.', isCorrect: true, feedback: '🌿 ¡Muy bien! Sin naturaleza no hay cosechas, y sin comida la gente no vive.' },
          { id: 'd', text: 'No deben unirse nunca, porque proteger la tierra prohíbe sembrar comida.', feedback: '🔎 Es posible sembrar de manera ecológica cuidando el suelo y el agua.' }
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
          { id: 'a', text: 'Echar cemento en toda la sabana para que los animales no se unten de lodo.', feedback: '🔎 Pavimentar el campo destruiría la agricultura y secaría los humedales.' },
          { id: 'b', text: 'Prohibir que la gente siembre alimentos para que solo crezca monte bravo.', feedback: '🔎 Las comunidades necesitan cultivar alimentos con buenas prácticas ecológicas.' },
          { id: 'c', text: 'Dejar que cada quien tumbe y tape arroyos según su propia conveniencia.', feedback: '🔎 El desorden territorial provoca inundaciones graves y escasez de agua.' },
          { id: 'd', text: 'Poner corredores de árboles que unan los parches y cuidar orillas de caños.', isCorrect: true, feedback: '🌿 ¡Brillante! Los corredores verdes permiten que los animales caminen seguros.' }
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
          { id: 'a', text: 'Tomando decisiones desde oficinas lejanas sin conocer el río Magdalena.', feedback: '🔎 Las soluciones deben construirse con la gente que vive en el territorio.' },
          { id: 'b', text: 'Reuniendo a campesinos, pescadores y sabedores para acordar el uso del suelo.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! La planificación participativa respeta los ciclos del agua.' },
          { id: 'c', text: 'Lanzando monedas al aire para elegir dónde poner las cercas de alambre.', feedback: '🔎 Se necesita ciencia, diálogo comunitario y conocimiento tradicional.' },
          { id: 'd', text: 'Esperando a que llegue el invierno para improvisar muros de costales rotos.', feedback: '🔎 Planear con anticipación evita desastres y protege los hogares ribereños.' }
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
          { id: 'a', text: 'Porque lo que se hace en la tierra afecta los caños, los peces y las familias.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento crítico! En el territorio todos los elementos están conectados.' },
          { id: 'b', text: 'Solo afecta a las lombrices de tierra que viven debajo de las raíces.', feedback: '🔎 Los pesticidas y la erosión bajan a los ríos y dañan la pesca.' },
          { id: 'c', text: 'Porque la tierra tiembla cada vez que se arranca una mata de maíz.', feedback: '🔎 La conexión ecológica hace que un daño en el suelo altere el agua y la fauna.' },
          { id: 'd', text: 'Las decisiones de una finca no tienen ninguna consecuencia en los vecinos.', feedback: '🔎 El agua corre y el viento viaja, llevando impactos de un predio a otro.' }
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
          { id: 'a', text: 'El mercurio usado para separar oro.', isCorrect: true, feedback: '🌿 ¡Correcto! El mercurio es el metal contaminante de la misión.' },
          { id: 'b', text: 'Bolsas plásticas flotando en el agua.', feedback: '🔎 Revisa qué metal pesado tóxico se menciona en la lectura.' },
          { id: 'c', text: 'Detergentes y espumas de jabón sucio.', feedback: '🔎 El elemento estudiado es un metal líquido usado en minería.' },
          { id: 'd', text: 'Cenizas de leña quemada en las orillas.', feedback: '🔎 Se trata de un metal pesado muy peligroso para la salud.' }
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
          { id: 'a', text: 'Con la siembra de plátano en las parcelas.', feedback: '🔎 La fuente de contaminación descrita son las dragas y bateas mineras.' },
          { id: 'b', text: 'Con la fabricación de quesos y suero costeño.', feedback: '🔎 El metal proviene de la extracción minera en cuencas altas.' },
          { id: 'c', text: 'Con paseos turísticos en lanchas de motor.', feedback: '🔎 Se relaciona con el vertimiento minero en ríos como el Cauca y Nechí.' },
          { id: 'd', text: 'Con la minería de oro en ríos y caños.', isCorrect: true, feedback: '🌿 ¡Exacto! El mercurio se utiliza para amalgamar el oro en la minería.' }
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
          { id: 'a', text: 'Porque todos los peces se juntan a jugar en los charcos con mercurio.', feedback: '🔎 El contaminante se absorbe por las branquias y la comida.' },
          { id: 'b', text: 'Porque el veneno entra al agua, pasa a los peces y viaja por la cadena alimentaria.', isCorrect: true, feedback: '🌿 ¡Muy bien! El tóxico se acumula en los tejidos y pasa de presa a depredador.' },
          { id: 'c', text: 'Porque el mercurio vuela con alas de insecto y pica a los animales.', feedback: '🔎 El metal viaja invisible disuelto en el agua y pegado al lodo.' },
          { id: 'd', text: 'Porque los pescadores pintan a los peces para que brillen en la noche.', feedback: '🔎 La contaminación ingresa al cuerpo mediante el alimento contaminado.' }
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
          { id: 'a', text: 'Los peces compran el mercurio en el fondo del río para tener más fuerza.', feedback: '🔎 Los organismos ingieren el metal sin darse cuenta al alimentarse.' },
          { id: 'b', text: 'El agua del río se convierte en alimento concentrado para las aves rapaces.', feedback: '🔎 El metal pasa de nivel en nivel trófico por la ingestión de presas.' },
          { id: 'c', text: 'Las plantas y microbios lo absorben, peces chicos los comen y peces grandes los tragan.', isCorrect: true, feedback: '🌿 ¡Gran deducción! Así viaja el mercurio desde el plancton hasta los peces grandes.' },
          { id: 'd', text: 'Solo entra al cuerpo si los peces toman agua en recipientes de vidrio.', feedback: '🔎 El mercurio entra por la respiración acuática y la digestión.' }
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
          { id: 'a', text: 'Porque nadan más cerca del sol y el calor multiplica el veneno en su lomo.', feedback: '🔎 No depende del sol, sino de la cantidad de comida contaminada que comen.' },
          { id: 'b', text: 'Porque los animales grandes nacen con defensas más débiles que los pequeños.', feedback: '🔎 Al vivir más años y comer muchas presas, acumulan dosis mayores del metal.' },
          { id: 'c', text: 'Porque en los pozos hondos del río hay más sal que en los caños playos.', feedback: '🔎 El contaminante se fija en los músculos y órganos sin descomponerse.' },
          { id: 'd', text: 'Porque un pez grande come miles de peces chicos y junta todo el veneno de ellos.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! Eso se llama biomagnificación biológica.' }
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
          { id: 'a', text: 'Porque a las personas les gusta nadar en aguas con brillo plateado de noche.', feedback: '🔎 El riesgo está en consumir peces contaminados como bagres y blanquillos.' },
          { id: 'b', text: 'Porque los humanos introducen el mercurio y luego comen pescado con veneno.', isCorrect: true, feedback: '🌿 ¡Exacto! Quien contamina el río termina consumiendo el tóxico en su mesa.' },
          { id: 'c', text: 'Porque los seres humanos pueden respirar bajo el agua en las ciénagas.', feedback: '🔎 El ser humano está en la cima de la cadena alimentaria del río.' },
          { id: 'd', text: 'Los humanos no tienen nada que ver, el mercurio nace de las piedras del río.', feedback: '🔎 El vertimiento es causado por la actividad minera irresponsable.' }
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
          { id: 'a', text: 'Cambiar el mercurio por tecnologías limpias de lavado y apoyar a los mineros.', isCorrect: true, feedback: '🌿 ¡Brillante! Las mesas gravimétricas permiten sacar oro sin usar veneno.' },
          { id: 'b', text: 'Prohibir a la gente comer pescado para siempre sin ofrecer otra comida.', feedback: '🔎 Las familias ribereñas dependen del pescado para su nutrición diaria.' },
          { id: 'c', text: 'Echar cloro y aromatizantes al río para taparle el sabor al agua turbia.', feedback: '🔎 El cloro no elimina los metales pesados y envenena a los peces.' },
          { id: 'd', text: 'Echar más mercurio al agua para que los animales se acostumbren a él.', feedback: '🔎 El mercurio es un veneno irreversible que daña el cerebro humano.' }
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
          { id: 'a', text: 'Solo para que los biólogos salgan en la televisión y ganen premios.', feedback: '🔎 Monitorear el agua protege la vida y la salud de miles de habitantes.' },
          { id: 'b', text: 'Porque el río cambia de color según el día de la semana que toque.', feedback: '🔎 Un agua transparente puede estar llena de partículas tóxicas invisibles.' },
          { id: 'c', text: 'Porque el mercurio no huele ni se ve, y solo exámenes de laboratorio avisan el peligro.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! Sin análisis científicos continuos no se detecta la intoxicación.' },
          { id: 'd', text: 'No hace falta vigilar nada, lo que no se ve a simple vista no hace daño.', feedback: '🔎 El mercurio acumulado causa enfermedades neurológicas muy graves.' }
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
          { id: 'a', text: 'Cambiarse de nombre y mudarse a otro río para seguir trabajando igual.', feedback: '🔎 La responsabilidad ambiental exige detener el daño y sanear el sitio.' },
          { id: 'b', text: 'Ninguna responsabilidad, porque el oro vale más que la salud de los pueblos.', feedback: '🔎 La vida humana y la salud del ecosistema están por encima del dinero.' },
          { id: 'c', text: 'Regalar una bolsa de dulces a los vecinos para que no pongan quejas.', feedback: '🔎 El daño por metales pesados requiere atención médica y remediación del río.' },
          { id: 'd', text: 'Dejar de verter tóxicos, limpiar los caños y pagar los gastos de salud de la gente.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento crítico! Quien contamina debe reparar el daño causado.' }
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
          { id: 'a', text: 'Suelos negros muy húmedos cubiertos de flores de colores.', feedback: '🔎 El problema encontrado era el desgaste y resequedad de la tierra.' },
          { id: 'b', text: 'Rocas de granito pulido traídas por un glaciar de hielo.', feedback: '🔎 En la sabana caribeña el impacto es la degradación del suelo fértil.' },
          { id: 'c', text: 'Grandes lagos de aguas cristalinas rodeados de palmeras.', feedback: '🔎 La misión aborda el daño al suelo por malas prácticas agrícolas.' },
          { id: 'd', text: 'Tierra dura, grietas en el suelo y poca capa vegetal fértil.', isCorrect: true, feedback: '🌿 ¡Correcto! El texto describe la pérdida de suelo y la erosión.' }
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
          { id: 'a', text: 'El paso constante de bicicletas de carreras los fines de semana.', feedback: '🔎 Las causas reales son ganadería excesiva y quemas agrícolas.' },
          { id: 'b', text: 'El sobrepastoreo de ganado y las quemas repetidas de rastrojo.', isCorrect: true, feedback: '🌿 ¡Exacto! Pisotear sin descanso y quemar desgasta la tierra.' },
          { id: 'c', text: 'El aterrizaje de avionetas comerciales en los potreros.', feedback: '🔎 Revisa las prácticas agropecuarias que dañan la tierra en el texto.' },
          { id: 'd', text: 'La recolección de mangos maduros durante la época de cosecha.', feedback: '🔎 El pisoteo del ganado aprieta la tierra y no deja entrar aire ni agua.' }
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
          { id: 'a', text: 'Monedas antiguas de oro y vasijas de plata brillante.', feedback: '🔎 Lo que pierde el suelo son sus propiedades biológicas y nutrientes.' },
          { id: 'b', text: 'Capas de hielo congelado que guardan el frío de la noche.', feedback: '🔎 La pérdida es de fertilidad, agua y microorganismos del suelo.' },
          { id: 'c', text: 'Nutrientes, gusanos benéficos, humedad y vida microscópica.', isCorrect: true, feedback: '🌿 ¡Muy bien! Un suelo sano está lleno de vida y materia orgánica.' },
          { id: 'd', text: 'Gases tóxicos que quemaban las raíces de las plantas.', feedback: '🔎 El suelo vivo tiene materia orgánica que alimenta los cultivos.' }
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
          { id: 'a', text: 'Sin raíces que amarren la tierra, la lluvia arrastra el suelo al caño.', isCorrect: true, feedback: '🌿 ¡Gran deducción! La vegetación sujeta el suelo y evita que se lave con el agua.' },
          { id: 'b', text: 'El suelo se convierte en oro puro al quitar las raíces de las matas.', feedback: '🔎 La pérdida de plantas empobrece la tierra, no crea metales.' },
          { id: 'c', text: 'Las plantas enfrían tanto la tierra que sin ellas el suelo se evapora.', feedback: '🔎 La erosión hídrica y eólica lava la capa fértil cuando no hay raíces.' },
          { id: 'd', text: 'La tierra nunca cambia, sigue igual de firme con o sin vegetación.', feedback: '🔎 Un suelo pelado se compacta, se agrieta y se vuelve estéril.' }
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
          { id: 'a', text: 'El maíz y la yuca crecen el triple de rápido en suelos erosionados.', feedback: '🔎 Sin abono natural ni agua retenida, las plantas no crecen bien.' },
          { id: 'b', text: 'Las vacas prefieren comer piedras en lugar de pasto verde y fresco.', feedback: '🔎 El ganado se desnutre al acabarse el pasto de buena calidad.' },
          { id: 'c', text: 'El suelo pierde fertilidad, no retiene humedad y rinde menos comida.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! La tierra cansada da cosechas más pobres a las familias.' },
          { id: 'd', text: 'El suelo se vuelve tan suave que las personas se hunden hasta la rodilla.', feedback: '🔎 El pisoteo aprieta la tierra volviéndola dura como ladrillo.' }
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
          { id: 'a', text: 'No existe relación, la comida que comemos viene de fábricas lejanas.', feedback: '🔎 Casi todos los alimentos nacen del suelo fértil cultivado por campesinos.' },
          { id: 'b', text: 'Cuidar el suelo solo sirve para que los caminos se vean más bonitos.', feedback: '🔎 La seguridad alimentaria depende directamente de la salud de la tierra.' },
          { id: 'c', text: 'El suelo erosionado produce alimentos con más vitaminas y minerales.', feedback: '🔎 La tierra desgastada produce alimentos de menor calidad y cantidad.' },
          { id: 'd', text: 'Un suelo sano produce alimentos nutritivos y asegura la comida del pueblo.', isCorrect: true, feedback: '🌿 ¡Muy bien! Cuidar la tierra es cuidar el plato de comida de las familias.' }
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
          { id: 'a', text: 'Poner más vacas en el mismo lote para que aprieten más la tierra.', feedback: '🔎 Aumentar el ganado en un lote agotado acelera la desertificación.' },
          { id: 'b', text: 'Rotar potreros para descanso, sembrar árboles forrajeros y no quemar.', isCorrect: true, feedback: '🌿 ¡Brillante! La rotación y los árboles nutren el suelo y dan sombra al ganado.' },
          { id: 'c', text: 'Quemar con fuego toda la finca antes de que empiece a llover.', feedback: '🔎 Las quemas matan la vida del suelo y aumentan la erosión.' },
          { id: 'd', text: 'Bañar los potreros con venenos químicos para que no nazcan hierbas.', feedback: '🔎 Los venenos destruyen los insectos y microorganismos benéficos.' }
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
          { id: 'a', text: 'Enseñar técnicas de abono orgánico y dar apoyo para sembrar cercas vivas.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! La capacitación y el apoyo práctico mejoran la producción.' },
          { id: 'b', text: 'Quitarle la finca a los campesinos que tengan un pedazo de tierra seca.', feedback: '🔎 Se debe apoyar a las familias con educación y herramientas, no con castigos.' },
          { id: 'c', text: 'Decirles que abandonen el campo y se muden a buscar empleo a la capital.', feedback: '🔎 El campo es el corazón de la alimentación y de la cultura ribereña.' },
          { id: 'd', text: 'Prohibir que la gente tenga animales domésticos o críe terneros.', feedback: '🔎 La ganadería bien manejada puede convivir en armonía con los árboles.' }
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
          { id: 'a', text: 'Solo para que las lombrices de tierra tengan un lugar donde dormir.', feedback: '🔎 El suelo es la base de la alimentación, los bosques y el agua dulce.' },
          { id: 'b', text: 'Porque la tierra limpia hace que los zapatos se ensucien menos al caminar.', feedback: '🔎 Proteger el suelo garantiza la vida y la comida de las futuras generaciones.' },
          { id: 'c', text: 'Porque el suelo tarda siglos en formarse y si se pierde, no hay cosechas.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento crítico! Pocos centímetros de tierra fértil sostienen toda la vida.' },
          { id: 'd', text: 'No tiene importancia protegerlo, porque la tierra se puede comprar en bolsas.', feedback: '🔎 No es posible reemplazar millones de hectáreas de suelo fértil con tierra comprada.' }
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
          { id: 'a', text: 'Monedas de colección y joyas perdidas por los pescadores.', feedback: '🔎 El problema encontrado era acumulación de basuras y desechos.' },
          { id: 'b', text: 'Bolsas plásticas, botellas, llantas viejas y restos de comida.', isCorrect: true, feedback: '🌿 ¡Correcto! Esos fueron los residuos acumulados en el caño.' },
          { id: 'c', text: 'Flores aromáticas recién cortadas de los jardines del barrio.', feedback: '🔎 Se trataba de plásticos y desperdicios que tapaban el agua.' },
          { id: 'd', text: 'Troncos tallados con figuras indígenas antiguas de adorno.', feedback: '🔎 Los residuos eran basura doméstica arrojada al cauce.' }
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
          { id: 'a', text: 'En la cima de un cerro de piedra muy alejado del pueblo.', feedback: '🔎 El vertimiento ocurría en el caño que pasa junto a las casas.' },
          { id: 'b', text: 'En un relleno sanitario moderno con sellado especial.', feedback: '🔎 Era un botadero a cielo abierto dentro del cuerpo de agua.' },
          { id: 'c', text: 'En un caño cercano a las viviendas del barrio.', isCorrect: true, feedback: '🌿 ¡Exacto! Los desechos estaban dentro del cauce del agua.' },
          { id: 'd', text: 'En la sala de espera de la estación de policía local.', feedback: '🔎 La basura tapaba el caño y amenazaba con inundaciones.' }
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
          { id: 'a', text: 'Mal olor, mosquitos, agua tapada y peligro de inundación.', isCorrect: true, feedback: '🌿 ¡Muy bien! La basura estancada causa enfermedades y desbordamientos.' },
          { id: 'b', text: 'El agua se volvió dulce y cristalina como agua de manantial.', feedback: '🔎 La descomposición de basura contamina el agua y atrae plagas.' },
          { id: 'c', text: 'Llegaron muchos turistas extranjeros a tomar fotos del lugar.', feedback: '🔎 El sitio olía mal y representaba un peligro de salud pública.' },
          { id: 'd', text: 'Aparecieron peces de colores nadando felices entre el lodo.', feedback: '🔎 Los peces mueren por falta de oxígeno cuando el agua se pudre.' }
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
          { id: 'a', text: 'Porque los ríos tienen filtros mágicos que deshacen llantas al instante.', feedback: '🔎 Los plásticos duran cientos de años y viajan hasta el mar.' },
          { id: 'b', text: 'Porque la basura arrojada en un lote se transforma sola en abono dulce.', feedback: '🔎 Las bolsas y tarros son arrastrados por las lluvias hacia los caños.' },
          { id: 'c', text: 'Tirar basura en un lote nunca afecta al río ni a los vecinos del barrio.', feedback: '🔎 Los lixiviados y el viento llevan la contaminación a las fuentes de agua.' },
          { id: 'd', text: 'Porque el agua corre hacia los ríos grandes y el viento mueve los plásticos.', isCorrect: true, feedback: '🌿 ¡Gran deducción! La basura no se queda quieta: baja por los caños al Magdalena.' }
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
          { id: 'a', text: 'Para que la alcaldía no tenga que hacer ningún trabajo en todo el año.', feedback: '🔎 La comunidad y el municipio deben trabajar juntos con responsabilidad.' },
          { id: 'b', text: 'Porque todos botamos basura a diario y si el caño se tapa, nos inundamos todos.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! El caño es compartido y su cuidado exige el esfuerzo de todos.' },
          { id: 'c', text: 'Porque es un castigo obligatorio que impone la escuela en vacaciones.', feedback: '🔎 Cuidar el agua limpia es una necesidad vital para la salud del barrio.' },
          { id: 'd', text: 'Con que limpie una sola persona alcanza para desocupar todo el caño.', feedback: '🔎 Si muchos siguen botando basura, el esfuerzo de uno solo no será suficiente.' }
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
          { id: 'a', text: 'Los plásticos se rompen en partes diminutas que los peces tragan al comer.', isCorrect: true, feedback: '🌿 ¡Muy bien! Los microplásticos entran a la cadena alimentaria de los peces.' },
          { id: 'b', text: 'Las botellas plásticas sirven de casita abrigada para los alevinos del río.', feedback: '🔎 La basura asfixia los fondos y envenena a la fauna acuática.' },
          { id: 'c', text: 'El plástico se deshace en dos días y alimenta a las plantas de la orilla.', feedback: '🔎 El plástico no es biodegradable y contamina por siglos los humedales.' },
          { id: 'd', text: 'Los peces del caño aprenden a fabricar herramientas con tapas de gaseosa.', feedback: '🔎 Muchos peces mueren atorados con plásticos en sus estómagos.' }
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
          { id: 'a', text: 'Echar toda la basura al río Cauca para que la corriente se la lleve rápido.', feedback: '🔎 Botar la basura al río solo traslada el daño a los pueblos de abajo.' },
          { id: 'b', text: 'Enterrar las llantas y plásticos debajo de las camas de las habitaciones.', feedback: '🔎 Enterrar plásticos en casa genera focos de humedad y enfermedades.' },
          { id: 'c', text: 'Separar reciclaje en casa, rutas fijas de recolección y limpiar el caño juntos.', isCorrect: true, feedback: '🌿 ¡Brillante! La separación en la fuente y la limpieza comunitaria salvan el caño.' },
          { id: 'd', text: 'Prohibir que los habitantes del pueblo compren comida empacada en la tienda.', feedback: '🔎 Se deben gestionar los residuos correctamente, no prohibir los alimentos.' }
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
          { id: 'a', text: 'Diciéndole que tiene toda la razón y botando más bolsas en su solar.', feedback: '🔎 El Guardián enseña con pedagogía y argumentos ambientales claros.' },
          { id: 'b', text: 'Peleando a gritos en la calle sin explicarle las razones del daño ecológico.', feedback: '🔎 El conflicto violento no resuelve los problemas comunitarios.' },
          { id: 'c', text: 'Diciéndole que los caños se limpian solos cuando sale el sol de verano.', feedback: '🔎 La basura acumulada en lotes abiertos contamina el suelo y las aguas vecinas.' },
          { id: 'd', text: 'Explicándole que la lluvia lava los basureros y lleva los plásticos al río.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! El agua y el viento no respetan linderos ni cercas de alambre.' }
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
          { id: 'a', text: 'Solo para que las calles del barrio se vean limpias cuando pasen carros.', feedback: '🔎 La razón principal es la salud pública, la vida de los peces y evitar inundaciones.' },
          { id: 'b', text: 'Porque un caño tapado enferma a los niños y causa pérdidas a toda la comunidad.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento crítico! La basura estancada es un foco grave de epidemias e inundación.' },
          { id: 'c', text: 'Porque a los mosquitos les molesta que haya agua corriendo por las cunetas.', feedback: '🔎 El agua estancada por basuras es donde nacen mosquitos transmisores del dengue.' },
          { id: 'd', text: 'No tiene importancia mantenerlo limpio, el agua sucia es normal en el pueblo.', feedback: '🔎 Vivir en un ambiente limpio y con caños sanos es un derecho de todos.' }
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
          { id: 'a', text: 'Nevadas suaves que cubrieron de blanco los techos de las casas.', feedback: '🔎 En el clima tropical caribeño no nieva; el impacto es de calor y sequía.' },
          { id: 'b', text: 'Días frescos y nublados sin viento durante todo el año escolar.', feedback: '🔎 La sabana experimenta temperaturas más extremas y sequías severas.' },
          { id: 'c', text: 'Veranos más calientes y largos, y lluvias fuertes e impredecibles.', isCorrect: true, feedback: '🌿 ¡Correcto! El texto describe cambios en el régimen de lluvias y calor.' },
          { id: 'd', text: 'El agua del río Magdalena se congeló por completo en enero.', feedback: '🔎 Los campesinos notan que el calendario tradicional de lluvias cambió.' }
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
          { id: 'a', text: 'La tala masiva de bosques y la quema de rastrojos en la región.', isCorrect: true, feedback: '🌿 ¡Exacto! Talar y quemar libera carbono y elimina la sombra natural.' },
          { id: 'b', text: 'El uso de abanicos eléctricos en las casas durante la noche.', feedback: '🔎 La causa de fondo es la pérdida de bosques y la emisión de gases globales.' },
          { id: 'c', text: 'La pesca de bagre con anzuelo en las horas de la madrugada.', feedback: '🔎 Revisa las actividades humanas que calientan el aire y secan la tierra.' },
          { id: 'd', text: 'La siembra de maíz y yuca en las pequeñas huertas caseras.', feedback: '🔎 La deforestación a gran escala y las quemas alteran el microclima.' }
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
          { id: 'a', text: 'Abundancia de pasto verde y ríos llenos de peces todo el tiempo.', feedback: '🔎 La sequía extrema seca los pozos y marchita los cultivos del campo.' },
          { id: 'b', text: 'Baja en el precio de todos los alimentos en las tiendas del barrio.', feedback: '🔎 Al perderse cosechas, la comida escasea y sube de precio.' },
          { id: 'c', text: 'Aparición de nuevos manantiales de agua dulce en los patios.', feedback: '🔎 Los campesinos sufren por la falta de agua para sus animales.' },
          { id: 'd', text: 'Pozos secos, pérdida de cosechas y muerte de ganado por sed.', isCorrect: true, feedback: '🌿 ¡Muy bien! Esos son los efectos directos que golpean a las familias campesinas.' }
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
          { id: 'a', text: 'Los árboles caídos atraen rayos y centellas que encienden el suelo.', feedback: '🔎 La tala libera gases de efecto invernadero y destruye el ciclo de humedad.' },
          { id: 'b', text: 'Los árboles guardan carbono; al quemarlos, el calor se queda en el aire.', isCorrect: true, feedback: '🌿 ¡Gran deducción! Los árboles absorben carbono y refrescan el ambiente con vapor de agua.' },
          { id: 'c', text: 'Las hojas verdes reflejan la luz de la luna hacia el espacio exterior.', feedback: '🔎 La vegetación funciona como un regulador natural de la temperatura.' },
          { id: 'd', text: 'No tiene relación, el aire caliente viene únicamente del fondo del mar.', feedback: '🔎 La deforestación en tierra firme calienta directamente el clima local.' }
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
          { id: 'a', text: 'Los campesinos no saben cuándo sembrar porque las lluvias no llegan a tiempo.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! El desorden climático hace fracasar las siembras tradicionales.' },
          { id: 'b', text: 'Las plantas de yuca deciden caminar hacia zonas con más sombra y agua.', feedback: '🔎 La siembra depende de las lluvias regulares para que las semillas broten.' },
          { id: 'c', text: 'Los agricultores prefieren esperar a que el maíz caiga del cielo solo.', feedback: '🔎 Las temporadas secas prolongadas secan las plántulas recién nacidas.' },
          { id: 'd', text: 'El cambio de clima hace que las matas de plátano den cosechas de manzana.', feedback: '🔎 Las semillas se pierden si no llueve en las semanas previstas.' }
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
          { id: 'a', text: 'Poner aires acondicionados en los potreros para enfriar a las vacas.', feedback: '🔎 Las soluciones reales son la restauración ecológica y el cuidado del agua.' },
          { id: 'b', text: 'Construir techos de zinc gigantes sobre todo el monte del municipio.', feedback: '🔎 El zinc concentra más calor; la sombra natural de los árboles es la que refresca.' },
          { id: 'c', text: 'Sembrar árboles y cuidar humedales ayuda a refrescar el aire y retener agua.', isCorrect: true, feedback: '🌿 ¡Muy bien! La vegetación y el agua amortiguan el impacto de las altas temperaturas.' },
          { id: 'd', text: 'Dejar de tomar agua para acostumbrarse a vivir con la sequía permanente.', feedback: '🔎 La adaptación comunitaria protege los pozos, reservorios y bosques nativos.' }
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
          { id: 'a', text: 'Talar los árboles viejos para que no estorben cuando sople viento fuerte.', feedback: '🔎 Los árboles viejos son los que frenan los vendavales y dan más sombra.' },
          { id: 'b', text: 'Quemar los pastos secos para que no haya peligro de que se incendien solos.', feedback: '🔎 Quemar pastos reseca la tierra y desata incendios forestales incontrolables.' },
          { id: 'c', text: 'Esperar que los países ricos vengan a regar agua con avionetas en la sabana.', feedback: '🔎 Las comunidades locales pueden organizarse y proteger sus fuentes hídricas.' },
          { id: 'd', text: 'Cosechar agua de lluvia, reforestar rondas de arroyos y no hacer quemas.', isCorrect: true, feedback: '🌿 ¡Brillante! Esas acciones preparan a la comunidad ante sequías e inundaciones.' }
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
          { id: 'a', text: 'Gastando toda el agua del pozo rápido antes de que se la tome el vecino.', feedback: '🔎 El egoísmo deja a todo el pueblo sin agua en época de sequía.' },
          { id: 'b', text: 'Organizando comités de agua, sembrando árboles nativos y cuidando aljibes.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! La unión campesina asegura el agua en veranos difíciles.' },
          { id: 'c', text: 'Mudándose todos los meses a un barrio diferente para no sentir el calor.', feedback: '🔎 Se deben mejorar las condiciones del propio territorio con sombra y cuidado.' },
          { id: 'd', text: 'Prohibiendo que los niños tomen agua durante las clases de la escuela.', feedback: '🔎 La gestión comunitaria busca cuidar y repartir el agua con equidad.' }
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
          { id: 'a', text: 'Porque el agua dulce y la sombra vegetal son el sustento de la vida diaria.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento crítico! Adaptarse al clima protege la salud, los cultivos y el futuro.' },
          { id: 'b', text: 'Solo para que los abuelos no se quejen de que hace calor al mediodía.', feedback: '🔎 La supervivencia de las fincas y de la gente depende de cómo cuidemos los recursos.' },
          { id: 'c', text: 'Porque a los animales silvestres les molesta que las nubes tapen el sol.', feedback: '🔎 Los humedales sanos actúan como esponjas frente a crecientes y sequías.' },
          { id: 'd', text: 'No hace falta adaptarse, el clima siempre vuelve a ser el mismo de antes.', feedback: '🔎 El calentamiento global exige cambios urgentes en la forma de cuidar el bosque.' }
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
          { id: 'a', text: 'Un manto verde y denso de plantas flotantes cubriendo toda la ciénaga.', isCorrect: true, feedback: '🌿 ¡Correcto! El texto describe la alfombra espesa de tarulla o jacinto.' },
          { id: 'b', text: 'Un bosque de pinos gigantes que creció en medio del agua salada.', feedback: '🔎 La especie observada era una planta acuática flotante en agua dulce.' },
          { id: 'c', text: 'Una manada de hipopótamos africanos caminando por la plaza central.', feedback: '🔎 El caso trata sobre la proliferación de vegetación sobre el agua.' },
          { id: 'd', text: 'Una mancha de petróleo negro cubriendo las orillas del puerto.', feedback: '🔎 Se trataba de una planta flotante que no dejaba pasar las canoas.' }
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
          { id: 'a', text: 'Un alga marina venenosa traída en las hélices de un submarino.', feedback: '🔎 En las ciénagas caribeñas prolifera la tarulla en aguas con aguas servidas.' },
          { id: 'b', text: 'Matorrales de espinos secos que flotaban como balsas de madera.', feedback: '🔎 La planta acuática con flores lilas es conocida como tarulla o buchón.' },
          { id: 'c', text: 'Hojas secas de eucalipto caídas desde las copas de los árboles.', feedback: '🔎 Se trata de una especie acuática de rápida multiplicación en humedales.' },
          { id: 'd', text: 'La tarulla o jacinto de agua que tapaba por completo el espejo de agua.', isCorrect: true, feedback: '🌿 ¡Exacto! La tarulla se multiplicó en exceso por los nutrientes del agua.' }
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
          { id: 'a', text: 'Los peces aprendieron a caminar sobre las hojas verdes de la planta.', feedback: '🔎 La sombra total en el fondo impide que nazcan algas y falte el aire a los peces.' },
          { id: 'b', text: 'No podían navegar en canoa y los peces empezaron a asfixiarse abajo.', isCorrect: true, feedback: '🌿 ¡Muy bien! El manto tapa la luz, agota el oxígeno y tranca el paso de canoas.' },
          { id: 'c', text: 'Las canoas flotaban más rápido y navegaban con mayor facilidad.', feedback: '🔎 La masa vegetal enreda los canaletes y motores impidiendo la pesca.' },
          { id: 'd', text: 'El agua se volvió de sabor dulce como jugo de frutas maduras.', feedback: '🔎 Al morir la planta, se pudre en el fondo y genera mal olor y asfixia acuática.' }
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
          { id: 'a', text: 'Hace que el agua de la ciénaga se vuelva de color rosado fosforescente.', feedback: '🔎 El impacto biológico es la pérdida de oxígeno disuelto en el agua.' },
          { id: 'b', text: 'Convierte el agua dulce de la ciénaga en agua con hielo del polo norte.', feedback: '🔎 La descomposición de hojas consume el oxígeno que necesitan los bocachicos.' },
          { id: 'c', text: 'Tapa la luz del sol para las algas del fondo y agota el oxígeno del agua.', isCorrect: true, feedback: '🌿 ¡Gran deducción! Sin luz no hay fotosíntesis bajo el agua y los peces mueren.' },
          { id: 'd', text: 'No cambia nada, el agua sigue teniendo el mismo aire con o sin plantas.', feedback: '🔎 El manto espeso de hojas aísla el agua del contacto con el aire y la luz solar.' }
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
          { id: 'a', text: 'Porque las plantas se ponen tristes si les dicen palabras desagradables.', feedback: '🔎 Invasora significa introducida de fuera que daña a las especies locales.' },
          { id: 'b', text: 'Porque todas las plantas de la tierra son invasoras por nacimiento.', feedback: '🔎 Cada especie tiene su lugar de origen y funciones en su ecosistema nativo.' },
          { id: 'c', text: 'Porque en la naturaleza no existe ninguna especie que cause problemas.', feedback: '🔎 Un desequilibrio humano puede hacer que una planta nativa prolifere en exceso.' },
          { id: 'd', text: 'Porque una especie nativa puede crecer mucho si hay aguas sucias con abono.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! El exceso de aguas negras abona la planta sin ser de otro país.' }
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
          { id: 'a', text: 'Las especies de afuera siempre construyen casitas de paja para los peces.', feedback: '🔎 Al no tener control biológico en el nuevo hábitat, se desborda su población.' },
          { id: 'b', text: 'Al no tener depredadores que la coman, se riega y quita espacio a las nativas.', isCorrect: true, feedback: '🌿 ¡Muy bien! Sin control natural, la especie foránea invade y desplaza a las locales.' },
          { id: 'c', text: 'Una planta traída de otro país nunca sobrevive más de una sola tarde.', feedback: '🔎 Muchas especies introducidas prosperan con fuerza y acaban con las locales.' },
          { id: 'd', text: 'Todas las plantas del planeta comen y crecen exactamente a la misma velocidad.', feedback: '🔎 Algunas especies invasoras crecen más rápido que la vegetación del lugar.' }
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
          { id: 'a', text: 'Saber si es nativa o de afuera, de dónde vienen las aguas sucias y el daño a la fauna.', isCorrect: true, feedback: '🌿 ¡Brillante! Comprender la causa evita cometer errores costosos en el humedal.' },
          { id: 'b', text: 'Saber el precio de las atarrayas en la tienda principal del centro del pueblo.', feedback: '🔎 Se necesita información ecológica sobre el origen de la planta y los vertimientos.' },
          { id: 'c', text: 'Preguntar si a los bagres les gusta el perfume de las flores lilas del agua.', feedback: '🔎 Se debe investigar qué aguas residuales están fertilizando la ciénaga.' },
          { id: 'd', text: 'Echar galones de veneno a ciegas sin mirar qué otros animales viven allí.', feedback: '🔎 El veneno químico contamina el agua potable y mata a los peces nativos.' }
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
          { id: 'a', text: 'Que las plantas flotantes se paren y salgan a correr detrás de la gente.', feedback: '🔎 El riesgo es envenenar el agua o gastar dinero sin curar la causa real.' },
          { id: 'b', text: 'Que el agua de la ciénaga se transforme en gaseosa dulce de botella.', feedback: '🔎 Una mala intervención ambiental suele empeorar la crisis ecológica del agua.' },
          { id: 'c', text: 'Podríamos echar químicos que maten peces o quitar la planta sin frenar el desagüe.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! Si no se corta el agua sucia, la planta volverá a crecer en días.' },
          { id: 'd', text: 'No hay peligro, cualquier cosa que se haga a la carrera siempre sale bien.', feedback: '🔎 Actuar sin entender el ecosistema causa daños irreparables a la pesca.' }
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
          { id: 'a', text: 'Para tener una disculpa y quedarse sentado sin hacer nada por la ciénaga.', feedback: '🔎 Estudiar el problema permite planear acciones comunitarias efectivas.' },
          { id: 'b', text: 'Porque las leyes del pueblo multan a quienes lean libros de biología marina.', feedback: '🔎 La ciencia y el saber popular juntos dan las mejores soluciones ambientales.' },
          { id: 'c', text: 'Ese principio es falso, lo único que sirve es usar máquinas pesadas sin pensar.', feedback: '🔎 La fuerza bruta sin conocimiento daña los fondos y las orillas del humedal.' },
          { id: 'd', text: 'Porque la naturaleza es una red conectada y solo entendiendo la causa se cura el mal.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento crítico! El verdadero Guardián diagnostica antes de intervenir.' }
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
          { id: 'a', text: 'Únicamente el precio del pescado fresco en la plaza de mercado del pueblo.', feedback: '🔎 La misión recoge los 14 desafíos ambientales aprendidos en el viaje.' },
          { id: 'b', text: 'Que se les habían descargado las baterías de las linternas en el monte.', feedback: '🔎 Los Guardianes recuerdan los impactos sobre la fauna, el agua y los bosques.' },
          { id: 'c', text: 'El atraso en los horarios de salida de los buses hacia otras ciudades.', feedback: '🔎 La misión integra los saberes de conservación de todo el recorrido escolar.' },
          { id: 'd', text: 'Daños a iguanas, icoteas, jaguares, aves, ríos, suelos, basuras y clima.', isCorrect: true, feedback: '🌿 ¡Correcto! La misión final resume todas las problemáticas del territorio.' }
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
          { id: 'a', text: 'Animales que tenían que ponerse zapatos para caminar por el pueblo.', feedback: '🔎 Las situaciones reales fueron crueldad, cautiverio y pérdida de hábitat.' },
          { id: 'b', text: 'Huevos extraídos con heridas, cacería, monos atados, loros en jaulas y abandono.', isCorrect: true, feedback: '🌿 ¡Exacto! Esas fueron las presiones y maltratos a la fauna identificados.' },
          { id: 'c', text: 'Peces del río Magdalena que no sabían nadar sin flotadores plásticos.', feedback: '🔎 El texto recapitula el maltrato animal y el tráfico de especies silvestres.' },
          { id: 'd', text: 'Ninguna situación de maltrato, todos los animales vivían en paz y libertad.', feedback: '🔎 Se evidenciaron problemas graves que requieren el compromiso del Guardián.' }
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
          { id: 'a', text: 'Únicamente los cables de energía eléctrica y las antenas de teléfonos.', feedback: '🔎 La visión integral abarca ecosistemas, comunidades y recursos naturales.' },
          { id: 'b', text: 'Solo las monedas de plata y los billetes que se gastan en las fiestas.', feedback: '🔎 El territorio es una red viva de agua, selva, animales y habitantes.' },
          { id: 'c', text: 'Agua, suelo, bosques, fauna, cadenas de alimento, pueblos y decisiones humanas.', isCorrect: true, feedback: '🌿 ¡Muy bien! Todos los componentes naturales y sociales están entrelazados.' },
          { id: 'd', text: 'Las estrellas lejanas del cielo que no tocan la tierra de la sabana.', feedback: '🔎 Se trata de las relaciones directas entre los seres vivos y su entorno ribereño.' }
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
          { id: 'a', text: 'Porque talar un monte daña el suelo, ensucia el caño y enferma a la gente vecina.', isCorrect: true, feedback: '🌿 ¡Gran deducción! Una sola acción destructiva desata una cadena de impactos en el ecosistema.' },
          { id: 'b', text: 'Porque las ciénagas y los árboles se mandan mensajes por teléfono celular.', feedback: '🔎 La conexión es física, química y biológica a través de los ciclos naturales.' },
          { id: 'c', text: 'Las acciones de las personas nunca tocan más de una sola cosa a la vez.', feedback: '🔎 Cualquier cambio en el agua o el bosque repercute en la salud y la economía.' },
          { id: 'd', text: 'Porque los animales imitan todo lo que hacen los campesinos en sus fincas.', feedback: '🔎 La alteración de un componente desequilibra a toda la red ecológica regional.' }
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
          { id: 'a', text: 'Porque la basura y el veneno viajan en bicicleta por la orilla del camino.', feedback: '🔎 La corriente de los ríos transporta sedimentos y tóxicos cuenca abajo.' },
          { id: 'b', text: 'Porque la tierra gira con tanta fuerza que riega los charcos de agua sucia.', feedback: '🔎 Los ecosistemas están interconectados por cuencas hídricas compartidas.' },
          { id: 'c', text: 'Porque el agua viaja, el viento sopla y los animales caminan entre regiones.', isCorrect: true, feedback: '🌿 ¡Excelente deducción! El río y la atmósfera conectan los problemas entre municipios.' },
          { id: 'd', text: 'Los problemas ambientales nunca viajan, siempre se quedan en la misma casa.', feedback: '🔎 Lo que se arroja en la cabecera del río afecta a los pescadores de la desembocadura.' }
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
          { id: 'a', text: 'Que a los peces y aves les gusta nadar en lugares con bastante basura plástica.', feedback: '🔎 La contaminación del hábitat colapsa la salud y la reproducción de la fauna.' },
          { id: 'b', text: 'Que echar veneno a los ríos ayuda a que nazcan especies más resistentes.', feedback: '🔎 Los contaminantes debilitan y extinguen a las poblaciones naturales.' },
          { id: 'c', text: 'Demuestra que los animales del monte no necesitan comida ni agua para vivir.', feedback: '🔎 Cada especie depende directamente de la pureza y equilibrio de su hábitat.' },
          { id: 'd', text: 'Que los animales solo viven bien si el bosque está sano y las aguas están limpias.', isCorrect: true, feedback: '🌿 ¡Muy bien! Sin hábitat limpio y conectado, las especies desaparecen con rapidez.' }
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
          { id: 'a', text: 'Gastar toda la plata del pueblo en verbenas y olvidar las fuentes de agua.', feedback: '🔎 La inversión comunitaria debe proteger la vida y los recursos naturales vitales.' },
          { id: 'b', text: 'Cuidar rondas de caños, frenar la tala y el mercurio, y manejar bien las basuras.', isCorrect: true, feedback: '🌿 ¡Brillante! Esas prioridades integran la salud del agua, los bosques y la gente.' },
          { id: 'c', text: 'Esperar sentados a que vengan personas de otros países a barrer las calles.', feedback: '🔎 El cuidado del territorio nace del compromiso y orgullo de sus propios habitantes.' },
          { id: 'd', text: 'Tumbar todo el monte y vender los animales para tener plata de inmediato.', feedback: '🔎 Destruir la naturaleza por dinero rápido condena a las familias a la pobreza futura.' }
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
          { id: 'a', text: 'Creando comités para vigilar el agua, sembrando limpio y no comprando fauna.', isCorrect: true, feedback: '🌿 ¡Decisión sabia! La participación activa y las buenas prácticas salvan el territorio.' },
          { id: 'b', text: 'Comprando más jaulas y cadenas para amarrar a los animales de la selva.', feedback: '🔎 El Guardián promueve la libertad de la fauna y el respeto a sus derechos.' },
          { id: 'c', text: 'Botando los desperdicios en el caño más hondo en medio de la oscuridad.', feedback: '🔎 Ocultar basuras contamina el agua que beben los animales y las familias aguas abajo.' },
          { id: 'd', text: 'Olvidando todo lo aprendido en la escuela para no tener que preocuparse.', feedback: '🔎 El conocimiento ambiental es una herramienta poderosa para transformar el entorno.' }
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
          { id: 'a', text: 'Tener una medalla dibujada en la pantalla de un computador y nada más.', feedback: '🔎 El título de Guardián es un compromiso real con la defensa de la naturaleza.' },
          { id: 'b', text: 'Creer que ya no necesito aprender nada más sobre los árboles ni los ríos.', feedback: '🔎 El aprendizaje ambiental continúa todos los días en la casa, el río y la vereda.' },
          { id: 'c', text: 'Aprender a leer el territorio con ojos críticos para cuidar la vida y el agua.', isCorrect: true, feedback: '🌿 ¡Gran pensamiento crítico! Ser Guardián es un compromiso de vida con el territorio.' },
          { id: 'd', text: 'Sentirse con permiso para mandar a los vecinos sin hacer ningún esfuerzo.', feedback: '🔎 El verdadero Guardián enseña con su propio ejemplo y cuidado diario del entorno.' }
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
