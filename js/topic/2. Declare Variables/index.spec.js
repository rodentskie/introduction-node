const { expect } = require("chai");
const path = require("path");
const fs = require("fs");

const declare = require("./index");

describe("Declare variables test suite", () => {
  it("Declare variables.", async () => {
    const { mySchool, myCourse } = declare();

    const file = path.resolve("topic/2. Declare Variables/index.js");
    const content = await new Promise((resolve, reject) => {
      fs.readFile(file, "utf8", (err, data) => {
        if (err) reject("Error:", err);
        resolve(data);
      });
    });
    const fixContent = content.replace(/\s/g, "");
    expect(fixContent).to.include(
      'constmySchool="HolyTrinityCollegeofGeneralSantosCityInc."'
    );
    expect(fixContent).to.include("letmyCourse;myCourse=");
    expect(mySchool).to.eq("Holy Trinity College of General Santos City Inc.");
    expect(["BSIT", "BSCS", "BSCpE"]).to.contain(myCourse);
  });
});
