"use strict";

//=======Задача 67.1
// Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

let arr = [];
for(let i = 0; i < 3; i++){
arr[i] = [];
for(let j = 0; j < 5; j++){
arr[i].push(j+1);
}
}
console.log(arr);

//=======Задача 67.2
// Сформируйте с помощью двух вложенных циклов следующий массив:
// [['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x'], ['x', 'x', 'x', 'x']]
// ==============================
let arr = [];
for(let i = 0; i < 3; i++){
arr[i] = [];
for(let j = 0; j < 4; j++){
arr[i].push('x');
}
}
console.log(arr);

//=======Задача 67.3
// Сформируйте с помощью трех вложенных циклов следующий массив:
// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]
//=====================================
let arr = [];
for(let i = 0; i < 3; i++){
arr[i] = [];
for(let j = 0; j < 2; j++){
arr[i].push([]);
for(let k = 1; k <= 5; k++){
arr[i][j].push(k);
}
}
}
console.log(arr);

//=======Задача 67.4
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//=============================

let arr = [];

for (let i = 0; i < 3; i++) {
arr[i] = [];
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

//=======Задача 67.5
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = '';
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//================================

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

//=======Задача 67.6
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i];	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//=============================================

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i]=[];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

//=======Задача 67.7
// Автор следующего кода хотел сделать двухмерный массив:

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[j] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
// ======================================

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

//=======Задача 67.8
// Автор следующего кода хотел сделать двухмерный массив:
// let arr;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];	
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j + 1;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//================================

let arr=[];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[i][j] = j + 1;
	}
}

console.log(arr);

//=======Задача 67.9
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] == [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//===================================

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

//=======Задача 67.10
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr = [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//================================

let arr = [];

for (let i = 0; i < 3; i++) {
	arr = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

//=======Задача 67.11
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = '';
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];	
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//=================================

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[i][j] = j;
	}
}

console.log(arr);

//=======Задача 67.12
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
	
// 	for (let j = 1; j <= 5; j++) {
// 		arr.push(j);
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//===============================

let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 1; j <= 5; j++) {
		arr[i].push(j);
	}
}

console.log(arr);

//=======Задача 67.13
// Автор следующего кода хотел сделать двухмерный массив:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j <= 5; j++) {
// 		arr[j][i] = j;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//=====================================
let arr = [];

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[i][j] = j;
	}
}

console.log(arr);

//=======Задача 67.14
// Автор следующего кода хотел сделать двухмерный массив:
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];	
// 	for (let j = 0; j <= 5; j++) {
// 		arr[i][j] = j;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//================================

let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 5; j++) {
		arr[i][j] = j;
	}
}

console.log(arr);

//=======Задача 67.15
// Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2], [3, 4], [5, 6], [7, 8]]
//==================================

let arr = [];
for (let i = 0, k = 1; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j <= 2; j++) {           ​
               ​arr[i][j] = k++;
}
}

console.log(arr);

//=======Задача 67.16
// Сформируйте с помощью двух вложенных циклов следующий массив:
// [[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
//===================================

let arr = [];
for (let i = 0, k = 1; i < 4; i++) {
arr[i] = [];
for (let j = 0; j < 3; j++) {
arr[i][j] = k+1;
k = k+2;
}
}

console.log(arr);

//=======Задача 67.17
// Сформируйте с помощью трех вложенных циклов следующий трехмерный массив:
// [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
//=====================================

let arr = [];
let count = 1;

for (let i = 0; i <1; i++) {
	arr[i] = [];
	
for (let j = 0; j < 4; j++) { 
        arr[i][j] = [];
for (let k = 0; k < 2; k++){
        arr[i][j][k] = count;
count++;

}
}
}

console.log(arr);

//=======Задача 67.18
// Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//======================================

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);

//=======Задача 67.19
// Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//=================================

let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
k++;
	}
}

console.log(arr);

//=======Задача 67.20
// Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k--;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//================================

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}
console.log(arr);

//=======Задача 67.21
// Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
// let arr = [];
// let k;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.

let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);

//=======Задача 67.22
// Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//================================
let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
k++;
	}
}

console.log(arr);

//=======Задача 67.23
// Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0, k++; j < 3; j++) {
// 		arr[i][j] = k;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//====================================

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
k++;
	}
}

console.log(arr);

//=======Задача 67.24
// Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];	
// 	for (let j = 0; j < 3; j++; k++) {
// 		arr[i][j] = k;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//================================================

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3;  j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);

//=======Задача 67.25
// Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = ++k;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//==========================================

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i]= [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);

//=======Задача 67.26
// Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
// 	arr[k] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i][j] = k;
// 		k++;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//======================================

let arr = [];
let k = 1;

for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);

//=======Задача 67.27
// Автор следующего кода хотел сделать массив [[1, 2, 3], [4, 5, 6], [7, 8, 9]]:
// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];	
// 	for (let j = 0; j < 3; k++) {
// 		arr[i][j] = k;
// 	}
// }
// console.log(arr);
// Написанный код, однако, не делает задуманного. Найдите и исправьте ошибку автора.
//================================

let arr = [];
let k = 1;
for (let i = 0; i < 3; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 3; j++) {
		arr[i][j] = k;
		k++;
	}
}

console.log(arr);

