export type MilestoneProgress = {
    percentage: number,
    text: string
}

export default function getMilestoneProgress(progressCurrent?: number, progressNeeded?: number): MilestoneProgress | undefined {
    if (progressCurrent === undefined) return undefined;
    if (progressNeeded === undefined) return undefined;

    const progressPercentage = progressCurrent / progressNeeded * 100;
    const progressText = `${progressCurrent} / ${progressNeeded}`;

    return {
        percentage: progressPercentage,
        text: progressText
    }
}