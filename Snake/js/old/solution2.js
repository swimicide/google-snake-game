// https://www.google.com/search?si=ACC90nwm_DCLUGduakF5oU94y1HpDc2j-V_TsJpED11KWNYygOhydoKqqSH9t8iyybygqTEoKMZa&biw=977&bih=645&dpr=1

// 1. 보드판 규격
// 15x17

// 2. 뱀 그리기

// 3. 뱀 움직이기

const gameBoard = document.querySelector('.gameBoard > ul');

const GAME_COLS = 17;
const GAME_ROWS = 15;


const COORD = [
    [7, 0], [7, 1], [7, 2], [7, 3]
];

const SNAKECOORD = {
    y: 0,
    x: 0,
    type: 0,
    direction: 0,
    top: 0,
    left: 0
};

let TempSnakeCoord = null;

init();

function init() {
    TempSnakeCoord = {...SNAKECOORD};
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



function renderSnake() {

    const a = SNAKECOORD.x;
    const b = SNAKECOORD.y;

    console.log('a, b', a, b);

    COORD.forEach(element => {
        const x = element[1] + a;
        const y = element[0] + b;
        const target = gameBoard.childNodes[y].childNodes[0].childNodes[x];

        if (!target) {
            return false;
        }

        console.log(x, y, target);
        target.classList.add('snake');
    });
}


function moveSnake(direction, n) {
    SNAKECOORD[direction] += n;
    // TempSnakeCoord = {...SNAKECOORD};
    // console.log(TempSnakeCoord, SNAKECOORD);
    renderSnake();
}


document.addEventListener('keydown', function(event) {
    
    if (event.key === 'ArrowRight') {
        moveSnake('x', 1);
    } else if (event.key === 'ArrowLeft') {
        moveSnake('x', -1);
    } else if (event.key === 'ArrowDown') {
        moveSnake('y', 1);
    } else if (event.key === 'ArrowUp') {
        moveSnake('y', -1);
    } else {
        return false;
    }
});
