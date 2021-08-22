"use strict";

//=======Задача 73.1
// Возведите 2 в 10 степень.
console.log(Math.pow(2, 10));

//=======Задача 73.2
// Найдите квадратный корень из 245.
console.log(Math.sqrt(245));

//=======Задача 73.3
// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
let arr = [4, 2, 5, 19, 13, 0, 10];
let count = 0;
for(let key in arr){
count = count + arr[key];
}
console.log(Math.sqrt(count));

//=======Задача 73.4
// Найдите квадратный корень из 379. Результат округлите до целых, до десятых, до сотых.

let number = 379;
number = Math.sqrt(number);

console.log(Math.sqrt(number));
console.log(Math.round(number))
console.log(number.toFixed(1));
console.log(number.toFixed(2));

//=======Задача 73.5
// Найдите квадратный корень из 587. Округлите результат в большую и меньшую стороны, запишите результаты округления в объект с ключами 'floor' и 'ceil'.
// =============================
let number = 587;
let arr = {};
number_sqrt = Math.sqrt(587);
arr.ceil =  Math.ceil(number_sqrt);
arr.floor = Math.floor(number_sqrt);


console.log(arr.ceil);
console.log(arr.floor);

//=======Задача 73.6
// Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));
//=======Задача 73.7
// Выведите на экран случайное целое число от 1 до 100.

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(1, 100));

//=======Задача 73.8
// С помощью цикла заполните массив 10-ю случайными целыми числами.
let arr = [];
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
for(let i=0; i<10; i++){
arr.push(i+getRandomInt(0, 10));
}
console.log(arr);

//=======Задача 73.9
// Даны переменные a и b. Найдите найдите модуль разности a и b. Проверьте работу скрипта самостоятельно для различных a и b.
let a = 400;
let b = -200;
console.log(Math.abs(a-b));



