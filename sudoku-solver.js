const solve = (puzzle) => {
  const solution = JSON.parse(JSON.stringify(puzzle));

  const check = (value, row, col) => {
    for (let index = 0; index < 9; index++) {
      let r = parseInt(row / 3) * 3, c = parseInt(col / 3) * 3;
      if (
        solution[row][index] === value ||
        solution[index][col] === value ||
        solution[parseInt(index / 3) + r][index % 3 + c] === value) {
        return false
      }
    }
    return true;
  }

  const guess = (row, col, value = 1) => {
    while (!check(value, row, col)) {
      value++;
      if (value > 9) {
        return null;
      }
    }
    return value > 9 ? null : value;
  }

  const next = (i, backtrack = false) => {
    const r = parseInt(i / 9);
    const c = i % 9;

    if (puzzle[r][c] > 0 && !backtrack) {
      solution[r][c] = puzzle[r][c];
      return [i + 1, backtrack];
    }

    if (puzzle[r][c] > 0 && backtrack) {
      return [i - 1, backtrack];
    }

    const cell = guess(r, c, backtrack ? solution[r][c] + 1 : 1);
    if (cell) {
      solution[r][c] = cell;
      backtrack = false;
      return [i + 1, backtrack]
    }

    if (!cell) {
      solution[r][c] = 0;
      backtrack = true;
      return [i - 1, backtrack];
    }
  }

  for (let i = 0, backtrack = false; i < 81; [ i, backtrack ] = next(i, backtrack)) {}

  return solution;
}

module.exports = { solve }
