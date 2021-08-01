// "use strict";

// //=======Задача 17.1
// let obj = {1: 'a', 2: 'b', 3: 'c'};
// console.log(obj);

// //=======Задача 17.2
// let obj = {a: 1, b: 2, c: 3};
// console.log(obj[a] + obj[b] + obj[c]);

// //=======Задача 17.3
// let obj = {'1a': 1, '2b': 2, 'c-c': 3};
// console.log(obj['1a'] + obj['2b'] + obj['c-c']);

// //=======Задача 17.4
// let obj = {'1a': 1, b2: 2, 'с-с': 3, d4: 4};
// console.log(obj['1a']);//1a - надо брать в кавычки
// console.log(obj['b2']);//b2 - можно не брать в кавычки а при вызове надо
// console.log(obj['с-с']);//с-с- надо брать в кавычки
// console.log(obj['d4']);//d4- можно не брать в кавычки а при вызове надо

// //=======Задача 17.5
// let obj = {key1: 1, key2: 2, key3: 3};
// console.log(obj.key1 + obj.key2 + obj.key3);

// //=======Задача 17.6
// let obj = {'1a': 1, b2: 2, 'eee-': 3, d4: 4};

// console.log(obj['1a']);//недопустимо обращение через свойство
// console.log(obj.b2);//допустимо обращение через свойство
// console.log(obj['eee-']);//недопустимо обращение через свойство
// console.log(obj.d4);//допустимо обращение через свойство

// //=======Задача 17.7
// let user = {name: 'Yaroslav ', surname: 'Rokhmanov ', patronymmic: 'Sergeevich'};
// alert(user['surname'] + user['name'] + user['patronymmic']);

// //=======Задача 17.8
// let date = {year: 2021, month: '04', day: 20};
// alert(date.year + '-' + date['month'] + '-' + date.day );

// //=======Задача 17.9
// let obj = {};
// obj.a =  1;
// obj.b =  2;
// obj.c =  3;
// console.log(obj);