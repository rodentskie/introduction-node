const { expect, assert } = require("chai");
const { createStudent, createTransfereeStudent } = require("./index");

describe("Class suite", () => {
  it("Create new student.", async () => {
    const student = createStudent();
    const { name, age, course } = student;
    if (!name) assert.fail("Error no name property.");
    if (!age) assert.fail("Error no age property.");
    if (!course) assert.fail("Error no course property.");

    const hi = student.hi();

    expect(hi)
      .which.is.a("string")
      .eq(
        `Hi my name is ${name}, I'm ${age} years old and taking up ${course}.`
      );
  });
  it("Create new transferee student.", async () => {
    const student = createTransfereeStudent();
    const { name, age, course, oldSchool } = student;
    if (!name) assert.fail("Error no name property.");
    if (!age) assert.fail("Error no age property.");
    if (!course) assert.fail("Error no course property.");
    if (!oldSchool) assert.fail("Error no oldSchool property.");

    const hi = student.hi();
    const from = student.from();

    expect(hi)
      .which.is.a("string")
      .eq(
        `Hi my name is ${name}, I'm ${age} years old and taking up ${course}.`
      );

    expect(from).which.is.a("string").eq(`I'm a transferee from ${oldSchool}.`);
  });
});
