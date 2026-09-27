import { CollectibleItem, ItemRarity } from '../types';

export const COLLECTIBLES: CollectibleItem[] = [
  // ZONA 1 — BOSQUE Y SABANA (items 1-6)
  { id: 1, name: 'Semilla de Ceiba', rarity: 'common', zone: 'Bosque y Sabana', family: 'Vida vegetal', description: 'Germen del árbol sagrado de la sabana, con el poder de alzar un gigante que cobije a todo el bosque.', image: '/assets/items/i1.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 2, name: 'Semilla de Iguá', rarity: 'common', zone: 'Bosque y Sabana', family: 'Vida vegetal', description: 'Guarda la sombra fresca del dosel caribeño y la promesa de un bosque fértil y vivo.', image: '/assets/items/i2.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 3, name: 'Hoja de Uvero', rarity: 'common', zone: 'Bosque y Sabana', family: 'Vida vegetal', description: 'Hoja curtida por el sol y la brisa ribereña, refugio natural en los bordes del agua.', image: '/assets/items/i3.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 4, name: 'Rama de Guarapero', rarity: 'common', zone: 'Bosque y Sabana', family: 'Vida vegetal', description: 'Tallo flexible que brota en los playones, testigo de las crecientes y sequías del río.', image: '/assets/items/i4.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 5, name: 'Pluma de Loro', rarity: 'common', zone: 'Bosque y Sabana', family: 'Fauna', description: 'Destello esmeralda y oro que surcó el aire, eco de los cantos que despiertan la selva.', image: '/assets/items/i5.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 6, name: 'Rastro de Chigüiro', rarity: 'common', zone: 'Bosque y Sabana', family: 'Fauna', description: 'Huella fresca en el lodo ribereño, señal de los guardianes silenciosos de la sabana inundable.', image: '/assets/items/i6.png', sourceMissionPool: [1, 5, 6, 8] },
  // ZONA 2 — CIÉNAGAS Y CAÑOS (items 7-12)
  { id: 7, name: 'Pluma de Garza', rarity: 'common', zone: 'Ciénagas y Caños', family: 'Fauna', description: 'Blancura recogida entre juncales, testimonio de paciencia y vuelo sereno sobre el humedal.', image: '/assets/items/i7.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 8, name: 'Bocachico del Caño', rarity: 'common', zone: 'Ciénagas y Caños', family: 'Fauna acuática', description: 'Viajero de aguas mansas que nada contracorriente, sembrando vida y sustento en cada caño.', image: '/assets/items/i8.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 9, name: 'Piedra de Ciénaga', rarity: 'common', zone: 'Ciénagas y Caños', family: 'Memoria del agua', description: 'Roca pulida por siglos de limo y calma lacustre, tallada por el suave latir del humedal.', image: '/assets/items/i9.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 10, name: 'Icotea de la Ciénaga', rarity: 'rare', zone: 'Ciénagas y Caños', family: 'Fauna', description: 'Custodia milenaria de los espejos de agua, cuya coraza resiste los veranos más implacables.', image: '/assets/items/i10.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 11, name: 'Huella del Jaguar', rarity: 'rare', zone: 'Ciénagas y Caños', family: 'Fauna', description: 'Pisada imponente en el fango, presencia del gran señor que custodia el sigilo del bosque.', image: '/assets/items/i11.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 12, name: 'Nido de Pisingo', rarity: 'rare', zone: 'Ciénagas y Caños', family: 'Fauna', description: 'Cuna de juncos y plumón entre totorales, donde brota el ciclo alado de la ciénaga.', image: '/assets/items/i12.png', sourceMissionPool: [2, 3, 4, 14] },
  // ZONA 3 — RÍOS Y MINERÍA (items 13-18)
  { id: 13, name: 'Piedra del Río', rarity: 'common', zone: 'Ríos y Minería', family: 'Memoria del agua', description: 'Canto rodado esculpido por el ímpetu del Magdalena, suave al tacto como la corriente misma.', image: '/assets/items/i13.png', sourceMissionPool: [7, 10, 11] },
  { id: 14, name: 'Miniatura de Canoa', rarity: 'common', zone: 'Ríos y Minería', family: 'Vida ribereña', description: 'Talla en madera viva, tributo a las embarcaciones que unen orillas y pueblos del gran río.', image: '/assets/items/i14.png', sourceMissionPool: [7, 10, 11] },
  { id: 15, name: 'Canalete del Río', rarity: 'common', zone: 'Ríos y Minería', family: 'Vida ribereña', description: 'Brazo de madera del pescador, templado para vencer remolinos y abrazar aguas profundas.', image: '/assets/items/i15.png', sourceMissionPool: [7, 10, 11] },
  { id: 16, name: 'Alevino de Bocachico', rarity: 'rare', zone: 'Ríos y Minería', family: 'Fauna acuática', description: 'Destello de plata viva, promesa de abundancia para los caños y la pesca artesanal.', image: '/assets/items/i16.png', sourceMissionPool: [7, 10, 11] },
  { id: 17, name: 'Atarraya de la Ciénaga', rarity: 'rare', zone: 'Ríos y Minería', family: 'Vida ribereña', description: 'Malla tejida nudo a nudo; florece en el aire al caer y abraza los frutos del agua.', image: '/assets/items/i17.png', sourceMissionPool: [7, 10, 11] },
  { id: 18, name: 'Brújula de los Tres Ríos', rarity: 'epic', zone: 'Ríos y Minería', family: 'Exploración', description: 'Indica el punto sagrado donde el Cauca, el San Jorge y el Magdalena se abrazan en La Mojana.', image: '/assets/items/i18.png', sourceMissionPool: [7, 10, 11] },
  // ZONA 4 — COMUNIDAD Y TERRITORIO (items 19-24)
  { id: 19, name: 'Totuma Ribereña', rarity: 'common', zone: 'Comunidad y Territorio', family: 'Vida comunitaria', description: 'Vasija natural nacida del totumo, compañera fiel en las faenas y cocinas de la ribera.', image: '/assets/items/i19.png', sourceMissionPool: [9, 12, 13] },
  { id: 20, name: 'Miniatura de Hamaca', rarity: 'common', zone: 'Comunidad y Territorio', family: 'Vida comunitaria', description: 'Nido tejido de sosiego, arrullado por la brisa fresca que sopla sobre el río al caer la tarde.', image: '/assets/items/i20.png', sourceMissionPool: [9, 12, 13] },
  { id: 21, name: 'Trenza de Palma Sará', rarity: 'common', zone: 'Comunidad y Territorio', family: 'Artesanía', description: 'Fibras entrelazadas con paciencia campesina, herencia viva de las manos de la sabana.', image: '/assets/items/i21.png', sourceMissionPool: [9, 12, 13] },
  { id: 22, name: 'Cataure de Palma', rarity: 'common', zone: 'Comunidad y Territorio', family: 'Artesanía', description: 'Canasto tejido liviano y resistente, guardián de cosechas y frutos de la tierra.', image: '/assets/items/i22.png', sourceMissionPool: [9, 12, 13] },
  { id: 23, name: 'Sombrero de Palma Sará', rarity: 'rare', zone: 'Comunidad y Territorio', family: 'Artesanía', description: 'Corona de fibra que cobija del sol implacable, símbolo de dignidad y orgullo campesino.', image: '/assets/items/i23.png', sourceMissionPool: [9, 12, 13] },
  { id: 24, name: 'Casa Palafítica', rarity: 'rare', zone: 'Comunidad y Territorio', family: 'Vida ribereña', description: 'Hogar erigido sobre maderas firmes en el agua, muestra de un pueblo anfibio y sabio.', image: '/assets/items/i24.png', sourceMissionPool: [9, 12, 13] },
  // ZONA 5 — TERRITORIO INTEGRADO (items 25-30)
  { id: 25, name: 'Fragmento de Camellón Zenú', rarity: 'rare', zone: 'Territorio Integrado', family: 'Memoria del territorio', description: 'Vestigio de canales ancestrales, obra maestra hidráulica que domó las aguas sin dañarlas.', image: '/assets/items/i25.png', sourceMissionPool: [15] },
  { id: 26, name: 'Mapa Ancestral del Agua', rarity: 'epic', zone: 'Territorio Integrado', family: 'Memoria del territorio', description: 'Cartografía mística de caños y ciénagas que revela los latidos fluviales de la región.', image: '/assets/items/i26.png', sourceMissionPool: [15] },
  { id: 27, name: 'Corazón del Humedal', rarity: 'epic', zone: 'Territorio Integrado', family: 'Territorio', description: 'Esencia cristalina donde el agua dulce, el manglar y la fauna respiran en armonía.', image: '/assets/items/i27.png', sourceMissionPool: [15] },
  { id: 28, name: 'Relicario de la Ceiba', rarity: 'epic', zone: 'Territorio Integrado', family: 'Territorio', description: 'Guarda sagrada de la memoria vegetal, puente espiritual entre las raíces de la tierra y el cielo.', image: '/assets/items/i28.png', sourceMissionPool: [15] },
  { id: 29, name: 'Orbe de La Mojana', rarity: 'legendary', zone: 'Territorio Integrado', family: 'Artefacto legendario', description: 'Esfera mística donde convergen el agua, el bosque y la brisa, palpitando con fuerza telúrica.', image: '/assets/items/i29.png', sourceMissionPool: [15] },
  { id: 30, name: 'Corazón del Gran Territorio', rarity: 'legendary', zone: 'Territorio Integrado', family: 'Artefacto legendario', description: 'La reliquia cumbre del Guardián: ríos, sabana, fauna y comunidad unidos en eterno equilibrio.', image: '/assets/items/i30.png', sourceMissionPool: [15] },
];

// ZONE → mission pool mapping for reward logic
export const MISSION_ZONE_MAP: Record<number, number[]> = {
  1: [1, 2, 3, 4, 5, 6],
  5: [1, 2, 3, 4, 5, 6],
  6: [1, 2, 3, 4, 5, 6],
  8: [1, 2, 3, 4, 5, 6],
  2: [7, 8, 9, 10, 11, 12],
  3: [7, 8, 9, 10, 11, 12],
  4: [7, 8, 9, 10, 11, 12],
  14: [7, 8, 9, 10, 11, 12],
  7: [13, 14, 15, 16, 17, 18],
  10: [13, 14, 15, 16, 17, 18],
  11: [13, 14, 15, 16, 17, 18],
  9: [19, 20, 21, 22, 23, 24],
  12: [19, 20, 21, 22, 23, 24],
  13: [19, 20, 21, 22, 23, 24],
  15: [25, 26, 27, 28, 29, 30],
};

// Rarity probabilities
export const RARITY_WEIGHTS = {
  common: 60,
  rare: 25,
  epic: 12,
  legendary: 3,
};

// Roll a random rarity based on weights
export function rollRarity(): ItemRarity {
  const rand = Math.random() * 100;
  if (rand < 3) return 'legendary';
  if (rand < 15) return 'epic';
  if (rand < 40) return 'rare';
  return 'common';
}

// Get a random item for a mission, respecting zone and rarity
export function rollReward(missionId: number): CollectibleItem {
  // Special case: mission 15 always gives item 30
  if (missionId === 15) {
    return COLLECTIBLES.find(i => i.id === 30)!;
  }
  const pool = MISSION_ZONE_MAP[missionId] || [1, 2, 3, 4, 5, 6];
  const rarity = rollRarity();
  const rarityPool = COLLECTIBLES.filter(i => pool.includes(i.id) && i.rarity === rarity);
  // Fallback if no items of that rarity in zone pool
  const finalPool = rarityPool.length > 0 ? rarityPool : COLLECTIBLES.filter(i => pool.includes(i.id));
  return finalPool[Math.floor(Math.random() * finalPool.length)];
}
