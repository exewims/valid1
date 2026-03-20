export function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

export function findMax(arr) {
    if (arr.length === 0) {
        throw new Error('Массив не может быть пустым');
    }
    return Math.max(...arr);
}