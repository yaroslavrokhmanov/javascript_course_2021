// "use strict";

// //=======Задача 58.1
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
//     for(key in obj){
//         obj[key] = obj[key] + (obj[key]*10/100);
//     }
//     console.log(obj);
    
// //=======Задача 58.2
// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
//     for(key in obj){
// 	if(obj[key] <= 400){
//     obj[key] = obj[key] + (obj[key]*10/100);
// }
// }
// 	console.log(obj);

// //=======Задача 58.3
// 	let arr1 = [1, 2, 3, 4, 5];
// 	let arr2 = [6, 7, 8, 9, 10];
// 	let obj = {};
//     for(let i=0; i<=4; i++){
// 	let res1 = arr1[i];
// 	let res2 = arr2[i];   
// 	obj[res1] = res2; 
// }
// 	console.log(obj);

// //=======Задача 58.4
// let obj = {
// 	1: 6, 
// 	2: 7, 
// 	3: 8, 
// 	4: 9, 
// 	5: 10
// 	};
	
// 	let sum_key = 0;
// 	let sum_value = 0;
// 	let result = 0;
// 	for(let key in obj){
	
// 	sum_key = sum_key + +key;
// 	sum_value = sum_value + obj[key];
// 	result = sum_key / sum_value;
// 	}
// 	   console.log(sum_key);
// 	   console.log(sum_value);
// 	   console.log(result);

// //=======Задача 58.5
// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let arr1 = [];
// let arr2 = [];
//     for(key in obj){
//     arr1 = arr1+key;
//     arr2 = arr2+Number(obj[key]);
// }
//     console.log('Ключи обьекта = ' + arr1);
//     console.log('Значения обьекта = ' + arr2);
	
// //=======Задача 58.6
// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452
// };

// let res = [];
//     for(key in obj){
// let elem = String(obj[key]);
//     if(elem[0] == 1 || elem[0] == 2){
//     res.push(Number(elem));
// }
// }
//     console.log(res);
	
// //=======Задача 58.7
// 	let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};

// for (let i=0; i<arr.length; i++){

// 	obj[i+1] = arr[i];
// }
// 	console.log(obj);

// //=======Задача 58.8
// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};

// for (let i=0; i<arr.length; i++){
// let num = arr[i];
	
// obj[num] = i+1;
// }
// 	console.log(obj);
   