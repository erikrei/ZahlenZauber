const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]

export default function readableDateString(date: Date, monthType: "written" | "numeric" = "written"): string {
    const monthWritten = monthNames[date.getMonth()];

    if (monthType === "written") {
        return `${date.getDate()}. ${monthWritten} ${date.getFullYear()}`
    } else {
        const monthNumeric = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
        return `${date.getDate()}.${monthNumeric}.${date.getFullYear()}`
    }
}