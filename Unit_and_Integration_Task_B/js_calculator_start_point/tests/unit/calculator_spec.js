var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it("can add", function() {
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.strictEqual(calculator.runningTotal, 5);
  })

  it("can subtract", function() {
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it("can multiply", function() {
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15);
  })

  it("can divide", function() {
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it("can click to multiple", function() {
    calculator.numberClick(6);
    calculator.numberClick(2);
    calculator.numberClick(5);
    assert.strictEqual(calculator.runningTotal, 625);
  })

  it("can chain multiple", function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.strictEqual(calculator.runningTotal, 3);
  })

  it("can clear the running total without affecting the calculation", function() {
    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.numberClick(1);
    calculator.numberClick(2);
    calculator.clearClick();
    calculator.numberClick(1);
    calculator.operatorClick('=')
    assert.strictEqual(calculator.runningTotal, 3);
  })

});
