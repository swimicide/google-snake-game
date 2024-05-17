// https://www.google.com/search?si=ACC90nwm_DCLUGduakF5oU94y1HpDc2j-V_TsJpED11KWNYygOhydoKqqSH9t8iyybygqTEoKMZa&biw=977&bih=645&dpr=1

// 1. 보드판 규격
// 15x17

// 2. 뱀 그리기

// 3. 뱀 움직이기

// 4. 뱀 기준을 머리로

const gameBoard = document.querySelector('.gameBoard > ul');
const gameText = document.querySelector('.container > .game-text');
const restartButton = document.querySelector('.container > .game-text > button');

const GAME_COLS = 17;
const GAME_ROWS = 15;


let coord = 
    [
        [7, 0], [7, 1], [7, 2], [7, 3]
    ];

let Interval = 0;
let TempSnakeCoord = null;

init();

function init() {
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
}

function renderSnake(move=[0, 0]) {
    let temp = [];
    const y = move[0];
    const x = move[1];

    temp.push(...coord[0]);
    coord[0][0] += y;
    coord[0][1] += x;

    for (let i = 1; i < coord.length; i++) {
        const arr_temp = coord[i];
        coord[i] = temp;
        temp = arr_temp;
    }
    console.log('좌표', ...coord);

    coord.forEach(element => {
        const a = 
        const b = 

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

function showGameOver() {
    gameText.style.display = "flex";
}

// 뱀의 머리가 배열 coord의 맨 왼쪽이 기준, 오른쪽 방향 불가능
// 서 / 북 / 남 쪽 이동 가능

document.addEventListener('keydown', function(event) { 
    // [y, x]
    if (event.code === 'ArrowLeft') {
        renderSnake([0, -1])
    } else if (event.code === 'ArrowDown') {
        renderSnake([1, 0])
    } else if (event.code === 'ArrowUp') {
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
