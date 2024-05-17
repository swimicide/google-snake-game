// https://www.google.com/search?si=ACC90nwm_DCLUGduakF5oU94y1HpDc2j-V_TsJpED11KWNYygOhydoKqqSH9t8iyybygqTEoKMZa&biw=977&bih=645&dpr=1

// 1. 보드판 규격
// 15x17

// 2. 뱀 그리기

// 3. 뱀 움직이기

// 4. 뱀 기준을 머리로

const gameBoard = document.querySelector('.gameBoard > ul');
const gameText = document.querySelector('.container > .game-text');
const restartButton = document.querySelector('.container > .game-text > button');
// const vegetable = 

const GAME_COLS = 17;
const GAME_ROWS = 15;


const COORD = //[
    [
        [7, 0], [7, 1], [7, 2], [7, 3]
    ];

    // [  
    //     [4, 0], [5, 0], [6, 0], [7, 0]
    // ],

    // [  
    //     [7, 0], [7, -1], [7, -2], [7, -3]
    // ],

    // [  
    //     [7, 0], [8, 0], [9, 0], [10, 0]
    // ]
// ];


// const SNAKECOORD = {
//     y: 0,
//     x: 0
//     direction: 0
// };

let Interval = 0;
let TempSnakeCoord = null;

init();

function init() {
    // TempSnakeCoord = {...SNAKECOORD};
    for (let i = 0; i < GAME_ROWS; i++) {
        const ul = document.createElement('ul');
        const li = document.createElement('li');
        for (let j = 0; j < GAME_COLS; j++) {
            const matrix = document.createElement('li');
            ul.prepend(matrix);
        }
        li.prepend(ul);
        gameBoard.prepend(li);
    }
    // console.log(gameBoard);
    // renderVegetable();
    // renderSnake();
}

// function renderVegetable() {
//     while (true) {
//         const y = Math.floor(Math.random() * 14);
//         const x = Math.floor(Math.random() * 16);
//         const target = gameBoard.childNodes[y].childNodes[0].childNodes[x];

//         if (!target.classList.contains('snake')) {
//             target.classList.add('vegetable');
//             return true;
//         }
//     }
// }

function renderSnake(move=[0, 0]) {

    // const cls = document.querySelectorAll('.snake');

    // cls.forEach(element => {
    //     element.classList.remove('snake');
    //     console.log('element',);
    // });

    let arr = []
    let temp = [];
    const y = move[0];
    const x = move[1];

    arr = [...COORD];
    temp.push(...arr[0]);
    arr[0][0] += y;
    arr[0][1] += x;
    console.log('before', ...arr);
    console.log('before', ...COORD);

    for (let i = 1; i < arr.length; i++) {
        const arr_temp = arr[i];
        arr[i] = temp;
        temp = arr_temp;
    }
    console.log('after', ...arr);
    console.log('after', ...COORD);

    // console.log(COORD);

    // for (let i = 1; i < arr.length; i++) {
    //     const arr_temp = arr[i];
    //     arr[i] = temp;
    //     temp = arr_temp;
    // }
    // return arr


    // const x = SNAKECOORD.x;
    // const y = SNAKECOORD.y;

    // const coordination = COORD[SNAKECOORD.direction];
//     const coordination = COORD[0];

    coordination.forEach(element => {
        const a = element[1] + x;
        const b = element[0] + y;

        const target = gameBoard.childNodes[b] ? gameBoard.childNodes[b].childNodes[0].childNodes[a] : null;
        if (!target) {
            console.log('target', target);
            showGameOver();
            return false;
        }

        target.classList.add('snake');
        // console.log('target', target);
    });
}

console.log(COORD);

function movingSnake(direction) {
    // clearInterval(Interval);
    // console.log('interval', interval);
    // SNAKECOORD.direction = direction;
    // Interval = setInterval(() => {
    //     moveSnake(direction);
    // }, 500);
}


function moveSnake(direction) {
    console.log('movesnake', direction);
    // SNAKECOORD[k] += n;
    renderSnake();
}

function showGameOver() {
    gameText.style.display = "flex";
}

// 뱀의 머리가 배열 coord의 맨 왼쪽이 기준, 오른쪽 방향 불가능
// 서 / 북 / 남 쪽 이동 가능

document.addEventListener('keydown', function(event) {
    // if (event.code === 'ArrowRight') {
    //     movingSnake('x', 1, 0);
    // } else 
    // [y, x]
    if (event.code === 'ArrowLeft') {
        // movingSnake([0, -1]);
        renderSnake([0, -1])
    } else if (event.code === 'ArrowDown') {
        // movingSnake([1, 0]);
        renderSnake([1, 0])
    } else if (event.code === 'ArrowUp') {
        // movingSnake([[-1, 0]]);
        renderSnake([-1, 0])
    } else {
        return false;
    }
});

restartButton.addEventListener('click', function() {
    gameBoard.innerHTML = "";
    gameText.style.display = "none";
    init();
});
