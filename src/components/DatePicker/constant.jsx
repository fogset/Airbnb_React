export const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
export const dayName = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export const yearName = ["2021", "2022", "2023", "2024", "2025", "2026", "2027"];
export function getNumberOfDaysInMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}
export function getSortedDay(year, month) {
    const dayIndex = getNumberOfDaysInMonth(year, month);
    const firstHalf = dayName.slice(dayIndex);
    return [...firstHalf, ...dayName.slice(0, dayIndex)];
}
