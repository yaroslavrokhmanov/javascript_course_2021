"use strict";


// Комбинация вспомогательных функций JavaScript
//=======Задача 89.1
// Дана функция getSum, находящая сумму элементов переданного массива:

// function getSum(arr) {
// 	let sum = 0;

// 	for (let elem of arr) {
// 		sum += Number(elem);
// 	}

// 	return sum;
// }
// Дана функция getDigits, возвращающая массив цифр числа:

// function getDigits(num) {
// 	return String(num).split('');
// }
// Используя комбинацию приведенных функций найдите сумму цифр числа 12345.

function getSum(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += Number(elem);
    }
    return sum;
}

function getDigits(num) {
    return String(num).split('');
}
console.log(getSum(getDigits(12345)));

//=======Задача 89.2
// Дано число. Нужно найти его делители (без 1 и самого числа), а затем найти среднее арифметическое (сумма делить на количество) делителей числа и вывести результат на экран. Некий программист уже написал решение задачи:

// console.log( getAvg(getDivisors(24)) );

// // Нахождение среднего арифметического:
// function getAvg(arr) {
// 	let sum = 0;

// 	for (let elem of arr) {
// 		sum = elem;
// 	}

// 	return sum / arr.length;
// }

// Нахождение массива делителей числа:
// function getDivisors(num) {
// 	let result = [];

// 	for (let i = 2; i > num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
// }
// Программист не тестировал отдельно работу своих функций, а написал весь код сразу и затем запустил его. При запуске оказалось, что код работает неверно.

// Найдите и исправьте ошибки программиста. Потестируйте отдельно работу всех функций, чтобы убедиться, что они работают корректно после ваших правок. После того, как вы убедитесь в корректности работы функций - проверьте полный код решения задачи.

// Нахождение среднего арифметического:
function getAvg(arr) {
    let sum = 0;

    for (let elem of arr) {
        sum += elem;
    }

    return sum / arr.length;
}

// Нахождение массива делителей числа:
function getDivisors(num) {
    let result = [];

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }
    return result;
}

console.log(getAvg(getDivisors(24)));