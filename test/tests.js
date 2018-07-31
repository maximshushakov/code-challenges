const assert = require('assert');
const { List, find } = require('../find-in-list.js');
const { convert } = require('../base-atlassian.js');
const { lookAndSay } = require('../look-and-say.js');
const { classify, mean, kmeans } = require('../k-means.js');
const { brainfk } = require('../brainf**k.js');
const { GeneticAlgorithm } = require('../genetic-algorithm.js');
require('../base64-encoding.js');

describe('Find in a list', function() {
  describe('#find', function() {
    it('should return 1 for List(1,2,3), List(2,3)', function() {
      assert.equal(find(List(1,2,3), List(2,3)), 1);
    });
    it('should return -1 for List(1,2,3), List(3,2)', function() {
      assert.equal(find(List(1,2,3), List(3,2)), -1);
    });
    it('should return 4 for List(1,2,3,1,3,2), List(3,2)', function() {
      assert.equal(find(List(1,2,3,1,3,2), List(3,2)), 4);
    });
  });
})

describe('Base Atlassian', function() {
  describe('#convert', function() {
    it('should return `a0` for 7', function() {
      assert.equal(convert(7), 'a0');
    });
    it('should return `atlassian` for 7792875', function() {
      assert.equal(convert(7792875), 'atlassian');
    });
    it('should return `sansalita` for 24659559', function() {
      assert.equal(convert(24659559), 'sansalita');
    });
  });
})

describe('Look And Say', function() {
  describe('#lookAndSay', function() {
    it('should return null for empty', function() {
      assert.equal(lookAndSay(), null);
    });
    it('should return `111221` for 1211', function() {
      assert.equal(lookAndSay(1211), '111221');
    });
    it('should return `312211` for 111221', function() {
      assert.equal(lookAndSay(111221), '312211');
    });
    it('should return null for n=0', function() {
      assert.equal(lookAndSay('22', 0), null);
    });
    it('should return `1211` for 11, n=2', function() {
      assert.equal(lookAndSay(11, 2), '1211');
    });
    it('should return `1` for 1211, n=3', function() {
      assert.equal(lookAndSay(11, 2), '1211');
    });
    it('should return `22` for 22, n=100', function() {
      assert.equal(lookAndSay(22, 100), '22');
    });
    it('should return `22` for 22, n=10000000', function() {
      assert.equal(lookAndSay(22, 10000000), '22');
    });
  });
})

describe('Base64 Encoding', function() {
  describe('#toBase64', function() {
    it('should return `Zg==` for `f`', function() {
      assert.equal('f'.toBase64(), 'Zg==');
    });
    it('should return `Zm8=` for `fo`', function() {
      assert.equal('fo'.toBase64(), 'Zm8=');
    });
    it('should return `Zm9v` for `foo`', function() {
      assert.equal('foo'.toBase64(), 'Zm9v');
    });
    it('should return `dGhpcyBpcyBhIHN0cmluZw==` for `this is a string`', function() {
      assert.equal('this is a string'.toBase64(), 'dGhpcyBpcyBhIHN0cmluZw==');
    });
  });

  describe('#fromBase64', function() {
    it('should return `f` for `Zg==`', function() {
      assert.equal('Zg=='.fromBase64(), 'f');
    });
    it('should return `fo` for `Zm8=`', function() {
      assert.equal('Zm8='.fromBase64(), 'fo');
    });
    it('should return `foo` for `Zm9v`', function() {
      assert.equal('Zm9v'.fromBase64(), 'foo');
    });
    it('should return `this is a string` for `dGhpcyBpcyBhIHN0cmluZw==`', function() {
      assert.equal('dGhpcyBpcyBhIHN0cmluZw=='.fromBase64(), 'this is a string');
    });
  });
})

describe('K-means', function() {
  describe('#mean', function() {
    it('should return 1.5 for 1,2,2,1', function() {
      assert.equal(mean([1,2,2,1]), 1.5);
    });
    it('should return 0 for -1, 1, 0', function() {
      assert.equal(mean([-1,1,0]), 0);
    });
    it('should return null for empty items', function() {
      assert.equal(mean([]), null);
    });
  });

  describe('#classify', function() {
    it('should return [1,1],[3],[] for 1,3,1 and centroids 1,2,5', function() {
      assert.deepEqual(classify([1,3,1], [1,2,5]), [[1,1],[3],[]]);
    });
    it('should return [1,3,1],[] for 1,3,1 and centroids 3,7', function() {
      assert.deepEqual(classify([1,3,1], [3,7]), [[1,3,1],[]]);
    });
    it('should return [],[] for empty items and two any centroids', function() {
      assert.deepEqual(classify([], [0,0]), [[],[]]);
    });
  });

  describe('#kmeans', function() {
    it('should create 3 clusters per 10 items in each cluster from groups: (0-9, 100-999, 1000-9999)', function() {
      let data = [], clusters = [];
      data = Array.from({ length: 10 }).map(() => parseInt(Math.random() * 10)).concat(data);
      data = Array.from({ length: 10 }).map(() => parseInt(Math.random() * 100 + 100)).concat(data);
      data = Array.from({ length: 10 }).map(() => parseInt(Math.random() * 1000 + 1000)).concat(data);
      clusters = kmeans(data, [1,2,3]).clusters;
      assert.deepEqual([clusters[0].length, clusters[1].length, clusters[2].length], [10,10,10]);
    });
    it('should create 3 clusters (0-5, 10-13, 20-23) from 0,1,2,3,4,5,10,11,12,13,20,21,22,23', function() {
      assert.deepEqual(kmeans([0,1,2,3,4,5,10,11,12,13,20,21,22,23], [1,2,3]).clusters, [[0,1,2,3,4,5],[10,11,12,13],[20,21,22,23]])
    });
  });
})

describe('Brainf**k', function() {
  describe('#brainfk', function() {
    it('should return "Hello World!"', function() {
      const code = '++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.';
      assert.equal(brainfk(code), 'Hello World!');
    });
    it('should return CharCode(72) (multiply 8 and 9)', function() {
      assert.equal(brainfk(',>,<[>[->+>+<<]>>[-<<+>>]<<<-]>>.', String.fromCharCode(8,9)), String.fromCharCode(72));
    })
  });
})

describe('Genetic Algorithm', function() {
  describe('#GeneticAlgorithm:run', function() {
    const fitness = (original) => {
      return (chromosome) => {
        chromosome = chromosome.split('');
        let sum = 0;
        chromosome.forEach((bit, index) => {
          if (bit === original[index]) sum++
        });
        return sum / original.length;
      }
    }

    it('should return "101010101010101"', function() {
      assert.equal(new GeneticAlgorithm().run(fitness('101010101010101'), 15, .6, .002), '101010101010101');
    });

    it('should return random 24 bit string', function() {
      const ga = new GeneticAlgorithm();
      const random = ga.generate(24);
      assert.equal(ga.run(fitness(random), 24, .6, .002, 200), random);
    });
  });
})
