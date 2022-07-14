const start = require("../../data");

const insertEmployee = async (req, res) => {
  try {
    const pool = start();
    const { firstName, lastName, age } = req.body;

    if (!firstName) return res.status(400).send("Please enter first name.");
    if (!lastName) return res.status(400).send("Please enter last name.");
    if (age <= 0) return res.status(400).send("Please enter valid age.");

    const [rows] = await pool.query(
      "SELECT COUNT(id) AS result FROM employees WHERE firstName=? AND lastName=?",
      [firstName, lastName]
    );
    const { result } = rows[0];
    if (result > 0) return res.status(400).send("Employee already exist.");

    const [data] = await pool.query(
      "INSERT INTO employees (firstName, lastName, age) VALUES (?,?,?)",
      [firstName, lastName, age]
    );

    const { affectedRows } = data;
    if (affectedRows > 0)
      return res.status(201).send("Employee created successfully.");
    else return res.sendStatus(400);
  } catch (e) {
    console.log(`Error: ${e}`);
    return res.status(400).send("Encountered error on insert.");
  }
};

module.exports = insertEmployee;
