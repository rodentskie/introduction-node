const { expect, assert } = require("chai");

const { add, subtract, multiply, division, remainder } = require("./index");

describe("Arithmetic test suite", () => {
  it("Add.", async () => {
    const { sum } = add(5, 4, 1);
    if (!sum) assert.fail("Error on add function test.");
    expect(sum).to.eq(10);
  });

  it("Subtract.", async () => {
    const { diff } = subtract(5, 4);
    if (!diff) assert.fail("Error on subtract function test.");
    expect(diff).to.eq(1);
  });

  it("Multiply.", async () => {
    const { product } = multiply(5, 4);
    if (!product) assert.fail("Error on multiply function test.");
    expect(product).to.eq(20);
  });

  it("Division.", async () => {
    const { quotient } = division(36, 4);
    if (!quotient) assert.fail("Error on division function test.");
    expect(quotient).to.eq(9);
  });

  it("Remainder.", async () => {
    const { result } = remainder(38, 4);
    if (!result) assert.fail("Error on remainder function test.");
    expect(result).to.eq(2);
  });
});
