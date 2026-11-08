# Propuesta de globos de diálogo (misiones 2 a 15)

**Estado:** ✅ aprobado el 2026-11-07. Ya están en los archivos de prompts y en la app. Su posición exacta se define cuando exista la imagen de cada misión.

## Reglas que cumplen todos los globos

1. **Máximo 3 por misión:** al llegar o descubrir algo, en un momento de emoción y al cerrar.
2. **Solo reacciones, preguntas o frases que repiten lo que ya dice la narración.** Nunca explican causas ni consecuencias, porque esas son las respuestas de las preguntas inferenciales y críticas.
3. **Quien habla aparece en el dibujo** de esa viñeta, según su prompt.
4. **La posición del globo se decide cuando exista la imagen,** para no tapar caras ni lo importante de la escena. Se escribe así en el archivo de prompts: `**Globo:** en 40% 12%, cola hacia 53% 23%`. El primer par de números es el centro del globo y el segundo es la punta de la cola, junto a la cabeza de quien habla. Los porcentajes se miden sobre el ancho y el alto de la imagen.

> ✅ = ya estaba en los prompts. 🆕 = nuevo.

---

| Misión | Viñeta | Quién | Globo | Momento |
|---|---|---|---|---|
| **2** Una captura que parecía pequeña | 1: En canoa por el caño | Sara | 🆕 "Qué silencio hay aquí..." | Llegada |
| | 3: Las hembras adultas | Sara | 🆕 "Tranquila, no te vamos a hacer daño." | Emoción |
| **3** Cuando cada animal cuenta | 2: Huellas | Tomás | 🆕 "¡Miren! Unas grandes... y otras chiquitas." | Descubrimiento |
| | 3: Señales de cacería | Sara | 🆕 "¿Quién habrá puesto esto aquí?" | Emoción |
| | 6: Dibujar las huellas | Luna | 🆕 "Así la comunidad también podrá verlas." | Cierre |
| **4** El jaguar que salió del bosque | 3: Escuchar a todos | Ganadero | 🆕 "Ya perdimos varios terneros..." | Emoción |
| | 5: Menos presas | Sara | 🆕 "No veo ni un solo rastro..." | Descubrimiento |
| | 7: Pensar en todos | Tomás | 🆕 "Tiene que haber una forma de cuidarlos a todos." | Cierre |
| **5** Una familia, un loro y una pregunta difícil | 1: Jaulas bajo el alero | Tomás | 🆕 "¡Cuánto ruido hacen!" | Llegada |
| | 4: La pregunta | Luna | ✅ "¿Y de dónde llegaron?" | Emoción |
| | 7: Una pregunta difícil | Sara | 🆕 "Me quedé pensando en esas jaulas..." | Cierre |
| **6** Una jaula no es un bosque | 3: "Lo criamos desde pequeño" | La señora | 🆕 "Lo criamos desde chiquito." | Emoción |
| | 4: Aves en jaulas | Emanuel | 🆕 "¿Cuántos años llevarán ahí?" | Descubrimiento |
| **7** Los que nadie quería ver | 1: Algo se mueve entre las bolsas | Tomás | 🆕 "¿Vieron eso? Algo se movió." | Llegada |
| | 3: El perro flaco | Sara | 🆕 "Tranquilo, amigo. No te vamos a hacer daño." | Emoción |
| | 4: Abandonado por la familia | La vecina | 🆕 "Ese perrito vivía en esa casa." | Descubrimiento |
| **8** Donde antes había árboles | 1: La fotografía antigua | Tomás | 🆕 "Miren cómo era este valle..." | Llegada |
| | 2: Antes y ahora | Luna | 🆕 "¡No parece el mismo lugar!" | Emoción |
| **9** Un territorio que cambió | 1: El mapa sobre la mesa | Tomás | 🆕 "Quedan muy pocas manchas verdes." | Descubrimiento |
| | 6: Marcar el mapa | Luna | 🆕 "Marquemos cada parche, uno por uno." | Cierre |
| **10** El veneno que viajó por el río | 1: El pescador y las dragas | Sara | 🆕 "¿Oyen ese motor a lo lejos?" | Llegada |
| | 7: La comida de todos los días | El pescador | 🆕 "En mi casa comemos pescado del río todos los días." | Cierre |
| **11** La huella de la minería | 1: Grava donde había bosque | Emanuel | 🆕 "¿Aquí había un bosque?" | Llegada |
| | 3: Tierra agrietada, río marrón | Sara | 🆕 "La tierra está dura como una piedra." | Descubrimiento |
| **12** El municipio que estaba enfermando | 1: Residuos por todas partes | Tomás | 🆕 "Hay basura por todas partes." | Llegada |
| | 6: El humo de la quema | Luna | 🆕 "¡Qué humo tan fuerte!" | Emoción |
| **13** Un clima que está cambiando | 2: Lo que contaban las personas | Un vecino | 🆕 "¡Ya uno no sabe ni cuándo va a llover!" | Descubrimiento |
| | 7: Leer el cielo | Sara | 🆕 "Miren esas nubes allá..." | Cierre |
| **14** La planta que cubrió el agua | 1: Un potrero sobre el agua | Sara | 🆕 "¿Y dónde está el agua?" | Llegada |
| | 3: El pescador que no puede pasar | El pescador | 🆕 "Ya ni puedo pasar con mi canoa." | Emoción |
| | 6: La primera herramienta | Luna | ✅ "Primero preguntar, después actuar." (era Emanuel; en la imagen habla Luna) | Cierre |
| **15** El equilibrio perdido | 1: Reunir las pistas | Luna | 🆕 "¡Miren todo lo que hemos recogido!" | Llegada |
| | 5: Ningún problema está aislado | Tomás | 🆕 "Todo está unido..." | Descubrimiento |

**Total:** 33 globos, 31 nuevos y 2 que ya estaban. Entre 2 y 3 por misión.

## Globos que descarté (y por qué)

- **Misión 2:** "Sin hembras no van a nacer más icoteas". Es la respuesta de una pregunta inferencial.
- **Misión 3:** "Si siguen cazando, se acaban". Es la respuesta de "¿Por qué la cacería repetida puede reducir una población?".
- **Misión 4:** "El jaguar viene porque ya no tiene qué comer en el monte". Es la respuesta de una pregunta inferencial.
- **Misión 6:** "Ni siquiera pueden abrir las alas". Está demasiado cerca de la respuesta "necesita trepar, volar y estar con su manada".
- **Misión 10:** "El mercurio pasa de pez en pez hasta nosotros". Es la respuesta inferencial de la cadena alimentaria.
- **Misión 13:** "El calor es por la tala y la quema". Es la respuesta de "¿Por qué la deforestación se relaciona con el cambio climático?".
