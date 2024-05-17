// https://www.google.com/search?si=ACC90nwm_DCLUGduakF5oU94y1HpDc2j-V_TsJpED11KWNYygOhydoKqqSH9t8iyybygqTEoKMZa&biw=977&bih=645&dpr=1

// 1. 보드판 규격
// 15x17

// 2. 뱀 그리기


const gameBoard = document.querySelector('.gameBoard > ul');

const GAME_COLS = 17;
const GAME_ROWS = 15;


const COORD = [
    [7, 0], [7, 1], [7, 2], [7, 3]
];

const SNAKECOORD = {
    type: 0,
    direction: 0,
    top: 0,
    left: 0
};


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


function renderSnake() {

    COORD.forEach(element => {
        const x = element[1];
        const y = element[0];
        const target = gameBoard.childNodes[y].childNodes[0].childNodes[x];
        console.log(element, target);
        target.classList.add('snake');
    });
}