export type DashboardContent = {
    section: string,
    description: string,
    urlPath: string
}

export type DashboardLernenCategory = {
    category: string,
    urlPath: string
}

export const dashboardSectionData: DashboardContent[] = [
    {
        section: "Lernen",
        description: "Mathematische Grundlagen für Grundschüler umfassen Zahlenverständnis, Addition, Subtraktion, Multiplikation, Division, geometrische Formen, Maßeinheiten und einfache Muster. Spielerische Übungen und anschauliche Erklärungen fördern ein solides mathematisches Grundwissen.",
        urlPath: "lernen"
    },
    {
        section: "Fortschrittsübersicht",
        description: "Der Bereich Fortschrittsübersicht zeigt den Lernfortschritt anhand von abgeschlossenen Übungen und erreichten Zielen. Grafiken und Belohnungssysteme motivieren, während individuelle Empfehlungen helfen, gezielt Schwächen zu verbessern.",
        urlPath: "fortschritt"
    },
    {
        section: "Statistik",
        description: "Der Bereich Statistik bietet detaillierte Einblicke in die Lernleistung durch Diagramme und Kennzahlen. Er zeigt Übungsfortschritt, Erfolgsraten und Lernzeiten, um Stärken und Verbesserungsmöglichkeiten sichtbar zu machen.",
        urlPath: "statistik"
    },
    {
        section: "Einstellungen",
        description: "Der Bereich Einstellungen ermöglicht die Anpassung der App an individuelle Bedürfnisse. Nutzer können Profile verwalten, Schwierigkeitsstufen wählen, Benachrichtigungen steuern und Designoptionen anpassen, um ein optimales Lernerlebnis zu schaffen.",
        urlPath: "einstellungen"
    }
]

export const dashboardLernenSections: DashboardLernenCategory[] = [
    {
        category: "Addition",
        urlPath: ""
    },
    {
        category: "Subtraktion",
        urlPath: ""
    },
    {
        category: "Multiplikation",
        urlPath: ""
    },
    {
        category: "Division",
        urlPath: ""
    }    
]