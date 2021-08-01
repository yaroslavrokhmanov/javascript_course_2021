// "use strict";

// // =======Задача 64.1
// for(let i = 1; i<101; i++){
//     console.log(i);
//     }

// //=======Задача 64.2
// for(let i = 100; i>0; i--){
//     console.log(i);
//     }
    
// //=======Задача 64.3
// for(let i=1; i<=100; i++){
//     if(i % 2 === 0){
//     console.log(i);
//     }
//     }

// //=======Задача 64.4
// let arr = [];
// for(let i=0; i<10; i++){
// arr = arr + 'x';
// document.write(arr[i]);
// }

// //=======Задача 64.5
// let arr = [];
// for(let i=1; i<=10; i++){
// arr = arr+i;
// }
// console.log(Number(arr));

// //=======Задача 64.6
// let arr = [-74, 1, 2, 3, 4, 5, 6, 7, 8, -9, 9, 10, 158];
// let arr1 = [];
// for(let elem of arr){
// if(elem>0 && elem<10){
// arr1.push(elem);
// }
// }
// console.log(arr1);

// //=======Задача 64.7
// let arr = [-74, 1, 2, 3, 4, 5, 6, 7, 8, -9, 9, 10, 158];
// let arr1 = [];
// for(let elem of arr){
// if(elem == 5){
// arr1.push(elem);
// }
// }
// console.log(arr1);

// //=======Задача 64.8
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = 0;
// for(elem of arr){
// result = result + elem;
// }
// console.log(result);

// //=======Задача 64.9
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let result = [];
// for(let i=0; i<arr.length; i++){
// let elem = arr[i]*arr[i];
// result.push(elem);
// }
// console.log(result);
// let sum = 0;
// for(let j=0; j<result.length; j++){
// sum = sum + result[j];
// }
// console.log(sum);
// //=======Задача 64.10
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for(let i=0; i<arr.length; i++){
// sum = sum + arr[i]
// result = sum / arr.length;
// }

// console.log(sum);
// console.log(result);

// //=======Задача 64.11
// let fact = 4;
// let result = 1;
// for (let i = 1; i <= fact; i++) {
// result = result * i;
// console.log(i);
// }
// console.log('Факториал ' + result);

