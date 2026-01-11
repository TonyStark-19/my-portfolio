// custom hook to calculate days streak from a given start date in UTC
export default function useDaysStreak(startDateUTC) {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const today = new Date();

    return Math.floor(
        (Date.UTC(today.getFullYear(), today.getMonth(), today.getDate()) - startDateUTC) / MS_PER_DAY
    );
}