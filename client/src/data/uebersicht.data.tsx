export type OverviewCompletedExercise = {
    name: string,
    score: number,
    completed: Date
}

export const overviewCompletedExercisesData = [
    {
        name: "Addition - Zahlenraum 20",
        score: 67.33,
        completed: new Date(2025, 2, 8)
    },
    {
        name: "Rechendreiecke - Zahlenraum 20",
        score: 87.12,
        completed: new Date(2025, 1, 15)
    },
    {
        name: "Achsenspiegelung - Dreieck",
        score: 43.12,
        completed: new Date(2025, 0, 22)
    }
]