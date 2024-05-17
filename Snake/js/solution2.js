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

// 우, 좌, 하, 상
let result = [0, 0, 0, 0];
let coord = [[7, 11], [7, 12], [7, 13], [7, 14]];
let setCoord = [[0, 1], [0, -1], [1, 0], [-1, 0]];


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
    console.log(gameBoard);
    renderSnake();
}

function renderSnake(move=[]) {

    result = [0, 0, 0, 0];

    const cls = document.querySelectorAll('.snake');

    cls.forEach(element => {
        element.classList.remove('snake');
    });

    if (move.length > 0) {
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
    }

    for (let i = 0; i < coord.length; i++) {
        const coordination = coord[i];
        const y = coordination[0];
        const x = coordination[1];

        const target = gameBoard.childNodes[y] ? gameBoard.childNodes[y].childNodes[0].childNodes[x] : null;
        console.log('target', target);
        if (!target) {
            showGameOver();
            console.log('false');
            return false;
        }
        console.log('-----');
        target.classList.add('snake');
    }

    let temp = [];
    temp.push(...coord[0]);

    
    for (let i = 0; i < setCoord.length; i++) {
        console.log('대가리', temp);
        console.log('우, 좌, 하, 상', setCoord[i]);

        const y = setCoord[i][0];
        const x = setCoord[i][1];

        const a = temp[0] + y;
        const b = temp[1] + x;

        const target = gameBoard.childNodes[a] ? gameBoard.childNodes[a].childNodes[0].childNodes[b] : null;

        console.log('타겟', target, target.classList);

        if (target.classList.contains('snake')) {
            result[i] += 1;
        }
    }
    console.log('결과', result);
}

function showGameOver() {
    gameText.style.display = "flex";
}

// 뱀의 머리가 배열 coord의 맨 왼쪽이 기준, 오른쪽 방향 불가능
// 서 / 북 / 남 쪽 이동 가능

document.addEventListener('keydown', function(event) { 
    // [y, x]
    if (event.code === 'ArrowRight') {
        if (result[0]) {
            console.log('result[0]', result[0]);
            return false;
        }
        renderSnake([0, 1]);
    } 
    else if (event.code === 'ArrowLeft') {
        if (result[1]) {
            console.log('result[1]', result[1]);
            return false;
        }
        renderSnake([0, -1]);
    
    } 
    else if (event.code === 'ArrowDown') {
        if (result[2]) {
            console.log('result[2]', result[2]);
            return false;
        }
        renderSnake([1, 0]);
    } 
    else if (event.code === 'ArrowUp') {
        if (result[3]) {
            console.log('result[3]', result[3]);
            return false;
        }
        renderSnake([-1, 0]);
    }
    else {
        return false;
    }
});

restartButton.addEventListener('click', function() {
    gameBoard.innerHTML = "";
    gameText.style.display = "none";
    init();
});
