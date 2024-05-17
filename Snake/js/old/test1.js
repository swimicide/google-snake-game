

let arr = [[7, 0], [7, 1], [7, 2], [7, 3]];

function move(coord) {
    const y = coord[0];
    const x = coord[1];
    let temp = [];

    temp.push(...arr[0]);
    console.log('temp', temp);

    for (let i = 0; i < 2; i++) {
        temp.push(arr[0][i]);
    }
    arr[0][0] += y;
    arr[0][1] += x;
    
    console.log('temp', temp);

    for (let i = 1; i < arr.length; i++) {
        // console.log('arr[i]', arr[i]);
        // arr[i] = temp;
        // console.log('temp', temp);
        // temp = arr[i];
        // console.log('element', arr);
    }
}

move([1, 0]);