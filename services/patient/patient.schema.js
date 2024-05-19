const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  contact: {
    type: String,
  },
  diagnosis: {
    type: String,
  },
  allergies: {
    type: String,
  },
  medication: {
    type: String,
  },
});
const PatientModal = mongoose.model("patients", PatientSchema);
module.exports = PatientModal;
