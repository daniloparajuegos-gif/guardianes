import { CollectibleItem, ItemRarity } from '../types';

export const COLLECTIBLES: CollectibleItem[] = [
  // ZONA 1 — BOSQUE Y SABANA (items 1-6)
  { id: 1, name: 'Semilla de Ceiba', rarity: 'common', zone: 'Bosque y Sabana', family: 'Vida vegetal', description: 'Semilla del árbol más grande de la región, que da sombra y refugio a los animales del bosque.', image: '/assets/items/i1.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 2, name: 'Semilla de Iguá', rarity: 'common', zone: 'Bosque y Sabana', family: 'Vida vegetal', description: 'Semilla fuerte y resistente que ayuda a reforestar los campos y sabanas.', image: '/assets/items/i2.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 3, name: 'Hoja de Uvero', rarity: 'common', zone: 'Bosque y Sabana', family: 'Vida vegetal', description: 'Hoja ancha y verde que protege la tierra del calor del sol cerca del agua.', image: '/assets/items/i3.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 4, name: 'Rama de Guarapero', rarity: 'common', zone: 'Bosque y Sabana', family: 'Vida vegetal', description: 'Rama verde que crece a la orilla del agua y aguanta las crecidas del río.', image: '/assets/items/i4.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 5, name: 'Pluma de Loro', rarity: 'common', zone: 'Bosque y Sabana', family: 'Fauna', description: 'Pluma colorida perdida en el vuelo, recuerdo de las aves libres de la selva.', image: '/assets/items/i5.png', sourceMissionPool: [1, 5, 6, 8] },
  { id: 6, name: 'Rastro de Chigüiro', rarity: 'common', zone: 'Bosque y Sabana', family: 'Fauna', description: 'Huella marcada en el barro que avisa el paso del roedor más grande del territorio.', image: '/assets/items/i6.png', sourceMissionPool: [1, 5, 6, 8] },
  // ZONA 2 — CIÉNAGAS Y CAÑOS (items 7-12)
  { id: 7, name: 'Pluma de Garza', rarity: 'common', zone: 'Ciénagas y Caños', family: 'Fauna', description: 'Pluma blanca y suave de las garzas que se posan a pescar en la ciénaga.', image: '/assets/items/i7.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 8, name: 'Bocachico del Caño', rarity: 'common', zone: 'Ciénagas y Caños', family: 'Fauna acuática', description: 'Pez tradicional del Caribe que alimenta a las familias de los pueblos ribereños.', image: '/assets/items/i8.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 9, name: 'Piedra de Ciénaga', rarity: 'common', zone: 'Ciénagas y Caños', family: 'Memoria del agua', description: 'Piedra lisa y redondeada por el paso del agua durante muchos años.', image: '/assets/items/i9.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 10, name: 'Icotea de la Ciénaga', rarity: 'rare', zone: 'Ciénagas y Caños', family: 'Fauna', description: 'Tortuga emblemática de los humedales que sabe protegerse en épocas de sequía.', image: '/assets/items/i10.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 11, name: 'Huella del Jaguar', rarity: 'rare', zone: 'Ciénagas y Caños', family: 'Fauna', description: 'Gran pisada en la tierra que demuestra la presencia del felino más respetado del bosque.', image: '/assets/items/i11.png', sourceMissionPool: [2, 3, 4, 14] },
  { id: 12, name: 'Nido de Pisingo', rarity: 'rare', zone: 'Ciénagas y Caños', family: 'Fauna', description: 'Pequeño nido oculto entre las plantas acuáticas donde nacen los patos silvestres.', image: '/assets/items/i12.png', sourceMissionPool: [2, 3, 4, 14] },
  // ZONA 3 — RÍOS Y MINERÍA (items 13-18)
  { id: 13, name: 'Piedra del Río', rarity: 'common', zone: 'Ríos y Minería', family: 'Memoria del agua', description: 'Piedra pulida por la fuerte corriente del gran río Magdalena.', image: '/assets/items/i13.png', sourceMissionPool: [7, 10, 11] },
  { id: 14, name: 'Miniatura de Canoa', rarity: 'common', zone: 'Ríos y Minería', family: 'Vida ribereña', description: 'Recuerdo de las canoas de madera que usan los campesinos para cruzar el río.', image: '/assets/items/i14.png', sourceMissionPool: [7, 10, 11] },
  { id: 15, name: 'Canalete del Río', rarity: 'common', zone: 'Ríos y Minería', family: 'Vida ribereña', description: 'El remo tradicional con el que los pescadores navegan día a día.', image: '/assets/items/i15.png', sourceMissionPool: [7, 10, 11] },
  { id: 16, name: 'Alevino de Bocachico', rarity: 'rare', zone: 'Ríos y Minería', family: 'Fauna acuática', description: 'Cría de bocachico que crecerá en los caños para mantener vivo el río.', image: '/assets/items/i16.png', sourceMissionPool: [7, 10, 11] },
  { id: 17, name: 'Atarraya de la Ciénaga', rarity: 'rare', zone: 'Ríos y Minería', family: 'Vida ribereña', description: 'Red tejida a mano que los pescadores lanzan con destreza para conseguir el alimento.', image: '/assets/items/i17.png', sourceMissionPool: [7, 10, 11] },
  { id: 18, name: 'Brújula de los Tres Ríos', rarity: 'epic', zone: 'Ríos y Minería', family: 'Exploración', description: 'Guía a los exploradores donde se unen el río Cauca, el San Jorge y el Magdalena.', image: '/assets/items/i18.png', sourceMissionPool: [7, 10, 11] },
  // ZONA 4 — COMUNIDAD Y TERRITORIO (items 19-24)
  { id: 19, name: 'Totuma Ribereña', rarity: 'common', zone: 'Comunidad y Territorio', family: 'Vida comunitaria', description: 'Recipiente hecho del fruto del totumo, infaltable para tomar agua fresca en el campo.', image: '/assets/items/i19.png', sourceMissionPool: [9, 12, 13] },
  { id: 20, name: 'Miniatura de Hamaca', rarity: 'common', zone: 'Comunidad y Territorio', family: 'Vida comunitaria', description: 'Pequeña hamaca tejida para descansar al fresco del viento de la tarde.', image: '/assets/items/i20.png', sourceMissionPool: [9, 12, 13] },
  { id: 21, name: 'Trenza de Palma Sará', rarity: 'common', zone: 'Comunidad y Territorio', family: 'Artesanía', description: 'Tira de palma tejida por artesanos locales para crear artesanías tradicionales.', image: '/assets/items/i21.png', sourceMissionPool: [9, 12, 13] },
  { id: 22, name: 'Cataure de Palma', rarity: 'common', zone: 'Comunidad y Territorio', family: 'Artesanía', description: 'Canasto tradicional que se carga en la espalda para recoger las cosechas.', image: '/assets/items/i22.png', sourceMissionPool: [9, 12, 13] },
  { id: 23, name: 'Sombrero de Palma Sará', rarity: 'rare', zone: 'Comunidad y Territorio', family: 'Artesanía', description: 'Sombrero típico que protege a los campesinos y pescadores del sol caliente.', image: '/assets/items/i23.png', sourceMissionPool: [9, 12, 13] },
  { id: 24, name: 'Casa Palafítica', rarity: 'rare', zone: 'Comunidad y Territorio', family: 'Vida ribereña', description: 'Vivienda levantada sobre postes de madera para no inundarse cuando sube el agua.', image: '/assets/items/i24.png', sourceMissionPool: [9, 12, 13] },
  // ZONA 5 — TERRITORIO INTEGRADO (items 25-30)
  { id: 25, name: 'Fragmento de Camellón Zenú', rarity: 'rare', zone: 'Territorio Integrado', family: 'Memoria del territorio', description: 'Pedazo de los antiguos canales que los indígenas Zenú construyeron para controlar las inundaciones.', image: '/assets/items/i25.png', sourceMissionPool: [15] },
  { id: 26, name: 'Mapa Ancestral del Agua', rarity: 'epic', zone: 'Territorio Integrado', family: 'Memoria del territorio', description: 'Mapa antiguo que muestra cómo se conectan todos los ríos y ciénagas del territorio.', image: '/assets/items/i26.png', sourceMissionPool: [15] },
  { id: 27, name: 'Corazón del Humedal', rarity: 'epic', zone: 'Territorio Integrado', family: 'Territorio', description: 'Símbolo del agua viva que mantiene sanas a las plantas y animales de la ciénaga.', image: '/assets/items/i27.png', sourceMissionPool: [15] },
  { id: 28, name: 'Relicario de la Ceiba', rarity: 'epic', zone: 'Territorio Integrado', family: 'Territorio', description: 'Objeto especial que guarda el respeto por los árboles más viejos del bosque.', image: '/assets/items/i28.png', sourceMissionPool: [15] },
  { id: 29, name: 'Orbe de La Mojana', rarity: 'legendary', zone: 'Territorio Integrado', family: 'Artefacto legendario', description: 'Esfera mágica que representa la unión del agua, la tierra y el bosque en La Mojana.', image: '/assets/items/i29.png', sourceMissionPool: [15] },
  { id: 30, name: 'Corazón del Gran Territorio', rarity: 'legendary', zone: 'Territorio Integrado', family: 'Artefacto legendario', description: 'El mayor tesoro del Guardián: demuestra que el agua, los animales, el bosque y la gente forman un solo hogar.', image: '/assets/items/i30.png', sourceMissionPool: [15] },
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
