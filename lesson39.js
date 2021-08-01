// "use strict";

// //=======Задача 39.1
// let arr = ['a', 'b', 'c', 'd', 'e'];
// for(let i = 0; i < arr.length; i++){
// console.log(arr[i]);
// }

// //=======Задача 39.2
// let arr = [1, 2, 3, 4, 5];	
// for (let i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// //=======Задача 39.3
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] % 2 !== 0) {
// 		console.log(arr[i]);
// 	}
// }

// //=======Задача 39.4
// let arr = [1, 2, 3, 4, 5];
// let result = 1;
// for(let i = 0; i<arr.length; i++){
// result *= arr[i];
// console.log(result);
// }

// //=======Задача 39.5
// let arr = [1, 2, 3, 4, 5];
// let result = 0;
// let square = 0;
// for(let i = 0; i< arr.length; i++){
// square = arr[i]*arr[i];
// result = result+square;
// }
// console.log('Сумма квадратов элементов этого массива = ' + result);

// //=======Задача 39.6
// let arr = [2, 5, 9, 15, 15, 1, 4];
// for(let i=0; i<arr.length; i++){
// if(arr[i]>3 && arr[i]<10){
// console.log(arr[i]);
// }
// }

// //=======Задача 39.7
// let arr = [1, 2, -3, 4, -5, 6, 7, -8, 9, 10];
// let result = 0;
// for(let i=0; i<arr.length; i++){
// if(arr[i]>0){
// result = result + arr[i]
// }
// }
// console.log(result);

// //=======Задача 39.8
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// result = 0;
// for(let i=0; i<arr.length; i++){
// sum = sum + arr[i];
// result = sum / arr.length ;
// }
// console.log('сумма: ' + sum);
// console.log('количество: ' + arr.length);
// console.log('среднее арифметическое: ' + result);

// //=======Задача 39.9
// let arr = [10, 20, 30, 50, 235, 3000];
// let el = arr.length;
// let str='';
// for(let i=0; i<el; i++){
// str = arr[i] + '';
// if(str[0]=='1'|| str[0]=='2'|| str[0]=='5'){
// document.write(str + ', ');
// console.log(Number(str));
// }
// }

// //=======Задача 39.10
// let arr = [10, 20, 30, 50, 235, 3000];
// arr = arr.reverse();
// console.log(arr);

// //=======Задача 39.11
// let arr = [10, 20, 2, 50, 235, 5, 6, 6, 8];
// for(let i=0; i<arr.length; i++){
// if(arr[i]==i){
// console.log(arr[i]);
// }
// }

// //=======Задача 39.12
// let arr = [10, 20, 30, 50, 235, 3000];
// for(let i=0; i<arr.length; i++){
// document.write(arr[i]+'</br>');
// }

// //=======Задача 39.13
// let arr = [10, 20, 30, 50, 235, 3000];
// for(let i=0; i<arr.length; i++){
// document.write(arr[i]+'<p>');
// }
// //=======Задача 39.14
// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскрисение'];
// for(let i = 0; i < arr.length; i++){
// if(arr[i]=='Суббота'|| arr[i]=='Воскрисение'){
// document.write(arr[i].bold() + ', ' + '<p>');
// }else{
// document.write(arr[i] + ', ' + '<p>');
// }
// }
// //=======Задача 39.15
// let arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскрисение'];
// let day = '';
// for(let i = 0; i < arr.length; i++){
// if(arr[i]=='Воскрисение'){
// day = day +arr[i].italics() + ', ' + '<p>'
// }else{
// document.write(arr[i] + ', ' + '<p>');
// }
// }

// document.write(day);
