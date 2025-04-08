export type LessonOverview = {
    class: 1 | 2 | 3 | 4;
    lessons: Lesson[];
}

export type Lesson = {
    name: string;
    mathType: string;
    description: string;
}

export const lessonsData: LessonOverview[] = [
    {
        class: 1,
        lessons: [
            {
                name: "Zahlen lesen",
                mathType: "Zahlenverständnis",
                description: "In dieser Lektion lernst du die ersten Zahlen als Wort zu schreiben.",
            },
            {
                name: "Zahlen schreiben",
                mathType: "Zahlenverständnis",
                description: "In dieser Lektion lernst du die ersten Zahlen als Zahl zu schreiben."
            },
            {
                name: "Zahlen ordnen",
                mathType: "Zahlenveständnis",
                description: "In dieser Lektion lernst du, dass Zahlen sich unterscheiden und nach Größe sortiert werden können."
            },
            {
                name: "Plus rechnen (Addition)",
                mathType: "Grundrechenarten",
                description: "In dieser Lektion lernst du, dass man Zahlen plus rechnen (addieren) kann."
            },
            {
                name: "Minus rechnen (Subtraktion)",
                mathType: "Grundrechenarten",
                description: "In dieser Lektion lernst du, dass man Zahlen voneinander wegnehmen (subtrahieren) kann."
            },
            {
                name: "Mengen vergleichen",
                mathType: "Mengen und Vergleiche",
                description: "In dieser Lektion lernst du, dass Gruppen von Dingen mehr, weniger oder gleich viel sein können."
            },
            {
                name: "Formen erkennen",
                mathType: "Geometrie",
                description: "In diser Lektion lernst du die ersten Formen kennen wie ein Kreis, ein Viereck oder ein Dreieck."
            },
            {
                name: "Textaufgaben verstehen",
                mathType: "Sachaufgaben",
                description: "In dieser Lektion lernst du wie verschiedene Textaufgaben aufgebaut sind und gelöst werden können."
            }
        ]
    }
]