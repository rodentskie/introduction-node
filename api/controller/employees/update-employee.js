const start = require("../../data");

const updateEmployees = async (req, res) => {
  try {
    const pool = start();
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;

    if (!firstName) return res.status(400).send("Please enter first name.");
    if (!lastName) return res.status(400).send("Please enter last name.");
    if (age <= 0) return res.status(400).send("Please enter valid age.");

    const [checkId] = await pool.query(
      "SELECT COUNT(id) AS result FROM employees WHERE id=?",
      [id]
    );
    const { result: checkIdResult } = checkId[0];
    if (checkIdResult === 0)
      return res.status(400).send("Employee doesn't exist.");

    const [data] = await pool.query(
      "SELECT COUNT(id) AS result FROM employees WHERE firstName=? AND id<>? AND lastName=? AND id<>?",
      [firstName, id, lastName, id]
    );
    const { result } = data[0];
    if (result > 0) return res.status(400).send("Employee already exist.");

    const [update] = await pool.query(
      "UPDATE employees SET firstName=?, lastName=?, age=? WHERE id=?",
      [firstName, lastName, age, id]
    );

    const { affectedRows } = update;
    if (affectedRows > 0) return res.sendStatus(204);
    else return res.sendStatus(400);
  } catch (e) {
    console.log(`Error: ${e}`);
    return res.status(400).send("Encountered error on update employees.");
  }
};

module.exports = updateEmployees;
