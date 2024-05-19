var express = require("express");
const {
  addDepartment,
  listDepartment,
} = require("../services/department/department.controller");
var router = express.Router();

router.post("/add", addDepartment);

router.post("/list", listDepartment);

module.exports = router;
