export type LearningExercises = {
  class: 1 | 2 | 3 | 4;
  categories: LearningCategory[];
};

export type LearningCategory = {
  name: string;
  description: string;
  exercises: LearningCategoryExercise[];
};

export type LearningCategoryExercise = {
  name: string;
  description: string;
};

export const learningExercisesData: LearningExercises[] = [
  {
    class: 1,
    categories: [
      {
        name: "Zahlenverständnis",
        description:
          "Zahlverständnis bedeutet, dass du Zahlen kennst und weißt, was sie bedeuten. Du kannst zählen, vergleichen und unterscheiden welche größer oder kleiner sind.",
        exercises: [
          {
            name: "Zahlen lesen",
            description:
              "In dieser Übung sieht man eine Zahl und muss diese als Wort schreiben.",
          },
          {
            name: "Zahlen schreiben",
            description:
              "In dieser Übung sieht man eine Zahl als Wort und muss diese als Zahl schreiben.",
          },
          {
            name: "Zahlen ordnen",
            description:
              "In dieser Übung sieht man zwei Zahlen und muss diese nach Größe ordnen.",
          },
        ],
      },
      {
        name: "Grundrechenarten",
        description: 
            "Mit den Grundrechenarten lernt man plus und minus rechnen. Diese Rechnungen heißen Addition und Subtraktion.",
        exercises: [
            {
                name: "Plus rechnen (Addition)",
                description: "Addition heißt etwas dazuzählen. So finden wir heraus, wie viel etwas zusammen ist."
            },
            {
                name: "Minus rechnen (Subtraktion)",
                description: "Subtraktion bedeutet etwas wegnehmen. So finden wir heraus, wie viel etwas weniger ist."
            }
        ],
      },
      {
        name: "Mengen und Vergleiche",
        description: 
            "Mengen sind Gruppen von Dingen, zum Beispiel Äpfel oder Bauklötze. Vergleichen bedeutet zu schauen, welche Gruppe mehr, weniger oder gleich viele Dinge hat. So verstehen wir Zahlen und Größen besser.",
        exercises: [
            {
                name: "Mengen vergleichen",
                description: "In dieser Übung werden zwei Zahlen gezeigt. Du sollst herausfinden welche Zahl davon größer oder kleiner ist oder ob beide Zahlen gleich sind."
            }
        ]
      },
      {
        name: "Formen (Geometrie)",
        description:
            "Formen sind die Bilder, die wir überall sehen! Ein Kreis ist rund wie ein Ball, ein Quadrat hat vier gleiche Seiten, ein Dreieck hat drei Ecken, und ein Rechteck ist wie eine lange Kiste.",
        exercises: [
            {
                name: "Formen erkennen",
                description: "In dieser Übung werden verschiedene Formen angezeigt und du sollst herausfinden welche Form angezeigt wird."
            }
        ]
      },
      {
        name: "Sachaufgaben",
        description:
            "Sachaufgaben sind Mathe-Geschichten aus dem echten Leben. Du musst lesen und verstehen was gefragt ist und dann mit Rechnen die Antwort finden.",
        exercises: [
            {
                name: "Textaufgaben verstehen",
                description: "In dieser Übung musst du einen Text lesen und dann die Frage mithilfe von Mathematik beantworten."
            }
        ]
      }
    ],
  },
  {
    class: 2,
    categories: [],
  },
  {
    class: 3,
    categories: [],
  },
  {
    class: 4,
    categories: [],
  },
];
