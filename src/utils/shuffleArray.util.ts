export const shuffleArray = (array?: string[]): string[] => {
    if (!array) return [];

    const newArray: string[] = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
        const j: number = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}