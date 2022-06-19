"use strict";

// Дружественные числа на JavaScript
// В данном уроке мы снова потренируемся в решении сложных задач с использованием вспомогательных функций.
// Решим задачу на определение дружественных чисел. Числа являются дружественными, если сумма собственных делителей (с числом 1, но без самого числа) первого числа равна второму числу и, наоборот, сумма делителей второго числа равна первому.
// Примером таких чисел может служить пара 220 и 284. Собственными делителями числа 220 являются следующие числа: 1, 2, 4, 5, 10, 11, 20, 22, 44, 55, 110. Сумма этих чисел 284. Собственными делителями числа 284, являются числа 1, 2, 4, 71, 142 и сумма этих чисел равна 220.


// ========== Задача 1 ==========
// Реализуйте функцию getOwnDivisors. Потестируйте ее работу.

// ========== Задача 2 ==========
// Реализуйте функцию getSum. Потестируйте ее работу.

// ========== Задача 3 ==========
// Проверьте работу функции isFreindly.


function isFriendly(num1, num2){
    let sum1 = getSum(getDivisors(num1));  
    let sum2 = getSum(getDivisors(num2));  
      return sum1 == num2 && sum2 == num1;
      }
  
  console.log(isFriendly(220, 284)); //true
  
  function getDivisors(num){
      let arr = [];
          for(let i = 1; i < num; i++){
          if(num % i == 0){
              arr.push(i);
          }     
          }
      return arr;    
  }
  
  console.log(getDivisors(284)); //[ 1, 2, 4, 71, 142 ]
  console.log(getSum(getDivisors(220))); ///284
  
  function getSum(arr){
      let sum = 0;
      for(let i = 0; i < arr.length; i++){
          sum += arr[i];
      }
      return sum;
  }
  console.log(getSum([1, 2, 3, 4])); //10

 