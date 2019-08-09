const assert = require('assert');
const https = require('https');
const Sudoku = require('../sudoku-solver.js');

const get = (url) => {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        resolve(JSON.parse(data));
      })
    })

    req.on('error', (e) => {
      reject(e);
    });
  });
}

const post = (url, data) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    };
    var req = https.request(url, options, function(res) {
      const buffers = [];
      res.on('data', buffer => buffers.push(buffer))
      res.on('end', () => {
        resolve(JSON.parse(buffers.join()));
      });
    });
    req.on('error', function(e) {
      reject(e);
    });
    req.write(`board=${JSON.stringify(data)}`);
    req.end();
  });
}

describe('Sudoku Solver', function() {
  describe('#solve', () => {
    it('should solve sudoku ', function() {
      const puzzle = [
        [5,3,0,0,7,0,0,0,0],
        [6,0,0,1,9,5,0,0,0],
        [0,9,8,0,0,0,0,6,0],
        [8,0,0,0,6,0,0,0,3],
        [4,0,0,8,0,3,0,0,1],
        [7,0,0,0,2,0,0,0,6],
        [0,6,0,0,0,0,2,8,0],
        [0,0,0,4,1,9,0,0,5],
        [0,0,0,0,8,0,0,7,9]
      ];

      const solution = [
        [5,3,4,6,7,8,9,1,2],
        [6,7,2,1,9,5,3,4,8],
        [1,9,8,3,4,2,5,6,7],
        [8,5,9,7,6,1,4,2,3],
        [4,2,6,8,5,3,7,9,1],
        [7,1,3,9,2,4,8,5,6],
        [9,6,1,5,3,7,2,8,4],
        [2,8,7,4,1,9,6,3,5],
        [3,4,5,2,8,6,1,7,9]
      ];

      assert.deepEqual(Sudoku.solve(puzzle), solution);
    });

    it('should solve easy sudoku from sugoku.herokuapp.com', async function() {
        this.timeout(5000);
        const { board }  = await get('https://sugoku.herokuapp.com/board?difficulty=easy');
        const { status }  = await post('https://sugoku.herokuapp.com/validate', Sudoku.solve(board));
        assert.ok(status === 'solved');
    });

    it('should solve medium sudoku from sugoku.herokuapp.com', async function() {
      this.timeout(5000);
      const { board }  = await get('https://sugoku.herokuapp.com/board?difficulty=medium');
      const { status }  = await post('https://sugoku.herokuapp.com/validate', Sudoku.solve(board));
      assert.ok(status === 'solved');
  });

  it('should solve hard sudoku from sugoku.herokuapp.com', async function() {
    this.timeout(5000);
    const { board }  = await get('https://sugoku.herokuapp.com/board?difficulty=hard');
    const { status }  = await post('https://sugoku.herokuapp.com/validate', Sudoku.solve(board));
    assert.ok(status === 'solved');
});
  });
})
