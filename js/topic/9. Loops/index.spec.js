const { expect } = require("chai");
const { whileLoop, doWhileLoop, forLoop, recursion } = require("./index");

describe("Loops suite", () => {
  it("While loop.", async () => {
    const arr = whileLoop();
    expect(arr).which.is.a("Array").eql([5, 4, 3, 2, 1]);
  });

  it("Do-while loop.", async () => {
    const arr = doWhileLoop();
    expect(arr).which.is.a("Array").eql([5, 4, 3, 2, 1]);
  });

  it("For loop.", async () => {
    const str = forLoop();
    expect(str).which.is.a("string").eq("5, 4, 3, 2, 1, 0");
  });

  it("Recursion ([1], 0) = 1.", async () => {
    const sum = recursion([1], 0);
    expect(sum).which.is.a("number").eq(1);
  });

  it("Recursion ([2, 3, 4], 1) = 6.", async () => {
    const sum = recursion([2, 3, 4], 1);
    expect(sum).which.is.a("number").eq(6);
  });

  it("Recursion ([2, 3, 4, 5], 3) = 14.", async () => {
    const sum = recursion([2, 3, 4, 5], 3);
    expect(sum).which.is.a("number").eq(14);
  });
});
