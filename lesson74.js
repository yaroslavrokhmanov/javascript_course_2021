"use strict";

//=======Задача 74.1
// Дана строка 'js'. Сделайте из нее строку 'JS'.
let str = 'js';
console.log(str.toUpperCase());

//=======Задача 74.2
// Дана строка 'JS'. Сделайте из нее строку 'js'.
let str = 'JS';
console.log(str.toLowerCase());

//=======Задача 74.3
// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).

let str = 'я учу javascript!';
console.log(str.substr(0, 5) + str.substr( -12, 11));
console.log(str.substring(0, 5) + str.substring(5, 16));
console.log(str.slice(0, 5) + ' ' + str.slice(6, 16));

//=======Задача 74.4
// Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.
let str = 'abcde';
console.log(str.indexOf('c'));

//=======Задача 74.5
// Дана строка. Проверьте, есть ли в этой строке символ 'a'.
let str = 'abcde';
if(str.indexOf('a')!=-1){
console.log('Yes');
}else{
console.log('No');
}

//=======Задача 74.6
// Дана строка. Проверьте, начинается ли эта строка с символа 'a'.
let str = 'abcde';
if(str.indexOf('a') == 0){
console.log('Yes');
}else{
console.log('No');
}

//=======Задача 74.7
// Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.
let str = 'abcdea';
if(str.lastIndexOf('a') == str.length -1){
console.log('Yes');
}else{
console.log('No');
}

//=======Задача 74.8
// Дана строка. Проверьте, начинается ли эта строка на http://.
let str = 'http://jsbin.com';
if(str.indexOf('http://') == 0){
console.log('Yes');
}else{
console.log('No');
}

//=======Задача 74.9
// Дана строка. Проверьте, заканчивается ли эта строка на .html.
let str = 'http://jsbin.html';
if(str.lastIndexOf('.html') == str.length - 5){
console.log('Yes');
}else{
console.log('No');
}

//=======Задача 74.10
// Дана строка. Проверьте, начинается ли эта строка на http://.
let str = 'http://jsbin.com';

if(str.startsWith('http://') == true){
console.log('Yes');
}else{
console.log('No');
}
    
//=======Задача 74.11
// Дана строка. Проверьте, заканчивается ли эта строка на .html.
let str = 'http://jsbin.html';

if(str.endsWith('.html') == true){
console.log('Yes');
}else{
console.log('No');
}
    
//=======Задача 74.12
// Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.
let str = '1-2-3-4-5';
console.log(str.split('-'));    

//=======Задача 74.13
// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
let str = '12345';
console.log(str.split('')); 

//=======Задача 74.14
// Дан следующий массив:
// let arr = [1, 2, 3, 4, 5];
// С помощью метода join слейте его в строку '1-2-3-4-5'.
let arr = [1, 2, 3, 4, 5];
let str = arr.join('-');
console.log(str);   