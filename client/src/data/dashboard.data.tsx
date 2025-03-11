import { JSX } from "react";

import { IoSettingsOutline, IoStatsChartOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { TiMortarBoard, TiThListOutline } from "react-icons/ti";

export type DashboardSidebarSection = {
  section: string;
  categories: DashboardSidebarCategory[];
};

export type DashboardSidebarCategory = {
  category: string;
  urlPath: string;
  iconElement: JSX.Element;
  disabled: boolean;
};

export const dashboardSectionData: DashboardSidebarSection[] = [
  {
    section: "Lernbereich",
    categories: [
      {
        category: "Lernen",
        urlPath: "lernen",
        iconElement: <TiMortarBoard />,
        disabled: false
      },
      {
        category: "Lektionen",
        urlPath: "lektionen",
        iconElement: <HiOutlineClipboardDocumentList />,
        disabled: false
      },
    ],
  },
  {
    section: "Profil",
    categories: [
      {
        category: "Fortschrittsübersicht",
        urlPath: "fortschritt",
        iconElement: <TiThListOutline />,
        disabled: false
      },
      {
        category: "Statistik",
        urlPath: "statistik",
        iconElement: <IoStatsChartOutline />,
        disabled: false
      },
    ],
  },
  {
    section: "Anderes",
    categories: [
      {
        category: "Multiplayer",
        urlPath: "multiplayer",
        iconElement: <HiOutlineUserGroup />,
        disabled: false
      },
      {
        category: "Einstellungen",
        urlPath: "einstellungen",
        iconElement: <IoSettingsOutline />,
        disabled: false
      },
    ],
  },
];

export type DashboardContentCategory = {
  category: string;
  description: string;
  url: string;
};

export const dashboardCategoriesData: DashboardContentCategory[] = [
  {
    category: "Lernen",
    description:
      "Mathematische Grundlagen für Grundschüler umfassen Zahlenverständnis, Addition, Subtraktion, Multiplikation, Division, geometrische Formen, Maßeinheiten und einfache Muster. Spielerische Übungen und anschauliche Erklärungen fördern ein solides mathematisches Grundwissen.",
    url: "lernen",
  },
  {
    category: "Lektionen",
    description:
      "Der Bereich Lektionen bietet interaktive Mathematik-Lerneinheiten für Grundschüler. Jede Lektion enthält anschauliche Erklärungen, spielerische Übungen und adaptive Herausforderungen. Fortschritte werden gespeichert, und Belohnungen motivieren zum Lernen. Durch visuelle Darstellungen und einfache Sprache wird Mathematik verständlich vermittelt, sodass Kinder spielerisch ihre Fähigkeiten verbessern können.",
    url: "lektionen",
  },
  {
    category: "Fortschrittsübersicht",
    description:
      "Der Bereich Fortschrittsübersicht zeigt den Lernfortschritt anhand von abgeschlossenen Übungen und erreichten Zielen. Grafiken und Belohnungssysteme motivieren, während individuelle Empfehlungen helfen, gezielt Schwächen zu verbessern.",
    url: "fortschritt",
  },
  {
    category: "Statistik",
    description:
      "Der Bereich Statistik bietet detaillierte Einblicke in die Lernleistung durch Diagramme und Kennzahlen. Er zeigt Übungsfortschritt, Erfolgsraten und Lernzeiten, um Stärken und Verbesserungsmöglichkeiten sichtbar zu machen.",
    url: "statistik",
  },
  {
    category: "Multiplayer",
    description:
      "Der Bereich Multiplayer ermöglicht es Grundschülern, Mathematik spielerisch mit Freunden oder anderen Lernenden in Echtzeit zu üben. Durch spannende Duelle, kooperative Aufgaben und Ranglisten wird der Lernprozess motivierend gestaltet. Fairness-Mechanismen sorgen für ausgeglichene Matches, während Belohnungen und Fortschrittsanzeigen den Ehrgeiz der Kinder fördern.",
    url: "multiplayer",
  },
  {
    category: "Einstellungen",
    description:
      "Der Bereich Einstellungen ermöglicht die Anpassung der App an individuelle Bedürfnisse. Nutzer können Profile verwalten, Schwierigkeitsstufen wählen, Benachrichtigungen steuern und Designoptionen anpassen, um ein optimales Lernerlebnis zu schaffen.",
    url: "einstellungen",
  },
];

export type DashboardLernenCategory = {
  category: string;
  urlPath: string;
};

export const dashboardLernenSections: DashboardLernenCategory[] = [
  {
    category: "Addition",
    urlPath: "",
  },
  {
    category: "Subtraktion",
    urlPath: "",
  },
  {
    category: "Multiplikation",
    urlPath: "",
  },
  {
    category: "Division",
    urlPath: "",
  },
];