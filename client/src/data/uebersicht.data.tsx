export type OverviewCompletedExercise = {
  name: string;
  score: number;
  completed: Date;
};

export const overviewCompletedExercisesData = [
  {
    name: "Zahlenstrahl ablesen - Zahlenraum 20",
    score: 54.88,
    completed: new Date(2025, 2, 10),
  },
  {
    name: "Addition - Zahlenraum 20",
    score: 67.33,
    completed: new Date(2025, 2, 8),
  },
  {
    name: "Zeitspannen berechnen - einfach",
    score: 100,
    completed: new Date(2025, 1, 28)
  },
  {
    name: "Rechendreiecke - Zahlenraum 20",
    score: 87.12,
    completed: new Date(2025, 1, 15),
  },
  {
    name: "Achsenspiegelung - Dreieck",
    score: 43.12,
    completed: new Date(2025, 0, 22),
  },
];

export type OverviewLevel = {
  level: number;
  experience: number;
  nextLevel: number;
};

export const overviewLevelData: OverviewLevel = {
  level: 3,
  experience: 900,
  nextLevel: 1500,
};

export type OverviewExperienceExercise = {
  name: string;
  experienceAmount: number;
};

export const overviewExperienceExerciseData: OverviewExperienceExercise[] = [
  {
    name: "Zahlenstrahl ablesen - Zahlenraum 20",
    experienceAmount: 500,
  },
  {
    name: "Addition - Zahlenraum 20",
    experienceAmount: 500,
  },
  {
    name: "Zeitspannen berechnen - einfach",
    experienceAmount: 300
  },
  {
    name: "Rechendreiecke - Zahlenraum 20",
    experienceAmount: 500,
  },
  {
    name: "Achsenspiegelung - Dreieck",
    experienceAmount: 600,
  },
];
