var assert = require('assert');
const {add,sub,div,mul} = require('../app/calculator')
//npm install --save mocha chai
//npm install -g mocha
describe('Unit Testing with Mocha', function () {
    //Addition
    it('add(5,2) expected result 7 PASS', function () {
        assert.equal(add(5, 2), 7);
    });
    it('add(5,2) expected result 8 FAIL', function () {
        assert.equal(add(5, 2), 8);
    });
    //Subtraction
    it('sub(5,2) expected result 3 PASS', function () {
        assert.equal(sub(5, 2), 3);
    });
    it('sub(5,2) expected result 5 FAIL', function () {
        assert.equal(sub(5, 2), 5);
    });
    //Multiplication
    it('mul(5,2) expected result 10 PASS', function () {
        assert.equal(mul(5, 2), 10);
    });
    it('mul(5,2) expected result 12 FAIL', function () {
        assert.equal(mul(5, 2), 12);
    });
    //Division
    it('div(10,2) expected result 5 PASS', function () {
        assert.equal(div(10, 2), 5);
    });
    it('div(10,2) expected result 2 FAIL', function () {
        assert.equal(div(10, 2), 2);
    });
});
