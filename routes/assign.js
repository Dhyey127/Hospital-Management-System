var express = require("express");
const {
  assignPatient,
  getPatientListForDoctor,
  reassignPatient,
  appointmentRecord,
} = require("../services/assign/assign.controller");
var router = express.Router();

router.post("/", assignPatient);

router.post("/patient-list", getPatientListForDoctor);

router.post("/appointment-record", appointmentRecord);

router.put("/reassign/:id", reassignPatient);

module.exports = router;
