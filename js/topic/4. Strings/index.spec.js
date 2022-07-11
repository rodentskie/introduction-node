const { expect } = require("chai");
const { escapingQuotes, concatString, stringLength } = require("./index");

describe("String suite", () => {
  it("Escaping quotes.", async () => {
    const str = escapingQuotes();
    expect(str).to.eq('I am taking my "college" at "Holy Trinity College"');
  });
  it("Concatenating strings.", async () => {
    const str = concatString();
    expect(str).to.eq(
      "Good day, today is Friday and I love programming JavaScript."
    );
  });
  it("Length of string.", async () => {
    const len = stringLength();
    expect(len).to.eq(26).which.is.a("number");
  });
});
