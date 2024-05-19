var express = require("express");
const {
  addDoctor,
  listDoctor,
  getAllDoctors,
  assignDepartment,
} = require("../services/doctor/doctor.controller");
var router = express.Router();

router.post("/add", addDoctor);

router.post("/list", listDoctor);

router.get("/get-doctors", getAllDoctors);

router.put("/assign-department", assignDepartment);

module.exports = router;
