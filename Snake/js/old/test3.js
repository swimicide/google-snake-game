const array = [[0, 1], [2, 3], [4, 5]];
let arr = [];

arr = [...array[0]];

arr[0][0] += 1;
arr[0][1] += 1;

console.log(arr);
console.log(array);