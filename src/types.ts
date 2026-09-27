export type ReadingLevelType = 'literal' | 'inferencial' | 'critico';

export interface QuestionOption {
  id: string;
  text: string;
  isCorrect?: boolean;
  feedback?: string; // Retroalimentación formativa y respetuosa
}

export interface Question {
  id: string;
  number: number;
  questionText: string;
  level: ReadingLevelType;
  levelLabel: string; // "Los ojos del Guardián" | "Las pistas ocultas" | "La decisión del Guardián"
  options: QuestionOption[];
  requiresWrittenArgument?: boolean; // Para preguntas críticas que requieren argumentación adicional
  pedagogicalTip?: string;
}

export interface EnvironmentalChallenge {
  title: string;
  instruction: string;
  type: 'alert' | 'schema' | 'message' | 'protocol' | 'table' | 'route' | 'map' | 'chain' | 'mitigation_adaptation' | 'synthesis';
  fields: {
    id: string;
    label: string;
    placeholder: string;
    type: 'text' | 'textarea' | 'select' | 'ordered_steps' | 'table_columns';
    options?: string[];
  }[];
  exampleGuide?: string;
}

export interface Mission {
  id: number;
  slug: string;
  title: string;
  icon: string;
  badgeName: string;
  badgeDescription: string;
  badgeIconSvg?: string;
  territoryZone: 'Ciénagas y Caños' | 'Bosque y Sabana' | 'Ríos y Minería' | 'Comunidad y Territorio' | 'Territorio Integrado';
  conflictSummary: string;
  arrivalContext: string;
  observationDetails: {
    spotlightTitle: string;
    details: string[];
    environmentalAspects: string[];
  };
  instructions: string;
  fullReadingText: string;
  readingWordCount: number;
  literalQuestions: Question[];
  inferentialQuestions: Question[];
  criticalQuestions: Question[];
  environmentalChallenge: EnvironmentalChallenge;
  isFinalMission?: boolean;
}

export interface StudentAnswer {
  questionId: string;
  selectedOptionId: string;
  writtenArgument?: string;
  isCorrect?: boolean;
  answeredAt: string;
}

export interface StudentEvidence {
  missionId: number;
  challengeTitle: string;
  submittedData: Record<string, any>;
  submittedAt: string;
}

export interface StudentPassportEntry {
  missionId: number;
  missionTitle: string;
  badgeName: string;
  completedAt: string;
  reflection: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  username: string; // Nombre de usuario o código escolar único
  grade: string;
  avatar: string;
  pin?: string; // PIN de 4 dígitos para proteger su progreso en computadores compartidos
  createdAt: string;
  completedMissionIds: number[];
  earnedBadges: string[];
  answers: Record<string, StudentAnswer>; // questionId -> StudentAnswer
  evidences: Record<number, StudentEvidence>; // missionId -> StudentEvidence
  passportEntries: StudentPassportEntry[];
  currentMissionId: number;
  collection: Record<number, CollectionEntry>; // itemId -> CollectionEntry
  missionRewards: Record<number, MissionReward>; // missionId -> MissionReward
}

export type ItemRarity = 'common' | 'rare' | 'epic' | 'legendary';
export type ItemZone = 'Bosque y Sabana' | 'Ciénagas y Caños' | 'Ríos y Minería' | 'Comunidad y Territorio' | 'Territorio Integrado';
export type ItemFamily = 'Vida vegetal' | 'Fauna' | 'Fauna acuática' | 'Memoria del agua' | 'Vida ribereña' | 'Vida comunitaria' | 'Artesanía' | 'Exploración' | 'Memoria del territorio' | 'Territorio' | 'Artefacto legendario';

export interface CollectibleItem {
  id: number;
  name: string;
  rarity: ItemRarity;
  zone: ItemZone;
  family: ItemFamily;
  description: string;
  image: string; // path like /assets/items/item-01-semilla-ceiba.webp
  sourceMissionPool: number[]; // which missions can drop this item
}

export interface CollectionEntry {
  itemId: number;
  quantity: number;
  discoveredAt: string; // ISO string of first discovery
  sourceMission: number; // which mission first gave it
}

export interface MissionReward {
  missionId: number;
  rewardItemId: number;
  rewardRarity: ItemRarity;
  claimedAt: string;
}
