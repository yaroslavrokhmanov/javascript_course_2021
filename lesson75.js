"use strict";

// Методы для массивов в JavaScript
// Работа с push, unshift

//=======Задача 75.1
// Дан следующий массив:
// [1, 2, 3]
// Добавьте ему в конец элементы 4, 5, 6.
let arr = [1, 2, 3];
arr.push(4, 5, 6);
console.log(arr);        

//=======Задача 75.2
// Дан следующий массив:
// [1, 2, 3]
// Добавьте ему в начало элементы 4, 5, 6.
let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
console.log(arr);  

// Работа с shift, pop
//=======Задача 75.3
// Дан следующий массив:
// [1, 2, 3]
// Выведите на экран первый элемент этого массива.
let arr = [1, 2, 3];
let result = arr.shift();
console.log(result);    

//=======Задача 75.4
// Дан следующий массив:
// [1, 2, 3]
// Выведите на экран последний элемент этого массива.
let arr = [1, 2, 3];
let result = arr.pop();
console.log(result);  

// Работа с slice
//=======Задача 75.5
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Сделайте из этого массива следующий:
// [1, 2, 3]
let arr = [1, 2, 3, 4, 5];
let result = arr.slice(0, 3);
console.log(result);

//=======Задача 75.6
// [1, 2, 3, 4, 5]
// Используя этот массив, запишите в новую переменную следующий массив:
// [4, 5]
let arr = [1, 2, 3, 4, 5];
let result = arr.slice(3, 5);
console.log(result);

// Работа с splice
//=======Задача 75.7
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice преобразуйте массив в следующий:
// [1, 4, 5]
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 3, 4);
console.log(arr);

//=======Задача 75.8
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice сделайте из него массив:
// [1, 2, 3, 'a', 'b', 'c', 4, 5]
let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0,'a', 'b', 'c');
console.log(arr);

//=======Задача 75.9
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода splice сделайте из него массив:
// [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0,'a','b');
arr.splice(6, 0, 'c');
arr.splice(8, 0, 'e');
console.log(arr);

// Работа с indexOf
//=======Задача 75.10
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Найдите позицию числа 3 в этом массиве.
let arr = [1, 2, 3, 4, 5];
let result = arr.indexOf(3);
console.log(result);

// Работа с includes
//=======Задача 75.11
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// Проверьте, есть ли в этом массиве число 3.
let arr = [1, 2, 3, 4, 5];
let result = arr.includes(3);
console.log(result);