export function addDays(date: Date, number: number) {
    return new Date(new Date().setDate(date.getDate() + number));
}
export function subtractDays(date: Date, number: number) {
    return new Date(new Date().setDate(date.getDate() - number));
}
