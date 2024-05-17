

let arr = [[7, 0], [7, 1], [7, 2], [7, 3]];
// let arr = [[2, 2], [2, 3], [2, 4]];

function move(coord=[]) {
    console.log('move', arr);
    const y = coord[0];
    const x = coord[1];
    let temp = [];
    temp.push(...arr[0]);
    arr[0][0] += y;
    arr[0][1] += x;

    for (let i = 1; i < arr.length; i++) {
        const arr_temp = arr[i];
        arr[i] = temp;
        temp = arr_temp;
    }
    return arr;
}

function add() {
    let temp = [];
    temp.push(...arr[arr.length - 1]);
    arr.push(temp);
}

add();
console.log('arr', arr);

console.log('-', move([1, 0]));
console.log('-', move([-1, 0]));
console.log('-', move([0, -1]));
console.log('-', move([-1, 0]));
// console.log(move());
