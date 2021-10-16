"use strict";

//=======Задача 87.1
// function func(a, b) {
// 	if (a == b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

function func(a, b) {
    return a == b;
}

console.log(func(10, 10));

// result: true

//=======Задача 87.2
// Дана следующая функция:

// function func(a, b) {
// 	if (a != b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

function func(a, b) {
    return a != b;
}
console.log(func(110, 10));

// result: true

//=======Задача 87.3
// Дана следующая функция:
// function func(a, b) {
// 	if (a + b >= 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

function func(a, b) {
    return a + b >= 10;
}
console.log(func(1, 1));

// Result: false

//=======Задача 87.4
// Дана следующая функция:

// function func(num) {
// 	if (num >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// Перепишите ее код в сокращенной форме согласно изученной теории.

function func(num) {
    return num >= 0
}
console.log(func(20));

// Result: true