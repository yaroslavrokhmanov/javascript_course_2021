"use strict";

//=======Задача 88.1
// Дана функция, проверяющая числа на простоту:

// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}

// 	return true;
// }
// С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.

function isPrime(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }

    return true;
}

for (let j = 0; j < 100; j++) {
    if (isPrime(j)) {
        console.log(j);
    }

}


//=======Задача 88.2
// Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его цифр:

// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');

// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}

// 	return sum;
// }
// С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.

function getDigitsSum(num) {
    let sum = 0;
    let digits = String(num).split('');

    for (let digit of digits) {
        sum += Number(digit);
    }

    return sum;
}

for (let j = 1; j <= 2030; j++) {
    if (getDigitsSum(j) == 13) {
        console.log(j);
    }
}


//=======Задача 88.3
// Пусть дан какой-то массив с числами, например, такой:

// [123, 456, 789]
// Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке. То есть из нашего массива сделаем следующий:

// [321, 654, 987]
// Некий программист уже написал код, реализующий описанную задачу:

// let nums = [123, 456, 789];

// let result = [];
// for (let num of nums) {
// 	result.push(String(num).split('').reverse().join(''));
// }

// console.log(result); // выведет [321, 654, 987]
// Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.



let result = [];

function func(nums) {
    for (let num of nums) {
        result.push(String(num).split('').reverse().join(''));
    }
    return result;
}

console.log(func([123, 456, 789]));



//=======Задача 88.4Даны два числа. Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа. Некий программист уже написал решение задачи, вот оно:

// let num1 = 234;
// let num2 = 531;

// let digits1 = String(num1).split('');
// let digitsSum1 = 0;
// for (let digit1 of digits1) {
// 	digitsSum1 += Number(digit1);
// }

// let digits2 = String(num1).split('');
// let digitsSum2 = 0;
// for (let digit2 of digits2) {
// 	digitsSum2 += Number(digit2);
// }

// if (digitsSum1 == digitsSum2) {
// 	alert('суммы цифр совпадают');
// } else {
// 	alert('суммы цифр не совпадают');
// }
// В чем недостатки приведенного кода? Переделайте код так, чтобы он был более удачным.



function res(sum1, sum2) {
    if (sum1 == sum2) {
        console.log('суммы цифр совпадают');
    } else {
        console.log('суммы цифр не совпадают');
    }
    return sum1 == sum2;
}

let num1 = 234;
let num2 = 531;

console.log(res(func1(num1), func2(num2)));

function func1(num1) {
    let digits1 = String(num1).split('');
    let digitsSum1 = 0;
    for (let digit1 of digits1) {
        digitsSum1 += Number(digit1);
    }
    return digitsSum1;
}

function func2(num2) {
    let digits2 = String(num1).split('');
    let digitsSum2 = 0;
    for (let digit2 of digits2) {
        digitsSum2 += Number(digit2);
    }
    return digitsSum2;
}


//=======Задача 88.5
// Дан массив с числами. Необходимо перебрать этот массив с числами и вывести в консоль нетривиальные делители этих чисел (то есть исключая число 1 и само число). Некий программист уже написал решение задачи:

// let nums = [12, 24, 35, 14];

// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }

// function getDivisors(num) {
// 	let result = [];

// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(num);
// 		}
// 	}

// 	return result;
// }
// Программист не тестировал отдельно работу функции getDivisors, а написал весь код сразу и затем запустил его. При запуске оказалось, что код работает как-то не так. Видимо, в функции getDivisors была допущена какая-то ошибка.

// Найдите и исправьте ошибку. Потестируйте отдельно функцию getDivisors, чтобы убедиться, что она работает корректно после вашей правки. После того, как вы убедитесь в корректности работы функции - проверьте полный код решения задачи.



let nums = [12, 24, 35, 14];

for (let num of nums) {
    console.log(num + ': ' + getDivisors(num).join(', '));
}

function getDivisors(num) {
    let result = [];

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            result.push(i);
        }
    }
    return result;
}