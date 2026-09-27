import { CollectibleItem, ItemRarity } from '../types';

export const COLLECTIBLES: CollectibleItem[] = [
  // ZONA 1 — BOSQUE Y SABANA (items 1-6)
  { id: 1, name: 'Semilla de Ceiba', rarity: 'common', zone: 'Bosque y Sabana', family: 'Vida vegetal', description: 'Una pequeña semilla que representa el crecimiento y la renovación del bosque.', image: '/assets/items/i1.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 2, name: 'Semilla de Iguá', rarity: 'common', zone: 'Bosque y Sabana', family: 'Vida vegetal', description: 'Una pequeña semilla que recuerda la diversidad vegetal del territorio.', image: '/assets/items/i2.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 3, name: 'Hoja de Uvero', rarity: 'common', zone: 'Bosque y Sabana', family: 'Vida vegetal', description: 'Una hoja del paisaje tropical, símbolo de la vida que rodea los humedales y bosques.', image: '/assets/items/i3.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 4, name: 'Rama de Guarapero', rarity: 'common', zone: 'Bosque y Sabana', family: 'Vida vegetal', description: 'Una pequeña rama que representa la vegetación que forma parte del territorio.', image: '/assets/items/i4.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 5, name: 'Pluma de Loro', rarity: 'common', zone: 'Bosque y Sabana', family: 'Fauna', description: 'Una pluma que simboliza la presencia de las aves silvestres en el bosque.', image: '/assets/items/i5.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 6, name: 'Rastro de Chigüiro', rarity: 'common', zone: 'Bosque y Sabana', family: 'Fauna', description: 'Huellas encontradas cerca del agua, recuerdo de la fauna que recorre el territorio.', image: '/assets/items/i6.png', sourceMissionPool: [1, 5, 6, 8] },
  // ZONA 2 — CIÉNAGAS Y CAÑOS (items 7-12)
  { id: 7, name: 'Pluma de Garza', rarity: 'common', zone: 'Ciénagas y Caños', family: 'Fauna', description: 'Una pluma blanca encontrada junto al agua, símbolo de la vida en los humedales.', image: '/assets/items/i7.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 8, name: 'Bocachico del Caño', rarity: 'common', zone: 'Ciénagas y Caños', family: 'Fauna acuática', description: 'Una representación del bocachico, especie estrechamente relacionada con la vida de los ríos y ciénagas.', image: '/assets/items/i8.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 9, name: 'Piedra de Ciénaga', rarity: 'common', zone: 'Ciénagas y Caños', family: 'Memoria del agua', description: 'Una piedra pulida por el agua, pequeña memoria de una ciénaga.', image: '/assets/items/i9.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 10, name: 'Icotea de la Ciénaga', rarity: 'rare', zone: 'Ciénagas y Caños', family: 'Fauna', description: 'Una representación de la icotea, símbolo de las especies que dependen de los humedales.', image: '/assets/items/i10.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 11, name: 'Huella del Jaguar', rarity: 'rare', zone: 'Ciénagas y Caños', family: 'Fauna', description: 'Una huella descubierta en el barro, símbolo de la presencia de grandes depredadores en el territorio.', image: '/assets/items/i11.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 12, name: 'Nido de Pisingo', rarity: 'rare', zone: 'Ciénagas y Caños', family: 'Fauna', description: 'Un pequeño nido entre la vegetación, recuerdo de la vida que habita los humedales.', image: '/assets/items/i12.png', sourceMissionPool: [2, 3, 4, 14] },
  // ZONA 3 — RÍOS Y MINERÍA (items 13-18)
  { id: 13, name: 'Piedra del Río', rarity: 'common', zone: 'Ríos y Minería', family: 'Memoria del agua', description: 'Una piedra suavizada por la corriente, encontrada a orillas del río.', image: '/assets/items/i13.png', sourceMissionPool: [7, 10, 11] },
  { id: 14, name: 'Miniatura de Canoa', rarity: 'common', zone: 'Ríos y Minería', family: 'Vida ribereña', description: 'Una pequeña canoa que representa la navegación y la vida cotidiana alrededor del agua.', image: '/assets/items/i14.png', sourceMissionPool: [7, 10, 11] },
  { id: 15, name: 'Canalete del Río', rarity: 'common', zone: 'Ríos y Minería', family: 'Vida ribereña', description: 'Un pequeño canalete que recuerda la navegación y las prácticas ribereñas.', image: '/assets/items/i15.png', sourceMissionPool: [7, 10, 11] },
  { id: 16, name: 'Alevino de Bocachico', rarity: 'rare', zone: 'Ríos y Minería', family: 'Fauna acuática', description: 'Una representación de un bocachico joven, símbolo de nuevas generaciones en los ecosistemas acuáticos.', image: '/assets/items/i16.png', sourceMissionPool: [7, 10, 11] },
  { id: 17, name: 'Atarraya de la Ciénaga', rarity: 'rare', zone: 'Ríos y Minería', family: 'Vida ribereña', description: 'Una pequeña atarraya que representa la memoria de la pesca artesanal y la vida junto al agua.', image: '/assets/items/i17.png', sourceMissionPool: [7, 10, 11] },
  { id: 18, name: 'Brújula de los Tres Ríos', rarity: 'epic', zone: 'Ríos y Minería', family: 'Exploración', description: 'Una brújula simbólica que representa las conexiones de los grandes ríos y el territorio.', image: '/assets/items/i18.png', sourceMissionPool: [7, 10, 11] },
  // ZONA 4 — COMUNIDAD Y TERRITORIO (items 19-24)
  { id: 19, name: 'Totuma Ribereña', rarity: 'common', zone: 'Comunidad y Territorio', family: 'Vida comunitaria', description: 'Una pequeña totuma que representa objetos y prácticas de la vida cotidiana del territorio.', image: '/assets/items/i19.png', sourceMissionPool: [9, 12, 13] },
  { id: 20, name: 'Miniatura de Hamaca', rarity: 'common', zone: 'Comunidad y Territorio', family: 'Vida comunitaria', description: 'Una pequeña hamaca que evoca la vida cotidiana y la tradición ribereña.', image: '/assets/items/i20.png', sourceMissionPool: [9, 12, 13] },
  { id: 21, name: 'Trenza de Palma Sará', rarity: 'common', zone: 'Comunidad y Territorio', family: 'Artesanía', description: 'Una pequeña trenza de fibra vegetal que representa el trabajo artesanal.', image: '/assets/items/i21.png', sourceMissionPool: [9, 12, 13] },
  { id: 22, name: 'Cataure de Palma', rarity: 'common', zone: 'Comunidad y Territorio', family: 'Artesanía', description: 'Una pequeña pieza tejida que representa la tradición artesanal del territorio.', image: '/assets/items/i22.png', sourceMissionPool: [9, 12, 13] },
  { id: 23, name: 'Sombrero de Palma Sará', rarity: 'rare', zone: 'Comunidad y Territorio', family: 'Artesanía', description: 'Una pieza artesanal tejida que representa la memoria y creatividad de la comunidad.', image: '/assets/items/i23.png', sourceMissionPool: [9, 12, 13] },
  { id: 24, name: 'Casa Palafítica', rarity: 'rare', zone: 'Comunidad y Territorio', family: 'Vida ribereña', description: 'Una pequeña vivienda sobre pilotes, símbolo de las formas de habitar cerca del agua.', image: '/assets/items/i24.png', sourceMissionPool: [9, 12, 13] },
  // ZONA 5 — TERRITORIO INTEGRADO (items 25-30)
  { id: 25, name: 'Fragmento de Camellón Zenú', rarity: 'rare', zone: 'Territorio Integrado', family: 'Memoria del territorio', description: 'Un objeto simbólico inspirado en los antiguos sistemas de manejo del agua del territorio.', image: '/assets/items/i25.png', sourceMissionPool: [15] },
  { id: 26, name: 'Mapa Ancestral del Agua', rarity: 'epic', zone: 'Territorio Integrado', family: 'Memoria del territorio', description: 'Un mapa simbólico que representa la conexión entre agua, territorio y vida.', image: '/assets/items/i26.png', sourceMissionPool: [15] },
  { id: 27, name: 'Corazón del Humedal', rarity: 'epic', zone: 'Territorio Integrado', family: 'Territorio', description: 'Un símbolo de agua y biodiversidad que representa la vida conectada de los humedales.', image: '/assets/items/i27.png', sourceMissionPool: [15] },
  { id: 28, name: 'Relicario de la Ceiba', rarity: 'epic', zone: 'Territorio Integrado', family: 'Territorio', description: 'Un objeto simbólico inspirado en la Ceiba como representación de vida, memoria y territorio.', image: '/assets/items/i28.png', sourceMissionPool: [15] },
  { id: 29, name: 'Orbe de La Mojana', rarity: 'legendary', zone: 'Territorio Integrado', family: 'Artefacto legendario', description: 'Una esfera simbólica donde el agua, el bosque y el territorio parecen encontrarse.', image: '/assets/items/i29.png', sourceMissionPool: [15] },
  { id: 30, name: 'Corazón del Gran Territorio', rarity: 'legendary', zone: 'Territorio Integrado', family: 'Artefacto legendario', description: 'El símbolo definitivo de un territorio donde agua, fauna, bosque y comunidad permanecen conectados.', image: '/assets/items/i30.png', sourceMissionPool: [15] },
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
