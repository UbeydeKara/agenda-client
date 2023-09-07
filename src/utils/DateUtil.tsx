export function addDays(date: Date, number: number) {
    return new Date(new Date().setDate(date.getDate() + number));
}

export function subtractDays(date: Date, number: number) {
    return new Date(new Date().setDate(date.getDate() - number));
}

export function dateFormatter(date: Date) {
    return date.toLocaleDateString('en-GB', {
        year: 'numeric', month: '2-digit', day: '2-digit',
    }).split('/').reverse().join('-');
}
