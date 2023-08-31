export function AddDays(date: Date, number: number) {
    return new Date(new Date().setDate(date.getDate() + number));
}
export function SubtractDays(date: Date, number: number) {
    return new Date(new Date().setDate(date.getDate() - number));
}
