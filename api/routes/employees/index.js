const { Router } = require("express");
const router = Router();

const {
  getEmployees,
  insertEmployee,
  updateEmployees,
  deleteEmployees,
} = require("../../controller/employees");

router.get("/", getEmployees);
router.post("/", insertEmployee);
router.patch("/:id", updateEmployees);
router.delete("/:id", deleteEmployees);

module.exports = router;
