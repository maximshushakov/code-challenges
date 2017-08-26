const assert = require('assert');
const { Node, List, find } = require('../list-find.js');

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