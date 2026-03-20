import { filterEvenNumbers, findMax } from './arrayUtils.js';

console.log('Работа с массивами:');

// Пример 1: Фильтрация чётных чисел
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Исходный массив:', numbers1);
console.log('Чётные числа:', filterEvenNumbers(numbers1));

// Пример 2: Другой массив
const numbers2 = [15, 22, 8, 31, 44, 57, 60];
console.log('\nИсходный массив:', numbers2);
console.log('Чётные числа:', filterEvenNumbers(numbers2));

// Пример 3: Поиск максимального значения
const numbers3 = [3, 7, 2, 9, 1, 5];
console.log('\nМассив:', numbers3);
console.log('Максимальное значение:', findMax(numbers3));

// Пример 4: Ещё один пример
const numbers4 = [-10, -5, 0, 3, 8, 15];
console.log('\nМассив:', numbers4);
console.log('Максимальное значение:', findMax(numbers4));