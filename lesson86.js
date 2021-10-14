"use strict";

//=======Задача 86.1
// Напишите функцию, которая будет находить сумму квадратов элементов массива.
let arr = [2, 3, 4];
function getSum(arr){
let sum = 0;
for(elem of arr){
sum += elem * elem; 
}
return sum;
}
console.log(getSum(arr));

//=======Задача 86.2
// Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр.

function getDigitsSum(num){
let result = 0;
num = String(num);
for(let i=0; i< num.length; i++){
result += Number(num[i]);
console.log(result)
}
return result;
}
console.log(getDigitsSum(12345));

//=======Задача 86.3
// Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить следующий массив:
// [1, 2, 3, 4, 6, 8, 12, 24]

function getDivisors(num){
    let result = [];
    for(let i=1; i<=num; i++){
    if(num%i==0){
    result.push(i);
    }
    }
    return result;
    }
    console.log(getDivisors(24));

    //Result:[1, 2, 3, 4, 6, 8, 12, 24]

//=======Задача 86.4
// Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript.

function reverseStr(elem){
let result = '';
result = result + elem.split('').reverse().join('');
return result;
}
console.log(reverseStr('United Station'));

//=======Задача 86.5
// Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением.
function delElem(num, arr){
    for(let i=0; i<arr.length; i++){
    if(arr[i]==num) arr.splice(i, 1);
    
    }
    return arr;
    }
    console.log(delElem(50, [10, 20, 30, 40, 50, 60]));

    // Result: [10, 20, 30, 40, 60]
    
//=======Задача 86.6
// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции:
// console.log(func(5)); // выведет [1, 2, 3, 4, 5]

function func(num){
    let arr = [];
    for(let i=0; i<num; i++){
    arr[i] = i+1;
    }
    return arr;
    }
    console.log(func(5));

//=======Задача 86.7
// Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел. Пример работы такой функции:
// console.log(func(3, 7)); 
//  выведет [3, 4, 5, 6, 7]

function func(num1, num2){
let arr = [];
for(let i=num1; i<=num2; i++){
arr.push(i);
}
return arr;
}
console.log(func(3, 7));
