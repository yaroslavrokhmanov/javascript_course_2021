"use strict";

// Случайные элементы из массива на JavaScript

// Задача 97.1
// Самостоятельно, не подсматривая в мой код, реализуйте описанную функцию. При решении задачи код функций getRandomInt и shuffle скопируйте из учебника.

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randoms(arr, length) {
    return first(shuffle(arr), length)
}

function first(arr, length) {
    return arr.slice(0, length);
}

function shuffle(arr) {
    let result = [];
    while (arr.length > 0) {
        let random = getRandomInt(0, arr.length - 1);
        let elem = arr.splice(random, 1)[0];
        result.push(elem);
    }
    return result;
}

console.log(randoms([1, 2, 3, 4, 5], 3));