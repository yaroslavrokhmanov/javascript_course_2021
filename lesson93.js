"use strict";

// Задача 93.1
// Самостоятельно, не подсматривая в мой код, повторите решение описанной задачи.

function getDiff(arr1, arr2) {
    let diff1 = getFirstDiff(arr1, arr2);
    let diff2 = getFirstDiff(arr2, arr1);
    return [].concat(diff1, diff2);
}

function getFirstDiff(arr1, arr2) {
    let result = [];

    for (let elem of arr1) {
        if (!inArray(elem, arr2)) {
            result.push(elem);
        }
    }
    return result;
}

function inArray(elem, arr) {
    return arr.indexOf(elem) !== -1;
}
console.log(getDiff([1, 2, 3], [2, 3, 4, 5]));