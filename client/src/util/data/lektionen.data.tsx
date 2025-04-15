export type LessonOverview = {
  class: 1 | 2 | 3 | 4;
  lessons: Lesson[];
};

export type Lesson = {
  name: string;
  mathType: string;
  description: string;
};

export const lessonsData: LessonOverview[] = [
  {
    class: 1,
    lessons: [
      {
        name: "Zahlen lesen",
        mathType: "Zahlenverständnis",
        description:
          "In dieser Lektion lernst du die ersten Zahlen als Wort zu schreiben.",
      },
      {
        name: "Zahlen schreiben",
        mathType: "Zahlenverständnis",
        description:
          "In dieser Lektion lernst du die ersten Zahlen als Zahl zu schreiben.",
      },
      {
        name: "Zahlen ordnen",
        mathType: "Zahlenveständnis",
        description:
          "In dieser Lektion lernst du, dass Zahlen sich unterscheiden und nach Größe sortiert werden können.",
      },
      {
        name: "Plus rechnen (Addition)",
        mathType: "Grundrechenarten bis 20",
        description:
          "In dieser Lektion lernst du, dass man Zahlen plus rechnen (addieren) kann.",
      },
      {
        name: "Minus rechnen (Subtraktion)",
        mathType: "Grundrechenarten bis 20",
        description:
          "In dieser Lektion lernst du, dass man Zahlen voneinander wegnehmen (subtrahieren) kann.",
      },
      {
        name: "Mengen vergleichen",
        mathType: "Mengen und Vergleiche",
        description:
          "In dieser Lektion lernst du, dass Gruppen von Dingen mehr, weniger oder gleich viel sein können.",
      },
      {
        name: "Formen erkennen",
        mathType: "Geometrie",
        description:
          "In diser Lektion lernst du die ersten Formen kennen wie ein Kreis, ein Viereck oder ein Dreieck.",
      },
      {
        name: "Textaufgaben verstehen",
        mathType: "Sachaufgaben",
        description:
          "In dieser Lektion lernst du wie verschiedene Textaufgaben aufgebaut sind und gelöst werden können.",
      },
    ],
  },
  {
    class: 2,
    lessons: [
      {
        name: "Plus rechnen (Addition)",
        mathType: "Grundrechenarten bis 100",
        description:
          "In dieser Lektion lernst du, dass man Zahlen plus rechnen (addieren) kann.",
      },
      {
        name: "Minus rechnen (Subtraktion)",
        mathType: "Grundrechenarten bis 100",
        description:
          "In dieser Lektion lernst du, dass man Zahlen voneinander wegnehmen (subtrahieren) kann.",
      },
      {
        name: "Mal rechnen (Multiplikation)",
        mathType: "Grundrechenarten bis 100",
        description:
          "In dieser Lektion lernst du, dass man Zahlen und Dinge mehrmals dazu zählen (multiplizieren) kann.",
      },
      {
        name: "Geteilt rechnen (Division)",
        mathType: "Grundrechenarten bis 100",
        description:
          "In dieser Lektion lernst du, dass man Zahlen und Dinge in gleiche Teile (dividieren) aufteilen kann.",
      },
      {
        name: "Formen zeichnen",
        mathType: "Geometrie",
        description: "In dieser Lektion lernst du Maßeinheiten kennen und zeichnest Formen nach angegebenen Größen."
      },
      {
        name: "Formen spiegeln",
        mathType: "Geometrie",
        description: "In dieser Lektion lernst du wie Spiegelbilder aussehen und zeichnest Formen nach ihrem Spiegelbild."
      },
      {
        name: "Längen messen",
        mathType: "Maßeinheiten",
        description: "In diser Lektion lernst du die verschiedenen Maßeinheiten für das Messen einer bestimmten Länge."
      },
      {
        name: "Gewichte wiegen",
        mathType: "Maßeinheiten",
        description: "In dieser Lektion lernst du, dass Dinge ein bestimmtes Gewicht haben und man diese Gewichte in verschiedene Maßeinheiten umrechnen kann."
      },
      {
        name: "Uhrzeit lesen",
        mathType: "Maßeinheiten",
        description: "In dieser Lektion lernst du wie die Uhrzeit mithilfe von Zeigern angegeben werden kann."
      }
    ],
  },
  {
    class: 3,
    lessons: [
      {
        name: "Plus rechnen (Addition)",
        mathType: "Grundrechenarten bis 1000",
        description:
          "In dieser Lektion lernst du, dass man Zahlen plus rechnen (addieren) kann.",
      },
      {
        name: "Minus rechnen (Subtraktion)",
        mathType: "Grundrechenarten bis 1000",
        description:
          "In dieser Lektion lernst du, dass man Zahlen voneinander wegnehmen (subtrahieren) kann.",
      },
      {
        name: "Mal rechnen (Multiplikation)",
        mathType: "Grundrechenarten bis 1000",
        description:
          "In dieser Lektion lernst du, dass man Zahlen und Dinge mehrmals dazu zählen (multiplizieren) kann.",
      },
      {
        name: "Geteilt rechnen (Division)",
        mathType: "Grundrechenarten bis 1000",
        description:
          "In dieser Lektion lernst du, dass man Zahlen und Dinge in gleiche Teile (dividieren) aufteilen kann.",
      },
      {
        name: "Schriftliche Addition",
        mathType: "Schriftliche Methoden",
        description: "In dieser Lektion lernst du, dass es Methoden gibt mit denen du viele Zahlen vereinfacht plus rechnen kannst."
      },
      {
        name: "Schriftliche Subtraktion",
        mathType: "Schriftliche Methoden",
        description: "In dieser Lektion lernst du, dass es Methoden gibt mit denen du viele Zahlen voneinander wegnehmen kannst."
      },
      {
        name: "Brüche verstehen",
        mathType: "Bruchzahlen",
        description: "In dieser Lektion lernst du Bruchzahlen kennen und verstehst wie sie sich zusammensetzen."
      },
      {
        name: "Brüche angeben",
        mathType: "Bruchzahlen",
        description: "In dieser Lektion lernst du Bruchzahlen zu schreiben."
      },
      {
        name: "Zeitspannen berechnen",
        mathType: "Maßeinheiten",
        description: "In dieser Lektion lernst du wie man verschiedene Zeitspannen oder Datumsspannen berechnen kann."
      }
    ]
  },
  {
    class: 4,
    lessons: [
      {
        name: "Plus rechnen (Addition)",
        mathType: "Grundrechenarten bis 10000",
        description:
          "In dieser Lektion lernst du, dass man Zahlen plus rechnen (addieren) kann.",
      },
      {
        name: "Minus rechnen (Subtraktion)",
        mathType: "Grundrechenarten bis 10000",
        description:
          "In dieser Lektion lernst du, dass man Zahlen voneinander wegnehmen (subtrahieren) kann.",
      },
      {
        name: "Mal rechnen (Multiplikation)",
        mathType: "Grundrechenarten bis 10000",
        description:
          "In dieser Lektion lernst du, dass man Zahlen und Dinge mehrmals dazu zählen (multiplizieren) kann.",
      },
      {
        name: "Geteilt rechnen (Division)",
        mathType: "Grundrechenarten bis 10000",
        description:
          "In dieser Lektion lernst du, dass man Zahlen und Dinge in gleiche Teile (dividieren) aufteilen kann.",
      },
      {
        name: "Schriftliche Multiplikation",
        mathType: "Schriftliche Methoden",
        description: "In dieser Lektion lernst du, dass es Methoden gibt mit denen du viele zahlen vereinfachter multiplizieren kannst."
      },
      {
        name: "Schriftlicihe Division",
        mathType: "Schriftliche Methoden",
        description: "In dieser Lektion lernst du, dass es Methoden gibt mit denen du Zahlen vereinfachter dividieren kannst."
      },
      {
        name: "Brüche umrechnen",
        mathType: "Bruchzahlen",
        description: "In dieser Lektion lernst du, dass Bruchzahlen auch in Dezimalzahlen und umgekehrt angegeben werden können."
      },
      {
        name: "Mit Brüchen rechnen",
        mathType: "Bruchzahlen",
        description: "In dieser Lektion lernst du wie man mit Brüchen rechnet."
      },
      {
        name: "Umfang berechnen",
        mathType: "Geometrie",
        description: "In dieser Lektion lernst du was ein Umfang ist und wie dieser von verschiedenen Formen berechnet werden kann."
      },
      {
        name: "Flächen berechnen",
        mathType: "Geometrie",
        description: "In dieser Lektion lernst du, dass die Flächen von Formen berechnet werden können."
      },
      {
        name: "Daten erfassen",
        mathType: "Diagramme und Tabellen",
        description: "In dieser Lektion lernst du, dass Daten in verschiedenen Weisen erfasst und interpretiert werden können."
      },
      {
        name: "Daten auswerten",
        mathType: "Diagramme und Tabellen",
        description: "In dieser Lektion lernst du welche besonderen Werte es gibt und wie diese von Daten berechnet werden können."
      }
    ]
  }
];
