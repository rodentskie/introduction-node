const start = require("../../data");

const getEmployees = async (req, res) => {
  try {
    const pool = start();
    const [data] = await pool.query("SELECT * FROM employees;");

    return res.status(200).send(data);
  } catch (e) {
    console.log(`Error: ${e}`);
    return res.status(400).send("Encountered error on getting employees.");
  }
};

module.exports = getEmployees;
