

let arr = [[7, 0], [7, 0], [7, 2], [7, 3]];
// let arr = [[2, 2], [2, 3], [2, 4]];

function move(coord=[]) {
    // console.log('arr', arr);
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

function f(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function isCollision() {
    for (let i = 1; i < arr.length; i++) {
        if (f(arr[0], arr[i])) {
            return true;
        }
    }
    return false;
}

// add();
console.log(isCollision());

// console.log(move([1, 0]));
// console.log(move([-1, 0]));
// console.log(move([0, -1]));
// console.log(move([-1, 0]));
// console.log(move());
