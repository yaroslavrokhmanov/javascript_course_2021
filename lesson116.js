// Правильное использование функций JavaScript
// Практические задачи

// ------------Задача 1---------------------

// Дана функция, проверяющая числа на простоту:
// С помощью приведенной функции найдите все простые числа в интервале от 1 до 100.

function isPrime(num) {
	for (let i = 2; i < num; i++) {
		if (num % i == 0) {
			return false;
		}
	}
	    return true;
}

let result = [];

for(let i = 1; i <= 100; i++){
    if(isPrime(i)){
    result.push(i);
    }
}
console.log(result);


// ---------------------Задача 2--------------
// Дана функция getDigitsSum, которая параметром принимает целое число и возвращает сумму его /цифр:
// С помощью приведенной функции getDigitsSum найдите все года от 1 до 2030, сумма цифр которых равна 13.

function getDigitsSum(num) {
	let sum = 0;
	let digits = String(num).split('');
	
	for (let digit of digits) {
		sum += Number(digit);
	}
	
	return sum;
}
let result = [];

for(let i = 1; i <= 2030; i++){
    if(getDigitsSum(i) == 13){
    result.push(i);    
    }
}
console.log(result);

// Задача 3

// Пусть дан какой-то массив с числами, например, такой:
// [123, 456, 789]
// Давайте сделаем так, чтобы цифры в каждом элементе массива были в обратном порядке. То есть из нашего массива сделаем следующий:
// [321, 654, 987]
// Некий программист уже написал код, реализующий описанную задачу:
// Переделайте приведенный код так, чтобы переворот числа выполняла отдельная функция.

let nums = [123, 456, 789];
    let result = [];
    
function reverseNumber(num){
     return String(num).split('').reverse().join('');  
}

for(let num of nums){
    result.push(reverseNumber(num))
}

console.log(result);

// Задача 4
// Даны два числа. Необходимо проверить, равна ли сумма цифр первого числа сумме цифр второго числа. Некий программист уже написал решение задачи, вот оно:

let num1 = 234;
let num2 = 531;

let digits1 = String(num1).split('');
let digitsSum1 = 0;
for (let digit1 of digits1) {
	digitsSum1 += Number(digit1);
}

let digits2 = String(num1).split('');
let digitsSum2 = 0;
for (let digit2 of digits2) {
	digitsSum2 += Number(digit2);
}

if (digitsSum1 == digitsSum2) {
	alert('суммы цифр совпадают');
} else {
	alert('суммы цифр не совпадают');
}
В чем недостатки приведенного кода? Переделайте код так, чтобы он был более удачным.