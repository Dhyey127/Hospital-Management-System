var express = require("express");
const {
  addPatient,
  listPatient,
  getAllPatients,
} = require("../services/patient/patient.controller");
var router = express.Router();

router.post("/add", addPatient);

router.post("/list", listPatient);

router.get("/get-patients", getAllPatients);

module.exports = router;
