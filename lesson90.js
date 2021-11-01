"use strict";


//Вспомогательные функции внутри других функций в JavaScript

//=======Задача 90.1
// Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.

let arr = [12, 19, 28, 13, 14, 345, 10];
let result = [];

function inRange(num) {
    let sum = getSum(getDigitals(num));
    return sum >= 1 && sum <= 9;
}

function getSum(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += Number(elem);
    }
    return sum;
}

function getDigitals(num) {
    return String(num).split('');
}

for (let elem of arr) {
    if (inRange(elem)) {
        result.push(elem);
    }
}

console.log(result);

// Result: [12, 13, 14, 10]