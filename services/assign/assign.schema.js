const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const AssignSchema = new mongoose.Schema({
  doctor: {
    type: ObjectId,
    ref: "doctors",
  },
  patient: {
    type: ObjectId,
    ref: "patients",
  },
  appointment_time: {
    type: String,
  },
});
const AssignModal = mongoose.model("assign", AssignSchema);
module.exports = AssignModal;
