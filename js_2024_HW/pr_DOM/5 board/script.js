/**
 * Завдання 4.
 *
 * Написати функцію fillChessBoard, яка розгорне «шахівницю» 8 на 8.
 *
 * Колір темних осередків - #161619.
 * Колір світлих осередків - #FFFFFF.
 * Інші стилі CSS для дошки та осередків готові.
 *
 * Дошку необхідно розгорнути всередині елемента з класом .board.
 *
 * Кожна комірка дошки представляє елемент div із класом .cell.
 * 
 *  <div class="board">
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      <div class="cell"></div>
      ...
    </div>
 */

/* Дано */
const LIGHT_CELL = '#ffffff';
const DARK_CELL = '#161619';
const V_CELLS = 8;
const H_CELLS = 8;

const board = document.createElement('div');
board.className = 'board';


for (let j = 1; j <= 4; j++) {

    for (let i = 1; i <= 4; i++) {
        board.insertAdjacentHTML('beforeend', `
        <div class="cell light-cell"></div>
        <div class="cell dark-cell"></div>`);
    }

    for (let i = 1; i <= 4; i++) {
        board.insertAdjacentHTML('beforeend', `
        <div class="cell dark-cell"></div>
        <div class="cell light-cell"></div>
        `); 
    }
}

document.body.append(board);



// const tagBody = document.querySelector('body');
// console.log(tagBody);
// const divBoard = document.createElement('div');
// divBoard.classList.add('board');
// tagBody.append(divBoard);

// const divCell = document.createElement('div');

// divBoard.insertAdjacentHTML('beforeend', `
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
//   <div class="cell light-cell"> </div>
//   <div class="cell dark-cell"> </div>
// `);