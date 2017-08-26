const assert = require('assert');
const { List, find } = require('../find-in-list.js');
const { convert } = require('../base-atlassian.js');
const { lookAndSay } = require('../look-and-say.js');
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
    it('should return `111221` for 1211', function() {
      assert.equal(lookAndSay(1211), '111221');
    });
    it('should return `312211` for 111221', function() {
      assert.equal(lookAndSay(111221), '312211');
    });
    it('should return `1211` for 11, n=2', function() {
      assert.equal(lookAndSay(11, 2), '1211');
    });
    it('should return `22` for 22, n=100', function() {
      assert.equal(lookAndSay(22, 100), '22');
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