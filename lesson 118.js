"use strict";
// Вспомогательные функции внутри других функций в JavaScript

// ========== Задача 1 ==========
// Пусть у нас дан массив с числами. Решим следующую задачу: запишем в новый массив только те элементы, сумма цифр в которых от 1 до 9.

let arr = [12, 19, 28, 13, 14, 345];
let result = [];

function getDigits(num){
    return String(num).split('');
}

function getSum(arr){
    let sum = 0;
    
    for (elem of arr){
        sum += Number(elem);
    }
    return sum;
}

function inRange(num){
    let sum = getSum(getDigits(num))
return sum >= 1 && sum <=9;
}

for(let elem of arr){
    if(inRange(elem)){
        result.push(elem);
    }
}
console.log(result);
