import randomNumber from "./randomNumber";

export default function randomItemsFromArray<T>(arr: T[], number: number): T[] {
    const indecesPicked: number[] = [];
    const randomItems: T[] = [];

    if (number > arr.length) return arr;

    for (let i = 0; i < number; i++) {
        const min = 0;
        const max = arr.length - 1;
        let randomIndex = randomNumber(min, max);

        while (indecesPicked.includes(randomIndex)) {
            randomIndex = randomNumber(min, max);
        }

        indecesPicked.push(randomIndex);
        randomItems.push(arr[randomIndex])
    }

    return randomItems;
}