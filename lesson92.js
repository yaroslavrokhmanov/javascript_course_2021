"use strict";

// Задача 92.1
// Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.

function getInt(arr1, arr2) {
    let result = [];

    for (elem of arr1) {
        if (inArray(elem, arr2)) {
            result.push(elem);
        }
    }
    return result;
}

function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
}

console.log(getInt([1, 2, 3], [2, 3, 4, 5]));