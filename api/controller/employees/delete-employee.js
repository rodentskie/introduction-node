const start = require("../../data");

const deleteEmployees = async (req, res) => {
  try {
    const pool = start();
    const { id } = req.params;

    const [checkId] = await pool.query(
      "SELECT COUNT(id) AS result FROM employees WHERE id=?",
      [id]
    );
    const { result: checkIdResult } = checkId[0];
    if (checkIdResult === 0)
      return res.status(400).send("Employee doesn't exist.");

    const [data] = await pool.query("DELETE FROM employees WHERE id=?", [id]);
    const { affectedRows } = data;
    if (affectedRows > 0) return res.sendStatus(204);
    else return res.sendStatus(400);
  } catch (e) {
    console.log(`Error: ${e}`);
    return res.status(400).send("Encountered error on deleting employees.");
  }
};

module.exports = deleteEmployees;
