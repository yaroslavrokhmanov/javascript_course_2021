"use strict";

// Перемешивание массива на JavaScript
// Задача 96.1
// Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код функции getRandomInt скопируйте из учебника.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(arr) {
    let result = [];

    while (arr.length > 0) {
        let random = getRandomInt(0, arr.length - 1);
        let elem = arr.splice(random, 1)[0];
        result.push(elem)
    }
    return result;

}

console.log(shuffle([1, 2, 3, 4, 5]));

// Задача 96.2
// Сделайте функцию range принимающую параметрами 2 целых числа - начало и конец диапазона, и возвращающую массив, заполненный целыми числами из этого диапазона.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function range(num1, num2) {
    let result = [];

    for (let i = num1; i <= num2; i++) {
        result.push(getRandomInt(num1, num2));
    }
    return result;
}

console.log(range(6, 12));


// Задача 96.3
// Сделайте функцию rangeRand, возвращающую массив, заполненный случайными целыми числами из заданного диапазона. При этом числа не должны повторяться. Для решения задачи используйте комбинацию функций range и shuffle.