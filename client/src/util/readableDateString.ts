const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"]

export default function readableDateString(date: Date): string {
    const month = monthNames[date.getMonth()];

    return `${date.getDate()}. ${month} ${date.getFullYear()}`
}