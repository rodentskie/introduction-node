const { expect } = require("chai");
const { ifElse, switchCondition, ternary } = require("./index");

describe("Conditions suite", () => {
  it("If else statement.", async () => {
    const first = ifElse(4, 6);
    expect(first).which.is.a("number").eq(4);

    const second = ifElse(8, 7);
    expect(second).which.is.a("number").eq(1);

    const third = ifElse(8, 8);
    expect(third).which.is.a("number").eq(16);
  });

  it("Switch statement.", async () => {
    const first = switchCondition(4);
    expect(first).which.is.a("string").eq("X");

    const second = switchCondition(11);
    expect(second).which.is.a("string").eq("Y");

    const thrid = switchCondition(21);
    expect(thrid).which.is.a("string").eq("Z");
  });

  it("Ternary statement.", async () => {
    const first = ternary(4, 6);
    expect(first).which.is.a("number").eq(4);

    const second = ternary(8, 7);
    expect(second).which.is.a("number").eq(1);

    const third = ternary(8, 8);
    expect(third).which.is.a("number").eq(16);
  });
});
