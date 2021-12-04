import times from 'lodash.times';
const ROW_LENGTH = 5;
const COL_LENGTH = 5;

class BaseLine {
  constructor(fullLength) {
    this.counter = fullLength;
    this.complete = false;
  }

  mark() {
    this.counter--;
    if (this.counter === 0) this.complete = true;
  }
}

class Row extends BaseLine {
  constructor() {
    super(ROW_LENGTH);
  }
}

class Column extends BaseLine {
  constructor() {
    super(COL_LENGTH);
  }
}

class Board {
  constructor() {
    this.unmarked = new Set();
    this.rows = times(COL_LENGTH, () => new Row());
    this.columns = times(ROW_LENGTH, () => new Column());
    this.numToRow = new Map();
    this.numToColumn = new Map();
    this.complete = false;
  }

  addNum(num, rowIndex, colIndex) {
    this.unmarked.add(num);
    this.numToRow.set(num, this.rows[rowIndex]);
    this.numToColumn.set(num, this.columns[colIndex]);
  }

  mark(num) {
    this.unmarked.delete(num);
    let row = this.numToRow.get(num);
    let column = this.numToColumn.get(num);
    row.mark();
    column.mark();
    if (row.complete || column.complete) this.complete = true;
    return this.complete;
  }

  calcScore(lastNum) {
    return [...this.unmarked].reduce((a, b) => a + b) * lastNum;
  }
}

class Game {
  constructor() {
    this.boards = [];
    this.numToBoards = new Map();
  }

  addBoard() {
    this.boards.push(new Board());
  }

  addNum(num, rowIndex, colIndex) {
    this.latestBoard.addNum(num, rowIndex, colIndex);
    if (!this.numToBoards.has(num))
      this.numToBoards.set(num, [this.latestBoard]);
    else this.numToBoards.get(num).push(this.latestBoard);
  }

  get latestBoard() {
    return this.boards.at(-1);
  }

  mark(num) {
    let boards = this.numToBoards.get(num);
    if (!boards || boards.length === 0) return null;
    let firstBoard;
    for (let i = 0; i < boards.length; i++) {
      if (!boards[i].complete && boards[i].mark(num) && !firstBoard)
        firstBoard = boards[i];
    }
    return firstBoard;
  }
}

export function part1(input) {
  let game = new Game();
  let split = input.split('\n');
  const drawNums = split
    .shift()
    .split(',')
    .map(x => +x);
  let rowIndex = 0;
  split.forEach(line => {
    if (line === '') {
      game.addBoard();
      rowIndex = 0;
    } else {
      line
        .split(/ +/)
        .filter(x => x.length > 0)
        .map(x => +x)
        .forEach((num, colIndex) => {
          game.addNum(num, rowIndex, colIndex);
        });
      rowIndex++;
    }
  });
  for (let i = 0; i < drawNums.length; i++) {
    let winner = game.mark(drawNums[i]);
    if (winner) return winner.calcScore(drawNums[i]);
  }
}

function allBoardWon(game) {
  return game.boards.filter(b => !b.complete).length === 0;
}

export function part2(input) {
  let game = new Game();
  let split = input.split('\n');
  const drawNums = split
    .shift()
    .split(',')
    .map(x => +x);
  let rowIndex = 0;
  split.forEach(line => {
    if (line === '') {
      game.addBoard();
      rowIndex = 0;
    } else {
      line
        .split(/ +/)
        .filter(x => x.length > 0)
        .map(x => +x)
        .forEach((num, colIndex) => {
          game.addNum(num, rowIndex, colIndex);
        });
      rowIndex++;
    }
  });
  for (let i = 0; i < drawNums.length; i++) {
    let winner = game.mark(drawNums[i]);
    if (winner && allBoardWon(game)) return winner.calcScore(drawNums[i]);
  }
}
