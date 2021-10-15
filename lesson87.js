"use strict";

//=======Задача 87.1
// Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами.

function func(arr) {
    for (let elem of arr) {
        if (elem % 2 != 0) {
            console.log('не четные числа');
            return false;
        }
    }
    console.log('четные числа');
    return true;
}

console.log(func([2, 4, 6, 8, 10]));
console.log(func([1, 2, 4, 6, 8, 10]));

//=======Задача 87.2
// Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.

function func(num) {
    num = String(num);
    for (let elem of num) {
        if (Number(elem) % 2 == 0) {
            return false;
        }
    }

    return true;
}
console.log(func(139));

//=======Задача 87.3
// Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд.

function func(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            console.log('есть совпадения');
            return true;
        }
    }
    console.log('нет совпадений');
    return false;
}
console.log(func([1, 5, 2, 6, 9, 12, 8, 8, 6, 3, 7]));