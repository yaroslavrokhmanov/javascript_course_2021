"use strict";

//Пересечение массивов на JavaScript

  // ========== Задача 1 ==========
//   Пусть у нас даны два массива:
// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4, 5];
// Можно заметить, что числа 2 и 3 присутствуют и в одном, и во втором массиве. Такие общие элементы называются пересечением массивов.

let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];

function getInt(){
    let result = [];
    
    for(let elem of arr1){
        if(inArray(elem, arr2)){
            result.push(elem);
        }
    }
    return result;
}

function inArray(elem, arr){
    return arr.indexOf(elem) !== -1;
}
console.log( getInt([1, 2, 3], [2, 3, 4, 5]) ); //[ 2, 3 ]