"use strict";

// Дружественные числа на JavaScript
// Имея описанные функции, я легко смогу найти сумму делителей любого числа:

// let sum1 = getSum(getOwnDivisors(220));
// let sum2 = getSum(getOwnDivisors(284));
// Со вспомогательными функциями написать код функции isFreindly не составит труда:

// function isFreindly(num1, num2) {
// 	let sum1 = getSum(getOwnDivisors(num1));
// 	let sum2 = getSum(getOwnDivisors(num2));

// 	if (sum1 == num2 && sum2 == num1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// function getOwnDivisors(num) {
// 	// тут будет какой-то код
// }

// function getSum(arr) {
// 	// тут будет какой-то код
// }

//=======Задача 91.1
// Реализуйте функцию getOwnDivisors. Потестируйте ее работу.

function getOwnDivisors(num) {
    let getOwnDivisorsArr = [];
    for (let i = 1; i < num; i++) {
        if (num % i == 0) {
            getOwnDivisorsArr.push(i);
        }
    }
    return getOwnDivisorsArr;
}

console.log(getOwnDivisors(220));

// Result: [1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110]


//=======Задача 91.2
function getSum(arr) {
    let result = 0;
    for (elem of arr) {
        result += elem;
    }
    return result;
}
console.log(getSum([1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110]));


//=======Задача 91.3
function isFriendly(num1, num2) {

    let sum1 = getSum(getOwnDivisors(220));
    let sum2 = getSum(getOwnDivisors(284));

    if (sum1 == num2 && num2 == sum1) {
        return true;
    } else {
        return false;
    }
}
console.log(isFriendly(220, 284));

//=======Задача 91.4
// Не решено!

//=======Задача 91.5
// Не решено!