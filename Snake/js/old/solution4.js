// https://www.google.com/search?si=ACC90nwm_DCLUGduakF5oU94y1HpDc2j-V_TsJpED11KWNYygOhydoKqqSH9t8iyybygqTEoKMZa&biw=977&bih=645&dpr=1

// 1. 보드판 규격
// 15x17

// 2. 뱀 그리기

// 3. 뱀 움직이기

const gameBoard = document.querySelector('.gameBoard > ul');

const GAME_COLS = 17;
const GAME_ROWS = 15;


const COORD = [
    // 전진 후진은 오른쪽 기준
    [   // 전진
        [7, 0], [7, 1], [7, 2], [7, 3]
    ],

    [   // 상승
        [4, 0], [5, 0], [6, 0], [7, 0]
    ],

    [   // 후진
        [7, 0], [7, -1], [7, -2], [7, -3]
    ],

    [   // 하강
        [7, 0], [8, 0], [9, 0], [10, 0]
    ]
];


const SNAKECOORD = {
    y: 0,
    x: 0,
    direction: 0
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
    renderSnake();
}



function renderSnake() {

    const cls = document.querySelectorAll('.snake');

    cls.forEach(element => {
        element.classList.remove('snake');
    });

    const x = SNAKECOORD.x;
    const y = SNAKECOORD.y;
    console.log('방향', SNAKECOORD.direction);
    // console.log(temp[SNAKECOORD.direction]);

    const coordination = COORD[SNAKECOORD.direction];

    // const Sdirection = COORD[SNAKECOORD.direction];
    // console.log(Sdirection);
    // const {x, y} = SNAKECOORD;


    coordination.forEach(element => {
        const a = element[1] + x;
        const b = element[0] + y;

        console.log('a, b', a, b);

        const target = gameBoard.childNodes[b] ? gameBoard.childNodes[b].childNodes[0].childNodes[a] : null;
        console.log('태그', target);
        if (!target) {
            return false;
        }

        target.classList.add('snake');
    });
}

function moveSnake(direction, n) {
    // TempSnakeCoord[]
    SNAKECOORD[direction] += n;
    renderSnake();
    // TempSnakeCoord = {...SNAKECOORD};
    // console.log(TempSnakeCoord, SNAKECOORD);
}

function changeDirection() {
    SNAKECOORD.direction > 2 ? SNAKECOORD.direction = 0 : SNAKECOORD.direction += 1;
    renderSnake();
}

document.addEventListener('keydown', function(event) {

    if (event.code === 'ArrowRight') {
        moveSnake('x', 1);
    } else if (event.code === 'ArrowLeft') {
        moveSnake('x', -1);
    } else if (event.code === 'ArrowDown') {
        moveSnake('y', 1);
    } else if (event.code === 'ArrowUp') {
        moveSnake('y', -1);
    } else if (event.code === 'Space') {
        changeDirection();
    } else {
        return false;
    }
});
