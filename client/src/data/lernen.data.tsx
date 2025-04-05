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
        name: "Grundrechenarten bis 20",
        description:
          "Mit den Grundrechenarten lernt man plus und minus rechnen. Diese Rechnungen heißen Addition und Subtraktion.",
        exercises: [
          {
            name: "Plus rechnen (Addition)",
            description:
              "Addition heißt etwas dazuzählen. So finden wir heraus, wie viel etwas zusammen ist.",
          },
          {
            name: "Minus rechnen (Subtraktion)",
            description:
              "Subtraktion bedeutet etwas wegnehmen. So finden wir heraus, wie viel etwas weniger ist.",
          },
        ],
      },
      {
        name: "Mengen und Vergleiche",
        description:
          "Mengen sind Gruppen von Dingen, zum Beispiel Äpfel oder Bauklötze. Vergleichen bedeutet zu schauen, welche Gruppe mehr, weniger oder gleich viele Dinge hat. So verstehen wir Zahlen und Größen besser.",
        exercises: [
          {
            name: "Mengen vergleichen",
            description:
              "In dieser Übung werden zwei Zahlen gezeigt. Du sollst herausfinden welche Zahl davon größer oder kleiner ist oder ob beide Zahlen gleich sind.",
          },
        ],
      },
      {
        name: "Formen (Geometrie)",
        description:
          "Formen sind die Bilder, die wir überall sehen! Ein Kreis ist rund wie ein Ball, ein Quadrat hat vier gleiche Seiten, ein Dreieck hat drei Ecken, und ein Rechteck ist wie eine lange Kiste.",
        exercises: [
          {
            name: "Formen erkennen",
            description:
              "In dieser Übung werden verschiedene Formen angezeigt und du sollst herausfinden welche Form angezeigt wird.",
          },
        ],
      },
      {
        name: "Sachaufgaben 1. Klasse",
        description:
          "Sachaufgaben sind Mathe-Geschichten aus dem echten Leben. Du musst lesen und verstehen was gefragt ist und dann mit Rechnen die Antwort finden.",
        exercises: [
          {
            name: "Textaufgaben verstehen",
            description:
              "In dieser Übung musst du einen Text lesen und dann die Frage mithilfe von Mathematik beantworten.",
          },
        ],
      },
    ],
  },
  {
    class: 2,
    categories: [
      {
        name: "Grundrechenarten bis 100",
        description:
          "Die Grundrechenarten werden mit mal und geteilt erweitert. Diese Rechnungen heißen Multiplikation und Division.",
        exercises: [
          {
            name: "Plus rechnen (Addition)",
            description:
              "Addition heißt etwas dazuzählen. So finden wir heraus, wie viel etwas zusammen ist.",
          },
          {
            name: "Minus rechnen (Subtraktion)",
            description:
              "Subtraktion bedeutet etwas wegnehmen. So finden wir heraus, wie viel etwas weniger ist.",
          },
          {
            name: "Mal rechnen (Multiplikation)",
            description:
              "Multiplikation ist wie mehrmals dasselbe dazu zählen. Es hilft uns, schneller herauszufinden, wie viel etwas insgesamt ist, wenn wir gleiche Dinge haben.",
          },
          {
            name: "Geteilt rechnen (Division)",
            description:
              "Division ist, wenn du etwas in gleiche Teile aufteilst. Sie hilft dir zu wissen, wie viel jeder bekommt oder wie oft etwas reinpasst.",
          },
        ],
      },
      {
        name: "Formen (Geometrie)",
        description:
          "Geometrie ist die Mathematik von Formen wie Kreise, Quadrate oder Dreiecke. Du lernst dabei, wie groß sie sind, wie sie aussehen und wie sie zusammenpassen oder sich verändern können.",
        exercises: [
          {
            name: "Figuren zeichen",
            description:
              "In dieser Übung lernst du Formen nach angegebener Größe zu zeichnen.",
          },
          {
            name: "Figuren spiegeln",
            description:
              "In dieser Übung lernst du angegebene Formen zu spiegeln. Spiegelung von Formen bedeutet, dass eine Form so aussieht, als würde sie sich in einem Spiegel zeigen.",
          },
        ],
      },
      {
        name: "Längen, Gewichte und Zeiten",
        description:
          "Längen sagen uns, wie lang etwas ist. Gewichte zeigen, wie schwer etwas ist, und Zeiten sagen, wie lange etwas dauert.",
        exercises: [
          {
            name: "Längen messen",
            description:
              "In dieser Übung werden verschiedene Längen angezeigt dessen genaue Länge du in einer Maßeinheit, zum Beispiel Zentimeter, angeben musst.",
          },
          {
            name: "Gewichte wiegen",
            description:
              "In dieser Übung werden verschiedene Gewichte angegeben dessen genaues Gewicht du in einer Maßeinheit, zum Beispiel Gramm, angeben musst.",
          },
          {
            name: "Uhrzeit lesen",
            description:
              "In dieser Übung siehst du eine Uhr dessen genaue Uhrzeit du angeben musst.",
          },
        ],
      },
      {
        name: "Sachaufgaben 2. Klasse",
        description:
          "Sachaufgaben sind Mathe-Geschichten aus dem echten Leben. Du musst lesen und verstehen was gefragt ist und dann mit Rechnen die Antwort finden.",
        exercises: [
          {
            name: "Textaufgaben verstehen",
            description:
              "In dieser Übung musst du einen Text lesen und dann die Frage mithilfe von Mathematik beantworten.",
          },
        ],
      },
    ],
  },
  {
    class: 3,
    categories: [
      {
        name: "Grundrechenarten bis 1000",
        description:
          "Der Zahlenraum der Grundrechenarten wird auf 1000 erweitert und umfasst Addition, Subtraktion, Multiplikation und Division.",
        exercises: [
          {
            name: "Plus rechnen (Addition)",
            description:
              "Addition heißt etwas dazuzählen. So finden wir heraus, wie viel etwas zusammen ist.",
          },
          {
            name: "Minus rechnen (Subtraktion)",
            description:
              "Subtraktion bedeutet etwas wegnehmen. So finden wir heraus, wie viel etwas weniger ist.",
          },
          {
            name: "Mal rechnen (Multiplikation)",
            description:
              "Multiplikation ist wie mehrmals dasselbe dazu zählen. Es hilft uns, schneller herauszufinden, wie viel etwas insgesamt ist, wenn wir gleiche Dinge haben.",
          },
          {
            name: "Geteilt rechnen (Division)",
            description:
              "Division ist, wenn du etwas in gleiche Teile aufteilst. Sie hilft dir zu wissen, wie viel jeder bekommt oder wie oft etwas reinpasst.",
          },
        ],
      },
      {
        name: "Schriftliche Addition und Subtraktion",
        description:
          "Es gibt Methoden mit denen mehrere Zahlen vereinfacht addiert oder subtrahiert werden können.",
        exercises: [
          {
            name: "Addition",
            description:
              "Bei der schriftlichen Addition rechnest du große Zahlen untereinander, Stelle für Stelle, von rechts nach links, und schreibst Überträge, wenn es mehr als zehn wird.",
          },
          {
            name: "Subtraktion",
            description:
              "Bei der schriftlichen Subtraktion ziehst du große Zahlen untereinander Stelle für Stelle von rechts nach links ab und leihst dir etwas, wenn die obere Zahl kleiner ist als die untere.",
          },
        ],
      },
      {
        name: "Bruchzahlen",
        description:
          "Brüche zeigen an, dass etwas in gleich große Teile geteilt ist – zum Beispiel heißt ½, dass etwas in zwei Teile geteilt wurde und du einen davon hast. Der obere Teil (Zähler) sagt, wie viele Stücke du hast, und der untere Teil (Nenner), in wie viele Stücke das Ganze geteilt wurde.",
        exercises: [
          {
            name: "Brüche verstehen",
            description:
              "In dieser Übung werden verschiedene Brüche angezeigt dessen Zähler (oberer Teil) und Nenner (unterer Teil) du angeben musst.",
          },
          {
            name: "Brüche angeben",
            description:
              "In dieser Übung werden verschiedene Beschreibungen angegeben, die du in einen Bruch angeben musst.",
          },
        ],
      },
      {
        name: "Größen und Maßeinheiten",
        description:
          "Größen helfen uns, Dinge wie Länge, Gewicht, Zeit oder Flüssigkeit zu messen. Maßeinheiten wie Meter, Kilogramm, Liter oder Sekunden sagen uns genau, wie viel etwas ist.",
        exercises: [
          {
            name: "Längen messen",
            description:
              "In dieser Übung werden verschiedene Längen angezeigt dessen genaue Länge du in einer Maßeinheit, zum Beispiel Zentimeter, angeben musst.",
          },
          {
            name: "Gewichte wiegen",
            description:
              "In dieser Übung werden verschiedene Gewichte angegeben dessen genaues Gewicht du in einer Maßeinheit, zum Beispiel Gramm, angeben musst.",
          },
          {
            name: "Zeitspannen berechnen",
            description:
              "In dieser Übung musst du herausfinden wie viel Zeit zwischen zwei Uhrzeiten oder Daten (Mehrzahl von Datum) vergangen ist.",
          },
        ],
      },
      {
        name: "Sachaufgaben 3. Klasse",
        description:
          "Sachaufgaben sind Mathe-Geschichten aus dem echten Leben. Du musst lesen und verstehen was gefragt ist und dann mit Rechnen die Antwort finden.",
        exercises: [
          {
            name: "Textaufgaben verstehen",
            description:
              "In dieser Übung musst du einen Text lesen und dann die Frage mithilfe von Mathematik beantworten.",
          },
        ],
      },
    ],
  },
  {
    class: 4,
    categories: [
      {
        name: "Grundrechenarten bis 10000",
        description:
          "Der Zahlenraum der Grundrechenarten wird auf 1000 erweitert und umfasst Addition, Subtraktion, Multiplikation und Division.",
        exercises: [
          {
            name: "Plus rechnen (Addition)",
            description:
              "Addition heißt etwas dazuzählen. So finden wir heraus, wie viel etwas zusammen ist.",
          },
          {
            name: "Minus rechnen (Subtraktion)",
            description:
              "Subtraktion bedeutet etwas wegnehmen. So finden wir heraus, wie viel etwas weniger ist.",
          },
          {
            name: "Mal rechnen (Multiplikation)",
            description:
              "Multiplikation ist wie mehrmals dasselbe dazu zählen. Es hilft uns, schneller herauszufinden, wie viel etwas insgesamt ist, wenn wir gleiche Dinge haben.",
          },
          {
            name: "Geteilt rechnen (Division)",
            description:
              "Division ist, wenn du etwas in gleiche Teile aufteilst. Sie hilft dir zu wissen, wie viel jeder bekommt oder wie oft etwas reinpasst.",
          },
        ],
      },
      {
        name: "Schriftliche Multiplikation und Division",
        description:
          "Es gibt Methoden mit denen mehrere Zahlen vereinfacht multipliziert oder dividiert werden können.",
        exercises: [
          {
            name: "Multiplikation",
            description:
              "Bei der schriftlichen Multiplikation multiplizierst du große Zahlen, indem du die einzelnen Ziffern der unteren Zahl mit der oberen Zahl multiplizierst und die Ergebnisse entsprechend nach den Stellenwerten versetzt addierst.",
          },
          {
            name: "Division",
            description:
              "Bei der schriftlichen Division teilst du große Zahlen, indem du die obere Zahl in Gruppen der unteren Zahl aufteilst und Schritt für Schritt ermittelst, wie oft die untere Zahl in die obere passt, während du die Reste nach jedem Schritt berechnest.",
          },
        ],
      },
      {
        name: "Bruchzahlen und Dezimalzahlen",
        description:
          "Bruchzahlen können nicht nur in Brüchen angegeben werden sondern auch in Dezimalzahlen (Kommazahlen).",
        exercises: [
          {
            name: "Brüche umrechnen",
            description:
              "In dieser Übung werden verschiedene Brüche angegeben, die du in eine Dezimalzahl angeben musst.",
          },
          {
            name: "Mit Brüchen rechnen",
            description:
              "In dieser Übung werden verschiedene Aufgaben in Brüchen gestellt, die du berechnen musst.",
          },
        ],
      },
      {
        name: "Umfang und Flächen (Geometrie)",
        description:
          "In der Geometrie helfen uns Umfang und Fläche, die Größe von Formen zu verstehen: Der Umfang ist die gesamte Länge der Kanten einer Form, während die Fläche angibt, wie viel Platz die Form auf einer Fläche einnimmt.",
        exercises: [
          {
            name: "Umfang berechnen",
            description:
              "In dieser Übung werden verschiedene Formen angegeben dessen Umfang du berechnen musst.",
          },
          {
            name: "Flächen berechnen",
            description:
              "In dieser Übung werden verschiedene Formen angegeben dessen Flächen du berechnen musst.",
          },
        ],
      },
      {
        name: "Diagramme und Tabellen",
        description:
          "Diagramme und Tabellen sind Hilfsmittel, um Daten anschaulich darzustellen: Diagramme, wie Balken- oder Kreisdiagramme, zeigen Informationen grafisch, während Tabellen Zahlen und Fakten in geordneter Form präsentieren.",
        exercises: [
          {
            name: "Daten erfassen",
            description:
              "In dieser Übung werden verschiedene Daten angegeben dessen Daten du in einem Diagramm oder in eine Tabelle anzeigen musst.",
          },
          {
            name: "Daten auswerten",
            description:
              "In dieser Übung werden verschiedene Daten angegeben, die du analysieren musst. Zusätzlich musst du verschiedene Angaben wie Durchschnitt von Zahlen berechnen.",
          },
        ],
      },
      {
        name: "Sachaufgaben 4. Klasse",
        description:
          "Sachaufgaben sind Mathe-Geschichten aus dem echten Leben. Du musst lesen und verstehen was gefragt ist und dann mit Rechnen die Antwort finden.",
        exercises: [
          {
            name: "Textaufgaben verstehen",
            description:
              "In dieser Übung musst du einen Text lesen und dann die Frage mithilfe von Mathematik beantworten.",
          },
        ],
      },
    ],
  },
];
