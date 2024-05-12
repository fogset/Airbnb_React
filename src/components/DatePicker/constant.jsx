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

export function minRange(month, setMonth, year, setYear) {
    if (month === 1) {
        setMonth(12);
        setYear(year - 1);
    } else {
        setMonth(month - 1);
    }
}
export function maxRange(month, setMonth, year, setYear) {
    if (month === 12) {
        setMonth(1);
        setYear(year + 1);
    } else {
        setMonth(month + 1);
    }
}
