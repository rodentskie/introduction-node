const { expect } = require("chai");
const path = require("path");
const fs = require("fs");
const { singleLineComment } = require("./single");
const { multipleLineComment } = require("./multiple");

describe("Comment test suite", () => {
  it("Should comment single line.", async () => {
    const str = singleLineComment();

    const file = path.resolve("topic/1. Comments/single.js");
    const content = await new Promise((resolve, reject) => {
      fs.readFile(file, "utf8", (err, data) => {
        if (err) reject("Error:", err);
        resolve(data);
      });
    });
    const fixContent = content.replace(/\s/g, "");
    expect(fixContent).to.include('//str="linecomment"');
    expect(str).to.eq("single");
  });

  it("Should comment multiple line.", async () => {
    const str = multipleLineComment();

    const file = path.resolve("topic/1. Comments/multiple.js");
    const content = await new Promise((resolve, reject) => {
      fs.readFile(file, "utf8", (err, data) => {
        if (err) reject("Error:", err);
        resolve(data);
      });
    });
    const fixContent = content.replace(/\s/g, "");

    expect(fixContent).to.include('/*str="line";str="comment";*/');
    expect(str).to.eq("multiple");
  });
});
