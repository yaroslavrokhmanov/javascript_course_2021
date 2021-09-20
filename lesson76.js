"use strict";

// Практика на использования изученных методов
// Регистр символов

//=======Задача 76.1
// Преобразуйте последнюю букву строки в верхний регистр.
let str = 'london';
let result = str.slice(0, -1) + str.slice(-1 ).toUpperCase();
console.log(result);

//=======Задача 76.2
// Преобразуйте первые 2 буквы строки в верхний регистр.
let str = 'london';
let result = str.slice(0, 2).toUpperCase() + str.slice(2);
console.log(result);

//=======Задача 76.3
// Пусть дана строка, у которой первая буква в верхнем регистре, например вот такая:
// let str = 'London';
// Преобразуйте первую букву строки в нижний регистр.
let str = 'London';
let result = str.slice(0, 1).toLowerCase() + str.slice(1);
console.log(result);

// Слова в строке
//=======Задача 76.4
// Самостоятельно, не подсматривая в мой код, повторите мое решение описанной задачи.
let str = 'word1 word2 word3';
let str1 = str.split('');
for(let i=0; i<str.length; i++){
str1[i] = str1[i].slice(0, 1).toUpperCase()+str1[i].slice(1);
}
let result = str1.join('');
console.log(result);

//=======Задача 76.5
// Преобразуйте строку 'var_test_text' в 'VarTestText'.
// Написанный код должен работать для любых строк такого типа (то есть для строк, в которых слова разделены символов подчеркивания).
let str = 'var_test_text';
let words = str.split('_');
for(let i=0; i<words.length; i++){
words[i] = words[i].slice(0, 1).toUpperCase()+words[i].slice(1);
}
let result = words.join('')
console.log(result);

//=======Задача 76.6
// Модифицируйте предыдущую задачу так, чтобы первая буква новой строки была в нижнем регистре.
let str = 'var_test_text';
let words = str.split('_');
for(let i=0; i<words.length; i++){
words[i] = words[i].slice(0, 1).toUpperCase()+words[i].slice(1);
}
let result = words.join('')
result = result.slice(0, 1).toLowerCase()+ result.slice(1)
console.log(result);

// Переворот строки
//=======Задача 76.7
// Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.
let str = 'Yaroslav';
let result = str.split('').reverse().join('');
console.log(result);
