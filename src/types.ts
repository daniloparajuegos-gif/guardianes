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
}
