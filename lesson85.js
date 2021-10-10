// "use strict";

// Инструкция return в JavaScript

//=======Задача 85.1
// Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result.
function func(num){
    return num * num * num;
    }
    let result = func(3);
    alert(result);

// Использование функций в выражении

//=======Задача 85.2
// Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран.
function func(num){
    return Math.sqrt(num);
    }
    let result = func(3) + func(4);
    alert(result);


// Функции в функциях
//=======Задача 85.3
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function round(num) {
// 	return num.toFixed(3);
// }
// С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

function sqrt(num) {
    return Math.sqrt(num);
    }
    function round(num) {
    return num.toFixed(3);
    }
    
    console.log(round(sqrt(2)));

// //=======Задача 85.4
// Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел:

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result.
function sqrt(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

result = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(result);

//=======Задача 85.5
// Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:

// function round(num) {
// 	return num.toFixed(3);
// }
// С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части.
function sqrt(num) {
    return Math.sqrt(num);
}

function sum(num1, num2, num3) {
    return num1 + num2 + num3;
}

function round(num) {
   return num.toFixed(3);
}

result = sum(sqrt(2), sqrt(3), sqrt(4));

console.log(round(result));

// Тонкое место return

//=======Задача 85.6
// Что выведется на экран в результате выполнения следующего кода:

// function func(num) {
// 	return num;
	
// 	let result = num * num;
// 	return result;
// }
// alert( func(3) );
// Объясните почему.

3

//=======Задача 85.7
// Что выведет каждый из алертов в результате выполнения следующего кода:

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	} else {
// 		return num * num;
// 	}
// }

// alert( func(10) );
// alert( func(-5) );

100
5

//=======Задача 85.8
// Что выведет каждый из алертов в результате выполнения следующего кода:

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}
	
// 	return num * num;
// }

// alert( func(10) );
// alert( func(-5) );

100
5

//=======Задача 85.9
// Что выведется на экран в результате выполнения следующего кода:

// function func(num) {
// 	let sum = 0;
	
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }

// alert( func(5) );
// Объясните почему. Что хотел сделать автор данного кода? Исправьте ошибку автора.
function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
return sum;
}

console.log( func(5) );


// Применение return в цикле
//=======Задача 85.10
// Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата.
function func(n) {
    let result = 0;
    while (n > 10) {
      n /= 2;
      ++result;
    } 
    return result;
  }
  console.log(func(80));

   //Результат: 3


//=======Задача 85.11
// Дана следующая функция:

// function func(num1, num2) {
// 	let result;	
// 	if (num1 > 0 && num2 > 0) {
// 		result = num1 * num2;
// 	} else {
// 		result = num1 - num2;		
// 	return result;
// }
// alert(func(3, 4));
// Перепишите ее в сокращенной форме согласно изученной теории.

function func(num1, num2) {
	if (num1 > 0 && num2 > 0) {
		return  num1 * num2;
	} else {
		return  num1 - num2;
	}
}
alert(func(3, 4));

