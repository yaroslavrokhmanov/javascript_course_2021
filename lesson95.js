"use strict";

// Случайный элемент из массива на JavaScript

// Задача 95.1
// Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код функции getRandomInt скопируйте из учебника.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}

let arr = [1, 2, 3, 4, 5];
console.log(random(arr));

// Задача 95.2

// Используя созданную функцию, найдите сумму трех случайных элементов из массива.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function random(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}

let arr = [1, 2, 3, 4, 5];
let result = 0;
for (elem of arr) {
    result += random(arr);
}

console.log(result);