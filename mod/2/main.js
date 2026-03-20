import * as str from './stringUtils.js';

console.log('Работа со строками:');
console.log('capitalize("hello"):', str.capitalize('hello'));
console.log('capitalize("ПРИВЕТ"):', str.capitalize('ПРИВЕТ'));
console.log('reverse("JavaScript"):', str.reverse('JavaScript'));
console.log('reverse("12345"):', str.reverse('12345'));
console.log('Гласные буквы:', str.VOWELS);
console.log('Количество гласных:', str.VOWELS.length);