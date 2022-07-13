class Student {
  constructor(data) {
    this.name = data.name;
    this.age = data.age;
    this.course = data.course;
  }

  hi() {
    return `Hi my name is ${this.name}, I'm ${this.age} years old and taking up ${this.course}.`;
  }
}

class TransferStudent extends Student {
  constructor(data) {
    super(data);
    this.oldSchool = data.oldSchool;
  }

  from() {
    return `I'm a transferee from ${this.oldSchool}.`;
  }
}

const createStudent = () => {
  // create a new Student using the Student class

  const data = {
    name: "Rodney",
    age: 27,
    course: "BSCpE",
  }; // change this line

  // do not change code below this line
  const student = new Student(data);
  return student;
};

const createTransfereeStudent = () => {
  // create a new Student using the Student class

  const data = {
    name: "Rodney",
    age: 27,
    course: "BSCpE",
    oldSchool: "MSU",
  }; // change this line

  // do not change code below this line
  const student = new TransferStudent(data);
  return student;
};

module.exports = {
  createStudent,
  createTransfereeStudent,
};
