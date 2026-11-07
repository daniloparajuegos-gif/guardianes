# Historietas de Guardianes del Bosque: guía de estilo y personajes

Esta guía va **antes** de los prompts de cada misión. Cada misión tiene su archivo con:

- **Narración:** el texto de la lectura repartido entre las viñetas, **palabra por palabra**. Así la historieta cuenta exactamente lo mismo que la lectura y las preguntas siguen sirviendo.
- **Diálogo** (opcional): frases cortas que solo dicen con otras palabras lo que ya está en la lectura. No agregan hechos.
- **Prompt:** la descripción de la imagen para la IA generadora (ChatGPT, Gemini, Leonardo, Ideogram, Midjourney, etc.).

> **Importante:** las imágenes se generan **sin texto**. La narración y los diálogos se ponen después en la app, encima o debajo de cada imagen. Las IA de imágenes escriben mal el español, y así puedes corregir el texto sin volver a generar la imagen.

---

## 1. Bloque de estilo (pégalo al inicio de CADA prompt)

```
Ilustración de cómic / novela gráfica latinoamericana para estudiantes de 12 a 13 años. Línea de tinta limpia y segura, colores planos con sombreado suave tipo cel-shading, paleta cálida del Caribe colombiano (verdes de monte, ocres de tierra seca, azules y verdes de ciénaga, luz dorada tropical). Personajes expresivos con proporciones semirrealistas (no chibi, no anime exagerado). Fondos detallados y fieles al paisaje real de Magangué y La Mojana (Bolívar, Colombia): ciénagas, caños, sabanas inundables, bosque seco tropical, casas con techo de zinc. Formato horizontal 4:3. SIN texto, SIN letras, SIN globos de diálogo, SIN onomatopeyas, SIN marcas de agua. Contenido apto para escolares: sin sangre, sin heridas explícitas, sin violencia gráfica.
```

**Versión en inglés** (rinde mejor en Midjourney y Leonardo):

```
Latin American comic book / graphic novel illustration for 12–13 year old students. Clean confident ink lines, flat colors with soft cel-shading, warm Colombian Caribbean palette (forest greens, dry-earth ochres, swamp blues and greens, golden tropical light). Expressive characters with semi-realistic proportions (not chibi, not exaggerated anime). Detailed backgrounds faithful to the real landscapes of Magangué and La Mojana (Bolívar, Colombia): wetlands, creeks, flooded savannas, tropical dry forest, zinc-roofed houses. Horizontal 4:3 format. NO text, NO letters, NO speech bubbles, NO sound effects, NO watermarks. School-appropriate: no blood, no explicit wounds, no graphic violence.
```

---

## 2. Los cuatro Guardianes (personajes fijos)

Los cuatro llevan el **uniforme de Guardián**: chaleco verde oliva con bolsillos y un parche bordado de una **hoja de ceiba** dorada en el pecho.

| Personaje | Descripción completa (para la hoja de personaje) | Descripción corta (va dentro de cada prompt) |
|---|---|---|
| **Sara** | Niña afrocolombiana de 13 años, piel oscura, cabello en trenzas cortas con cuentas amarillas, ojos grandes y expresivos, sonrisa amplia. Camiseta blanca, pantalón caqui a la rodilla, botas de caucho negras. Binoculares al cuello. Es la observadora del grupo. | *Sara (niña afrocolombiana de 13 años, trenzas cortas con cuentas amarillas, binoculares al cuello)* |
| **Emanuel** | Niño de 12 años de ascendencia zenú, piel trigueña, cabello negro liso y corto, sombrero vueltiao pequeño. Camiseta azul claro, jean, sandalias de cuero. Cámara fotográfica compacta colgada. Es tranquilo y respetuoso con los mayores. | *Emanuel (niño zenú de 12 años, piel trigueña, sombrero vueltiao, cámara compacta)* |
| **Luna** | Niña mestiza de 12 años, piel morena clara, cabello negro ondulado en cola alta con cinta amarilla, gafas redondas de marco rojo. Camiseta naranja, pantalón de tela verde. Siempre lleva una libreta de tapa verde y un lápiz. Es la que pregunta y anota. | *Luna (niña de 12 años, cabello ondulado negro con cinta amarilla, gafas redondas rojas, libreta verde)* |
| **Tomás** | Niño mestizo de 13 años, el más alto, piel clara bronceada, cabello castaño despeinado, pecas, gorra beige. Camiseta gris, bermuda azul, tenis. Mochila con un mapa enrollado y una lupa. Es el que mira el mapa y el paisaje. | *Tomás (niño de 13 años, alto, cabello castaño despeinado, pecas, gorra beige, mochila)* |

### Prompt para la hoja de personajes (genérala PRIMERO)

Esta imagen sirve de referencia para que la IA dibuje siempre igual a los Guardianes. En ChatGPT o Gemini, súbela junto a cada prompt y escribe "usa a estos personajes de la imagen de referencia". En Midjourney, usa `--cref` con su enlace.

```
[BLOQUE DE ESTILO] Hoja de personajes (character sheet) sobre fondo blanco liso: cuatro niños colombianos de pie, de cuerpo entero, uno al lado del otro, vista frontal, cada uno con su expresión característica. Los cuatro llevan chaleco verde oliva con bolsillos y un parche bordado de hoja de ceiba dorada en el pecho. 1) Sara: niña afrocolombiana de 13 años, piel oscura, trenzas cortas con cuentas amarillas, camiseta blanca, pantalón caqui a la rodilla, botas de caucho negras, binoculares al cuello, sonrisa amplia. 2) Emanuel: niño zenú de 12 años, piel trigueña, cabello negro liso corto, sombrero vueltiao pequeño, camiseta azul claro, jean, sandalias de cuero, cámara compacta colgada, expresión serena. 3) Luna: niña mestiza de 12 años, piel morena clara, cabello negro ondulado en cola alta con cinta amarilla, gafas redondas de marco rojo, camiseta naranja, pantalón verde, libreta de tapa verde y lápiz en la mano, expresión curiosa. 4) Tomás: niño mestizo de 13 años, el más alto, piel clara bronceada, cabello castaño despeinado, pecas, gorra beige, camiseta gris, bermuda azul, tenis, mochila con mapa enrollado, expresión decidida.
```

---

## 3. Recomendaciones para generar

1. **Primero la hoja de personajes.** Úsala como referencia en todas las viñetas.
2. **Mantén la misma IA y la misma conversación** para una misión completa. Así se conservan la luz y el lugar entre viñetas.
3. **Revisa que la imagen no tenga texto.** Si aparecen letras, agrega: "sin ningún texto ni letras en la imagen".
4. **Revisa la fidelidad.** Si la viñeta muestra algo que la lectura no dice (otro animal, otro lugar), regenérala. La historieta no debe mostrar respuestas falsas como si fueran ciertas.
5. **Nombra los archivos así:** `historietas/m{misión}/p{viñeta}.png` (por ejemplo `historietas/m2/p3.png`). Con esos nombres se pueden conectar fácilmente a la app después.
6. **Temas sensibles (misiones 1, 6 y 7):** la lectura habla de maltrato animal. Los prompts lo muestran **de forma indirecta**: herramientas, siluetas, caras de preocupación. Nunca la herida.
