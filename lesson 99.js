"use strict";


// Счастливые билеты любой длины на JavaScript

// Lesson 99.1
// Реализуйте описанную функцию. Потестируйте ее работу.

function isLucky(num) {
    num = String(num);
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < num.length / 2; i++) {
        sum1 = sum1 + Number(num + [i]);
    }

    for (y = num.length; y < num.length; y++) {
        sum2 = sum2 + Number(num[i]);

    }
    return sum1 == sum2;
}

console.log(isLucky('1203'));
console.log(isLucky('012003'));
console.log(isLucky('123006'));
console.log(isLucky('33'));