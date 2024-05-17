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

const duration = 100;

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
    // console.log(gameBoard);
    generateVegetable();
    renderSnake();
}

function renderSnake(move=[], direction='') {

    let count = 0;
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
        if (!target) {
            // console.log('gameOver');
            showGameOver();
            return false;
        }
        
        if (target.classList.contains('vegetable')) {
            target.classList.remove('vegetable');
            generateVegetable();

            addSnake(move, direction);
            count += 1;
        }

        if (isCollision()) {
            showGameOver();
            return false;    
        }

        target.classList.add('snake');
    }

    let temp = [];
    temp.push(...coord[0]);
    
    for (let i = 0; i < setCoord.length; i++) {

        const y = setCoord[i][0];
        const x = setCoord[i][1];

        const a = temp[0] + y;
        const b = temp[1] + x;

        const target = gameBoard.childNodes[a] ? gameBoard.childNodes[a].childNodes[0].childNodes[b] : null;

        if (!target) {
            continue;
        }

        if (target.classList.contains('snake')) {
            result[i] += 1;
        }
    }
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
    for (let i = 1; i < coord.length; i++) {
        if (f(coord[0], coord[i])) {
            return true;
        }
    }
    return false;
}

function generateVegetable() {
    const x = Math.floor(Math.random() * GAME_COLS);
    const y = Math.floor(Math.random() * GAME_ROWS);
    
    const target = gameBoard.childNodes[y].childNodes[0].childNodes[x];

    target.classList.add('vegetable');
}

function addSnake() {
    let temp = [];
    temp.push(...coord[coord.length - 1]);
    coord.push(temp);
}

function name(params) {
    
}

function runGame(n, direction) {
    // 디버깅 시 interval 뺴고 코드 실행
    clearInterval(Interval);
    Interval = setInterval(() => {
        renderSnake(n, direction);
    }, duration);
    // renderSnake(n, direction);
    
    // for (let i = 0; i < coord.length; i++) {
    //     console.log(JSON.stringify(coord[i]));
    // }
    // console.log('좌표', coord);
}

function showGameOver() {
    clearInterval(Interval);
    gameText.style.display = "flex";
}

// 뱀의 머리가 배열 coord의 맨 왼쪽이 기준, 오른쪽 방향 불가능
// 서 / 북 / 남 쪽 이동 가능

document.addEventListener('keydown', function(event) { 
    // [y, x]
    if (event.code === 'ArrowRight') {
        if (result[0]) {
            return false;
        }
        runGame([0, 1], 'right');
    } 
    else if (event.code === 'ArrowLeft') {
        if (result[1]) {
            return false;
        }
        runGame([0, -1], 'left');
    } 
    else if (event.code === 'ArrowDown') {
        if (result[2]) {
            return false;
        }
        runGame([1, 0], 'down')
    } 
    else if (event.code === 'ArrowUp') {
        if (result[3]) {
            return false;
        }
        runGame([-1, 0], 'up');
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
