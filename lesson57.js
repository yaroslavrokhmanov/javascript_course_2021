// "use strict";

// //=======Задача 57.1

// let obj = {};
// obj['Понедельник'] = 1;
// obj['Вторник'] = 2;
// obj['Среда'] = 3;
// obj['Четверг'] = 4;
// obj['Пятница'] = 5;
// obj['Суббота'] = 6;
// obj['Воскресенье'] = 7;
// console.log(obj);

// //=======Задача 57.2
// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for(let i = 0; i<=6; i++){

// let key = arr1[i];
// let value = arr2[i];

// obj[key] = value;
// }
// console.log(obj);

// //=======Задача 57.3
// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for(let i = 0; i<=6; i++){

// let key = arr2[i];
// let value = arr1[i];

// obj[key] = value;
// }
// console.log(obj);

// //=======Задача 57.4

// let obj = {'a': 12, 'b': 21, 'c': 13, 'd': 23, 'e': 17};
// let result = {};

// for(let key in obj){
//  if(obj[key] >= 10 && obj[key] <= 20){
// result[key] = obj[key];
// }
// }
// console.log(result);

// //=======Задача 57.5
// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
// let result = {};

// for(let key in obj){
//  if(key % 2!== 0){
// result[key] = obj[key];
// }
// }
// console.log(result);

// //=======Задача 57.6
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};

// for(let key in obj){
// obj[key] = obj[key] * obj[key];
// }
// console.log(obj);

// //=======Задача 57.7
// let obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
// let result = {};
// for(let key in obj){
// result[obj[key]]=key;
// }
// console.log(result);