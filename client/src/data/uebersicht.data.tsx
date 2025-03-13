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
    completed: new Date(2025, 1, 28),
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
    experienceAmount: 300,
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

export type OverviewMilestone = {
  title?: string;
  cause: string;
  howTo?: string;
  accomplished: boolean;
  achievedDate?: Date,
  progressCurrent?: number,
  progressNeeded?: number
};

export const overviewMilestonesData: OverviewMilestone[] = [
  {
    cause: "Erreiche Level 2",
    accomplished: true,
    achievedDate: new Date(2025, 0, 22)
  },
  {
    cause: "Erreiche Level 5",
    accomplished: false,
    progressCurrent: 2, 
    progressNeeded: 5
  },
  {
    cause: "Erreiche Level 10",
    accomplished: false,
    progressCurrent: 2, 
    progressNeeded: 10
  },
  {
    cause: "Erreiche Level 20",
    accomplished: false,
    progressCurrent: 2, 
    progressNeeded: 20
  },
  {
    cause: "Erreiche Level 30",
    accomplished: false,
    progressCurrent: 2, 
    progressNeeded: 30
  },
  {
    title: "Erster Schritt gemeistert",
    cause: "Erste Übung abgeschlossen",
    accomplished: true,
    howTo: "Schließe deine erste beliebige Übung ab.",
    achievedDate: new Date(2025, 0, 22)
  },
  {
    title: "Themen-Champion",
    cause: "Alle Übungen eines Themas abgeschlossen",
    accomplished: false,
    howTo: "Schließe alle Übungen eines bestimmten Themas ab."
  },
  {
    title: "Mathe-Meister",
    cause: "Alle Übungen abgeschlossen",
    accomplished: false,
    howTo: "Schließe alle Übungen ab.",
    progressCurrent: 4, 
    progressNeeded: 128
  },
  {
    title: "Dreifach-Fehlerfrei",
    cause: "3 Übungen abgeschlossen ohne Fehler",
    accomplished: false,
    howTo: "Schließe 3 Übungen hintereinander ohne einen Fehler zu machen ab.",
    progressCurrent: 1, 
    progressNeeded: 3
  },
  {
    title: "Aller Anfang ist schwer",
    cause: "Übung mit 0% abgeschlossen",
    accomplished: false,
    howTo: "Schließe eine Übung ohne richtige Antwort ab.",
    progressCurrent: 0, 
    progressNeeded: 3
  },
  {
    title: "Lern-Duo",
    cause: "2 Tage in Folge gelernt",
    accomplished: false,
    howTo: "Lerne 2 Tage hintereinander.",
    progressCurrent: 1, 
    progressNeeded: 2
  },
  {
    title: "Woche der Lernmeister",
    cause: "7 Tage in Folge gelernt",
    accomplished: false,
    howTo: "Lerne 7 Tage hintereinander.",
    progressCurrent: 1, 
    progressNeeded: 7
  },
  {
    title: "Monat der Lernmeister",
    cause: "30 Tage in Folge gelernt",
    accomplished: false,
    howTo: "Lerne 30 Tage hintereinander.",
    progressCurrent: 1, 
    progressNeeded: 30
  },
  {
    title: "Teamwork-Triumph",
    cause: "kooperative Übung abgeschlossen",
    accomplished: false,
    howTo: "Schließe eine Übung mit einem deiner Freund ab.",
    progressCurrent: 0, 
    progressNeeded: 1
  },
  {
    title: "Duell-Champion",
    cause: "Erstes Duell gewonnen",
    accomplished: false,
    howTo: "Gewinne ein Duell gegen einen deiner Freunde.",
    progressCurrent: 0, 
    progressNeeded: 1
  },
  {
    title: "Freundschafts-Beginn",
    cause: "Ersten Freund hinzugefügt",
    accomplished: false,
    howTo: "Füge deinen ersten Freund hinzu.",
    progressCurrent: 0, 
    progressNeeded: 1
  },
  {
    title: "Lernmoment",
    cause: "Erste falsche Antwort abgegeben",
    accomplished: true,
    howTo: "Gib das erste Mal eine falsche Antwort ab.",
    achievedDate: new Date(2025, 0, 22)
  },
  {
    title: "Wiederholungssieger",
    cause: "Übung erfolgreich nach Wiederholung abgeschlossen",
    accomplished: true,
    howTo: "Schließe eine Übung nach wiederholter Durchführung ab.",
    achievedDate: new Date(2025, 1, 15)
  },
  {
    title: "Hilfsmittel",
    cause: "Ersten Tipp benutzt",
    accomplished: false,
    howTo: "Benutze deinen ersten Tipp.",
    progressCurrent: 0, 
    progressNeeded: 1
  },
];
