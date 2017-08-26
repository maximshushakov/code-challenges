const assert = require('assert');
const { List, find } = require('../list-find.js');
const { convert } = require('../base-atlassian.js');

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